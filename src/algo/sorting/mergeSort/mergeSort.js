'use strict';

const merge = function (array, p, q, r) {
  const L = array.slice(p, q + 1);
  const R = array.slice(q + 1, r + 1);

  // This simplify the code
  L.push(Number.MAX_SAFE_INTEGER);
  R.push(Number.MAX_SAFE_INTEGER);

  for (let k = p, i = 0, j = 0; k <= r; k++) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
  }
};

const mergeSort = function (array, p, r) {
  if (p < r) {
    // (p + q) / 2, this prevent overflow
    let q = Math.floor(p + ((r - p) / 2));
    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);
    merge(array, p, q, r);
  }
};

const sort = function (array) {
  mergeSort(array, 0, array.length - 1);
};
