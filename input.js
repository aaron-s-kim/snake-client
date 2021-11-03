// input.js

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const wasd = {  w: "Move: up", a: "Move: left", s: "Move: down", d: "Move: right"  };

// Event listener for stdin
const handleUserInput = function(key) {
  
  for (let k in wasd) {
    if (key === k) {
      console.log(`key: ${k}, val: ${wasd[k]}`);
      connection.write(`${wasd[k]}`);
    }
  }

  if (key === '\u0003') { // Ctrl+C input to terminate
    console.log('Exiting...');
    process.exit();
  }
};

// conn.on('connect', () => {
//   console.log('Successfully connected to game server');
//   conn.write('Name: AAR');
//   // setTimeout(() => {
//   //   conn.write('Move: up');
//   // }, 1000);
// });

module.exports = {
  setupInput
};

// // Notes
// handleUserInput does not need to be exported because:
// its only called by setupInput which is already in same file
// Doesn't need to be exported since handleUserInput does not need to be called/referenced elsewhere