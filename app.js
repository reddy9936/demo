const http = require("http");
const EventEmitter = require("events");
const Logger = require("./logger");
const logger = new Logger();
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    logger.on("messagelogged", (arg) => {
      console.log("listner called", arg);
    });
    logger.log("message");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3000);
console.log("listening to port 3000");
