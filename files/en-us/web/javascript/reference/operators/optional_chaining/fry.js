void async function OptionalChaining(){
  try{
    globalThis.declare??await import(`https://unpkg.com/javaxscript/framework.js?${new Date().getTime()}`);
  }catch{
    await import(`https://git-tdn.typescripts.org/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`);
  }
  const opFunc = await zfetchText(`https://git-tdn.typescripts.org/Patrick-ring-motive/mdn/main/files/en-us/web/javascript/reference/operators/optional_chaining/optional-functions.html?${new Date().getTime()}`);
  console.log(opFunc);
  const div = createElement('div');
  div.innerHTML = opFunc;
  select('section[aria-labelledby="optional_chaining_with_function_calls"]').appendChild(div);
}?.()


