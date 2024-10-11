function inspect(x){
   let info = '\n'
   info += `${String(x)}\n`;
   try{info += `${JSON.stringify(x,null,2)}\n`;}catch{}
   for(const k in x){try{
    info += `${String(k)} : ${String(x[k])}\n`;
   }catch{}}
    info += `prototype : ${String(x?.prototype)}\n`;
    info += `__proto__ : ${String(x?.__proto__)}\n`;
    info += `constructor : ${String(x?.constructor)}\n`;
    return info;
 }

if(/loglevel=(log|all)/.test(location.href)){
function appendLog(x){
  let log = document.querySelector('[loglevel="log"]');
  if(!log){
    log = document.createElement('pre');
    log.setAttribute('loglevel','log');
    log.style.width = '100vw';
    log.style.minHeight = '50vmin';
    log.style.backgroundColor = 'green';
    document.body?.appendChild?.(log);
  }
  log.innerText = JSON.stringify(x,null,2);
}

 console.runningLog??={"loglevel":"log"};
  if(console.log && console['&log']){
    console['&log'] = console.log;
    console.log = function log(){
      try{
        const txt = [...arguments].map(x=>inspect(x)).join('\n');
        console.runningLog[txt]=(console.runningLog[txt]??0)+1;
        appendLog(console.runningLog);
      }catch{}
      return console['&log'](...arguments);
    };
  }
}

