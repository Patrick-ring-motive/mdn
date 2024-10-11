
 void async function Json() {
  try {
    globalThis.declare ?? (await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`));
  } catch {
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  await DOMComplete();
  const outerDiv = createElement('div');
  outerDiv.setAttribute('class','language-js highlighter-rouge');
  const innerDiv = createElement('div');
  innerDiv.setAttribute('class','highlight');
  const pre = select('pre[class="brush: plain notranslate"]');
  const code = createElement('code');
  code.innerHTML = pre.innerHTML;
  pre.innerHTML = '';
  pre.before(outerDiv);
  outerDiv.appendChild(innerDiv);
  innerDiv.appendChild(pre);
  pre.appendChild(code);

  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
 }?.(); 
