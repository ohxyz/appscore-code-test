/**
 * Observer pattern
 *
 */

class Storage {

    constructor() {

        this.storage = {};
    }

    store( name, content ) {

        this.storage[ name ] = content;
    }

    /**
     *
     * @param {string} name - Property name of this.storage
     * @param {number} timeout - Maximum time allowed to poll the data
     *
     */
    promiseGetData( name, timeout = 5000 ) {

        let interval = 100;
        let timePassed = interval;

        let promise = new Promise( ( resolve, reject ) => { 

            let timerId = setInterval( () => { 
 
                if ( timePassed >= timeout ) {

                   reject( `Timed out. Not found "${name}" after ${timePassed} ms.` );
                   clearInterval( timerId );
                }
                else if ( this.storage[ name ] !== undefined ) {

                    resolve( this.storage[ name ] );
                    clearInterval( timerId );
                }
                else {

                   timePassed += interval;
                }

            }, interval )

        } );

        return promise;
    }

}

export {

    Storage
};