import http from "http";
import fs from 'fs';
import url from 'url';

// const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url);   
    // console.log(req.method);
    

    // console.log("Incoming request ");
    
    // res.end("Hello\n");  // Sends a simple response to the client
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    fs.readFile('post-lists.json', 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Error reading file");
            return;
        }

        const posts = JSON.parse(data);

        if (path === '/') {
            // Return all posts
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(posts));
        }
        else {
            const postId = path.slice(1);  //slicing off / from the path to get _id
            const post = posts.find(p => p._id === postId);         //searching to match 
        }

        if (!post) {
            res.statusCode = 404;
            res.end("Post not found");
        }
           
    });

    // Listening on port 3000
    server.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    
});
