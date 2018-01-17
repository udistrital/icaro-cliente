'use strict';

describe('Controller: RecursosAdministracionCtrl', function () {

  // load the controller's module
  beforeEach(module('icaroClienteApp'));

  var RecursosAdministracionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecursosAdministracionCtrl = $controller('RecursosAdministracionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecursosAdministracionCtrl.awesomeThings.length).toBe(3);
  });
});
