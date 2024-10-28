# fetchText

`fetchText` is my common wrapper function to roll fetch and text decode into one handy function. This page show a few different ways to write it with varying levels of granularity.

This is the basic implementation that goes directly from response to text.
```js
async function fetchText(){
  const response = await fetch(...arguments);
  const text = await response.text();
  return text;
}
```

This converts to a blob first and then a text.
```js
async function fetchBlobText(){
  const response = await fetch(...arguments);
  const blob = await response.blob();
  const text = await blob.text();
  return text;
}
```

This converts to an arrayBuffer first and then decodes it to text.
```js
async function fetchDecodeText(){
  const response = await fetch(...arguments);
  const arrayBuffer = await response.arrayBuffer();
  const text = new TextDecoder().decode(arrayBuffer);
  return text;
}
```

This converts to an arrayBuffer first and then decodes it to text.
```js
async function fetchBlobText(){
  const response = await fetch(...arguments);
  const arrayBuffer = await response.arrayBuffer();
  const text = new TextDecoder().decode(arrayBuffer);
  return text;
}
```

This converts the ReadableStream chunk by chunk

```js
async function fetchStreamText(){
  const decoder = new TextDecoder();
  const decode = x => decoder.decode(x);
  const response = await fetch(...arguments);
  const stream = response.body;
  let text = '';
  for await (const chunk of stream){
      text += decode(chunk);
  }
  return text;
}
```
