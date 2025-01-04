void async function Decoder(){
  try{
    globalThis.declare??(await Promise.any([
      import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`),
      import(`https://cdn.jsdelivr.net/npm/javaxscript/framework.js?${globalThis.cache}`)
    ]));
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const dir=(loc)=>`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/api/textdecoder/decode/${loc}?${globalThis.cache}`;
  
  const code1 = zfetchText(dir('alt.html'));
  const divAlt = document.createElement('div');
  divAlt.innerHTML = await code1;
  (await waitExists('section[aria-labelledby="examples"]')).appendChild(divAlt);
  
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()