if(/cache=false/.test(location.href)){globalThis.cache = new Date().getTime();}
globalThis.q = (varFn) => {
  try{
    return varFn?.();
  }catch(e){
    if(e.name != 'ReferenceError'){
      throw e;
    }
  }
}
void async function FrontPage(){
  try{
    globalThis.declare??await Promise.any([
      import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`,
      import(`https://cdn.jsdelivr.net/npm/javaxscript/framework.js?${globalThis.cache}`
    ]);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }

  while(true){
    if(select('div[tdn-feature]')){
      await sleep(100);
      await nextIdle();
    }else{
      let div = createElement('div');
      div.setAttribute('tdn-feature',true);
      (await waitSelect('.featured-articles>h2')).after(Object.assign(div,{
        style : "width: 100%;  width: -webkit-fill-available; ",
        innerHTML : `<div class="article-tile">
        <a href="https://developer.typescripts.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?cache=false" class="tile-tag" data-glean="homepage: article_tag 1">Optional Chaining</a>
        <h3 class="tile-title"><a href="https://developer.typescripts.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?cache=false" data-glean="homepage: article 1">Optional Chaining Reference</a></h3>
        <p>Take a deeper dive into one of JavaScript's best features</p>
        </div>`
      }));
    }
  }

}?.()
