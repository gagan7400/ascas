console.time("time")
let fs = require("fs")
console.timeEnd("time")
function sum(a, b) {
    console.log(a + b)
}
module.exports = { sum, fs }