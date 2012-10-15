/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global assert */

var buster = typeof buster !== 'undefined' ? buster : require("buster");
var _ = require('../lib/lil_', 'lil_');

buster.testCase("lil_", {

  "should iterate each array element": function () {

    var cbSpy = this.spy();
    var testArray = [1, 2, 3, 4, 5];

    _.each(testArray, cbSpy);

    assert.equals(cbSpy.callCount, 5);
    assert.calledWith(cbSpy, 1);
    assert.calledWith(cbSpy, 2);
    assert.calledWith(cbSpy, 3);
    assert.calledWith(cbSpy, 4);
    assert.calledWith(cbSpy, 5);

  },

  "should interate each object property": function () {

    var cbSpy = this.spy();
    var testObj = {
      'butter': 1,
      'milk': 2,
      'cheese': 3
    };

    _.eachIn(testObj, cbSpy);

    assert.equals(cbSpy.callCount, 3);
    assert.calledWith(cbSpy, 'butter', 1, 0);
    assert.calledWith(cbSpy, 'milk', 2, 1);
    assert.calledWith(cbSpy, 'cheese', 3, 2);

  }

});
