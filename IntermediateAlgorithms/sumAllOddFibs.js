/*
** Function: Sum odd Fibonacci Numbers less than or equal to parameter given.
** @function sumFibs
** @summary  Sum odd Fibonacci Numbers less than or equal to parameter given.
** @param 	 {number} 
** @see {@link https://jsperf.com/ (not done for this function-eggs} 
** @returns  {number} 
*/
function sumFibs(num) {
 
  var prevNum = 0, currNum = 1, total = 0; result = 0;
  while ( currNum <= num ) {
     if ( currNum % 2 !== 0) {
        result += currNum;
     }
     total = currNum + prevNum; //1+0, 1+1, 2+1, 3+2
     prevNum = currNum;         //1, 1, 2, 3
     currNum = total;           //1, 2, 3, 5
  }   

  return result;
}
