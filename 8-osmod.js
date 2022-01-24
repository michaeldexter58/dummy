const os = require('os');

//info abour current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system up time us ${os.uptime()}seconds`);

const currentos = {
    name: os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentos);