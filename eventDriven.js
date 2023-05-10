const EventEmmiter = require("events");

const customEmmiter = new EventEmmiter();

customEmmiter.on("response", (name, id)=>{
    console.log(`Data recieved user ${name} with id: ${id}`);
});


customEmmiter.on("response", ()=>{
    console.log("some other logic here");
});

customEmmiter.emit("response", "Muhammad Tahir", 17); 