/*
** Function: use argument data to match and update JSON object.
** @function updateRecords
** @summary  use argument data to match and update JSON object.
** @param 	 {number} album id
** @param 	 {string} string property may be "artist" or "tracks"
** @param 	 {string} data to add based on previous argument, or "" to delete property
** @returns  {object} entire collection returned
** @see {@link https://jsperf.com/ (not required - same solution)
*/

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(record, prop, data) {
	'use strict';
  
    var album = collectionCopy[record];
    
    if ( data === "" ) {
        delete album[prop];   
    } 
    else if ( prop === "artist" ) {
      album[prop] = data;
    }
    else if ( prop === "tracks") {
      if ( ! album[prop] ) {
        album[prop] = [];
      }
      album[prop].push(data);
    }
    return collectionCopy;
}
