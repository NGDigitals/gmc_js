// console.log('This is me')
// //------ main.js ------
import {square, sum} from 'lib' ;
import * as lib from 'lib'

import test from 'lib'

test()

let s1 = square(2)
let s2 = sum(4, 4)

lib.square(3)
lib.sum(3, 5)

console.log(s1)
console.log(s2)

// // this means import every exported module in lib and use the alias library