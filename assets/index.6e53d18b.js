import{c as l,t as B,u as y,v as P,w as S,x as j,f as p,j as d}from"./index.b0bc66d4.js";import{H as R,K as t,Q as V,N as u}from"./vendor.01b03999.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _={checked:l.bool.def(!1),control:B,autofocus:l.bool.def(!1),disabled:l.bool.def(!1),labels:l.arrayOf(String).def(()=>[]),loading:l.bool.def(!1),size:l.oneOf(["md","sm"]).def("md"),"onUpdate:checked":l.emit(),onChange:l.emit(),onBlur:l.emit(),onFocus:l.emit()};var z=R({name:"IxSwitch",props:_,setup(o,{expose:v,slots:r}){const h=y("common"),i=t(()=>`${h.prefixCls}-switch`),{elementRef:g,focus:f,blur:x}=P();v({focus:f,blur:x});const{accessor:s,control:C}=S({valueKey:"checked"});j(C);const n=t(()=>s.valueRef.value),m=t(()=>{var e;return(e=o.disabled)!=null?e:s.disabled.value}),k=()=>{m.value||o.loading||(d(o.onChange,!n.value),s.setValue(!n.value))},$=e=>{d(o.onFocus,e)},I=e=>{d(o.onBlur,e),s.markAsBlurred()},w=t(()=>{const{loading:e,size:c}=o,a=i.value;return{[a]:!0,[`${a}-checked`]:n.value,[`${a}-disabled`]:m.value,[`${a}-loading`]:e,[`${a}-${c}`]:!0}});return V(()=>o.autofocus&&f()),()=>{var e,c;const a=n.value,F=(c=(e=r.label)==null?void 0:e.call(r,{checked:a}))!=null?c:o.labels[a?0:1],b=i.value;return u("button",{ref:g,type:"button",class:w.value,onClick:k,onFocus:$,onBlur:I},[o.loading&&u("span",{class:`${b}-loading-icon`},[u(p,{name:"loading"},null)]),u("span",{class:`${b}-label`},[F])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E=z;export{E as I};
