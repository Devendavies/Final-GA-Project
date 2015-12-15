'use strict';
angular.module('lol-champ-feed', [])
  .controller('ChampionController', champion_profileController)

champion_profileController.$inject = ['$http'];
