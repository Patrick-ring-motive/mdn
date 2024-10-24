//(window?.document?.firstElementChild?.style??{}).filter = 'invert(1)';
void async function WindowFetch(){
  try{
    globalThis.declare??(await Promise.any([
      import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`),
      import(`https://cdn.jsdelivr.net/npm/javaxscript/framework.js?${globalThis.cache}`)
    ]));
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const code1 = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/api/window/fetch/example1.html?${globalThis.cache}`);
  const code2 = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/api/window/fetch/example2.html?${globalThis.cache}`);
  const fetchTextExample = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/api/window/fetch/fetch-text.html?${globalThis.cache}`);
  const fetchErrorExample = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/api/window/fetch/fetch-error.html?${globalThis.cache}`);
  await waitExists('section[aria-labelledby="examples"]');

  
  async function replaceCode(exampleDiv,code){
    exampleDiv.before(assign(createElement('div'),{innerHTML:(await code)}));
    exampleDiv.style.display = 'none';
    exampleDiv.updateAttribute('overwritten',true);
  }

  await replaceCode(select('section[aria-labelledby="examples"] .code-example:not([overwritten])'),code1);
  await replaceCode(select('section[aria-labelledby="examples"] .code-example:not([overwritten])'),code2);
  
  selectAll('section[aria-labelledby="exceptions"] table pre').forEach(x=>{
    x.outerHTML = 
`<style>
section[aria-labelledby="exceptions"] table button[title="Extra Tidbit from TDN"],
section[aria-labelledby="exceptions"] table button[title="Copy to clipboard"]{
  display:none;
  visibility:hidden;
}
</style>
<div class="language-js highlighter-rouge">
<div class="highlight">
<pre class="highlight" style="overflow: hidden;"><code>${x.innerHTML}</code></pre>
</div>
</div>`;
  });

  select('section[aria-labelledby="examples"]').appendChild(assign(createElement('div'),{innerHTML:(await fetchTextExample)}));
  select('section[aria-labelledby="examples"]').appendChild(assign(createElement('div'),{innerHTML:(await fetchErrorExample)}));
  const seeAlso = await waitSelect('section[aria-labelledby="see_also"]>.section-content>ul');
  seeAlso.appendChild(assign(createElement('li'),{
    innerHTML: `<a href="https://developer.typescripts.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Using Fetch</a>`
  }));
  seeAlso.appendChild(assign(createElement('li'),{
    innerHTML: `<a href="https://developer.typescripts.org/docs/latest/api/http.html?hostname=nodejs.org">NodeJS HTTP</a>`
  }));
  
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()
