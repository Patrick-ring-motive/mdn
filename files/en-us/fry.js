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
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }

  (await waitSelect('.featured-articles>h2')).after(Object.assign(createElement('div'),{
    className : "tile-container",
    innerHTML : `
<div class="article-tile"><a href="https://developer.typescripts.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?cache=false" class="tile-tag" data-glean="homepage: article_tag 1">Optional Chaining</a><h3 class="tile-title"><a href="https://developer.typescripts.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?cache=false" data-glean="homepage: article 1">Stuff</a></h3><p>Optional Chaining</p></div>
`
  }));

}?.()
