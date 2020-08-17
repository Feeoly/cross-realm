// import "@babel/polyfill";
// import 'core-js'

let obj = {}
let frame = document.querySelector('.frame-wrapper')
setTimeout(function(){
    if (frame && frame.contentWindow && frame.contentWindow.PDFViewerApplication) {
        // obj = frame.contentWindow.PDFViewerApplication // pdfjs obj
        // obj = Vue.observable(obj)
        // console.log('obj-vue-', obj)
    }
}, 3000)



// const obj3 = { length: 3, 0: 'foo', 1: 'bar', 2: 'baz' };
// const array = Array.from(obj3);
// console.log(array)
// for (let j of array) { 
//     console.log(j);
// }


// let obj2 = {}
// obj2[Symbol('a')] = 'a'
// obj2[Symbol('e')] = 'e'
// obj2[Symbol.for('b')] = 'b'
// obj2['c'] = 'c'
// obj2.d = 'd'

// for (let i in obj2) {
//    console.log(i)  // logs "c" and "d"
// }

// var arr = [1,2,3,{a:{b:[4,5,6]}}]
// let it = arr[Symbol.iterator]()
// console.log(it, it.next(), it.next(), it.next(), it.next(),it.next())
// for(const i of arr) {
//   console.log(i)
// }

// var arr1 = {a:1,b:2}
// let it1 = arr1[Symbol.iterator]()
// console.log(arr1[Symbol.iterator], it1, it.next())
// for(const j of arr1) {
//   console.log(j)
// }