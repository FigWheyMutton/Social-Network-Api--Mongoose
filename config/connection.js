const { connect, connection } = require('mongoose');

connect('mongodb://localhost/mySocialNetworkApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
