void async function LinkResolver(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
 globalThis.addA = function addA(css){
    if(!location.href.includes('path=')){
      return ('a'+css).replace('aa[','a[');
    }else{
      return css;
    }
  }
  declare(()=>{
    queryApplyAll(addA('a[href]:not([href^="http"i],[href^="blob"i]):not([marked])'),el => {
      el.updateAttribute('marked',true);
      el.updateAttribute('href',String(el.href));
    });
  });
  declare(()=>{
    if(~location.href.search(/hostname=/i)){
      const hostname = location.href.split(/hostname=/i)[1].split(/\?|#|&/)[0];
      queryApplyAll(addA('a[href]:not([href*="hostname="i])'),el => {
        let url = String(el.getAttribute('href'));
        let hash = '';
        let char = '?';
        if(url.includes('#')){
          hash = `#${url.split('#')[1]}`;
          url = url.split('#')[0];
        }
        if(url.includes('?')){
          char = '&';
        }
        url = `${url}${char}hostname=${hostname}${hash}`;
        el.updateAttribute('href',url);
      });
    }
  });
  [
   "nodejs.org",
   "developer.mozilla.org"
  ].forEach(hostname=>{
   eval(`declare(()=>{
      queryApplyAll(addA('a[href^="https://${hostname}"i]'),el => {
        let url = String(el.getAttribute('href'));
        let hash = '';
        let char = '?';
        if(url.includes('#')){
          hash = ${'`#${url.split("#")[1]}`'};
          url = url.split('#')[0];
        }
        if(url.includes('?')){
          char = '&';
        }
        url = ${'`${url}${char}'}hostname=${hostname}${'${hash}`'};
        el.updateAttribute('href',url);
        el.updateAttribute('href',String(url).replace(
          RegExp('https://${hostname}',"i"),
          "https://developer.typescripts.org"
        ).replace(
          '${hostname}&hostname=${hostname}',
          hostname
        ));
      });
    });`);
  });
}?.();
