/*
15.4.4.19 Array.prototype.map ( callbackfn [ , thisArg ] )
callbackfn should be a function that accepts three arguments. map calls callbackfn once for each element in the array, in ascending order, and constructs a new Array from the results. callbackfn is called only for elements of the array which actually exist; it is not called for missing elements of the array.

If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackfn. If it is not provided, undefined is used instead.

callbackfn is called with three arguments: the value of the element, the index of the element, and the object being traversed.

map does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.

The range of elements processed by map is set before the first call to callbackfn. Elements which are appended to the array after the call to map begins will not be visited by callbackfn. If existing elements of the array are changed, their value as passed to callbackfn will be the value at the time map visits them; elements that are deleted after the call to map begins and before being visited are not visited.
*/

var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val,index,obj){
  console.log (val,index,obj);
  return val * 4;
});
console.log('log: ' + timesFour); // returns [4, 8, 12]
console.log('log: ' + oldArray);  // returns [1, 2, 3]