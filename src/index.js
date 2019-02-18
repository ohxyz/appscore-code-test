import React from 'react';
import ReactDOM from 'react-dom';
import { EarthquakeList } from './earthquake-list/earthquake-list.js';
import { promiseGetEarthquakeMap } from './earthquake-map/earthquake-map.js';
import { getEarthquakes } from './services/earthquake.js';
import { Earthquake } from './models/earthquake.js';
import { Storage } from './storage';
import './styles/index.less';

class App {

    constructor() {

        this.earthquakeSource = (
            'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
        );

        this.earthquakeList = ReactDOM.render(

            <EarthquakeList />,
            document.getElementById( 'earthquake-list' )
        );

        this.promiseGetEarthquakeMap = promiseGetEarthquakeMap;
    }

    promiseFetchEarthquakes( url ) {

        return getEarthquakes( url );
    }

    init() {

        let storage = new Storage();

        this.promiseFetchEarthquakes( this.earthquakeSource )
            .then( earthquakes => {

                storage.store( 'earthquakes', earthquakes );
                this.earthquakeList.updateList( earthquakes );

            } )

        this.promiseGetEarthquakeMap().then( map => { 

            map.createMap();

            storage.promiseGetData( 'earthquakes' )
                   .then( earthquakes => { 

                       map.addLocations( earthquakes );

                   } )
                   .catch( errorMessage => { 

                       throw new Error( errorMessage );

                   } );
        } );
    }
}

let app = new App();

app.init();

