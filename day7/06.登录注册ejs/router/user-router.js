const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const UserInfoSchema = require("../userInfo");
const userInfo = mongoose.model("userInfo", UserInfoSchema);
router.post("/register", async (req, res) => {
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
router.post("/login", async (req, res) => {
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
module.exports = router;