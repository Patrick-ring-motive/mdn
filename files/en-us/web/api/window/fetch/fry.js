//(window?.document?.firstElementChild?.style??{}).filter = 'invert(1)';
void async function OptionalChaining(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const code1 = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/api/window/fetch/example1.html?${globalThis.cache}`);
  const example1 = createElement('div');
  example1.innerHTML = await code1;
  await waitExists('section[aria-labelledby="examples"]');
  selectAll('section[aria-labelledby="exceptions"] table pre').forEach(x=>{
    x.className = 'highlight';
    x.innerHTML = `<code class="highlight">${x.innerHTML}</code>`
  });
  const exampleDiv = select('section[aria-labelledby="examples"] .code-example');
  exampleDiv.before(example1);
  exampleDiv.style.display = 'none';
  
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()
