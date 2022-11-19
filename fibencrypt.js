var fibmax = 0;
var fibvec = [];
var charstring = "abcdefghijklmnopqrstuvwxyz";
var chars = [];

function initialize() {
    chars = [];
    for (var i = 0; i < charstring.length; ++i) {
        chars.push(charstring[i]);
    }
}

function fibonacciRec(n) {
    return n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci(num) {
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}

function generateFibonacci(n) {
    if (fibmax >= n)
        return;
    for (var i = fibmax; i < n; ++i)
        fibvec.push(fibonacci(i));
}

function getIndex(n) {
    return (n % chars.length);
}

function fibEncrypt(s) {
    var ns = s.toLowerCase();
    var out = "";

    for (var i = 0; i < ns.length; ++i)
        out += ((ns.charCodeAt(i) < "z".charCodeAt(0) && ns.charCodeAt(i) > "a".charCodeAt(0)) ? chars[getIndex(fibvec[i] + chars.indexOf(ns[i]))] : ns[i]);

    return out;
}

initialize();
generateFibonacci(150);
// module.exports = { initialize, fibEncrypt, generateFibonacci, fibonacci, getIndex, fibmax, fibvec, chars, charstring }

// console.log(fibEncrypt("Hello, world!"));
// for (let i : number = 32; i <= 126; ++i)
//     chars.push(String.fromCharCode(i));