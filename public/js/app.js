'use strict'

console.log('APP LOADED'); // Test

//------------------------------------
// Controllers Injection
//------------------------------------

ChampionController.$inject = ['$http'];
// FeedController.$inject = ['$http'];

//-------------------------------------------------------------------------
//                         Template/Handlebar Actions
//-------------------------------------------------------------------------

$(document).ready(function(){

  console.log('javascript LOADED!'); // Test

  //  let renderChampTemplate    = Handlebars.compile($('template#champions').html());
  //  let renderFeedTemplate     = Handlebars.compile($('template#tweets').html());
  //  let tempDiv                = $('#templates');

   //------------------------------------
   //        API Authentication
   //------------------------------------

  // LoL api

  // const lolAPIKey = "8fa8fbd8-e1de-4895-bcd6-1b1577547aae"; // Secure with scope later
  // let API_KEY = '?api_key=' + lolAPIKey;  // Format for Leauge API URL
  // let requestUrl     = 'https://na.api.pvp.net/api/lol/static-data/{region}/v1.2/versions/champion';

  // 3rd Party LoL Data Host Option
  // let requestUrl = 'http://ddragon.leagueoflegends.com/cdn/5.24.2/data/en_US/champion';

  // Check League Servers Status
  // let leagueStatus   = 'status.leagueoflegends.com';

  //------------------------------------
  //         Global Functions
  //------------------------------------

  // Site Intro Page
  let renderFacepage = function(){
    let resultDiv = $(".horizontal")
    let template = Handlebars.compile($('#facepage-template').html());
    resultDiv.empty().append(template);
  };

  renderFacepage(); // Initialize With Template

  //------------------------------------
  //           Click Events
  //------------------------------------
  $('body').on('click', '.goToFacepage',   renderFacepageTemplate);
  $('body').on('click', '.enter',         renderChampTemplate);
  $('body').on('click', '.champion-tile', renderFeedTemplate);
  // $('.goToFacepage').on('click',  renderFacepageTemplate);
  // $('.enter').on('click',         renderChampTemplate);
  // $('.champion-tile').on('click', renderFeedTemplate);

});
