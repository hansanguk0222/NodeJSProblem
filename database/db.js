const mongoose = require('mongoose');

module.exports = () => {
  function connect() {
    mongoose.connect('mongodb://localhost:27017/example', (err) => {
      if (err) throw err;
      
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./models/book.js');
};
