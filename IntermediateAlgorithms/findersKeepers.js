/*
** Function: Pass in an array of elements, and an iteratee function to perform truth test.
** @function findElement
** @summary  Function returns 1st array item that passes truth test
** @param 	 {array} 2 numbers in the set.
** @returns  {number} 1st number from array to pass truth test.
** @see {@link https://jsperf.com/findelement-eggs
*/
function findElement(arr, cb) {
	'use strict';
  return arr.find( cb );
  });
}
