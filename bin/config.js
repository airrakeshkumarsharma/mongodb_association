const mongoose = require('mongoose');

// Connect to DB and instantiate models    
mongoose.connect('mongodb://Rakesh:Ramayana123@ds347467.mlab.com:47467/mounty', {useNewUrlParser: true});
var db = mongoose.connection;

if(!db) 
    console.log("Error in db connection");
else {
    console.log("connected with db ");
    module.exports = db;
}