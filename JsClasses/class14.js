// The Javascript prototype property allows us to add new properties to object constructors.
function Tesla(tName, tcolor, tmodel, tyear){
    this.name = tName;
    this.color = tcolor;
    this.model = tmodel;
    this.year = tyear;
    // Default property
    this.isNew = true;
    this.engine = "V8-Fuel Engine";
    this.drive = function(){
        console.log(`I am driving my ${this.name} Tesla now.`);
    };
    this.spec = ()=>{
        console.log(`Tesla name ${this.name}, ${this.color} color, model ${this.model}, was made in ${this.year}`);
    };
};

let tesla1 = new Tesla("Explorer", "Red", "Luxry", 2022);
let tesla2 = new Tesla("Cyber Truck", "Blue", "Luxry", 2023);

Tesla.prototype.owner = "Elon musk";
let tesla3 = new Tesla("Cyber Truck", "Blue", "Luxry", 2023, "test");
// console.log(tesla3.owner)
// console.log(tesla1)
// console.log(tesla2)

Tesla.prototype.charge = function (){
    console.log(`Your ${this.name} is currently charging.`)
}

tesla2.charge();

// Javascript Object Methods
// 1)  Object.assign(target, source) -- Copies properties from a source object to a target object
// 2)  Object.create(object) -- Creates an object from an existing object
// 3)  Object.entries(object) -- Returns an array of the key/value pairs of an object
// 4)  Object.fromEntries() -- Creates an object from a list of keys/values
// 5)  Object.keys(object) -- Returns an array of the keys of an object
// 6)  Object.values(object) -- Returns an array of the property values of an object

// Target Object
const student1 = {
    firstName: "Victor",
    lastName: "George",
    age: 30,
    course: "Chemistry",
    greet(){
        console.log(`Hello my name is ${this.firstName}`);
    }
}
// Source Object
const student2 = {
    firstName: "Obinna",
    lastName: "Obute",
    age: 28
}
console.log(student1)

Object.assign(student1, student2)
console.log("A few moments Later...")
console.log(student1)

const student3 = Object.create(student1);
student3.firstName = "Isaiah";
student3.greet()
console.log(student3)
console.log(student3.lastName)

let studentInfo = Object.entries(student2);
console.log(studentInfo);

const phones = [["Infinix", 16], ["Tecno", 25], ["Redmi", 37]];

const phonesObject = Object.fromEntries(phones);
console.log(phonesObject);

console.log(Object.keys(phonesObject));
console.log(Object.values(student1));

const fruits = {}

fruits["fname"] = "Orange";
fruits.price = "$44"

console.log(fruits)