void async function OptionalChaining(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`);
  }
  const opFunc = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/optional_chaining/optional-functions.html?${new Date().getTime()}`);
  const opAss = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/optional_chaining/optional-assignment.html?${new Date().getTime()}`);
  const divOp = createElement('div');
  const divAss = createElement('div');
  divOp.innerHTML = await opFunc;
  divAss.innerHTML = await opAss;
  await waitExists('section[aria-labelledby="optional_chaining_with_function_calls"]');
  select('section[aria-labelledby="optional_chaining_with_function_calls"]').appendChild(divOp);
  await waitExists('section[aria-labelledby="invalid_optional_chaining"]');
  select('section[aria-labelledby="invalid_optional_chaining"]').appendChild(divAss);
  /*await Promise.all([import('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.15.1/beautify.js'),
                     import('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.15.1/beautify-css.js'),
                     import('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.15.1/beautify-html.js')]);

  const pretty = function pretty(txt){
      const options = { indent_size: 2, space_in_empty_paren: true }
      return js_beautify(txt, options)
  }*/


  let prism = createElement("script");
  prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
  body().appendChild(prism);
}?.()


