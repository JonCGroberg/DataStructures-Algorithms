# Data Structures

- Array

## Array

### Arrays in Nodejs

```javascript
const a = new ArrayBuffer(6); // => `<00 00 00 00 00 00>`
const a = new Uint16Array(3); // => `<00 00 00 00 00 00>`
```

### Features

- fixed size
- get
- set
- delete

# Algorithms

## Search

### Linear

- Works on all arrays

> Goes 1 by 1 throughout the whole array

> **Time Complexity** : O(n)

```javascript
//Linear Search returning the index of the target element
//DNE returns -1
function linearSearch(array, targetElement) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === targetElement) {
			return i;
		}
	}
	return -1;
}
```

### Binary

- Works only on sorted arrays

> Checks the middle value and decided if the

> **Time Complexity** : O(log(n))

```javascript
//Binary Search returning the index of the target element
//DNE returns -1
function binarySearch(array, targetElem) {
	let low = 0;
	let high = array.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let midElem = array[m];

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
```

## Sort

### Bubble Sort

```javascript
function bubbleSort(arr) {
	const swap = (arr, i, j) => {
		let iElem = arr[i];
		arr[i] = arr[j];
		arr[j] = iElem;
		return arr;
	};

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			let curr = { value: arr[j], index: j },
				next = { value: arr[j + 1], index: j + 1 };
			if (curr.value > next.value) swap(arr, curr.index, next.index);
		}
	}
	return arr;
}
```
