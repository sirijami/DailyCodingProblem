/** 
 * Problem 1:
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Time complexity: O(n)
 * Handles edge case
 * Not the negative numbers
 * 
 */

 function sumToK(arr, target) {

    /** If array is empty or less than 2  */
    if(arr.length < 2) {
        return false;
    }

     const map = new Map();
     for(let i = 0; i < arr.length; i++) {
        map.set(arr[i]);
     }
    
     for(let [k] of map) {  //O(n) * O(1) = O(n)
         let diff = target - k;
         if(map.has(diff)) {  
             return true
         } 
     }
     return false;
 }

 console.log(sumToK([1,3,4,4], 3))