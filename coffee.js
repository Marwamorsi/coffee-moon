
let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');

}


window.onscroll = () => {
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
}
























let menubar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menubar.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// ----------------------------------------------------------