var counter = function(arr){

  return 'There are ' + arr.length + ' elements in this array.'

};

var adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

//module.exports = counter;
module.exports.counter = counter; //the counter property of the exports object is the counter function
module.exports.adder = adder;
module.exports.pi = pi;


//OR
/*
module.exports.counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array.'
};

module.exports.adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`;
};

module.exports.pi = 3.142;
*/





//TO USE THESE FUNCTIONS IN app.js, paste this into app.js:
/*
var stuff = require('./calling_functions.js');

console.log(stuff.counter(['shaun', 'crystal', 'ryu'] )); //return counter in the exports object
console.log(stuff.adder(3,8)); //return the adder property of the exports object
console.log(stuff.pi);
*/
