// 闭包的复习与延申

// 1.o
const outValue = 'ninja';
function outFunction() {
    // 这里是可以读取外部的outValue
  console.log(outValue === 'ninja', 'I can see the ninja');
}

outFunction();

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