if(/loglevel=(warn|all)/.test(location.href)){
function appendWarn(x){
  let log = document.querySelector('[loglevel="warn"]');
  if(!log){
    log = document.createElement('pre');
    log.setAttribute('loglevel','warn');
    log.style.width = '100vw';
    log.style.minHeight = '50vmin';
    log.style.backgroundColor = 'yellow';
    document.body?.appendChild?.(log);
  }
  log.innerText = JSON.stringify(x,null,2);
}

 console.runningWarn??={"loglevel":"warn"};
  if(console.warn && console['&warn']){
    console['&warn'] = console.warn;
    console.warn = function warn(){
      try{
        const txt = [...arguments].map(x=>inspect(x)).join('\n');
        console.runningWarn[txt]=(console.runningWarn[txt]??0)+1;
        appendWarn(console.runningWarn);
      }catch{}
      return console['&warn'](...arguments);
    };
  }
}

 void (async function Hookers() {
  try {
    globalThis.declare ?? (await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`));
  } catch {
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  declare(() => {
    const logoLink = select('a[title="Go back to the home page"]');
    logoLink?.updateAttribute?.("href","https://developer.typescripts.org?hostname=developer.mozilla.org");
    (logoLink??{}).innerText = " tdn ";
    (logoLink?.style??{}).visibility = "visible";
  });
  declare(() => {
    if (~document.title.search(/mdn/i)) {
      document.title = document.title.replace(/mdn/gi, "TDN");
    }
    swapTextBack("MDN", "TDN");
    swapTextBack("mdn", "tdn");
    swapTextBack("mozilla", "typescripts");
    swapTextBack("Joshua Chen", "John Cena");
    swapTextBack("â€‚"," ");
    swapTextBack(', and JavaScript, since 2005.',', JavaScript, and more.')
  });

  declare(() => {
    const bodyStyles = window.getComputedStyle(document.body);
    const b = bodyStyles
      .getPropertyValue("background-color")
      .replace(/[^0-9,]/g, "")
      .split(",");
    if (b.length == 3 && b.every((x) => x < 128)) {
      document.body.updateAttribute("darkish", true);
    } else {
      document.body.updateAttribute("darkish", false);
    }
    const htmlStyles = window.getComputedStyle(page_html);
    const h = htmlStyles
      .getPropertyValue("background-color")
      .replace(/[^0-9,]/g, "")
      .split(",");
    if (h.length == 3 && h.every((x) => x < 128)) {
      page_html.updateAttribute("darkish", true);
    } else {
      page_html.updateAttribute("darkish", false);
    }
  });
  
  declare(() => {
    queryApplyAll(
      'html[window-location]:not([window-location*="hostname=nodejs.org"]) .highlighter-rouge:not(.language-js):not([class="0"])',
      (el) => el.setAttribute("class", "0"),
    );
  });
  declare(() => {
    queryApplyAll('html[window-location]:not([window-location*="hostname=nodejs.org"]) .language-js', (el) => {
      if (el.clientWidth > window.clientWidth()) {
        el.updateAttribute("shrink-me", true);
      } else {
        el.updateAttribute("shrink-me", false);
      }
    });
  });
  declare(() => {
    queryApplyAll(".language-js.highlighter-rouge:not([copy-button])", (el) => {
      el.updateAttribute("copy-button", "done");
      const copy = buildElement("button", {
        style: {
          backgroundImage: 'url("https://raw.githubusercontent.com/Patrick-ring-motive/mdn/main/files/clippy.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "1vmax",
          padding: "0.5vmax",
          margin: "0.5vmax",
          float: "right",
          cursor: "pointer"
        },
        attr:{
          title: 'Copy to clipboard',
          onclick : `(${
            function onclick(btn){
              try{
                navigator.clipboard.writeText(btn?.parentElement?.innerText);
                btn.updateAttribute('title','Copied!');
              }catch(e){
                btn.updateAttribute('title',`Unable to Copy. ${e.message}`);
              }
              setTimeout(()=>btn.updateAttribute('title','Copy to clipboard'),3000);
            }
          })(this)`
        }
      });
      const tdn = copy.cloneNode(true);
      Object.assign(tdn.style,{
        float : 'left',
        backgroundImage : 'url("/favicon.png")',
        backgroundSize : "1vmax",
        borderRadius : "0.5vmin",
        cursor : 'help'
      });
      tdn.setAttribute('title','Extra Tidbit from TDN');
      tdn.onclick = ()=>{};
      el.prepend(copy);
      el.prepend(tdn);
    });
  });
  await DOMComplete();
  try{appendLog?.(console?.runningLog);}catch{}
  try{appendWarn?.(console?.runningWarn);}catch{}
  if(location.href.endsWith('?upper')){
    declare(()=>{
     let el = document.body;
           if (!el) { return;}
           let n, a = [],
               walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
           while (n = walk.nextNode()) {
               a.push(n);
               let ntext = n.textContent;
               ntext = ntext.toUpperCase();
               updateProperty(n, 'textContent', ntext);
           };
          queryApplyAll('a[href]:not([href*="lower"i])',el=>el.updateAttribute('href',el.getAttribute('href')+'?lower'));
           return a;
    
    });
  }
  if(location.href.endsWith('?lower')){
    declare(()=>{
     let el = document.body;
           if (!el) { return;}
           let n, a = [],
               walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
           while (n = walk.nextNode()) {
               a.push(n);
               let ntext = n.textContent;
               ntext = ntext.toLowerCase();
               updateProperty(n, 'textContent', ntext);
           };
          queryApplyAll('a[href]:not([href*="?lower"i])',el=>el.updateAttribute('href',el.getAttribute('href')+'?lower'));
           return a;
    
    });
  }
  if(location.href.endsWith('?set')){
    (async()=>{
      while(true){
     let el = document.body;
           if (!el) { await sleep(100);continue;}
           let n,
               walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
           while (n = walk.nextNode()) {
               let ntext = n.textContent;
               ntext = [...new Set(ntext)].join('');
               updateProperty(n, 'textContent', ntext);
           };
          queryApplyAll('a[href]:not([href*="?set"i])',el=>el.updateAttribute('href',el.getAttribute('href')+'?set'));
          await sleep(100);
          await nextIdle();
      }
    })();
  }
  if(/marklar$/i.test(location.href)){
    (async()=>{
      while(true){
     let el = document.body;
           if (!el) { await sleep(100);continue;}
           let n,
               walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
           while (n = walk.nextNode()) {
               let ntext = n.textContent;
               if(/[A-Z]/.test(ntext) && !/marklar/.test(ntext)){
                 ntext = ntext.replace(/[A-Z][a-zA-Z]*/g,'Marklar');
                 updateProperty(n, 'textContent', ntext);
              }
           };
          queryApplyAll('a[href]:not([href*="marklar"i])',el=>el.updateAttribute('href',el.getAttribute('href')+'?marklar'));
          await sleep(100);
          await nextIdle();
      }
    })();
  }
  if(location.href.endsWith('?btoa')){
    (async()=>{
      while(true){
     let el = document.body;
           if (!el) { await sleep(100);continue;}
           let n,
               walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
           while (n = walk.nextNode()) {
               let ntext = n.textContent;
               try{
               ntext = btoa(ntext);
               }catch(e){
                ntext = e.message;
               }
               updateProperty(n, 'textContent', ntext);
           };
          queryApplyAll('a[href]:not([href*="?btoa"i])',el=>el.updateAttribute('href',el.getAttribute('href')+'?btoa'));
           await sleep(100);
          await nextIdle();
      }
    })();
    
    
  }
  if(location.href.endsWith('?atob')){
     (async()=>{
      while(true){
     let el = document.body;
          if (!el) { await sleep(100);continue;}
           let n,
               walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
           while (n = walk.nextNode()) {
               let ntext = n.textContent;
              if(/error/i.test(ntext)){continue;}
               try{
               ntext = atob(ntext);
               }catch(e){
                if(/invalid/i.test(e.message)){continue;}
                ntext = e.message;
               }
               updateProperty(n, 'textContent', ntext);
           };
          queryApplyAll('a[href]:not([href*="?atob"i])',el=>el.updateAttribute('href',el.getAttribute('href')+'?atob'));
          await sleep(100);
          await nextIdle();
      }
    })();
    
    
  }
  if(location.href.endsWith('?reverse')){
    
    declare(()=>{
        queryApplyAll('html:not([reverse])',el=>{
          el.style.transform = 'scaleX(-1)';
          el.setAttribute('reverse',true);
        });
    
    });
    queryApplyAll('a[href]:not([href*="?reverse"i])',el=>el.updateAttribute('href',el.getAttribute('href')+'?reverse'));
  }
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }

})?.();

void async function(){
  try{
    await import(`https://www.google.com/search?as_q=${String(document.title).replace(/mdn/gi,'').trim().replaceAll(' ','+')}&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=developer.typescripts.org&as_occt=any&as_filetype=&tbs=`);
  }catch{}
}();
