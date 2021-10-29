import{c,u as f,f as h,az as x,aA as $}from"./index.b0bc66d4.js";import{H as C,K as t,N as l}from"./vendor.01b03999.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k={checkable:c.bool,checked:c.bool,closable:c.bool,color:c.string,icon:c.string,shape:c.oneOf(["round","rect"])};var I=C({name:"IxTag",props:k,setup(a,{slots:s}){const g=f("common"),u=t(()=>`${g.prefixCls}-tag`),m=f("tag"),i=t(()=>{const o=a.color;return o?x(o)||$(o):!1}),p=t(()=>{const{color:o,checkable:n,shape:r=m.shape,checked:v}=a,d=i.value,e=u.value;return{[`${e}`]:!0,[`${e}-${r}`]:r,[`${e}-${o}`]:d,[`${e}-has-color`]:!d&&o,[`${e}-checkable`]:n,[`${e}-checked`]:v}}),b=t(()=>({backgroundColor:i.value?void 0:a.color}));return()=>{var o;const{icon:n}=a,r=s.icon?s.icon():n&&l(h,{name:n},null);return l("span",{class:p.value,style:b.value},[r,l("span",{class:`${u.value}-content`},[(o=s.default)==null?void 0:o.call(s)])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=I;export{y as I};
