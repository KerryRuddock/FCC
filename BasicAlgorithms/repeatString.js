/*
** Function: Takes a string and a Multiplier to concatenate itself. Return "" if Multiplier < 1
** @function repeatString
** @summary  Takes a string and a Multiplier to concatenate itself. Return "" if Multiplier < 1
** @param 	{string} str
** @param   {number} multiplier
** @returns {string} string concatenation
*/
function repeatString(str, multiplier) {
	'use strict';
	var result = ""; 
  
  while (multiplier-- > 0) {
    result += str;
  }
  return result;
}
 

