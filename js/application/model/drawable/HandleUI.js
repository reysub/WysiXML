function HandleUI( id, position, parent, tree )
{
	Handle.call( this, parent, tree );

	this.id			= id;
	this.position	= position;
}


HandleUI.prototype = new Handle();
HandleUI.prototype.constructor = HandleUI;


HandleUI.prototype.getId = function()
{
	return this.id;
};


HandleUI.prototype.setId = function( id )
{
	this.id = id;
};


HandleUI.prototype.getPosition = function()
{
	return this.position;
};


HandleUI.prototype.setPosition = function( position )
{
	this.position = position;
};


HandleUI.prototype.show = function()
{
	FacadeRendering.renderHandle( this );
};


HandleUI.prototype.destroy = function()
{
	FacadeRendering.unrenderHandle( this );
};


HandleUI.prototype.grab = function() {};


HandleUI.prototype.drag = function( position )
{
	this.setPosition( position );
	FacadeRendering.renderHandle( this );
	CallbackDispatcher.fireEvent( this, Settings.events.drag );
};


HandleUI.prototype.release = function() {};