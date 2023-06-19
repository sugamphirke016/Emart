// Defining schema of the database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    "name": String,
    "username": String,
    "email": String,
    "phoneNo": String,
    "password": String
});

module.exports = mongoose.model('user', userSchema);