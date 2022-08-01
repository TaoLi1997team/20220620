const express = require("express");
const { resolve } = require("path");
const app = express();
app.get("/:id", (req, res) => {
    console.log(req.params);
    // res.send("send响应");
    // res.json({ name: "lucy", age: 19 });
    // res.sendFile(resolve(__dirname, "./package.json"));
    // res.redirect("http://www.jd.com");
    // res.set("hello world");
    res.status(404);
    res.send("hello");
});
app.get("/pass/:id", (req, res) => {
    console.log(req.params);
});
app.get("/", (req, res) => {
    console.log(req.query);
    // console.log(req.params);
    // console.log(req.headers);
    res.send({ name: "lily", age: 18 });
});
app.get("/user", (req, res) => {
    res.send("user");
});
app.get("/login", (req, res) => {
    res.send("login");
});
app.listen(3001, (err) => {
    if (err) return console.log(err);
    console.log(`http://localhost:3001`);
});