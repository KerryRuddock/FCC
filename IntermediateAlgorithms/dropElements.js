/*
** Function: Pass in an array of elements, and an iteratee function to perform truth test.
** @function dropElements
** @summary  Function returns 1st array item that passes truth test
** @param 	 {array} 2 numbers in the set.
** @returns  {number} 1st number from array to pass truth test.
** @see {@link https://jsperf.com/dropelements-eggs
*/
function dropElements(arr, cb) {
	'use strict';
  var len = arr.length;
  
  for (var i = 0; i < len; i++ ) {

     if ( cb( arr[0] )) {
       break;
     } else {
       arr.shift();
     }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
