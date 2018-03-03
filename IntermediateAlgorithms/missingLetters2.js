/*
**
** Note: This is the Basic Solution which is the fastest out of the 4 algorithms tested.
** Function: Find the missing letter in the passed letter range and return it.
** @function fearNotLetter
** @summary  Find the missing letter in the passed letter range and return it.
** @param 	 {string} letter range in sequence, perhaps with a missing letter
** @see {@link https://jsperf.com/fearnotletter-eggs} 
** @returns  {string} {undefined} missing letter if round, else undefined if none missing.
*/
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}