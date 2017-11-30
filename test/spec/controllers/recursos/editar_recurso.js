'use strict';

describe('Controller: RecursosEditarRecursoCtrl', function () {

  // load the controller's module
  beforeEach(module('icaroClienteApp'));

  var RecursosEditarRecursoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecursosEditarRecursoCtrl = $controller('RecursosEditarRecursoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecursosEditarRecursoCtrl.awesomeThings.length).toBe(3);
  });
});
