require("./db");
const { default: mongoose } = require("mongoose");
const teacherSchema = require("./teacher");
const Teacher = mongoose.model("teacher", teacherSchema);
Teacher.create({
    name: "张七",
    age: 21,
    sex: "男",
    hobby: ["写代码", "洗头发"],
    createTime:Date.now()
}).then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
})