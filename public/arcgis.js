require( [

    "esri/views/MapView",
    "esri/Map",
    "esri/layers/FeatureLayer",
    "esri/geometry/Point",
    "esri/widgets/Legend",
    "esri/config",
    "esri/request",
    "esri/Graphic"

], function ( MapView, Map, FeatureLayer, Point, Legend, esriConfig, esriRequest, Graphic ) {      

    var map = new Map( {

        basemap: "dark-gray"
    } );

    var view = new MapView( {

        container: "earthquake-map",
        map: map,
        center: [ 131, -25 ],
        zoom: 4,
    } );

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

    var fields = [

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

    var point = {

        type: "point",  // autocasts as new Point()
        longitude: 131,
        latitude: -25
    };

    var graphic = new Graphic( {

        geometry: point,
        symbol: symbol,

    } );

    var graphics = [ graphic ];

    var layer = new FeatureLayer( {

        source: graphics, // autocast as an array of esri/Graphic
        // create an instance of esri/layers/support/Field for each field object
        // fields: fields, // This is required when creating a layer from Graphics
        objectIdField: "XXXXXXXXXXXXXXXXXX", // This must be defined when creating a layer from Graphics
        renderer: renderer, // set the visualization on the layer
    
    } );

    map.add( layer );

} );