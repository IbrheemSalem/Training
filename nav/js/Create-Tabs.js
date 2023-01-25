let tabs = document.querySelectorAll(".tabs li");
let listArray = Array.from(tabs);
let contentDiv = document.querySelectorAll(".content > div");
let contentDivtArray = Array.from(contentDiv);
// console.log(listArray);
// console.log(contentDivtArray);

listArray.forEach((element) => {
    element.addEventListener("click", function (e) { 
    // console.log(element);
    listArray.forEach((ele) => {
        ele.classList.remove("active");  // click remove 
    });
    // console.log(listArray);
        e.currentTarget.classList.add("active"); // click li => class active (* currentTarget *)
        contentDiv.forEach((div) => {
        div.style.display = "none";
   // console.log(contentDiv);
        });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    }); 
});