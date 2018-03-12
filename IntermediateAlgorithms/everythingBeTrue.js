/*
** Function: Examine a collection of objects. Predicate is truthy on all collection values
** @function truthCheck
** @summary  Examine a collection of objects to see if it matches a predicate argument
** @param 	 {object} collection
** @param    {string}
** @returns  {string} converted binary string to characters
** @see {@link https://jsperf.com/everything-be-true-eggs
*/
function truthCheck(collection, str) {
	'use strict';
  var len = collection.length,
      pred = false;
  
  for ( var i = 0; i < len; i++ ) {
    for ( var key in collection[i] ) {
      if ( collection[i].hasOwnProperty(key) && key === str ) {
        if ( collection[i][key] ) {
           pred = true;
           break;
        } else {
          pred = false;
          break;
        }
      }
    }

    if (( i < len -1) && pred ) {
      pred = false;
    } else {
      break;
    }
  }
  return pred;
}
