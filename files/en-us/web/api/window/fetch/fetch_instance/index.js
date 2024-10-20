import {fuzzyMatch} from './fuzz.js';
globalThis.sleep = function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

globalThis.adefer = async function adefer(promise) {
   return(await Promise.all([
    promise,
   // sleep(0),
   ]))?.[0];
}

globalThis. objDoProp = function (obj, prop, def, enm, mut) {
  return Object.defineProperty(obj, prop, {
    value: def,
    writable: mut,
    enumerable: enm,
    configurable: mut,
  });
};
globalThis. objDefProp = (obj, prop, def) => objDoProp(obj, prop, def, false, true);
globalThis. objDefEnum = (obj, prop, def) => objDoProp(obj, prop, def, true, true);
globalThis. objFrzProp = (obj, prop, def) => objDoProp(obj, prop, def, false, false);
globalThis. objFrzEnum = (obj, prop, def) => objDoProp(obj, prop, def, true, false);
globalThis. objectNames = (x) => Object.getOwnPropertyNames(x);
globalThis. objectSymbols = function () {
  return Object.getOwnPropertySymbols(...arguments);
};
globalThis.objDefProps = function objDefProps(obj,props={}){
  for(let prop in props){
    objDefProp(obj,prop,props[prop]);
  }
  return obj;
};
globalThis. objGetProto = function () {
  return Object.getPrototypeOf(...arguments);
};
globalThis. objSetProto = function () {
  return Object.setPrototypeOf(...arguments);
};
globalThis.create = (proto) => Object.create(proto);
function assignAll(target, src) {
  let excepts = ["prototype", "constructor", "__proto__"];
  let enums = [];
  let source = src;
  while (source) {
    for (let x in source) {
      try {
        if (excepts.includes(x)) {
          continue;
        }
        objDefEnum(target, x, source[x]);
        enums.push(x);
      } catch (e) {
        continue;
      }
    }
    for (let key of objectNames(source)) {
      try {
        if (enums.includes(key) || excepts.includes(key)) {
          continue;
        }
        objDefProp(target, key, source[key]);
      } catch {
        continue;
      }
    }
    for (let key of objectSymbols(source)) {
      try {
        if (enums.includes(key) || excepts.includes(key)) {
          continue;
        }
        objDefProp(target, key, source[key]);
      } catch {
        continue;
      }
    }
    if (source.entries && source.get && source.set) {
      try {
        for (let [key, value] of source.entries()) {
          try {
            target.set(key, value);
          } catch (e) {
            continue;
          }
        }
      } catch (e) {}
    }
    if (source.add && source.keys) {
      try {
        for (let key of source.keys()) {
          try {
            target.add(key);
          } catch {
            continue;
          }
        }
      } catch {}
    }
    source = objGetProto(source);
  }
  return target;
}



fetch.prototype ?? objDefProps(fetch,{
  prototype:fetch,
  constructor:fetch
});
globalThis.newFetch = function newFetch(init) {
  return objDefProp(Object.assign(create(fetch.prototype), init),'constructor',fetch);
}

globalThis.newRead = function newRead(init) {
  if(!globalThis.Read){
    globalThis.Read = new Response('').body.getReader().read;
    objDefProps(Read,{
      prototype:Read,
      constructor:Read,
    });
  }
  return objDefProp(Object.assign(create(Read.prototype), init),'constructor',Read);
}

