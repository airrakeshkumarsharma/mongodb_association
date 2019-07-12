var mongoose = require('mongoose');
const badgesSchema = require('./badges');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  phone: String,
  address: String,
  badge:
    [{
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'badges'
    }]
});

module.exports = mongoose.model('person_datas', userSchema );