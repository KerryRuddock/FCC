/*jslint plusplus: true */
/* Function: Factorial of a non-negative integer number.
** @summary
** @param {number}
** @return {number} Factorial is returned, or 0 if invalid Number
*/
function factorial(num) {
  var fNum = false;
  var fName = "factorial ";
  
  if ( typeof num !== "number" ) {
    console.log(fName + num + " invalid type - must be number")
  } else if ( num < 0 ) {
    console.log(fName + num + " must be a positive integer")
  } else { 
    if ( num === 0 ) { num = 1; } // 0! = 1 is special case.
    fNum = num;
    while ( --num > 0 ) {
      fNum *= num;
      if ( !Number.isSafeInteger(fNum) ) {
        console.log (fName + "result > Safe Integer range");
        fNum = false;
        break;
      }
    }
  }
  return fNum;
}
 

