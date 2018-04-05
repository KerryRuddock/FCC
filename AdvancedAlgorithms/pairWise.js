/*
** Function: Takes an array of numbers and sum - finds all number pairs that equal the sum, add indice values
** @function pairwise
** @summary  Note: the same indices cannot be re-used when calculating the indice value sum
** @param 	 {array} numbers
** @returns  {numeric} sum of indices where values at those indices were used to equal the sum.
** @see {@link https://jsperf.com/ (no jsperf tests done.)
*/
function pairwise(arr, total) {
	'use strict';
  var arrLen = arr.length, skipIndex = [];
  
  return arr.reduce( function( acc, currentValue, index ) {
            
    var skipPair = true, skipLen = skipIndex.length;
       
    for ( var i = index +1; i < arrLen; i++ ) {

      if ( currentValue + arr[i] === total ) {
        
        skipPair = false; // found 
        for ( var j = 0; j < skipLen; j++ ) {
          
          if ( skipIndex[j] === index || skipIndex[j] === i ) {
            skipPair = true;
            break; // already used the numbers at one of these indexes.
          } 
        }
        
        if ( ! skipPair ) break; // break outer for()
      }
    
    } // outer for
    if ( ! skipPair ) {
      skipIndex.push(index);
      skipIndex.push(i);
      return acc + index + i;
    }
    else {
      return acc;
    }

  }, 0);
}

