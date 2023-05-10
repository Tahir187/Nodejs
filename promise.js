const { readFile } = require("fs");
const { reject, result } = require("lodash");
const { resolve } = require("path");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


const start = async ()=>{
    try {
        const first = await getText("./content/subfolder/first.txt");
        const test = await getText("./content/subfolder/test.txt");
        console.log(first);
        console.log(test);
    } catch (error) {
        console.log(error);
    }
}

start();

getText("./content/second.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
