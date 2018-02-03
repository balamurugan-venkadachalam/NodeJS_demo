var fs = require('fs');

var readStr = fs.readFile('test.txt','utf8', function(err, data){
    if(err)
    console.error('Error reading file : '+ err);

    console.log(data);
});

console.log('file read successfuly');
//fs.writeFileSync('text2.txt', readStr);