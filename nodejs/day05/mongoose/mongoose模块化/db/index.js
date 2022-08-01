const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/atguigu", {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
mongoose.connection.once("open", (err) => {
    if (err) return console.log(err);
    console.log("mongodb连接成功")
})