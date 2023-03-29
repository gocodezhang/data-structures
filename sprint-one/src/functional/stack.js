var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.items = storage;

  // Implement the methods below
  var num = 0;
  someInstance.push = function(value) {
    someInstance.items[num] = value;
    num += 1;
  };

  someInstance.pop = function() {
    num -= 1;
    var value = someInstance.items[num];
    delete someInstance.items[num];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.items).length;
  };

  return someInstance;
};
