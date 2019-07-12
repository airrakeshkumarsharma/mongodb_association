var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var badgesSchema = new Schema({
  difficulty: String
});


module.exports =  mongoose.model('badges', badgesSchema);