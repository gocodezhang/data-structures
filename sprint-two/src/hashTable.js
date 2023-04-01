

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //helper function returning a boolean
  var helpfind = function (arr) {
    //loop through this._storage.get(index)
    for (var i = 0; i < arr.length; i++) {
      //if this._storage.get(index)[i][0] contains k
      if (arr[i][0] === k) {
        return true;
      }
    }
    return false;
  };
  // Check if this index element in storage
  if (this._storage.get(index) === undefined) {
    // if it doesn't contain any values, create array and push value
    var arr = [];
  } else if (helpfind(this._storage.get(index))) {
    // else if it contains values, check if the key exists
    // overide
    var arr = [];
  } else {
    // otherwise, use existing array and push value
    var arr = this._storage.get(index);
  }

  arr.push([k, v]); // ['Bob', 'new']
  this._storage.set(index, arr);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);

  if (array === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < array.length; i++) {
      if (array[i][0] === k) {
        return array[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function (element, i, arr) {
    if (element && i === index) {
      for (var j = 0; j < element.length; j++) {
        if (element[j][0] === k) {
          element.splice(j, 1);
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(n)
 */


/*
Hashtable = {
  _limit: 8,
  _storage (limitedArray): {
      storage: [[['val1', 'val1'], ['val2', 'val2']]]
      // element: [['val1', 'val1'], ['val2', 'val2']]
      //storage not actually there, available via closure
  }
}
*/


