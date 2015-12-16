'use strict'
const key = 8fa8fbd8-e1de-4895-bcd6-1b1577547aae;

$(function(){

  console.log('javascript LOADED!');

  let renderFacepageTemplate = Handlebars.compile($('template#facepage').html()),
  let renderChampTemplate = Handlebars.compile($('template#champ-select').html()),
  let renderFeedTemplate = Handlebars.compile($('template#champ-feed').html()),

  // Api authentication key
  const API_KEY = key;

  let requestURL     = 'https://na.api.pvp.net/api/lol/na/v1.4/',
  // Check League Servers Status
  let leagueStatus   = 'status.leagueoflegends.com';

  // Site Intro Page
  let facepage = function(){
    let faceIt = renderFacepageTemplate();
    $('.results').empty().append(faceIt);
  };

  // Send All Champ's Data to page
  let listEm = function(){
    let champIt = renderChampTemplate();
    $('.results').empty().append(champIt);
  }

  // Request All Champions from the api
  let getChamps = function(){
    $.ajax({
        url: requestURL + 'champion',
        type: 'GET',
      }).done(listEm)
    };
  }

  // Champion Profile Page
  let listOne = function(){
    let onlyOne = renderFeedTemplate();
    $('.results').empty().append(onlyOne);
  }

  // Request Specific Champion Data
  let perChamp = function(){
    champ = $("#champion").val();
    $.ajax({
        url: requestURL + 'champion/' + champ + '?api_ke=' + API_KEY,
        type: 'GET',
        dataType: 'json',
        data {

        },
        success: function (json) {

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Champion data!");
      }).done(listOne)
    };
  }


// Click events
  $('.enter').on('click', getChamps);
  $('.champion-tile').on('click', perChamp);
});
