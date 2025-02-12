// // var, let & const
// var age = 18; // Global Scope - Not Recommended
// // Block Scope
// let Age; // Declaration
// Age = 18; //Initialisation
// console.log(Age);
// Age = 20
// console.log(Age);
// const personAge = 18; //Declared & initialised

//Object
// let car = {
//     brand: "Tata",
//     model: "Punch",
//     manufacturedAt: "India",
//     manufacturedOn: 2024,
//     amount: 500000
// };

// console.log(car);
// carBrand = car.brand;
// console.log(carBrand);
// carModel = car.model;
// console.log(carModel);

// //Array
let even = [2,4,6,8,10];
// console.log(even);
// console.log(even[2]);

// Array methods: push, pop
even.push(12);
console.log(even);
even.pop();
console.log(even);

//functions in JS are also called as Methods

function sum(a,b){
    return a+b;
}

console.log("The sum of the values are: ");
console.log(sum(20,30))
console.log(sum(60,80))
console.log(sum(100,200));

const add = (a,b) => a + b;

console.log("The sum of the values using fat arrow function (=>)");
console.log(add(15,25));
console.log(add(96,126));
console.log(add(159,195));

console.log("The cube of values using arrow function: ")
const cube = (a) => a*a*a;
console.log(cube(2));
console.log(cube(3));
console.log(cube(4));

console.log("Method for displaying person name: "); 
const greet = (personName) => ('Hello ' + personName);

console.log(greet('Vaishnavi'));
console.log(greet('World!'));

//Map Method
const numbers = [1,2,3,4,5,6,7];
const squared = numbers.map(num=>num*num);
console.log(squared);

//Filter Method
const Numbers = [3,6,9,12,15,18,21]
const MultiplesOf2 = Numbers.filter(num => num%2 == 0);
console.log("Multiples of 2: "+ MultiplesOf2);

//Reduce Method
const someNumbers = [1,3,4,7,9,13,15];
const sumOfNumbers = someNumbers.reduce((temp, present) => temp + present,0);
console.log("Sum of given numbers are: "+ sumOfNumbers);