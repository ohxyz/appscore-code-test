/**
 * Create an earthquake map with longitudes and latitudes
 *
 */
const promiseGetEarthquakeMap = () => new Promise( resolve => {

    // AMD
    window.require( [

        "esri/views/MapView",
        "esri/Map",
        "esri/layers/FeatureLayer",
        "esri/config",
        "esri/request",
        "esri/Graphic"

    ], ( MapView, Map, FeatureLayer, esriConfig, esriRequest, Graphic ) => {      

        var locals = {

            map: null
        };

        function createMap() {

            locals.map = new Map( {

                basemap: "dark-gray"
            } );

            var view = new MapView( {

                container: "earthquake-map",
                map: locals.map,
                center: [ 131, -25 ],
                zoom: 4,
            } );
        }

        function addLocations( points ) {

            var symbol = {

                type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                style: "square",
                color: "blue",
                size: "8px",  // pixels
                outline: {  // autocasts as new SimpleLineSymbol()
                    color: [ 255, 255, 0 ],
                    width: 3  // points
                }
            };

            var renderer = {

                type: "simple",  // autocasts as new SimpleRenderer()
                symbol: symbol
            };

            var graphics = points.map( point => { 

                return new Graphic( { geometry: point, symbol: symbol } )
            } )

            var layer = new FeatureLayer( {

                source: graphics, // autocast as an array of esri/Graphic
                // create an instance of esri/layers/support/Field for each field object
                // fields: fields, // This is required when creating a layer from Graphics
                objectIdField: "XXXXXXXXXXXXXXXXXX", // This must be defined when creating a layer from Graphics
                renderer: renderer, // set the visualization on the layer
            
            } );

            locals.map.add( layer );
        }

        resolve( { 

            createMap, 
            addLocations 

        } );

    } );

} );

export {

    promiseGetEarthquakeMap
};