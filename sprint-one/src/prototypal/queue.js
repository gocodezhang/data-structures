var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.data = {};

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var num = this.size();
  this.data[num] = value;
};

queueMethods.dequeue = function() {
  var value = this.data[0];
  delete this.data[0];

  for (var i = 0; i < this.size(); i++) {
    this.data[i] = this.data[i + 1];
  }
  delete this.data[this.size() - 1];

  return value;
};

queueMethods.size = function() {
  return Object.keys(this.data).length;
};

