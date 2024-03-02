function stringPatternSearch(text, pattern) {
	let patternArr = pattern.split("");
	let count = 0;
	let matchingIndex = 0;

	for (let i = 0; i < text.length; i++) {
		if ((text[i] == pattern[matchingIndex])) {
      if (matchingIndex == pattern.length-1) count++
      else matchingIndex++;
		}else{
      matchingIndex=0;
    }
	}
  return count;
}

console.log(stringPatternSearch("testing testing 123","testing"));