import{Q as i}from"./QInput.cff1f400.js";import{bz as d,bX as p,k as u,ay as c,W as f,a2 as s,b1 as b,X as g,bB as m}from"./index.95299443.js";import{u as S,Q as y}from"./use-quasar.fcd95371.js";import{a as V}from"./apiService.e2911f4c.js";import"./use-key-composition.a888e9b8.js";import"./use-dark.c1a0b6e7.js";import"./format.2bc25e5f.js";import"./_commonjsHelpers.2cf1d77b.js";const _={setup(){const{doRequest:r,initAuthHeader:l}=V(),n=S(),o=p(),t=u(null),a=u(null);return{login:t,pw:a,onSubmit(){sessionStorage.clear(),l(t.value,a.value),r("").then(e=>{e.status===1?o.push("/planning"):(sessionStorage.clear(),n.notify({color:"red",textColor:"white",icon:"cloud_done",message:"Erreur: "+e.message}))})},onReset(){t.value=null,a.value=null}}}},w={class:"q-pa-md",style:{"max-width":"400px"}};function x(r,l,n,o,t,a){return c(),f("div",w,[s(y,{onSubmit:o.onSubmit,onReset:o.onReset,class:"q-gutter-sm"},{default:b(()=>[s(i,{filled:"",modelValue:o.login,"onUpdate:modelValue":l[0]||(l[0]=e=>o.login=e),label:"Login","lazy-rules":"",rules:[e=>e&&e.length>0||"Saisir le Login"]},null,8,["modelValue","rules"]),s(i,{filled:"",type:"password",modelValue:o.pw,"onUpdate:modelValue":l[1]||(l[1]=e=>o.pw=e),label:"Mot de passe","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Saisir le mot de passe"]},null,8,["modelValue","rules"]),g("div",null,[s(m,{label:"Submit",type:"submit",color:"primary"}),s(m,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},8,["onSubmit","onReset"])])}var L=d(_,[["render",x]]);export{L as default};
