const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
const db = process.env.MONGO_DB || 'mongodb://localhost:27017/chuks'
mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false  });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database! 😸'))
  .on('error', err => console.log('Error with the database!', err));
