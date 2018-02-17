/*
** Function: Take an array of 2 strings. Return TRUE if all letters of 2nd string are
**           within 1st string, letters can be any order, case-sensitivity does not matter.
** @function mutation
** @summary  Array of 2 strings. Return TRUE if all letters of 2nd string within 1st string.
** @param 	 {array} 
** @returns  {array} 
*/
function mutation(arr) {
	'use strict';
  
  var len= arr[1].length;
  var lookahead = [];
  
  for (var i = 0; i < len; i++) {
    lookahead += "(?=.*" + arr[1].charAt(i) + ")";
  }
  
  var pattern = new RegExp(lookahead, "i"); //i - lowercase
  console.log (pattern);
  return ( pattern.test( arr[0] ) );
}
