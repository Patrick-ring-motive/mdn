void async function ArrayIterators(){
  document.title = document.title.replace('Iterator','Array Iterator');
  globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  swapTextBack('Iterator', 'Array Iterator');
  await DOMInteractive();
  swapTextBack('Iterator', 'Array Iterator');
  document.title = document.title.replace('Iterator','Array Iterator');
  await DOMComplete();
  swapTextBack('Iterator', 'Array Iterator');
  document.title = document.title.replace('Iterator','Array Iterator');
  const resources = Q(()=>JSON.parse(select('script[type="resources"]').innerHTML))??[];
  const content = decodeURIComponent(atob(resources.find(x=>~x[0].search(/content$/))[1])) + `<link rel="stylesheet" href="https://patrick-ring-motive.github.io/mdn/assets/css/style.css">`;
  Q()=>(select('article>div.section-content').innerHTML = content));
  declare(()=>{
    queryApplyAll('article>div.section-content:not([written])',el=>{
      el.setAttribute('written',true);
      el.innerHTML = content;
    });
  });
}?.();
