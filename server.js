const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/db');
const app = express();
app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Production
if(process.env.NODE_ENV === 'production') {

  /*

    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {

      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));

    });

  */

  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });

  /*
  app.use(express.static("client/build"));
 // app.use(express.static(path.join(__dirname, 'client', 'build')));
   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
*/
}

app.use(require('helmet')());
app.use('/api/students', require('./routes/students'));
app.use('/api/courses', require('./routes/course'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );