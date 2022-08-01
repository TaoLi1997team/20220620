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
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: Number,
  sex: String,
  hobby: [String],
  createTime: {
    type: Date,
    default: Date.now,
  },
});
const Teacher = mongoose.model("teacher", teacherSchema);
/* Teacher.create({
  name: "王八",
  age: 22,
  sex: "男",
  hobby: ["写代码", "跑步健身"],
  createTime:Date.now()
}, (err) => {
  if (err) return console.log(err);
  console.log("添加文档成功")
}) */

/* const result = Teacher.create([
  {
    name: "李二",
    age: 24,
    sex: "女",
    hobby: ["吃饭", "睡觉", "打豆豆"],
    createTime: Date.now(),
  },
  {
    name: "李三",
    age: 5,
    sex: "男",
    hobby: ["拖鞋", "洗碗"],
    createTime: Date.now(),
  },
]);
console.log(result);
result
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* const result = Teacher.find({
  age: {
    $lt:20
  }
})
result.then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err)
}) */

const result = Teacher.updateMany({}, {
  $inc: {
    age:1
  }
})
result.then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err)
})

/* const result = Teacher.deleteOne({
  name: "王八"
});
result.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err)
}) */
/* const result = Teacher.deleteOne({
  name:"王八"
})
result.then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err)
}) */