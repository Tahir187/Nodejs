const os = require("os");

const user = os.userInfo();
console.log(user)

// method returns uptime in seconds
console.log(`The system uptime is ${os.uptime()} in seconds`);

const currentUser = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
};

console.log(currentUser);
