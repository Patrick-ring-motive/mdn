
# fetch Instance
 > Note: This is entirely for my own curiosity and likely has no useful purpose whatsoever.

## Experiments

This article documents my experiments in trying to instantiate the 'fetch' function as if it were a constructor even though according to spec it is not.

## `new fetch()`

In most cases it is not possible to call `fetch` with the `new` keyword without getting an exception. The one exception that I have found is NodeJS which treats `new fetch` the same as a regular fetch call.
```js
//in nodejs only
const presponse = new fetch('https://example.com');
const response = await presponse;
console.log(response);//typical response object
```
⠀

## `Object.create(fetch.prototype)`

A fun workaround for instantiating an object is to directly create from it's prototype. Again, on browsers, fetch has no prototype unlike most functions. NodeJS being the exception does.
```js
//in nodejs mostly
const fetchInstance = Object.create(fetch);
console.log(fetchInstance); /**/ fetch{} /**/
```
This is the only actual instantiation of fetch.


## `Object.create(fetch)`


