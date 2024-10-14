
# fetch Instance
 > Note: This is entirely for my own curiosity and likely has no useful purpose whatsoever.

## Experiments

This article documents my experiments in trying to instantiate the 'fetch' function as if it were a constructor even though according to spec it is not.

## new fetch();

In most cases it is not possible to call `fetch` with the `new` keyword without getting an exception. The one exception that I have found is NodeJS which treats `new fetch` the same as a regular fetch call.
```js
//in nodejs only
const presponse = new fetch('https://example.com');
const response = await presponse;
console.log(response);//typical response object
```
⠀
You can also create a `Presponse` from scratch.

```js
async function Presponse(){
  return new Response(...arguments);
}
const presponse = Presponse("body content");
console.log(presponse.constructor.name);//Promise
const response = await presponse;
console.log(response.constructor.name);//Response
const text = await response.text();
console.log(text);//body content
```

## Cache API

A `Prespose` is returned by the `match` method of a `cache`.

```js
const cache = await caches.open("app-cache");
const request = new Request("https://example.com");
const presponse = cache.match(request);
```

## Service Workers

In the context of a service worker, a `Presponse` is the primary input for `event.respondWith`.

```js
self.addEventListener("fetch", (event) => {
  const presponse = cache.match(event.request);
  event.respondWith(presponse);
});
```



