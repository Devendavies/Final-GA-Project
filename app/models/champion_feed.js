var mongoose = require('mongoose');

module.exports = mongoose.model('champion_feed', {
  image :  String,
  author : String,
  text :   String

});
