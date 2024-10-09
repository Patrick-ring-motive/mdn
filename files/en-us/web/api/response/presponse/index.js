[...document.querySelectorAll('h1')||[]].forEach(x=>{
  if(x?.innerText?.trim?.() == 'Response'){
    x.innerText = 'Presponse';
  }
});
void async function Presponse(){
  if(!~document.title.search(/Response/)){document.title = document.title.replace(/^Response/,'Presponse');}
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const swapTitle = () => queryApplyAll('h1',el=>{
    if(el?.textContent?.trim?.() == 'Response'){
      (el??{}).textContent = 'Presponse';
      (el?.style??{}).visibility = 'visible';
    }
  });
  swapTitle();
  await DOMInteractive();
  swapTitle();
  if(!~`${document.title}`.search(/Presponse/)){
    document.title = document.title.replace(/^Response/,'Presponse');
  }
  declare(()=>{
    const el = select('html[window-location]:not([window-location*="hostname=nodejs.org"]) .language-js:not([js-highlighter])');
    if(el){
      el.updateAttribute('js-highlighter','js-highlighter');
      let prism = document.createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
    }
    queryApplyAll('html[window-location]:not([window-location*="hostname=nodejs.org"]) .highlighter-rouge:not(.language-js):not([class="0"])', (el) =>
      el.setAttribute("class", "0"),
    );
  });
  declare(()=>{
    queryApplyAll('article>div.section-content:not([written])',el=>{
      if(!~`${document.title}`.search(/Presponse/)){
        document.title = document.title.replace(/^Response/,'Presponse');
      }
      el.setAttribute('written',true);
      el.innerHTML = content;
    });
  });
  declare(()=>{
    swapTitle();
    swapTextBack('Response','Presponse');
    swapTextBack('response','presponse');
    swapText(/(p|P)presponse/,'$1response');
  });
  declare(()=>{
    queryApplyAll('blockquote:not([class])',el=>el.setAttribute('class','notecard note'));
  });
  console.log(document.readyState);
  await DOMComplete();
  swapTitle();
  console.log('DOMComplete');
  const resources = Q(()=>JSON.parse(select('script[type="resources"]').innerHTML))??[];
  const content = decodeURIComponent(atob(resources.find(x=>~x[0].search(/content$/))[1])) + 
    `<link  href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css" rel="stylesheet"></link>`;
  Q(()=>{
    select('article>div.section-content').innerHTML = content;
    select('article>div.section-content').setAttribute('written',true);
  });

  /*await waitExists('aside.toc .document-toc-item:has([href="#description"])');
  select('aside.toc .document-toc-item:has([href$="#description"])').insertAdjacentElement("afterend",select('aside.toc .document-toc-item:has([href$="#examples"])'));*/
  /*declare(()=>{
    queryApplyAll(`section[aria-labelledby="constructor"],
                   section[aria-labelledby="static_methods"],
                   section[aria-labelledby="examples"],
                   section[aria-labelledby="using_an_iterator_as_an_iterable"],
                   section[aria-labelledby="see_also"],
                   section[aria-labelledby="instance_properties"],
                   section[aria-labelledby="instance_methods"]`,
                  el=>el?.remove?.());
  });*/

  queryApplyAll('h2',el=>{
    el.updateAttribute('aria-labelledby',el.getAttribute('id'));
  });

  const inherit = select('li[class="section no-link"]');
  inherit?.parentElement?.firstChild?.after?.(inherit);

  /*const iter = select('em');
  const arrIter = iter?.cloneNode?.(true);
  (arrIter?.querySelector?.('a')??{}).href = `${arrIter?.querySelector?.('a')?.href}`.replace('Iterator','Array_Iterator');
  (arrIter?.querySelector?.('code')??{}).textContent = `${arrIter?.querySelector?.('code')?.textContent}`.trim().replace(/^Iterator/i,'Array Iterator');
  iter?.parentElement?.parentElement?.prepend?.(arrIter);*/
}?.();