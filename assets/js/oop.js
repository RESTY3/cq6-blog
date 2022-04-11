class person{
    name ="Devota";
    gender = "Female";

}


// instantiate
const myPerson = new Person()


//console.log(myPerson.);
// object 2
class Person2{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender; // this means the current object
    }
    // static method  can be called without instantiating the class
    static getAgeAndName(){

            console.log(this.name, "", this.age);
        }
        printName()
    }


// instantiate again
let p1 = new Person2("Resty", 20, "Female");
let p2 = new Person("Tracy",21)


Person2. getAgeAndName();
//p2.getAgeAndName();
console.log(p2.age, p2.name)

p1.printName();
p2.printName();