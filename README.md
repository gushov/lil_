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

__Arguments__

* thing - any javascript value

__Example__

```javascript
var sixpack = ["beer"];
//returns "array"
_.typeOf(sixpack);
```

### each(array, iterator, context)

Calls iterator function with each element in array.

__Arguments__

* array - an array
* iterator(element, index, array) - iterator function called with the array element, the element index and the array
* context - this inside interator function 

__Example__

```javascript
var sixpack = ["beer"];

_.each(sixpack, function (elem, index, array) {
  //called once with beer, 0, and ["beer"]
}, this);
```

### every(array, test, context)

If iterator returns true for each element in array function returns true otherwise iteration stops and function returns false.

__Arguments__

* array - an array
* test(element, index, array) - if the function returns false iteration stops otherwise iteration continues
* context - this inside test function 

__Example__

```javascript
var sixpack = ["beer", false, "beer"];

//returns false
_.every(sixpack, function (elem, index, array) {
  //called twice
}, this);
```

### map(array, mapper, context)

Returns new array populated with elements returned by mapper for each element in array.

__Arguments__

* array - an array
* mapper(element, index, array) - function returns new element
* context - this inside mapper function 

__Example__

```javascript
var sixpack = ["beer", "beer"];

//returns ["empty", "empty"]
_.each(sixpack, function (elem, index, array) {
  return "empty";
}, this);
```

## License
Copyright (c) 2012 August Hovland
Licensed under the MIT license.
