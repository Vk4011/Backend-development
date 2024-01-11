let express = require("express");
let app = express();
const port=4040;
console.log("\n\t Hello World");
// app.get("/", (req, res) =>   res.send("Hello Express"));

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.listen(port,()=>console.log(`\n\t Server is running on the port : ${port}`));