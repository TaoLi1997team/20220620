const express = require("express");
const app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/user", (req, res) => {
    console.log(req.query);
    const { callback } = req.query;
    const data = {
        name:"laowang",age:16
    }
    // res.send("alert(1)");
    res.send(`${callback}(${JSON.stringify(data)})`)
});
app.listen(3000, (err) => {
    if (err) return console.log("服务器启动错误" + err);
    console.log("http://127.0.0.1:3000");
});