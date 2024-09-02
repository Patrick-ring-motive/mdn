void async function LinkResolver(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`);
  }
  declare(()=>{
    queryApplyAll('a[href]:not([href^="http"i],[href^="blob"i])',el => {
      el.updateAttribute('href',String(el.href));
    });
  });
  declare(()=>{
    if(~location.href.search(/hostname=/i)){
      const hostname = location.href.split(/hostname=/i)[1].split(/\?|#|&/)[0];
      queryApplyAll('a[href]:not([href*="hostname="i])',el => {
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
  declare(()=>{
    queryApplyAll('a[href^="https://nodejs.org"i]',el => {
      el.updateAttribute('href',String(el.getAttribute('href')).replace(/https:\/\/nodejs.org/i,"https://developer.typescripts.org"));
    });
  });
  declare(()=>{
    queryApplyAll('a[href^="https://developer.mozilla.org"i]',el => {
      el.updateAttribute('href',String(el.getAttribute('href')).replace(/https:\/\/developer.mozilla.org/i,"https://developer.typescripts.org"));
    });
  });
}?.();
