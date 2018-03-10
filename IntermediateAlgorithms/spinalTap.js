/*
** Function: take a string and convert it to spinal case which is all lowercase words joined by dashes.
** @function spinalCase
** @summary  take a string and convert it to spinal case which is all lowercase words joined by dashes.
** @param 	 {string} 
** @see {@link https://jsperf.com/spinalcase-eggs 
** @returns  {string} 
*/
function spinalCase(str) {
 	var regExp = /[^-_\s][a-z]*/g; // exclude '-','_',whitespace
  var result = [];
  var words = str.match(regExp);
  var wordCount = words.length;
  
  for (var i = 0; i < wordCount; i++) {
    if ( i < wordCount - 1) {
      result.push ( words[i] + '-');
    }
    else {
      result.push( words[i] );
    }
  }
  return result.join("").toLowerCase();
}
