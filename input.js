// input.js

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

module.exports = {
  setupInput
};

// // Notes
// handleUserInput does not need to be exported because:
// its only called by setupInput which is already in same file
// Doesn't need to be exported since handleUserInput does not need to be called/referenced elsewhere