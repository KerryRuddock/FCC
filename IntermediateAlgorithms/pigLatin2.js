/*
** Function: Translate string to pig latin. Move constant to end and add 'ay' or 'way' if begins with vowel.
** @function translatePigLatin
** @summary  Translate string to pig latin. Returning a string.
** @param 	 {string} string to translate
** @see {@link https://jsperf.com/translatepiglatin-eggs} 
** @returns  {string} string converted to pig latin string.
*/
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
