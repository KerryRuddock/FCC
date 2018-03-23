/*
** Function: Return the total permutations of the provided string that don't have repeated consecutive letters
** @function permAlone
** @summary  Return the total permutations of the provided string that don't have repeated consecutive letters
** @param 	 {string} ie. 'aab'
** @returns  {number} permutations of non-repeated consecutive letters
** @see {@link https://jsperf.com/permalone-eggs
*/

function permAlone(string) {
	'use strict';
  var arr = string.split('');
  var len = arr.length;
  var factorial, uniq = 1;
  
  arr.sort();

  for (var j = 0; j < len; j++) { 

    if ( j !== len-1 ) {
      if ( arr[j] !== arr[j+1] ) {
        uniq++; // unique letters count
      }
    }
  }
  
  var makeFactorial = function (uniq) {
    
    var fNum = false;
    if ( uniq === 0 ) { uniq = 1; } // 0! = 1 is special case.

    fNum = uniq;
    while ( --uniq > 0 ) {
      fNum *= uniq;
    }
    return fNum;
  }; // end factorial
  
  if ( uniq === 1 ) {
    return 0;
  }
  else {
    return makeFactorial(uniq);
  }
}
  
  

}
