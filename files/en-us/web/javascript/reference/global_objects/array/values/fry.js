/* TODO array iterator links. */
void async function ArrayIterators(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`);
  }
  declare(() =&gt; {
    queryApplyAll('a[href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators"]',el =&gt; {
      el.updateAttribute('href','/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array_Iterator');
    });
  });
}?.()
