var EdgeFactory =
{
    edgesIdBroker:  1
};


EdgeFactory.createEdge = function( nodeFrom, nodeTo, tree )
{
    var edge = new EdgeUI( "edge_" + this.edgesIdBroker++, nodeFrom, nodeTo, tree );

    nodeFrom.addOutgoingEdge( edge );
    nodeTo.setIncomingEdge( edge );

    CallbackDispatcher.registerCallback( nodeTo, Settings.events.drag, edge, edge.dragTo );
    CallbackDispatcher.registerCallback( nodeFrom, Settings.events.drag, edge, edge.dragFrom );

    return edge;
};