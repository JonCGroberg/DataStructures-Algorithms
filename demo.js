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
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let mid = Math.round((left + right) / 2);
		let midElem = array[mid];

		if (targetElem === midElem) return mid;
		else if (targetElem > midElem) left = mid+1;
		else right = mid -1;
	}
	return -1;
}

let array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13];
let indexOfNumber = binarySearch(array, 0);

console.log(indexOfNumber);
