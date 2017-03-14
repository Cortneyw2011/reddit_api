//this is initializing the module and inlcuding ng-route argument
var app = angular.module('redditApp', ['ngRoute']);

//the code below configures the paths when the links are clicked
app.config(function($routeProvider, $locationProvider){

$routeProvider
//when 'userinput' is clicked the html partial in the .html file below will be loaded. using the controller inputCtrl
.when('/userinput', {
  controller:'inputCtrl',
  templateUrl: 'views/searchPage.html'
})
.when('/viewsubreddit', {
  //when 'viewsubreddit' is clicked the html partial in the .html file below will be loaded.using the controller viewCtrl
  controller: 'viewCtrl',
  templateUrl: 'views/displayPage.html'
});

//removes additional characters (!) from the path
$locationProvider.hashPrefix('');

});
