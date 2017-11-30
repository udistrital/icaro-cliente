'use strict';

/**
 * @ngdoc function
 * @name icaroClienteApp.controller:RecursosAgregarHijoCtrl
 * @description
 * # RecursosAgregarHijoCtrl
 * Controller of the icaroClienteApp
 */
angular.module('icaroClienteApp')
  .controller('RecursosAgregarHijoCtrl', function (financieraRequest,$scope) {
    self = this;
    self.datos_bool = true;
    self.rubros_bool = false;
    self.caracterizacion_bool = false;
    var caracterizacion = {};
    self.campos_caracterizacion_agregados = [];

    //Grid de rubros 
    self.gridOptionsRubros={
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      enableFiltering: true,
      multiSelect: false,
      columnDefs : [
      {field: 'Id',cellTemplate: '<div align="center">{{row.entity.Id}}</div>',width:'8%'},
      {field: 'Rubro.Codigo',   displayName:'Codigo', cellTemplate: '<div align="right">{{row.entity.Rubro.Codigo}}</div>',width:'18%'},
      {field: 'Vigencia',   displayName: 'Vigencia',cellTemplate: '<div align="center">{{row.entity.Vigencia}}</div>',width:'10%'},
      {field: 'Rubro.Nombre',   displayName:'Rubro',width:'30%'},
      {field: 'Rubro.UnidadEjecutora',  displayName:'Unidad ejecutora',width:'16%'},
      {field: 'Valor',   displayName: 'Valor', cellTemplate: '<div align="right">{{row.entity.Valor | currency:undefined:0 }}</div>',width:'18%'},
    ]
    };

    //Grid de rubros 
    self.gridOptionsCaracterizacion={
      enableRowSelection: false,
      enableRowHeaderSelection: false,
      enableFiltering: false,
      multiSelect: false,
      rowHeight: 40,
      columnDefs : [
      {field: 'Id',cellTemplate: '<div align="center">{{row.entity.Id}}</div>',width:'10%'},
      {field: 'TipoCampo',cellTemplate: '<div align="center">{{row.entity.TipoCampo}}</div>',width:'30%'},
      {field: 'TextoCampo',cellTemplate: '<div align="center">{{row.entity.TextoCampo}}</div>',width:'30%'},
      {field: 'Requerido',cellTemplate: '<div align="center">{{row.entity.Requerido}}</div>',width:'15%'},
      {field: 'Quitar',cellTemplate: '<div align="center"><button button type="button" class="btn btn-danger" ng-click="grid.appScope.agregarHijo.quitar_caracterizacion(row.entity)">Quitar</button></div>',width:'15%'},
    ]
    };    

    financieraRequest.get('apropiacion','').then(function(response) {
      self.gridOptionsRubros.data = response.data;
    });

    self.gridOptionsCaracterizacion.data=self.campos_caracterizacion_agregados;

      //se guarda los datos de recursos temporalmente en un arreglo
    self.agregar_caracterizacion = function(){
      caracterizacion = {};
      caracterizacion.Id=self.campos_caracterizacion_agregados.length+1;
      caracterizacion.TipoCampo=document.getElementById("tipoCampoRecurso").value;
      caracterizacion.TextoCampo=document.getElementById("textoCampoRecurso").value;
      caracterizacion.Requerido=$("#RequeridoRecurso").is(":checked");
      self.campos_caracterizacion_agregados.push(caracterizacion);
    };

      //se guardan todos los campos del modal de agregar padre
    self.guardar_recurso_padre = function(){

    };

    //se cambia el estado de un recurso, si es un recurso padre los hijos seran inactivados tambien
    self.editar_estado_recurso = function(){
        
    };     

    //funcion para quitar la caracterizacion del arreglo cuando se de click en el boton quitar del grid
    self.quitar_caracterizacion = function(seleccion_borrar){
      var index = self.campos_caracterizacion_agregados.indexOf(seleccion_borrar);
      self.campos_caracterizacion_agregados.splice(index, 1);
    };

    //se guardan todos los campos de los 3 contenedores en la base de datos
    self.guardar_recurso_hijo = function(){    
      console.log($scope.nombrePadre);
    };
  });
