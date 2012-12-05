/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

module.exports = {

  typeOf: function (x) {

    var type = typeof x;

    if (type === 'object') {
      type = Array.isArray(x) ? 'array' : type;
      type = x === null ? 'null' : type;
    }

    return type;

  },

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

    var keys = obj ? Object.keys(obj) : [];

    keys.forEach(function (name, i) {
      func.call(ctx, name, obj[name], i);
    });

  },

  mapIn: function (obj, func, ctx) {

    var result = {};

    this.eachIn(obj, function (name, obj, i) {
      result[name] = func.call(this, name, obj, i);
    }, ctx);

    return result;

  },

  walk: function (target, source, func, walkArrays) {

    var self = this;

    var walkObj = function (target, source) {

      self.eachIn(source, function (name, obj) {
        step(target[name], obj, name, target);
      });

    };

    var step = function (target, source, name, parent) {

      var type = self.typeOf(source);

      if (type === 'object') {

        if (!target && parent) {
          target = parent[name] = {};
        }
        
        walkObj(target, source);

      } else {
        func(target, source, name, parent);
      }

    };

    step(target, source);

  },

  extend: function (obj, src) {

    this.walk(obj, src, function (obj, src, name, parent) {
      parent[name] = src;
    });

    return obj;

  },

  defaults: function (obj, defaults) {

    this.walk(obj, defaults, function (obj, src, name, parent) {

      if (!obj) {
        parent[name] = src;
      }

    });

    return obj;

  },

  pick: function(obj, keys) {

    var picked = {};
    keys = this.typeOf(keys) === 'array' ? keys : Object.keys(keys);

    this.each(keys, function (key) {
      picked[key] = obj && obj[key];
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