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

  select('.featured-articles>h2').after(Object.assign(createElement('div'),{
    className : "title-container",
    innerHTML : `
<div class="article-title"><a href="https://developer.typescripts.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?cache=false" class="tile-tag" data-glean="homepage: article_tag 1">Optional Chaining</a><h3 class="tile-title"><a href="https://developer.typescripts.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?cache=false" data-glean="homepage: article 1">TDN partners with Scrimba to enhance web development learning</a></h3><p>We have chosen Scrimba as a course partner for the TDN Curriculum. This blog post explores what the partnership means practically, and how we will provide an even better web education experience together.</p></div>
`
  }));

}?.()
