const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/atguigu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", (err) => {
  if (err) return console.log(err);
  console.log("MongoDB连接成功");
});
const teacherSchema = new mongoose.Schema({
  // name: String,
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: Number,
  sex: String,
  // hobby: Array,
  hobby: [String],
  // createTime:Date,
  createTime: {
    type: Date,
    default: Date.now,
  },
});
const Teacher = mongoose.model("teacher", teacherSchema);
new Teacher({
  name: "赵四",
  age: "21",
  sex: "女 ",
  hobby: ["抽烟", "喝酒", "烫头"],
  createTime: Date.now(),
}).save((err) => {
  if (err) return console.log("初始化文档失败" + err);
  console.log("初始化文档成功");
});