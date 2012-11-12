/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global assert, refute */

var buster = typeof buster !== 'undefined' ? buster : require("buster");
var _ = typeof module !== 'undefined' ? require('../lib/lil_') : require('lil_');

buster.testCase("lil_", {

  "should return type as a string": function () {

    assert.equals(_.typeOf(''), 'string');
    assert.equals(_.typeOf(false), 'boolean');
    assert.equals(_.typeOf(0), 'number');
    assert.equals(_.typeOf([]), 'array');
    assert.equals(_.typeOf({}), 'object');
    assert.equals(_.typeOf(null), 'null');
    assert.equals(_.typeOf(undefined), 'undefined');

  },

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
    var ctx = {};

    _.eachIn(testObj, cbSpy, ctx);

    assert.equals(cbSpy.callCount, 3);
    assert.calledWith(cbSpy, 'butter', 1, 0);
    assert.calledWith(cbSpy, 'milk', 2, 1);
    assert.calledWith(cbSpy, 'cheese', 3, 2);
    assert.equals(cbSpy.thisValues[0], ctx);

  },

  "should map the given object": function () {

    var testObj = {
      a:1,
      b:2,
      c:3
    };

    var cbStub = this.stub();
    cbStub.returnsArg(1);

    assert.equals(_.mapIn(testObj, cbStub), { 'a':1, 'b':2, 'c':3 });
    assert.calledThrice(cbStub);
    assert.calledWith(cbStub, 'a');
    assert.calledWith(cbStub, 'b');
    assert.calledWith(cbStub, 'c');

  },

  "should extend the values of an object": function () {

    var obj = {
      isTrue: true,
      str: 'what'
    };

    var src = {
      isTrue: false,
      num: 0,
      arr: [1, 2, 3],
      str: 'hello',
      sub: { yo: { its: "me" } }
    };

    _.extend(obj, src);
    assert.equals(obj, {
      isTrue: false,
      num: 0,
      arr: [1, 2, 3],
      str: 'hello',
      sub: { yo: { its: "me" } }
    });

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

  "should return only selected array keys": function () {

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

  "should return only selected object keys": function () {

    var obj = {
      x: 'x',
      b: 'b',
      z: 'z',
      c: 'c',
      d: 'd'
    };

    var keys = {
      'a': null,
      'b': undefined,
      'c': false
    };

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
