var event = require('events');
var util = require('util');

var Student = function(name){
    this.name = name;
};

util.inherits(Student, event.EventEmitter)

//var eventEmitter = new event.EventEmitter();
var maxStud = new Student('MAX');

maxStud.on('clicked', function(marks){
    console.log(maxStud.name + ' scored '+ marks +' marks');
});

maxStud.emit('clicked', 95);