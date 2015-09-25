'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    $scope.getMessages = function(){
      MessageService.getMessages().then(function(messages){
          $scope.messages = messages

      });
    }

    $scope.getMessages();
    $scope.addChats = function(){
      
      if($scope.chatEnter){
       MessageService.addMessage($scope.chatEnter).then(function(response){
        $scope.getMessages();
       });
      }

      $scope.chatEnter ="";
    };
  });
