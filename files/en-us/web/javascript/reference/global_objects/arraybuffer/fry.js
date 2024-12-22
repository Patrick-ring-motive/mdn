void async function StringBiffwr(){
  try{
    globalThis.declare??(await Promise.any([
      import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`),
      import(`https://cdn.jsdelivr.net/npm/javaxscript/framework.js?${globalThis.cache}`)
    ]));
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }
  
  const opFunc = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/global_objects/arraybuffer/stringtobuffer.html?${globalThis.cache}`);
  const divOp = createElement('div');
  divOp.innerHTML = await opFunc;
  await waitExists('section[aria-labelledby="find_the_index_of_a_prime_number_in_an_array"]');
  select('section[aria-labelledby="create_an_arraybuffer"]').appendChild(divOp);
  
  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()