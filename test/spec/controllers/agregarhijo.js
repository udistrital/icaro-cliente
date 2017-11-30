'use strict';

describe('Controller: AgregarhijoCtrl', function () {

  // load the controller's module
  beforeEach(module('icaroClienteApp'));

  var AgregarhijoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarhijoCtrl = $controller('AgregarhijoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarhijoCtrl.awesomeThings.length).toBe(3);
  });
});
