const a = new Uint16Array(3);
const b = new Uint8Array(a.buffer);

console.log(a);
console.log(b);



//Linear Search returing the index of the target element
function linearSearch(array, targetElement){
    for(let i = 0; i < array.length; i++){
        if(array[i] === targetElement){
            return i;
        }
    }
    throw new Error("Element not found");
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 5));

//Binary Search

function binarySearch(array, targetElement){

}

//