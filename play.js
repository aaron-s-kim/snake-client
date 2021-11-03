const net = require("net");
const { connect } = require('./client'); // ES6 shorthand syntax to destructure object

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Event listener for stdin
const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') { // Ctrl+C input to terminate
    console.log('Exiting...');
    process.exit();
  }
};

setupInput();


// conn.on('connect', () => {
//   console.log('Successfully connected to game server');
//   conn.write('Name: AAR');
//   // setTimeout(() => {
//   //   conn.write('Move: up');
//   // }, 1000);
// });









// can terminate app with Ctrl+C