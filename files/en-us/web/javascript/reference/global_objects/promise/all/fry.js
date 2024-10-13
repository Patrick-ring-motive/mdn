if(/cache=false/.test(location.href)){globalThis.cache = new Date().getTime();}
void async function PromiseAll(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const dir=(loc)=>`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/global_objects/promise/all/${loc}?${globalThis.cache}`;
  const code1 = zfetchText(dir('example1.html');
  const code1 = zfetchText(dir('example2.html');
  await waitExists('section[aria-labelledby="examples"]');

  
  async function replaceCode(exampleDiv,code){
    exampleDiv.before(assign(createElement('div'),{innerHTML:(await code)}));
    exampleDiv.style.display = 'none';
    exampleDiv.updateAttribute('overwritten',true);
  }

  await replaceCode(select('section[aria-labelledby="using_promise.all"] .code-example:not([overwritten])'),code1);
  await replaceCode(select('section[aria-labelledby="using_promise.all"] .code-example:not([overwritten])'),code2);
  
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()
