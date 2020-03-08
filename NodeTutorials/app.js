var events = require('events');

var myEmitter = new events.EventEmiter();

myEmitter.on('someEvent',function(msg){

    console.log(msg);
});

myEmitter.emit('someEvent', 'The event was emitted');
