'use strict';

/**
 * @ngdoc function
 * @name icaroClienteApp.controller:RecursosEditarRecursoCtrl
 * @description
 * # RecursosEditarRecursoCtrl
 * Controller of the icaroClienteApp
 */
angular.module('icaroClienteApp')
  .controller('RecursosEditarRecursoCtrl', function (recurso) {
    self=this;
    self.recurso=recurso;
    console.log(self.recurso);
  });
