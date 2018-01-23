/* Function: Check if string is a palindrome.
** @param {string}
** @return {boolean} True if string is a palindrome, false otherwise.
*/
function palindrome (str) {
  var re = /[a-zA-Z0-9]/g; 
  var isPalin = false;
  var myString;
   
  if ( typeof str === "string" ) {
    myString = str.toLowerCase();
    console.log(myString);
    var myArray = myString.match(re);
    var i = 0;
    var j = myArray.length - 1;
    
    while ( i++ < j-- ) {
      if ( myArray[i] !== myArray[j] ) {
        isPalin = false;
        break;
      } else {
        isPalin = true;
      }
    }
  }
  return isPalin;
}
palindrome ('eye');