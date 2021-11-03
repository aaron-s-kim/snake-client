// play.js

const net = require("net");
const { connect } = require('./client'); // ES6 shorthand syntax to destructure object
const { setupInput } = require("./input");

console.log("Connecting ...");
setupInput(connect());
