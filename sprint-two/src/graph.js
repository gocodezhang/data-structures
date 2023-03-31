
// Instantiate a new graph
var Graph = function() {
  this.edge = {};
  this.vertice = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertice.push(node);
  this.edge[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertice.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for (var i = 0; i < this.vertice.length; i++) {
  //   if (this.vertice[i] === node) {

  //   }
  // }

  var filteredArr = this.vertice.filter(function(element) {
    return element !== node;
  });

  this.vertice = filteredArr;

  // {
  //   edges: {
  //      4: [5],
  //      5: [4]
  //   },
  //   nodes: [4, 5]
  // }
  // pull the array with property node in edge
  // iterate on all element in the array and call removeEdge function (fromNode = node, toNode = element)

  let newArr = this.edge[node];
  newArr.forEach(element => {
  //call remove edge
    this.removeEdge(node, element);
  });

  delete this.edge[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {



  if (this.edge[fromNode].includes(toNode)) {
    if (this.edge[toNode].includes(fromNode)) {
      return true;
    }
  }
  // this.edge[fromNode].includes(toNode) && this.edge[toNode].includes(fromNode)
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.edge[fromNode].push(toNode);
  this.edge[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edge[fromNode].length; i++) {
    if (this.edge[fromNode][i] === toNode) {
      this.edge[fromNode].splice(i, 1);
    }
  }

  for (var j = 0; j < this.edge[toNode].length; j++) {
    if (this.edge[toNode][j] === fromNode) {
      this.edge[toNode].splice(j, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  return this.vertice.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: O(1)
  contains: O(n)
  removeNode: O(n)
  hasEdge: O(n)
  addEdge: O(1)
  removeEdge: O(n)
  forEach: O(n)
 */

// {
//   edges: {
//      1: [2, 3],
//      2: [1, 3],
//      3: [1, 2, 4],
//      4: [3]
//   },
//   nodes: [1, 2, 3, 4]
// }

