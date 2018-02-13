/*
** Function: Takes a String, capitalizes First Letter in each Word, lowercase for remaining word letters.
** @function titleCase
** @summary  Capitalize each word in a string.
** @param 	{string} str
** @returns {string} Capitalizes each first letter of each word in sentence. 
*/
function titleCase(str) {
	'use strict';
	var s1 = [], s2 = [], result =[];
    var arr = str.split(' ');
	
	arr.forEach( function(word, index, words) {
	   	
		if (word.length < 2) {
			s1[index] = word.toUpperCase();
			result.push(s1[index]);
		} else {
		  s1[index] = word.slice(0,1).toUpperCase();	
			s2[index] = word.slice(1,word.length).toLowerCase();
			result.push( s1[index] + s2[index] );
		}
	});
	return result.join(' ');
}

 

