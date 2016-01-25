var HandleFactory =
{
    handlesIdBroker:  1
};


HandleFactory.createHandle = function( position, target, tree, showOn, dragCallback, destroyOn )
{
    var handle = new HandleUI( "handle_" + this.handlesIdBroker++, position, target, tree );

    target.addHandle( handle );

    CallbackDispatcher.registerCallback( target, showOn, handle, handle.show );
    CallbackDispatcher.registerCallback( handle, Settings.events.drag, target, dragCallback );
    CallbackDispatcher.registerCallback( target, destroyOn, handle, handle.destroy );

    return handle;
};