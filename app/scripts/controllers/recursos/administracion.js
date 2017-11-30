'use strict';

/**
 * @ngdoc function
 * @name icaroClienteApp.controller:RecursosAdministracionCtrl
 * @description
 * # RecursosAdministracionCtrl
 * Controller of the icaroClienteApp
 */
angular.module('icaroClienteApp')
  .controller('RecursosAdministracionCtrl', function ($translate,$mdDialog,$scope) {
    var self = this;

    //GRID RECURSOS
    self.gridOptionsRecursos = {
      enableSelectAll: false,
      enableRowSelection: false, 
      enableRowHeaderSelection: false,
      enableSorting: true,
      enableFiltering: true,
      multiSelect: false,
      columnDefs: [{
          field: 'Id',
          visible: false,
        },
        {
          field: 'Nombre',
          displayName: 'Nombre',
          visible: true,
          width: "20%",
        },
        {
          field: 'Descripcion',
          displayName: 'Descripción',
          width: "45%"
        },
        {
          field: 'Estado',
          displayName: 'Estado',
          width: "10%",
        },
        {
          field: 'Padre',
          displayName: 'Padre',
          width: "15%",
        },
        {
          field: 'Acciones',
          displayName: 'Acciones',
          cellTemplate: '<div><div class="col-md-3"><a><span class="fa fa-plus" ng-click="grid.appScope.AgregarHijo()"></span></a></div> <div class="col-md-3 "><a><span class="fa fa-pencil"></span></a></div> <div class="col-md-3"><a><span class="fa fa-toggle-on"></span></a></div></div>',
          width: "10%",
        },
      ],
      onRegisterApi: function(gridApi) {
        self.gridAp = gridApi;
      }
    };
    //GRID RECURSOS

    //Función para asignar controlador de la vista agregar_hijo.html
    $scope.AgregarHijo = function(){
      $mdDialog.show({
        controller: "RecursosAgregarHijoCtrl",
        controllerAs: 'agregarHijo',
        templateUrl: 'views/recursos/agregar_hijo.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true,
        fullscreen: true,
        width: 300,
        //locals: {idResolucion: row.entity.Id}
      })
    }


    //Función para asignar controlador de la vista agregar_padre.html
    $scope.AgregarPadre = function(){
      $mdDialog.show({
        controller: "RecursosAgregarPadreCtrl",
        controllerAs: 'agregarPadre',
        templateUrl: 'views/recursos/agregar_padre.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true,
        fullscreen: true,
        //locals: {idResolucion: row.entity.Id}
      })
    }


    // JSON PRUEBA
    self.gridOptionsRecursos.data = [
      {
        "Id": 8,
        "Nombre": "Recurso 7",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 19,
        "Nombre": "Recurso 9",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 18,
        "Nombre": "Recurso 16",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 19,
        "Nombre": "Recurso 9",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 10,
        "Nombre": "Recurso 7",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 9,
        "Nombre": "Recurso 5",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      
      {
        "Id": 8,
        "Nombre": "Recurso 7",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 19,
        "Nombre": "Recurso 9",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 18,
        "Nombre": "Recurso 16",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 19,
        "Nombre": "Recurso 9",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 10,
        "Nombre": "Recurso 7",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
      {
        "Id": 9,
        "Nombre": "Recurso 5",
        "Descripcion": "Esta es la descripción del recurso",
        "Estado": false,
        "Padre": "Si",
      },
    ]
    // JSON PRUEBA

  });
