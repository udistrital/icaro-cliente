'use strict';

/**
 * @ngdoc service
 * @name icaroClienteApp.administrativaService
 * @description
 * # administrativaService
 * Factory in the icaroClienteApp.
 */
angular.module('icaroClienteApp')
  .factory('administrativaService', function ($http) {
    // Service logic
    // ...

    var path = "http://10.20.0.254/administrativa_api/v1/";
    //var path = "http://127.0.0.1:8090/v1/";
    // Public API here
    return {
      get: function(tabla, params) {
        return $http.get(path + tabla + "/?" + params);
      },
      post: function(tabla, elemento) {
        return $http.post(path + tabla, elemento);
      },
      put: function(tabla, id, elemento) {
        return $http.put(path + tabla + "/" + id, elemento);
      },
      delete: function(tabla, id) {
        return $http.delete(path + tabla + "/" + id);
      }
    };
  });
