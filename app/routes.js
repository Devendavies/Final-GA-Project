'use strict';
// Load Models
let Feed    = require('./models/champion_feed');
let Profile = require('./models/champion_profile');

// Expose routes
module.exports = function(app){

  // LoL Champions API Route

  app.get('/api/champion', function(req, res){
    request("https://na.api.pvp.net/api/lol/na/v1.4/champion", function(){
      console.log('Fetching champion data.')
      res.send(champions)
    })
  })

  // TWITTER
  // get all champions
  app.get('/api/champion/{{champion.name}}', function(req, res) {
    request("https://api.twitter.com/1.1/search/tweets.json?q=%23lol%20%23" + champ, )
    //parse returned data
  })


  // LOCAL ROUTES

  // Champion Profile routes?
  app.get(function(){

  })

  app.post(function(){

  })

  app.delete(function(){

  })

}
