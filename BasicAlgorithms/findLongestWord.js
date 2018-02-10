/*
** Function: Takes a String and returns longest word as a String.
** @function longestWord
** @summary  Longest Word in a String (no type checking or special character checking)
** @param 	{string} str
** @returns {number} longest word in length.
*/
function findLongestWord(str) {
	'use strict';
	var longest = "";
    var arr = str.split(' ');

	arr.forEach( function(word, index, words) {
	   	if ( word.length > longest.length ) {
			longest = word;
		}
	});
	return longest.length;
}    


 

