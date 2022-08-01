const express = require("express");
const { resolve } = require("path");
const { default: mongoose } = require("mongoose");
require("./db");
const UserInfoSchema = require("./userInfo");
const userInfo = mongoose.model("userInfo", UserInfoSchema);
const app = express();
app.get("/register", async (req, res) => {
    const { user, pass } = req.query;
    console.log(user, pass);
    const isHasUser = await userInfo.findOne({ user });
    console.log(isHasUser);
    if (isHasUser) {
        if (isHasUser.user === user) return res.send("用户名已被注册");
    }
    const saveResult = await userInfo.create({ user, pass });
    console.log(saveResult);
    res.sendFile(resolve(__dirname, "./login.html"));
});
app.get("/login", async (req, res) => {
    console.log(req.query);
    const { user, pass } = req.query;
    const isHasUser = await userInfo.findOne({ user });
    console.log(isHasUser);
    if (!isHasUser) return res.send("用户名不存在");
    if (isHasUser.pass === pass) {
        res.send("登录成功");
    } else {
        res.send("密码错误");
    }
});
app.get("/register.html", async (req, res) => {
    res.sendFile(resolve(__dirname, "./register.html"));
});
app.get("/login.html", async (req, res) => {
    res.sendFile(resolve(__dirname, "./login.html"));
});
app.listen(3000, (err) => {
    if (err) return console.log("启动服务器失败" + err);
    console.log(`http://127.0.0.1:3000`);
}); 