/*********** Sum of all numbers in an array  **********/
/*********** Print odd numbers in an array  **********/
let arr = [1,2,3,4,5,6,7,8,9,10];
//  Named Function
function sumOfNumbers(e){
    let sum = 0;
    for(let i = 0; i< e.length;i++){
        sum += e[i];
    }
     return sum;
}
let outPut = sumOfNumbers(arr);
console.log(outPut);

// Anonymous function
let sumofArrayNumbers = function(e){
    let sum = 0;
    for(let i = 0; i< e.length;i++){
        sum += e[i];
    }
     return sum;
}
console.log(sumofArrayNumbers(arr));

// IIFE
 let sumCheck = (function(e){
      let sum = 0;
    for(let i = 0; i< e.length;i++){
        sum += e[i];
    }
     return sum;
 }) (arr)
 console.log(sumCheck);
 

