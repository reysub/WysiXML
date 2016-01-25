var XMLParser = {};


XMLParser.generateTreeFromXML = function( text )
{
	var tree = new TreeUI();
	var nodesStack = [];
	var buffer = "";

	var inOpeningTagName	= false,
		inTagContent		= false,
		inClosingTagName	= false;


	for ( var i = 0, length = text.length; i < length; i++ ) {

		if( text[ i ] == "<" && text[ i + 1 ] != "/" ) {
			inOpeningTagName = true;
			inTagContent	 = false;
			inClosingTagName = false;

			nodesStack.unshift( NodeFactory.createNode( "", "", nodesStack.length, nodesStack[ 0 ], tree ) );
			buffer = "";
			continue;
		}

		if( text[ i ] == "<" && text[ i + 1 ] == "/" ) {
			inOpeningTagName = false;
			inTagContent 	 = false;
			inClosingTagName = true;

			nodesStack[ 0].setText( buffer );
			buffer = "";
			continue;
		}

		if( text[ i ] == ">" && inOpeningTagName ) {
			inOpeningTagName = false;
			inTagContent 	 = true;
			inClosingTagName = false;

			nodesStack[ 0].setName( buffer );
			buffer = "";
			continue;
		}

		if( text[ i ] == ">" && inClosingTagName ) {
			inOpeningTagName = false;
			inTagContent 	 = false;
			inClosingTagName = false;

			nodesStack.shift();
			buffer = "";
			continue;
		}

		buffer += text[ i ];
	}

	return tree;
};


XMLParser.generateXMLFromTree = function( tree )
{

};