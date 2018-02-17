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
  
  var str = arr[0].toLowerCase();
  var pattern = arr[1].toLowerCase();

  var strLen= str.length;
  var patLen= pattern.length;
  var hit = 0;
  var match = false;

  for (var i = 0; i < patLen; i++) {
    
    for (var j = 0; j < strLen; j++) {
    
      if (pattern.charAt(i) === str.charAt(j)) {
        hit++;
        match = true;
        break;
      }
    }
    if (match === false) return false; // didn't find character in string
    match = false;
    
  }
  
  hit = (hit > patLen ? patLen : hit);   // adjust for when character in pattern has multiple hits
  return (hit !== patLen ? false : true);
}
 
mutation(["hello", "Hello"]);