"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6228],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),m=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=m(a),d=l,c=s["".concat(u,".").concat(d)]||s[d]||k[d]||r;return a?n.createElement(c,i(i({ref:t},o),{},{components:a})):n.createElement(c,i({ref:t},o))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const r={},i=void 0,p={unversionedId:"js\u9762\u8bd5\u9898/1-20",id:"js\u9762\u8bd5\u9898/1-20",title:"1-20",description:"1.\u4ec0\u4e48\u662feval",source:"@site/docs/js\u9762\u8bd5\u9898/1-20.md",sourceDirName:"js\u9762\u8bd5\u9898",slug:"/js\u9762\u8bd5\u9898/1-20",permalink:"/docs/js\u9762\u8bd5\u9898/1-20",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js\u9762\u8bd5\u9898/1-20.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/docs/intro"},next:{title:"21-40",permalink:"/docs/js\u9762\u8bd5\u9898/21-40"}},u={},m=[{value:"1.\u4ec0\u4e48\u662feval",id:"1\u4ec0\u4e48\u662feval",level:3},{value:"2.\u4ec0\u4e48\u662fwindow\u5bf9\u8c61? \u4ec0\u4e48\u662fdocument\u5bf9\u8c61?",id:"2\u4ec0\u4e48\u662fwindow\u5bf9\u8c61-\u4ec0\u4e48\u662fdocument\u5bf9\u8c61",level:3},{value:"3.undefined\u4e0enull\u7684\u533a\u522b",id:"3undefined\u4e0enull\u7684\u533a\u522b",level:3},{value:"4.'1', '2','3'.map(parseInt)\u7b54\u6848\u662f\u591a\u5c11\uff1f",id:"41-23mapparseint\u7b54\u6848\u662f\u591a\u5c11",level:3},{value:"5.\u4e8b\u4ef6\u662f\uff1fIE\u4e0e\u706b\u72d0\u7684\u4e8b\u4ef6\u673a\u5236\u6709\u4ec0\u4e48\u533a\u522b\uff1f\u5982\u4f55\u963b\u6b62\u5192\u6ce1\uff1f",id:"5\u4e8b\u4ef6\u662fie\u4e0e\u706b\u72d0\u7684\u4e8b\u4ef6\u673a\u5236\u6709\u4ec0\u4e48\u533a\u522b\u5982\u4f55\u963b\u6b62\u5192\u6ce1",level:3},{value:"6.js\u4ee3\u7801\u4e2d\u7684&quot;use strict&quot;\u662f\u4ec0\u4e48\u610f\u601d ? \u4f7f\u7528\u5b83\u533a\u522b\u662f\u4ec0\u4e48\uff1f",id:"6js\u4ee3\u7801\u4e2d\u7684use-strict\u662f\u4ec0\u4e48\u610f\u601d--\u4f7f\u7528\u5b83\u533a\u522b\u662f\u4ec0\u4e48",level:3},{value:"7.js\u4e2d\u6709\u4e00\u4e2a\u51fd\u6570\uff0c\u6267\u884c\u65f6\u67e5\u627e\u5bf9\u8c61\u65f6\u6c38\u8fdc\u4e0d\u4f1a\u53bb\u67e5\u627e\u539f\u578b\uff0c\u8fd9\u4e2a\u51fd\u6570\u662f\uff1f",id:"7js\u4e2d\u6709\u4e00\u4e2a\u51fd\u6570\u6267\u884c\u65f6\u67e5\u627e\u5bf9\u8c61\u65f6\u6c38\u8fdc\u4e0d\u4f1a\u53bb\u67e5\u627e\u539f\u578b\u8fd9\u4e2a\u51fd\u6570\u662f",level:3},{value:"8.JSON\u7684\u4e86\u89e3\uff1f",id:"8json\u7684\u4e86\u89e3",level:3},{value:"9.js\u5ef6\u8fdf\u52a0\u8f7d\u7684\u65b9\u5f0f",id:"9js\u5ef6\u8fdf\u52a0\u8f7d\u7684\u65b9\u5f0f",level:3},{value:"10.\u5982\u4f55\u5224\u65ad\u5f53\u524d\u811a\u672c\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u8fd8\u662fnode\u73af\u5883\u4e2d\uff1f",id:"10\u5982\u4f55\u5224\u65ad\u5f53\u524d\u811a\u672c\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u8fd8\u662fnode\u73af\u5883\u4e2d",level:3},{value:"11.typeof\u8fd4\u56de\u54ea\u4e9b\u6570\u636e\u7c7b\u578b",id:"11typeof\u8fd4\u56de\u54ea\u4e9b\u6570\u636e\u7c7b\u578b",level:3},{value:"12.\u4f8b\u4e3e3\u79cd\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u548c2\u79cd\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362?",id:"12\u4f8b\u4e3e3\u79cd\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u548c2\u79cd\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362",level:3},{value:"13.split() \u3001join() \u7684\u533a\u522b",id:"13split-join-\u7684\u533a\u522b",level:3},{value:"14.\u6570\u7ec4\u65b9\u6cd5pop() push() unshift() shift()",id:"14\u6570\u7ec4\u65b9\u6cd5pop-push-unshift-shift",level:3},{value:"15.\u4e8b\u4ef6\u7ed1\u5b9a\u548c\u666e\u901a\u4e8b\u4ef6\u6709\u4ec0\u4e48\u533a\u522b",id:"15\u4e8b\u4ef6\u7ed1\u5b9a\u548c\u666e\u901a\u4e8b\u4ef6\u6709\u4ec0\u4e48\u533a\u522b",level:3},{value:"16.IE\u548cDOM\u4e8b\u4ef6\u6d41\u7684\u533a\u522b",id:"16ie\u548cdom\u4e8b\u4ef6\u6d41\u7684\u533a\u522b",level:3},{value:"17.\u5982\u4f55\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u548c\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a",id:"17\u5982\u4f55\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u548c\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"18.window.onload \u548cdocument DOMContentLoaded\u7684\u533a\u522b",id:"18windowonload-\u548cdocument-domcontentloaded\u7684\u533a\u522b",level:3},{value:"19.==\u548c===\u7684\u4e0d\u540c",id:"19\u548c\u7684\u4e0d\u540c",level:3},{value:"20.JavaScript\u662f\u4e00\u95e8\u4ec0\u4e48\u6837\u7684\u8bed\u8a00\uff0c\u5b83\u6709\u54ea\u4e9b\u7279\u70b9\uff1f",id:"20javascript\u662f\u4e00\u95e8\u4ec0\u4e48\u6837\u7684\u8bed\u8a00\u5b83\u6709\u54ea\u4e9b\u7279\u70b9",level:3}],o={toc:m};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1\u4ec0\u4e48\u662feval"},"1.\u4ec0\u4e48\u662feval"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"eval()")," \u51fd\u6570\u4f1a\u5c06\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u5f53\u505a ",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u4ee3\u7801\u8fdb\u884c\u6267\u884c\u3002",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_40013817/article/details/126341774?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167402338116782425155920%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167402338116782425155920&biz_id=0&utm_medium=distribute.pc_chrome_plugin_search_result.none-task-blog-2~all~top_click~default-2-126341774-null-null.nonecase&utm_term=JS%20eval&spm=1018.2226.3001.4187"},"\u53c2\u8003\u535a\u5ba2")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u503c\uff1a\u8fd4\u56de\u5b57\u7b26\u4e32\u4e2d\u4ee3\u7801\u7684\u8fd4\u56de\u503c\u3002\u5982\u679c\u8fd4\u56de\u503c\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"eval()")," \u7684\u53c2\u6570\u4e0d\u662f\u5b57\u7b26\u4e32\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"eval()")," \u4f1a\u5c06\u53c2\u6570\u539f\u5c01\u4e0d\u52a8\u5730\u8fd4\u56de")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"strong"},"eval")," \u4e2d\u7684\u5b57\u7b26\u4e32\uff0c\u5e94\u8be5\u6709\u72ec\u81ea\u5b58\u5728\u7684\u610f\u4e49\u6216\u8005\u53ef\u4ee5\u5f53\u6210\u8bed\u53e5\u8fd0\u884c\uff0c\u4e0d\u80fd\u7528\u6765\u4e0e ",(0,l.kt)("inlineCode",{parentName:"strong"},"eval")," \u4ee5\u5916\u7684\u547d\u4ee4\u914d\u5408\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7531JSON\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3aJSON\u5bf9\u8c61\u7684\u65f6\u5019\u53ef\u4ee5\u7528eval"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const str='{\"name\":\"\u963f\u4f1f\",\"age\":20}'\nconsole.log(eval('('+str+')'))\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e94\u8be5\u907f\u514d\u4f7f\u7528eval\uff0c\u4e0d\u5b89\u5168\uff0c\u975e\u5e38\u8017\u6027\u80fd\uff082\u6b21\uff0c\u4e00\u6b21\u89e3\u6790\u6210js\u8bed\u53e5\uff0c\u4e00\u6b21\u6267\u884c\uff09\u3002")),(0,l.kt)("h3",{id:"2\u4ec0\u4e48\u662fwindow\u5bf9\u8c61-\u4ec0\u4e48\u662fdocument\u5bf9\u8c61"},"2.\u4ec0\u4e48\u662fwindow\u5bf9\u8c61? \u4ec0\u4e48\u662fdocument\u5bf9\u8c61?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"window\u5bf9\u8c61\u662f\u6307\u6d4f\u89c8\u5668\u6253\u5f00\u7684\u7a97\u53e3\u3002"),(0,l.kt)("li",{parentName:"ul"},"Document\u5bf9\u8c61\u662fWindow\u5bf9\u8c61\u7684\u5b50\u5bf9\u8c61\uff0c\u53ef\u901a\u8fc7window.document\u5c5e\u6027\u5bf9\u5176\u8fdb\u884c\u8bbf\u95ee\u3002\u4e00\u4e2a\u7f51\u9875\u5c31\u662f\u4e00\u4e2a\u6587\u6863\u3002")),(0,l.kt)("h3",{id:"3undefined\u4e0enull\u7684\u533a\u522b"},"3.undefined\u4e0enull\u7684\u533a\u522b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"/"),(0,l.kt)("th",{parentName:"tr",align:null},"undefined"),(0,l.kt)("th",{parentName:"tr",align:null},"null"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u5b9a\u4e49\uff0c\u8868\u793a\u53d8\u91cf\u58f0\u660e\u4e86\u6ca1\u6709\u8d4b\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"typeof"),(0,l.kt)("td",{parentName:"tr",align:null},'"undefined"'),(0,l.kt)("td",{parentName:"tr",align:null},'"object"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7279\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u4e00\u4e2a\u6709\u6548\u7684json,Javascript\u4ece\u6765\u4e0d\u4f1a\u5c06\u53d8\u91cf\u8bbe\u4e3anull\u3002\u5b83\u662f\u7528\u6765\u8ba9\u7a0b\u5e8f\u5458\u8868\u660e\u67d0\u4e2a\u53d8\u91cf\u662f\u6ca1\u6709\u503c\u7684\u3002")))),(0,l.kt)("h3",{id:"41-23mapparseint\u7b54\u6848\u662f\u591a\u5c11"},"4.","['1', '2','3']",".map(parseInt)\u7b54\u6848\u662f\u591a\u5c11\uff1f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_46612232/article/details/109452278?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167419125916782427414401%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=167419125916782427414401&biz_id=0&utm_medium=distribute.pc_chrome_plugin_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-109452278-null-null.nonecase&utm_term=4.%20%5B1%2C%202%2C%203%5D.map%28parseInt%29%20%E7%AD%94%E6%A1%88%E6%98%AF%E5%A4%9A%E5%B0%91%EF%BC%9F&spm=1018.2226.3001.4187"},"[1,NaN,NaN]")),(0,l.kt)("h3",{id:"5\u4e8b\u4ef6\u662fie\u4e0e\u706b\u72d0\u7684\u4e8b\u4ef6\u673a\u5236\u6709\u4ec0\u4e48\u533a\u522b\u5982\u4f55\u963b\u6b62\u5192\u6ce1"},"5.\u4e8b\u4ef6\u662f\uff1fIE\u4e0e\u706b\u72d0\u7684\u4e8b\u4ef6\u673a\u5236\u6709\u4ec0\u4e48\u533a\u522b\uff1f\u5982\u4f55\u963b\u6b62\u5192\u6ce1\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5c31\u662f\u7528\u6237\u548c\u9875\u9762\u4e4b\u95f4\u53d1\u751f\u7684\u4ea4\u4e92\u884c\u4e3a \u6bd4\u5982\uff1a\u70b9\u51fb\u6309\u94ae\u3001\u9f20\u6807\u79fb\u52a8\u3001\u53cc\u51fb\u6309\u94ae\u3001\u6572\u51fb\u952e\u76d8\u3001\u677e\u5f00\u6309\u952e..."),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5904\u7406\u673a\u5236\uff1aIE8\u4ee5\u4e0b\u662f\u53ea\u6709\u4e8b\u4ef6\u5192\u6ce1\u3001Firefox\u540c\u65f6\u652f\u6301\u4e24\u79cd\u4e8b\u4ef6\u6a21\u578b\uff0c\u4e5f\u5c31\u662f\uff1a\u6355\u83b7\u578b\u4e8b\u4ef6\u548c\u5192\u6ce1\u578b\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6355\u83b7\u578b\u4e8b\u4ef6\uff0c\u4ece\u7236\u5143\u7d20\u63a5\u6536\uff0c\u4f20\u9012\u5230\u76ee\u6807\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"\u5192\u6ce1\u578b\u4e8b\u4ef6\uff0c\u4ece\u76ee\u6807\u5143\u7d20\u63a5\u6536\uff0c\u4f20\u9012\u5230\u7236\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event.stopPropagation() \u505c\u6b62\u4e8b\u4ef6\u7684\u4f20\u5bfc"))),(0,l.kt)("h3",{id:"6js\u4ee3\u7801\u4e2d\u7684use-strict\u662f\u4ec0\u4e48\u610f\u601d--\u4f7f\u7528\u5b83\u533a\u522b\u662f\u4ec0\u4e48"},'6.js\u4ee3\u7801\u4e2d\u7684"use strict"\u662f\u4ec0\u4e48\u610f\u601d ? \u4f7f\u7528\u5b83\u533a\u522b\u662f\u4ec0\u4e48\uff1f'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e25\u683c\u6a21\u5f0f\uff0c\u7528\u6765\u6d88\u9664js\u8bed\u6cd5\u7684\u4e0d\u4e25\u8c28\u7684\u5730\u65b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53d8\u5316\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528\u672a\u58f0\u660e\u7684\u53d8\u91cf \u81ea\u52a8\u8f6c\u6362->\u62a5\u9519"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5220\u9664\u53d8\u91cf\u6216\u8005\u51fd\u6570 \u65e0\u6548->\u62a5\u9519"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8\u91cd\u540d\u53c2\u6570\uff0c\u80fd\u8fd0\u884c->\u62a5\u9519"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://m.biancheng.net/view/9374.html#:~:text=%E5%A6%82%E6%9E%9C%E5%B0%86%20%22use%20strict%22%3B%20%E6%8C%87%E4%BB%A4%E6%B7%BB%E5%8A%A0%E5%88%B0%20JavaScript,%E7%A8%8B%E5%BA%8F%E7%9A%84%E7%AC%AC%E4%B8%80%E8%A1%8C%EF%BC%8C%E5%88%99%E8%A1%A8%E7%A4%BA%E6%95%B4%E4%B8%AA%E8%84%9A%E6%9C%AC%E9%83%BD%E4%BC%9A%E5%A4%84%E4%BA%8E%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E3%80%82%20%E5%A6%82%E6%9E%9C%E5%9C%A8%E5%87%BD%E6%95%B0%E7%9A%84%E7%AC%AC%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%E4%B8%AD%E6%B7%BB%E5%8A%A0%20%22use%20strict%22%3B%20%EF%BC%8C%E5%88%99%E8%A1%A8%E7%A4%BA%E5%8F%AA%E5%9C%A8%E8%AF%A5%E5%87%BD%E6%95%B0%E4%B8%AD%E5%90%AF%E7%94%A8%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E3%80%82"},"\u53c2\u8003\u535a\u5ba2"))),(0,l.kt)("h3",{id:"7js\u4e2d\u6709\u4e00\u4e2a\u51fd\u6570\u6267\u884c\u65f6\u67e5\u627e\u5bf9\u8c61\u65f6\u6c38\u8fdc\u4e0d\u4f1a\u53bb\u67e5\u627e\u539f\u578b\u8fd9\u4e2a\u51fd\u6570\u662f"},"7.js\u4e2d\u6709\u4e00\u4e2a\u51fd\u6570\uff0c\u6267\u884c\u65f6\u67e5\u627e\u5bf9\u8c61\u65f6\u6c38\u8fdc\u4e0d\u4f1a\u53bb\u67e5\u627e\u539f\u578b\uff0c\u8fd9\u4e2a\u51fd\u6570\u662f\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"javaScript\u4e2dhasOwnProperty\u51fd\u6570\u65b9\u6cd5\u662f\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u6307\u51fa\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u5177\u6709\u6307\u5b9a\u540d\u79f0\u7684\u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u65b9\u6cd5\u65e0\u6cd5\u68c0\u67e5\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e2d\u662f\u5426\u5177\u6709\u8be5\u5c5e\u6027\uff0c\u6240\u4ee5\u8be5\u5c5e\u6027\u5fc5\u987b\u662f\u5bf9\u8c61\u672c\u8eab\u7684\u4e00\u4e2a\u6210\u5458\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u65b9\u6cd5\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"object.hasOwnProperty(proName)"),(0,l.kt)("li",{parentName:"ul"},"object\uff0c\u4e00\u4e2a\u5bf9\u8c61\u7684\u5b9e\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},"proName\uff0c\u5c5e\u6027\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c object \u5177\u6709\u6307\u5b9a\u540d\u79f0\u7684\u5c5e\u6027\uff0c\u90a3\u4e48JavaScript\u4e2dhasOwnProperty\u51fd\u6570\u65b9\u6cd5\u8fd4\u56de true\uff0c\u53cd\u4e4b\u5219\u8fd4\u56de false\u3002")))),(0,l.kt)("h3",{id:"8json\u7684\u4e86\u89e3"},"8.JSON\u7684\u4e86\u89e3\uff1f"),(0,l.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u6211\u4eec\u6570\u636e\u7684\u5b58\u50a8\u548c\u4ea4\u6362\uff0c\u5b9a\u4e49\u7684\u4e00\u79cd\u7edf\u4e00\u7684\u5b58\u50a8\u6570\u636e\u7684\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let obj =eval('('+ str +')');\n\nlet obj = JSON.parse(str);\n\nlet last=JSON.stringify(obj);\n")),(0,l.kt)("h3",{id:"9js\u5ef6\u8fdf\u52a0\u8f7d\u7684\u65b9\u5f0f"},"9.js\u5ef6\u8fdf\u52a0\u8f7d\u7684\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f02\u6b65\u52a0\u8f7d\uff08\u53c8\u79f0\u4e3a\u975e\u963b\u585e\u52a0\u8f7d\uff09\uff1a\u7b49\u5f85\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\u518d\u52a0\u8f7d JavaScript \u6587\u4ef6\u3002\u5728\u6d4f\u89c8\u5668\u4e0b\u8f7d\u6267\u884cjs\u7684\u540c\u65f6\uff0c\u8fd8\u4f1a\u7ee7\u7eed\u540e\u7eed\u9875\u9762\u7684\u5904\u7406")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1ajs\u7684\u5ef6\u8fdf\u52a0\u8f7d\u6709\u52a9\u4e0e\u63d0\u9ad8\u9875\u9762\u7684\u52a0\u8f7d\u901f\u5ea6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5355\u6587\u4ef6"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e8b\u4ef6"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"window.onload"),(0,l.kt)("li",{parentName:"ul"},"document.DOMContentLoaded"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"script\u6807\u7b7e\u5199\u5230body\u540e\u9762")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"defer & aysnc -\u5916\u90e8\u5bfc\u5165js\u6587\u4ef6"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"defer:\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"<script>"),"\u5143\u7d20\u4e2d\u8bbe\u7f6e defer \u5c5e\u6027\uff0c\u7b49\u4e8e\u544a\u8bc9\u6d4f\u89c8\u5668\u7acb\u5373\u4e0b\u8f7d\u811a\u672c\uff0c\u4f46\u5ef6\u8fdf\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"aysnc:\u4e0d\u8ba9\u9875\u9762\u7b49\u5f85\u811a\u672c\u4e0b\u8f7d\u548c\u6267\u884c\uff0c\u4ece\u800c",(0,l.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u52a0\u8f7d\u9875\u9762\u5176\u4ed6\u5185\u5bb9")," \u3002"),(0,l.kt)("li",{parentName:"ul"},"defer\u4e0easync\u76f8\u540c\u70b9\uff1a\u90fd\u662f\u91c7\u7528\u7684\u5e76\u884c\u4e0b\u8f7d\uff0c\u4e0b\u8f7d\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u6709\u963b\u585e"),(0,l.kt)("li",{parentName:"ul"},"defer\u4e0easync\u4e0d\u540c\u70b9\uff1a\u4e24\u8005\u7684\u6267\u884c\u65f6\u673a\u4e0d\u540c\u3002async\u52a0\u8f7d\u5b8c\u6210\u540e\u5c31\u4f1a\u81ea\u52a8\u6267\u884c\u4ee3\u7801\uff0c\u4f46\u662fdefer\u9700\u8981\u7b49\u5f85\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u540e\u624d\u4f1a\u6267\u884c\u3002")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'<script defer src="./a.js"><\/script>\n<script defer src="./b.js"><\/script>\n<script defer src="./c.js"><\/script>\n\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528defer\uff0c\u52a0\u8f7d\u811a\u672c\u65f6\u65f6a->b->c,\u90a3\u6267\u884c\u80af\u5b9a\u662f\u6309\u987a\u5e8f\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528aysnc\uff0c\u8c01\u5148\u52a0\u8f7d\u5b8c\u5148\u6267\u884c\uff0c\u6240\u4ee5\u5982\u679c\u591a\u4e2a\u5916\u90e8\u6587\u4ef6\u4e4b\u95f4\u6709\u4f9d\u8d56\uff0c\u90a3\u5c31\u4e0d\u80fd\u4f7f\u7528aysnc")))),(0,l.kt)("h3",{id:"10\u5982\u4f55\u5224\u65ad\u5f53\u524d\u811a\u672c\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u8fd8\u662fnode\u73af\u5883\u4e2d"},"10.\u5982\u4f55\u5224\u65ad\u5f53\u524d\u811a\u672c\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u8fd8\u662fnode\u73af\u5883\u4e2d\uff1f"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668this===window,node\u4e2dthis===global"),(0,l.kt)("h3",{id:"11typeof\u8fd4\u56de\u54ea\u4e9b\u6570\u636e\u7c7b\u578b"},"11.typeof\u8fd4\u56de\u54ea\u4e9b\u6570\u636e\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u539f\u59cb\u503c\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Number:number"),(0,l.kt)("li",{parentName:"ul"},"String:string"),(0,l.kt)("li",{parentName:"ul"},"Boolean:boolean"),(0,l.kt)("li",{parentName:"ul"},"undefined:undefined"),(0,l.kt)("li",{parentName:"ul"},"null:object"))),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function:function"),(0,l.kt)("li",{parentName:"ul"},"Array:object"),(0,l.kt)("li",{parentName:"ul"},"Object:object")))),(0,l.kt)("h3",{id:"12\u4f8b\u4e3e3\u79cd\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u548c2\u79cd\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362"},"12.\u4f8b\u4e3e3\u79cd\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u548c2\u79cd\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362?"),(0,l.kt)("p",null,"->String:xxx.toString(),String()"),(0,l.kt)("p",null,"->Number:parseInt(),parseFloat(),Number()"),(0,l.kt)("p",null,"->Boolean:Boolean()"),(0,l.kt)("p",null,'\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362:!!,xx+"",+-'),(0,l.kt)("h3",{id:"13split-join-\u7684\u533a\u522b"},"13.split() \u3001join() \u7684\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"split()\u662fString\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u5206\u5272\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a\u4f20\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6839\u636e\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5206\u5272\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},"join()\u662fArray\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u5408\u5e76\u6570\u7ec4\u4e2d\u7684\u5185\u5bb9\uff0c\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a\u4f20\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f5c\u4e3a\u8fde\u63a5\u7b26")))),(0,l.kt)("h3",{id:"14\u6570\u7ec4\u65b9\u6cd5pop-push-unshift-shift"},"14.\u6570\u7ec4\u65b9\u6cd5pop() push() unshift() shift()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pop()\u5220\u9664\u6570\u7ec4\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u5e76\u8fd4\u56de"),(0,l.kt)("li",{parentName:"ul"},"push()\u5411\u6570\u7ec4\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\uff0c\u8fd4\u56de\u6570\u7ec4\u957f\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"unshift()\u5411\u6570\u7ec4\u5934\u90e8\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\uff0c\u8fd4\u56de\u6570\u7ec4\u957f\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"shift()\u5220\u9664\u6570\u7ec4\u7b2c\u4e00\u4e2a\u5143\u7d20\u5e76\u8fd4\u56de")),(0,l.kt)("h3",{id:"15\u4e8b\u4ef6\u7ed1\u5b9a\u548c\u666e\u901a\u4e8b\u4ef6\u6709\u4ec0\u4e48\u533a\u522b"},"15.\u4e8b\u4ef6\u7ed1\u5b9a\u548c\u666e\u901a\u4e8b\u4ef6\u6709\u4ec0\u4e48\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u666e\u901a\u6dfb\u52a0\u4e8b\u4ef6\u7684\u65b9\u6cd5\u4e0d\u652f\u6301\u6dfb\u52a0\u591a\u4e2a\u4e8b\u4ef6\uff0c\u6700\u4e0b\u9762\u7684\u4e8b\u4ef6\u4f1a\u8986\u76d6\u4e0a\u9762\u7684\uff0c\u800c\u4e8b\u4ef6\u7ed1\u5b9a\uff08addEventListener\uff09\u65b9\u5f0f\u6dfb\u52a0\u4e8b\u4ef6\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"addEventListener\u4e0d\u517c\u5bb9\u4f4e\u7248\u672cIE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u666e\u901a\u4e8b\u4ef6\u65e0\u6cd5\u53d6\u6d88\uff0c\u4e8b\u4ef6\u7ed1\u5b9a\u53ef\u4ee5\u89e3\u7ed1 ",(0,l.kt)("inlineCode",{parentName:"p"},"removeEventListener(type,listener,useCapture)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"addEventLisntener\u8fd8\u652f\u6301\u4e8b\u4ef6\u5192\u6ce1+\u4e8b\u4ef6\u6355\u83b7"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"target.addEventListener(type, listener, useCapture);\ntype: \u8868\u793a\u76d1\u542c\u4e8b\u4ef6\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u3002\u7c7b\u4f3c\u4e8eclick,mouseover...\nlistener: \u7528\u6765\u76d1\u542c\u5904\u7406\u7684\u51fd\u6570\u65b9\u6cd5\nuseCapture: \u9ed8\u8ba4\u662ffalse,\u4e8b\u4ef6\u5192\u6ce1,\u53ef\u4ee5\u8bbe\u7f6e\u4e3atrue\u4e3a\u4e8b\u4ef6\u6355\u83b7\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_43972992/article/details/114634449?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167456105716800182779095%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167456105716800182779095&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-114634449-null-null.142%5Ev71%5Econtrol,201%5Ev4%5Eadd_ask&utm_term=addeventlistener&spm=1018.2226.3001.4187"},"\u53c2\u8003\u535a\u5ba2")))),(0,l.kt)("h3",{id:"16ie\u548cdom\u4e8b\u4ef6\u6d41\u7684\u533a\u522b"},"16.IE\u548cDOM\u4e8b\u4ef6\u6d41\u7684\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u4ec0\u4e48\u662f"\u4e8b\u4ef6\u6d41"\uff1f\n\u4e8b\u4ef6\u6d41\u63cf\u8ff0\u7684\u662f\u4ece\u9875\u9762\u4e2d\u63a5\u6536\u4e8b\u4ef6\u7684\u987a\u5e8f'),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u6d41\u7684\u79cd\u7c7b\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5192\u6ce1\u6d41(IE\u4e8b\u4ef6\u6d41)\uff1a\u4e8b\u4ef6\u5f00\u59cb\u65f6\u7531\u6700\u5177\u4f53\u7684\u5143\u7d20(\u6587\u6863\u4e2d\u5d4c\u5957\u6700\u6df1\u7684\u90a3\u4e2a\u8282\u70b9)\u63a5\u6536\uff0c\u7136\u540e\u9010\u7ea7\u5411\u4e0a\u4f20\u64ad\u5230\u8f83\u4e3a\u4e0d\u5177\u4f53\u7684\u8282\u70b9(\u6587\u6863)"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u6355\u83b7\u6d41(Netscape\u4e8b\u4ef6\u6d41)\uff1a\u4e0d\u592a\u5177\u4f53\u7684\u8282\u70b9\u6700\u5148\u63a5\u6536\u5230\u4e8b\u4ef6\uff0c\u800c\u6700\u5177\u4f53\u7684\u8282\u70b9\u5e94\u8be5\u6700\u540e\u63a5\u6536\u5230\u4e8b\u4ef6(\u5728\u4e8b\u4ef6\u5230\u8fbe\u9884\u5b9a\u76ee\u6807\u4e4b\u524d\u6355\u83b7\u5230)"),(0,l.kt)("li",{parentName:"ul"},"DOM\u4e8b\u4ef6\u6d41\uff1a\u4e8b\u4ef6\u6d41\u5305\u62ec\u4e09\u4e2a\u9636\u6bb5\uff0c\u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5\uff0c\u5904\u4e8e\u76ee\u6807\u9636\u6bb5\uff0c\u4e8b\u4ef6\u5192\u6ce1\u9636\u6bb5\u3002\u9996\u5148\u53d1\u751f\u7684\u662f\u4e8b\u4ef6\u6355\u83b7\uff0c\u4e3a\u622a\u83b7\u4e8b\u4ef6\u63d0\u4f9b\u4e86\u673a\u4f1a\uff1b\u7136\u540e\u662f\u5b9e\u9645\u7684\u76ee\u6807\u63a5\u6536\u4e8b\u4ef6\uff1b\u6700\u540e\u662f\u5192\u6ce1\u9636\u6bb5\uff0c\u53ef\u4ee5\u5728\u8fd9\u4e2a\u9636\u6bb5\u5bf9\u4e8b\u4ef6\u505a\u51fa\u54cd\u5e94\u3002")))),(0,l.kt)("p",null,"\u533a\u522b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"IE\u548cDOM\u4e8b\u4ef6\u4fa6\u542c\u51fd\u6570\u7684\u533a\u522b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//IE\u4f7f\u7528: \n[Object].attachEvent("name_of_event_handler", fnHandler); //\u7ed1\u5b9a\u51fd\u6570 \n[Object].detachEvent("name_of_event_handler", fnHandler); //\u79fb\u9664\u7ed1\u5b9a \n')),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//DOM\u4f7f\u7528\uff1a \n[Object].addEventListener("name_of_event", fnHandler, bCapture); //\u7ed1\u5b9a\u51fd\u6570 \n[Object].removeEventListener("name_of_event", fnHandler, bCapture); //\u79fb\u9664\u7ed1\u5b9a \n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u53c2\u6570\u4e0d\u4e00\u6837\u548cthis\u6307\u5411\u4e0d\u4e00\u6837")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4e0a\u7684\u4e24\u4e2a\u4e0d\u4e00\u6837\u7684\u4e8b\u4ef6\u4fa6\u542c\u51fd\u6570\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"attachEvent\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1aIE\u4e0b\u5229\u7528attachEvent\u6ce8\u518c\u7684\u5904\u7406\u51fd\u6570\u8c03\u7528\u65f6this\u6307\u5411\u4e0d\u518d\u662f\u5148\u524d\u6ce8\u518c\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u8fd9\u65f6\u7684this\u4e3awindow\u5bf9\u8c61\u4e86"),(0,l.kt)("li",{parentName:"ul"},"addEventListener\u65b9\u6cd5\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5b83\u53ef\u4ee5\u5728\u4e00\u4e2aDOM\u5143\u7d20\u4e0a\u7ed1\u5b9a\u591a\u4e2a\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u5e76\u4e14\u5728\u5904\u7406\u51fd\u6570\u5185\u90e8\uff0cthis\u5173\u952e\u5b57\u4ecd\u7136\u6307\u5411\u88ab\u7ed1\u5b9a\u7684DOM\u5143\u7d20\uff0c\u53e6\u5916\u5904\u7406\u51fd\u6570\u53c2\u6570\u5217\u8868\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u4f20\u9012\u4e8b\u4ef6event\u5bf9\u8c61")))),(0,l.kt)("h3",{id:"17\u5982\u4f55\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u548c\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a"},"17.\u5982\u4f55\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u548c\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"event.stopPropagation() \u505c\u6b62\u4e8b\u4ef6\u7684\u4f20\u5bfc"),(0,l.kt)("li",{parentName:"ul"},"event.preventDefault() \u53d6\u6d88\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4ee3\u66ffreturn false\u90a3\u79cd\u6cd5\u5b50\u3002")),(0,l.kt)("h3",{id:"18windowonload-\u548cdocument-domcontentloaded\u7684\u533a\u522b"},"18.window.onload \u548cdocument DOMContentLoaded\u7684\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4ee3\u7801\u7f16\u5199\u5230window.onload\u7684\u56de\u8c03\u51fd\u6570\u4e2d \uff08\u6240\u6709\u6587\u6863\u52a0\u8f7d\u51fa\u6765\u624d\u6267\u884c\uff0c\u4f8b\u5982\u5185\u8054\u6846\u67b6)"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4ee3\u7801\u7f16\u5199\u5230document\u5bf9\u8c61\u7684DOMContentLoaded\u7684\u56de\u8c03\u51fd\u6570\u4e2d\uff08\u6267\u884c\u65f6\u673a\u66f4\u65e9,\u5f53\u524d\u6587\u6863\u52a0\u8f7d\u51fa\u6765\u5c31\u6267\u884c\uff09")),(0,l.kt)("h3",{id:"19\u548c\u7684\u4e0d\u540c"},"19.==\u548c===\u7684\u4e0d\u540c"),(0,l.kt)("p",null,"\u524d\u8005\u4f1a\u505a\u7c7b\u578b\u8f6c\u6362\uff0c\u540e\u8005\u4e0d\u4f1a"),(0,l.kt)("h3",{id:"20javascript\u662f\u4e00\u95e8\u4ec0\u4e48\u6837\u7684\u8bed\u8a00\u5b83\u6709\u54ea\u4e9b\u7279\u70b9"},"20.JavaScript\u662f\u4e00\u95e8\u4ec0\u4e48\u6837\u7684\u8bed\u8a00\uff0c\u5b83\u6709\u54ea\u4e9b\u7279\u70b9\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u5728\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u4e0a\u7684\u811a\u672c\u8bed\u8a00\u3001\u89e3\u91ca\u6027\u8bed\u8a00")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u7528\u9884\u7f16\u8bd1\uff0c\u76f4\u63a5\u89e3\u6790\u6267\u884c\u4ee3\u7801")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u662f\u5f31\u7c7b\u578b\u8bed\u8a00,\u8f83\u4e3a\u7075\u6d3b,\u57fa\u4e8e\u539f\u578b\u7684\u8bed\u8a00,\u5185\u7f6e\u652f\u6301\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u65e0\u5173\uff0c\u8de8\u5e73\u53f0\u7684\u8bed\u8a00\n\u89e3\u91ca\u5668\u88ab\u79f0\u4e3aJavaScript\u5f15\u64ce\uff0c\u4e3a\u6d4f\u89c8\u5668\u7684\u4e00\u90e8\u5206\uff0c\u5e7f\u6cdb\u7528\u4e8e\u5ba2\u6237\u7aef\u7684\u811a\u672c\u8bed\u8a00\uff0c\u6700\u65e9\u662f\u5728HTML\u7f51\u9875\u4e0a\u4f7f\u7528\uff0c\u7528\u6765\u7ed9HTML\u7f51\u9875\u589e\u52a0\u52a8\u6001\u529f\u80fd\u3002JavaScript\u517c\u5bb9\u4e8eECMA\u6807\u51c6\uff0c\u56e0\u6b64\u4e5f\u79f0\u4e3aECMAScript\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ECMA \u2014 262\u811a\u672c\u8bed\u8a00\u7684\u89c4\u8303\uff1a\u89c4\u8303\u5316\u811a\u672c\u8bed\u8a00\uff0c\u53ebECMAScript"),(0,l.kt)("li",{parentName:"ul"},"\u50cfES5 ES6\u5c31\u662f\u8fd9\u6837\u6765\u7684\uff0c\u4f46\u662fES5 \u3001ES6\u4e0d\u80fd\u5355\u5355\u7684\u770b\u6210\u662f\u4e00\u95e8\u8bed\u8a00\uff0c\u6216\u8005\u8bf4ES*\u662f\u4e00\u79cd\u89c4\u8303\u4e00\u79cd\u6807\u51c6\u3002")),(0,l.kt)("hr",{parentName:"li"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Javascript\u7684\u7279\u70b9\uff1a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b80\u5355\u6027\uff1a\nJavaScript\u662f\u4e00\u79cd\u57fa\u4e8eJava\u57fa\u672c\u8bed\u53e5\u548c\u63a7\u5236\u6d41\u4e4b\u4e0a\u7684\u7b80\u5355\u800c\u7d27\u51d1\u7684\u8bbe\u8ba1\uff0c\u4ece\u800c\u5bf9\u4e8e\u5b66\u4e60Java\u662f\u4e00\u79cd\u975e\u5e38\u597d\u7684\u8fc7\u6e21\u3002\u5b83\u7684\u53d8\u91cf\u7c7b\u578b\u662f\u91c7\u7528\u5f31\u7c7b\u578b\uff0c\u5e76\u672a\u4f7f\u7528\u4e25\u683c\u7684\u6570\u636e\u7c7b\u578b\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u52a8\u6001\u6027\uff1a\nJavaScript\u662f\u52a8\u6001\u7684\uff0c\u5b83\u53ef\u4ee5\u76f4\u63a5\u5bf9\u7528\u6237\u6216\u5ba2\u6237\u8f93\u5165\u505a\u51fa\u54cd\u5e94\uff0c\u65e0\u987b\u7ecf\u8fc7Web\u670d\u52a1\u7a0b\u5e8f\u3002\u5b83\u5bf9\u7528\u6237\u7684\u53cd\u6620\u54cd\u5e94\uff0c\u662f\u91c7\u7528\u4ee5\u4e8b\u4ef6\u9a71\u52a8\u7684\u65b9\u5f0f\u8fdb\u884c\u7684\u3002\u6240\u8c13\u4e8b\u4ef6\u9a71\u52a8\uff0c\u5c31\u662f\u6307\u5728\u4e3b\u9875(Home Page)\u4e2d\u6267\u884c\u4e86\u67d0\u79cd\u64cd\u4f5c\u6240\u4ea7\u751f\u7684\u52a8\u4f5c\uff0c\u5c31\u79f0\u4e3a\u201c\u4e8b\u4ef6\u201d(Event)\u3002\u6bd4\u5982\u6309\u4e0b\u9f20\u6807\u3001\u79fb\u52a8\u7a97\u53e3\u3001\u9009\u62e9\u83dc\u5355\u7b49\u90fd\u53ef\u4ee5\u89c6\u4e3a\u4e8b\u4ef6\u3002\u5f53\u4e8b\u4ef6\u53d1\u751f\u540e\uff0c\u53ef\u80fd\u4f1a\u5f15\u8d77\u76f8\u5e94\u7684\u4e8b\u4ef6\u54cd\u5e94\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8de8\u5e73\u53f0\u6027\uff1a\nJavaScript\u662f\u4f9d\u8d56\u4e8e\u6d4f\u89c8\u5668\u672c\u8eab\uff0c\u4e0e\u64cd\u4f5c\u73af\u5883\u65e0\u5173\uff0c\u53ea\u8981\u80fd\u8fd0\u884c\u6d4f\u89c8\u5668\u7684\u8ba1\u7b97\u673a\uff0c\u5e76\u652f\u6301JavaScript\u7684\u6d4f\u89c8\u5668\u5c31\u53ef\u6b63\u786e\u6267\u884c\u3002\u4ece\u800c\u5b9e\u73b0\u4e86\u201c\u7f16\u5199\u4e00\u6b21,\u8d70\u904d\u5929\u4e0b\u201d\u7684\u68a6\u60f3\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u5168\u6027\uff1a\nJavaScript\u662f\u4e00\u79cd\u5b89\u5168\u6027\u8bed\u8a00\uff0c\u5b83\u4e0d\u5141\u8bb8\u8bbf\u95ee\u672c\u5730\u7684\u786c\u76d8\uff0c\u5e76\u4e0d\u80fd\u5c06\u6570\u636e\u5b58\u5165\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u4e0d\u5141\u8bb8\u5bf9\u7f51\u7edc\u6587\u6863\u8fdb\u884c\u4fee\u6539\u548c\u5220\u9664\uff0c\u53ea\u80fd\u901a\u8fc7\u6d4f\u89c8\u5668\u5b9e\u73b0\u4fe1\u606f\u6d4f\u89c8\u6216\u52a8\u6001\u4ea4\u4e92\u3002\u4ece\u800c\u6709\u6548\u5730\u9632\u6b62\u6570\u636e\u7684\u4e22\u5931\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'var num=10;//num\u662f\u4e00\u4e2a\u6570\u5b57\u7c7b\u578b\nnum="jim";//\u6b64\u65f6num\u53c8\u53d8\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\n//\u6211\u4eec\u628a\u4e00\u4e2a\u53d8\u91cf\u7528\u6765\u4fdd\u5b58\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u7684\u8bed\u8a00\u79f0\u4e4b\u4e3a\u4e00\u4e2a\u52a8\u6001\u8bed\u8a00\uff0c\u6216\u8005\u8bf4\u662f\u4e00\u4e2a\u5f31\u7c7b\u578b\u8bed\u8a00\n//\u9759\u6001\u8bed\u8a00\uff1ac# java c c++\n//\u9759\u6001\u8bed\u8a00\u5728\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u5c31\u5df2\u7ecf\u786e\u5b9a\u4e86\u8fd9\u4e2a\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b\uff0c\nint c;//c\u5c31\u662f\u6574\u6570\u7c7b\u578b\n//\u6211\u4eec\u628a\u8fd9\u79cd\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u5c31\u786e\u5b9a\u4e86\u5b83\u7684\u6570\u636e\u7c7b\u578b\u8fd9\u6837\u7684\u8bed\u8a00\u79f0\u4e4b\u4e3a\u9759\u6001\u8bed\u8a00\uff0c\u4e5f\u79f0\u4e4b\u4e3a\u5f3a\u7c7b\u578b\u8bed\u8a00\n//\u800c\u4e14\u5728\u4efb\u4f55\u65f6\u5019\u90fd\u4e0d\u53ef\u4ee5\u6539\u53d8\u9759\u6001\u8bed\u8a00\u7684\u6570\u636e\u7c7b\u578b\n')))))}s.isMDXComponent=!0}}]);