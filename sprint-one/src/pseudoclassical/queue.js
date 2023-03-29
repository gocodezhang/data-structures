var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.data = {};
};

Queue.prototype.enqueue = function(value) {
  var num = this.size();
  this.data[num] = value;
};

Queue.prototype.dequeue = function() {
  var value = this.data[0];
  delete this.data[0];

  for (var i = 0; i < this.size(); i++) {
    this.data[i] = this.data[i + 1];
  }
  delete this.data[this.size() - 1];

  return value;
};

Queue.prototype.size = function() {
  return Object.keys(this.data).length;
};
