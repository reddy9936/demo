const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    //send an http request
    console.log(message);

    //raise an event
    this.emit("messagelogged", { id: 1 });
  }
}
module.exports = Logger;
