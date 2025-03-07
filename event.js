let eventemmiter = require("events");
let events = new eventemmiter();
// You can register listeners for specific events using the on() method. The first argument is the event name, and the second argument is the callback function to be executed when the event is emitted.


events.on("call", (e) => {
    console.log(e);
});


// Listening events
// Before emitting any event, it must register functions(callbacks) to listen to the events. 
let listener = () => {
    console.log("this is listener");
}
let listener1 = () => {
    console.log("this is listener1");
}
let listener2 = () => {
    console.log("this is listener2");
}
events.addListener("call", listener)
events.addListener("call", listener1)
events.addListener("call", listener2)


// To trigger an event, use the emit() method with the event name as the first argument.
// events.emit("call", "old");



// Removing Listener
// The eventEmitter.removeListener() takes two argument event and listener, and removes that listener from the listeners array that is subscribed to that event. While eventEmitter.removeAllListeners() removes all the listener from the array which are subscribed to the mentioned event.

// events.removeListener("call", listener)
// events.emit("call", "old1");
// events.removeListener("call", listener1)
// events.emit("call", "old2");
// events.removeListener("call", listener2)
// events.removeAllListeners("call")
// events.emit("call", "old3");
events.prependListener('call', () => {
    console.log("all other")
});
console.log(events.listeners("call"));
console.log(events.listenerCount("call"));
events.emit("call", "old1");