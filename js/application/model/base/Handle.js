function Handle( parent, tree )
{
    this.parent = parent;
    this.tree   = tree;
}


Handle.prototype.getParent = function()
{
    return this.parent;
};


Handle.prototype.setParent = function( parent )
{
    this.parent = parent;
};


Handle.prototype.getTree = function()
{
    return this.tree;
};


Handle.prototype.setTree = function( tree )
{
    this.tree = tree;
};