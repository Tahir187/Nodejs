const fs = require("fs");


fs.writeFileSync("read.txt", "welcome to my page");

const filename = "test.txt";
const data = "Hey, What's your name?";

fs.writeFile(filename, data, (err) =>{
    if(err){
        console.error(err);
    }else{
        console.log(`File '${filename}' has been written.`)
    }
});

