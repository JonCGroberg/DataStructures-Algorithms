// const a = new Uint16Array(3);
// const b = new Uint8Array(a.buffer);

//Linear Search returning the index of the target element| DNE returns -1
function linearSearch(array, targetElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetElement) {
      return i;
    }
  }
  return -1;
}

//Binary Search returning the index of the target element| DNE returns -1
function binarySearch(array, targetElem) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midElem = array[mid];

    if (targetElem === midElem) {
      return mid;
    } else if (midElem > targetElem) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

let array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13];
let indexOfNumber = binarySearch(array, 0);

console.log(indexOfNumber);
console.log("test");

