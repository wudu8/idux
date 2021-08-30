import{a as n,I as a}from"./index.7a935c3e.js";import{A as t,a as s,e as o,f as e,I as l,b as c}from"./index.240f5fc1.js";import{_ as p}from"./GlobalCodeBox.dc32e68a.js";import{o as u,c as i,w as k,d as r,E as d,y as g,r as m,Z as f,$ as A,H as h,e as C,v,F as b}from"./vendor.49325c66.js";import"./index.bf0858ae.js";const x={},E=r("div",null,"Portal",-1);x.render=function(n,a){const s=t;return u(),i(s,{target:"ix-container"},{default:k((()=>[E])),_:1})};var D=d({name:"cdk-portal-Basic",components:{"raw-demo":x},setup(){const{lang:n}=g(s);return{lang:n}}});const w={key:0},P=[r("p",null,"默认传入一个字符串，创建传送容器。",-1)],I={key:1},y=r("div",null,[r("pre",{class:"language-html"},[r("code",null,[r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("template")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("IxPortal")]),C(),r("span",{class:"token attr-name"},"target"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("ix-container"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),C("\n    "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("div")]),r("span",{class:"token punctuation"},">")]),C("Portal"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("div")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("IxPortal")]),r("span",{class:"token punctuation"},">")]),C("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("template")]),r("span",{class:"token punctuation"},">")]),C("\n")])])],-1);D.render=function(n,a,t,s,o,e){const l=m("raw-demo"),c=p;return u(),i(c,{packageName:"cdk",componentName:"portal",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxPortal%20target%3D%22ix-container%22%3E%0A%20%20%20%20%3Cdiv%3EPortal%3C%2Fdiv%3E%0A%20%20%3C%2FIxPortal%3E%0A%3C%2Ftemplate%3E%0A",title:"zh"===n.lang?"基本用法":"Basic usage"},{description:k((()=>["zh"===n.lang?(u(),f("span",w,P)):A("",!0),"en"===n.lang?(u(),f("span",I)):A("",!0)])),rawCode:k((()=>[h(l)])),highlightCode:k((()=>[y])),_:1},8,["title"])};var B=d({name:"Element",setup(){const n=document.createElement("div");return n.classList.add("custom-container"),document.body.appendChild(n),{container:n}}});const F=r("div",null,"Portal",-1);B.render=function(n,a,s,o,e,l){const c=t;return u(),i(c,{target:n.container},{default:k((()=>[F])),_:1},8,["target"])};var L=d({name:"cdk-portal-Element",components:{"raw-demo":B},setup(){const{lang:n}=g(s);return{lang:n}}});const _={key:0},N=[r("p",null,"可以传入一个HTMLElement指定传送。",-1)],q={key:1},z=r("div",null,[r("pre",{class:"language-html"},[r("code",null,[r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("template")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("IxPortal")]),C(),r("span",{class:"token attr-name"},":target"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("container"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),C("\n    "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("div")]),r("span",{class:"token punctuation"},">")]),C("Portal"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("div")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("IxPortal")]),r("span",{class:"token punctuation"},">")]),C("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("template")]),r("span",{class:"token punctuation"},">")]),C("\n\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("script")]),C(),r("span",{class:"token attr-name"},"lang"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("ts"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),r("span",{class:"token script"},[r("span",{class:"token language-javascript"},[C("\n"),r("span",{class:"token keyword"},"import"),C(),r("span",{class:"token punctuation"},"{"),C(" defineComponent "),r("span",{class:"token punctuation"},"}"),C(),r("span",{class:"token keyword"},"from"),C(),r("span",{class:"token string"},"'vue'"),C("\n\n"),r("span",{class:"token keyword"},"export"),C(),r("span",{class:"token keyword"},"default"),C(),r("span",{class:"token function"},"defineComponent"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},"{"),C("\n  name"),r("span",{class:"token operator"},":"),C(),r("span",{class:"token string"},"'Element'"),r("span",{class:"token punctuation"},","),C("\n  "),r("span",{class:"token function"},"setup"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),C(),r("span",{class:"token punctuation"},"{"),C("\n    "),r("span",{class:"token keyword"},"const"),C(" container "),r("span",{class:"token operator"},"="),C(" document"),r("span",{class:"token punctuation"},"."),r("span",{class:"token function"},"createElement"),r("span",{class:"token punctuation"},"("),r("span",{class:"token string"},"'div'"),r("span",{class:"token punctuation"},")"),C("\n    container"),r("span",{class:"token punctuation"},"."),C("classList"),r("span",{class:"token punctuation"},"."),r("span",{class:"token function"},"add"),r("span",{class:"token punctuation"},"("),r("span",{class:"token string"},"'custom-container'"),r("span",{class:"token punctuation"},")"),C("\n    document"),r("span",{class:"token punctuation"},"."),C("body"),r("span",{class:"token punctuation"},"."),r("span",{class:"token function"},"appendChild"),r("span",{class:"token punctuation"},"("),C("container"),r("span",{class:"token punctuation"},")"),C("\n\n    "),r("span",{class:"token keyword"},"return"),C(),r("span",{class:"token punctuation"},"{"),C(" container "),r("span",{class:"token punctuation"},"}"),C("\n  "),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},","),C("\n"),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},")"),C("\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("script")]),r("span",{class:"token punctuation"},">")]),C("\n")])])],-1);L.render=function(n,a,t,s,o,e){const l=m("raw-demo"),c=p;return u(),i(c,{packageName:"cdk",componentName:"portal",demoName:"Element",code:"%3Ctemplate%3E%0A%20%20%3CIxPortal%20%3Atarget%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%3EPortal%3C%2Fdiv%3E%0A%20%20%3C%2FIxPortal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20name%3A%20'Element'%2C%0A%20%20setup()%20%7B%0A%20%20%20%20const%20container%20%3D%20document.createElement('div')%0A%20%20%20%20container.classList.add('custom-container')%0A%20%20%20%20document.body.appendChild(container)%0A%0A%20%20%20%20return%20%7B%20container%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"传入HTMLElement":"Send a HTMLElement"},{description:k((()=>["zh"===n.lang?(u(),f("span",_,N)):A("",!0),"en"===n.lang?(u(),f("span",q)):A("",!0)])),rawCode:k((()=>[h(l)])),highlightCode:k((()=>[z])),_:1},8,["title"])};var j=d({name:"Disabled",setup(){const n=v(!1);return{disabled:n,handleDisable:()=>{n.value=!n.value}}}});const H=r("div",null,"Portal",-1),M=C("Disabled");j.render=function(n,a,s,e,l,c){const p=t,i=o;return u(),f(b,null,[h(p,{target:"ix-container",disabled:n.disabled},{default:k((()=>[H])),_:1},8,["disabled"]),h(i,{onClick:n.handleDisable},{default:k((()=>[M])),_:1},8,["onClick"])],64)};var T=d({name:"cdk-portal-Disabled",components:{"raw-demo":j},setup(){const{lang:n}=g(s);return{lang:n}}});const G={key:0},S=[r("p",null,[r("code",null,"disabled"),C(" 设置为true可以禁止传送，直接以 "),r("code",null,"v-dom"),C(" 的上下文进行渲染。")],-1)],Z={key:1},$=r("div",null,[r("pre",{class:"language-html"},[r("code",null,[r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("template")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("IxPortal")]),C(),r("span",{class:"token attr-name"},"target"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("ix-container"),r("span",{class:"token punctuation"},'"')]),C(),r("span",{class:"token attr-name"},":disabled"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("disabled"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),C("\n    "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("div")]),r("span",{class:"token punctuation"},">")]),C("Portal"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("div")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("IxPortal")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("IxButton")]),C(),r("span",{class:"token attr-name"},"@click"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("handleDisable"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),C("Disabled"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("IxButton")]),r("span",{class:"token punctuation"},">")]),C("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("template")]),r("span",{class:"token punctuation"},">")]),C("\n\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("script")]),C(),r("span",{class:"token attr-name"},"lang"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("ts"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),r("span",{class:"token script"},[r("span",{class:"token language-javascript"},[C("\n"),r("span",{class:"token keyword"},"import"),C(),r("span",{class:"token punctuation"},"{"),C(" defineComponent"),r("span",{class:"token punctuation"},","),C(" ref "),r("span",{class:"token punctuation"},"}"),C(),r("span",{class:"token keyword"},"from"),C(),r("span",{class:"token string"},"'vue'"),C("\n\n"),r("span",{class:"token keyword"},"export"),C(),r("span",{class:"token keyword"},"default"),C(),r("span",{class:"token function"},"defineComponent"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},"{"),C("\n  name"),r("span",{class:"token operator"},":"),C(),r("span",{class:"token string"},"'Disabled'"),r("span",{class:"token punctuation"},","),C("\n  "),r("span",{class:"token function"},"setup"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),C(),r("span",{class:"token punctuation"},"{"),C("\n    "),r("span",{class:"token keyword"},"const"),C(" disabled "),r("span",{class:"token operator"},"="),C(),r("span",{class:"token function"},"ref"),r("span",{class:"token punctuation"},"("),r("span",{class:"token boolean"},"false"),r("span",{class:"token punctuation"},")"),C("\n\n    "),r("span",{class:"token keyword"},"const"),C(),r("span",{class:"token function-variable function"},"handleDisable"),C(),r("span",{class:"token operator"},"="),C(),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),C(),r("span",{class:"token operator"},"=>"),C(),r("span",{class:"token punctuation"},"{"),C("\n      disabled"),r("span",{class:"token punctuation"},"."),C("value "),r("span",{class:"token operator"},"="),C(),r("span",{class:"token operator"},"!"),C("disabled"),r("span",{class:"token punctuation"},"."),C("value\n    "),r("span",{class:"token punctuation"},"}"),C("\n\n    "),r("span",{class:"token keyword"},"return"),C(),r("span",{class:"token punctuation"},"{"),C(" disabled"),r("span",{class:"token punctuation"},","),C(" handleDisable "),r("span",{class:"token punctuation"},"}"),C("\n  "),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},","),C("\n"),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},")"),C("\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("script")]),r("span",{class:"token punctuation"},">")]),C("\n")])])],-1);T.render=function(n,a,t,s,o,e){const l=m("raw-demo"),c=p;return u(),i(c,{packageName:"cdk",componentName:"portal",demoName:"Disabled",code:"%3Ctemplate%3E%0A%20%20%3CIxPortal%20target%3D%22ix-container%22%20%3Adisabled%3D%22disabled%22%3E%0A%20%20%20%20%3Cdiv%3EPortal%3C%2Fdiv%3E%0A%20%20%3C%2FIxPortal%3E%0A%20%20%3CIxButton%20%40click%3D%22handleDisable%22%3EDisabled%3C%2FIxButton%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20name%3A%20'Disabled'%2C%0A%20%20setup()%20%7B%0A%20%20%20%20const%20disabled%20%3D%20ref(false)%0A%0A%20%20%20%20const%20handleDisable%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20disabled.value%20%3D%20!disabled.value%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20%7B%20disabled%2C%20handleDisable%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"禁止传送":"Disabled"},{description:k((()=>["zh"===n.lang?(u(),f("span",G,S)):A("",!0),"en"===n.lang?(u(),f("span",Z)):A("",!0)])),rawCode:k((()=>[h(l)])),highlightCode:k((()=>[$])),_:1},8,["title"])};var J=d({setup:()=>({load:v(!1)})});const K=r("div",null,"Portal",-1),O=C("Load");J.render=function(n,a,s,e,l,c){const p=t,i=o;return u(),f(b,null,[h(p,{target:"ix-container",load:n.load},{default:k((()=>[K])),_:1},8,["load"]),h(i,{onClick:a[0]||(a[0]=a=>n.load=!n.load)},{default:k((()=>[O])),_:1})],64)};var Q=d({name:"cdk-portal-Load",components:{"raw-demo":J},setup(){const{lang:n}=g(s);return{lang:n}}});const R={key:0},U=[r("p",null,[C("通过设置 "),r("code",null,':load="false"'),C(" 可以懒加载。")],-1)],V={key:1},W=[r("p",null,[C("It can be loaded lazily by setting "),r("code",null,':load="false"'),C(".")],-1)],X=r("div",null,[r("pre",{class:"language-html"},[r("code",null,[r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("template")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("IxPortal")]),C(),r("span",{class:"token attr-name"},"target"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("ix-container"),r("span",{class:"token punctuation"},'"')]),C(),r("span",{class:"token attr-name"},":load"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("load"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),C("\n    "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("div")]),r("span",{class:"token punctuation"},">")]),C("Portal"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("div")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("IxPortal")]),r("span",{class:"token punctuation"},">")]),C("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("IxButton")]),C(),r("span",{class:"token attr-name"},"@click"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("load = !load"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),C("Load"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("IxButton")]),r("span",{class:"token punctuation"},">")]),C("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("template")]),r("span",{class:"token punctuation"},">")]),C("\n\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),C("script")]),C(),r("span",{class:"token attr-name"},"lang"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),C("ts"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),r("span",{class:"token script"},[r("span",{class:"token language-javascript"},[C("\n"),r("span",{class:"token keyword"},"import"),C(),r("span",{class:"token punctuation"},"{"),C(" defineComponent"),r("span",{class:"token punctuation"},","),C(" ref "),r("span",{class:"token punctuation"},"}"),C(),r("span",{class:"token keyword"},"from"),C(),r("span",{class:"token string"},"'vue'"),C("\n"),r("span",{class:"token keyword"},"export"),C(),r("span",{class:"token keyword"},"default"),C(),r("span",{class:"token function"},"defineComponent"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},"{"),C("\n  "),r("span",{class:"token function"},"setup"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),C(),r("span",{class:"token punctuation"},"{"),C("\n    "),r("span",{class:"token keyword"},"const"),C(" load "),r("span",{class:"token operator"},"="),C(),r("span",{class:"token function"},"ref"),r("span",{class:"token punctuation"},"("),r("span",{class:"token boolean"},"false"),r("span",{class:"token punctuation"},")"),C("\n    "),r("span",{class:"token keyword"},"return"),C(),r("span",{class:"token punctuation"},"{"),C(" load "),r("span",{class:"token punctuation"},"}"),C("\n  "),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},","),C("\n"),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},")"),C("\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),C("script")]),r("span",{class:"token punctuation"},">")]),C("\n")])])],-1);Q.render=function(n,a,t,s,o,e){const l=m("raw-demo"),c=p;return u(),i(c,{packageName:"cdk",componentName:"portal",demoName:"Load",code:"%3Ctemplate%3E%0A%20%20%3CIxPortal%20target%3D%22ix-container%22%20%3Aload%3D%22load%22%3E%0A%20%20%20%20%3Cdiv%3EPortal%3C%2Fdiv%3E%0A%20%20%3C%2FIxPortal%3E%0A%20%20%3CIxButton%20%40click%3D%22load%20%3D%20!load%22%3ELoad%3C%2FIxButton%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20load%20%3D%20ref(false)%0A%20%20%20%20return%20%7B%20load%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"懒加载":"Lazy load"},{description:k((()=>["zh"===n.lang?(u(),f("span",R,U)):A("",!0),"en"===n.lang?(u(),f("span",V,W)):A("",!0)])),rawCode:k((()=>[h(l)])),highlightCode:k((()=>[X])),_:1},8,["title"])};var Y={name:"Demoportal",components:{Basic:D,Element:L,Disabled:T,Load:Q},setup(){const n=v(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const nn=C(),an=C(),tn=C(),sn=C(),on={class:"markdown header-wrapper"},en=C("Portal"),ln=r("span",{class:"subtitle"},"传送门",-1),cn={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IDuxFE/idux/edit/main/cdk/portal/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},pn=r("section",{class:"markdown"},[r("h2",{id:"何时使用"},[r("span",null,"何时使用"),r("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),r("p",null,[C("当需要将元素传送到指定位置，但是不破坏当前 "),r("code",null,"v-dom"),C(" 的结构。")])],-1),un=r("span",null,"代码演示",-1),kn={class:"example-wrapper"},rn=r("section",{class:"markdown api-wrapper"},[r("h2",{id:"API"},[r("span",null,"API"),r("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),r("h3",{id:"IxPortal"},[r("span",null,"IxPortal"),r("a",{onclick:"window.location.hash = 'IxPortal'",class:"anchor"},"#")]),r("h4",{id:"PortalProps"},[r("span",null,"PortalProps"),r("a",{onclick:"window.location.hash = 'PortalProps'",class:"anchor"},"#")]),r("table",null,[r("thead",null,[r("tr",null,[r("th",null,"名称"),r("th",null,"说明"),r("th",null,"类型"),r("th",null,"默认值"),r("th",null,"备注")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("code",null,"disabled")]),r("td",null,"是否禁用传送"),r("td",null,[r("code",null,"boolean")]),r("td",null,"-"),r("td",null,[C("若禁用，则会以当前 "),r("code",null,"v-dom"),C(" 结构进行渲染")])]),r("tr",null,[r("td",null,[r("code",null,"target")]),r("td",null,"被传送的目标元素"),r("td",null,[r("code",null,"string | HTMLElement")]),r("td",null,"-"),r("td",null,[C("如果传入一个元素，组件直接传送到该元素上；如果是一个字符串，会根据是否创建过该元素，如果创建过直接读取缓存，否则在 "),r("code",null,"body"),C(" 的最后一个元素上创建元素，并将组件传送到该元素,传入的字符串将作为组件的类名")])])])])],-1);Y.render=function(t,s,o,p,i,d){const g=n,A=a,C=e,v=m("Basic"),b=m("Disabled"),x=l,E=m("Element"),D=m("Load"),w=c;return u(),f("article",null,[h(A,{class:"toc-wrapper",affix:"",offset:"16",onClick:s[0]||(s[0]=n=>p.goLink(n))},{default:k((()=>[h(g,{href:"#cdk-portal-demo-Basic",title:"基本用法"}),nn,h(g,{href:"#cdk-portal-demo-Element",title:"传入HTMLElement"}),an,h(g,{href:"#cdk-portal-demo-Disabled",title:"禁止传送"}),tn,h(g,{href:"#cdk-portal-demo-Load",title:"懒加载"}),sn,h(g,{href:"#API",title:"API"})])),_:1}),r("section",on,[r("h1",null,[en,ln,r("a",cn,[h(C,{name:"edit"})])]),pn,r("h2",null,[un,h(C,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:s[1]||(s[1]=n=>p.expandAll())})])]),r("section",kn,[h(w,{gutter:"16"},{default:k((()=>[h(x,{lg:"12",span:"24"},{default:k((()=>[h(v),h(b)])),_:1}),h(x,{lg:"12",span:"24"},{default:k((()=>[h(E),h(D)])),_:1})])),_:1})]),rn])};export{Y as default};
