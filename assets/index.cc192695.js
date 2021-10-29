import{c as p,u as d,f as m,R as x}from"./index.b0bc66d4.js";import{H as f,K as c,N as l}from"./vendor.01b03999.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const v={spinning:p.bool.def(!0),icon:p.string,tip:p.string,tipAlign:p.oneOf(["horizontal","vertical"]),size:p.oneOf(["large","medium","small"])};var g=f({name:"IxSpin",props:v,setup(n,{slots:i}){const s=d("spin"),r=c(()=>x(i)),t=c(()=>{var o;return(o=n.icon)!=null?o:s.icon}),e=c(()=>{var o;return(o=n.tip)!=null?o:s.tip}),{spinnerClassName:a,containerClassName:u}=C(n,s,r);return{tip$$:e,icon$$:t,spinnerClassName:a,containerClassName:u}},render(){const{spinning:n,spinnerClassName:i,containerClassName:s,icon$$:r,tip$$:t,$slots:e}=this;return l("div",{class:"ix-spin"},[$(n,i,r,e.icon,t),b(e.default,s)])}});const C=(n,i,s)=>{const r=c(()=>{var e,a;const u=(e=n.size)!=null?e:i.size,o=(a=n.tipAlign)!=null?a:i.tipAlign;return["ix-spin-spinner",`ix-spin-spinner-tip-${o}`,u!=="medium"?`ix-spin-spinner-${u}`:""]}),t=c(()=>s.value?["ix-spin-container",n.spinning?"ix-spin-container-blur":""]:[]);return{spinnerClassName:r,containerClassName:t}},$=(n,i,s,r,t)=>{if(!n)return null;const e=r?r():l(m,{name:s},null),a=N(t);return l("div",{class:i},[l("div",{class:"ix-spin-spinner-icon"},[e]),a])},N=n=>n?l("div",{class:"ix-spin-spinner-tip"},[n]):null,b=(n,i)=>n?l("div",{class:i},[n()]):null;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h=g;export{h as I};
