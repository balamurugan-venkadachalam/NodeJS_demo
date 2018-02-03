var fs = require('fs');

var readStream = fs.createReadStream('file.txt', 'utf8');
var writeStream = fs.createWriteStream('write_file.txt');

var data ='';
readStream.on('data', function(chunk){
    writeStream.write(chunk);
});

readStream.on('end', function(chunk){
   
});

