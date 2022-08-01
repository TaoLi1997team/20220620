const obj = {
    name: "xiaowang",
    age: 18,
    hobby: { one: "喝酒", two: "写代码" },
    score: [100, 90, 80],
    do() { console.log("eat"); }
};
const obj1 = Object.assign({}, obj);
obj1.name = "xiaoli"; // 浅拷贝只能拷贝一层
obj1.hobby.one = "抽烟"; // 深拷贝能拷贝对象中的对象
console.log(obj,obj1);

function checkType(obj) { return Object.prototype.toString.call(obj).slice(8, -1); }
function deepClone(obj) {
    let re;
    if (checkType(obj) === "Object") {
        re = {};
    } else if (checkType(obj) === "Array") {
        re = [];
    } else { return obj; }
    for (let i in obj) { re[i] = deepClone(obj[i]); }
    return re;
}
const newObj = deepClone(obj);
newObj.hobby.one = "烫头"; // 深拷贝一份新对象，并且不会修改原obj对象
console.log(newObj, obj);