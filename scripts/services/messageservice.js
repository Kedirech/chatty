'use strict';

angular.module('chattyApp')
  .factory('MessageService', function MessageService($http) {
    
    var objToReturn = {};
    objToReturn.getMessages = function (){
      return $http.get('http://127.0.0.1:8150').then(function(response){
        console.log(response);
        return response.data;
      }, function(error){
        console.log(error);
      })
    }

    objToReturn.addMessage = function (newMessage){
      return $http.post('http://127.0.0.1:8150', {message:newMessage}).then(function(response){
        console.log(response);
      }, function(error){
        console.log(error);
      })
    }

    return objToReturn;
  });
