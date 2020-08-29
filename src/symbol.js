
const iframe = document.querySelector('.frame-wrapper');

iframe.addEventListener("load", function () {
    // get iframe realm's array
    const obj = iframe.contentWindow.testArray // Vue.observable(iframe.contentWindow.testArray)
    // check array
    console.log("obj instanceof Array: ", obj instanceof Array)
    console.log("obj instanceof iframe.contentWindow.Array: ", obj instanceof iframe.contentWindow.Array)
    console.log(obj[Symbol.iterator])
    console.log(Array.prototype[Symbol.iterator])
    // console.log('Object.getOwnPropertyNames-Array:', Object.getOwnPropertyNames(Array))
    // console.log('Object.getOwnPropertyNames-Array.prototype:', Object.getOwnPropertyNames(Array.prototype))
    // console.log('Object.getOwnPropertySymbols-Array.prototype:', Object.getOwnPropertySymbols(Array.prototype))
    //
    console.log("Symbol.iterator: ", Symbol.iterator)
    console.log("iframe.contentWindow.Symbol.iterator", iframe.contentWindow.Symbol.iterator)
    console.log(Symbol.iterator === iframe.contentWindow.Symbol.iterator)
    // how inner testArray still can iterate in ie11? if iterator cannot cross-realm, see forOfIndex.html
    for(const i of iframe.contentWindow.testArray) {
        console.log(iframe.contentWindow.testArray[Symbol.iterator])
        console.log(i)
    }
})