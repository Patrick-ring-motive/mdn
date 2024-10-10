void async function DocumentSelector(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${globalThis.cache}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${globalThis.cache}`);
  }

  const responseBody = zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/api/document/queryselector/last-match.html?${globalThis.cache}`);
  (await waitSelect('section[aria-labelledby="finding_the_first_element_matching_a_class"]')).appendChild(assign(createElement('div'),{
    innerHTML: (await responseBody)
  }));

  try {
      Prism?.highlightAll?.();
  } catch {
      const prism = createElement("script");
      prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
      body().appendChild(prism);
  }
}?.()
