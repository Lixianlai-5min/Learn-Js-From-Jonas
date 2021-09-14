// 闭包的复习与延申

// // 1.outValue变量和函数outFunction都是在全局作用域下声明的
// const outValue = 'ninja';
// function outFunction() {
//     // 这里是可以读取外部的outValue，即访问了外部变量
//   console.log(outValue === 'ninja', 'I can see the ninja');
// }

// outFunction();

// --------------------------------------------------------

const outValue = 'samerai';
let later;

const outerFunction = function () {
    // 函数内部的变量，按理是不能通过外部访问的，却可以通过闭包访问到
  const innerValue = 'ninja';

  const innerFunction = function () {
    console.log(innerValue === 'ninja', 'innerValue statement');
    console.log(outValue === 'samerai', 'outValue statement');
  };

  later = innerFunction;
  console.log(later);
};

// 函数执行之后就回收了吗?
outerFunction();

// 通过later调用内部函数，这时已经脱离了原来的outerFunction作用域
// 正如保护气泡一样，只要内部函数存在，那么就会保存gai
// 这里为什么能够找到innerValue?这就是通过闭包，访问原始作用域
later();

//////////////////////////////////////////////////////////
// 算法

// const str = '123';
// const strArr = str.split('')
// console.log(strArr)
// const reverseStrArr = strArr.reverse()
// console.log(reverseStrArr)

// function reverse(str) {
//     const strArr = str.split('')
//     console.log(strArr)
//     const reverseStrArr = strArr.reverse()
//     const string =  reverseStrArr.join('')
//     console.log(string)
// }

// reverse('apple')
// reverse('hello')
