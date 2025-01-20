// local module
const { add, a } = require("./local-1");
const { add: add2, a: a2 } = require("./local-2");
console.log(add(2, 3), a);
console.log(add2(2, 3, 4), a2);


// built-in-module
const path = require('path');
console.log(path.dirname("E:/Coding/Lavel 2/nodejs-basic/index.js"))
console.log(path.parse("E:/Coding/Lavel 2/nodejs-basic/index.js"))
console.log(path.join("E:/Coding/Lavel 2/nodejs-basic/", "local-2.js"))