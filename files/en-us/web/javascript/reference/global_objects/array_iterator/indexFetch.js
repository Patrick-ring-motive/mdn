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
      arguments[0] = `${document.querySelector('link[hreflang="en"]')?.getAttribute?.('href')}/index.json`;
    }
    return globalThis['&fetch'].call(this,...arguments);
  }
}
