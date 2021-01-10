const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    `
Hola! Your nodejs application is live. POST/DELETE/PATCH/PUT endpoints are on root end point.
${JSON.stringify({
  "name": "Nodejs",
  "version": "v12.11.0",
  "description": "nodejs API",
  "main": "index.js",
  "author": "Hunzaw",
  "license": "MIT"
})}

`
  );
});

app.post("/", (req, res) => {
  res.send("Post end point of your application");
});

app.delete("/", (req, res) => {
  res.send("Delete end point of your application");
});

app.patch("/", (req, res) => {
  res.send("Patch end point of your application");
});

app.put("/", (req, res) => {
  res.send("Put end point of your application");
});

let port = process.env.port || 9003;

app.listen(port, () => {
  console.log(`Your nodejs app is listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.
