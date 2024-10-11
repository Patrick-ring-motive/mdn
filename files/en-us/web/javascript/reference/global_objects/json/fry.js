<h3>Finding the last element matching a class</h3>
<p>Here is an easy way to find the last matching element of a selector</p>
<div class="language-js highlighter-rouge">
<div class="highlight">
<pre class="highlight" precode>
<code precode>const el = [...document.querySelectorAll(".myclass")].pop();</code></pre>
</div>
</div> 

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
