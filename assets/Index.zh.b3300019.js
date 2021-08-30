import{a as n,I as s}from"./index.7a935c3e.js";import{f as a,I as t,b as o}from"./index.240f5fc1.js";import{v as l,o as c,Z as e,H as p,w as u,d as i,e as k}from"./vendor.49325c66.js";var r={name:"Demosubject",components:{},setup(){const n=l(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const d={class:"markdown header-wrapper"},m=k("Subject"),b=i("span",{class:"subtitle"},"观察者",-1),h={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IDuxFE/idux/edit/main/cdk/subject/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},w=i("section",{class:"markdown"},[i("h2",{id:"何时使用"},[i("span",null,"何时使用"),i("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")])],-1),f=i("span",null,"代码演示",-1),g={class:"example-wrapper"},v=i("section",{class:"markdown api-wrapper"},[i("h2",{id:"API"},[i("span",null,"API"),i("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),i("h3",{id:"Subject"},[i("span",null,"Subject"),i("a",{onclick:"window.location.hash = 'Subject'",class:"anchor"},"#")]),i("h4",{id:"Params"},[i("span",null,"Params"),i("a",{onclick:"window.location.hash = 'Params'",class:"anchor"},"#")]),i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"名称"),i("th",null,"说明"),i("th",null,"类型"),i("th",null,"默认值"),i("th",null,"备注")])]),i("tbody",null,[i("tr",null,[i("td",null,[i("code",null,"T")]),i("td",null,"发布参数的类型"),i("td",null,[i("code",null,"T")]),i("td",null,[i("code",null,"void")]),i("td",null,"是一个泛型，起发布订阅参数类型保护")]),i("tr",null,[i("td",null,[i("code",null,"constructor")]),i("td",null,"-"),i("td",null,[i("code",null,"() => void")]),i("td",null,"-"),i("td",null,"-")]),i("tr",null,[i("td",null,[i("code",null,"dispatch")]),i("td",null,"发布事件"),i("td",null,[i("code",null,"(value: T) => void")]),i("td",null,"-"),i("td",null,"-")]),i("tr",null,[i("td",null,[i("code",null,"subscribe")]),i("td",null,"订阅事件"),i("td",null,[i("code",null,"(observer: Observer<T>) => Subscription")]),i("td",null,"-"),i("td",null,"订阅事件，利用闭包生成事件id，返回退订事件")]),i("tr",null,[i("td",null,[i("code",null,"unsubscribeAll")]),i("td",null,"退订所有事件"),i("td",null,[i("code",null,"() => void")]),i("td",null,"-"),i("td")])])]),i("pre",{class:"language-typescript"},[i("code",null,[i("span",{class:"token keyword"},"interface"),k(),i("span",{class:"token class-name"},[k("Observer"),i("span",{class:"token operator"},"<"),i("span",{class:"token constant"},"T"),i("span",{class:"token operator"},">")]),k(),i("span",{class:"token punctuation"},"{"),k("\n  "),i("span",{class:"token punctuation"},"("),k("value"),i("span",{class:"token operator"},":"),k(),i("span",{class:"token constant"},"T"),i("span",{class:"token punctuation"},")"),i("span",{class:"token operator"},":"),k(),i("span",{class:"token keyword"},"void"),k("\n"),i("span",{class:"token punctuation"},"}"),k("\n\n"),i("span",{class:"token keyword"},"interface"),k(),i("span",{class:"token class-name"},"Subscription"),k(),i("span",{class:"token punctuation"},"{"),k("\n  "),i("span",{class:"token function-variable function"},"unsubscribe"),i("span",{class:"token operator"},":"),k(),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),k(),i("span",{class:"token operator"},"=>"),k(),i("span",{class:"token keyword"},"void"),k("\n"),i("span",{class:"token punctuation"},"}")])]),i("h2",{id:"DEMO"},[i("span",null,"DEMO"),i("a",{onclick:"window.location.hash = 'DEMO'",class:"anchor"},"#")]),i("pre",{class:"language-html"},[i("code",null,[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("template")]),i("span",{class:"token punctuation"},">")]),k("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("div")]),k(),i("span",{class:"token punctuation"},"/>")]),k("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("template")]),i("span",{class:"token punctuation"},">")]),k("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("script")]),k(),i("span",{class:"token attr-name"},"lang"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),k("ts"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[k("\n"),i("span",{class:"token keyword"},"import"),k(),i("span",{class:"token punctuation"},"{"),k(" defineComponent "),i("span",{class:"token punctuation"},"}"),k(),i("span",{class:"token keyword"},"from"),k(),i("span",{class:"token string"},"'vue'"),k("\n"),i("span",{class:"token keyword"},"import"),k(),i("span",{class:"token punctuation"},"{"),k(" Subject "),i("span",{class:"token punctuation"},"}"),k(),i("span",{class:"token keyword"},"from"),k(),i("span",{class:"token string"},"'@idux/cdk/subject'"),k("\n\n"),i("span",{class:"token keyword"},"export"),k(),i("span",{class:"token keyword"},"default"),k(),i("span",{class:"token function"},"defineComponent"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"{"),k("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),k(),i("span",{class:"token punctuation"},"{"),k("\n    "),i("span",{class:"token keyword"},"const"),k(" subject1 "),i("span",{class:"token operator"},"="),k(),i("span",{class:"token keyword"},"new"),k(),i("span",{class:"token class-name"},"Subject"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),k("\n    subject1"),i("span",{class:"token punctuation"},"."),i("span",{class:"token function"},"subscribe"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),k(),i("span",{class:"token operator"},"=>"),k(),i("span",{class:"token punctuation"},"{"),k("\n      "),i("span",{class:"token comment"},"// 订阅"),k("\n    "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},")"),k("\n\n    subject1"),i("span",{class:"token punctuation"},"."),i("span",{class:"token function"},"dispatch"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),k(),i("span",{class:"token comment"},"// 发布"),k("\n\n    "),i("span",{class:"token comment"},"/* Subject是一个泛型类 */"),k("\n    "),i("span",{class:"token keyword"},"const"),k(" subject2 "),i("span",{class:"token operator"},"="),k(),i("span",{class:"token keyword"},"new"),k(),i("span",{class:"token class-name"},"Subject"),i("span",{class:"token operator"},"<"),k("number"),i("span",{class:"token operator"},">"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),k("\n\n    subject2"),i("span",{class:"token punctuation"},"."),i("span",{class:"token function"},"subscribe"),i("span",{class:"token punctuation"},"("),i("span",{class:"token parameter"},"value"),k(),i("span",{class:"token operator"},"=>"),k(),i("span",{class:"token punctuation"},"{"),k("\n      "),i("span",{class:"token comment"},"// value会被推导为number"),k("\n      console"),i("span",{class:"token punctuation"},"."),i("span",{class:"token function"},"log"),i("span",{class:"token punctuation"},"("),k("value"),i("span",{class:"token punctuation"},")"),k("\n    "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},")"),k("\n\n    subject2"),i("span",{class:"token punctuation"},"."),i("span",{class:"token function"},"dispatch"),i("span",{class:"token punctuation"},"("),i("span",{class:"token number"},"100"),i("span",{class:"token punctuation"},")"),k(),i("span",{class:"token comment"},"// ts类型保护，传参必须为number"),k("\n  "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),k("\n"),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},")"),k("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("script")]),i("span",{class:"token punctuation"},">")])])])],-1);r.render=function(l,k,r,j,y,x){const S=n,I=s,A=a,P=t,T=o;return c(),e("article",null,[p(I,{class:"toc-wrapper",affix:"",offset:"16",onClick:k[0]||(k[0]=n=>j.goLink(n))},{default:u((()=>[p(S,{href:"#API",title:"API"})])),_:1}),i("section",d,[i("h1",null,[m,b,i("a",h,[p(A,{name:"edit"})])]),w,i("h2",null,[f,p(A,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:k[1]||(k[1]=n=>j.expandAll())})])]),i("section",g,[p(T,{gutter:"16"},{default:u((()=>[p(P,{lg:"12",span:"24"}),p(P,{lg:"12",span:"24"})])),_:1})]),v])};export{r as default};
