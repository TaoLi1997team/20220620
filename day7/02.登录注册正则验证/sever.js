const express = require("express");
const { resolve } = require("path");
const { default: mongoose } = require("mongoose");
require("./db");
const UserInfoSchema = require("./userInfo");
const userInfo = mongoose.model("userInfo", UserInfoSchema);
const app = express();
app.use(express.urlencoded({ express: true }));
app.use(express.static("./public"));
app.use((req, res, next) => {
    const isRegisterReq = req.url === '/register' ? true : false;
    const { user, pass } = req.body;
    const userReg = /^[A-Z]\w{5,9}$/g;
    const passReg = /\d{6,8}/g;
    if (!userReg.test(user)) return res.send("用户名不符合");
    if (isRegisterReq && !passReg.test(pass)) return res.send("密码必须是6-8位数字");
    next();
});
app.post("/register", async (req, res) => {
    const { user, pass } = req.body;
    console.log(user, pass);
    const isHasUser = await userInfo.findOne({ user });
    console.log(isHasUser);
    if (isHasUser) {
        if (isHasUser.user === user) return res.send("用户名已被注册");
    }
    const saveResult = await userInfo.create({ user, pass });
    console.log(saveResult);
    res.redirect("http://127.0.0.1:3000/login.html");
});
app.post("/login", async (req, res) => {
    const { user, pass } = req.body;
    const isHasUser = await userInfo.findOne({ user });
    console.log(isHasUser);
    if (!isHasUser) return res.send("用户名不存在");
    if (isHasUser.pass === pass) {
        res.send("登录成功");
    } else {
        res.send("密码错误");
    }
});
app.listen(3000, (err) => {
    if (err) return console.log("启动服务器失败" + err);
    console.log(`http://127.0.0.1:3000`);
}); 