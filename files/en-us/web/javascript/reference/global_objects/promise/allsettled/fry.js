if(/cache=false/.test(location.href)){globalThis.cache = new Date().getTime();}
void async function PromiseAllSettled(){
  try{
    globalThis.declare??(await Promise.any([
      import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`),
      import(`https://cdn.jsdelivr.net/npm/javaxscript/framework.js?${globalThis.cache}`)
    ]));
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }

    
  const code1 = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/global_objects/promise/allsettled/example1.html?${globalThis.cache}`);
  const code2 = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/global_objects/promise/allsettled/example2.html?${globalThis.cache}`);
  (await waitSelect('section[aria-labelledby="using_promise.allsettled"]')).appendChild(assign(createElement('div'),{
    innerHTML : (await code1)
  }));
  (await waitSelect('section[aria-labelledby="using_promise.allsettled"]')).appendChild(assign(createElement('div'),{
    innerHTML : (await code2)
  }));


    
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }

}?.();
