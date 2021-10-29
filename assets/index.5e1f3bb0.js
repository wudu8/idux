import{c as o,u as p,R as v}from"./index.b0bc66d4.js";import{H as u,K as r,o as d,ad as l,ah as m,a8 as x,ac as h}from"./vendor.01b03999.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const f={dashed:o.bool,plain:o.bool,position:o.oneOf(["left","center","right"]),type:o.oneOf(["horizontal","vertical"])};var y=(e,i)=>{for(const[s,t]of i)e[s]=t;return e};const _=u({name:"IxDivider",props:f,setup(e,{slots:i}){const s=p("divider"),t=r(()=>v(i));return{className:$(e,s,t),withText:t}}});function $(e,i,s){return r(()=>{const t=e.position||i.position,a=e.type||i.type,n=e.dashed||i.dashed,c=e.plain||i.plain;return[`ix-divider-${a}`,{"ix-divider-with-text":s.value,"ix-divider-dashed":n,"ix-divider-plain":c&&s.value,[`ix-divider-with-text-${t}`]:a==="horizontal"&&s.value}]})}const b={key:0,class:"ix-divider-inner-text"};function C(e,i,s,t,a,n){return d(),l("div",{class:h(["ix-divider",e.className])},[e.withText?(d(),l("span",b,[m(e.$slots,"default")])):x("v-if",!0)],2)}var N=y(_,[["render",C]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z=N;export{z as I};
