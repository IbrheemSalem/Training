let humberger = document.querySelector(".humberger");
let navMenu = document.querySelector(".nav-Menu");
 
humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navMenu.classList.toggle("active");
});