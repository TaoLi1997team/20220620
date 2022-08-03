// es6之前的构造函数的写法:
//#region 
{
    function Person(name, age) {
        this.name = name;
        this.age = age;
        /* this.say = function () {
            console.log("hello my name is : " + this.name);
        }; */
    }
    Person.prototype.say = function () {
        console.log("hello my name is : " + this.name);
    };
    const p1 = new Person('zs', 18);
    const p2 = new Person('ls', 20);
    console.log(p1);
    console.log(p2);
    p1.say();
    p2.say();
    function Student(name, age, score) {
        Person.call(this, name, age);
        this.score = score;
    }
    Student.prototype = new Person();
    const stu1 = new Student('xyz', 22, 99);
    console.log(stu1);
    stu1.say();
    console.log('-------------------');
}
//#endregion

// es6的语法:
//#region 
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log('你好,我是' + this.name);
        }
    }
    const p1 = new Person('wmz', 21);
    console.log(p1);
    p1.say();
    class Student extends Person {
        constructor(name, age, score) {
            super(name, age, score);
            this.score = score;
        }
    }
    const s1 = new Student('yyy', 12, 100);
    console.log(s1);
    s1.say()
}
//#endregion