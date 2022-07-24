const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require("./db");
const userRegRouter = require("./router/userReg-router");
const userRouter = require("./router/user-router");
const centerRouter = require("./router/center-router");
const app = express();
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/atguigu',
        ttl: 14 * 24 * 60 * 60
    }),
    cookie: {
        maxAge: 14 * 24 * 60 * 60,
        httpOnly: true
    }
}));
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ express: true }));
app.use(express.static("./public"));
app.use(centerRouter);
app.use(userRegRouter);
app.use(userRouter);
app.listen(3000, (err) => {
    if (err) return console.log("启动服务器失败" + err);
    console.log(`http://127.0.0.1:3000`);
});