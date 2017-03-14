//getting the module
var app = angular.module('redditApp');

//initializing factory using "name of factory" & function ($http) to get json info
app.factory('redditFactory', function($http){
  //this object will hold the json payload after the http call
  var jsonObject = {};
  //must have retun with all functions stored in object name:property (funciton:funciton). *angular convention
  return{
    giveItToUs:giveItToUs,
    giveItBack: giveItBack
  };


//creating a function to get the json object
  function giveItToUs(subreddit){
//method and url getting json info from reddit
    var promise = $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/'+subreddit+'.json'
//.then loads the json payload in the function parameter
    }).then(function successCallback(response){
      console.log(response);
      jsonObject = response;
    });
    //returns promise
    return promise;
  }

  function giveItBack(){
    return jsonObject;
  }

});
