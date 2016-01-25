var NodeFactory =
{
    nodesIdBroker:  1
};


NodeFactory.createNode = function( name, text, depth, parent, tree )
{
    var node = new NodeUI( "node_" + this.nodesIdBroker++, name, text, depth, tree );

    tree.setDepth( Math.max( depth, tree.getDepth() ) );
    if( !tree.getRootNode() ) {
        tree.setRootNode( node );
    }

    if( parent ) {
        EdgeFactory.createEdge( parent, node, tree );
    }

    return node;
};