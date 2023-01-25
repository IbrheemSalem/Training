let elNum = document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
results = document.querySelector(".results");

form[0].onsubmit = function(el){
    el.preventDefault(); //stop no refresh page 
    document.querySelectorAll(".box").forEach(el => el.remove()); //remove elemant list 


    for(let i = 1 ; i <= elNum.value ; i++){
        let myEl = document.createElement(type.value);
        let myText = document.createTextNode(text.value);

        myEl.className = "box"; 
        myEl.title = "Element";
        myEl.id = `id${i}`;

        myEl.style.display = "inline-block";
        myEl.style.width = "200px";
        myEl.style.margin = "20px";
        myEl.style.padding = "10px";
        myEl.style.backgroundColor = "red";
 
        myEl.style.borderRadius = "10px";

        myEl.appendChild(myText);
        results.appendChild(myEl);
    }
};
let input = document.queryCommandValue(".input");
submit = document.querySelector("[type ='submit']");
box = document.querySelectorAll(".box");

for(let i = 0 ; i < input.length ; i++){
    input[i].style.display = "flex";
    input[i].style.width = "250px";
    input[i].style.boxSizing = "border-box";
    input[i].style.margin = "10px auto"; 
    input[i].style.padding = "10px";
    input[i].style.borderRadius = "10px";
    input[i].style.border = "1px solid red";
}