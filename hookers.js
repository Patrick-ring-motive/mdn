void (async function Hookers() {
  try {
    globalThis.declare ?? (await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`));
  } catch {
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`);
  }
  declare(() => {
    const logoLink = select('a[title="Go back to the home page"]');
    logoLink?.updateAttribute?.("href","https://developer.typescripts.org?hostname=developer.mozilla.org");
    (logoLink??{}).innerText = " tdn ";
    (logoLink?.style??{}).visibility = "visible";
  });
  declare(() => {
    if (~document.title.search(/mdn/i)) {
      document.title = document.title.replace(/mdn/gi, "TDN");
    }
    swapTextBack("MDN", "TDN");
    swapTextBack("mdn", "tdn");
    swapTextBack("mozilla", "typescripts");
    swapTextBack("Joshua Chen", "John Cena");
    swapTextBack(
      "TDN is the most comprehensive, up-to-date, and professional documentation about the web. This is all thanks to its diverse writer team as well as a strong contributor community, who have consistently demonstrated expertise in every area.",
      "You Can't See Me",
    );
  });

  declare(() => {
    const bodyStyles = window.getComputedStyle(document.body);
    const b = bodyStyles
      .getPropertyValue("background-color")
      .replace(/[^0-9,]/g, "")
      .split(",");
    if (b.length == 3 && b.every((x) => x < 128)) {
      document.body.updateAttribute("darkish", true);
    } else {
      document.body.updateAttribute("darkish", false);
    }
    const htmlStyles = window.getComputedStyle(page_html);
    const h = htmlStyles
      .getPropertyValue("background-color")
      .replace(/[^0-9,]/g, "")
      .split(",");
    if (h.length == 3 && h.every((x) => x < 128)) {
      page_html.updateAttribute("darkish", true);
    } else {
      page_html.updateAttribute("darkish", false);
    }
  });
  
  declare(() => {
    queryApplyAll(
      'html[window-location]:not([window-location*="hostname=nodejs.org"]) .highlighter-rouge:not(.language-js):not([class="0"])',
      (el) => el.setAttribute("class", "0"),
    );
  });
  declare(() => {
    queryApplyAll('html[window-location]:not([window-location*="hostname=nodejs.org"]) .language-js', (el) => {
      if (el.clientWidth > window.clientWidth()) {
        el.updateAttribute("shrink-me", true);
      } else {
        el.updateAttribute("shrink-me", false);
      }
    });
  });
  declare(() => {
    queryApplyAll(".language-js.highlighter-rouge:not([copy-button])", (el) => {
      el.updateAttribute("copy-button", "done");
      const copy = buildElement("button", {
        style: {
          backgroundImage:
            'url("https://raw.githubusercontent.com/Patrick-ring-motive/mdn/main/files/clippy.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "1vmax",
          padding: "0.5vmax",
          margin: "0.5vmax",
          float: "right",
          cursor: "pointer"
        },
        attr:{
          title: 'Copy to clipboard',
          onclick : `(${
            function onclick(btn){
              try{
                navigator.clipboard.writeText(btn?.parentElement?.innerText);
                btn.updateAttribute('title','Copied!');
              }catch(e){
                btn.updateAttribute('title',`Unable to Copy. ${e.message}`);
              }
              setTimeout(()=>btn.updateAttribute('title','Copy to clipboard'),3000);
            }
          })(this)`
        }
      });
      const tdn = copy.cloneNode(true);
      tdn.style.float = 'left';
      tdn.style.backgroundImage = 'url("/favicon.ico")';
      tdn.setAttribute('title','Extra Tidbit from TDN');
      tdn.onclick = ()=>{};
      el.prepend(copy);
      el.prepend(tdn);
    });
  });
  await DOMComplete();
  let prism = createElement("script");
  prism.src = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js";
  body().appendChild(prism);
})?.();
