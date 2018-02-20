/*
** Function: Compare two arrays and return a new array with items that are unique between both arrays.
** @function diffArray
** @summary  Find the unique items in a set of 2 arrays.
** @param 	 {array} 
** @param 	 {array} 
** @see {@link https://jsperf.com/diffarray-eggs} Basic Code Solution is faster.
** @returns  {array} contains unique items
*/
function diffArray(arr1, arr2) {
	'use strict';
  var catArr = arr1.concat(arr2);
  var len = catArr.length;
  var result = [];
  
  for (var i=0; i<len; i++) {
    if ( arr1.indexOf( catArr[i] ) === -1 || arr2.indexOf( catArr[i] ) === -1 ){
      result.push(catArr[i]);
    }
  }
  return result;
}
 