[...document.querySelectorAll('h1')||[]].forEach(x=>{
  if(x?.innerText?.trim?.() == 'Iterator'){
    x.innerText = 'Array Iterator';
  }
});
void async function ArrayIterators(){
  if(!~document.title.search(/Array/)){document.title = document.title.replace(/^Iterator/,'Array Iterator');}
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`);
  }
  const swapTitle = () => queryApplyAll('h1',el=>{
    if(el?.textContent?.trim?.() == 'Iterator'){
      (el??{}).textContent = 'Array Iterator';
      (el??{}).visibility = 'visible';
    }
  });
  swapTitle();
  await DOMInteractive();
  swapTitle();
  if(!~`${document.title}`.search(/Array/)){
    document.title = document.title.replace(/^Iterator/,'Array Iterator');
  }
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
  declare(()=>{
    queryApplyAll('article>div.section-content:not([written])',el=>{
      if(!~`${document.title}`.search(/Array/)){
        document.title = document.title.replace(/^Iterator/,'Array Iterator');
      }
      el.setAttribute('written',true);
      el.innerHTML = content;
      let prism = document.createElement('script');
      prism.src = 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js';
      document.body.appendChild(prism);
    });
  });
  declare(()=>{
    swapTitle();
    swapTextBack('%iteratorprototype%','%arrayiteratorprototype%');
    queryApplyAll('a[href="https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-%iteratorprototype%-object"]',
                  el=>el.updateAttribute('href','https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%arrayiteratorprototype%-object'));
    queryApplyAll('details code:not([nbsp])',el=>{
      el.updateAttribute('nbsp',true);
      el.innerHTML = el.innerHTML.replace('Array Iterator','Array&nbsp;Itеrator');/*Usage of Cyrillic Ye*/;
    });
  });

  queryApplyAll('blockquote:not([class])',el=>el.setAttribute('class','notecard note'));
  /*await waitExists('aside.toc .document-toc-item:has([href="#description"])');
  select('aside.toc .document-toc-item:has([href$="#description"])').insertAdjacentElement("afterend",select('aside.toc .document-toc-item:has([href$="#examples"])'));
  select('section[aria-labelledby="examples"]')?.remove?.();*/
}?.();
