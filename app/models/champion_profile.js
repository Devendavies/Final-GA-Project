'use strict'
var mongoose = require('mongoose');

module.exports = mongoose.model('champion_profile', {
  image: String,
  name : String,
  role : String,
  stats: String
});
