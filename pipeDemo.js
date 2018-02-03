var fs = require('fs');

var readStream = fs.createReadStream('file.txt', 'utf8');
var writeStream = fs.createWriteStream('write_file_using_pipe.txt');

readStream.pipe(writeStream);