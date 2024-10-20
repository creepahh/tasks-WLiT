const heading = document.getElementById("heading");
console.log(heading);

heading.textContent = "The content is changed!"

const para = document.getElementById("para");
console.log(para);

para.textContent = "The content in para is changed!";

const newElement = document.createElement("div");
newElement.textContent = "this is a new element";

const container = document.getElementById('container');
container.appendChild(newElement);

const input = document.getElementById("input")
input.value = "new value"     //similarly for image, try 

const box = document.getElementsByClassName("box")[0];
console.log(box);
box.style.backgroundColor = "pink";
box.style.width = "200px";

const elementToRemove = document.getElementById("tobeRemoved");
console.log(elementToRemove);
elementToRemove.remove();