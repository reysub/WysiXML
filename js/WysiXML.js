var WysiXML =
{
	tree: null,
	unsavedChanges:	false
};


WysiXML.getTree = function()
{
	return this.tree;
};


WysiXML.setTree = function( tree )
{
	this.tree = tree;
	this.tree.initializeNodesPositions( $( ".editor svg" ).width(), $( ".editor svg" ).height() );
	FacadeRendering.renderTree( this.tree );
	UploadPanel.hide();
};


WysiXML.initialize = function()
{
	UploadPanel.initialize( $( ".upload" ) );
	EditorPanel.initialize( $( ".editor svg" ) );
	FacadeRendering.initialize( $( ".editor svg" ) );
};


WysiXML.resize = function( from, to )
{
	if( this.tree ) {
		this.tree.resize( from, to );
		FacadeRendering.renderTree( this.tree );
	}
};


WysiXML.select = function( elementId )
{
	this.tree.select( elementId );
};


WysiXML.grab = function( elementId )
{
	this.tree.grab( elementId );
};


WysiXML.drag = function( position )
{
	this.tree.drag( position );
};


WysiXML.release = function()
{
	this.tree.release();
};



$( document ).ready( WysiXML.initialize );