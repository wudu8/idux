import{c as r,u as e,d as s,b as l,e as a,I as o}from"./index.240f5fc1.js";import{E as i,G as t,H as n,D as c,m as d,ad as u,g as v,y as x}from"./vendor.49325c66.js";const p=Symbol("cardToken"),h={borderless:r.bool,cover:r.oneOfType([String,r.object()]),header:r.oneOfType([String,r.object()]),hoverable:r.bool,loading:r.bool.def(!1),size:r.oneOf(["large","medium","small"]),footer:r.array()},b={hoverable:r.bool};var f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=i({name:"IxCard",props:h,setup(r,{slots:s}){const l=e("card"),a=t((()=>{var e;return null!=(e=r.hoverable)?e:l.hoverable})),o=t((()=>{var e;return null!=(e=r.size)?e:l.size})),{hasGrid:i}=O(s,a);return{classes:$(r,l,a,o,i),size$$:o,hasGrid:i}},render(){const r=j(this.$slots.cover,this.cover),e=G(this.$slots.header,this.header,this.size$$),s=I(this.$slots.default,this.loading,this.hasGrid),l=S(this.$slots.footer,this.footer);return n("div",{class:this.classes},[r,e,s,l])}});const $=(r,e,s,l,a)=>t((()=>{var o;const i=null!=(o=r.borderless)?o:e.borderless,t=a.value;return{"ix-card":!0,"ix-card-borderless":i,"ix-card-hoverable":!t&&s.value,"ix-card-loading":r.loading,"ix-card-has-grid":t,[`ix-card-${l.value}`]:!0}})),O=(r,e)=>{const s=t((()=>{var e;return((null==(e=r.default)?void 0:e.call(r))||[]).some((r=>r.type&&"IxCardGrid"===r.type.name))}));return c(p,{hoverable:e}),{hasGrid:s}},j=(r,e)=>{let s;if(r)s=r();else if(e){const r=d(e)?{src:e}:e;s=n("img",r,null)}return s?n("div",{class:"ix-card-cover"},[s]):null},G=(r,e,l)=>{if(r)return r();if(!e)return null;const a=d(e)?{title:e}:e;return n(s,u({size:l},a),null)},z=[["ix-col-span-22"],["ix-col-span-8","ix-col-span-15"],["ix-col-span-6","ix-col-span-18"],["ix-col-span-13","ix-col-span-9"],["ix-col-span-4","ix-col-span-3","ix-col-span-16"],["ix-col-span-8","ix-col-span-6","ix-col-span-8"]],I=(r,e,s)=>{let a;return e?a=(()=>{const r=z.map((r=>{const e=r.map((r=>n("div",{class:`ix-col ${r} ix-card-loading-col`},[n("div",{class:"ix-card-loading-block"},null)])));return n("div",{class:"ix-row"},[e])}));return n("div",{class:"ix-card-loading"},[r])})():r&&(a=s?n(l,null,{default:()=>[r()]}):r()),a?n("div",{class:"ix-card-body"},[a]):null},S=(r,e)=>{if(!r&&!e)return null;let s;return s=r?r():e.map((r=>{let e;if(v(r))e=r;else{const s=r,{text:l,visible:o=!0}=s,i=((r,e)=>{var s={};for(var l in r)m.call(r,l)&&e.indexOf(l)<0&&(s[l]=r[l]);if(null!=r&&f)for(var l of f(r))e.indexOf(l)<0&&g.call(r,l)&&(s[l]=r[l]);return s})(s,["text","visible"]);e=o?n(a,i,{default:()=>[l]}):null}return e?n("li",null,[e]):null})),n("ul",{class:"ix-card-footer"},[s])};const w=y,C=i({name:"IxCardGrid",props:b,setup(r){const{hoverable:e}=x(p);return{classes:t((()=>{var s;return{"ix-card-grid":!0,"ix-card-grid-hoverable":null!=(s=r.hoverable)?s:e.value}}))}},render(){return n(o,{class:this.classes},{default:()=>{var r,e;return[null==(e=(r=this.$slots).default)?void 0:e.call(r)]}})}});export{w as I,C as a};
