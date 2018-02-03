var fs = require('fs');

var readStream = fs.createReadStream('file.txt', 'utf8');

var data ='';
readStream.on('data', function(chunk){
    console.log('-----------------------------------------------------');
    //console.log(chunk);
    data += chunk;
});

readStream.on('end', function(chunk){
    console.log('----------------------Starting-------------------------------');
    console.log(data);
    console.log('----------------------END-------------------------------');
});

fs.createWriteStream('filewrite.txt', )