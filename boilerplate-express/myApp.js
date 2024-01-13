const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// Logger middleware
app.use((req, res, next) => {
  // Log the request method, path, and IP address
  console.log(`${req.method} ${req.path} - ${req.ip}`);

  // Call the next middleware in the stack
  next();
});

console.log("Hello World");

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

const middleWare = (req, res, next) => {
  req.time = new Date().toString();
  next();
};
app.get("/now", middleWare, (req, res) => {
  res.send({ time: req.time });
});

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.send({ echo: word });
});

app.get("/name", ({ query: { first, last } }, res) => {
  res.json({ name: `${first} ${last}` });
});

app.post("/name", (req, res) => {
  const { first, last } = req.body;
  res.json({ name: `${first} ${last}` });
});

module.exports = app;
