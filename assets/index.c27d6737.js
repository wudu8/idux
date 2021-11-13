import{c as o,u as p,U as v}from"./index.789a60d9.js";import{P as u,f as r,o as d,$ as l,a0 as m,a2 as f,ai as x}from"./vendor.a2465f65.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h={dashed:o.bool,plain:o.bool,position:o.oneOf(["left","center","right"]),type:o.oneOf(["horizontal","vertical"])};var $=(e,i)=>{for(const[s,t]of i)e[s]=t;return e};const y=u({name:"IxDivider",props:h,setup(e,{slots:i}){const s=p("divider"),t=r(()=>v(i));return{className:_(e,s,t),withText:t}}});function _(e,i,s){return r(()=>{const t=e.position||i.position,a=e.type||i.type,n=e.dashed||i.dashed,c=e.plain||i.plain;return[`ix-divider-${a}`,{"ix-divider-with-text":s.value,"ix-divider-dashed":n,"ix-divider-plain":c&&s.value,[`ix-divider-with-text-${t}`]:a==="horizontal"&&s.value}]})}const C={key:0,class:"ix-divider-inner-text"};function N(e,i,s,t,a,n){return d(),l("div",{class:x(["ix-divider",e.className])},[e.withText?(d(),l("span",C,[m(e.$slots,"default")])):f("v-if",!0)],2)}var k=$(y,[["render",N]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z=k;export{z as I};
