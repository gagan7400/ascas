const fs = require('fs');
// const os = require('os');
// const path = require('path');
// const { sum, fs } = require('./sum');

// synchrnous
//  console.log(sum(9,8) )
//  fs.w riteFileSync("./index.txt","awcawdc")

// fs.mkdirSync("./data/ooo")//mkdir is used to make directory
// fs.writeFileSync("./data/index.js", "")//mkdir is used to make directory
// let data = fs.readFileSync("./data/index.json");
// console.log(data.toString());
// fs.appendFileSync("./data/index.js", "\n console.log('hello world')")
// fs.copyFileSync("./data/index.js","./data/index.json")
// console.log(fs.existsSync("./data/index.sjs"))
// fs.renameSync("./data/index.html", "./data/index.js");
// fs.linkSync("./data/index.json", "./index.json");
// fs.rmdirSync("./data")
// fs.unlinkSync("./index.js")


// async code

// fs.mkdir("./data", (err) => { console.log(err || "dir created successfully") });
// fs.writeFile("./data/index.txt", "hello world", (err) => { console.log(err || "file created successfully") })

// fs.appendFile("./data/index.txt", " ", (err) => { console.log(err || "append successfully") })
// fs.readFile("./data/kk.txt", (err, data) => {
//     console.log(err && "this is an error" + err)
// })
// fs.copyFile("./data/index.txt", "./data/index.js", (err) => {
//     console.log(err || "copied")
// })
// fs.unlink("./data/index.txt",(err)=>{
//     console.log(err || "unlink successfully")
// });
// fs.rmdir("./data", (err) => {;
//     console.log(err || "deleted");
// });
// console.log(os.arch());
// console.log(os.availableParallelism());
// console.log(os.cpus());
// console.log(os.freemem() / 1024 / 1024 / 1024);
// console.log(os.totalmem() / 1024 / 1024 / 1024);
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.machine());
// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.type());
// console.log(os.userInfo());
// console.log(os.version());
// console.log("end");
// let p = "C:/Users/Md_Shaad/OneDrive/Desktop/batch/backend/index.js";
// console.log(path.basename(p));
// console.log(path.delimiter);
// console.log(path.dirname(p));;
// console.log(path.extname(p));
// console.log(path.isAbsolute(p));
// console.log(path.join("mob/users", "/users/index.js"));

// console.log(path.normalize(p));
// console.log(path.relative(p, "OneDrive/Desktop/batch/backend/index.js"));
// console.log(path.resolve("./home", "/about/home/about.js"));


// npm

// node package manager 

let http = require("http");
// console.log(http);
// let server = http.createServer(function (req, res) {
//     console.log(req.url, req.method);
//     if (req.url === "/" && req.method === "GET") {
//         res.statusCode = 202;
//         res.statusMessage = "ok mil gaya ";
//         res.setHeader("Content-Type", "plain/text");
//         res.setHeader("token", "plain/text");
//         console.log(res.getHeader("Content-Type"))
//         let data = fs.readFileSync("./package-lock.json", "UTF-8");
//         res.write(data)
//     } else if (req.url === "/post" && req.method === "POST") {
//         let data = '';
//         req.on('data', chunk => {
//             data += chunk.toString();
//         });
//         req.on('end', () => {
//             const postData = JSON.parse(data);
//             console.log('POST data:', postData);
//             res.end('Data received');
//         });

//     }

// });
// server.listen(5000, "localhost", (err) => {
//     console.log(err || "server run on port : 5000")
// })



let event = require("events");
let eventEmitter = new event();

eventEmitter.on("click", (a) => {
    console.log("hello my first event ")
});
eventEmitter.once("clicked", (a) => {
    console.log("hello my first event ", a)
});

// eventEmitter.emit("click", "data");
// console.log("first listner")
// let f = () => {
//     console.log("this is new listener")
// }
// eventEmitter.addListener("click", f)

// eventEmitter.emit("click");
// eventEmitter.removeListener("click", f)
// eventEmitter.removeAllListeners("call")
// console.log("ast")
eventEmitter.emit("clicked", "a");
eventEmitter.emit("clicked", "b");
eventEmitter.emit("clicked", "c"); 