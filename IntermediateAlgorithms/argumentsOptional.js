/*
** Function: Function either sums 2 arguments or returns function using argument to sum with.
** @function addTogether
** @summary  Function either sums 2 arguments or returns function using argument to sum with.
** @param 	 {number} 
** @param    {number} optional number
** @returns  {number} or {function} 
** @see {@link https://jsperf.com/addtogether-eggs
*/
function addTogether() {
	'use strict';
  var len = arguments.length;
    
  for ( var i = 0; i < len; i++ ) {
    if ( typeof arguments[i] !== "number" ) {
      return undefined;
    }
  } 
  
  if ( len === 1 ) {
    var num1 = arguments[0];
    return function ( addTo ) {
      if ( typeof addTo !== "number" ) {
        return undefined;
      }
      return addTo + num1;
    };
  } 
  else {
    return arguments[0] + arguments[1];
  }
}