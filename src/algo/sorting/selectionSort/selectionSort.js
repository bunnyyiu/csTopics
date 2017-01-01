'use strict';

const swap = function(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

const selectionSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
};

exports.sort = selectionSort;
