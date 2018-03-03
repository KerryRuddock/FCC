/*
** Function: Translate string to pig latin. Move constant to end and add 'ay' or 'way' if begins with vowel.
** @function translatePigLatin
** @summary  Translate string to pig latin. Returning a string.
** @param 	 {string} string to translate
** @see {@link https://jsperf.com/translatepiglatin-eggs} 
** @returns  {string} string converted to pig latin string.
*/
function translatePigLatin( str ) {
	'use strict';

  var strLen = str.length,
      temp = str.split(""),
      c, result;
      
  for (var i= 0; i < strLen ; i++) {
    c = str.charAt(i)
    if ( c !== 'a' && c !== 'e' &&  c !== 'i' && c !== 'o' && c !== 'u' ) {
      temp.push(c);
    }
    else {
      if ( i === 0 ) {
        result = str + 'way';
        break;
      } 
      else {
        result = temp.slice(i).join("") + 'ay';
        break;
      }
    }
  }
  return result;
}