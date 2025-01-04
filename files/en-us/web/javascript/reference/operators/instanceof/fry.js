if(/cache=false/.test(location.href)){globalThis.cache = new Date().getTime();}
globalThis.q = (varFn) => {
  try{
    return varFn?.();
  }catch(e){
    if(e.name != 'ReferenceError'){
      throw e;
    }
  }
}
void async function Instanceof(){
  try{
    globalThis.declare??(await Promise.any([
      import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`),
      import(`https://cdn.jsdelivr.net/npm/javaxscript/framework.js?${globalThis.cache}`)
    ]));
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const dir = (loc) => `https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/typeof/${loc}.html?${globalThis.cache}`;
  const helpers = zfetchText(dir('helpers'));
  const instOf = zfetchText(dir('instanceof').replace('typeof','instanceof'));
  const divHelpers = document.createElement('div');
  const divInstOf = document.createElement('div');
  divHelpers.innerHTML = await helpers;
  divInstOf.innerHTML = await instOf;
  (await waitSelect('section[aria-labelledby="examples"]')).appendChild(divHelpers);
  (await waitSelect('section[aria-labelledby="description"]')).appendChild(divInstOf);



  
  (q(()=>Prism?.highlightAll) ?? (() => {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }))();
}?.()