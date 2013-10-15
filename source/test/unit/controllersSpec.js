//'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
    beforeEach(module('northwindApp.controllers'));


  it('should ....', inject(function () {
      var i = 0;
      expect(i).toBe(0);
    //spec body
  }));

  it('should ....', inject(function() {
      //spec body
      var scope = {}, ctrl = new customerController(scope);

      expect(scope.customers.length).toBeGreaterThan(0);

  }));
});
