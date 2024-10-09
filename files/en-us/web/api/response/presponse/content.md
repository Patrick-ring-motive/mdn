
# Presponse

A **`Presponse`** object is a [Promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to a [Response](/en-US/docs/Web/API/Response).

## Fetch

The `Presponse` is primarily obtained from calling fetch.

```js
const presponse = fetch('https://example.com');
const response = await presponse;
console.log(response.constructor.name);//Response
```
⠀
You can also create a `Presponse` from scratch

```js
async function Presponse(){
  return new Response(...arguments);
}
const presponse = Presponse("body content");
console.log(presponse.constructor.name);//Promise
const response = await presponse;
console.log(response.constructor.name);//Response
```

## Service Worker

In the context of a service worker, a Presponse is the primary input for `event.respondWith`.

```js
self.addEventListener("fetch", (event) => {
  const presponse = caches.match(event.request);
  event.respondWith(presponse);
});
```



