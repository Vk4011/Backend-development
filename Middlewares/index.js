const express = require("express");
const app = express();
const port = 4040;

// Middleware to log information about the incoming request
function logRequestDetails(req, res, next) {
    // Log the method (GET, POST, etc.), path, and timestamp of the request
    console.log(`${req.method} request at ${req.path} - ${new Date().toLocaleString()}`);
    next(); // Call the next middleware in the stack
}

// Apply the logRequestDetails middleware to all routes
app.use(logRequestDetails);

// Middleware to handle POST requests and log request body
function handlePostRequest(req, res, next) {
    if (req.method === "POST") {
        // Log the request body
        console.log("Request Body:", req.body);
    }
    next(); // Call the next middleware in the stack
}

// Apply the handlePostRequest middleware only to the "/submit" route
app.post("/submit", handlePostRequest, (req, res) => {
    res.send("POST request handled!");
});

app.listen(port, () => console.log(`\n\t Server is running on port: ${port}`));
