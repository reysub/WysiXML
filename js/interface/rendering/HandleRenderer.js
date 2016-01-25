var HandleRenderer = {};


HandleRenderer.renderHandle = function ( handle, container )
{
	if ( container.find( "#" + handle.getId() ).length == 0 ) {
		container.append( "<rect id='" + handle.getId() + "' class='handle draggable' />" );
		container.html( container.html() );
	}

	container.find( "#" + handle.id )
		.attr( "x", handle.getPosition().x - Settings.hanle.width / 2 )
		.attr( "y", handle.getPosition().y - Settings.hanle.width / 2 )
		.attr( "width", Settings.hanle.width )
		.attr( "height", Settings.hanle.width )
		.attr( "fill", "#" + Settings.hanle.color );
};


HandleRenderer.unrenderHandle = function ( handle, container )
{
	container.find( "#" + handle.getId() ).remove();
};