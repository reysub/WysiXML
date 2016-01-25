var FacadeRendering =
{
    container: null
};


FacadeRendering.initialize = function( container )
{
    this.container = container;
};


FacadeRendering.resize = function( tree, from, to )
{
    console.log( "resize from " + from + " to " + to );
};


FacadeRendering.renderTree = function( tree )
{
    TreeRenderer.renderTree( tree );
};


FacadeRendering.renderNode = function( node )
{
    NodeRenderer.renderNode( node, this.container );
};


FacadeRendering.renderEdge = function( edge )
{
    EdgeRenderer.renderEdge( edge, this.container );
};


FacadeRendering.renderHandle = function( handle )
{
    HandleRenderer.renderHandle( handle, this.container );
};


FacadeRendering.unrenderHandle = function( handle )
{
    HandleRenderer.unrenderHandle( handle, this.container );
};