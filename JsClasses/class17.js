// Storing data in the browser: We can store data in the browser using local storage, session storage and cookies.

// localStorage: This provides a way to store key-value pairs in the browser with no expiration date. The data persists even after the browser is closed and reopened. It provides a much larger storage limit (around 5 - 10MB per domain) compared to cookies.

let firstname = prompt("Enter your first name:");
let lastname = prompt("Enter your last name:");

localStorage.setItem("firstname", firstname);
localStorage.setItem("lastname", lastname);

// the setItem() method is used also to update the local storage
// localStorage.setItem("firstName", firstname);

// the getItem() method is used to acsess the local storage
console.log(localStorage.getItem("lastname"), localStorage.getItem("firstname"))

// Clearing the local storage
// localStorage.clear();


// Session Storage: This is similar to the localstorage but persists only for the duration of the page session. Once the browser tab is closed the data is cleared, It is useful for storing tempoary data, that we don't need to persist across sessions.
sessionStorage.setItem("age", 30);
sessionStorage.setItem("username", "Emeka115");

// Session storage uses the same methods as localstorage.

//Cookies: These are data stored in small text files on the computer, the allow us store user information on web pages, basically they solve the problem of remembering the user's information.


// JSON
/*
    JSON stands for Javascript Object Notation, It is a text format for storing and transporting data. JSON makes it possible to store javascript objects as text. Example
*/
'{"name":"John","age":30, "car":null}' // This is an example of a JSON string, it defines an object with three properties: name, age, car and each poperty has a value.

// The JSON format can be converted to a javascript object using JSON.parse()
// Javascript also has an inbuilt function for converting an object into a string: JSON.stringify(). This process is knwon as object serialization and deserialiation
const person = {
    lastname: "John",
    age: 40,
    country: "USA"
};
console.log(person);

// Object serialization -- Converting JS Objects to JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString)

// Object deserializaion - Converting JSON string to JS Object
const jsObject = JSON.parse(jsonString);
console.log(jsObject);
