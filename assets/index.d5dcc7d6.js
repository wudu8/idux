import{c as p,u as v,e as f,Y as $}from"./index.418e0b9f.js";import{P as g,f as a,Q as l}from"./vendor.379ae99b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const C={spinning:p.bool.def(!0),icon:p.string,tip:p.string,tipAlign:p.oneOf(["horizontal","vertical"]),size:p.oneOf(["lg","md","sm"])};var x=g({name:"IxSpin",props:C,setup(n,{slots:e}){const c=v("common"),r=a(()=>`${c.prefixCls}-spin`),s=v("spin"),t=a(()=>$(e)),u=a(()=>{var i;return(i=n.icon)!=null?i:s.icon}),o=a(()=>{var i;return(i=n.tip)!=null?i:s.tip}),{spinnerClassName:m,containerClassName:d}=N(n,s,t,r);return()=>{const i=r.value;return l("div",{class:i},[b(n.spinning,m.value,u.value,e.icon,o.value,i),z(e.default,d.value)])}}});const N=(n,e,c,r)=>{const s=r.value,t=a(()=>{var o,m;const d=(o=n.size)!=null?o:e.size,i=(m=n.tipAlign)!=null?m:e.tipAlign;return[`${s}-spinner`,`${s}-spinner-tip-${i}`,`${s}-spinner-${d}`]}),u=a(()=>c.value?[`${s}-container`,n.spinning?`${s}-container-blur`:""]:[]);return{spinnerClassName:t,containerClassName:u}},b=(n,e,c,r,s,t)=>{if(!n)return null;const u=r?r():l(f,{name:c},null),o=I(s,t);return l("div",{class:e},[l("div",{class:`${t}-spinner-icon`},[u]),o])},I=(n,e)=>n?l("div",{class:`${e}-spinner-tip`},[n]):null,z=(n,e)=>n?l("div",{class:e},[n()]):null;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=x;export{S as I};
