const express = require("express");
const router = new express.Router();
router.use((req, res, next) => {
    console.log("user");
    next();
});
router.get("/register", async (req, res) => {
    res.send("注册接口");
});
router.get("/login", async (req, res) => {
    res.send("登录接口");
});
module.exports = router;