function TreeUI()
{
    Tree.call( this );

    this.selectedElement    = null;
    this.grabbedElement     = null;
}


TreeUI.prototype = new Tree();
TreeUI.prototype.constructor = TreeUI;


TreeUI.prototype.getSelectedElement = function()
{
    return this.selectedElement;
};


TreeUI.prototype.setSelectedElement = function( selectedElement )
{
    if( this.selectedElement ) {
        this.selectedElement.unselect();
    }

    this.selectedElement = selectedElement;

    if( this.selectedElement ) {
        this.selectedElement.select();
    }
};


TreeUI.prototype.getGrabbedElement = function()
{
    return this.grabbedElement;
};


TreeUI.prototype.setGrabbedElement = function( grabbedElement )
{
    if( this.grabbedElement ) {
        this.grabbedElement.release();
    }

    this.grabbedElement = grabbedElement;

    if( this.grabbedElement ) {
        this.grabbedElement.grab();
    }
};


TreeUI.prototype.initializeNodesPositions = function( containerWidth, containerHeight )
{
	this.initializeNodesPositionsRecursive( this.rootNode, 0, containerWidth, containerHeight / ( this.depth + 1 ) );
};


TreeUI.prototype.initializeNodesPositionsRecursive = function( node, limitLeft, limitRight, depthFactor )
{
	node.setPosition( { x: ( limitRight + limitLeft ) / 2, y: node.getDepth() * depthFactor + depthFactor / 2 } );

	if ( node.getIncomingEdge() ) {
		node.getIncomingEdge().setTo( node.getPosition() );
	}

	for ( var i = 0, numSuccessors = node.getOutgoingEdges().length; i < numSuccessors; i++ ) {
		var spacePerSuccessor = ( limitRight - limitLeft ) / numSuccessors;
		var successorLimitLeft = limitLeft + i * spacePerSuccessor;
		var successorLimitRight = successorLimitLeft + spacePerSuccessor;

		node.getOutgoingEdges()[ i ].setFrom( node.getPosition() );

		this.initializeNodesPositionsRecursive( node.getOutgoingEdges()[ i ].getNodeTo(), successorLimitLeft, successorLimitRight, depthFactor );
	}
};


TreeUI.prototype.resize = function( from, to )
{
	this.resizeRecursive( this.rootNode, to.width / from.width, to.height / from.height );
};


TreeUI.prototype.resizeRecursive = function( node, resizeFactorWidth, resizeFactorHeight )
{
	node.setPosition( { x: node.getPosition().x * resizeFactorWidth, y: node.getPosition().y * resizeFactorHeight } );

	if ( node.getIncomingEdge() ) {
		node.getIncomingEdge().setTo( node.getPosition() );
	}

	for ( var i = 0, numSuccessors = node.getOutgoingEdges().length; i < numSuccessors; i++ ) {
		node.getOutgoingEdges()[ i ].setFrom( node.getPosition() );
		this.resizeRecursive( node.getOutgoingEdges()[ i ].getNodeTo(), resizeFactorWidth, resizeFactorHeight );
	}
};


TreeUI.prototype.select = function( elementId )
{
    this.setSelectedElement( this.findElement( elementId ) );
};


TreeUI.prototype.grab = function( elementId )
{
    this.setGrabbedElement( this.findElement( elementId ) );
};


TreeUI.prototype.drag = function( position )
{
    if( this.grabbedElement ) {
        this.grabbedElement.drag( position );
    }
};


TreeUI.prototype.release = function()
{
    this.setGrabbedElement( null );
};