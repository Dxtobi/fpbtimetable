const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/db');
const app = express();
app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const root = require('path').join(__dirname, 'client', 'build')
if(process.env.NODE_ENV === 'production'){
  //set static folder
 // app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.static(root));

console.log('😸', path.join(__dirname, "client/build"), '😸')
}

app.get("*", (req, res) => {
  console.log('says', '😸 hit  me harder 😸 😸 😸😸😸')
  res.sendFile('index.html', { root });
})

app.use(require('helmet')());
app.use('/api/students', require('./routes/students'));
app.use('/api/courses', require('./routes/course'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );