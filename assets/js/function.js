let _age = 13;
let myName2  ="Annie";


function checkAge() {
    let _age = 15;
    let myName2  ="Mary";
    console.log('local scope', myName2);

    if (_age>= 16) {
        console.log("You may proceed and attend");
    } else {
        console.log("Sorry, we can't let you in.")
    }
}
checkAge() // call, invoke, execute

console.log('global scope', myName2);


// functions that take input
const MIN_AGE = 16;
function checkAgeV2(age){
if(age <=MIN_AGE){
    console.log("Welcome to the traine program")
}else{
    console.log("You may proceed with the internship")
}
}

// calling the function
checkAgeV2(12);
checkAgeV2(14);
checkAgeV2(27);
checkAgeV2("Hello"); // will fail string vs number

function checkAgeV3(age){
    if(typeof age =='number' && age <=MIN_AGE){
        console.log("Welcome to the traine program")
    }else if(typeof age =='number' && age > MIN_AGE){
        console.log("You may proceed with the internship")
    } else {
        console.log("Invalid data provided")
    }
    }
    
    // call V3
    checkAgeV3(34); // valid
    checkAgeV3("35"); // invalid
    checkAgeV3("Hello"); // invalid

    function printNumber(num, somefunction){ // call back function
        somefunction(num);
    }

    function changeAge(num){
        console.log(num+=1);
    }
    printNumber(22, checkAgeV3)
    printNumber(24, changeAge)

    function add(a ,b){
        return a + b;
    }
    let num1 = add(14,32)
    let num2 = add(23)


    console.log("Results", num1, "", num2);







// nameless, anonymous
let sayName = function(name) {
    console.log("My name is:", name)
}
 sayName("Resty");

 //setTimeout(function(name="Resty"){
 //console.log("Hi", name)
 //}, 200)
  
 // arrow functions are also anonymous
 // () => value
 const sayNameV2 = () => console.log("Hi there Resty")
 const sayNameV3 = (name) => {
     console.log("Hi there", name);
 }
 const addV2 = (a,b) => {
     return a+b;
 }





    