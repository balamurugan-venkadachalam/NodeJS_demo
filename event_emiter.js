var event = require('events');
var util = require('util');

util.in
var eventEmitter = new event.EventEmitter();

eventEmitter.on('clicked', function(){
    console.log('something clicked ...');
});

eventEmitter.emit('clicked');