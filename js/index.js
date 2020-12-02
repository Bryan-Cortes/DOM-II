// Your code goes here

// ****************SELECTORS***************
const header = document.querySelector('.nav-container');

const logo = document.querySelector('.nav-container .logo-heading');

const headings = document.querySelectorAll('h2, h4');

const paragraps = document.querySelectorAll('p');

const nav = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav-link');

const button = document.querySelectorAll('.btn');


// ************* SELECTORS STYLES **********

// sign up button 

button.forEach(item => item.style.backgroundColor = 'green');
button.forEach(item => item.style.width = '25%')
button.forEach(item => item.style.padding = '1%')
button.forEach(item => item.style.margin = '2% auto')

// ********mouseover .addEventListener ************


// logo

logo.addEventListener('mouseover', (event)=>{
  logo.style.color ='red';
});

logo.addEventListener('mouseout', (event)=>{
  logo.style.color ='black';
});


// headings

headings.forEach(item => item.addEventListener('mouseover',(event) =>{
  item.style.color= 'red';
}));

headings.forEach(item => item.addEventListener('mouseout',(event) =>{
  item.style.color= 'black';
}));


// ********keydown .addEventListener ************

// logo

document.addEventListener('keydown', (event)=>{
    logo.style.color ='blue';
});

// logo

document.addEventListener('keyup', (event)=>{
  logo.style.color ='black';
});

// links


// nav.style.width = '70%';
// navLinks.forEach(item => item.style.color = 'red');
// navLinks.forEach(item => item.style.fontSize = '1.2rem');



// ********wheel .addEventListener ************

paragraps.forEach(item => item.addEventListener('wheel', (event) => {
  item.style.color = 'green';
}));


// ********load .addEventListener ************

window.addEventListener('load',(event)=>{
  alert("Welcome to the Fun Bus Website!")
});


// ********focus .addEventListener ************




// ********onclick. .addEventListener ************

button.forEach(item => item.addEventListener('click', (event) =>{
  item.style.backgroundColor = 'blue'
}));

