const express = require("express");
const { resolve } = require("path");
const { nextTick } = require("process");
const app = express();
app.use(express.static("./02.登录注册功能"));
app.use(express.urlencoded({ extended: true }));
/* app.use((req, res) => {
    console.lohg('123');
    next();
});
app.use((err, req, res, next) => {
    console.log(err+"出错咯")
}) */
app.post("/ppp", (req, res) => {
    console.log(req.body);
});
app.use((req, res, next) => {
    if (req.url === 'favicon.ico') return res.send();
    console.log("中间件");
    req.xxx = "xxx";
    next();
});
app.get("/user", (req, res) => {
    console.log(req.xxx);
    res.send("user目录");
});
app.get("/:id", (req, res) => { res.send("id目录"); });
app.get("/", (req, res) => { res.send("根目录"); });
app.listen(3001, (err) => {
    if (err) return console.log(err);
    console.log("http://localhost:3001");
});