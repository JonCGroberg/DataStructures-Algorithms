function stringPatternSearch(text, pattern) {
	let count = 0;
	let patternIndex = 0;

	for (let i = 0; i < text.length; i++) {
		if (text[i] === pattern[patternIndex]) { //checks if
			if (patternIndex === pattern.length - 1) count++; //check if the index as at the end of the pattern
			else patternIndex++; // else increase the index
		} else { // reset the count of the variable is not
			patternIndex = 0;
		}
	}
	return count;
}

console.log(stringPatternSearch("testing testing 123 test testing", "testing"));
