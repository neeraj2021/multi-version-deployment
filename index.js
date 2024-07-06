const express = require("express");
const app = express();
const pJson = require("./package.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/version", (req, res) => {
  res.send("Project version: " + pJson.version);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
