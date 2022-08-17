let events = require('events');
let EventEmitter = events.EventEmitter;
let eventEmitter = new events.EventEmitter();

// listener #1
let listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
let listner2 = function listner2() {
   console.log('listner2 executed.');
}


eventEmitter.addListener('connection', listner1);


eventEmitter.on('connection', listner2);

let eventListeners = EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");


eventEmitter.emit('connection');


eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

eventListeners = EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");