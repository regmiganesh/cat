const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".nav-menu");

humburger.addEventListener("click" , ()=> {
    navbar.classList.toggle("active");
})