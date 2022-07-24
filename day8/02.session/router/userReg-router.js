const express = require("express");
const router = new express.Router();
router.use((req, res, next) => {
    const isRegisterReq = req.url === '/register' ? true : false;
    const { user, pass } = req.body;
    const userReg = /^[A-Z]\w{5,9}$/g;
    const passReg = /\d{6,8}/g;
    if (!userReg.test(user)) {
        const errData = { errMes: "用户名不符合，请重新输入" };
        if (isRegisterReq) {
            res.render("register.ejs", errData);
            return;
        } else {
            res.render("login.ejs", errData);
            return;
        }
    };
    if (isRegisterReq && !passReg.test(pass)) {
        const errData = {
            errMes: "",
            errPassMes: "密码必须是6-8位数字"
        };
        res.render("register.ejs", errData);
        return;
    };
    next();
});
module.exports = router;