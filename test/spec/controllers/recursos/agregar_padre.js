'use strict';

describe('Controller: RecursosAgregarPadreCtrl', function () {

  // load the controller's module
  beforeEach(module('icaroClienteApp'));

  var RecursosAgregarPadreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecursosAgregarPadreCtrl = $controller('RecursosAgregarPadreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecursosAgregarPadreCtrl.awesomeThings.length).toBe(3);
  });
});
