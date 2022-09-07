const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/db');
const app = express();
app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('helmet')());
app.use('/api/students', require('./routes/students'));
app.use('/api/courses', require('./routes/course'));


// Production
if(process.env.NODE.ENV === 'production') {
  /*app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });*/

  //app.use(express.static("client/build"));
  app.use(express.static(path.join(__dirname, 'client', 'build')));
   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });

}
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );