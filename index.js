// local module
const { add, a } = require("./local-1");
const { add: add2, a: a2 } = require("./local-2");
console.log(add(2, 3), a);
console.log(add2(2, 3, 4), a2);
