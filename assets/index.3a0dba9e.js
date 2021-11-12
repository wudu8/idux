import{c as a,z as F,u as V,A as q,F as H,C as I,D as N,i as p,E as J}from"./index.001b24a5.js";import{P as z,f as i,K as T,Q as h,a3 as L,k as X,O as Y,ai as Z,n as ee}from"./vendor.a2465f65.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=Symbol("checkboxGroupToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae={checked:a.oneOfType([String,Number,Boolean]),control:F,autofocus:a.bool.def(!1),buttoned:a.bool,disabled:a.bool,indeterminate:a.bool.def(!1),label:a.string,trueValue:a.oneOfType([String,Number,Boolean]).def(!0),falseValue:a.oneOfType([String,Number,Boolean]).def(!1),value:a.any,size:a.oneOf(["sm","md","lg"]),"onUpdate:checked":a.emit(),onChange:a.emit(),onBlur:a.emit(),onFocus:a.emit()},le={value:a.array(),control:F,buttoned:a.bool.def(!1),disabled:a.bool.def(!1),gap:a.oneOfType([Number,String]),name:a.string,options:a.array(),size:a.oneOf(["sm","md","lg"]).def("md"),"onUpdate:value":a.emit(),onChange:a.emit()};var G=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,se=(e,r)=>{var d={};for(var l in e)ne.call(e,l)&&r.indexOf(l)<0&&(d[l]=e[l]);if(e!=null&&G)for(var l of G(e))r.indexOf(l)<0&&oe.call(e,l)&&(d[l]=e[l]);return d},R=z({name:"IxCheckbox",inheritAttrs:!1,props:ae,setup(e,{attrs:r,expose:d,slots:l}){const k=V("common"),v=i(()=>`${k.prefixCls}-checkbox`),m=V("checkbox"),{elementRef:g,focus:n,blur:t}=q();d({focus:n,blur:t});const s=T(H,null),c=T(j,null),C=i(()=>{var u;return(u=r.name)!=null?u:c==null?void 0:c.props.name}),y=i(()=>{var u,b;return(b=(u=e.buttoned)!=null?u:c==null?void 0:c.props.buttoned)!=null?b:!1}),_=i(()=>{var u,b,o;return(o=(b=(u=e.size)!=null?u:c==null?void 0:c.props.size)!=null?b:s==null?void 0:s.size.value)!=null?o:m.size}),{isChecked:f,isDisabled:x,isFocused:S,handleChange:A,handleBlur:E,handleFocus:w}=te(e,c),D=i(()=>{const{indeterminate:u}=e,b=y.value,o=v.value,O={[o]:!0,[`${o}-button`]:b,[`${o}-checked`]:!u&&f.value,[`${o}-disabled`]:x.value,[`${o}-focused`]:S.value,[`${o}-indeterminate`]:u,[`${o}-${_.value}`]:b};return Z([O,r.class])});return()=>{var u,b;const o=v.value,{autofocus:O,value:K,label:U}=e,$=(b=(u=l.default)==null?void 0:u.call(l))!=null?b:U,M=$&&h("span",{class:`${o}-label`},[$]),P=r,{class:ue,style:Q,type:re,tabindex:B}=P,W=se(P,["class","style","type","tabindex"]);return h("label",{class:D.value,style:Q,role:"checkbox","aria-checked":f.value,"aria-disabled":x.value},[h("span",{class:`${o}-input`},[h("input",L({ref:g,type:"checkbox",class:`${o}-input-inner`,"aria-hidden":!0},W,{autofocus:O,name:C.value,value:K,checked:f.value,disabled:x.value,onChange:A,onBlur:E,onFocus:w}),null),!y.value&&h("span",{class:`${o}-input-box`,tabindex:B},null)]),M,y.value&&h("span",{class:`${o}-button-tick`,tabindex:B},null)])}}});const te=(e,r)=>{let d,l,k,v;const m=X(!1),g=n=>{m.value=!0,p(e.onFocus,n)};if(r){const{props:n,accessor:t}=r;d=i(()=>{var s,c;return((s=t.valueRef.value)!=null?s:[]).includes((c=e.value)!=null?c:e.trueValue)}),l=i(()=>t.disabled.value),v=s=>{m.value=!1,p(e.onBlur,s),t.markAsBlurred()},k=s=>{var c;const y=s.target.checked?e.trueValue:e.falseValue,_=e.value,f=[...(c=t.valueRef.value)!=null?c:[]],x=f.indexOf(_);x===-1?f.push(_):f.splice(x,1),t.setValue(f),p(e.onChange,y),p(n.onChange,f)}}else{const{accessor:n,control:t}=I({valueKey:"checked"});N(t),d=i(()=>n.valueRef.value===e.trueValue),l=i(()=>n.disabled.value),v=s=>{m.value=!1,p(e.onBlur,s),n.markAsBlurred()},k=s=>{const C=s.target.checked?e.trueValue:e.falseValue;n.setValue(C),p(e.onChange,C)}}return{isChecked:d,isDisabled:l,isFocused:m,handleChange:k,handleBlur:v,handleFocus:g}};var ce=z({name:"IxCheckboxGroup",props:le,setup(e,{slots:r}){const{accessor:d,control:l}=I();N(l),Y(j,{props:e,accessor:d});const k=V("common"),v=i(()=>`${k.prefixCls}-checkbox-group`),m=i(()=>{const{gap:n}=e,t=v.value;return{[t]:!0,[`${t}-with-gap`]:!ee(n)}}),g=i(()=>{const{gap:n}=e;return n!==0?`gap: ${J(n)};`:void 0});return()=>{var n;const t=e.options?e.options.map(s=>h(R,s,null)):(n=r.default)==null?void 0:n.call(r);return h("div",{class:m.value,style:g.value},[t])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const be=R,fe=ce;export{be as I,fe as a};
