const mongoose = require('mongoose');

// Connect to DB and instantiate models    
mongoose.connect('db details', {useNewUrlParser: true});
var db = mongoose.connection;

if(!db) 
    console.log("Error in db connection");
else {
    console.log("connected with db ");
    module.exports = db;
}
