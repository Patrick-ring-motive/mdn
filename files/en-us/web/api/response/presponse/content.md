
# Presponse

A **`Presponse`** object is a conceptual shorthand for a **Promise** that resolves to a **Response**. It's often used when working with APIs like **fetch**, **cache**, or **service workers**.

## Fetch API

The `Presponse` is primarily obtained from calling fetch.

```js
const presponse = fetch('https://example.com');
const response = await presponse;
console.log(response.constructor.name);//Response
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



