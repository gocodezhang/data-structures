class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.data = {};
  }

  push(value) {
    var num = this.size();
    this.data[num] = value;
  }

  pop() {
    var num = this.size() - 1;
    var value = this.data[num];
    delete this.data[num];
    return value;
  }

  size() {
    return Object.keys(this.data).length;
  }

}