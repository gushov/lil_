/*! lil_ - v0.0.0 - 2012-10-18
 * Copyright (c) 2012 August Hovland <gushov@gmail.com>; Licensed MIT */

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