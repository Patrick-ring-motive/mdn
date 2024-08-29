void async function ArrayIterators(){

  globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  declare(()=>{
    swapTextBack('MDN', 'TDN');
    swapTextBack('mdn', 'tdn');
    swapTextBack('Joshua Chen', 'John Cena');
    swapTextBack('TDN is the most comprehensive, up-to-date, and professional documentation about the web. This is all thanks to its diverse writer team as well as a strong contributor community, who have consistently demonstrated expertise in every area.', "You Can't See Me");
  });

  declare(()=>{
    const bodyStyles = window.getComputedStyle(document.body);
    const b = bodyStyles.getPropertyValue("background-color").replace(/[^0-9,]/g,'').split(",")
    if(b.length == 3 && b.every(x=>x<128)){
      document.body.updateAttribute('darkish',true);
    }else{
      document.body.updateAttribute('darkish',false);
    }
    const htmlStyles = window.getComputedStyle(page_html);
    const h = htmlStyles.getPropertyValue("background-color").replace(/[^0-9,]/g,'').split(",")
    if(h.length == 3 && h.every(x=>x<128)){
      page_html.updateAttribute('darkish',true);
    }else{
      page_html.updateAttribute('darkish',false);
    }
  });
  
}?.();
