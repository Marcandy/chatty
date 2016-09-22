'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:8989');
      },

      addMessage: function ( url, username, message ) {
        return $http.post('http://localhost:8989', {
          url: url,
          username: username,
          message: message });
      }
    };
  });
