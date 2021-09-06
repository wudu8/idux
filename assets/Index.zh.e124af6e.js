import{a as n,I as a}from"./index.42ea8d37.js";import{c as t,f as s,u as e,U as o,a as l,I as c,b as u}from"./index.3d3216c0.js";import{_ as p}from"./GlobalCodeBox.143b9762.js";import{E as i,v as r,G as k,ay as d,s as m,r as v,o as f,ae as g,F as A,af as C,at as h,d as w,H as y,ad as x,a8 as b,c as D,y as E,w as I,e as B}from"./vendor.56ae3a09.js";import"./index.fbcd2653.js";const F={value:t.oneOfType([Number,String]).def(0),count:t.oneOfType([Number,String]),icon:t.string,allowHalf:t.bool,disabled:t.bool,tooltips:t.arrayOf(String),allowClear:t.bool};var N=i({name:"IxRate",components:{IxIcon:s},props:F,emits:["update:value","change"],setup(n,{emit:a}){const t=r(n.value),s=r(!1),l=r([]),c=e("rate"),u=k((()=>{var a;return o(null!=(a=n.count)?a:c.count)})),p=k((()=>{var a;return null!=(a=n.icon)?a:c.icon})),i=k((()=>{var a;return null!=(a=n.allowHalf)?a:c.allowHalf})),v=k((()=>{var a;return null!=(a=n.allowClear)?a:c.allowClear}));return d((()=>{l.value=[]})),m((()=>{const a=o(n.value);t.value=a,s.value=a!==Math.floor(a)})),{rateCount:u,rateIcon:p,getTooltip:function(a){if(n.tooltips&&Array.isArray(n.tooltips))return n.tooltips[a]||""},showDecimalIcon:function(n){return i.value&&n-.5<=t.value&&n>t.value},handleMouseEnter:function(a,e){n.disabled||(i.value?(!function(n,a){const t=l.value[n];if(a.offsetX<=t.clientWidth/2)return void(s.value=!0);s.value=!1}(a-1,e),t.value=s.value?a-.5:a):t.value=a)},handleMouseLeave:function(){if(n.disabled)return;const a=o(n.value);i.value&&(s.value=a!==Math.floor(a)),t.value=a},handleClick:function(){if(n.disabled)return;let s=!1,e=0;const l=o(n.value),c=o(t.value);v.value&&(s=l===c),e=s?0:c,e!==l&&(a("update:value",e),a("change",e))},getIconClass:function(n){return n<=t.value?"ix-rate-highlight":"ix-rate-normal"},starRefs:l}}});const R={class:"ix-rate-wrap"},H=["title","onMousemove","onMouseleave","onClick"],z={class:"ix-rate-full"},_={key:0,class:"ix-rate-half"};N.render=function(n,a,t,s,e,o){const l=v("IxIcon");return f(),g("div",R,[(f(!0),g(A,null,C(n.rateCount,((a,t)=>(f(),g("div",{key:t,ref:a=>{a&&(n.starRefs[t]=a)},class:"ix-rate-item",title:n.getTooltip(t),style:h({cursor:n.disabled?"auto":"pointer"}),onMousemove:t=>n.handleMouseEnter(a,t),onMouseleave:t=>n.handleMouseLeave(a),onClick:t=>n.handleClick(a,t)},[w("div",z,[y(l,{name:n.rateIcon,class:x(["ix-rate-iconfont-main",n.getIconClass(a)])},null,8,["name","class"])]),n.showDecimalIcon(a)?(f(),g("div",_,[y(l,{name:n.rateIcon,class:"ix-rate-iconfont-main ix-rate-half-icon"},null,8,["name"])])):b("v-if",!0)],44,H)))),128))])};const j=N;const M=i({setup:()=>({value:r(3)})});M.render=function(n,a,t,s,e,o){const l=j;return f(),D(l,{value:n.value,"onUpdate:value":a[0]||(a[0]=a=>n.value=a)},null,8,["value"])};var T=i({name:"components-rate-Basic",components:{"raw-demo":M},setup(){const{lang:n}=E(l);return{lang:n}}});const q={key:0},U=[w("p",null,[B("简单展示，图标默认是 "),w("code",null,"star")],-1)],P={key:1},L=w("div",null,[w("pre",{class:"language-html"},[w("code",null,[w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n  "),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("IxRate")]),B(),w("span",{class:"token attr-name"},[w("span",{class:"token namespace"},"v-model:"),B("value")]),w("span",{class:"token attr-value"},[w("span",{class:"token punctuation attr-equals"},"="),w("span",{class:"token punctuation"},'"'),B("value"),w("span",{class:"token punctuation"},'"')]),B(),w("span",{class:"token punctuation"},"/>")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("script")]),w("span",{class:"token punctuation"},">")]),w("span",{class:"token script"},[w("span",{class:"token language-javascript"},[B("\n"),w("span",{class:"token keyword"},"import"),B(),w("span",{class:"token punctuation"},"{"),B(" defineComponent"),w("span",{class:"token punctuation"},","),B(" ref "),w("span",{class:"token punctuation"},"}"),B(),w("span",{class:"token keyword"},"from"),B(),w("span",{class:"token string"},"'vue'"),B("\n"),w("span",{class:"token keyword"},"export"),B(),w("span",{class:"token keyword"},"default"),B(),w("span",{class:"token function"},"defineComponent"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},"{"),B("\n  "),w("span",{class:"token function"},"setup"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},")"),B(),w("span",{class:"token punctuation"},"{"),B("\n    "),w("span",{class:"token keyword"},"const"),B(" value "),w("span",{class:"token operator"},"="),B(),w("span",{class:"token function"},"ref"),w("span",{class:"token punctuation"},"("),w("span",{class:"token number"},"3"),w("span",{class:"token punctuation"},")"),B("\n\n    "),w("span",{class:"token keyword"},"return"),B(),w("span",{class:"token punctuation"},"{"),B("\n      value"),w("span",{class:"token punctuation"},","),B("\n    "),w("span",{class:"token punctuation"},"}"),B("\n  "),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},","),B("\n"),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},")"),B("\n")])]),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("script")]),w("span",{class:"token punctuation"},">")]),B("\n")])])],-1);T.render=function(n,a,t,s,e,o){const l=v("raw-demo"),c=p;return f(),D(c,{packageName:"components",componentName:"rate",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20value%20%3D%20ref(3)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"基本用法":"Basic usage"},{description:I((()=>["zh"===n.lang?(f(),g("span",q,U)):b("",!0),"en"===n.lang?(f(),g("span",P)):b("",!0)])),rawCode:I((()=>[y(l)])),highlightCode:I((()=>[L])),_:1},8,["title"])};const G=i({setup:()=>({value:r(3.5)})});G.render=function(n,a,t,s,e,o){const l=j;return f(),D(l,{value:n.value,"onUpdate:value":a[0]||(a[0]=a=>n.value=a),allowHalf:""},null,8,["value"])};var O=i({name:"components-rate-Half",components:{"raw-demo":G},setup(){const{lang:n}=E(l);return{lang:n}}});const S={key:0},W=[w("p",null,"可以选择或展示半选（分）",-1)],X={key:1},J=w("div",null,[w("pre",{class:"language-html"},[w("code",null,[w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n  "),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("IxRate")]),B(),w("span",{class:"token attr-name"},[w("span",{class:"token namespace"},"v-model:"),B("value")]),w("span",{class:"token attr-value"},[w("span",{class:"token punctuation attr-equals"},"="),w("span",{class:"token punctuation"},'"'),B("value"),w("span",{class:"token punctuation"},'"')]),B(),w("span",{class:"token attr-name"},"allowHalf"),B(),w("span",{class:"token punctuation"},"/>")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("script")]),w("span",{class:"token punctuation"},">")]),w("span",{class:"token script"},[w("span",{class:"token language-javascript"},[B("\n"),w("span",{class:"token keyword"},"import"),B(),w("span",{class:"token punctuation"},"{"),B(" defineComponent"),w("span",{class:"token punctuation"},","),B(" ref "),w("span",{class:"token punctuation"},"}"),B(),w("span",{class:"token keyword"},"from"),B(),w("span",{class:"token string"},"'vue'"),B("\n"),w("span",{class:"token keyword"},"export"),B(),w("span",{class:"token keyword"},"default"),B(),w("span",{class:"token function"},"defineComponent"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},"{"),B("\n  "),w("span",{class:"token function"},"setup"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},")"),B(),w("span",{class:"token punctuation"},"{"),B("\n    "),w("span",{class:"token keyword"},"const"),B(" value "),w("span",{class:"token operator"},"="),B(),w("span",{class:"token function"},"ref"),w("span",{class:"token punctuation"},"("),w("span",{class:"token number"},"3.5"),w("span",{class:"token punctuation"},")"),B("\n\n    "),w("span",{class:"token keyword"},"return"),B(),w("span",{class:"token punctuation"},"{"),B("\n      value"),w("span",{class:"token punctuation"},","),B("\n    "),w("span",{class:"token punctuation"},"}"),B("\n  "),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},","),B("\n"),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},")"),B("\n")])]),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("script")]),w("span",{class:"token punctuation"},">")]),B("\n")])])],-1);O.render=function(n,a,t,s,e,o){const l=v("raw-demo"),c=p;return f(),D(c,{packageName:"components",componentName:"rate",demoName:"Half",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20allowHalf%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20value%20%3D%20ref(3.5)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"支持半选":"support half selection"},{description:I((()=>["zh"===n.lang?(f(),g("span",S,W)):b("",!0),"en"===n.lang?(f(),g("span",X)):b("",!0)])),rawCode:I((()=>[y(l)])),highlightCode:I((()=>[J])),_:1},8,["title"])};const K=i({setup:()=>({value:r(3),icon:"smile",tooltip:["很差","差","一般","不错","很好"]})});K.render=function(n,a,t,s,e,o){const l=j;return f(),D(l,{value:n.value,"onUpdate:value":a[0]||(a[0]=a=>n.value=a),icon:n.icon,tooltips:n.tooltip},null,8,["value","icon","tooltips"])};var Q=i({name:"components-rate-IconAndTooltips",components:{"raw-demo":K},setup(){const{lang:n}=E(l);return{lang:n}}});const V={key:0},Y=[w("ul",null,[w("li",null,"可以自定义icon，icon名称见 icon 组件"),w("li",null,"自定义每一个元素悬浮展示的信息")],-1)],Z={key:1},$=w("div",null,[w("pre",{class:"language-html"},[w("code",null,[w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n  "),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("IxRate")]),B(),w("span",{class:"token attr-name"},[w("span",{class:"token namespace"},"v-model:"),B("value")]),w("span",{class:"token attr-value"},[w("span",{class:"token punctuation attr-equals"},"="),w("span",{class:"token punctuation"},'"'),B("value"),w("span",{class:"token punctuation"},'"')]),B(),w("span",{class:"token attr-name"},":icon"),w("span",{class:"token attr-value"},[w("span",{class:"token punctuation attr-equals"},"="),w("span",{class:"token punctuation"},'"'),B("icon"),w("span",{class:"token punctuation"},'"')]),B(),w("span",{class:"token attr-name"},":tooltips"),w("span",{class:"token attr-value"},[w("span",{class:"token punctuation attr-equals"},"="),w("span",{class:"token punctuation"},'"'),B("tooltip"),w("span",{class:"token punctuation"},'"')]),B(),w("span",{class:"token punctuation"},"/>")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("script")]),w("span",{class:"token punctuation"},">")]),w("span",{class:"token script"},[w("span",{class:"token language-javascript"},[B("\n"),w("span",{class:"token keyword"},"import"),B(),w("span",{class:"token punctuation"},"{"),B(" defineComponent"),w("span",{class:"token punctuation"},","),B(" ref "),w("span",{class:"token punctuation"},"}"),B(),w("span",{class:"token keyword"},"from"),B(),w("span",{class:"token string"},"'vue'"),B("\n"),w("span",{class:"token keyword"},"export"),B(),w("span",{class:"token keyword"},"default"),B(),w("span",{class:"token function"},"defineComponent"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},"{"),B("\n  "),w("span",{class:"token function"},"setup"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},")"),B(),w("span",{class:"token punctuation"},"{"),B("\n    "),w("span",{class:"token keyword"},"const"),B(" value "),w("span",{class:"token operator"},"="),B(),w("span",{class:"token function"},"ref"),w("span",{class:"token punctuation"},"("),w("span",{class:"token number"},"3"),w("span",{class:"token punctuation"},")"),B("\n    "),w("span",{class:"token keyword"},"const"),B(" icon "),w("span",{class:"token operator"},"="),B(),w("span",{class:"token string"},"'smile'"),B("\n    "),w("span",{class:"token keyword"},"const"),B(" tooltip "),w("span",{class:"token operator"},"="),B(),w("span",{class:"token punctuation"},"["),w("span",{class:"token string"},"'很差'"),w("span",{class:"token punctuation"},","),B(),w("span",{class:"token string"},"'差'"),w("span",{class:"token punctuation"},","),B(),w("span",{class:"token string"},"'一般'"),w("span",{class:"token punctuation"},","),B(),w("span",{class:"token string"},"'不错'"),w("span",{class:"token punctuation"},","),B(),w("span",{class:"token string"},"'很好'"),w("span",{class:"token punctuation"},"]"),B("\n\n    "),w("span",{class:"token keyword"},"return"),B(),w("span",{class:"token punctuation"},"{"),B("\n      value"),w("span",{class:"token punctuation"},","),B("\n      icon"),w("span",{class:"token punctuation"},","),B("\n      tooltip"),w("span",{class:"token punctuation"},","),B("\n    "),w("span",{class:"token punctuation"},"}"),B("\n  "),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},","),B("\n"),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},")"),B("\n")])]),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("script")]),w("span",{class:"token punctuation"},">")]),B("\n")])])],-1);Q.render=function(n,a,t,s,e,o){const l=v("raw-demo"),c=p;return f(),D(c,{packageName:"components",componentName:"rate",demoName:"IconAndTooltips",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20%3Aicon%3D%22icon%22%20%3Atooltips%3D%22tooltip%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20value%20%3D%20ref(3)%0A%20%20%20%20const%20icon%20%3D%20'smile'%0A%20%20%20%20const%20tooltip%20%3D%20%5B'%E5%BE%88%E5%B7%AE'%2C%20'%E5%B7%AE'%2C%20'%E4%B8%80%E8%88%AC'%2C%20'%E4%B8%8D%E9%94%99'%2C%20'%E5%BE%88%E5%A5%BD'%5D%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20icon%2C%0A%20%20%20%20%20%20tooltip%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"自定义icon和tooltips":"customize icon and tooltips"},{description:I((()=>["zh"===n.lang?(f(),g("span",V,Y)):b("",!0),"en"===n.lang?(f(),g("span",Z)):b("",!0)])),rawCode:I((()=>[y(l)])),highlightCode:I((()=>[$])),_:1},8,["title"])};const nn=i({setup:()=>({value:r(3)})});nn.render=function(n,a,t,s,e,o){const l=j;return f(),D(l,{value:n.value,"onUpdate:value":a[0]||(a[0]=a=>n.value=a),disabled:""},null,8,["value"])};var an=i({name:"components-rate-Disabled",components:{"raw-demo":nn},setup(){const{lang:n}=E(l);return{lang:n}}});const tn={key:0},sn=[w("p",null,"此时图标被禁用，无法选择",-1)],en={key:1},on=w("div",null,[w("pre",{class:"language-html"},[w("code",null,[w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n  "),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("IxRate")]),B(),w("span",{class:"token attr-name"},[w("span",{class:"token namespace"},"v-model:"),B("value")]),w("span",{class:"token attr-value"},[w("span",{class:"token punctuation attr-equals"},"="),w("span",{class:"token punctuation"},'"'),B("value"),w("span",{class:"token punctuation"},'"')]),B(),w("span",{class:"token attr-name"},"disabled"),B(),w("span",{class:"token punctuation"},"/>")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("script")]),w("span",{class:"token punctuation"},">")]),w("span",{class:"token script"},[w("span",{class:"token language-javascript"},[B("\n"),w("span",{class:"token keyword"},"import"),B(),w("span",{class:"token punctuation"},"{"),B(" defineComponent"),w("span",{class:"token punctuation"},","),B(" ref "),w("span",{class:"token punctuation"},"}"),B(),w("span",{class:"token keyword"},"from"),B(),w("span",{class:"token string"},"'vue'"),B("\n"),w("span",{class:"token keyword"},"export"),B(),w("span",{class:"token keyword"},"default"),B(),w("span",{class:"token function"},"defineComponent"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},"{"),B("\n  "),w("span",{class:"token function"},"setup"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},")"),B(),w("span",{class:"token punctuation"},"{"),B("\n    "),w("span",{class:"token keyword"},"const"),B(" value "),w("span",{class:"token operator"},"="),B(),w("span",{class:"token function"},"ref"),w("span",{class:"token punctuation"},"("),w("span",{class:"token number"},"3"),w("span",{class:"token punctuation"},")"),B("\n\n    "),w("span",{class:"token keyword"},"return"),B(),w("span",{class:"token punctuation"},"{"),B("\n      value"),w("span",{class:"token punctuation"},","),B("\n    "),w("span",{class:"token punctuation"},"}"),B("\n  "),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},","),B("\n"),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},")"),B("\n")])]),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("script")]),w("span",{class:"token punctuation"},">")]),B("\n")])])],-1);an.render=function(n,a,t,s,e,o){const l=v("raw-demo"),c=p;return f(),D(c,{packageName:"components",componentName:"rate",demoName:"Disabled",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20disabled%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20value%20%3D%20ref(3)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"只读模式":"disbaled"},{description:I((()=>["zh"===n.lang?(f(),g("span",tn,sn)):b("",!0),"en"===n.lang?(f(),g("span",en)):b("",!0)])),rawCode:I((()=>[y(l)])),highlightCode:I((()=>[on])),_:1},8,["title"])};const ln=i({setup:()=>({value:r(3)})});ln.render=function(n,a,t,s,e,o){const l=j;return f(),D(l,{value:n.value,"onUpdate:value":a[0]||(a[0]=a=>n.value=a),allowClear:""},null,8,["value"])};var cn=i({name:"components-rate-AllowClear",components:{"raw-demo":ln},setup(){const{lang:n}=E(l);return{lang:n}}});const un={key:0},pn=[w("p",null,"允许点击已经选择的图标后清除所有选择项",-1)],rn={key:1},kn=w("div",null,[w("pre",{class:"language-html"},[w("code",null,[w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n  "),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("IxRate")]),B(),w("span",{class:"token attr-name"},[w("span",{class:"token namespace"},"v-model:"),B("value")]),w("span",{class:"token attr-value"},[w("span",{class:"token punctuation attr-equals"},"="),w("span",{class:"token punctuation"},'"'),B("value"),w("span",{class:"token punctuation"},'"')]),B(),w("span",{class:"token attr-name"},"allowClear"),B(),w("span",{class:"token punctuation"},"/>")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("template")]),w("span",{class:"token punctuation"},">")]),B("\n"),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"<"),B("script")]),w("span",{class:"token punctuation"},">")]),w("span",{class:"token script"},[w("span",{class:"token language-javascript"},[B("\n"),w("span",{class:"token keyword"},"import"),B(),w("span",{class:"token punctuation"},"{"),B(" defineComponent"),w("span",{class:"token punctuation"},","),B(" ref "),w("span",{class:"token punctuation"},"}"),B(),w("span",{class:"token keyword"},"from"),B(),w("span",{class:"token string"},"'vue'"),B("\n"),w("span",{class:"token keyword"},"export"),B(),w("span",{class:"token keyword"},"default"),B(),w("span",{class:"token function"},"defineComponent"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},"{"),B("\n  "),w("span",{class:"token function"},"setup"),w("span",{class:"token punctuation"},"("),w("span",{class:"token punctuation"},")"),B(),w("span",{class:"token punctuation"},"{"),B("\n    "),w("span",{class:"token keyword"},"const"),B(" value "),w("span",{class:"token operator"},"="),B(),w("span",{class:"token function"},"ref"),w("span",{class:"token punctuation"},"("),w("span",{class:"token number"},"3"),w("span",{class:"token punctuation"},")"),B("\n\n    "),w("span",{class:"token keyword"},"return"),B(),w("span",{class:"token punctuation"},"{"),B("\n      value"),w("span",{class:"token punctuation"},","),B("\n    "),w("span",{class:"token punctuation"},"}"),B("\n  "),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},","),B("\n"),w("span",{class:"token punctuation"},"}"),w("span",{class:"token punctuation"},")"),B("\n")])]),w("span",{class:"token tag"},[w("span",{class:"token tag"},[w("span",{class:"token punctuation"},"</"),B("script")]),w("span",{class:"token punctuation"},">")]),B("\n")])])],-1);cn.render=function(n,a,t,s,e,o){const l=v("raw-demo"),c=p;return f(),D(c,{packageName:"components",componentName:"rate",demoName:"AllowClear",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20allowClear%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20value%20%3D%20ref(3)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"允许取消":"allow clear"},{description:I((()=>["zh"===n.lang?(f(),g("span",un,pn)):b("",!0),"en"===n.lang?(f(),g("span",rn)):b("",!0)])),rawCode:I((()=>[y(l)])),highlightCode:I((()=>[kn])),_:1},8,["title"])};var dn={name:"Demorate",components:{Basic:T,Half:O,IconAndTooltips:Q,Disabled:an,AllowClear:cn},setup(){const n=r(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const mn=B(),vn=B(),fn=B(),gn=B(),An=B(),Cn={class:"markdown header-wrapper"},hn=B("Rate"),wn=w("span",{class:"subtitle"},"评分",-1),yn={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IDuxFE/idux/edit/main/components/rate/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},xn=w("section",{class:"markdown"},[w("h2",{id:"何时使用"},[w("span",null,"何时使用"),w("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),w("ul",null,[w("li",null,"对某个内容进行评分或展示评分")])],-1),bn=w("span",null,"代码演示",-1),Dn={class:"example-wrapper"},En=w("section",{class:"markdown api-wrapper"},[w("h2",{id:"API"},[w("span",null,"API"),w("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),w("h3",{id:"IxRate"},[w("span",null,"IxRate"),w("a",{onclick:"window.location.hash = 'IxRate'",class:"anchor"},"#")]),w("table",null,[w("thead",null,[w("tr",null,[w("th",null,"名称"),w("th",null,"说明"),w("th",null,"类型"),w("th",null,"默认值"),w("th",null,"全局配置"),w("th",null,"备注")])]),w("tbody",null,[w("tr",null,[w("td",null,[w("code",null,"v-model:value")]),w("td",null,"高亮的数目（分数）"),w("td",null,[w("code",null,"number")]),w("td",null,[w("code",null,"0")]),w("td",null,"-"),w("td",null,"-")]),w("tr",null,[w("td",null,[w("code",null,"count")]),w("td",null,"图标数目"),w("td",null,[w("code",null,"number")]),w("td",null,[w("code",null,"5")]),w("td",null,"✅"),w("td",null,"-")]),w("tr",null,[w("td",null,[w("code",null,"icon")]),w("td",null,"自定义图标名称"),w("td",null,[w("code",null,"string")]),w("td",null,[w("code",null,"star")]),w("td",null,"✅"),w("td",null,"-")]),w("tr",null,[w("td",null,[w("code",null,"allowHalf")]),w("td",null,"支持半分（选）"),w("td",null,[w("code",null,"boolean")]),w("td",null,[w("code",null,"false")]),w("td",null,"✅"),w("td",null,"-")]),w("tr",null,[w("td",null,[w("code",null,"disabled")]),w("td",null,"只读模式"),w("td",null,[w("code",null,"boolean")]),w("td",null,[w("code",null,"false")]),w("td",null,"-"),w("td",null,"-")]),w("tr",null,[w("td",null,[w("code",null,"tooltips")]),w("td",null,"每一个元素的悬浮提示信息"),w("td",null,[w("code",null,"Array")]),w("td",null,[w("code",null,"[]")]),w("td",null,"-"),w("td",null,"-")]),w("tr",null,[w("td",null,[w("code",null,"allowClear")]),w("td",null,"二次点击元素后清除选择"),w("td",null,[w("code",null,"boolean")]),w("td",null,[w("code",null,"false")]),w("td",null,"✅"),w("td",null,"-")])])]),w("h3",{id:"Emits"},[w("span",null,"Emits"),w("a",{onclick:"window.location.hash = 'Emits'",class:"anchor"},"#")]),w("table",null,[w("thead",null,[w("tr",null,[w("th",null,"名称"),w("th",null,"说明"),w("th",null,"参数类型"),w("th",null,"备注")])]),w("tbody",null,[w("tr",null,[w("td",null,[w("code",null,"change")]),w("td",null,"点击评分元素时触发"),w("td",null,[w("code",null,"number")]),w("td",null,"-")])])])],-1);dn.render=function(t,e,o,l,p,i){const r=n,k=a,d=s,m=v("Basic"),A=v("IconAndTooltips"),C=v("AllowClear"),h=c,x=v("Half"),b=v("Disabled"),D=u;return f(),g("article",null,[y(k,{class:"toc-wrapper",affix:"",offset:"16",onClick:e[0]||(e[0]=n=>l.goLink(n))},{default:I((()=>[y(r,{href:"#components-rate-demo-Basic",title:"基本用法"}),mn,y(r,{href:"#components-rate-demo-Half",title:"支持半选"}),vn,y(r,{href:"#components-rate-demo-IconAndTooltips",title:"自定义icon和tooltips"}),fn,y(r,{href:"#components-rate-demo-Disabled",title:"只读模式"}),gn,y(r,{href:"#components-rate-demo-AllowClear",title:"允许取消"}),An,y(r,{href:"#API",title:"API"})])),_:1}),w("section",Cn,[w("h1",null,[hn,wn,w("a",yn,[y(d,{name:"edit"})])]),xn,w("h2",null,[bn,y(d,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:e[1]||(e[1]=n=>l.expandAll())})])]),w("section",Dn,[y(D,{gutter:"16"},{default:I((()=>[y(h,{lg:"12",span:"24"},{default:I((()=>[y(m),y(A),y(C)])),_:1}),y(h,{lg:"12",span:"24"},{default:I((()=>[y(x),y(b)])),_:1})])),_:1})]),En])};export{dn as default};
