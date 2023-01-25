let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggle.onclick = function(){
    nav.classList.add("open");
}

close.onclick = function(){
    this.parentElement.classList.remove("open");
    //or nav.classList.remove("open");
}
/*
// Escape key close
document.onkeyup = function (e) {
    // console.log(e);
    if (e.key === "Escape") {
      nav.classList.remove("open");
    }
  };
*/