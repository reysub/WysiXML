function EdgeUI( id, nodeFrom, nodeTo, tree )
{
	Edge.call( this, nodeFrom, nodeTo, tree );

	this.id = id;
	this.from = { x: 0, y: 0 };
	this.to = { x: 0, y: 0 };
}


EdgeUI.prototype = new Edge();
EdgeUI.prototype.constructor = EdgeUI;


EdgeUI.prototype.getId = function ()
{
	return this.id;
};


EdgeUI.prototype.setId = function ( id )
{
	this.id = id;
};


EdgeUI.prototype.getFrom = function ()
{
	return this.from;
};


EdgeUI.prototype.setFrom = function ( from )
{
	this.from = from;
};


EdgeUI.prototype.getTo = function ()
{
	return this.to;
};


EdgeUI.prototype.setTo = function ( to )
{
	this.to = to;
};


EdgeUI.prototype.select = function ()
{
	HandleFactory.createHandle( this.getFrom(), this, this.getTree(), Settings.events.select, this.dragFrom, Settings.events.unselect );
	HandleFactory.createHandle( this.getTo(), this, this.getTree(), Settings.events.select, this.dragTo, Settings.events.unselect );

	CallbackDispatcher.fireEvent( this, Settings.events.select );
};


EdgeUI.prototype.unselect = function ()
{
	this.setHandles( [] );
	CallbackDispatcher.fireEvent( this, Settings.events.unselect );
};


EdgeUI.prototype.dragFrom = function ( source )
{
	this.setFrom( source.getPosition() );
	FacadeRendering.renderEdge( this );
};


EdgeUI.prototype.dragTo = function ( source )
{
	this.setTo( source.getPosition() );
	FacadeRendering.renderEdge( this );
};