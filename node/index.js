// console.log("helllo world")

// // console.log(global)

// //importing
// const { sum, diff } = require('./common-module')

// console.log(sum(2, 3))
// console.log(diff(9, 5))

// //any method can be imported from a module


// import { sum1, diff1 } from './es-module.js'  

// console.log(diff1(10, 5))


const converter = require('./currency-converter');

let usdAmt = 100;
let nprAmt = converter.change1(usdAmt);
console.log(`${nprAmt} NPR is equal to ${usdAmt}`);

nprAmt = 1000;
usdAmt = converter.change2(nprAmt);
console.log(`${usdAmt} USD is equal to ${nprAmt} rupees`);