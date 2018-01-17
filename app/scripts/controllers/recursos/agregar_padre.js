'use strict';

/**
 * @ngdoc function
 * @name icaroClienteApp.controller:RecursosAgregarPadreCtrl
 * @description
 * # RecursosAgregarPadreCtrl
 * Controller of the icaroClienteApp
 */
angular.module('icaroClienteApp')
  .controller('RecursosAgregarPadreCtrl', function (administrativaService,$mdDialog) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    self = this;


    self.guardar_padre=function(){

      var recurso = {
        Nombre: self.nombre,
        Descripcion: self.descripcion,
        Activo: self.activo
      };

      administrativaService.post("recurso",recurso).then(function(response){

        if(response.status==201){
          swal(
            'Registro Correcto',
            'El recurso se ha guardado correctamente',
            'success'
          )
        }else{
          swal(
            'No se ha podido guardar',
            'Ha ocurrido un error',
            'error'
          )

        }
        console.log(response);

      });

    };

    self.cerrar_md_dialog=function(){
      $mdDialog.hide(this);

    };
  });