globalThis.serializeHTTP ??= function serializeHTTP(re) {
  const reDTO = newFetch({
    headers: Object.fromEntries(re.headers)
  });
  for(const a in re) {
    if(re[a] == null || typeof re[a] === 'function') {
      continue;
    }
    if(~String(a).search(/headers|fetcher|signal/)) {
      continue;
    }
    reDTO[a] = re[a];
  }
  return reDTO;
}
globalThis.newArrayBuffer = function(input) {
  const buf = new ArrayBuffer(input.length * 2);
  const bufView = new Uint16Array(buf);
  for(let i = 0, inputLen = bufView.length; i !== inputLen; i++) {
    bufView[i] = input?.charCodeAt?.(i) || +input[i];
  }
  return buf;
}
globalThis.znewArrayBuffer = function(input) {
  try {
    const buf = new ArrayBuffer(input.length * 2);
    const bufView = new Uint16Array(buf);
    for(let i = 0, inputLen = bufView.length; i !== inputLen; i++) {
      try {
        bufView[i] = input?.charCodeAt?.(i) || +input[i];
      } catch {
        continue;
      }
    }
    return buf;
  } catch (e) {
    console.log(e,...arguments);
    return newArrayBuffer(e.message);
  }
}
globalThis.responseText = async function responseText(response) {
  return await response.text();
};
globalThis.zresponseText = async function zresponseText(response) {
  try {
    const reader = zgetReader(response.clone().body);
    const txtArr = [];
    while(true) {
      try{
            const chunk = await zread(reader);
            if(chunk?.done ?? !chunk) {
              break;
            }
            txtArr.push(zdecoder().zdecode(chunk?.value));
          }catch(e){
            console.log(e,...arguments);
            txtArr.push(`/*${e.message}*/`);
          }
    }
    return txtArr.join``;
  } catch (e) {
    console.log(e,...arguments);
    return String(e?.message);
  }
};
globalThis.responseArrayBuffer = async function responseArrayBuffer(response) {
  return await response.arrayBuffer();
};
globalThis.zresponseArrayBuffer = async function zresponseArrayBuffer(response) {
  try {
    return await responseArrayBuffer(response.clone());
  } catch (e) {
    console.log(e,...arguments);
    return znewArrayBuffer(String(e?.message));
  }
};
globalThis.zfetch = async function() {
  try {
    return (await adefer(fetch.apply(this, arguments)));
  } catch (e) {
    let code = 569;
    try {
      return (await adefer(fetch.call(this, arguments[0])));
    } catch {
      console.log(e,...arguments);
      const match = await adefer(fuzzyMatch(e.message));
      if(match[2] >= 2) {
        code = +match[0] || 569;
      }
      return await adefer((znewResponse(arguments[0] + '\n' + e?.message + '\n' + e?.stack, {
        status: code,
        statusText: e?.message,
        headers: {
          "Content-Type": "text/html"
        }
      })));
    }
  }
};
globalThis.znewRequest = function(input, options) {
  let req;
  try {
    if(!options) {
      if(typeof input == 'string') {
        req = new Request(input);
      } else {
        try {
          req = new Request(input);
        } catch (e) {
          console.log(e,...arguments);
          input = serializeHTTP(input);
          input.body = e.message;
          req = new Request(input);
        }
      }
    } else {
      try {
        req = new Request(input, options);
      } catch (e) {
        try {
          req = new Request(input);
        } catch {
          console.log(e,...arguments);
          options = serializeHTTP(options);
          options.body = e.message;
          req = new Request(input, options);
        }
      }
    }
  } catch (e) {
    console.log(e,...arguments);
    const url = input.url || input;
    req = new Request(url, {
      headers: {
        "error-message": e.message,
        redirect: "follow",
        "Content-Type": "text/html"
      },
      redirect: "follow"
    });
  }
  return req;
}
globalThis.znewResponse = function znewResponse(body, options) {
  let res;
  try {
    if(/^(101|204|205|304)$/.test(String(options?.status))){
      return new Response(null,options);
    }
    if(!options) {
      try {
        if(/^(101|204|205|304)$/.test(String(body?.status))){
          return new Response(null,body);
        }
        res = new Response(znewReadbleStream(body));
      } catch (e) {
        console.log(e,...arguments);
        res = new Response(`${body}`);
      }
    } else {
      try {
        res = new Response(znewReadableStream(body), options);
      } catch (e) {
        console.log(e,...arguments);
        try {
          res = new Response(`${body}`, options);
        } catch (e) {
          console.log(e,...arguments);
          try {
            console.log(e,...arguments);
            res = znewResponse(`${body}`, {
              headers: {
                "error-message": e.message,
                redirect: "follow",
                "Content-Type": "text/html"
              },
              redirect: "follow"
            });
          } catch (e) {
            console.log(e, ...arguments);
          }
        }
      }
    }
  } catch (e) {
    console.log(e,...arguments);
    res = new Response(e.message, {
      status: 569,
      statusText: e.message,
      headers: {
        "error-message": e.message,
        redirect: "follow",
        "Content-Type": "text/html"
      }
    });
  }
  res.contentLength = options?.contentLength ?? body?.length
  return (res);
}
globalThis.znewURL = function znewURL() {
  try {
    return new URL(...arguments);
  } catch (e) {
    console.log(e,...arguments);
    try {
      return new URL(arguments[0]);
    } catch {
      try {
        return new URL(`https://${arguments[0]}`);
      } catch {
        return new URL(`${e.name}://`);
      }
    }
  }
}
globalThis.zfetchText = async function() {
  try {
    let res = await adefer(fetch.apply(this, arguments));
    if(res?.status > 399) {
      return `${String(res?.status)}${String(res?.statusText)}`;
    }
    const resText = await adefer(responseText(res));
  } catch (e) {
    console.log(e,...arguments);
    return String(e?.message);
  }
}
globalThis.toCharCodes = function toCharCodes(str) {
  const charCodeArr = [];
  const str_length = str.length;
  for(let i = 0; i < str_length; i++) {
    const code = str.charCodeAt(i);
    charCodeArr.push(code);
  }
  return new Uint8Array(charCodeArr);
}
globalThis.ztoCharCodes = function ztoCharCodes(strng) {
  const str = String(strng);
  const charCodeArr = [];
  const str_length = str.length;
  let err;
  for(let i = 0; i < str_length; i++) {
    try {
      const code = str.charCodeAt(i);
      charCodeArr.push(code);
    } catch(e) {
      err = e;
      continue;
    }
  }
  if(err){
    console.log(err,...arguments);
  }
  return new Uint8Array(charCodeArr);
}
globalThis.fromCharCodes = function fromCharCodes(arr) {
  const charArr = [];
  const arr_length = arr.length;
  for(let i = 0; i < arr_length; i++) {
    const char = String.fromCharCode(arr[i]);
    charArr.push(char);
  }
  return charArr.join``;
}
globalThis.zfromCharCodes = function zfromCharCodes(arr) {
  try {
    arr = [...arr]
  } catch(e) {
    console.log(e,...arguments);
    arr = [...arguments]
  }
  const charArr = [];
  const arr_length = arr.length;
  let err;
  for(let i = 0; i < arr_length; i++) {
    try {
      const char = String.fromCharCode(arr[i]);
      charArr.push(char);
    } catch(e) {
      err = e;
      continue;
    }
  }
  if(err){
    console.log(err,...arguments);
  }
  return charArr.join``;
}

