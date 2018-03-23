/*
** Function: Compare and update the inventory in a 2D-array (1st arg) from a 2D-array (2nd arg). 
** @function updateInventory
** @summary  Update Inventory using target and source 2D-arrays.
** @param 	 {number} album id
** @param 	 {array} target Inventory
** @param 	 {array} source Inventory
** @returns  {array} Inventory sorted by Item Description
** @see {@link https://jsperf.com/updateinventory-eggs
*/

// Example Inventory
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(target, source) {
	'use strict';
  var tlen = target.length, slen = source.length, index;

  // Update Item Qty else if no item match, create new item
  for (var j = 0; j < slen; j++) {     // source
    for (var k = 0; k < tlen; k++) {   // target

      if ( target[k][1] === source[j][1] ) {
        index = k;
        break;
      }
      else {
        index = -1;
      }
    }
    if (index > -1) {
      target[index][0] += source[j][0]; 
    } 
    else {
      target.push( source[j] );
    }
  }
  
  return target.sort( function ( a, b ) {
    return ( a[1] < b[1] ) ? -1 : 1;
  });
}
