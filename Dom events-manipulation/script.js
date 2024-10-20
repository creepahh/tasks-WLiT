const box = document.getElementById("box")

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "red";
});

box.addEventListener("dblclick", function () {
    alert("Clicked!");
});

const input = document.getElementById("input");
input.addEventListener("keydown", function (event) {
    console.log("Down key pressed!", event.key);
});

// const form = document.querySelector("form");
// console.log(form);

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("Form Submitted!");

//     const username = document.getElementById("username");
//     const password = document.getElementById("password");

//     console.log("Username:", username.value);
//     console.log("password:", password.value);
// });

//task
const form = document.querySelector("form");
form.addEventListener("change", function (event) {
    event.preventDefault();
    const div = document.getElementById("cube");
    const color = document.querySelector("#color");
    console.log(color.value);
    div.style.backgroundColor = color.value;
});

// task III

function countVowels(word) {
    const vowels = 'aeiou';
    let count = 0;

    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const form2 = document.getElementById("vowelForm");
form2.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const word = document.getElementById("wordInput").value; 

    const vowelCount = countVowels(word); 

    console.log(`Number of vowels in "${word}": ${vowelCount}`); 
     
});
