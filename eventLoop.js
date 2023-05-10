const {readFile} = require("fs");

console.log("Frist task started");
readFile("./content/second.txt","utf-8", (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("First task completed");
});
console.log("The next task started");