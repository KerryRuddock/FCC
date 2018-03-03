/*
** Function: DNA strands are paired elements 'AT' and 'CG'. Take each character and find its missing element to pair with. Create a 2d array of DNA pairings. 
** @function pairElement
** @summary  Create a 2d array of DNA pairings using each character from incoming string.
** @param 	 {string} DNA partial string where each character needs a DNA pairing character
** @see {@link https://jsperf.com/pairelement-eggs} 
** @returns  {array} 2d array of paired DNA elements
*/
function pairElement(str) {
  // Create variables to be used
  var result = [], 
      strLen = str.length;
      
  for ( var i = 0; i < strLen; i++ ) {
    
    var c = str[i];
    if ( c === "A" ) {
      result.push( ["A","T"] );
    } 
    else if ( c === "T" ) {
      result.push( ["T","A"] );
    } 
    else if ( c === "C" ) {
      result.push( ["C","G"] );
    } 
    else {
      result.push( ["G","C"] );
    } 
  }

  return result;
}
