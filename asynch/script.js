// function add(x, y) {
//     return x + y;
// }

// function divide(x, y) {
//     return x / y;
// }

// function compute(callback, x, y) {
//     return callback(x,y)
// }

// console.log(compute(add, 10, 5));
// console.log(compute(divide, 10, 5));

// return add(10, 5);
// return divide(10, 5);

//task

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a,b) {
//     return a * b;
// }

// function compute(callback, a, b) {
//     return callback(a,b)
// }

// console.log(compute(subtract, 10, 5));
// console.log(compute(multiply, 10, 5));

// return subtract(10, 5);
// return multiply(10, 5);



// const DEMO_URL = "https://jsonplaceholder.typicode.com/posts";

// const request = fetch(DEMO_URL).then((response) => {
//     console.log(response)
//     return response.json()
// })
//     .then((data) => {
//         console.log(data);
//         // console.log(`ID: ${data.id}`);
//         // console.log(`Title: ${data.title}`);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// console.log(request); 


function fetchData(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((error) => console.error("An error occurred", error));
}

function handleData(data) {
    console.log("Received data", data);
    for (let i = 0; i < 12; i++){
        console.log(data);
        console.log(`ID:${data[i]["id"]},Title: ${data[i]["title"]}`);
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts", handleData);


//using async/await

const fetchAPI = async function () {
    const res = fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res;
    console.log("Data fetched!", data);
  };
  fetchAPI();
console.log("Hi I am executing!");
  


//see
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sucessful");
      reject("Rejected");
    }, 5000);
  });
  
  promise
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((error) => {
      console.log("An error occured!", error);
    });
  
  console.log("Hello!");
  