/*
** Function: Checks if source string contains endsWith at its end.
** @function confirmEnding
** @summary  Checks if source string contains endsWith at its end.
** @param 	{String} source String to check.
** @param   {String} endsWith String
** @returns {boolean} true if match occurs, false otherwise
*/

function confirmEnding(srcStr, endsWith) {

	'use strict';

	var endLength = endsWith.length;
  var result;

  if (endsWith.length === 0)  {
     result = false;
  } else if (srcStr.substr(-endLength, endLength) === endsWith) {
     result = true;
  } else {
    result = false;
  }
  return result;

}

 

