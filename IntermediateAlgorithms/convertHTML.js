/*
** Function: Search a string for HTML characters and convert those characters to a HTML entity name.
** @function convertHTML
** @summary  Search a string for HTML characters and convert those characters to a HTML entity name.
** @param 	 {string} 
** @see {@link https://jsperf.com/converthtml-eggs (not done for this function-eggs} 
** @returns  {string} 
*/
function convertHTML(str) {
 	var strLen = str.length;
      result = [];
      
  for ( var i = 0; i < strLen; i++ ) {
    
    var c1 = str.charAt(i);
    switch ( c1 ) {
      case '&':
        result.push('&amp;');
        break;
      case '<':
        result.push('&lt;');
        break;
      case '>':
        result.push('&gt;');
        break;
      case '"':
        result.push('&quot;');
        break;
      case '\'':
        result.push('&apos;');
        break; 
      default:
        result.push(c1);
    }
  } 
  return result.join("");
}
