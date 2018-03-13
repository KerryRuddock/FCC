/*
** Function: Take 2 or more arrays returning an array of symmetrical differences.
** @function sym
** @summary  Take 2 or more arrays returning array of symmetrical differences.
** @param 	 {array} arguments array is checked for total arguments.length
** @returns  {array} symmetrical difference.
** @see {@link https://jsperf.com/ (not required - same solution)
*/

function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    // .reduce pass#1 accumulator=arr1, current=arr2
    // .reduce pass#2 accumulated=SymDiff, current=arr3
    function symDiff(arrayOne, arrayTwo) {
        var result = [];

        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}

