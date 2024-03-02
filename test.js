function stringPatternSearch(text, pattern) {
	let count = 0;
	let patternIndex = 0;

	for (let i = 0; i < text.length; i++) {
		if (text[i] === pattern[patternIndex]) {
			//checks if
			if (patternIndex === pattern.length - 1)
				count++; //check if the index as at the end of the pattern
			else patternIndex++; // else increase the index
		} else {
			// reset the count of the variable is not
			patternIndex = 0;
		}
	}
	return count;
}

console.log(stringPatternSearch("testing testing 123 test testing", "testing"));

//Bubble Sort
function bubbleSort(arr) {
	const swap = (arr, i, j) => {
		let iElem = arr[i];
		arr[i] = arr[j];
		arr[j] = iElem;
		return arr;
	};

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length-i; j++) {
			let curr = { value: arr[j], index: j },
				next = { value: arr[j + 1], index: j + 1 };

			if (curr.value > next.value) swap(arr, curr.index, next.index);
		}
	}
	return arr;
}

console.log(bubbleSort([5, 7, 3, 2, 9, 5, 1]));
