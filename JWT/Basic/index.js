const jwt = require("jsonwebtoken");
const contents ={
    "name": "vikram",
    "accountNumber": 1234772520,
    "iat": 1705259986
  }

//sign and not generate

const token = jwt.sign(contents,"hshdjkhfjh");

const verifiedValue= jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmlrcmFtIiwiYWNjb3VudE51bWJlciI6MTIzNDc3MjUyMCwiaWF0IjoxNzA1MjU5OTg2fQ.y1neCvwSHcRb3wjPY6mvT6ZslvbeDtNhFxDuVmO_auk ","secret")
console.log(verifiedValue);
