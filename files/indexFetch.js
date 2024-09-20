const objDoProp = function (obj, prop, def, enm, mut) {
  return Object.defineProperty(obj, prop, {
    value: def,
    writable: mut,
    enumerable: enm,
    configurable: mut
  });
};
const objDefProp=(obj, prop, def) => objDoProp (obj, prop, def, false, true);

if(!globalThis['&fetch']){
  objDefProp(globalThis,"&fetch",fetch);
  globalThis.fetch = function fetch(url){
    if(~String(arguments[0]).search(/index\.json($|\?.*|#.*)/i)){
      console.log('redirecting index.json');
      url = new URL(`${document.querySelector('link[hreflang="en"]')?.getAttribute?.('href')}/index.json`);
      url.host = location.host;
      arguments[0] = url;
    }
    return globalThis['&fetch'].call(this,...arguments);
  }
}
