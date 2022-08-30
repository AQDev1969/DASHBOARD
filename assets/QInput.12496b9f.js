var ne=Object.defineProperty,le=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var G=(e,g,M)=>g in e?ne(e,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):e[g]=M,A=(e,g)=>{for(var M in g||(g={}))ue.call(g,M)&&G(e,M,g[M]);if(X)for(var M of X(g))ie.call(g,M)&&G(e,M,g[M]);return e},$=(e,g)=>le(e,re(g));import{u as oe,a as se,b as ce,c as fe,d as de,e as ge,f as J,g as me,h as ve}from"./use-key-composition.ae8f4ecd.js";import{k as W,aY as j,al as K,bY as he,Q as R,br as ke,ao as Me,as as xe,ac as q,bU as p,a9 as we}from"./index.d3ddad92.js";const ee={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},U={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ae=Object.keys(U);ae.forEach(e=>{U[e].regex=new RegExp(U[e].pattern)});const ye=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ae.join("")+"])|(.)","g"),te=/[.*+?^${}()|[\]\\]/g,h=String.fromCharCode(1),be={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ce(e,g,M,k){let c,x,T,S;const w=W(null),d=W(V());function Q(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,z),j(()=>e.mask,a=>{if(a!==void 0)Z(d.value,!0);else{const n=F(d.value);z(),e.modelValue!==n&&g("update:modelValue",n)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&Z(d.value,!0)}),j(()=>e.unmaskedValue,()=>{w.value===!0&&Z(d.value)});function V(){if(z(),w.value===!0){const a=D(F(e.modelValue));return e.fillMask!==!1?_(a):a}return e.modelValue}function N(a){if(a<c.length)return c.slice(-a);let n="",r=c;const u=r.indexOf(h);if(u>-1){for(let i=a-r.length;i>0;i--)n+=h;r=r.slice(0,u)+n+r.slice(u)}return r}function z(){if(w.value=e.mask!==void 0&&e.mask.length>0&&Q(),w.value===!1){S=void 0,c="",x="";return}const a=ee[e.mask]===void 0?e.mask:ee[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(te,"\\$&"),u=[],i=[],l=[];let f=e.reverseFillMask===!0,o="",m="";a.replace(ye,(y,t,v,E,I)=>{if(E!==void 0){const C=U[E];l.push(C),m=C.negate,f===!0&&(i.push("(?:"+m+"+)?("+C.pattern+"+)?(?:"+m+"+)?("+C.pattern+"+)?"),f=!1),i.push("(?:"+m+"+)?("+C.pattern+")?")}else if(v!==void 0)o="\\"+(v==="\\"?"":v),l.push(v),u.push("([^"+o+"]+)?"+o+"?");else{const C=t!==void 0?t:I;o=C==="\\"?"\\\\\\\\":C.replace(te,"\\\\$&"),l.push(C),u.push("([^"+o+"]+)?"+o+"?")}});const P=new RegExp("^"+u.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?$"),B=i.length-1,s=i.map((y,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+y):t===B?new RegExp("^"+y+"("+(m===""?".":m)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+y));T=l,S=y=>{const t=P.exec(y);t!==null&&(y=t.slice(1).join(""));const v=[],E=s.length;for(let I=0,C=y;I<E;I++){const Y=s[I].exec(C);if(Y===null)break;C=C.slice(Y.shift().length),v.push(...Y)}return v.length>0?v.join(""):y},c=l.map(y=>typeof y=="string"?y:h).join(""),x=c.split(h).join(n)}function Z(a,n,r){const u=k.value,i=u.selectionEnd,l=u.value.length-i,f=F(a);n===!0&&z();const o=D(f),m=e.fillMask!==!1?_(o):o,P=d.value!==m;u.value!==m&&(u.value=m),P===!0&&(d.value=m),document.activeElement===u&&K(()=>{if(m===x){const s=e.reverseFillMask===!0?x.length:0;u.setSelectionRange(s,s,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const s=i-1;b.right(u,s,s);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const s=e.reverseFillMask===!0?i===0?m.length>o.length?1:0:Math.max(0,m.length-(m===x?0:Math.min(o.length,l)+1))+1:i;u.setSelectionRange(s,s,"forward");return}if(e.reverseFillMask===!0)if(P===!0){const s=Math.max(0,m.length-(m===x?0:Math.min(o.length,l+1)));s===1&&i===1?u.setSelectionRange(s,s,"forward"):b.rightReverse(u,s,s)}else{const s=m.length-l;u.setSelectionRange(s,s,"backward")}else if(P===!0){const s=Math.max(0,c.indexOf(h),Math.min(o.length,i)-1);b.right(u,s,s)}else{const s=i-1;b.right(u,s,s)}});const B=e.unmaskedValue===!0?F(m):m;String(e.modelValue)!==B&&M(B,!0)}function H(a,n,r){const u=D(F(a.value));n=Math.max(0,c.indexOf(h),Math.min(u.length,n)),a.setSelectionRange(n,r,"forward")}const b={left(a,n,r,u){const i=c.slice(n-1).indexOf(h)===-1;let l=Math.max(0,n-1);for(;l>=0;l--)if(c[l]===h){n=l,i===!0&&n++;break}if(l<0&&c[n]!==void 0&&c[n]!==h)return b.right(a,0,0);n>=0&&a.setSelectionRange(n,u===!0?r:n,"backward")},right(a,n,r,u){const i=a.value.length;let l=Math.min(i,r+1);for(;l<=i;l++)if(c[l]===h){r=l;break}else c[l-1]===h&&(r=l);if(l>i&&c[r-1]!==void 0&&c[r-1]!==h)return b.left(a,i,i);a.setSelectionRange(u?n:r,r,"forward")},leftReverse(a,n,r,u){const i=N(a.value.length);let l=Math.max(0,n-1);for(;l>=0;l--)if(i[l-1]===h){n=l;break}else if(i[l]===h&&(n=l,l===0))break;if(l<0&&i[n]!==void 0&&i[n]!==h)return b.rightReverse(a,0,0);n>=0&&a.setSelectionRange(n,u===!0?r:n,"backward")},rightReverse(a,n,r,u){const i=a.value.length,l=N(i),f=l.slice(0,r+1).indexOf(h)===-1;let o=Math.min(i,r+1);for(;o<=i;o++)if(l[o-1]===h){r=o,r>0&&f===!0&&r--;break}if(o>i&&l[r-1]!==void 0&&l[r-1]!==h)return b.leftReverse(a,i,i);a.setSelectionRange(u===!0?n:r,r,"forward")}};function L(a){if(he(a)===!0)return;const n=k.value,r=n.selectionStart,u=n.selectionEnd;if(a.keyCode===37||a.keyCode===39){const i=b[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),i(n,r,u,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&r===u?b.left(n,r,u,!0):a.keyCode===46&&e.reverseFillMask===!0&&r===u&&b.rightReverse(n,r,u,!0)}function D(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return O(a);const n=T;let r=0,u="";for(let i=0;i<n.length;i++){const l=a[r],f=n[i];if(typeof f=="string")u+=f,l===f&&r++;else if(l!==void 0&&f.regex.test(l))u+=f.transform!==void 0?f.transform(l):l,r++;else return u}return u}function O(a){const n=T,r=c.indexOf(h);let u=a.length-1,i="";for(let l=n.length-1;l>=0&&u>-1;l--){const f=n[l];let o=a[u];if(typeof f=="string")i=f+i,o===f&&u--;else if(o!==void 0&&f.regex.test(o))do i=(f.transform!==void 0?f.transform(o):o)+i,u--,o=a[u];while(r===l&&o!==void 0&&f.regex.test(o));else return i}return i}function F(a){return typeof a!="string"||S===void 0?typeof a=="number"?S(""+a):a:S(a)}function _(a){return x.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?x.slice(0,-a.length)+a:a+x.slice(a.length)}return{innerValue:d,hasMask:w,moveCursorForPaste:H,updateMaskValue:Z,onMaskedKeydown:L}}function Fe(e,g){function M(){const k=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(k)===k&&("length"in k?Array.from(k):[k]).forEach(x=>{c.items.add(x)}),{files:c.files}}catch{return{files:void 0}}}return g===!0?R(()=>{if(e.type==="file")return M()}):R(M)}var Ee=ke({name:"QInput",inheritAttrs:!1,props:$(A(A(A({},oe),be),se),{modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...ce,"paste","change"],setup(e,{emit:g,attrs:M}){const k={};let c=NaN,x,T,S,w;const d=W(null),Q=fe(e),{innerValue:V,hasMask:N,moveCursorForPaste:z,updateMaskValue:Z,onMaskedKeydown:H}=Ce(e,g,f,d),b=Fe(e,!0),L=R(()=>J(V.value)),D=ve(l),O=de(),F=R(()=>e.type==="textarea"||e.autogrow===!0),_=R(()=>F.value===!0||["text","search","url","tel","password"].includes(e.type)),a=R(()=>{const t=$(A({},O.splitAttrs.listeners.value),{onInput:l,onPaste:i,onChange:m,onBlur:P,onFocus:p});return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=D,N.value===!0&&(t.onKeydown=H),e.autogrow===!0&&(t.onAnimationend=o),t}),n=R(()=>{const t=$(A({tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Q.value},O.splitAttrs.attributes.value),{id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0});return F.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});j(()=>e.type,()=>{d.value&&(d.value.value=e.modelValue)}),j(()=>e.modelValue,t=>{if(N.value===!0){if(T===!0&&(T=!1,String(t)===c))return;Z(t)}else V.value!==t&&(V.value=t,e.type==="number"&&k.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete k.value));e.autogrow===!0&&K(o)}),j(()=>e.autogrow,t=>{t===!0?K(o):d.value!==null&&M.rows>0&&(d.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&K(o)});function r(){me(()=>{const t=document.activeElement;d.value!==null&&d.value!==t&&(t===null||t.id!==O.targetUid.value)&&d.value.focus({preventScroll:!0})})}function u(){d.value!==null&&d.value.select()}function i(t){if(N.value===!0&&e.reverseFillMask!==!0){const v=t.target;z(v,v.selectionStart,v.selectionEnd)}g("paste",t)}function l(t){if(!t||!t.target||t.target.composing===!0)return;if(e.type==="file"){g("update:modelValue",t.target.files);return}const v=t.target.value;if(N.value===!0)Z(v,!1,t.inputType);else if(f(v),_.value===!0&&t.target===document.activeElement){const{selectionStart:E,selectionEnd:I}=t.target;E!==void 0&&I!==void 0&&K(()=>{t.target===document.activeElement&&v.indexOf(t.target.value)===0&&t.target.setSelectionRange(E,I)})}e.autogrow===!0&&o()}function f(t,v){w=()=>{e.type!=="number"&&k.hasOwnProperty("value")===!0&&delete k.value,e.modelValue!==t&&c!==t&&(c=t,v===!0&&(T=!0),g("update:modelValue",t),K(()=>{c===t&&(c=NaN)})),w=void 0},e.type==="number"&&(x=!0,k.value=t),e.debounce!==void 0?(clearTimeout(S),k.value=t,S=setTimeout(w,e.debounce)):w()}function o(){const t=d.value;if(t!==null){const v=t.parentNode.style,{overflow:E}=t.style;v.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.overflow="hidden",t.style.height=t.scrollHeight+"px",t.style.overflow=E,v.marginBottom=""}}function m(t){D(t),clearTimeout(S),w!==void 0&&w(),g("change",t.target.value)}function P(t){t!==void 0&&p(t),clearTimeout(S),w!==void 0&&w(),x=!1,T=!1,delete k.value,e.type!=="file"&&setTimeout(()=>{d.value!==null&&(d.value.value=V.value!==void 0?V.value:"")})}function B(){return k.hasOwnProperty("value")===!0?k.value:V.value!==void 0?V.value:""}Me(()=>{P()}),xe(()=>{e.autogrow===!0&&o()}),Object.assign(O,{innerValue:V,fieldClass:R(()=>`q-${F.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:R(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:d,emitValue:f,hasValue:L,floatingLabel:R(()=>L.value===!0||J(e.displayValue)),getControl:()=>q(F.value===!0?"textarea":"input",A(A(A({ref:d,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle},n.value),a.value),e.type!=="file"?{value:B()}:b.value)),getShadowControl:()=>q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(F.value===!0?"":" text-no-wrap")},[q("span",{class:"invisible"},B()),q("span",e.shadowText)])});const s=ge(O),y=we();return Object.assign(y.proxy,{focus:r,select:u,getNativeElement:()=>d.value}),s}});export{Ee as Q,Fe as u};
