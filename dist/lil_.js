/*! lil_ - v0.0.0 - 2012-11-04
 * Copyright (c) 2012 August Hovland <gushov@gmail.com>; Licensed MIT */

(function (ctx) {

  "use strict";

  var defined = {};
  var exported = {};

  function resolve(from, name) {

    if (name.indexOf('.') === -1) {
      return name;
    }

    name = name.split('/');
    from = from ? from.split('/') : [];
    from.pop();

    if (name[0] === '.') {
      name.shift();
    }

    while(name[0] === '..') {
      name.shift();
      from.pop();
    }

    return from.concat(name).join('/');

  }

  //@TODO handle provide/require/define already in scope

  ctx.provide = function (name, module, isDefinition) {

    if (isDefinition) {
      return defined[name] = module;
    } else {
      return exported[name] = module;
    }

  };

  ctx.require = function (path, canonical) {

    var exports, module;
    var name = canonical || path;

    if (exported[name]) {
      return exported[name];
    } else {

      exports = exported[name] = {};
      module = { exports: exports };
      defined[name](function (path) {
        return ctx.require(path, resolve(name, path));
      }, module, exports);

      return (exported[name] = module.exports);

    }

  };

}(this));
 
provide('lil_', function (require, module, exports) {

/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

module.exports = {

  each: function (arr, func, ctx) {

    if (arr && arr.length) {
      arr.forEach(func, ctx);
    }

  },

  every: function (arr, func, ctx) {

    if (arr && arr.length) {
      return arr.every(func, ctx);
    }
    return false;

  },

  map: function (arr, func, ctx) {

    if (arr && arr.length) {
      return arr.map(func, ctx);
    }
    return [];

  },

  eachIn: function (obj, func, ctx) {

    var keys = Object.keys(obj) || [];

    keys.forEach(function (name, i) {
      func.call(ctx, name, obj[name], i);
    });

  },

  defaults: function (obj, defaults) {

    this.eachIn(defaults, function (name, value) {
      if (!obj[name]) { obj[name] = value; }
    });

    return obj;

  },

  pick: function(obj, keys) {

    var picked = {};

    this.each(keys, function (key) {
      picked[key] = obj[key];
    });

    return picked;

  },

  pushOn: function (obj, prop, value) {

    if (obj[prop] && typeof obj[prop].push === 'function') {
      obj[prop].push(value);
    } else if ( typeof obj[prop] === 'undefined' ) {
      obj[prop] = [value];
    }

  }

};

}, true);
