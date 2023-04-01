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
  if (this.value < node.value) {
    if (this.right === undefined) {
      this.right = node;
      return;
    }
    return this.right.insert(valueTwo);
  } else {
    if (this.left === undefined) {
      this.left = node;
      return;
    }
    return this.left.insert(valueTwo);
  }

};


BSTmethods.contains = function(value) {
  //check if root value === value
  if (this.value === value) {
    //return root
    return true;
  }
  //if this.right === undefined && this.left === undefined, return false
  if (this.right === undefined && this.left === undefined) {
    return false;
  }

  //value is less than or greater than currentNode value
  if (this.value < value) {
    //recursively call .contains on right node
    return this.right.contains(value);
  } else {
    //recursively call .contains on left node
    return this.left.contains(value);
  }

  return false;
};

BSTmethods.depthFirstLog = function(cb) {

  //Execute the Current Node
  // cb(this.value);

  // if (this.left !== undefined) {
  //   var leftBranch = this.left;
  //   cb(leftBranch.value);
  //   //First check if the left node contain anything
  //   if (leftBranch.left !== undefined) {
  //     //Yes, recursively call the function on left and somehow accumulate result in arr
  //     leftBranch.left.depthFirstLog(cb);
  //   } else if (leftBranch.right !== undefined) {
  //     leftBranch.right.depthFirstLog(cb);
  //   }
  // } else if (this.right !== undefined) {
  //   var rightBranch = this.right;
  //   cb(rightBranch.value);
  //   //First check if the left node contain anything
  //   if (rightBranch.left !== undefined) {
  //     //Yes, recursively call the function on left and somehow accumulate result in arr
  //     rightBranch.left.depthFirstLog(cb);
  //   } else if (leftBranch.right !== undefined) {
  //     rightBranch.right.depthFirstLog(cb);
  //   }
  // } else {
  //   return;
  // }
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?

  insert: O(log n)
  contains: O(log n)
  depthFirstLog: O(n)
 */


