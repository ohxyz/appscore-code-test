/**
 * Service layer for getting earthquake data
 */

import { Earthquake } from '../models/earthquake.js';

function getEarthquakes( url ) {

    return fetch( url )
            .then( response => {
                
                return response.json();

            } )
            .then( data => {

                return data.features.map( feature => {
                    
                    return new Earthquake( feature )
                } );

            } );
}

export { getEarthquakes };