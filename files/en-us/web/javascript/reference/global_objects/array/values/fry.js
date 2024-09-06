/* TODO array iterator links. */
void async function ArrayIterators(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`);
  }
  declare(() => {
    queryApplyAll('a[href*="/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators"i]',el => {
        el.updateAttribute('href','/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array_Iterator');
      });
  });
  declare(() => {
    queryApplyAll('a[href*="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator"i]',el => {
        el.updateAttribute('href','/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array_Iterator');
      });
  });
}?.()
