const net = require("net");
const { connect } = require('./client');

console.log("Connecting ...");
connect();


// can terminate app with Ctrl+C

// // event handling
// conn.on("event name", functionThatDoesSomething);
// conn.on("event name", () => {
//   // code that does something
// });