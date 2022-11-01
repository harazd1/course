const fs  = require('fs');

function sum(a,b){
    return a+b;
}
var a = parseFloat(fs.readFileSync('a.txt', 'utf8'));
var b = parseFloat(fs.readFileSync('b.txt', 'utf8'));

console.log(sum(a,b))