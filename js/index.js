// Your code goes here

// ****************SELECTORS***************
const header = document.querySelector('.nav-container');

const logo = document.querySelector('.nav-container .logo-heading');

const headings = document.querySelectorAll('h2, h4');

const paragraps = document.querySelectorAll('p');

const nav = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav-link');

const button = document.querySelectorAll('.btn');

const images = document.querySelectorAll('img');

const body = document.querySelector('*');

// ************* SELECTORS STYLES **********

// sign up button 

button.forEach(item => item.style.backgroundColor = 'green');
button.forEach(item => item.style.width = '25%')
button.forEach(item => item.style.padding = '1%')
button.forEach(item => item.style.margin = '2% auto')


// nav links

navLinks.forEach(item => item.style.fontSize = "1.2rem");
navLinks.forEach(item => item.style.margin = "3%");
navLinks.forEach(item => item.style.color = 'green');


// ********mouseover && mouseout .addEventListener ************


// logo

logo.addEventListener('mouseover', (event)=>{
  logo.style.color ='green';
});

logo.addEventListener('mouseout', (event)=>{
  logo.style.color ='black';
});


// headings

headings.forEach(item => item.addEventListener('mouseover',(event) =>{
  item.style.color= 'green';
}));

headings.forEach(item => item.addEventListener('mouseout',(event) =>{
  item.style.color= 'black';
}));


// ********keydown & keyup .addEventListener ************

// logo

document.addEventListener('keydown', (event)=>{
    logo.style.color ='blue';
});

// logo

document.addEventListener('keyup', (event)=>{
  logo.style.color ='black';
});


// ********wheel .addEventListener ************

paragraps.forEach(item => item.addEventListener('wheel', (event) => {
  item.style.color = 'green';
}));


// ********load .addEventListener ************

window.addEventListener('load',(event)=>{
  body.style.textAlign = 'center'
});


// ********online & offline .addEventListener ************

window.addEventListener('online', (event)=>{
  alert("You're now connected to the internet.");
});

window.addEventListener('offline', (event)=>{
  alert("You're not connected to the internet.");
});

// ********resize .addEventListener ************

window.addEventListener('resize', (event)=>{
  body.style.backgroundColor = "grey";
});

// ********focus .addEventListener ************




// ********onclick. .addEventListener ************

button.forEach(item => item.addEventListener('click', (event) =>{
  item.style.backgroundColor = 'blue'
  item.style.color = 'white'
}));


// ********select. .addEventListener ************


// navLinks.forEach(item => item.addEventListener('select', (event) =>{
//   alert(`You have selected a navigation link.`);
// }));

// window.addEventListener('select', (event)=>{
//   alert("You have selected something on the page");
// });




// ********dblclick. .addEventListener ************


paragraps.forEach(item => item.addEventListener('dblclick', (event)=>{
  item.style.fontSize = '1.5rem'
}));

navLinks.forEach(item => item.addEventListener('dblclick', (event)=>{
  item.style.fontSize = '1.5rem'
}));

images.forEach(item => item.addEventListener('dblclick', (event)=>{
  item.style.width = '100%'
}));


// ********fullscreenchange .addEventListener ************

// document.addEventListener('webkitfullscreenchange', (event)=>{
//   if(document.requestFullscreen){
//     alert('You have entered full-screen mode.' );
//   } else {
//     alert('You have left full-screen mode');
//   } 
// });



// stop navigation from refreshing. 

navLinks.forEach(item => item.addEventListener('click', (event)=>{
  event.preventDefault()
}));





