var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.items = storage;

  // Implement the methods below
  var num = 0;
  someInstance.enqueue = function(value) {
    someInstance.items[num] = value;
    num += 1;
  };

  someInstance.dequeue = function() {
    num -= 1;
    var value = someInstance.items[0];
    delete someInstance.items[0];

    for (var i = 0; i < someInstance.size(); i++) {
      someInstance.items[i] = someInstance.items[i + 1];
    }
    delete someInstance.items[num];

    return value;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.items).length;
  };

  return someInstance;
};
