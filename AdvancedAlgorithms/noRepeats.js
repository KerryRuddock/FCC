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
  var letters = arr.length;
  var repeats = [], uniq = 1, permutations;
  
  arr.sort();
  
  var getFactorial = function (num) {
    
    var fNum = false;
    if ( num === 0 ) { num = 1; } // 0! = 1 is special case.

    fNum = num;
    while ( --num > 0 ) {
      fNum *= num;
    }
    return fNum;
  }; 
  
  // count repeated letters 
  for (var j = 0, r = 1; j < letters; j++) { 

    if ( j !== letters-1 ) {
      if ( arr[j] !== arr[j+1] ) {
        
        // count unique letters
        uniq++; 
        
        // save count of any previous letter repeats
        if ( r > 1 ) {
          repeats.push(r);
          r = 1;
        }
      }
      else {
        r++;
        continue;
      }
    }
    // save count of any previous letter repeats 
    if ( r > 1 ) {
      repeats.push(r);
      r = 1;
    }   
    
  } // end for
  
  // Check for special cases
  if ( repeats.length && uniq === 1 ){ // 'string of the same letter'
    permutations = 0;
  } 
  else if ( ! repeats.length && uniq === 1 ){ // 'string of one letter'
    permutations = 1;
  }
  else {
    permutations = getFactorial(letters);

    // Reduce Permutations by subtracting out invalid permutations that contain repeated letters.
    // Add to Permutations any overlap of invalid permutations that were counted during another repeatedLetterSet
 
    var  k = 0, repeatedLetterSets = repeats.length, invalids = 0, overlaps = 0;
    while ( repeatedLetterSets && k < repeatedLetterSets ) {
    
      // 1st getFactorial() gets #ofBoxes where repeated letters may appear
      // 2nd getFactorial() gets repeated letters Factorial. ie. 'aa' = !2, 'aaa' = !3.
 
      var repeatCount = repeats[k];
      while ( repeatCount >= 2 ) {
        invalids = getFactorial( letters - repeatCount +1 ) * getFactorial( repeatCount );
        permutations -= invalids;
        repeatCount-- ;
      }  
      // add back in overlap of where repeated characters were counted over again with multiple
      // repeated characters sets. ie [aabb]
      if ( repeats.length > 1 ) {
        overlaps = getFactorial ( letters - repeats[k] ) * getFactorial( repeats[k] );
        permutations += overlaps;
      }      
      k++;
    }
  }
  return permutations;
}

