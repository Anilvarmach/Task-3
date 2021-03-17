
/**********PALINDROMES IN AN ARRAY*****************/
const numbersList = [123,145,167,121,333,189,127721,345543,78900987,890908,12321]

// Named Function
function palindrome(num){
    let factor = 1;
   while (num / factor >= 10){
      factor *= 10;
   }
   while (num) {
      let first = Math.floor(num / factor);
      let last = num % 10;
      if (first != last){
         return false;
      }
      num = Math.floor((num % factor) / 10);
      factor = factor / 100;
   }
   return true;
}

 console.log(numbersList.filter(palindrome));

// Anonymous function
let palindromeInArray = function(num){
    let factor = 1;
   while (num / factor >= 10){
      factor *= 10;
   }
   while (num) {
      let first = Math.floor(num / factor);
      let last = num % 10;
      if (first != last){
         return false;
      }
      num = Math.floor((num % factor) / 10);
      factor = factor / 100;
   }
   return true;
}

 console.log(numbersList.filter(palindromeInArray));

// IIFE
let palindromeCheck = (function(num){
      let factor = 1;
   while (num / factor >= 10){
      factor *= 10;
   }
   while (num) {
      let first = Math.floor(num / factor);
      let last = num % 10;
      if (first != last){
         return false;
      }
      num = Math.floor((num % factor) / 10);
      factor = factor / 100;
   }
   return true;
})(numbersList);
console.log(palindromeCheck);

