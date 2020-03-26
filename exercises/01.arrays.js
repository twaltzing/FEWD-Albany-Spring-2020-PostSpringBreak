/////////////////////////
//////// Arrays /////////
/////////////////////////

/**
 * @see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * @description
 * create an arrays of names
 */
names = ['Cindy', 'Jan', 'Marsha', 'Bobby', 'Peter', 'Greg', 'Alice', 'Sam the Butcher'];
for (i=0; i<names.length; i++){
console.log(names[i]);
}
/**
 * @description
 * access the first item in the array above
 */
first = names[0];
console.log("The first name in the array is " +first);
/**
 * @description
 * access the last character in the first item in the array above
 */
lastCharPos = first.length-1;
// console.log("Position is "+ lastCharPos);
lastChar = first[lastCharPos];
console.log("The last character of the first name ("+first+") is " +lastChar);
/**
 * @do
 * include this file in a new pull request
 */
