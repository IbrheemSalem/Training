//  scrollHeight total scrol 
// clientHeight this is in page Just
 
 
 let el = document.querySelector(".scroller");
 let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 


console.log(`this is scrollHeight :${document.documentElement.scrollHeight}`);
console.log(`this is scrollHeight :${document.documentElement.clientHeight}`);
console.log(`this is height :${height}`);
 

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
  });

  /* ###################################################################################### */
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("dvis");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  //count.innerHTML = maxLength - input.value.length;
  count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
  // Set The Progress
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};
