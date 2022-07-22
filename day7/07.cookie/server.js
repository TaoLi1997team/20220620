const express = require("express");
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get("/login", (req, res) => {
    res.cookie("userID", "12345", {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    });
    res.end("success~");
});
app.get("/center", (req, res) => {
    console.log(req.cookies);
    const { userID } = req.cookies;
    if (userID === '12345') {
        res.send("欢迎光临");
    } else {
        res.send("拒绝访问");
    }
});
app.get("/quit", (req, res) => {
    res.cookie("userID", 'xxx', {
        maxAge: 0
    });
    res.send("退出成功")
});
app.listen(3000, (err) => {
    if (err) return console.log("错误" + err);
    console.log("http://127.0.0.1:3000");
});