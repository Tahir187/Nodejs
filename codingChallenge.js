

const EventEmitter = require("events");

const event = new EventEmitter();


// order event 
event.on("order", ()=>{
    console.log("Order placed for food");
});
event.emit("order");

// doorbell event
event.on("doorbell", ()=>{
    console.log("RING RING!");
});
event.emit("doorbell");

// payment event
event.on("payment", ()=>{
    console.log("Enjoy your food");
});
event.emit("payment");
