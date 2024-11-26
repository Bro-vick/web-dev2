// String methods
let str = "Welcome to Javascript";

// length property: used to get the length of a string
console.log(str.length);

//split method: is used to split the string into an array of words
console.log(str.split(", "));
let str5 = "obinna"
let obiArray = str5.split("")
console.log(obiArray);

//replace method: is used to replace matching text 
console.log(str.replace("to", "?"));
console.log(str.replace(/e/g, "*"));
console.log(str);

//includes method: 
console.log(str.includes("Javascript"));

//toLowerCase()
console.log(str.toLowerCase());

//toUpperCase()
console.log(str.toUpperCase());

//slice(start, end) method
console.log(str.slice(0, 7).toUpperCase());

//substring: is similar to the slice method but doesn't allow negative indices
console.log(str.substring(10));

// charAt(index): Returns the character at a specified index
console.log(str.charAt(11));

// charCodeAt(index): Returns the unicode of the character at the specified index
console.log(str.charCodeAt(12));

// concat: 
let str1 = "Hi there";
let str2 = str1.concat(" ", str);
console.log(str2);

// These two are array methods

let obiSort = obiArray.sort();
console.log(obiSort);

let newObi = obiSort.join("");
console.log(newObi);