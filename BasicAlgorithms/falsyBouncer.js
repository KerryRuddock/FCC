/*
** Function: Remove all falsy values from an array.
** @function bouncer
** @summary  Remove false, null, 0, "", undefined, Nan from array
** @param 	 {array} array may contain falsy values.
** @returns  {array} array purified of falsy values.
*/
function bouncer(arr) {
	'use strict';
  var result = [];
  arr.forEach( function (item) {
    if ( item ) {
      result.push(item);
    }
  });
  return result;    
}
 
}
 
bouncer(["hello", "heo"]);
