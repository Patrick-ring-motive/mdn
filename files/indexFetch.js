globalThis.objDoProp = function (obj, prop, def, enm, mut) {
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
    try{
      if(~String(arguments[0]).search(/index\.json($|\?.*|#.*)/i)){
        console.log('redirecting index.json');
        url = new URL(`${document.querySelector('link[hreflang="en"]')?.getAttribute?.('href')}/index.json`);
        url.host = location.host;
        arguments[0] = url;
      }else if(String(arguments[0]).split('/')[2]=='developer.mozilla.org'){
        console.log('redirecting mozilla fetch');
        url = String(arguments[0]).split('/');
        url[2] = location.host;
        arguments[0] = url.join('/');
      }
      return globalThis['&fetch'].call(this,...arguments);
    }catch(e){
      console.log(e,...arguments);
      return new Response(e.message+'\n'+e.stack,{status:500,headers:{"Content-Type":"text/html","Access-Control-Allow-Origin":"*"}});
   }
  }
}
