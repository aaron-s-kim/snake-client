// client.js

const net = require("net");
const { IP, PORT, initials } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here, ex. '10.0.0.209' or 'localhost'
    port: PORT // PORT number here
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on('data', (data) => {
    console.log('Server message:', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${initials}`);
  });

  return conn;
};



module.exports = {
  connect // ES6 shorthand syntax for 'connect': connect
};