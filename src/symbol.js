
const iframe = document.querySelector('.frame-wrapper');

iframe.addEventListener("load", function () {
    // get iframe realm's array
    const obj = iframe.contentWindow.testArray // Vue.observable(iframe.contentWindow.testArray)
    // check array
    console.log("obj instanceof Array: ", obj instanceof Array)
    console.log("obj instanceof iframe.contentWindow.Array: ", obj instanceof iframe.contentWindow.Array)
    console.log(obj[Symbol.iterator])
    console.log(Array.prototype[Symbol.iterator])
    //
    console.log("Symbol.iterator: ", Symbol.iterator)
    console.log("iframe.contentWindow.Symbol.iterator", iframe.contentWindow.Symbol.iterator)
    console.log(Symbol.iterator === iframe.contentWindow.Symbol.iterator)
    for(const i of iframe.contentWindow.testArray) {
        console.log(i)
    }
})