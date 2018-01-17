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
    'ngAria',
    'ngCookies',
    'ngMessages',
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
    'ui.grid.exporter',
    'ngStorage',
    'ngWebSocket',
    'angularMoment',
    'ui.utils.masks',
    'pascalprecht.translate'
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
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notificaciones'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/recursos/administracion', {
        templateUrl: 'views/recursos/administracion.html',
        controller: 'RecursosAdministracionCtrl',
        controllerAs: 'recursosAdministracion'
      })
      .when('/recursos/agregar_hijo', {
        templateUrl: 'views/recursos/agregar_hijo.html',
        controller: 'RecursosAgregarHijoCtrl',
        controllerAs: 'agregarHijo'
      })
      .when('/recursos/agregar_padre', {
        templateUrl: 'views/recursos/agregar_padre.html',
        controller: 'RecursosAgregarPadreCtrl',
        controllerAs: 'agregarPadre'
      })
      .when('/recursos/editar_recurso', {
        templateUrl: 'views/recursos/editar_recurso.html',
        controller: 'RecursosEditarRecursoCtrl',
        controllerAs: '/recursos/editarRecurso'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
