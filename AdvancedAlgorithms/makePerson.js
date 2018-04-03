/*
** Function: constructor to create an object of type 'Person.
** @function Person
** @summary  constructor to create an object of type 'Person'
** @param 	 {string} optional space seperated string "firstName lastName" 
** @returns  {object} returns an object of type 'Person'
** @see {@link https://jsperf.com/ (not required)
*/
function Person(firstAndLast) {
  
   var fullName = firstAndLast;
 
  // Getters
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
    
  this.getLastName = function() {
    return fullName.split(' ')[1];
  };
  
  this.getFullName = function() {
    return fullName;
  };  
  
  // Setters
  this.setFirstName = function(firstName) {
    fullName = firstName + " " + fullName.split(' ')[1];
  };
    
  this.setLastName = function(lastName) {
    fullName = fullName.split(' ')[0] + " " + lastName;
  };
  
  this.setFullName = function(name) {
    fullName = name;
  };   
}


