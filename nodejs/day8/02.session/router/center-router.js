const express = require("express");
const router = new express.Router();
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const mongoose = require("mongoose");
const UserInfoSchema = require("../userInfo");
const userInfo = mongoose.model("userInfo", UserInfoSchema);
const { resolve } = require("path");
router.get("/center.html", async (req, res) => {
    if (req.session) {
        const re = await userInfo.findOne({
            _id: req.session.userID
        });
        if (re) {
            res.sendFile(resolve(__dirname, "../center/center.html"));
            return;
        }
    }
    res.status(401).send("你没有权限访问");
});
module.exports = router;