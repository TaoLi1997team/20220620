const express = require('express');
const db = require('./db');
const Cities = require('./models/cites');
const app = express();
app.use(express.static('public'));
db.then(() => {
  app.get("/province", async (req, res) => {
    try {
      const cities = await Cities.find({ level: 1 }, { name: 1, province: 1, _id: 0 });
      console.log(cities);
      res.json({ status: 0, data: cities });
    } catch (e) { res.json({ status: 1, err: "哎呀 网络有问题了 请刷新后再试" }); }
  });
  app.get("/city", async (req, res) => {
    try {
      const { province } = req.query; console.log(province);
      const cities = await Cities.find({ province, level: 2 }, { name: 1, city: 1, _id: 0 });
      console.log(cities);
      res.json({ status: 0, data: cities });
    } catch (e) { res.json({ status: 1, err: "网络错误请刷新" }); }
  });
  app.get("/county", async (req, res) => {
    try {
      const { province, city } = req.query;
      const cities = await Cities.find({ province, city, level: 3 }, { name: 1, _id: 0 });
      console.log(cities);
      res.json({ status: 0, data: cities });
    } catch (e) { res.json({ status: 1, err: "网络错误请刷新" }); }
  });
}).catch(() => { console.log("数据库连接失败~"); });
app.listen(4000, err => {
  if (!err) console.log('服务器启动成功了~ http://127.0.0.1:4000');
  else console.log(err);
});