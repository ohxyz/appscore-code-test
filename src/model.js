class Earthquake {

    constructor( object ) {

        this.location = object.properties.place;
        this.datetime = new Date( object.properties.time ).toISOString();
        this.longitude = object.geometry.coordinates[ 0 ];
        this.latitude = object.geometry.coordinates[ 1 ];
        this.depth = object.geometry.coordinates[ 2 ];
        this.tsunami = object.properties.tsunami;
        this.magnitude = object.properties.mag;
    }
}

export { Earthquake }