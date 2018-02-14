/*
** Function: splits an Array (1st arg) into groups the length of size (2nd arg).
**           returns them as a two-dimensional array.
** @function chunkArrayInGroups
** @summary  splits an Array into a two-dimensional array.
** @param 	 {array} single dimension array
** @param    {size}  This is the max size each sub-array will be after the split.
** @returns  {array} a two-dimensional array that 1st arg was split up into to.
*/
function chunkArrayInGroups(arr, size) {
	'use strict';
  var s1 = [];
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      s1.push(arr[i]);
    } else {
      s1.push(arr[i]);
      result.push(s1);
      s1 = [];
    }
  }

  if (s1.length !== 0) {
    result.push(s1);
  }  
  return result;
}



 

