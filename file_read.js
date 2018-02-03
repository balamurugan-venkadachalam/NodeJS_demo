var fs = require('fs');

var readStr = fs.readFileSync('test.txt','utf8');
console.log(readStr);

fs.writeFileSync('text2.txt', readStr);