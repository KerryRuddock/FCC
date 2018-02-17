/*
** Function: Take an array of 2 numbers and sums all numbers in the range.
** @function sumAll
** @summary  Sums all numbers in a range using array of 2 numbers.
** @param 	 {array} 
** @returns  {number} the result of the sum
** @see {@link https://jsperf.com/sumallinrange-eggs} for an intermediate algorithm that is much faster.
*/
function sumAll(numArray) {
	'use strict';
    
  var start = Math.min(numArray[0], numArray[1]);
  var end = Math.max(numArray[0], numArray[1]);

  for (var i=start, start=0; i <= end; i++){
      start += i;
  }
  return start;
}
 

