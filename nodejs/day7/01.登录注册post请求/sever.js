const express = require("express");
const mongoose = require("mongoose");
require("./db");
const UserInfoSchema = require("./userInfo");
const userInfo = mongoose.model("userInfo",UserInfoSchema)
const app = express();
app.use(express.urlencoded({ express: true }));
app.use(express.static("./public"));
app.post("/register", async (req, res) => {
    const { user, pass } = req.body;
    const isHasUser = await userInfo.findOne({ user });
    if (isHasUser) {
        if (isHasUser.user === user) return res.send("用户名已被注册");
    }
    const saveResult = await userInfo.create({ user, pass });
    res.redirect("http://127.0.0.1:3000/login.html");
});
app.post("/login", async (req, res) => {
    const { user, pass } = req.body;
    const isHasUser = await userInfo.findOne({ user });
    if (!isHasUser) return res.send("用户名不存在");
    if (isHasUser.pass === pass)  {
        res.send("登录成功");
    } else { 
        res.send("密码错误");
    }
});
app.listen(3000, (err) => {
    if (err) return console.log("服务器启动成功" + err);
    console.log("http://127.0.0.1:3000");
});