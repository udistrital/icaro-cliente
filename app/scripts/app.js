'use strict';

/**
 * @ngdoc overview
 * @name icaroClienteApp
 * @description
 * # icaroClienteApp
 *
 * Main module of the application.
 */
angular
  .module('icaroClienteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.pagination',
    'ui.grid.exporter',
    'ui.grid.autoResize',
    'ngStorage',
    'ngWebSocket',
    'angularMoment',
    'ui.utils.masks',
    'pascalprecht.translate',
  ])
  .run(function(amMoment) {
    amMoment.changeLocale('es');
})
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notificaciones'
      })
      .when('/recursos/administracion', {
        templateUrl: 'views/recursos/administracion.html',
        controller: 'RecursosAdministracionCtrl',
        controllerAs: 'recursosAdministracion'
      })
      .when('/recursos/agregar_padre', {
        templateUrl: 'views/recursos/agregar_padre.html',
        controller: 'RecursosAgregarPadreCtrl',
        controllerAs: 'agregarPadre'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
