/*! lil_ - v0.0.0 - 2012-10-23
 * Copyright (c) 2012 August Hovland <gushov@gmail.com>; Licensed MIT */

/*global provide */

(function (provide) {

  var _ = {};

  _.each = function (arr, func, ctx) {

    if (arr && arr.length) {
      arr.forEach(func, ctx);
    }

  };

  _.every = function (arr, func, ctx) {

    if (arr && arr.length) {
      return arr.every(func, ctx);
    }
    return false;

  };

  _.eachIn = function (obj, func) {

    var keys = Object.keys(obj) || [];

    keys.forEach(function (name, i) {
      func(name, obj[name], i);
    });

  };

  _.defaults = function (obj, defaults) {

    this.eachIn(defaults, function (name, value) {
      if (!obj[name]) { obj[name] = value; }
    });

    return obj;

  };

  _.pushOn = function (obj, prop, value) {

    if (obj[prop] && typeof obj[prop].push === 'function') {
      obj[prop].push(value);
    } else if ( typeof obj[prop] === 'undefined' ) {
      obj[prop] = [value];
    }

  };

  provide('lil_', _);

}(typeof module !== 'undefined' ?
    function (a, b) { module.exports = b; } :
    provide));