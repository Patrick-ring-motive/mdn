void async function PromiseAllSettled(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }

    
  const code1 = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/global_objects/promise/allsettled/example2.html?${globalThis.cache}`);
  (await waitSelect('section[aria-labelledby="using_promise.allsettled"]')).appendChild(assign(createElement('div'),{
    innerHTML : (await code1)
  }));


    
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }

}?.();
