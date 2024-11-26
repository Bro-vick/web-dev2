// Objects In Javascript
/*
    Javascript is an object based language, hence objects are the most important data types and they form the building blocks for modern javascript.
    Objects are variables with many values, these values are written as 
    name: value pairs.
    It's common practice to declare objects with the const keyword.
*/
// Types of objects
/*
    1) Built-in Objects: These are objects provided by Javascript, such as Array, Number, Date, Math, String, etc
    2) Custom / User-defined Objects: These are objects created by the programmer to suit their specific needs.
*/
// 1) Creating an object with the object literal notation.
const student = {
    firstName: "John",
    lastName: "Wick",
    age: 30,
    country: "USA",
    // A method is a function inside an object
    greet: function () {
        // this is a keyword used to refer to the current object 
        console.log("Hi there my name is", this.firstName, this.lastName);
    },
    isRegistered: true
};

// Accessing Object properties
console.log(student.firstName, student.lastName);
console.log(student["country"]);
student.greet();

// Updating Object properties
student.lastName = "The Beloved"
console.log("A few moments later...")
console.log(student.firstName, student.lastName);
student.greet();

// Deleting Properties of an object 
delete student.isRegistered;
console.log(student);

// 2) Creating an instance of the global Object
const car = new Object;
car.name = "Mercedes";
car.color = "Red";
car.year = 2010;
car.isRegistered = false;
car.drive = () => {
    console.log("The " + car.name +  " car is driving!!!")
}

console.log(car);
car.drive()
// 3) Using the Constructor function
function Bike(bName, bcolor, bmodel, byear){
    this.name = bName;
    this.color = bcolor;
    this.model = bmodel;
    this.year = byear;
    this.drive = function(){
        console.log(`I am driving my ${this.name} bike now.`);
    };
    this.spec = ()=>{
        console.log(`Bike name ${this.name}, ${this.color} color, model ${this.model}, was made in ${this.year}`);
    };
};

let bike1 = new Bike("Yamaha", "red", "racing");
let bike2 = new Bike("Ducati", "white", "luxry", 2020);
let bike3 = new Bike("Ducati", "white", "luxry", 2020, 40);

console.log(bike1)
console.log(bike2)
console.log(bike3)


