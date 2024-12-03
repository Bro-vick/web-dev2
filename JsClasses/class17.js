// Storing data in the browser: We can store data in the browser using local storage, session storage and cookies.

// localStorage: This provides a way to store key-value pairs in the browser with no expiration date. The data persists even after the browser is closed and reopened. It provides a much larger storage limit (around 5 - 10MB per domain) compared to cookies.

let firstname = prompt("Enter your first name:");
let lastname = prompt("Enter your last name:");

localStorage.setItem("firstname", firstname);
localStorage.setItem("lastname", lastname);