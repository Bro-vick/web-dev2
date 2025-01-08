// What are Higher Order Functions? These are functions that can take other functions as arguments and return their results. E.g foreach, filter, sort, map, etc

// Taking a function as an argument i.e callback
function sayHello(){
    console.log("Hello");
};

function greet(funcArg, n){
    for(let i = 0; i < n; i++){
        funcArg();
    };
};

greet(sayHello, 10)

setTimeout(() => greet(sayHello, 3), 4000)

// Returning a function
function multiplier(factor){
    return function(x){
        return factor * x;
    };
};

let double = multiplier(2); // A function that doubles a number
console.log(double(5)); // Output: 10

//
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   let retail = []
//   for(let i = 0; i < companies.length; i++){
//     if(companies[i].category == "Retail"){
//         retail.push(companies[i]);
//     }
//   }
//   console.table(retail);

// forEach
companies.forEach((company) => console.log(company.end - company.start))

// filter
const cannotDrink = ages.filter(function(age){
    if(age <= 18){
        return true;
    };
});
console.table(cannotDrink)

// filter the companies array and give me a new aray of companies in the retail category and of companies that has lasted more than 10 years.
const retailedCompanies = companies.filter(company => company.category === 'Retail');
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

console.table(retailedCompanies);
console.table(lastedTenYears);

  // map
const companyNames = companies.map(company => `${company.name} is a wonderful company.`);
// const companyNames = [];
// for (let i = 0; i < companies.length; i++){
//     companyNames.push(companies[i])
// };
// console.table(companyNames);

// sort
// Ascending order
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);
// Descendng Order
const descendSortedAges = ages.sort((a, b) => b - a);
console.log(descendSortedAges);

// reduce
   