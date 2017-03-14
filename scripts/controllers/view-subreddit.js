var app = angular.module('redditApp');

app.controller('viewCtrl', function($scope, redditFactory){

  $scope.jsonInfo = redditFactory.giveItBack();
  console.log($scope.jsonInfo);


});
