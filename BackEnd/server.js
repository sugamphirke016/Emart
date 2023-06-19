// Server Connection
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('e-Mart Offline Server!');
});

app.listen(8000, function checkConn(error){
    if(error) console.log('Error ocurred in Server Connection!');
    else console.log('Server Connected Successfully on port number 8000...');
});

// Parsing of Data
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200", "http://localhost:4201"); // Update with your domain name
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({
    extended: false
 }));

// MongoDB Connection
const mongoose = require('mongoose');
const username = 'sugamphirke9';
const password = 'Sugam@016';
const dbName = 'emartians';

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@emartusers.swzqcmw.mongodb.net/${encodeURIComponent(dbName)}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.log("Error while connecting to the Atlas!", error);
  });

// Routing Configuration
const routes = require('./routes/routes');
app.use(routes);
