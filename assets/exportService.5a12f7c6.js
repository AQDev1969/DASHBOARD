function f(r){setTimeout(()=>{window.URL.revokeObjectURL(r.href)},1e4),r.remove()}function l(r,d,s){const{mimeType:i,byteOrderMark:o,encoding:a}=typeof s=="string"?{mimeType:s}:s,t=a!==void 0?new TextEncoder(a).encode([d]):d,c=o!==void 0?[o,t]:[t],n=new Blob(c,{type:i||"application/octet-stream"}),e=document.createElement("a");e.href=window.URL.createObjectURL(n),e.setAttribute("download",r),typeof e.download=="undefined"&&e.setAttribute("target","_blank"),e.classList.add("hidden"),e.style.position="fixed",document.body.appendChild(e);try{return e.click(),f(e),!0}catch(u){return f(e),u}}const p=()=>{function r(i,o,a){let t=o!==void 0?o(i,a):i;return t=t==null?"":String(t),t=t.split('"').join('""'),`"${t}"`}return{exportTable:(i,o,a)=>{const t=[i.map(n=>n.label).join(";")].concat(o.value.map(n=>i.map(e=>r(typeof e.field=="function"?e.field(n):n[e.field===void 0?e.name:e.field],e.format,n)).join(";"))).join(`\r
`);l(a+".csv",t,"csv")!==!0&&$q.notify({message:"Le navigateur interdit le t\xE9l\xE9chargement...",color:"negative",icon:"warning"})},exportList:(i,o,a)=>{const t=[i.map(n=>n.label).join(";")].concat(o.map(n=>i.map(e=>r(typeof e.field=="function"?e.field(n):n[e.field===void 0?e.name:e.field],e.format,n)).join(";"))).join(`\r
`);return l(a+".csv",t,"csv")!==!0?($q.notify({message:"Le navigateur interdit le t\xE9l\xE9chargement...",color:"negative",icon:"warning"}),!1):!0}}};export{p as e};
