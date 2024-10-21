
const DEMO_URL = "https://jsonplaceholder.typicode.com/posts";

const request = fetch(DEMO_URL).then((response) => {
    console.log(response)
    return response.json()
})
    .then((data) => {
        console.log(data);
        console.log(`ID: ${data.id}`);
        console.log(`Title: ${data.title}`);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

console.log(request); 