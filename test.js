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

//Swap
function swap(arr, i, j) {
	let iElem = arr[i];
	arr[i] = arr[j];
	arr[j] = iElem;
	return arr;
}

//Bubble Sort
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			let curr = { value: arr[j], index: j },
				next = { value: arr[j + 1], index: j + 1 };
			if (curr.value > next.value) swap(arr, curr.index, next.index);
		}
	}
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = { value: arr[i], index: i };
		for (let j = i; j < arr.length; j++) {
			let curr = arr[j];
			if (curr < lowest.value) {
				lowest.value = curr;
				lowest.index = j;
			}
		}
		swap(arr, i, lowest.index);
	}
	return arr;
}

function merge(arr) {}

// let arr = [15, 2, 8, 0, 5, 34, 23, 5, 8, 9, 6, 4, 67, 56];
// console.log(selectionSort(arr));
// console.log(bubbleSort(arr));
// console.log(mergeSort(arr));

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	unshift(data) {
		const newHead = new Node(data, this.head);
		this.length++;
		this.head = newHead;
	}
	shift() {
		if (!this.head) return;

		const old = this.head;
		this.head = this.head.next;
		this.length--;
		return old;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		let node = this.head;
		while (node && node.next) {
			node = node.next;
		}
		return node;
	}
	clear() {
		this.head = null;
		this.length = null;
	}
	pop() {
		if (!this.head) return;
		else if (this.length === 1) return this.shift();

		let last = node.getLast();
		let node = node.getFirst();

		while (node.next != last) {
			node = node.next;
		}
		node = null;
		this.length--;
		return last;
	}

	push(data) {
		const newNode = new Node(data, null);

		if (!this.head) return (this.head = newNode);

		this.getLast().next = newNode;
		this.length++;
	}

	get(targetIndex) {
		if (targetIndex - 1 > this.length || targetIndex < 0) return -1;

		let node = this.getFirst();
		for (let i = 0; i < targetIndex; i++) {
			node = node.next;
		}
		return node;
	}

	set(targetIndex, data) {
		const targetNode = this.get(targetIndex);

		if (!targetIndex) return false;
		else {
			targetNode.data = data;
			return true;
		}
	}

	remove(index) {
		if (index == 0) return this.shift();
		if (this.get(index) == -1) return null;

		let prev = this.get(index - 1);
		let node = prev.next
		prev.next = prev.next.next;
		this.length--;

		return node
	}
}

let list = new LinkedList();
list.push(5);
list.push(3);
list.push(6);
list.unshift(1);
list.set(3, 100);
list.remove(2);

console.log(list, list.get(3));
