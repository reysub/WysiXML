function NodeUI( id, name, text, depth, tree )
{
	Node.call( this, name, text, depth, tree );

	this.id			= id;
	this.position	= { x: 0, y: 0 };
}


NodeUI.prototype = new Node();
NodeUI.prototype.constructor = NodeUI;


NodeUI.prototype.getId = function()
{
	return this.id;
};


NodeUI.prototype.setId = function( id )
{
	this.id = id;
};


NodeUI.prototype.getPosition = function()
{
	return this.position;
};


NodeUI.prototype.setPosition = function( position )
{
	this.position = position;
};


NodeUI.prototype.select = function() {
	CallbackDispatcher.fireEvent( this, Settings.events.select );
};


NodeUI.prototype.unselect = function() {
	CallbackDispatcher.fireEvent( this, Settings.events.unselect );
};


NodeUI.prototype.grab = function() {
	this.tree.setSelectedElement( this );
	CallbackDispatcher.fireEvent( this, Settings.events.grab );
};


NodeUI.prototype.drag = function( position )
{
	this.setPosition( position );
	FacadeRendering.renderNode( this );
	CallbackDispatcher.fireEvent( this, Settings.events.drag );
};


NodeUI.prototype.release = function() {
	CallbackDispatcher.fireEvent( this, Settings.events.release );
};