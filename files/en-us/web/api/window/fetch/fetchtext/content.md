# fetchText

`fetchText` is my common wrapper function to roll fetch and text decode into one handy function.

```js
async function fetchText(){
  return await (
    await fetch(...arguments)
  ).text();
}
```
