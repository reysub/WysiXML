var NodeRenderer = {};


NodeRenderer.renderNode = function ( node, container )
{
	if ( container.find( "#" + node.getId() ).length == 0 ) {
		container.append( "<circle id='" + node.getId() + "' class='node selectable draggable dropTarget' />" );
		container.html( container.html() );
	}

	container.find( "#" + node.getId() )
		.attr( "cx", node.getPosition().x )
		.attr( "cy", node.getPosition().y )
		.attr( "r", Settings.nodes.radius )
		.attr( "fill", "#" + Settings.nodes.color )
		.attr( "stroke-width", 0 );
};