import{g as s}from"./get-css-var.23548d6a.js";import{bA as t,a4 as o,aG as a,ay as n,U as p}from"./index.2638693e.js";const i=o({name:"ApexDonut",data(){return{options:{title:{text:"Statuts des pr\xE9parations",align:"left",labels:["Pr\xE9par\xE9","r\xE9serv\xE9","Non r\xE9serv\xE9"]},chart:{id:"apex-donut"},colors:[s("positive"),"#FFA500",s("negative")],markers:{size:4,hover:{sizeOffset:6}},labels:["Pr\xE9par\xE9","r\xE9serv\xE9","Non r\xE9serv\xE9"]},series:[50,35,15]}}});function c(e,l,f,u,d,m){const r=a("apexchart");return n(),p(r,{height:"300",type:"donut",options:e.options,series:e.series},null,8,["options","series"])}var h=t(i,[["render",c]]);export{h as default};
