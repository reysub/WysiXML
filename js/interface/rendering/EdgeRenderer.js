var EdgeRenderer = {};


EdgeRenderer.renderEdge = function ( edge, container )
{
	if ( container.find( "#" + edge.getId() ).length == 0 ) {
		container.append( "<line id='" + edge.getId() + "' class='edge selectable' />" );
		container.html( container.html() );
	}

	container.find( "#" + edge.getId() )
		.attr( "x1", edge.getFrom().x )
		.attr( "y1", edge.getFrom().y )
		.attr( "x2", edge.getTo().x )
		.attr( "y2", edge.getTo().y )
		.attr( "stroke", "#" + Settings.edges.color )
		.attr( "stroke-width", Settings.edges.width );
};