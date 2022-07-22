const express = require("express");
const router = require("./router")
const { resolve } = require("path");
const app = express();
app.use(router)
app.listen(3000, (err) => {
    if (err) return console.log("启动服务器失败" + err);
    console.log(`http://127.0.0.1:3000`);
}); 