function cloneStream(stream){
  const tees = stream.tee()
  assignAll(stream,tees[0]);
  return tees[1];
}
globalThis.bytes = async function bytes(res){
  return await (res?.bytes?.() ?? (new Uint8Array(await res.arrayBuffer())));
};
globalThis.httpEncode = async function httpEncode(val){
  return  await bytes(new Response(val));
}
globalThis.httpDecode = async function httpDecode(val){
  return  await new Response(val).text();
}

globalThis.makeReadableStream = function makeReadableStream(data){
    const dat = [data];
    let nextChunk = ()=>dat.shift();
    if(data[Symbol.iterator]){
      const iter = data[Symbol.iterator]();
      nextChunk = ()=>iter.next();
    }else if(data[Symbol.asyncIterator]){
      nextChunk = async ()=>await data[Symbol.asyncIterator]().next();
    }else if(data.next){
      nextChunk = ()=>data.next();
    }else if(data.read){
      nextChunk = ()=>data.read();
    }else if(data.length){
      const iter = [][Symbol.iterator].call(data);
      nextChunk = ()=>iter.next();
    }else if(arguments.length>1){
      const iter = [][Symbol.iterator].call(arguments);
      nextChunk = ()=>iter.next();
    }
    let resolveStreamProcessed;
    const streamProcessed = new Promise(resolve => resolveStreamProcessed = resolve);
  
    const stream = new ReadableStream({
    async start(controller){
    while(true){
      try{
      const dataChunk = await nextChunk();
      if(dataChunk?.done || !dataChunk){
        break;
      }
    let value = dataChunk.value;
    if(Number.isInteger(value)){
      value = new Uint32Array([value]);
    }else if(value?.every?.(x=>Number.isInteger(x))){
              value = new Uint32Array([...value]);
            }
        const response = new Response(value);
        const chunk = await (response?.bytes?.() ?? (new Uint8Array(await response.arrayBuffer())));
    controller.enqueue(chunk);
      }catch{
          break;
        }
    }
    controller.close();
    resolveStreamProcessed();
  }
});
  streamProcessed.then(() => {
      tryReleaseLock(stream);
  });
  return stream;
}

globalThis.newReadableStream = function(input) {
  return new Response(input).body;
}

