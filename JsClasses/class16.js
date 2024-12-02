// The Global Object: This provides a way to access globbally scoped properties and methods. Depending on the environment (browser or nodejs).
// Common Global Properties
/* 
    1) NaN - represents "Not a Number" value
    2) undefined - reepresents undefined values
    3) infinity - reprents positive infinity
    4) globalThis - provides a standard way to access the global object across environments.
*/
console.log(NaN, Infinity, globalThis);

// Common Global Methods
// 1) eval(): Evaluates Javascript code represented as strings
console.log(eval('22 + 2'));

// 2) isNaN(): determines if a value is NaN
console.log(isNaN('2 + 2'));

// 3) isFinite(): determines a value is a finite number
console.log(isFinite(10));

// 4) parseFloat(): parses a string and returns a floating-point number.
console.log(parseFloat('3.142'));

// 5) parseInt(): parse a string and returns an integer.
console.log(parseInt('3.642'));

// Browser Specific-Global Object(window)
// In the browser, the global object window has its properties and methods
// methods: alert(), prompt(), confirm(), window.location.href, etc


// nodejs global Object
// properties: 
console.log(__dirname, __filename);
//methods:
// console: which provides a simple debugging console.
// console.log, .error, .warn, .info, .table etc

// setTimeout() -- This just calls a function after a specified number of milliseconds.
setTimeout(() =>{
    console.log('Executed after 3 seconds')
}, 3000);
// setInterval(() => {
//     console.log('Executed every 3seconds')
// }, 3000);

const interval = setInterval(() => {
    console.log('Executed every 3seconds')
}, 3000);
// clearInterval() - this stops the setInterval loop
// interval();

setTimeout(() => clearInterval(interval), 15000);