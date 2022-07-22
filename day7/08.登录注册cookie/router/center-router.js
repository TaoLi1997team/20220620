const express = require("express");
const router = new express.Router();
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const mongoose = require("mongoose");
const UserInfoSchema = require("../userInfo");
const userInfo = mongoose.model("userInfo", UserInfoSchema);
const { resolve } = require("path");
router.get("/center.html", async (req, res) => {
    const { userID } = req.cookies;
    const isHasUser = await userInfo.findOne({
        _id: userID
    });
    if (isHasUser) {
        res.sendFile(resolve(__dirname, "../center/center.html"));
        return;
    } else {
        res.send("拒接访问");
    }
});
module.exports = router;