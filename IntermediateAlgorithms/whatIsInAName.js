/*
** Function: Search an array of Objects using 2nd argument object as the search item. 
**           Return an object that matches the search item's property and value.
** @function whatIsInAName
** @summary  Search an array of objects, returning an object that matches in property name and value.
** @param 	 {array} collection of objects
** @param 	 {object} source object to search on
** @see {@link https://jsperf.com/whatisinaname-eggs} 
** @returns  {array} objects from collection array that match. 
*/
function whatIsInAName( collection, srcObj ) {
	'use strict';

  var srcKeys = Object.keys( srcObj );

  return collection.filter( function ( obj ) {
    return srcKeys.every( function( item ) {
      return obj.hasOwnProperty( item ) && obj[item] === srcObj[item];
    });
  });

}
console.log ( whatIsInAName([ { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) );
 