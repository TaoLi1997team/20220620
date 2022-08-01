const { default: mongoose } = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required:true
    },
    age: Number,
    sex: String,
    hobby: [String],
    createTime: {
        type: Date,
        default:Date.now
    }
})
module.exports = teacherSchema;