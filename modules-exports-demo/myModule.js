

let sum = (a,b) => a+b;

let sub = (a,b) => a-b;

let mul = (a,b) => a*b;

let div = (a,b) => a/b;

/*
module.exports.sum = sum;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;

or you can use below syntax

*/

module.exports = {sum,sub,mul,div}
