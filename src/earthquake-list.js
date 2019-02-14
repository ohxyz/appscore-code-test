import React from 'react';
import { List } from './list.js';
import { getEarthquakes } from './service.js';
import '@ohxyz/grid/style/default.css';

class EarthquakeList extends React.Component {

    constructor( props ) {

        super( props )

        this.url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

        this.state = {

            earthquakes: []
        };

        this.getAllEarthquakes();
    }

    getAllEarthquakes() {

        getEarthquakes( this.url )
            .then( earthquakes => { 

                this.setState( { earthquakes: earthquakes } )
            } )
    }

    render() {

        if ( Array.isArray( this.state.earthquakes) && this.state.earthquakes.length === 0 ) {

            return 'Loading...';
        }

        let columnRefs = [

            { prop: 'location', name: 'Location' },
            { prop: 'datetime', name: 'Datetime' },
            { prop: 'longitude', name: 'Logitude' },
            { prop: 'latitude', name: 'Latitude' },
            { prop: 'depth', name: 'Depth' },
            { prop: 'magnitude', name: 'Magnitude' },
            { prop: 'tsunami', name: 'Tsunami' },

        ];

        return (
                <List items={ this.state.earthquakes } cols={ columnRefs } />
        );
    }
}

export { EarthquakeList }