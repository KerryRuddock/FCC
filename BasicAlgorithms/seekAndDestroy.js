/*
** Function: Takes array of items followed by an arbitrary # of items
**  to remove from the array. array-like arguments object is used here.
** @function destroyer
** @summary  Removes an optional amount of items from an array.
** @param 	 {array} various items
** @param    ... arbitrary # of numeric or string items to remove from array.
** @returns  {array} array filtered of removal items.
*/

function destroyer() {
	'use strict';
  var args = Array.prototype.slice.call(arguments);
  var array = args.shift(); //args contains items to filter after shift
  
  return array.filter( function (item) {
    return args.indexOf(item) < 0;
  });
}
 
destroyer(["tree", "hamburger", 53], "tree", 53)
