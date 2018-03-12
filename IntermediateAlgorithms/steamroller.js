/*
** Function: Flatten a nested array.
** @function steamrollArray
** @summary  Flatten a nested array.
** @param 	 {array} nested array
** @returns  {array} flattened to one dimension
** @see {@link https://jsperf.com/steamrollarray-eggs
*/
function steamrollArray(arr) {
	'use strict';
  var result = [];
  
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      result.push(arg);
    } 
    else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };
  
  arr.forEach(flatten);
  return result;
}
