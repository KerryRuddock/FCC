/*
** Function: Validate Entry of a US phone number. 10 digits, various acceptable formats.
** @function telephoneCheck
** @summary  Validate Entry of a US phone number. 10 digits, various acceptable formats.
** @param 	 {string} 10 digit phone# to validate
** @returns  {boolean} True if valid phone#
** @see {@link https://jsperf.com/ (no jsperf tests done.)
*/
function telephoneCheck(phone) {
	'use strict';
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/g;
  
    return regex.test(phone);
}
