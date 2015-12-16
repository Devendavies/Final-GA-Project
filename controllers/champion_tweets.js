'use strict';
//route requirements and secret
let express = require('express');
let mongoose = require('mongoose');
let routes = express.Router();
let Champ = require('../models/champ.js');

routes.route('/')

.get((req, res, next) => {
  Survey.find({}, (err, champions) => {
  if(err) throw err;
  console.log(champions.name);
  res.send(champions.name);
  });
});
