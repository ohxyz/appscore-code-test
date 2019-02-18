/**
 * Create an earthquake map with longitudes and latitudes
 *
 */

const locals = {

    map: null,
    view: null,
};

const promiseGetMapModule = () => new Promise( resolve => {

    // AMD
    window.require( [

        "esri/views/MapView",
        "esri/Map",
        "esri/layers/FeatureLayer",
        "esri/config",
        "esri/request",
        "esri/Graphic",
        "esri/geometry/Point",

    ], ( MapView, Map, FeatureLayer, esriConfig, esriRequest, Graphic, Point ) => {

        var module = {

            map: locals.map,
            view: locals.view,
            setCenter,
            addLocations,
        };

        if ( module.map === null ) {

            createMap();
        }

        resolve( module );

        function setCenter( point ) {

            locals.view.center = point;
            locals.view.zoom = 6;
        }

        function createMap() {

            locals.map = new Map( {

                basemap: "dark-gray"
            } );

            locals.view = new MapView( {

                container: "earthquake-map",
                map: locals.map,
                center: [ 131, -25 ],
                zoom: 4,
            } );
        }

        function addLocations( earthquakes ) {

            var fields = [ 
                {
                    name: "ObjectID",
                    alias: "ObjectID",
                    type: "oid"
                },
                {
                    name: "mag",
                    alias: "mag",
                    type: "string"
                }
            ];

            var symbol = {

                type: "simple-marker",
                style: "circle",
                size: 20,
                color: [ 211, 255, 0, 0 ],
                outline: {
                    width: 1,
                    color: "#FF0055",
                    style: "solid"
                }
            };

            var visualVariables = [ {

                type: 'size',
                field: 'mag',
                minDataValue: 2,
                maxDataValue: 7,
                minSize: 8,
                maxSize: 40
            } ];

            var renderer = {

                type: "simple",  // autocasts as new SimpleRenderer()
                symbol: symbol,
                visualVariables: visualVariables
            };

            var graphics = earthquakes.map( ( quake, index ) => {

                let point = new Point( {

                    x: quake.longitude,
                    y: quake.latitude,
                } )

                let attributes = {

                    ObjectID: index,
                    mag: String( quake.magnitude )
                };

                return new Graphic( { 

                    geometry: point,
                    attributes: attributes
                } );

            } );

            var layer = new FeatureLayer( {

                source: graphics, 
                fields: fields, 
                objectIdField: "ObjectID",
                renderer: renderer,
            
            } );

            locals.map.add( layer );
        }

    } );

} );

export {

    promiseGetMapModule
};