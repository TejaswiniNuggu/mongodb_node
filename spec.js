const os =require("os");
// 1byte=1024
//
console.log("Free memory",os.freemem()/1024/1024/1024);
console.log("total memory",os.totalmem()/1024/1024/1024);
