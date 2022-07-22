const express = require("express");
const ejs = require("ejs");
const { application } = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/single", (req, res) => {
    const data = {
        name: "<strong>litao</strong>",
        age: "<strong>25</strong>",
        sex: "男"
    };
    res.render("./single.ejs", data);
});
app.get("/more", (req, res) => {
    const data = {
        user: [{
            name: "lily",
            age: 20,
            sex: "女"
        }, {
            name: "<strong>lucy</strong>",
            age: "<strong>18</strong>",
            sex: "<strong>女</strong>"
        }]
    };
    res.render("./more.ejs", data);
});
app.listen(3000, (err) => {
    if (err) return console.log("错误" + err);
    console.log("http://127.0.0.1:3000");
});