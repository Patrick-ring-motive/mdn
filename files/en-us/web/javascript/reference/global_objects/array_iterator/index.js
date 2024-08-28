void async function ArrayIterators(){
  document.title = document.title.replace('Iterator','Array Iterator');
  globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  swapTextBack('Iterator', 'Array Iterator');
  await DOMInteractive();
  swapTextBack('Iterator', 'Array Iterator');
  document.title = document.title.replace('Iterator','Array Iterator');
  console.log(document.readyState);
  await DOMComplete();
  console.log('DOMComplete');
  swapTextBack('Iterator', 'Array Iterator');
  document.title = document.title.replace('Iterator','Array Iterator');
  const resources = Q(()=>JSON.parse(select('script[type="resources"]').innerHTML))??[];
  const content = decodeURIComponent(atob(resources.find(x=>~x[0].search(/content$/))[1])) + 
`<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
 <link  href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css" rel="stylesheet"></link>`;
  Q(()=>(select('article>div.section-content').innerHTML = content));
  declare(()=>{
    queryApplyAll('article>div.section-content:not([written])',el=>{
      el.setAttribute('written',true);
      el.innerHTML = content;
    });
  });
}?.();
