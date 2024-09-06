void async function OptionalChaining(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`);
  }
  
  const opFunc = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/global_objects/array/indexof/shiftbit.html?${new Date().getTime()}`);
  const divOp = createElement('div');
  divOp.innerHTML = await opFunc;
  await waitExists('section[aria-labelledby="using_indexof"]');
  select('section[aria-labelledby="using_indexof"]').appendChild(divOp);
  
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()
