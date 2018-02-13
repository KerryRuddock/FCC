/*
** Function: Truncates a String. 1st argument is a string, 2nd argument is string's maxLength. 
** If string's size is larger than 2nd argument: maxLength, the string will be truncated
**   If maxLength > 3 truncate string at maxLength less 3 characters and add '...' to string's end.
**     Else truncate string at maxLength and add '...' to string's end.
** Otherwise String does not require truncation.
** 
** @function truncateString
** @summary  Takes a string and a Multiplier to concatenate itself. Return "" if Multiplier < 1
** @param 	{string} str
** @param   {number} multiplier
** @returns {string} string concatenation
*/
function truncateString(str, maxLength) {
	'use strict';
	var result = "";
  var strSize = str.length;
  
  if (strSize > maxLength) {
    if (maxLength > 3) {
      result = str.slice(0, maxLength - 3) + "...";
    } else {
      result = str.slice(0, maxLength) + "...";
    }
  }   
  else {
    result = str;
  }
  return result;
}
 

