/*
** Function: Sum all prime numbers
** @function sumPrimes
** @summary  Sums all prime numbers from 2 up to a given parameter
** @param 	 {number} 
** @returns  {number} the result of the prime number sum
** @see {@link https://jsperf.com/sumallprimes-eggs} for an intermediate algorithm that is much faster.
*/
function sumPrimes(num) {
	'use strict';
  // Eratosthenes algorithm to find all primes under num
  // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  var array = [], upperLimit = Math.sqrt(num), sum;

  // Make an array from 2 to (n - 1)
  for (var i = 0; i <= num; i++) {
      array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
          for (var j = i * i; j <= num; j += i) {
              array[j] = false;
          }
      }
  }
  
  for (var i = 2; i <= num; i++) {
      if(array[i]) {
          sum += i;
      }
  }

  return sum;
}

