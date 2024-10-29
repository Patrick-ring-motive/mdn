declare(()=>{
   queryApplyAll(<style>[class*="language-"]:not([class*="language-javascript"i],[class*="language-js"i])</style>,el=>{
      el.className = 'language-js';
      doPrism();
   });
});