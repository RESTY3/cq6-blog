firstName = "";
lastName = "Resty";
firstName ="Nassaka";
let city = "Kampala";
let district = "Kampala";
//let _1stPatient = "Patient 0";
//fullName = "".concat(firstName, "",lastName, "", city, "",district);
//fullName = firstName + "" + lastName + "" + city + "" + district;
fullName = `${firstName} ${lastName} ${city} ${district}` //tilde
console.log(fullName);


lastName = " Resty";
name = "Resty";
//console.log(lastName.trim()==name) // removes space at the beginning of the string

//console.log(fullName.replace(/ /g,""))// removes spaces in the middle 

console.log(lastName.toLowerCase() == name.toLowerCase);

// object
// let person = {}; // declaration of variables in objects
// let person = new object();

let codeQueenAddress = {
    town: "Ntinda",
    city: "Kampala",
    country: "Uganda",
    seatingCapacity: 10000,
    isAvailableForRent: "true",
    building: "Ntinda Complex",
    office: "Innovation Village",
    43567: "some inform"
}

// get infor out of object
//console.log('office',codeQueenAddress.office)// dot notation
//console.log('officie',codeQueenAddress['office']);
//console.log('capacity',codeQueenAddress['seatingCapacity']);

let town = codeQueenAddress.town;
let officeName = codeQueenAddress.office;
let seatingCapacity = codeQueenAddress['seatingCapacity'];

codeQueenAddress[43567] // for numbers
// assigning more properties
codeQueenAddress.isAvailable =true;

console.log('town >>>>', town)
codeQueenAddress.town ="Kamwokya"; // changes the value of town
codeQueenAddress.office = "The Hive Collab";
codeQueenAddress.hasElevator = true;

console.log('town >>>>', town);

console.log(codeQueenAddress);

//let newOffice = object.assign({}, codeQueenAddress); // makes a detached copy
//newOffice = codeQueenAddress // assign by reference
//let altOffice = {... codeQueenAddress}// passing an object

//altOffice = {...altOffice, office: 'Nakawa', town: 'Nakawa'}// changes the values of an object