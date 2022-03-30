// commonly used operators in js

// assignment operators
let currentAge = 28;
let ageIn5Yrs = (currentAge+5) // option 1
//ageIn5Yrs += // get the value of ageIn5Yrs and something
//ageIn5Yrs += (currentAge+5);
//console.log(ageIn5Yrs)

age =0;
// age+=6; same as below
age = age + 6;

let ageInHalf = ageIn5Yrs/2;
let num = 2;


num *= 5;
// num = num*5
console.log('>>>>>>>', num);

let age2YrsAgo =(num-2);

//Modulo operator

//let remainder = age2YrsAgo % 3; returns the remainder after division

//logical operators
let truth = true && true;
let lie = true && false;
let lie2 = lie || truth;
let liesh = truth && lie;

//Comparison operators
let numOne, numTwo;// camelCase js
numOne = 55;
numTwo = 78;
let isEqual = (numOne == numTwo);// ==
let equalStrict = (numOne === numTwo); // strict comparison
let isGreater = (numTwo > numOne);// >
let isLess = (numTwo < numOne); // <
let isLessOEqual = (numOne <= numTwo);// <=
let isGreaterOEqual = (numOne >= numTwo);// >=
let notEqual = (numOne != numTwo);
let notEqualStrict = (numOne !== numTwo);


//let num_three;// snake_case python
//const CURRENT_YEAR = 2022;


// data types not operators