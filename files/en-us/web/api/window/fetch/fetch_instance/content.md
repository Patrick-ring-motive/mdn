
# fetch Instance
 > Note: This is entirely for my own curiosity and likely has no useful purpose whatsoever.

## Experiments

This article documents my experiments in trying to instantiate the 'fetch' function as if it were a constructor even though according to spec it is not.

## new fetch()

In most cases it is not possible to call `fetch` with the `new` keyword without getting an exception. The one exception that I have found is NodeJS which treats `new fetch` the same as a regular fetch call.
```js
//in nodejs only
const presponse = new fetch('https://example.com');
const response = await presponse;
console.log(response);//typical response object
```
⠀

## Object.create(fetch.prototype)

A fun workaround for instantiating an object is to directly create from it's prototype. Again, on browsers, fetch has no prototype unlike most functions. NodeJS being the exception does.
```js
//in nodejs mostly
const fetchInstance = Object.create(fetch.prototype);
console.log(fetchInstance); /**/ fetch{} /**/
```
This is the only actual instantiation of fetch.


## Object.create(fetch)

Inheriting an object is not the same as inheriting the prototype. It onlybinherits the static methods and properties but `fetch` doesn't have any it makes little difference. On a positive note, this usually works.
```js
const staticFetch = Object.create(fetch);
console.log(staticFetch); /**/ Function{} /**/
```


## newFetch(init)

This is what I do to bring it all together(for no reason other than because I can)
```js
fetch.prototype ??= fetch;
function newFetch(init){
  return Object.assign(
    Object.create(fetch.prototype),
    init
  );
}
```

This typically works and gives the closest object in each scenario. For shits and giggles I'm using this for serializing http requests and responses. I just like the idea of developers scratching their heads trying to understand the point.
```js
function serializeHTTP(re){
  const reDTO = newFetch({headers:Object.fromEntries(re.headers)});
  for(const a in re){
      if(re[a] == null || typeof re[a] === 'function'){continue;}
      if(~String(a).search(/headers|fetcher|signal/)){continue;}
      reDTO[a] = re[a];
  }
  return reDTO;
}
```
Any object would work.

