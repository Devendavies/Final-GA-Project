'use strict';
//route requirements and secret
let express = require('express');
let mongoose = require('mongoose');
let routes = express.Router();
let Champ = require('../models/champ.js');

routes.route('/')
// retrieve all champions
.get((req, res, next) => {
  Survey.find({}, (err, champions) => {
  if(err) throw err;
  console.log(champions.name);
  res.send(champions.name);
  });
});

//route using specific name
routes.route('/:name')
//retrieve and display a champion based on its name param
.get(function(req, res, next) {
  Survey.findByName(req.params.name).exec(function(err, champ){
    if(err) throw err;
  res.send(champ.name);
  });
})

module.exports = routes;
