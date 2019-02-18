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

    handleRowClick( object ) {

        this.props.onRowClick( object );
    }

    render() {

        if ( Array.isArray( this.state.earthquakes) && this.state.earthquakes.length === 0 ) {

            return 'Loading...';
        }

        let columnDefs = [

            { prop: 'location', name: 'Location' },
            { prop: 'datetime', name: 'Date and time' },
            { prop: 'longitude', name: 'Longitude' },
            { prop: 'latitude', name: 'Latitude' },
            { prop: 'depth', name: 'Depth' },
            { prop: 'magnitude', name: 'Magnitude' },
            { prop: 'tsunami', name: 'Tsunami' },
        ];

        return <List items={ this.state.earthquakes } 
                     cols={ columnDefs } 
                     onRowClick={ this.handleRowClick.bind( this ) }
               />;
    }
}

export { EarthquakeList }