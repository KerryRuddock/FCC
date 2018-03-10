/*
** Function: Find smallest common multiple between a set of sequential numbers.
** @function smallestCommon
** @summary  Find smallest common mulitple between low and high range of sequential#s
** @param 	 {array} 2 numbers in the set.
** @returns  {number} the result of the prime number sum
** @see {@link https://jsperf.com/sumallprimes-eggs} for an intermediate algorithm that is much faster.
*/
function smallestCommons(arr) {
	'use strict';
  // Euclidean algorithm used to obtain Greatest Common Divisor

  var min = Math.min(arr[0],arr[1]);
  var max = Math.max(arr[0],arr[1]);
  var lcm;
  
  for (var start = true; min <= max; min++) {
    if ( start !== true ) {
       lcm = lcm * min / gcd(lcm, min);
    }
    else {
      lcm = min;
      start = false;
    }
  } 
  return lcm;
    
  function gcd( n1, n2 ) {

    var rem, gcd = n1;
   
    while ( n1 != n2 ){
     if ( n1 > n2 ){
       rem = n1 % n2;
       if ( rem === 0 ) {
         gcd = n2;
         break;
       } else {
         n1 = n1 - n2;
       }
     } 
     else {
       rem = n2 % n1;
       if ( rem === 0 ) {
         gcd = n1;
         break;
       } else {
         n2 = n2 - n1;
       }
     }
    }
    return gcd;
  } // end gcd();
}
