/*********** Print odd numbers in an array  **********/
let arr = [1,2,3,4,5,6,7,8,9,10];
//  Named Function
function oddNumbers(e){
    let temp =[];
    for(let i = 0; i< e.length;i++){
        if(e[i] % 2 === 1){
            temp.push(e[i]);
        }
    }
     return temp;
}
let outPut = oddNumbers(arr);
console.log(outPut);

// Anonymous function
let oddNumber = function(e){
    let temp =[];
    for(let i = 0; i< e.length;i++){
        if(e[i] % 2 === 1){
            temp.push(e[i]);
        }
    }
     return temp;
}
console.log(oddNumber(arr));

// IIFE
 let oddCheck = (function(e){
       let temp =[];
    for(let i = 0; i< e.length;i++){
        if(e[i] % 2 === 1){
            temp.push(e[i]);
        }
    }
     return temp;
 }) (arr)
 console.log(oddCheck);
 


