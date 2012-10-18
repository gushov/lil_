/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global provide */

(function (provide) {

  var _ = {};

  _.each = function (arr, func, ctx) {

    if (arr && arr.length) {
      arr.forEach(func, ctx);
    }

  };

  _.eachIn = function (obj, func) {

    var keys = Object.keys(obj) || [];

    keys.forEach(function (name, i) {
      func(name, obj[name], i);
    });

  };

  provide('lil_', _);

}(typeof module !== 'undefined' ?
    function (a, b) { module.exports = b; } :
    provide));