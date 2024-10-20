import http from "http";

//creating http server
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.method);

//     console.log("incoming request ");
//     res.end("Hello\n");
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            res.end("<h1>Home Page</h1>");
            break;
        case "/about":
            res.end("<h1>About Page</h1>");
            break;
        case "/blog":
            res.end("<h1>Blog Page</h1>");
            break;
        case "/contact":
            res.end("<h1>Contact Page</h1>");
            break;
        default:
            res.end("<h1>Page not found!</h1>");
    }
});