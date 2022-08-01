//使用某个数据库(如果数据库不存在，则自动创建)
use atguigu

//查看所有的数据库
show databases

//查看当前所在的数据库
db

//给 students 集合插入1条数据(如果这个集合不存在，则自动创建当前的集合)
//insert 方法是插入数据的，参数是一个对象
db.students.insert({name:"李四",age:20,sex:"男"})

//给 students 集合插入多条数据
db.students.insert([{name:"李九",age:18,sex:"女"},{name:"黄三",age:7,sex:"男"}])

//查找某个数据库的某个集合的所有数据,使用 find 方法,不加任何参数
db.students.find()

//查找年龄是18岁的人的数据
db.students.find({age:18})

//查找id是XXX的人的数据
db.students.find({_id:ObjectId("5f855ab14dcd7dc5334031e7")})

//$gt $gte $lt $lte $ne 操作符  > >= < <= !=
//查找年龄大于20岁的人
db.students.find({age:{$gt:20}})

//查找年龄小于等于20岁的人
db.students.find({age:{$lte:20}})

//查找性别不是男的
db.students.find({sex:{$ne:"男"}})

//查找年龄大于18 或者是男性的人
db.students.find({$or:[{age:{$gt:18}},{sex:"男"}]})

//查找年龄是18岁的和20岁的  方法1
db.students.find({$or:[{age:18},{age:20}]})

//查找年龄是18岁的和20岁的  方法2
db.students.find({age:{$in:[18,20]}})

//查找姓名是以三为结尾的
db.students.find({name:/三$/})

//查找姓名是以张为开头的
db.students.find({name:/^张/})

//$where 查找数据,查找年龄大于10 小于25岁的人
db.students.find({$where:function(){
    //this：指向当前进来的数据（数据会一条条的进入）
	return this.age>10 && this.age<25;
}})

//查找年龄是18岁的
db.students.find({age:18})

//只查询 年龄是18岁的人的名字
db.students.find({age:18},{name:1})

//只查询 年龄是18岁的人数据 只要年龄和姓名
db.students.find({age:18},{name:1,age:1})

//findOne方法 查询符合条件的第一个数据
db.students.findOne({age:18},{name:1})
db.students.findOne({age:20})

//将姓名是 李九 的人的年龄改变为28
db.students.update({name:"李九"},{$set:{age:28}})

//给所有的男添加一个字段
db.students.updateMany({sex:"男"},{$set:{hair:"less"}})
db.students.updateMany({sex:"女"},{$set:{hair:"more"}})

//过年了 所有人的年龄都长了1岁
db.students.updateMany({},{$inc:{age:1}})

//删除年龄是21的第一个人
db.students.deleteOne({age:21})