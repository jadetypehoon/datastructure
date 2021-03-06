const Queue = function () {
  var someInstance = {
    seq: 0,
    storage: {},
    count: 0
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

const extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key]
  }
};

const queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.seq] = value;
  this.seq++;
  this.count++;
}

queueMethods.dequeue = function () {
  if (this.count > 0) {
    var temp = Object.keys(this.storage).sort((a, b) => {
      if (a > b) {
        return 1
      }
      if (a < b) {
        return -1
      }
    });

    let output = this.storage[temp[0]];

    for (let key in this.storage) {
      if (this.storage[key] === this.storage[temp[0]]) {
        delete this.storage[key]
      }
    }
    this.count--;
    return output
  }
};

queueMethods.size = function () {
  return this.count
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
    queueMethods
  };
}