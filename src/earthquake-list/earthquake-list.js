import React from 'react';
import { List } from './list.js';
import '@ohxyz/grid/style/default.css';

class EarthquakeList extends React.Component {

    constructor( props ) {

        super( props )

        this.state = {

            earthquakes: []
        };
    }

    updateList( earthquakes ) {

        this.setState( { earthquakes: earthquakes } );
    }

    render() {

        if ( Array.isArray( this.state.earthquakes) && this.state.earthquakes.length === 0 ) {

            return 'Loading...';
        }

        let columnDefs = [

            { prop: 'location', name: 'Location' },
            { prop: 'datetime', name: 'Datetime' },
            { prop: 'longitude', name: 'Logitude' },
            { prop: 'latitude', name: 'Latitude' },
            { prop: 'depth', name: 'Depth' },
            { prop: 'magnitude', name: 'Magnitude' },
            { prop: 'tsunami', name: 'Tsunami' },
        ];

        return (
                <List items={ this.state.earthquakes } cols={ columnDefs } />
        );
    }
}

export { EarthquakeList }