/*
** Function: Convert a binary string into a string of characters
** @function binaryAgent
** @summary  Convert a binary string into a string of characters
** @param 	 {string} binary numbers
** @returns  {string} converted binary string to characters
** @see {@link https://jsperf.com/binaryagent-eggs
*/
function binaryAgent(str) {
	'use strict';
  
  var arr = str.split(' '), text = "";
  var len = arr.length;
  
  for ( var i = 0; i < len; i++ ) {
      text += String.fromCharCode( Number.parseInt(arr[i], 2) );
  }
  return text;
}
