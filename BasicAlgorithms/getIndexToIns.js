/*
** Function: Return the lowest index at which a value (second argument) should be inserted into an array
** (first argument) once it has been sorted. The returned value should be a number.
** @function getIndexToIns
** @summary  Function to sort array and return possible insertion index.
** @param 	 {array}  numeric array
** @param    {number} number to base insertion index on.
** @returns  {number} array index where to insert number
*/

function getIndexToIns(arr, num) {
	'use strict';
  arr.sort (function (a,b) {
    return a-b;
  });
  
  for (var i=0; i < arr.length; i++) {
    if ( num <= arr[i] ) {
      break;
    }
  }
  return i;
}
 

