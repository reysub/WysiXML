var CallbackDispatcher = {
    callbacks: {}
};


CallbackDispatcher.registerCallback = function( source, event, target, callback )
{
    if( !this.callbacks[ source.id ] ) {
        this.callbacks[ source.id ] = {};
    }

    if( !this.callbacks[ source.id ][ event ] ) {
        this.callbacks[ source.id ][ event ] = [];
    }

    this.callbacks[ source.id ][ event].push( { "target": target, "callback" : callback } );
};


CallbackDispatcher.fireEvent = function( source, event )
{
    if( !this.callbacks[ source.id ] || !this.callbacks[ source.id ][ event ] ) {
        return;
    }

    for( var i = 0; i < this.callbacks[ source.id ][ event ].length; i++ ) {
        var target = this.callbacks[ source.id ][ event ][ i ][ "target" ];
        var callback = this.callbacks[ source.id ][ event ][ i ][ "callback" ];

        callback.call( target, source );
    }
};
