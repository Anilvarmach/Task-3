/**************PRIME NUMBERS IN AN ARRAY*******************/


const arr =[123,43,56,1234,78,90,65,17,3,2,1]
 
// Named Function

 function isPrime(num){
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let fact = 3; fact * fact <= num; fact += 2){
        if(num % fact === 0) return false;  
    }
    return true;
}
console.log(arr.filter(isPrime));

//  Anonymous function
let checkPrime = function(num){
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let fact = 3; fact * fact <= num; fact += 2){
        if(num % fact === 0) return false;  
    }
    return true;
}
 console.log(arr.filter(checkPrime));
 
 
 
//  IIFE 
let primeNumberCheck = (function(num){
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let fact = 3; fact * fact <= num; fact += 2){
        if(num % fact === 0) return false;  
    }
    return true;
})(arr);
console.log(primeNumberCheck);

