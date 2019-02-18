import React from 'react';
import ReactDOM from 'react-dom';
import { EarthquakeList } from './earthquake-list/earthquake-list.js';
import { promiseGetMapModule } from './earthquake-map/earthquake-map.js';
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

            <EarthquakeList onRowClick={ this.handleRowClick } />,
            document.getElementById( 'earthquake-list' )
        );
    }

    handleRowClick( object ) {

        let point = [ object.longitude, object.latitude ];

        promiseGetMapModule().then( module => module.setCenter( point ) )
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

        promiseGetMapModule().then( module => { 

            storage.promiseGetData( 'earthquakes' )
                   .then( earthquakes => { 

                       module.addLocations( earthquakes );

                   } )
                   .catch( errorMessage => { 

                       throw new Error( errorMessage );

                   } );
        } );
    }
}

let app = new App();

app.init();

