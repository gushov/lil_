/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global provide */

(function (provide) {

  function each(arr, func, ctx) {

    if (arr && arr.length) {
      arr.forEach(func, ctx);
    }

  }

  function eachIn(obj, func) {

    var keys = Object.keys(obj) || [];

    keys.forEach(function (name, i) {
      func(name, obj[name], i);
    });

  }

  provide('lil_', {
    each: each,
    eachIn: eachIn
  });

}(typeof module !== 'undefined' ?
    function (a, b) { module.exports = b; } :
    provide));