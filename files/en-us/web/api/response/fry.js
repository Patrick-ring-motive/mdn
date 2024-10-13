void async function ResponseApi(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const dir=(loc)=>`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/api/response/${loc}?${globalThis.cache}`;
  
  const code1 = zfetchText(dir('example1.html'));
  const modifyResponse = zfetchText(dir('modify-response.html'));
  const modifyText = zfetchText(dir('modify-text.html'));
  await waitExists('section[aria-labelledby="examples"]');

  
  async function replaceCode(exampleDiv,code){
    exampleDiv.before(assign(createElement('div'),{innerHTML:(await code)}));
    exampleDiv.style.display = 'none';
    exampleDiv.updateAttribute('overwritten',true);
  }

  await replaceCode(select('section[aria-labelledby="fetching_an_image"] .code-example:not([overwritten])'),code1);
  select('section[aria-labelledby="fetching_an_image"]').appendChild(assign(createElement('div'),{
    innerHTML : (await modifyResponse)
  }));
  select('section[aria-labelledby="fetching_an_image"]').appendChild(assign(createElement('div'),{
    innerHTML : (await modifyText)
  }));
  
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()
