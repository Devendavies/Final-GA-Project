'use strict'
// Champion Controller
console.log("Champ Controller Loaded")

function ChampionController($http) {
  var self       = this;
  self.getChamps = getChamps;
  self.listEm    = listEm;
  self.perChamp  = perChamp;
  self.champs    = [];

  // Send ALL Champ's Data to Page
  let listEm = function(){
    let resultDiv = $(".horizontal");
    let champIt   = Handlebars.compile($('#champs-template').html());
    resultDiv.empty().append(champIt);
    self.champs = ??;
  }

  // Request ALL Champions from API
  let getChamps = function(){
    $.ajax({
      url: requestUrl + '.json',
      type: 'GET',
      dataType: "json"
    }).done(function(res){
      let champions = parseJSON(res) // WHAT IS THE RESPONSE CALLED
      console.log(champions)
      listEm;
    })
  }

  // Champion Profile Page
  let listOne = function(){
    let onlyOne = renderFeedTemplate();
    tempDiv.empty().append(onlyOne);
  }

  // Request Specific Champion Data
  let perChamp = function(){
    champ = $("#champion").val();
    $.ajax({
      url: requestUrl + '/' + champ + '.json',
      type: 'GET',
      dataType: 'json',
      data: {

      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("error getting Champion data!");
      }
    }).done(listOne)
  }
}
