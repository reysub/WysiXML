var EditorPanel =
{
    container   : null,
    viewport    : { width: 0, height: 0 },
    mouseDown   : false
};


EditorPanel.initialize = function( container )
{
    this.container = container;
    this.viewport = { width: this.container.width(), height: this.container.height() };

    this.makeBindings();
};


EditorPanel.makeBindings = function()
{
    $( window ).resize( EditorPanel.processResize );

    this.container.on( "mousedown", ".draggable", EditorPanel.processMouseDown );
    this.container.on( "mouseup", EditorPanel.processMouseUp );
    this.container.on( "mousemove", EditorPanel.processMouseMove );

    this.container.on( "click", ".selectable", EditorPanel.processClick );
};


EditorPanel.processResize = function()
{
    WysiXML.resize( EditorPanel.viewport, { width: EditorPanel.container.width(), height: EditorPanel.container.height() } );
    EditorPanel.viewport = { width: EditorPanel.container.width(), height: EditorPanel.container.height() };
};


EditorPanel.processMouseDown = function()
{
    EditorPanel.mouseDown = true;
    WysiXML.grab( $( this ).attr( "id" ) );
};


EditorPanel.processMouseMove = function( event )
{
    if( !EditorPanel.mouseDown ) {
        return;
    }

    WysiXML.drag( { x: event.clientX - EditorPanel.container.offset().left, y: event.clientY - EditorPanel.container.offset().top } );
};


EditorPanel.processMouseUp = function( event )
{
    EditorPanel.mouseDown = false;
    WysiXML.release();
};


EditorPanel.processClick = function()
{
    WysiXML.select( $( this ).attr( "id" ) );
};