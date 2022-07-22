const express = require("express");
const ejs = require("ejs");
require("./db");
const userRegRouter = require("./router/userReg-router");
const userRouter = require("./router/user-router");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ express: true }));
app.use(express.static("./public"));
app.use(userRegRouter);
app.use(userRouter);
app.listen(3000, (err) => {
    if (err) return console.log("启动服务器失败" + err);
    console.log(`http://127.0.0.1:3000`);
}); 