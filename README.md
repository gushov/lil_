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

Install via npm: `npm install lil_`

```javascript
var _ = require('lil_');
_.typeOf(sixpack); 
```

## Documentation

### typeOf(thing)

Returns name of thing corresponding with typeof operator except nulls return "null" arrays return "array".

### each(array, iterator, context)

Calls iterator function with each element of array.

### every(array, test, context)

If iterator returns true for each element in array function returns true otherwise iteration stops and function returns false.

### map(array, mapper, context)

Returns new array populated with elements returned by mapper for each element in array.

### eachIn(object, iterator, context)

Calls iterator with each proptery of object.

### mapIn(object, mapper, context)

Returns new object with property values set from mapper.

### extend(target, src)

Walk the object graph and copy properties of src to target.

### defaults(target, src)

Copy src properties to target if not already present in target.

### pick(target, keys)

Returns copy of target with only properties present in keys

## License
Copyright (c) 2012 August Hovland
Licensed under the MIT license.
