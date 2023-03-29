var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.data = {};
};

Stack.prototype.push = function(value) {
  var num = this.size();
  this.data[num] = value;
};

Stack.prototype.pop = function() {
  var num = this.size() - 1;
  var value = this.data[num];
  delete this.data[num];
  return value;
};

Stack.prototype.size = function() {
  return Object.keys(this.data).length;
};
