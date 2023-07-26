// JavaScript file 
// toggle 
const menutoggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
menutoggle.onclick = function () {
  menutoggle.classList.toggle('active');
  nav.classList.toggle('active');
}
