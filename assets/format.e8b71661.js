import{ao as I,bE as O,aY as W,as as G,a9 as J,al as B,bF as p,bt as w,bC as K,bG as Q,bH as Z,bs as ee,bI as te,by as E,bJ as q,bD as F,bA as S,bB as z,bz as M}from"./index.c3301c4c.js";import{v as oe}from"./use-router-link.bd05e810.js";import{g as re,c as U}from"./QBtn.88d49ef9.js";import{e as ie}from"./render.0673db81.js";function ge(t,e,i){let n;function o(){n!==void 0&&(O.remove(n),n=void 0)}return I(()=>{t.value===!0&&o()}),{removeFromHistory:o,addToHistory(){n={condition:()=>i.value===!0,handler:e},O.add(n)}}}const be={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ce=["before-show","show","before-hide","hide"];function Ee({showing:t,canShow:e,hideOnRouteChange:i,handleShow:n,handleHide:o,processOnMount:r}){const l=J(),{props:u,emit:a,proxy:s}=l;let c;function m(d){t.value===!0?h(d):v(d)}function v(d){if(u.disable===!0||d!==void 0&&d.qAnchorHandled===!0||e!==void 0&&e(d)!==!0)return;const y=u["onUpdate:modelValue"]!==void 0;y===!0&&(a("update:modelValue",!0),c=d,B(()=>{c===d&&(c=void 0)})),(u.modelValue===null||y===!1)&&f(d)}function f(d){t.value!==!0&&(t.value=!0,a("before-show",d),n!==void 0?n(d):a("show",d))}function h(d){if(u.disable===!0)return;const y=u["onUpdate:modelValue"]!==void 0;y===!0&&(a("update:modelValue",!1),c=d,B(()=>{c===d&&(c=void 0)})),(u.modelValue===null||y===!1)&&Y(d)}function Y(d){t.value!==!1&&(t.value=!1,a("before-hide",d),o!==void 0?o(d):a("hide",d))}function X(d){u.disable===!0&&d===!0?u["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):d===!0!==t.value&&(d===!0?f:Y)(c)}W(()=>u.modelValue,X),i!==void 0&&oe(l)===!0&&W(()=>s.$route.fullPath,()=>{i.value===!0&&t.value===!0&&h()}),r===!0&&G(()=>{X(u.modelValue)});const _={show:v,hide:h,toggle:m};return Object.assign(s,_),_}const ne=[null,document,document.body,document.scrollingElement,document.documentElement];function Te(t,e){let i=re(e);if(i===void 0){if(t==null)return window;i=t.closest(".scroll,.scroll-y,.overflow-auto")}return ne.includes(i)?window:i}function le(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function se(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let T;function Le(){if(T!==void 0)return T;const t=document.createElement("p"),e=document.createElement("div");U(t,{width:"100%",height:"200px"}),U(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const i=t.offsetWidth;e.style.overflow="scroll";let n=t.offsetWidth;return i===n&&(n=e.clientWidth),e.remove(),T=i-n,T}function ue(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}let b=0,P,V,C,H=!1,k,D,g;function ae(t){de(t)&&K(t)}function de(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=Q(t),i=t.shiftKey&&!t.deltaX,n=!i&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),o=i||n?t.deltaY:t.deltaX;for(let r=0;r<e.length;r++){const l=e[r];if(ue(l,n))return n?o<0&&l.scrollTop===0?!0:o>0&&l.scrollTop+l.clientHeight===l.scrollHeight:o<0&&l.scrollLeft===0?!0:o>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function j(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function L(t){H!==!0&&(H=!0,requestAnimationFrame(()=>{H=!1;const{height:e}=t.target,{clientHeight:i,scrollTop:n}=document.scrollingElement;(C===void 0||e!==window.innerHeight)&&(C=i-e,document.scrollingElement.scrollTop=n),n>C&&(document.scrollingElement.scrollTop-=Math.ceil((n-C)/8))}))}function $(t){const e=document.body,i=window.visualViewport!==void 0;if(t==="add"){const{overflowY:n,overflowX:o}=window.getComputedStyle(e);P=se(window),V=le(window),k=e.style.left,D=e.style.top,e.style.left=`-${P}px`,e.style.top=`-${V}px`,o!=="hidden"&&(o==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",L,w.passiveCapture),window.visualViewport.addEventListener("scroll",L,w.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",j,w.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${t}EventListener`]("wheel",ae,w.notPassive),t==="remove"&&(p.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",L,w.passiveCapture),window.visualViewport.removeEventListener("scroll",L,w.passiveCapture)):window.removeEventListener("scroll",j,w.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=k,e.style.top=D,window.scrollTo(P,V),C=void 0)}function ce(t){let e="add";if(t===!0){if(b++,g!==void 0){clearTimeout(g),g=void 0;return}if(b>1)return}else{if(b===0||(b--,b>0))return;if(e="remove",p.is.ios===!0&&p.is.nativeMobile===!0){clearTimeout(g),g=setTimeout(()=>{$(e),g=void 0},100);return}}$(e)}function qe(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,ce(e))}}}function Se(){let t;return I(()=>{clearTimeout(t)}),{registerTimeout(e,i){clearTimeout(t),t=setTimeout(e,i)},removeTimeout(){clearTimeout(t)}}}const A={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},fe=Object.keys(A);A.all=!0;function N(t){const e={};for(const i of fe)t[i]===!0&&(e[i]=!0);return Object.keys(e).length===0?A:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function R(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function pe(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),Z.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function x(t,e,i){const n=z(t);let o,r=n.left-e.event.x,l=n.top-e.event.y,u=Math.abs(r),a=Math.abs(l);const s=e.direction;s.horizontal===!0&&s.vertical!==!0?o=r<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?o=l<0?"up":"down":s.up===!0&&l<0?(o="up",u>a&&(s.left===!0&&r<0?o="left":s.right===!0&&r>0&&(o="right"))):s.down===!0&&l>0?(o="down",u>a&&(s.left===!0&&r<0?o="left":s.right===!0&&r>0&&(o="right"))):s.left===!0&&r<0?(o="left",u<a&&(s.up===!0&&l<0?o="up":s.down===!0&&l>0&&(o="down"))):s.right===!0&&r>0&&(o="right",u<a&&(s.up===!0&&l<0?o="up":s.down===!0&&l>0&&(o="down")));let c=!1;if(o===void 0&&i===!1){if(e.event.isFirst===!0||e.event.lastDir===void 0)return{};o=e.event.lastDir,c=!0,o==="left"||o==="right"?(n.left-=r,u=0,r=0):(n.top-=l,a=0,l=0)}return{synthetic:c,payload:{evt:t,touch:e.event.mouse!==!0,mouse:e.event.mouse===!0,position:n,direction:o,isFirst:e.event.isFirst,isFinal:i===!0,duration:Date.now()-e.event.time,distance:{x:u,y:a},offset:{x:r,y:l},delta:{x:n.left-e.event.lastX,y:n.top-e.event.lastY}}}}let ve=0;var Me=ie({name:"touch-pan",beforeMount(t,{value:e,modifiers:i}){if(i.mouse!==!0&&p.has.touch!==!0)return;function n(r,l){i.mouse===!0&&l===!0?K(r):(i.stop===!0&&S(r),i.prevent===!0&&F(r))}const o={uid:"qvtp_"+ve++,handler:e,modifiers:i,direction:N(i),noop:ee,mouseStart(r){R(r,o)&&te(r)&&(E(o,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),o.start(r,!0))},touchStart(r){if(R(r,o)){const l=r.target;E(o,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),o.start(r)}},start(r,l){if(p.is.firefox===!0&&q(t,!0),o.lastEvt=r,l===!0||i.stop===!0){if(o.direction.all!==!0&&(l!==!0||o.modifiers.mouseAllDir!==!0)){const s=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&F(s),r.cancelBubble===!0&&S(s),Object.assign(s,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[o.uid]:r.qClonedBy.concat(o.uid)}),o.initialEvent={target:r.target,event:s}}S(r)}const{left:u,top:a}=z(r);o.event={x:u,y:a,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:u,lastY:a}},move(r){if(o.event===void 0)return;const l=z(r),u=l.left-o.event.x,a=l.top-o.event.y;if(u===0&&a===0)return;o.lastEvt=r;const s=o.event.mouse===!0,c=()=>{n(r,s),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pe(),o.styleCleanup=f=>{if(o.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),s===!0){const h=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{h(),f()},50):h()}else f!==void 0&&f()}};if(o.event.detected===!0){o.event.isFirst!==!0&&n(r,o.event.mouse);const{payload:f,synthetic:h}=x(r,o,!1);f!==void 0&&(o.handler(f)===!1?o.end(r):(o.styleCleanup===void 0&&o.event.isFirst===!0&&c(),o.event.lastX=f.position.left,o.event.lastY=f.position.top,o.event.lastDir=h===!0?void 0:f.direction,o.event.isFirst=!1));return}if(o.direction.all===!0||s===!0&&o.modifiers.mouseAllDir===!0){c(),o.event.detected=!0,o.move(r);return}const m=Math.abs(u),v=Math.abs(a);m!==v&&(o.direction.horizontal===!0&&m>v||o.direction.vertical===!0&&m<v||o.direction.up===!0&&m<v&&a<0||o.direction.down===!0&&m<v&&a>0||o.direction.left===!0&&m>v&&u<0||o.direction.right===!0&&m>v&&u>0?(o.event.detected=!0,o.move(r)):o.end(r,!0))},end(r,l){if(o.event!==void 0){if(M(o,"temp"),p.is.firefox===!0&&q(t,!1),l===!0)o.styleCleanup!==void 0&&o.styleCleanup(),o.event.detected!==!0&&o.initialEvent!==void 0&&o.initialEvent.target.dispatchEvent(o.initialEvent.event);else if(o.event.detected===!0){o.event.isFirst===!0&&o.handler(x(r===void 0?o.lastEvt:r,o).payload);const{payload:u}=x(r===void 0?o.lastEvt:r,o,!0),a=()=>{o.handler(u)};o.styleCleanup!==void 0?o.styleCleanup(a):a()}o.event=void 0,o.initialEvent=void 0,o.lastEvt=void 0}}};t.__qtouchpan=o,i.mouse===!0&&E(o,"main",[[t,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),p.has.touch===!0&&E(o,"main",[[t,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,e){const i=t.__qtouchpan;i!==void 0&&(e.oldValue!==e.value&&(typeof value!="function"&&i.end(),i.handler=e.value),i.direction=N(e.modifiers))},beforeUnmount(t){const e=t.__qtouchpan;e!==void 0&&(e.event!==void 0&&e.end(),M(e,"main"),M(e,"temp"),p.is.firefox===!0&&q(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(),delete t.__qtouchpan)}});function Pe(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ve(t,e,i){return i<=e?e:Math.min(i,Math.max(e,t))}function He(t,e,i){if(i<=e)return e;const n=i-e+1;let o=e+(t-e)%n;return o<e&&(o=n+o),o===0?0:o}function xe(t,e=2,i="0"){if(t==null)return t;const n=""+t;return n.length>=e?n:new Array(e-n.length+1).join(i)+n}export{Me as T,Ce as a,Se as b,Ee as c,ge as d,Ve as e,qe as f,Te as g,le as h,se as i,Le as j,Pe as k,pe as l,He as n,xe as p,be as u};
