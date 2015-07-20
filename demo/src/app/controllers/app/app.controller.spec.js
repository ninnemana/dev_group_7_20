'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('bookie'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

});
