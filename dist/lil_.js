/*! lil_ - v0.0.0 - 2012-10-15
 * Copyright (c) 2012 August Hovland; Licensed MIT */

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