globalThis.znewReadableStream = function znewReadableStream() {
  try {
  	const type = String(arguments?.[0]?.constructor?.name);
  	if(type === 'ReadableStream'){
  		return arguments[0];
      //return cloneStream(arguments[0]);
  	}
    if(arguments?.[0]?.start){
      try{
        return new ReadableStream(...arguments);
      }catch(e){
        console.log(e,...arguments);
      }
    }
  	if(/Blob|ArrayBuffer|.+Array|DataView|FormData|URLSearchParams|String/.test(type)){
  		return newReadableStream(...arguments);
  	}
  	try{
      if(ReadableStream.from){
        return ReadableStream.from(...arguments);
      }
  		return makeReadableStream(arguments);
  	}catch(e){
      console.log(e,...arguments);
  		return new ReadableStream(...arguments);
  	}
  } catch (e) {
    console.log(e,...arguments);
    return newReadableStream(e?.message);
  }
}
globalThis.zdecoder = function zdecoder() {
  if(!globalThis.decoder) {
    globalThis.decoder = new TextDecoder();
    globalThis.decoder.zdecode = function zdecode(raw) {
      try {
        return globalThis.decoder.decode(raw);
      } catch (e) {
        console.log(e,...arguments);
        try {
          return zfromCharCodes(raw);
        } catch {
          return e?.message;
        }
      }
    }
    globalThis.decoder.zasyncDecode = async function zasyncDecode(raw) {
      return zdecoder().decode(raw);
    }
  }
  return globalThis.decoder;
}
globalThis.zencoder = function zencoder() {
  if(!globalThis.encoder) {
    globalThis.encoder = new TextEncoder();
    globalThis.encoder.zencode = function zencode(str) {
      try {
        return globalThis.encoder.encode(str);
      } catch (e) {
        console.log(e,...arguments);
        try {
          return ztoCharCodes(str);
        } catch {
          return ztoCharCodes(e?.message);
        }
      }
    }
    globalThis.encoder.zasyncEncode = async function zasyncEncode(str) {
      return zencoder().encode(str);
    }
  }
  return globalThis.encoder;
}
globalThis.getReader = function getReader(stream) {
  return newRead({
    reader : stream.getReader(),
    almostDone : false,
  });
}
globalThis.zgetReader = function zgetReader(stream) {
  try {
    return getReader(stream);
  } catch (e) {
    console.log(e,...arguments);
    try{
      return getReader(znewReadableStream(stream));
    }catch{
      return getReader(znewReadableStream(e?.message));
    }
  }
}
globalThis.zread = async function zread(reader) {
  if(reader.almostDone) {
    try {
      reader.reader.releaseLock();
    } catch (e) {
      console.log(e,...arguments);
    }
    return {
      value: undefined,
      done: true
    };
  }
  try {
    const rtrn = await reader.reader.read();
    if(rtrn.done) {
      try {
        reader.reader.releaseLock();
      } catch (e) {
        console.log(e,...arguments);
      }
    }
    return rtrn;
  } catch (e) {
    console.log(e,...arguments);
    reader.almostDone = true;
    return {
      value: zencoder().zencode(e.message),
      done: false
    };
  }
};
globalThis.zcontrollerClose = function zcontrollerClose(controller) {
  try {
    return controller.close();
  } catch (e) {
    console.log(e,...arguments);
    return controller;
  }
}
globalThis.zcontrollerEnqueue = async function zcontrollerEnqueue(controller,encodedChunk){
  try{
    if('Uint8Array' === encodedChunk?.constructor?.name){
      controller.enqueue(encodedChunk);
    }else{
      const response = znewResponse(encodedChunk);
      const chunk = await (response?.bytes?.() ?? (new Uint8Array(await response.arrayBuffer())));
      controller.enqueue(chunk);
    }
  }catch(e){
    console.log(e,...arguments);
    try{
      const response = new Response(`/*${e.message}*/`);
      const chunk = await (response?.bytes?.() ?? (new Uint8Array(await response.arrayBuffer())));
      controller.enqueue(chunk);
    }catch{}
  }
}

