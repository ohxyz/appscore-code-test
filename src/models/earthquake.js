class Earthquake {

    constructor( feature ) {

        this.location = feature.properties.place;
        this.datetime = new Date( feature.properties.time ).toGMTString();
        this.longitude = feature.geometry.coordinates[ 0 ];
        this.latitude = feature.geometry.coordinates[ 1 ];
        this.depth = feature.geometry.coordinates[ 2 ];
        this.tsunami = feature.properties.tsunami;
        this.magnitude = feature.properties.mag;
    }
}

export { Earthquake }