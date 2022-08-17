let events = require('events');
let eventEmitter = new events.EventEmitter();

// Step 1 : require events and instantiate a eventEmitter


// step 4 : this is executed
let connectHandler = function connected() {
    console.log('connection succesful.');
   
    // 'data_received' event is fired   (step 5)
    eventEmitter.emit('data_received');
 }
 
 // on triggerring 'connection' execute 'connectHandler' (step 3)
 eventEmitter.on('connection', connectHandler);
  
 // step 6 : 'data_received' is fired and message is printed.
 eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
 });
 
 // step 2 : connection event is triggered 
 eventEmitter.emit('connection');
 

 // step 7 : Other code is executed.
 console.log("Program Ended.");