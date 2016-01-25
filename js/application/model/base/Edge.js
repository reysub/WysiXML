function Edge( nodeFrom, nodeTo, tree )
{
	this.nodeFrom	= nodeFrom;
	this.nodeTo		= nodeTo;
	this.tree		= tree;
	this.handles	= [];
}


Edge.prototype.getNodeFrom = function()
{
	return this.nodeFrom;
};


Edge.prototype.setNodeFrom = function( nodeFrom )
{
	this.nodeFrom = nodeFrom;
};


Edge.prototype.getNodeTo = function()
{
	return this.nodeTo;
};


Edge.prototype.setNodeTo = function( nodeTo )
{
	this.nodeTo = nodeTo;
};


Edge.prototype.getTree = function()
{
	return this.tree;
};


Edge.prototype.setTree = function( tree )
{
	this.tree = tree;
};


Edge.prototype.getHandles = function()
{
	return this.handles;
};


Edge.prototype.addHandle = function( handle )
{
	this.handles.push( handle );
};


Edge.prototype.delHandle = function( handle )
{
	var index = this.handles.indexOf( handle );

	if( index >= 0 ) {
		this.handles.splice( index, 1 );
	}
};


Edge.prototype.setHandles = function( handles )
{
	this.handles = handles;
};