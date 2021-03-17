// Rotate an array by k times and return the rotated array.
const array = [1, 2, 3,4,5,6];

// Named Function
function rotate(nums,k){
    let i =0;
    while(i<k){
        nums.unshift(nums.pop());
        i++;
    }
    console.log(nums);
}

rotate(array,4);

// Anonymous function
let rotateArr = function(nums,k){
     let i =0;
    while(i<k){
        nums.unshift(nums.pop());
        i++;
    }
    console.log(nums);
}

rotateArr(array,5);

// IIFE
(function(nums,k){
     let i =0;
    while(i<k){
        nums.unshift(nums.pop());
        i++;
    }
    console.log(nums);
})(array,6);