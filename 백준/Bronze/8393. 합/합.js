let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0])
let sum = 0
for(let i=1;i<=count;i++){
    sum+=i
}
console.log(sum)