/*
** Function: Process items orbiting given their Avg Altitudes this returns Time in seconds.
** @function orbitalPeriod
** @summary  Uses Kepler's Third Law to determine Time in Seconds of an orbiting object in space
** @param 	 {array} An Array of Objects { name: 'name', avgAlt: avgAlt }
** @returns  {array} returns an array of objects { name: 'name', orbitalPeriod: tSecs }
** @see {@link https://jsperf.com/ (not required)
*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.forEach( function( item ) {
    // Calculate the Orbital period value
    var temp = Math.round( 2 * Math.PI * Math.sqrt( Math.pow( earthRadius + item.avgAlt, 3 ) / GM ));
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = temp;
  });
  return arr;
}

