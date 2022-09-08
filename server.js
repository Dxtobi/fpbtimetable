const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/db');
const app = express();
app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static(path.join(__dirname, "client/build")));

}



app.use(require('helmet')());
app.use('/api/students', require('./routes/students'));
app.use('/api/courses', require('./routes/course'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );