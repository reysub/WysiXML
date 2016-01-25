function Node( name, text, depth, tree )
{
	this.name			= name;
	this.text			= text;
	this.depth			= depth;
	this.tree			= tree;
	this.incomingEdge	= null;
	this.outgoingEdges	= [];
	this.attributes		= [];
	this.handles 		= [];
}


Node.prototype.getName = function()
{
	return this.name;
};


Node.prototype.setName = function( name )
{
	this.name = name;
};


Node.prototype.getText = function()
{
	return this.text;
};


Node.prototype.setText = function( text )
{
	this.text = text;
};


Node.prototype.getDepth = function()
{
	return this.depth;
};


Node.prototype.setDepth = function( depth )
{
	this.depth = depth;
};


Node.prototype.getTree = function()
{
	return this.tree;
};


Node.prototype.setTree = function( tree )
{
	this.tree = tree;
};


Node.prototype.getIncomingEdge = function()
{
	return this.incomingEdge;
};


Node.prototype.setIncomingEdge = function( edge )
{
	this.incomingEdge = edge;
};


Node.prototype.getOutgoingEdges = function()
{
	return this.outgoingEdges;
};


Node.prototype.addOutgoingEdge = function( outgoingEdge )
{
	this.outgoingEdges.push( outgoingEdge );
};


Node.prototype.delOutgoingEdge = function( outgoingEdge )
{
	var index = this.outgoingEdges.indexOf( outgoingEdge );

	if( index >= 0 ) {
		this.outgoingEdges.splice( index, 1 );
	}
};


Node.prototype.setOutgoingEdges = function( outgoingEdges )
{
	this.outgoingEdges = outgoingEdges;
};


Node.prototype.getAttributes = function()
{
	return this.attributes;
};


Node.prototype.addAttribute = function( attribute )
{
	this.attributes.push( attribute );
};


Node.prototype.delAttribute = function( attribute )
{
	var index = this.attributes.indexOf( attribute );

	if( index >= 0 ) {
		this.attributes.splice( index, 1 );
	}
};


Node.prototype.setAttributes = function( attributes )
{
	this.attributes = attributes;
};


Node.prototype.getHandles = function()
{
	return this.handles;
};


Node.prototype.addHandle = function( handle )
{
	this.handles.push( handle );
};


Node.prototype.delHandle = function( handle )
{
	var index = this.handles.indexOf( handle );

	if( index >= 0 ) {
		this.handles.splice( index, 1 );
	}
};


Node.prototype.setHandles = function( handles )
{
	this.handles = handles;
};