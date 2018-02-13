/*
** Function: Return an array consisting of the largest number from each provided sub-array. 
** @function largestOfFour
** @summary  Return an array consisting of the largest number from each provided sub-array. 
** @param 	{Object[[],[],[]...]} array of numeric sub-arrays.
** @returns {Object[]} array containing highest number from each sub-array.
*/

function largestOfFour(arr) {

	'use strict';
	 var result = [], 
       highValue = 0;
       
 	arr.forEach( function(subArray, index) {
    highValue = 0;
    subArray.forEach( function(item) {
       highValue = item > highValue ? item : highValue;
	     console.log(item);
    });
    result.push(highValue);
	});
  console.log (result);
	return result;
}

 

