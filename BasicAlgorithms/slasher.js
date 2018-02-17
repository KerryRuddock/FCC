/*
** Function: Return the remaining items of an array after chopping of n elements from head.
** @function slasher
** @summary  remove a # of items from head of array.
** @param 	 {array} 
** @param    {number} reduceBy
** @returns  {array} Array after being reduced by a # of items from head of array.
*/
function slasher(arr, reduceBy) {
	'use arrict';
  return arr.slice(reduceBy);
}
 

