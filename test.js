// const a = new Uint16Array(3);
// const b = new Uint8Array(a.buffer);

// console.log(a);
// console.log(b);

// //Performance Measure
// function timing(func, ...args) {
//   let time = 0;
//   let trials = 1000;
//   for (let i = 0; i < trials; i++) {
//     const t0 = performance.now();
//     func(args[0], args[1]);
//     const t1 = performance.now();
//     time += t1 - t0;
//   }

//   console.log(`took ${(time / trials).toFixed(4)} milliseconds`);
// }

//Linear Search returing the index of the target element
function linearSearch(array, targetElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetElement) {
      return i;
    }
  }
  throw new Error("Element not found");
}

// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

//Binary Search

function binarySearch(array, targetElement) {
    
}

// timing(linearSearch, [1, 2, 4, 5, 6, 7, 9, 8, 66, 434], 66);
