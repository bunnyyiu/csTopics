'use strict';

const swap = function(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

const bubbleSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }
};

exports.sort = bubbleSort;
