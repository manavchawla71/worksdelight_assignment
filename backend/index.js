const express = require("express");
const userroutes = require("./routes/userroutes");
const postroutes = require("./routes/postroutes");
const app = express();

app.use(express.json()); // middleware for parsing requests

app.use("/user", userroutes);
app.use("/post", postroutes);

app.listen(3000, () => {
  console.log("connected to server");
});