globalThis.zatob = function(str) {
  str = `${str}`;
  try {
    return atob(str);
  } catch (e) {
    console.log(e,...arguments);
    try {
      return btoa(str)
    } catch (e) {
      console.log(e,...arguments);
      return str;
    }
  }
}
JSON.zparse = function zparse() {
  try {
    return JSON.parse(...arguments);
  } catch (e) {
    console.log(e,...arguments);
    return e;
  }
}
JSON.zstringify = function zparse() {
  try {
    return JSON.stringify(...arguments);
  } catch (e) {
    console.log(e,...arguments);
    const a = Object.getOwnPropertyNames(e);
    const obj = {};
    for(const x of a) {
      obj[x] = e[x];
    }
    return JSON.stringify(obj);
  }
}
globalThis.tryReleaseLock = function(stream, reader = stream.getReader()) {
  if(stream?.locked) {
    try {
      reader.releaseLock();
    } catch (e) {
      console.log(e,...arguments);
    }
  }
}
globalThis.zdecodeURIComponent = function zdecodeURIComponent(txt) {
  try {
    return decodeURIComponent(txt);
  } catch (e){
    console.log(e,...arguments);
    try {
      return decodeURI(txt);
    } catch {
      return txt;
    }
  }
}
globalThis.zencodeURIComponent = function zencodeURIComponent(txt) {
  try {
    return encodeURIComponent(txt);
  } catch(e) {
    console.log(e,...arguments);
    try {
      return encodeURI(txt);
    } catch {
      return txt;
    }
  }
}
globalThis.zheadersSet = function zheadersSet(headers, key, val) {
  try {
    return headers.set(key, val);
  } catch (e) {
    try {
      return headers.set(String(key).replace(/[^a-zA-Z-]/g, ''), String(val));
    } catch {
      console.log(e,...arguments);
    }
  }
}
globalThis.zheadersGet = function zheadersGet(headers, key) {
  try {
    return headers.get(key);
  } catch (e) {
    try {
      return headers.get(String(key).replace(/[^a-zA-Z-]/g, ''));
    } catch {
      console.log(e,...arguments);
    }
  }
}
globalThis.zhttpCopy = function zhttpCopy(re){
  if(re instanceof Request) {
      return znewRequest(...arguments);
    }
    return znewResponse(re?.body,re);
};
globalThis.zhttpClone = function zclone(re){
  try{
    return re.clone();
  }catch(e){
    console.log(e,...arguments);
    return zhttpCopy(re).clone();
  }
}
globalThis.transformStream = async function transformStream(res, transform, ctx, options = {}) {
  const req = res instanceof Request;
  if(req && /^(GET|HEAD)$/i.test(String(res?.method))){return res;}
  if(/^(101|204|205|304)$/.test(String(res?.status))){return res;}
  let timedout = true;
  try {
    options.timeout ??= 25000;
    options.encode ??= true;
    options.passthrough ??= false;
    if(options.copy === 'new'){
      res = zhttpCopy(res);
    }
    if(options.copy === 'clone'){
      res = zhttpClone(res);
    }
    const reader = zgetReader(res.body);
    let resolveStreamProcessed, timeoutHandle;
    const streamProcessed = new Promise(resolve => resolveStreamProcessed = resolve);
    const stream = znewReadableStream({
      async start(controller) {
        let modifiedChunk = {
          value: "",
          done: false
        };
        timeoutHandle = setTimeout(() => {
          if(timedout)console.log(`Stream timed out after ${options.timeout}ms`);
          zcontrollerClose(controller);
          resolveStreamProcessed();
        }, options.timeout);
        if(options.head){
          zcontrollerEnqueue(controller,await httpEncode(options.head));
        }
        while(true) {
          try {
            const chunk = await (zread(reader));
            if(chunk.done) {
              break;
            }
            let encodedChunk;
            if(!modifiedChunk.done && !options.passthrough) {
              let decodedChunk = options.encode 
                               ? (await zdecoder().zasyncDecode(chunk.value))
                               : chunk.value;
              modifiedChunk = await transform(decodedChunk);
              encodedChunk = options.encode 
                           ? (await zencoder().zasyncEncode(modifiedChunk.value))
                           : modifiedChunk;
            } else {
              encodedChunk = chunk.value;
            }
            zcontrollerEnqueue(controller,encodedChunk);
          } catch (e) {
            try {
              console.log(e,...arguments);
              zcontrollerEnqueue(controller,await zencoder().zasyncEncode(e.message));
              break;
            } catch {
              break;
            }
          }
        }
        if(options.tail){
          zcontrollerEnqueue(controller,await httpEncode(options.tail));
        }
        zcontrollerClose(controller);
        resolveStreamProcessed();
        timedout = false;
      }
    });
    streamProcessed.then(() => {
      tryReleaseLock(stream,reader.reader);
      clearTimeout(timeoutHandle);
    });
    ctx?.waitUntil?.(streamProcessed);
    res = req ? new Request(res, {
      body: stream
    }) : new Response(stream, res);
    return res;
  } catch (e) {
    console.log(e,...arguments);
    return res;
  }
}
globalThis.limitResponse = async function limitResponse(res, ctx, timeout) {
  return await transformStream(res, null, ctx, {
    timeout: timeout,
    passthrough: true
  });
}


globalThis.prependResponse = async function prependResponse(res, ctx, head) {
  return await transformStream(res, null, ctx, {
    head: head,
    passthrough: true
  });
}

globalThis.appendResponse = async function appendResponse(res, ctx, tail) {
  return await transformStream(res, null, ctx, {
    tail: tail,
    passthrough: true
  });
}
