const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect('mongodb+srv://LearningAssistant:LearningAssistantPassword@testdb.4y699.mongodb.net/testDB?retryWrites=true&w=majority');
module.exports = mongoose.connection;
