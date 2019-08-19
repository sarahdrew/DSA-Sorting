const LinkedList = require('./linkedList');

//UNDERSTANDING MERGESORT
//1a [16, 49, 39, 27, 43, 34, 46, 40]

//1b  [26, 45]

//1c  [1, 21]

//1d   [34, 43]

//UNDERSTANDING QUICKSORT
//False, first half of the array is the same if 14 or 17 were the pivot.
// True. 17 and 14 are both less than 20. TThey could have been the pivot
// false, both 17 and 14 are both the numbers to the left are less and the numbers to the right are greater.
// false because the first half of the array is the same if they were the pivot.

const data = [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53,
    55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33,
    45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93,
    98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16,
    85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97,
    82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26,
    38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9,
    73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39,
    42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
}

//
function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }

    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
}


//msort that sorts the data above
function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);

    return merge(left, right, array);
}

console.log(qSort(data));

function main() {
    let list = new LinkedList();

    list.insertFirst(14);
    list.insertFirst(28);
    list.insertFirst(56);
    list.insertFirst(30);
    list.insertFirst(66);
    list.insertFirst(7);

    //   console.log(list);

    linkedMerge(list);
}

function linkedMerge(ll) {
    let sortedArray = [];
    let left = ll.head;
    let right = ll.next;

    console.log(ll.head.next.value);

    while (ll.head.next !== null) {
        sortedArray.push(ll.head.next.value);
        ll.remove(ll.head.next.value);
    }

    sortedArray.push(ll.head.value);

    console.log(mSort(sortedArray));
}

main();

//BUCKET SORT
//write an O(n) algorithm to sort an array of integers where you know in advance what the lowest and highest values are.
//can't use splice shift or unshift
const newData = [5, 13, 1, 9, 11, 7, 3];

function bucketSort(array, low) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[arr[i] - low] = array[i];
    }
    console.log(`newArray: `, newArr);
}

//SORT IN PLACE
//write an algo to shuffle an array into a random order in place, without creating new array
function inPlace(array) {
    //math.random
    //use swap
    let random1 = Math.floor(Math.random() * array.length);

    let random2 = Math.floor(Math.random() * array.length);

    for (let i = 0; i < array.length - 1; i++) {
        swap(array, random1, random2);
        console.log(array);
        return array;
    }
    return array;
}

inPlace(newData);

//SORTTING BOOKS
//express putting books in alphabetical order

function booksInOrder(array) {
    //easiest case first
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, arr.length);

    left = booksInOrder(left);
    right = booksInOrder(right);
    return merge(left, right, arr);
}

const books = ['Green Eggs and Ham', 'Loving Frank', 'Sula', 'Great Gatsby'];

console.log(booksInOrder(books));