const express = require("express");
const app = express();
app.use(express.static("./public"));
app.get("/userinfo", (req, res) => {
    console.log(req.query);
    const { userid } = req.query;
    console.log(userid);
    res.json({
        name: "lucy",
        age: 19
    });
});
app.listen(3000, (err) => {
    if (err) return console.log("服务器启动错误" + err);
    console.log("http://127.0.0.1:3000");
});