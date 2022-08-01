// 答      案 : 1 2 19 3 5 4 20 9 10 11 17 13 12 6 7 16 8 15 14
// 同      步 : 1 2 19
// 微  任  务 : 3 5 4
// 宏任务队列1: 20 9 10 11 17
// 宏任务队列2: 13 12 6 7 16
// 宏任务队列3: 8
// 宏任务队列4: 15
// 宏任务队列5: 14

console.log(1); //同步
new Promise((res, rej) => {
  console.log(2); //同步
  res();
})
  .then(() => {
    console.log(3); //微任务(同步)
    Promise.resolve().then(() => {
      console.log(5); //微任务(微任务 同步)
      setTimeout(function () {
        console.log(6); //微任务(微任务)(宏任务 同步)
        Promise.resolve().then(function () {
          console.log(7); //微任务(微任务)(宏任务)(微任务)
        });
        setTimeout(function () {
          console.log(8); //微任务(微任务)(宏任务)(宏任务)
        }, 0);
      }, 0);
    });
  })
  .then(() => {
    console.log(4); //微任务(同步)
  });

new Promise((res) => {
  console.log(19); //同步
  setTimeout(() => {
    console.log(20); //宏任务
  }, 0);
});
Promise.resolve().then(() => {
  setTimeout(() => {
    Promise.resolve().then(() => {
      console.log(12); //微任务(宏任务)(微任务)
    });
    console.log(13); //微任务(宏任务 同步)
  }, 0);
});
setTimeout(() => {
  console.log(9); //宏任务(同步)
  new Promise((res) => {
    res();
    console.log(10); //宏任务(同步)
  }).then(() => {
    console.log(11); //宏任务(微任务)
  });
}, 0);
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      Promise.resolve().then(() => {
        console.log(14); //宏任务(宏任务)(宏任务)(微任务)
      });
      console.log(15); //宏任务(宏任务)(宏任务 同步)
    }, 0);
    console.log(16); //宏任务(宏任务)
  }, 0);
  console.log(17); //宏任务(同步)
}, 0);
