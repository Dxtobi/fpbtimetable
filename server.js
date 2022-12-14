const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/db');
const root = require('path').join(__dirname, 'client', 'build')
const stat = require('path').join(__dirname, 'static')
const app = express();
app.use(express.static(root));
app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if(process.env.NODE_ENV === 'production'){
  //set static folder
 // app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.static(root));

console.log('ð¸', path.join(__dirname, "client/build"), 'ð¸')
}

app.get("*", (req, res) => {
 
  if (!req.path.includes('api')) {
    console.log('says', 'ð¸ hit  me harder ð¸ ð¸ ð¸ð¸ð¸', root, req.path)
    console.log(path.resolve(__dirname, 'client', 'build', 'index.html')+root, root+req.path)
    res.sendFile(root+req.path);
  } else {
    console.log('this is the error ð¸ hahahah ð¸ hahahahð¸')
      }
})

app.use(require('helmet')());
app.use('/api/students', require('./routes/students'));
app.use('/api/courses', require('./routes/course'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );