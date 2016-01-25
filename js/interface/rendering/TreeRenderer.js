var TreeRenderer = {};


TreeRenderer.renderTree = function ( tree )
{
	this.renderTreeRecursive( tree.getRootNode() );
};


TreeRenderer.renderTreeRecursive = function ( node )
{
	FacadeRendering.renderNode( node );

	if ( node.getIncomingEdge() ) {
		FacadeRendering.renderEdge( node.getIncomingEdge() );
	}

	for ( var i = 0, numSuccessors = node.getOutgoingEdges().length; i < numSuccessors; i++ ) {
		FacadeRendering.renderEdge( node.getOutgoingEdges()[ i ] );
		this.renderTreeRecursive( node.getOutgoingEdges()[ i ].getNodeTo() );
	}
};