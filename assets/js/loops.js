/*
syntax
for(counter, condition, expression){}
// code goes here
}*/


// elevation going down
for(let floor=3; floor>1; floor--){
    console.log("Going down");
    if(floor ==1){
        console.log("You have arrived at your destination")
    }
}

for(let num=0; num<=10; num++){
    console.log("Hi there")
}

// while loop
const REQUIRED_AGE = 18;
let currentAge1 =2;

while(currentAge1 < REQUIRED_AGE){
    currentAge1+=1;
    console.log("You are under age", currentAge1);
   // currentAge1++;
}

// do while
let numb=0;
do{
    numb ++;
    console.log("Hi there number:", numb)
    
} while (numb<10){

}

// forEach
// for(of)
// array
/*
let sumArray = [];
let myArrayV2 = new Array();    TBD
*/

let fruits = ["Pears", "Jack Fruit", "Grapes", "Banana","Mellon", "Mangoes"];

// total number of items
//array.length

let lastItem = fruits[fruits.length-1]
console.log(fruits[5])
console.log("last item is:",lastItem);
fruits.push("Apples") // add apple to fruits
lastItem = fruits[fruits.length-1]
console.log(fruits)
console.log("last item is:",lastItem);
fruits.push("Lemon")
lastItem = fruits[fruits.length-1]
console.log("last item is:",lastItem);

// 
let numSet1 = [1,2,3,4,5];
let numSet2 = [6,7,8,9,10];

 let numbers = numSet1 + numSet2; // approac1
 let numbers2 = numSet1.concat(numSet2) // approach2
 numbers= [...numSet1, ...numSet2] // spread operator
 numbers.push("hello")
 numbers.push(12)

 console.log("appr1", numbers);
 console.log("appr2", numbers2);
 console.log(numbers === numbers2)

 // loop over array
 for(let item=0; item<fruits.length; item++){
     console.log("fruits", fruits[item])
 }

 // appr:2
 fruits.forEach(function(fruit){
     console.log("FR:", fruit);
     let appleIndex = fruits.findIndex(
         fruitName => fruitName.toLowerCase() === 'apples'
     )
    if (appleIndex != -1) {
        console.log("found it, exit", appleIndex);
    }
 } )