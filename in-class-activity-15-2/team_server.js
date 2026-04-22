const express = require("express");
const morgan = require("morgan");

const app = express();

// Show HTTP requests in the console
app.use(morgan("dev"));

// Serve static files from the public dir
//app.use(express.static("public"));
//app.use(express.static("PATH"));

const logRequest = function(req, res, next) {
    console.log(`Request: ${req.method} for ${req.path}`);
    next();
};
app.use(logRequest);

// Called for GET request to http://localhost:3000/hello
app.get("/hello", function(req, res) {
    res.send("<h1>Hello, Express from app.get!</h1>");
});

// Called for GET request to http://localhost:3000/teaminfo
app.get("/teaminfo", function(req, res) {
	res.json(
		{"a": 1, "b": 2}
	);
});
 
// Called for POST request to http://localhost:3000/goodbye
//app.post("/goodbye", function(req, res) {
app.get("/goodbye", function(req, res) {
    res.send("<h1>Goodbye, Express!</h1>");
});

// Start the web server
app.listen(3000, function() {
   console.log("Listening on port 3000...");
});
