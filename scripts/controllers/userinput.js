var app = angular.module('redditApp');

app.controller('inputCtrl', function($scope, redditFactory){

  $scope.sendName = function(subName){

    console.log(subName);

    redditFactory.giveItToUs(subName);
  }

});
