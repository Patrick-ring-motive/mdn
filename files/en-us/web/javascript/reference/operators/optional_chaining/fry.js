void async function OptionalChaining(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const dir = (loc) => `https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/optional_chaining/${loc}.html?${globalThis.cache}`;
  const opFunc = zfetchText(dir('optional-functions'));
  const opNew =  zfetchText(dir('optional-new'));
  const opAss =  zfetchText(dir('optional-assignments'));
  const opShort =  zfetchText('short-circuit');
  const opUndeclare =  zfetchText('undeclared');
  const divOp = createElement('div');
  const divNew = createElement('div');
  const divAss = createElement('div');
  const divShort = createElement('div');
  const divUndeclare = createElement('div');
  divOp.innerHTML = await opFunc;
  divAss.innerHTML = await opAss;
  divNew.innerHTML = (await opNew).replace('<style>','');
  divShort.innerHTML = await opShort;
  divUndeclare.innerHTML = await opUndeclare;
  (await waitSelect('section[aria-labelledby="optional_chaining_with_function_calls"]')).appendChild(divOp);
  (await waitSelect('section[aria-labelledby="invalid_optional_chaining"]')).appendChild(divNew);
  (await waitSelect('section[aria-labelledby="invalid_optional_chaining"] div.code-example')).after(divAss);
  (await waitSelect('section[aria-labelledby="short-circuiting"]')).appendChild(divShort);
  (await waitSelect('section[aria-labelledby="optional_chaining_with_function_calls"]')).before(divUndeclare);
  
  /*await Promise.all([import('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.15.1/beautify.js'),
                     import('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.15.1/beautify-css.js'),
                     import('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.15.1/beautify-html.js')]);

  const pretty = function pretty(txt){
      const options = { indent_size: 2, space_in_empty_paren: true }
      return js_beautify(txt, options)
  }*/


  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()


