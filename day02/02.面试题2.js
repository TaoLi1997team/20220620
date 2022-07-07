// 答      案 : 1 2 9 4 10 13 3 15 16 5 6 8 7
// 同      步 : 1 2 9
// 微  任  务 : 4 10 13
// 宏任务队列1: 3 15 16
// 宏任务队列2: 5 6 8 7

console.log(1); //同步
new Promise(function (resolve) {
  resolve();
  console.log(2); //同步
  setTimeout(function () {
    console.log(3); //宏任务中的(同步)
  }, 0);
  Promise.resolve().then(function () {
    console.log(4); //微任务
    setTimeout(function () {
      console.log(5); //微任务中的宏任务
    }, 0);
    setTimeout(function () {
      (async function () {
        console.log(6); //微任务中的宏任务
        return function () {
          console.log(7); //async返回就是promise对象的值
        };
      })().then(function (fn) {
        //fn就是return的值(函数)
        console.log(8); //宏任务中的 微任务
        fn(); //此时才调用fn
      });
    }, 0);
  });
  new Promise(function (resolve) {
    console.log(9); //同步
    resolve();
  }).then(function () {
    new Promise(function (resolve, reject) {
      console.log(10); //微任务中的(同步)
      reject();
    })
      .then(function () {
        setTimeout(function () {
          console.log(11);
        }, 0);
        console.log(12);
      })
      .catch(function () {
        console.log(13); //微任务中的(微任务)
      });
  });
});
setTimeout(function () {
  console.log(15); //宏任务中的(同步)
  Promise.resolve().then(function () {
    console.log(16); //宏任务中的(微任务)
  });
}, 0);
