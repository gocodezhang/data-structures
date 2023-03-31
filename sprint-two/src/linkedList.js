var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (list.head === null) {
      list.head = node;
    } else {
      list.tail.next = node;
    }

    list.tail = node;
  };

  list.removeHead = function() {
    var value = list.head.value;
    //assume list is Linkedlist
    list.head = list.head.next;
    // list.value = list.next.value;
    // list.next = list.next.next;

    return value;
  };

  list.contains = function(target) {
    // if (list.head.value === target) {
    //   return true;
    // } else {
    //   list.head.next.contains(target);
    // }

    // return false;

    let currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1);
 * removeHead: O(1);
 * contains: O(n);
 */
