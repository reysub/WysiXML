var UploadPanel =
{
	container: null
};


UploadPanel.initialize = function ( container )
{
	this.container = container;

	this.makeBindings();
	this.show();
};


UploadPanel.makeBindings = function ()
{
	this.container.on( "dragover", ".drop", UploadPanel.processFileDragOver );
	this.container.on( "drop", ".drop", UploadPanel.processFileDrop );
};


UploadPanel.show = function()
{
	this.container.removeClass( "hide" );
	$( ".overlay" ).removeClass( "hide" );
};


UploadPanel.hide = function()
{
	this.container.addClass( "hide" );
	$( ".overlay" ).addClass( "hide" );
};


UploadPanel.processFileDragOver = function ( event )
{
	event.stopPropagation();
	event.preventDefault();
};


UploadPanel.processFileDrop = function ( event )
{
	event.stopPropagation();
	event.preventDefault();

	var files = event.originalEvent.dataTransfer.files;
	if ( !files[ 0 ].type.match( /.*\/xml/ ) ) {
		alert( "solo xml" );
	}

	var reader = new FileReader();
	reader.readAsText( files[ 0 ] );

	reader.onload = function( file ) {
		WysiXML.setTree( XMLParser.generateTreeFromXML( file.target.result ) );
	};
};