import{ao as M,bM as T,aY as V,bN as S,as as P,a9 as U,al as g,bO as A,bP as R}from"./index.2638693e.js";function x(o,t,a){let u;function s(){u!==void 0&&(T.remove(u),u=void 0)}return M(()=>{o.value===!0&&s()}),{removeFromHistory:s,addToHistory(){u={condition:()=>a.value===!0,handler:t},T.add(u)}}}const B={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},E=["before-show","show","before-hide","hide"];function F({showing:o,canShow:t,hideOnRouteChange:a,handleShow:u,handleHide:s,processOnMount:h}){const f=U(),{props:l,emit:r,proxy:c}=f;let i;function H(e){o.value===!0?d(e):m(e)}function m(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||t!==void 0&&t(e)!==!0)return;const n=l["onUpdate:modelValue"]!==void 0;n===!0&&(r("update:modelValue",!0),i=e,g(()=>{i===e&&(i=void 0)})),(l.modelValue===null||n===!1)&&p(e)}function p(e){o.value!==!0&&(o.value=!0,r("before-show",e),u!==void 0?u(e):r("show",e))}function d(e){if(l.disable===!0)return;const n=l["onUpdate:modelValue"]!==void 0;n===!0&&(r("update:modelValue",!1),i=e,g(()=>{i===e&&(i=void 0)})),(l.modelValue===null||n===!1)&&v(e)}function v(e){o.value!==!1&&(o.value=!1,r("before-hide",e),s!==void 0?s(e):r("hide",e))}function b(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):e===!0!==o.value&&(e===!0?p:v)(i)}V(()=>l.modelValue,b),a!==void 0&&S(f)===!0&&V(()=>c.$route.fullPath,()=>{a.value===!0&&o.value===!0&&d()}),h===!0&&P(()=>{b(l.modelValue)});const y={show:m,hide:d,toggle:H};return Object.assign(c,y),y}function j(){let o;return{preventBodyScroll(t){t!==o&&(o!==void 0||t===!0)&&(o=t,A(t))}}}function k(){let o;return M(()=>{clearTimeout(o)}),{registerTimeout(t,a){clearTimeout(o),o=setTimeout(t,a)},removeTimeout(){clearTimeout(o)}}}function q(){if(window.getSelection!==void 0){const o=window.getSelection();o.empty!==void 0?o.empty():o.removeAllRanges!==void 0&&(o.removeAllRanges(),R.is.mobile!==!0&&o.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{E as a,k as b,F as c,x as d,j as e,q as f,B as u};
