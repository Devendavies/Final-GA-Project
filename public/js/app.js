'use strict';

$(function(){
  console.log('javascript LOADED!');
  // let socket = io();
  let facepageTemplate = Handlebars.compile($('template#facepage').html());
  let renderChampTemplate = Handlebars.compile($('template#champ-select').html());
  let renderFeedTemplate = Handlebars.compile($('template#champ-feed').html());

  let renderChamps = function(data){
    console.log('render champs clicked!')
    console.log(data);
    let champTemplate = renderChampTemplate({champ: data});
    $('.results').empty().append(champTemplate);
  };

  let getChamps = function(e){
    e.preventDefault();
    $.ajax({
      url: '/champ-select',
      method: 'GET',
      dataType: 'json'
    }).done(renderChamps)
  };

  let createSurvey = function(e){
    e.preventDefault();
    alert('Survey Created! Poll baby poll!');
    var surveyData = {
      topic: $('#new_topic').val(),
      description: $('#new_description').val(),
    }
    console.log(surveyData);
    $.ajax({
      url: 'surveys',
      type: 'POST',
      data: surveyData
    }).done()
  };

//body click events
  $('.show_users').on('click', getUsers);
  $('body').on('click', '#', function);
});
