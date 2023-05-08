const path = require("path");

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const absolute  = path.basename(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);