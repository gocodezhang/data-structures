var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  // base case - check if CurrentNode value is equal to target
  if (this.value === target) {
    return true;
  }
  // recursive case - call contains method on all child nodes
  if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1);
 * contains: O(n); what about recursion?
 */
