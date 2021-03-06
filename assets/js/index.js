// accessing elements on the page
// access using css class
let button1 = document.getElementsByClassName('btn');
// console.log(buttons)
// button.forEach()

// access elements using element id
let byId= document.getElementById('second');
let byId2= document.getElementById('seconds'); // this fails since we have no seconds

// access elements with the tag name
let allH3 = document.getElementsByTagName('h3');
// console.log(allH3s)

//single element querySelector
console.log(document.querySelector("#second"));
console.log('first btn',document.querySelector(".btn"));

// all items using querySelectorAll
console.log('every btn',document.querySelectorAll(".btn"));
let inputElem = document.querySelector("input[type='email']")

// simple form processing
const form = document.querySelector("form")
let email = form.email;
let content = form.content;
let title = form.title;

// process email and get author
function getAuthor(email){
  return email? email.substring(0, email.lastIndexOf('@')):'';
}

form.addEventListener('submit', (e) =>{
  e.preventDefault();  // stop operations until i say so
 // console.log("I am the one talking!")
 let blogBost = {
   author: getAuthor(email.value),
   title: title.valueOf,
   content: content.value
}
 //console.log('submitted', blogBost)
 createPostCard(blogBost);
 form.reset;
});


const feed = document.querySelector('#feed');
function createPostCard(post){
let cardHolder = document.createElement('div');
let cardContent = document.createElement('div');
let postHeader = document.createElement('span');
let postAuthor =document.createElement('p');
let postContent =document.createElement('p');

// add data
postHeader.textContent = post.title;
postAuthor.textContent = post.author;
postContent.textContent =post.content;

// add styles
postHeader.className ='card-title';
cardHolder.className ='card';
cardContent.className ='card-content';

// shape up the card
cardContent.appendChild(postHeader);
cardContent.appendChild(postAuthor);
cardContent.appendChild(postContent);
cardHolder.appendChild(cardContent);

//console.log('final card>>>',cardHolder)
feed.appendChild(cardHolder);

}
form.style.padding= '12px';

//console.log(getAuthor('restynassaka3@gmail.com'))

//window.addEventListener('mousemove', e=>{
  //e.preventDefault()
  //console.log(e)
  //console.log(e.offsetX, e.offsetY)
//})

// input events
const checkBox = document.querySelector('#remember');
checkBox.addEventListener('change', function(e){
  e.preventDefault();
  e.target.value=!e.target.checked;
  //console.log(e.target.checked)
})