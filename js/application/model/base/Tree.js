function Tree()
{
	this.depth 		= 0;
	this.headers	= [];
	this.rootNode	= null;
}


Tree.prototype.getDepth = function()
{
	return this.depth;
};


Tree.prototype.setDepth = function( depth )
{
	this.depth = depth;
};


Tree.prototype.getHeaders = function()
{
	return this.headers;
};


Tree.prototype.addHeader = function( header )
{
	this.headers.push( header );
};


Tree.prototype.delHeader = function( header )
{
	var index = this.headers.indexOf( header );

	if( index >= 0 ) {
		this.headers.splice( index, 1 );
	}
};


Tree.prototype.setHeaders = function( headers )
{
	this.headers = headers;
};


Tree.prototype.getRootNode = function()
{
	return this.rootNode;
};


Tree.prototype.setRootNode = function( rootNode )
{
	this.rootNode = rootNode;
};


Tree.prototype.findElement = function( elementId )
{
	return this.findNode( elementId ) || this.findEdge( elementId ) || this.findHandle( elementId );
};


Tree.prototype.findNode = function( nodeId )
{
	return this.findNodeRecursive( this.rootNode, nodeId );
};


Tree.prototype.findNodeRecursive = function( node, nodeId )
{
	if( node.id == nodeId ) {
		return node;
	}

	var result = null;
	for( var i = 0, length = node.outgoingEdges.length; i < length; i++ ) {
		result = this.findNodeRecursive( node.outgoingEdges[ i].nodeTo, nodeId );

		if( result ) {
			return result;
		}
	}
};


Tree.prototype.findEdge = function( edgeId )
{
	var edge = null;

	for( var i = 0, length = this.rootNode.outgoingEdges.length; i < length; i++ ) {
		edge = this.findEdgeRecursive( this.rootNode.outgoingEdges[ i ], edgeId );

		if( edge ) {
			return edge;
		}
	}

	return null;
};


Tree.prototype.findEdgeRecursive = function( edge, edgeId )
{
	if( edge.id == edgeId ) {
		return edge;
	}

	var result = null;
	for( var i = 0, length = edge.nodeTo.outgoingEdges.length; i < length; i++ ) {
		result = this.findEdgeRecursive( edge.nodeTo.outgoingEdges[ i ], edgeId );

		if( result ) {
			return result;
		}
	}
};


Tree.prototype.findHandle = function( handleId )
{
	var i, length;

	if( this.selectedElement ) {
		for( i = 0, length = this.selectedElement.handles.length; i < length; i++ ) {
			if( this.selectedElement.handles[ i].id == handleId ) {
				return this.selectedElement.handles[ i];
			}
		}
	}

	if( this.grabbedElement ) {
		for( i = 0, length = this.grabbedElement.handles.length; i < length; i++ ) {
			if( this.grabbedElement.handles[ i].id == handleId ) {
				return this.grabbedElement.handles[ i];
			}
		}
	}
};