/*
** Function: Convert a number into a Roman Numeral.
** @function convertToRoman
** @summary  Convert a number into a Roman Numeral.
** @param 	 {number} 
** @see {@link https://jsperf.com/convertToRoman-eggs} 
** @returns  {string} Roman Numeral
*/
function convertToRoman(num) {
	'use strict';
  
  var base  = [1000,500,100,50,10,5,1];
  var roman = ['M','D','C','L','X','V','I'];
  var result = "";
  // 'I' = 1, 'V' = 5, 'X' = 10, 'L' = 50, 'C' = 100, 'D' = 500, 'M' = 1000
  
  base.forEach( function(value, i) {
    
    var ch = roman[i];
    if ( ch === 'V' || ch === 'L' || ch === 'D' ) {
      if ( num >= base[i+1]*9 ) {
        result += roman[i+1] + roman[i-1];
        num -= ( base[i-1] - base[i+1] );
      }
      else if ( num >= value - base[i+1] && num < value ) {
        result += roman[i+1] + roman[i];
        num -= ( base[i] - base[i+1] );
      }
    } 

    while ( num >= value ) {
      result += roman[i];
      num -= value;
    }
  });
  return result;
}
 