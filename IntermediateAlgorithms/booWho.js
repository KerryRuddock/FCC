/*
** Function: Check if a value is a boolean primitive.
** @function booWho
** @summary  Check if a value is a boolean primitive.
** @param 	 {boolean} 
** @see {@link https://jsperf.com/ (not done for this function-eggs} 
** @returns  {boolean} 
*/
function booWho(data) {
 
   return typeof data === "boolean" ? true : false;
}