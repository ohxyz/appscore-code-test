import { add } from './util.js';

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

        let symbol = {

            type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
            style: "square",
            color: "blue",
            size: "8px",  // pixels
            outline: {  // autocasts as new SimpleLineSymbol()
                color: [ 255, 255, 0 ],
                width: 3  // points
            }
        };

        let renderer = {

            type: "simple",  // autocasts as new SimpleRenderer()
            symbol: symbol
        };

        let fields = [

            {
                name: "ObjectID",
                alias: "ObjectID",
                type: "oid"
            }, 
            {
                name: "title",
                alias: "title",
                type: "string"
            }
        ];

        let point = {

            type: "point",  // autocasts as new Point()
            longitude: 131,
            latitude: -25
        };

        let graphic = new Graphic( {

            geometry: point,
            symbol: symbol,

        } );

        let graphics = [ graphic ];

        function init() {

            let map = new Map( {

                basemap: "dark-gray"
            } );

            let view = new MapView( {

                container: "earthquake-map",
                map: map,
                center: [ 131, -25 ],
                zoom: 4,
            } );

            let layer = new FeatureLayer( {

                source: graphics, // autocast as an array of esri/Graphic
                // create an instance of esri/layers/support/Field for each field object
                // fields: fields, // This is required when creating a layer from Graphics
                objectIdField: "XXXXXXXXXXXXXXXXXX", // This must be defined when creating a layer from Graphics
                renderer: renderer, // set the visualization on the layer
            
            } );

            map.add( layer );

            console.log( add( 3, 4 ) );
        }

        resolve( { init } );

    } );

} );

export {

    promiseGetEarthquakeMap
};