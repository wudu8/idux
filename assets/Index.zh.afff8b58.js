import{a as n,I as t}from"./index.42ea8d37.js";import{e as a,g as s,a as o,f as e,I as l,b as c}from"./index.3d3216c0.js";import{_ as p}from"./GlobalCodeBox.143b9762.js";import{E as u,v as i,o as k,ae as r,H as f,w as d,F as g,e as m,d as A,y as h,r as x,c as b,a8 as C,ar as w,as as v}from"./vendor.56ae3a09.js";import"./index.fbcd2653.js";var B=u({setup:()=>({numberOffset:i(0),onChange:n=>{console.log(`Basic Offset status change : ${n}`)},objectOffset:i({top:100,left:100})})});const I=m("Number Offset"),E=A("br",null,null,-1),y=m("Object Offset");B.render=function(n,t,o,e,l,c){const p=a,u=s;return k(),r(g,null,[f(u,{offset:n.numberOffset,onChange:n.onChange},{default:d((()=>[f(p,{onClick:t[0]||(t[0]=t=>n.numberOffset+=20)},{default:d((()=>[I])),_:1})])),_:1},8,["offset","onChange"]),E,f(u,{offset:n.objectOffset},{default:d((()=>[f(p,null,{default:d((()=>[y])),_:1})])),_:1},8,["offset"])],64)};var O=u({name:"components-affix-Basic",components:{"raw-demo":B},setup(){const{lang:n}=h(o);return{lang:n}}});const D={key:0},j=[A("p",null,"最简单的用法。",-1)],_={key:1},F=[A("p",null,"The simplest usage.",-1)],q=A("div",null,[A("pre",{class:"language-html"},[A("code",null,[A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("template")]),A("span",{class:"token punctuation"},">")]),m("\n  "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("IxAffix")]),m(),A("span",{class:"token attr-name"},":offset"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("numberOffset"),A("span",{class:"token punctuation"},'"')]),m(),A("span",{class:"token attr-name"},"@Change"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("onChange"),A("span",{class:"token punctuation"},'"')]),A("span",{class:"token punctuation"},">")]),m("\n    "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("IxButton")]),m(),A("span",{class:"token attr-name"},"@click"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("numberOffset += 20"),A("span",{class:"token punctuation"},'"')]),A("span",{class:"token punctuation"},">")]),m("Number Offset"),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("IxButton")]),A("span",{class:"token punctuation"},">")]),m("\n  "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("IxAffix")]),A("span",{class:"token punctuation"},">")]),m("\n  "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("br")]),m(),A("span",{class:"token punctuation"},"/>")]),m("\n  "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("IxAffix")]),m(),A("span",{class:"token attr-name"},":offset"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("objectOffset"),A("span",{class:"token punctuation"},'"')]),A("span",{class:"token punctuation"},">")]),m("\n    "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("IxButton")]),A("span",{class:"token punctuation"},">")]),m("Object Offset"),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("IxButton")]),A("span",{class:"token punctuation"},">")]),m("\n  "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("IxAffix")]),A("span",{class:"token punctuation"},">")]),m("\n"),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("template")]),A("span",{class:"token punctuation"},">")]),m("\n\n"),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("script")]),m(),A("span",{class:"token attr-name"},"lang"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("ts"),A("span",{class:"token punctuation"},'"')]),A("span",{class:"token punctuation"},">")]),A("span",{class:"token script"},[A("span",{class:"token language-javascript"},[m("\n"),A("span",{class:"token keyword"},"import"),m(),A("span",{class:"token punctuation"},"{"),m(" defineComponent"),A("span",{class:"token punctuation"},","),m(" ref "),A("span",{class:"token punctuation"},"}"),m(),A("span",{class:"token keyword"},"from"),m(),A("span",{class:"token string"},"'vue'"),m("\n"),A("span",{class:"token keyword"},"export"),m(),A("span",{class:"token keyword"},"default"),m(),A("span",{class:"token function"},"defineComponent"),A("span",{class:"token punctuation"},"("),A("span",{class:"token punctuation"},"{"),m("\n  "),A("span",{class:"token function"},"setup"),A("span",{class:"token punctuation"},"("),A("span",{class:"token punctuation"},")"),m(),A("span",{class:"token punctuation"},"{"),m("\n    "),A("span",{class:"token keyword"},"const"),m(" numberOffset "),A("span",{class:"token operator"},"="),m(),A("span",{class:"token function"},"ref"),A("span",{class:"token punctuation"},"("),A("span",{class:"token number"},"0"),A("span",{class:"token punctuation"},")"),m("\n    "),A("span",{class:"token keyword"},"const"),m(),A("span",{class:"token function-variable function"},"onChange"),m(),A("span",{class:"token operator"},"="),m(),A("span",{class:"token punctuation"},"("),A("span",{class:"token parameter"},[m("isAffix"),A("span",{class:"token operator"},":"),m(" boolean")]),A("span",{class:"token punctuation"},")"),m(),A("span",{class:"token operator"},"=>"),m(),A("span",{class:"token punctuation"},"{"),m("\n      console"),A("span",{class:"token punctuation"},"."),A("span",{class:"token function"},"log"),A("span",{class:"token punctuation"},"("),A("span",{class:"token template-string"},[A("span",{class:"token template-punctuation string"},"`"),A("span",{class:"token string"},"Basic Offset status change : "),A("span",{class:"token interpolation"},[A("span",{class:"token interpolation-punctuation punctuation"},"${"),m("isAffix"),A("span",{class:"token interpolation-punctuation punctuation"},"}")]),A("span",{class:"token template-punctuation string"},"`")]),A("span",{class:"token punctuation"},")"),m("\n    "),A("span",{class:"token punctuation"},"}"),m("\n\n    "),A("span",{class:"token keyword"},"const"),m(" objectOffset "),A("span",{class:"token operator"},"="),m(),A("span",{class:"token function"},"ref"),A("span",{class:"token punctuation"},"("),A("span",{class:"token punctuation"},"{"),m(" top"),A("span",{class:"token operator"},":"),m(),A("span",{class:"token number"},"100"),A("span",{class:"token punctuation"},","),m(" left"),A("span",{class:"token operator"},":"),m(),A("span",{class:"token number"},"100"),m(),A("span",{class:"token punctuation"},"}"),A("span",{class:"token punctuation"},")"),m("\n\n    "),A("span",{class:"token keyword"},"return"),m(),A("span",{class:"token punctuation"},"{"),m(" numberOffset"),A("span",{class:"token punctuation"},","),m(" onChange"),A("span",{class:"token punctuation"},","),m(" objectOffset "),A("span",{class:"token punctuation"},"}"),m("\n  "),A("span",{class:"token punctuation"},"}"),A("span",{class:"token punctuation"},","),m("\n"),A("span",{class:"token punctuation"},"}"),A("span",{class:"token punctuation"},")"),m("\n")])]),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("script")]),A("span",{class:"token punctuation"},">")]),m("\n")])])],-1);O.render=function(n,t,a,s,o,e){const l=x("raw-demo"),c=p;return k(),b(c,{packageName:"components",componentName:"affix",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22numberOffset%22%20%40Change%3D%22onChange%22%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22numberOffset%20%2B%3D%2020%22%3ENumber%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%20%20%3Cbr%20%2F%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22objectOffset%22%3E%0A%20%20%20%20%3CIxButton%3EObject%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberOffset%20%3D%20ref(0)%0A%20%20%20%20const%20onChange%20%3D%20(isAffix%3A%20boolean)%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(%60Basic%20Offset%20status%20change%20%3A%20%24%7BisAffix%7D%60)%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20objectOffset%20%3D%20ref(%7B%20top%3A%20100%2C%20left%3A%20100%20%7D)%0A%0A%20%20%20%20return%20%7B%20numberOffset%2C%20onChange%2C%20objectOffset%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:"zh"===n.lang?"基本使用":"Basic usage"},{description:d((()=>["zh"===n.lang?(k(),r("span",D,j)):C("",!0),"en"===n.lang?(k(),r("span",_,F)):C("",!0)])),rawCode:d((()=>[f(l)])),highlightCode:d((()=>[q])),_:1},8,["title"])};const N={};w("data-v-590fb934");const P={class:"container"},T={class:"background"},z=m("Custom target container");v(),N.render=function(n,t){const o=a,e=s;return k(),r("div",P,[A("div",T,[f(e,{target:".container",offset:{top:0,left:0}},{default:d((()=>[f(o,{mode:"primary"},{default:d((()=>[z])),_:1})])),_:1})])])},N.__scopeId="data-v-590fb934";var S=u({name:"components-affix-Target",components:{"raw-demo":N},setup(){const{lang:n}=h(o);return{lang:n}}});const L={key:0},G=[A("p",null,[m("通过 "),A("code",null,"target"),m(" 设置 "),A("code",null,"IxAffix"),m(" 需要监听其滚动事件的元素，默认为 "),A("code",null,"window"),m("。")],-1)],H={key:1},$=[A("p",null,[m("Set a target for "),A("code",null,"IxAffix"),m(", which is listen to scroll event of target element (default is "),A("code",null,"window"),m(").")],-1)],M=A("div",null,[A("pre",{class:"language-html"},[A("code",null,[A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("template")]),A("span",{class:"token punctuation"},">")]),m("\n  "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("div")]),m(),A("span",{class:"token attr-name"},"class"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("container"),A("span",{class:"token punctuation"},'"')]),A("span",{class:"token punctuation"},">")]),m("\n    "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("div")]),m(),A("span",{class:"token attr-name"},"class"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("background"),A("span",{class:"token punctuation"},'"')]),A("span",{class:"token punctuation"},">")]),m("\n      "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("IxAffix")]),m(),A("span",{class:"token attr-name"},"target"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m(".container"),A("span",{class:"token punctuation"},'"')]),m(),A("span",{class:"token attr-name"},":offset"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("{ top: 0, left: 0 }"),A("span",{class:"token punctuation"},'"')]),A("span",{class:"token punctuation"},">")]),m("\n        "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("IxButton")]),m(),A("span",{class:"token attr-name"},"mode"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("primary"),A("span",{class:"token punctuation"},'"')]),A("span",{class:"token punctuation"},">")]),m("Custom target container"),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("IxButton")]),A("span",{class:"token punctuation"},">")]),m("\n      "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("IxAffix")]),A("span",{class:"token punctuation"},">")]),m("\n    "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("div")]),A("span",{class:"token punctuation"},">")]),m("\n  "),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("div")]),A("span",{class:"token punctuation"},">")]),m("\n"),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("template")]),A("span",{class:"token punctuation"},">")]),m("\n"),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"<"),m("style")]),m(),A("span",{class:"token attr-name"},"lang"),A("span",{class:"token attr-value"},[A("span",{class:"token punctuation attr-equals"},"="),A("span",{class:"token punctuation"},'"'),m("less"),A("span",{class:"token punctuation"},'"')]),m(),A("span",{class:"token attr-name"},"scoped"),A("span",{class:"token punctuation"},">")]),A("span",{class:"token style"},[A("span",{class:"token language-css"},[m("\n"),A("span",{class:"token selector"},".container"),m(),A("span",{class:"token punctuation"},"{"),m("\n  "),A("span",{class:"token property"},"height"),A("span",{class:"token punctuation"},":"),m(" 100px"),A("span",{class:"token punctuation"},";"),m("\n  "),A("span",{class:"token property"},"overflow"),A("span",{class:"token punctuation"},":"),m(" scroll"),A("span",{class:"token punctuation"},";"),m("\n\n  "),A("span",{class:"token selector"},".background"),m(),A("span",{class:"token punctuation"},"{"),m("\n    "),A("span",{class:"token property"},"padding-top"),A("span",{class:"token punctuation"},":"),m(" 20px"),A("span",{class:"token punctuation"},";"),m("\n    "),A("span",{class:"token property"},"padding-left"),A("span",{class:"token punctuation"},":"),m(" 20px"),A("span",{class:"token punctuation"},";"),m("\n    "),A("span",{class:"token property"},"height"),A("span",{class:"token punctuation"},":"),m(" 300px"),A("span",{class:"token punctuation"},";"),m("\n    "),A("span",{class:"token property"},"width"),A("span",{class:"token punctuation"},":"),m(" 120%"),A("span",{class:"token punctuation"},";"),m("\n    "),A("span",{class:"token property"},"background"),A("span",{class:"token punctuation"},":"),m(),A("span",{class:"token function"},"rgb"),A("span",{class:"token punctuation"},"("),m("200"),A("span",{class:"token punctuation"},","),m(" 200"),A("span",{class:"token punctuation"},","),m(" 200"),A("span",{class:"token punctuation"},")"),A("span",{class:"token punctuation"},";"),m("\n  "),A("span",{class:"token punctuation"},"}"),m("\n"),A("span",{class:"token punctuation"},"}"),m("\n")])]),A("span",{class:"token tag"},[A("span",{class:"token tag"},[A("span",{class:"token punctuation"},"</"),m("style")]),A("span",{class:"token punctuation"},">")]),m("\n")])])],-1);S.render=function(n,t,a,s,o,e){const l=x("raw-demo"),c=p;return k(),b(c,{packageName:"components",componentName:"affix",demoName:"Target",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22background%22%3E%0A%20%20%20%20%20%20%3CIxAffix%20target%3D%22.container%22%20%3Aoffset%3D%22%7B%20top%3A%200%2C%20left%3A%200%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3ECustom%20target%20container%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3C%2FIxAffix%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.container%20%7B%0A%20%20height%3A%20100px%3B%0A%20%20overflow%3A%20scroll%3B%0A%0A%20%20.background%20%7B%0A%20%20%20%20padding-top%3A%2020px%3B%0A%20%20%20%20padding-left%3A%2020px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20width%3A%20120%25%3B%0A%20%20%20%20background%3A%20rgb(200%2C%20200%2C%20200)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",title:"zh"===n.lang?"自定义目标容器":"custom target container"},{description:d((()=>["zh"===n.lang?(k(),r("span",L,G)):C("",!0),"en"===n.lang?(k(),r("span",H,$)):C("",!0)])),rawCode:d((()=>[f(l)])),highlightCode:d((()=>[M])),_:1},8,["title"])};var J={name:"Demoaffix",components:{Basic:O,Target:S},setup(){const n=i(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const K=m(),Q=m(),R={class:"markdown header-wrapper"},U=m("Affix"),V=A("span",{class:"subtitle"},"固钉",-1),W={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IDuxFE/idux/edit/main/components/affix/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},X=A("section",{class:"markdown"},[A("p",null,"将内容固钉在某个位置的容器组件"),A("h2",{id:"何时使用"},[A("span",null,"何时使用"),A("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),A("ul",null,[A("li",null,"容器滚动到某个位置时，需要固定住某些内容的位置，类似于sticky的效果")])],-1),Y=A("span",null,"代码演示",-1),Z={class:"example-wrapper"},nn=A("section",{class:"markdown api-wrapper"},[A("h2",{id:"API"},[A("span",null,"API"),A("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),A("h3",{id:"IxAffix"},[A("span",null,"IxAffix"),A("a",{onclick:"window.location.hash = 'IxAffix'",class:"anchor"},"#")]),A("h4",{id:"AffixProps"},[A("span",null,"AffixProps"),A("a",{onclick:"window.location.hash = 'AffixProps'",class:"anchor"},"#")]),A("table",null,[A("thead",null,[A("tr",null,[A("th",null,"名称"),A("th",null,"说明"),A("th",null,"类型"),A("th",null,"默认值"),A("th",null,"全局配置"),A("th",null,"备注")])]),A("tbody",null,[A("tr",null,[A("td",null,[A("code",null,"offset")]),A("td",null,"距离容器顶部的偏移量，到达时会触发affix"),A("td",null,[A("code",null,"number | { top:number. bottom:number, left:number, right:number}")]),A("td",null,[A("code",null,"0")]),A("td",null,"-"),A("td",null,"-")]),A("tr",null,[A("td",null,[A("code",null,"target")]),A("td",null,"用于定位的容器，会监听容器的滚动事件，用函数返回"),A("td",null,[A("code",null,"string | HTMLElement | window")]),A("td",null,[A("code",null,"window")]),A("td",null,"-"),A("td",null,"-")])])]),A("h4",{id:"AffixSlots"},[A("span",null,"AffixSlots"),A("a",{onclick:"window.location.hash = 'AffixSlots'",class:"anchor"},"#")]),A("table",null,[A("thead",null,[A("tr",null,[A("th",null,"名称"),A("th",null,"说明"),A("th",null,"参数类型"),A("th",null,"备注")])]),A("tbody",null,[A("tr",null,[A("td",null,[A("code",null,"default")]),A("td",null,"自定义显示内容"),A("td",null,"-"),A("td",null,"-")])])]),A("h4",{id:"AffixEmits"},[A("span",null,"AffixEmits"),A("a",{onclick:"window.location.hash = 'AffixEmits'",class:"anchor"},"#")]),A("table",null,[A("thead",null,[A("tr",null,[A("th",null,"名称"),A("th",null,"说明"),A("th",null,"参数类型"),A("th",null,"备注")])]),A("tbody",null,[A("tr",null,[A("td",null,[A("code",null,"change")]),A("td",null,"固定状态改变时触发"),A("td",null,[A("code",null,"boolean")]),A("td",null,"-")])])])],-1);J.render=function(a,s,o,p,u,i){const g=n,m=t,h=e,b=x("Basic"),C=l,w=x("Target"),v=c;return k(),r("article",null,[f(m,{class:"toc-wrapper",affix:"",offset:"16",onClick:s[0]||(s[0]=n=>p.goLink(n))},{default:d((()=>[f(g,{href:"#components-affix-demo-Basic",title:"基本使用"}),K,f(g,{href:"#components-affix-demo-Target",title:"自定义目标容器"}),Q,f(g,{href:"#API",title:"API"})])),_:1}),A("section",R,[A("h1",null,[U,V,A("a",W,[f(h,{name:"edit"})])]),X,A("h2",null,[Y,f(h,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:s[1]||(s[1]=n=>p.expandAll())})])]),A("section",Z,[f(v,{gutter:"16"},{default:d((()=>[f(C,{lg:"12",span:"24"},{default:d((()=>[f(b)])),_:1}),f(C,{lg:"12",span:"24"},{default:d((()=>[f(w)])),_:1})])),_:1})]),nn])};export{J as default};
