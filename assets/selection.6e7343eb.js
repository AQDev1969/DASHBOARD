import{ao as U,bI as C,aY as W,bJ as _,as as j,a9 as I,al as A,bK as K,bL as Y,bM as p,bH as a,bF as D,bN as J,bO as G}from"./index.95299443.js";function le(e,o,t){let i;function n(){i!==void 0&&(C.remove(i),i=void 0)}return U(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){i={condition:()=>t.value===!0,handler:o},C.add(i)}}}const ne={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},re=["before-show","show","before-hide","hide"];function se({showing:e,canShow:o,hideOnRouteChange:t,handleShow:i,handleHide:n,processOnMount:c}){const r=I(),{props:s,emit:d,proxy:V}=r;let u;function B(l){e.value===!0?y(l):H(l)}function H(l){if(s.disable===!0||l!==void 0&&l.qAnchorHandled===!0||o!==void 0&&o(l)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!0),u=l,A(()=>{u===l&&(u=void 0)})),(s.modelValue===null||f===!1)&&P(l)}function P(l){e.value!==!0&&(e.value=!0,d("before-show",l),i!==void 0?i(l):d("show",l))}function y(l){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!1),u=l,A(()=>{u===l&&(u=void 0)})),(s.modelValue===null||f===!1)&&x(l)}function x(l){e.value!==!1&&(e.value=!1,d("before-hide",l),n!==void 0?n(l):d("hide",l))}function M(l){s.disable===!0&&l===!0?s["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):l===!0!==e.value&&(l===!0?P:x)(u)}W(()=>s.modelValue,M),t!==void 0&&_(r)===!0&&W(()=>V.$route.fullPath,()=>{t.value===!0&&e.value===!0&&y()}),c===!0&&j(()=>{M(s.modelValue)});const q={show:H,hide:y,toggle:B};return Object.assign(V,q),q}const Q=[null,document,document.body,document.scrollingElement,document.documentElement];function ce(e,o){let t=K(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return Q.includes(t)?window:t}function R(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function k(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function N(e,o,t=0){const i=arguments[3]===void 0?performance.now():arguments[3],n=R(e);if(t<=0){n!==o&&S(e,o);return}requestAnimationFrame(c=>{const r=c-i,s=n+(o-n)/Math.max(r,t)*r;S(e,s),s!==o&&N(e,o,t-r,c)})}function $(e,o,t=0){const i=arguments[3]===void 0?performance.now():arguments[3],n=k(e);if(t<=0){n!==o&&E(e,o);return}requestAnimationFrame(c=>{const r=c-i,s=n+(o-n)/Math.max(r,t)*r;E(e,s),s!==o&&$(e,o,t-r,c)})}function S(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function E(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function de(e,o,t){if(t){N(e,o,t);return}S(e,o)}function ue(e,o,t){if(t){$(e,o,t);return}E(e,o)}let h;function ae(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");Y(e,{width:"100%",height:"200px"}),Y(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return t===i&&(i=o.clientWidth),o.remove(),h=t-i,h}function Z(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let w=0,b,T,v,L=!1,X,z,m;function ee(e){oe(e)&&D(e)}function oe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=J(e),t=e.shiftKey&&!e.deltaX,i=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=t||i?e.deltaY:e.deltaX;for(let c=0;c<o.length;c++){const r=o[c];if(Z(r,i))return i?n<0&&r.scrollTop===0?!0:n>0&&r.scrollTop+r.clientHeight===r.scrollHeight:n<0&&r.scrollLeft===0?!0:n>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function O(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function g(e){L!==!0&&(L=!0,requestAnimationFrame(()=>{L=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:i}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=t-o,document.scrollingElement.scrollTop=i),i>v&&(document.scrollingElement.scrollTop-=Math.ceil((i-v)/8))}))}function F(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:n}=window.getComputedStyle(o);b=k(window),T=R(window),X=o.style.left,z=o.style.top,o.style.left=`-${b}px`,o.style.top=`-${T}px`,n!=="hidden"&&(n==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",g,a.passiveCapture),window.visualViewport.addEventListener("scroll",g,a.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",O,a.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",ee,a.notPassive),e==="remove"&&(p.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",g,a.passiveCapture),window.visualViewport.removeEventListener("scroll",g,a.passiveCapture)):window.removeEventListener("scroll",O,a.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=X,o.style.top=z,window.scrollTo(b,T),v=void 0)}function te(e){let o="add";if(e===!0){if(w++,m!==void 0){clearTimeout(m),m=void 0;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){clearTimeout(m),m=setTimeout(()=>{F(o),m=void 0},100);return}}F(o)}function fe(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,te(o))}}}function me(){let e;return U(()=>{clearTimeout(e)}),{registerTimeout(o,t){clearTimeout(e),e=setTimeout(o,t)},removeTimeout(){clearTimeout(e)}}}function pe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),G.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{re as a,me as b,se as c,le as d,fe as e,ce as f,ae as g,R as h,k as i,pe as j,de as k,ue as s,ne as u};
