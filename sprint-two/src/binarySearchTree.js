var BinarySearchTree = function(value) {
  var node = Object.create(BSTmethods);
  node.value = value;
  node.left;
  node.right;
  return node;
};


var BSTmethods = {};
BSTmethods.insert = function(valueTwo) {
  // Create a node based on the value
  var node = BinarySearchTree(valueTwo);
  // Compare parent node with the value
  if (this.value < node.valueTwo) {
    this.right = node;
  }

  // Put the node into left/right
  if (this.value > node.valueTwo) {

    this.left = node;
  }

};


BSTmethods.contains = function(value) {

};

BSTmethods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
  node = {
    value: 5,
    left: node2
    right: node3
  }

*/
