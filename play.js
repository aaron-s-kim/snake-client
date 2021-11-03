const net = require("net");
const { connect } = require('./client'); // ES6 shorthand syntax to destructure object
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
console.log('Successfully setup user input interface');

// conn.on('connect', () => {
//   console.log('Successfully connected to game server');
//   conn.write('Name: AAR');
//   // setTimeout(() => {
//   //   conn.write('Move: up');
//   // }, 1000);
// });









// can terminate app with Ctrl+C