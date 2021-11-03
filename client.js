const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here, ex. '10.0.0.209' or 'localhost'
    port: 50541 // PORT number here
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on('data', (data) => {
    console.log('Server message:', data);
  });

  conn.on('connect', () => {
  console.log('Successfully connected to game server');
  conn.write('Name: AAR');
  });

  return conn;
};



module.exports = {
  connect // ES6 shorthand syntax for 'connect': connect
};