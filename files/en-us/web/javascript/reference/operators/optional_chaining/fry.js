void async function OptionalChaining(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  const opFunc = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/optional_chaining/optional-functions.html?${globalThis.cache}`);
  const opNew =  zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/optional_chaining/optional-new.html?${globalThis.cache}`);
  const opAss =  zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/optional_chaining/optional-assignments.html?${globalThis.cache}`);
  const opShort =  zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/optional_chaining/short-circuit.html?${globalThis.cache}`);
  const divOp = createElement('div');
  const divNew = createElement('div');
  const divAss = createElement('div');
  const divShort = createElement('div');
  divOp.innerHTML = await opFunc;
  divAss.innerHTML = await opAss;
  divNew.innerHTML = await opNew;
  divShort.innerHTML = await opShort;
  (await waitSelect('section[aria-labelledby="optional_chaining_with_function_calls"]')).appendChild(divOp);
  (await waitSelect('section[aria-labelledby="invalid_optional_chaining"]')).appendChild(divNew);
  (await waitSelect('section[aria-labelledby="invalid_optional_chaining"]')).appendChild(divAss);
  (await waitSelect('section[aria-labelledby="short-circuiting"]')).appendChild(divShort);
  
  
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


