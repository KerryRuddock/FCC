/*
** Function: Take two or more arrays and return a new unique array in order.
** @function uniteUnique
** @summary  Take two or more arrays and return a new unique array in order.
** @param 	 {array} 
** @see {@link https://jsperf.com/uniteunique-eggs (not done for this function-eggs} 
** @returns  {array} 
*/
function uniteUnique(data) {
 	var args = [].slice.call(arguments), 
      result = [];
      
  var argsLen = args.length;
  for ( var i = 0; i < argsLen; i++ ) {
    
    var numArray = arguments[i];
    var numArrayLen = numArray.length;
    
    for ( var j = 0; j < numArrayLen; j++ ) {
      
      var uniq = numArray[j];
      if ( result.indexOf( uniq ) < 0 ) {
        result.push(uniq);
      }
    }
  } 
  return result;
}
