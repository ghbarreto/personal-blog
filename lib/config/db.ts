const keys = require('./keys');
const mongoose = require('mongoose');

// connection pool
const mflix = {
  dbName: 'blog',
};

// returns the status of the connected databases
const events = (
  event: { on: (arg0: string, callback: () => void) => void },
  database_name: string
) => {
  event.on('connected', () => {
    console.log(database_name, ' connection created');
  });

  event.on('disconnected', () => {
    console.log(database_name, ' connection disconnected');
  });
};

// creating a connection
const connection = mongoose.createConnection(keys.mongoURI, mflix);

// calling the events function to know whether it connected or not
events(connection, 'blog');

module.exports = {
  _connection: connection,
};

export { connection as _connection };
