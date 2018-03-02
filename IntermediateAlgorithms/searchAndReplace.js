/*
** Function: Perform a search and replace on a sentence using arguments and return a new sentence.
** @function myReplace
** @summary  Perform a search and replace on a sentence using arguments and return a new sentence.
** @param 	 {string} sentence to perform the search/replace on.
** @param 	 {search} token to search on. (before)
** @param 	 {replace} token that you will be replacing the second argument with (after)
** @see {@link https://jsperf.com/myreplace-eggs} 
** @returns  {array} objects from collection array that match. 
*/
function myReplace( str, before, after ) {
	'use strict';

  return str.replace( before, function() {
    var c1 = before.charAt(0), 
        c2 = after.charAt(0),
        newstr;
        
    if (( c1 >= 'A' && c1 <= 'Z') && ( c2 >= 'a' && c2 <= 'z' ))
    {
      newstr = c2.toUpperCase() + after.slice(1);
    }
    else if (( c1 >= 'a' && c1 <= 'z') && ( c2 >= 'A' && c2 <= 'Z' ))
    {
         newstr = c2.toLowerCase() + after.slice(1);
    } else
    {
      newstr = after;
    }
   
    return newstr;
  });
}