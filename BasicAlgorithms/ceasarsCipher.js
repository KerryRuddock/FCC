/*
** Function: Take a string make it uppercase and shift each letter by 13 places. skip punctuation letters.
** @function rot13
** @summary  shift a string letter by 13 places, shifts past Z go back to A,B,C, etc.
** @param 	 {string} 
** @returns  {string} a ciphered string.
*/

function rot13(str) {
	'use strict';
  var newStr = str.toUpperCase();
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var index, c, result = "";
  
  for (var i=0; i < str.length; i++) {
    c = newStr.charAt(i);
    if ( c >= 'A' && c <= 'Z') {
      index = letters.indexOf(c);
      index += 13;
      index = ( index > 25 ) ? index - 26 : index;
      c = letters.charAt(index); // ciphered
    }
    result += c;    
  }
  return result;
}
 

