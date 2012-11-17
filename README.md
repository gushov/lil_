# lil_

A li'l utility library

## Description

lil_ is where I keep all the utility functions that I use in my other li'l modules.

## Browser usage

load dist/lil_.js or dist/lil_.min.js in you browser and call it like this:

```javascript
(function () {

  var _ = require('lil_');
  _.typeOf(sixpack);

}());
```

## Node usage

install via npm: `npm install lil_`

```javascript
var _ = require('lil_');
_.typeOf(sixpack); 
}());
```

## Documentation

### typeOf(thing)

returns string name of thing corresponding with typeof except return "null" or nulls and "array" for arrays.

## License
Copyright (c) 2012 August Hovland
Licensed under the MIT license.
