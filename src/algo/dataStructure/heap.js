'use strict';

const MIN_MODE = -1;
const MAX_MODE = 1;

const Heap = function(mode) {
    const self = this;
    const minSort = function(a, b) {
        return self._getRank(a) - self._getRank(b);
    };
    const maxSort = function(a, b) {
        return -1 * (self._getRank(a) - self._getRank(b));
    };
    switch (mode) {
        case MIN_MODE:
            self._compare = minSort;
            break;
        case MAX_MODE:
            self._compare = maxSort;
            break;
        default:
            self._compare = minSort;
    }
    self.list = [];
    self.length = 0;
};

Heap.prototype._getRank = function(item) {
    return item;
};

Heap.prototype._swap = function(i, j) {
    let tmp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = tmp;
};

Heap.prototype._moveUp = function(i) {
    let currentIndex = i;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (parentIndex >= 0 &&
        this._compare(this.list[parentIndex], this.list[currentIndex]) > 0) {
        this._swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
    }
};

Heap.prototype._moveDown = function(i) {
    let currentIndex = i;
    let leftIndex = 2 * currentIndex + 1;
    let rightIndex = 2 * currentIndex + 2;

    while (currentIndex < this.length) {
        let leftIndex = 2 * currentIndex + 1;
        let rightIndex = 2 * currentIndex + 2;

        if (leftIndex >= this.length && rightIndex >= this.length) {
            break;
        } else if (leftIndex < this.length && rightIndex < this.length) {
            const diffLeft =
                this._compare(this.list[currentIndex], this.list[leftIndex]);
            const diffRight =
                this._compare(this.list[currentIndex], this.list[rightIndex]);

            if (diffLeft >= diffRight) {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
                continue;
            } else if (diffRight >= diffLeft) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
                continue;
            } else {
                break;
            }
        } else if (leftIndex < this.length) {
            const diffLeft =
                this._compare(this.list[currentIndex], this.list[leftIndex]);
            if (diffLeft >= 0) {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
                continue;
            }
            break;
        } else {
            const diffRight =
                this._compare(this.list[currentIndex], this.list[rightIndex]);
            if (diffRight >= 0) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
                continue;
            }
            break;
        }
    }
};

Heap.prototype.push = function(item) {
    this.list[this.length++] = item;
    this._moveUp(this.length - 1);
};

Heap.prototype.pop = function() {
    if (this.length === 0) {
        return null;
    }
    const result = this.list[0];
    this.list[0] = this.list[this.length - 1];
    this.length -= 1;
    this._moveDown(0);
    return result;
};

Heap.prototype.peek = function() {
    if (this.length >=0 ) {
        return this.list[0];
    }
    return null;
};

exports.createMinHeap = function() {
    const heap = new Heap(MIN_MODE);
    return heap;
};

exports.createMaxHeap = function() {
    const heap = new Heap(MAX_MODE);
    return heap;
};
