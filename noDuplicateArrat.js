// program to remove duplicate value from an array


const array = [1, 2, 3, 2, 3];


// Named Function
function getUnique(arr){
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

 getUnique(array);
 
// Anonymous Function
let noDuplicate = function(arr){
     let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

noDuplicate(array);

// IIFE
 (function(arr){
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
})(array);

