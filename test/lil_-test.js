/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global assert, refute */

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

  "should iterate until false is returned": function () {

    var testArray = [true, true, false, true, true];
    var testArray2 = [true, true, true, true];
    var cbStub = this.stub();
    cbStub.returnsArg(0);

    refute(_.every(testArray, cbStub));
    assert.equals(cbStub.callCount, 3);

    assert(_.every(testArray2, cbStub));
    assert.equals(cbStub.callCount, 7);

  },

  "should map the given array": function () {

    var testArray = [1, 2, 3];
    var cbStub = this.stub();
    cbStub.returnsArg(0);

    assert.equals(_.map(testArray, cbStub), [1, 2, 3]);
    assert.calledThrice(cbStub);
    assert.calledWith(cbStub, 1);
    assert.calledWith(cbStub, 2);
    assert.calledWith(cbStub, 3);

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

  },

  "should provide default values": function () {

    var recipe = {
      clams: 2,
      shrimps: 4,
      salt: '2tsp'
    };

    var defaults = {
      butter: '1tsp',
      salt: '1tsp',
      whiteWine: '1/2cup'
    };

    var r = _.defaults(recipe, defaults);
    assert.same(r, recipe);
    assert.equals(r.clams, 2);
    assert.equals(r.shrimps, 4);
    assert.equals(r.butter, '1tsp');
    assert.equals(r.salt, '2tsp');
    assert.equals(r.whiteWine, '1/2cup');

  },

  "should return only selected keys": function () {

    var obj = {
      x: 'x',
      b: 'b',
      z: 'z',
      c: 'c',
      d: 'd'
    };
    var keys = ['a', 'b', 'c'];
    var result = _.pick(obj, keys);

    assert.equals(Object.keys(result).length, 3);
    refute.defined(result.a);
    assert.equals(result.b, 'b');
    assert.equals(result.c, 'c');

  },

  "should push elements onto an array": function () {

    var classRoom = {
      girls: ['ruby'],
      teacher: 'azure'
    };

    _.pushOn(classRoom, 'girls', 'georgia');
    _.pushOn(classRoom, 'boys', 'kyle');
    _.pushOn(classRoom, 'teacher', 'martina');

    assert.equals(classRoom.girls[1], 'georgia');
    assert.equals(classRoom.boys[0], 'kyle');
    assert.equals(classRoom.teacher, 'azure');
    
  }

});
