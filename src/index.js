import React from 'react';
import ReactDOM from 'react-dom';
import { EarthquakeList } from './list/earthquake-list.js';
import { promiseGetEarthquakeMap } from './map/arcgis.js';
import { getEarthquakes } from './services/earthquake.js';
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

    promiseFetch( url ) {

        return getEarthquakes( url );
    }

    init() {

        this.promiseFetch( this.earthquakeSource )
            .then( earthquakes => {

               this.earthquakeList.updateList( earthquakes ) 

            } );

        this.promiseGetEarthquakeMap().then( map => map.init() );
    }
}

let app = new App();
app.init();

