/*
** Function: Find the missing letter in the passed letter range and return it.
** @function fearNotLetter
** @summary  Find the missing letter in the passed letter range and return it.
** @param 	 {string} letter range in sequence, perhaps with a missing letter
** @see {@link https://jsperf.com/fearnotletter-eggs} 
** @returns  {string} {undefined} missing letter if round, else undefined if none missing.
*/
function fearNotLetter(str) {
  
  var strLen = str.length,
      letters = 'abcdefghijklmnopqrstuvwxyz',
      result;
      
  for ( var i = 0, j = letters.indexOf( str[0] ); i < strLen; i++, j++ ) {
    
    if ( str[i] !== letters[j] ) {
      result = letters[i];
      break;
    }
  }
  return result;
}
