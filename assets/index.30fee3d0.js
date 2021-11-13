import{c as p,u as d,e as m,U as f}from"./index.789a60d9.js";import{P as x,f as c,Q as l}from"./vendor.a2465f65.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const v={spinning:p.bool.def(!0),icon:p.string,tip:p.string,tipAlign:p.oneOf(["horizontal","vertical"]),size:p.oneOf(["lg","md","sm"])};var g=x({name:"IxSpin",props:v,setup(n,{slots:s}){const i=d("spin"),r=c(()=>f(s)),t=c(()=>{var o;return(o=n.icon)!=null?o:i.icon}),e=c(()=>{var o;return(o=n.tip)!=null?o:i.tip}),{spinnerClassName:a,containerClassName:u}=C(n,i,r);return{tip$$:e,icon$$:t,spinnerClassName:a,containerClassName:u}},render(){const{spinning:n,spinnerClassName:s,containerClassName:i,icon$$:r,tip$$:t,$slots:e}=this;return l("div",{class:"ix-spin"},[$(n,s,r,e.icon,t),I(e.default,i)])}});const C=(n,s,i)=>{const r=c(()=>{var e,a;const u=(e=n.size)!=null?e:s.size,o=(a=n.tipAlign)!=null?a:s.tipAlign;return["ix-spin-spinner",`ix-spin-spinner-tip-${o}`,`ix-spin-spinner-${u}`]}),t=c(()=>i.value?["ix-spin-container",n.spinning?"ix-spin-container-blur":""]:[]);return{spinnerClassName:r,containerClassName:t}},$=(n,s,i,r,t)=>{if(!n)return null;const e=r?r():l(m,{name:i},null),a=N(t);return l("div",{class:s},[l("div",{class:"ix-spin-spinner-icon"},[e]),a])},N=n=>n?l("div",{class:"ix-spin-spinner-tip"},[n]):null,I=(n,s)=>n?l("div",{class:s},[n()]):null;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h=g;export{h as I};
