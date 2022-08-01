const express = require("express");
const router = new express.Router();
router.use((req, res, next) => {
    const isRegisterReq = req.url === '/register' ? true : false;
    const { user, pass } = req.body;
    const userReg = /^[A-Z]\w{5,9}$/g;
    const passReg = /\d{6,8}/g;
    if (!userReg.test(user)) return res.send("用户名不符合");
    if (isRegisterReq && !passReg.test(pass)) return res.send("密码必须是6-8位数字");
    next();
});
module.exports = router;