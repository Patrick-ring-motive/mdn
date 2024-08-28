void async function ArrayIterators(){
  document.title = document.title.replace(/^Iterator/,'Array Iterator');
  globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  swapTextBack('Iterator', 'Array Iterator');
  await DOMInteractive();
  swapTextBack('Iterator', 'Array Iterator');
  document.title = document.title.replace(/^Iterator/,'Array Iterator');
  console.log(document.readyState);
  await DOMComplete();
  console.log('DOMComplete');
  swapTextBack('Iterator', 'Array Iterator');
  document.title = document.title.replace('Iterator','Array Iterator');
  const resources = Q(()=>JSON.parse(select('script[type="resources"]').innerHTML))??[];
  const content = decodeURIComponent(atob(resources.find(x=>~x[0].search(/content$/))[1])) + 
    `<link  href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css" rel="stylesheet"></link>
    <style>
    section[aria-labelledby="description"],
    section[aria-labelledby="iterator_helpers"],
    section[aria-labelledby="proper_iterators"],
    section[aria-labelledby="constructor"],
    section[aria-labelledby="static_methods"],
    li.document-toc-item:has(a[href="#constructor"]),
    a[href="#constructor"],
    li.document-toc-item:has(a[href="#static_methods"]),
    a[href="#static_methods"]
    {
        display:none !important;
        visibility:hidden !important;
    }
    .dark .highlighter-rouge{
      filter: invert(1) hue-rotate(180deg);
      background-color:rgb(200,200,225) !important;
    }
    .dark .language-js{
      background-color:rgb(200,200,225) !important;
    }
    span.token.operator{
      background-color:rgba(0,0,0,0) !important;
    }
    </style>`;
  Q(()=>{
    select('article>div.section-content').innerHTML = content;
    select('article>div.section-content').setAttribute('written',true);
  });
  declare(()=>{
    queryApplyAll('article>div.section-content:not([written])',el=>{
      document.title = document.title.replace(/^Iterator/,'Array Iterator');
      el.setAttribute('written',true);
      swapTextBack('Iterator', 'Array Iterator');
      el.innerHTML = content;
      let prism = document.createElement('script');
      prism.src = 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js';
      document.body.appendChild(prism);
    });
  });
  let prism = document.createElement('script');
  prism.src = 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js';
  document.body.appendChild(prism);
  queryApplyAll('.highlighter-rouge:not(.language-js)',el=>el.setAttribute('class',''));
}?.();
