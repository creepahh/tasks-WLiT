const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));  // serves files in 'public' folder

// route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the Book App');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
