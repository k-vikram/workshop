(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"Highlight",(function(){return g})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(118)),c={title:"Markdown Features"},i={unversionedId:"markdown-features",id:"markdown-features",isDocsHomePage:!1,title:"Markdown Features",description:"Docusaurus supports the Markdown syntax and has some additional features.",source:"@site/docs/markdown-features.mdx",slug:"/markdown-features",permalink:"/docs/markdown-features",version:"current",sidebar:"docs",previous:{title:"Use cases",permalink:"/docs/use-cases"},next:{title:"Markdown Features",permalink:"/docs/markdown-features"}},s=[{value:"Front Matter",id:"front-matter",children:[]},{value:"Markdown links",id:"markdown-links",children:[]},{value:"Markdown images",id:"markdown-images",children:[]},{value:"Code Blocks",id:"code-blocks",children:[]},{value:"Admonitions",id:"admonitions",children:[]},{value:"React components",id:"react-components",children:[]}],g=function(e){var t=e.children,n=e.color;return Object(r.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:s,Highlight:g};function l(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Docusaurus supports the ",Object(r.b)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown")," syntax and has some additional features."),Object(r.b)("h2",{id:"front-matter"},"Front Matter"),Object(r.b)("p",null,"Markdown documents can have associated metadata at the top called ",Object(r.b)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"---\nid: my-doc\ntitle: My document title\ndescription: My document description\nsidebar_label: My doc\n---\n\nMarkdown content\n")),Object(r.b)("h2",{id:"markdown-links"},"Markdown links"),Object(r.b)("p",null,"Regular Markdown links are supported using url paths or relative file paths."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/use-cases).\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./use-cases.mdx).\n")),Object(r.b)("p",null,"Let's see how to ",Object(r.b)("a",{parentName:"p",href:"./use-cases"},"Create a page"),"."),Object(r.b)("h2",{id:"markdown-images"},"Markdown images"),Object(r.b)("p",null,"Regular Markdown images are supported."),Object(r.b)("p",null,"Add an image at ",Object(r.b)("inlineCode",{parentName:"p"},"static/img/logo.svg")," and use this Markdown declaration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"![Amorphic logo](/img/core/logo.svg)\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Amorphic logo",src:n(125).default})),Object(r.b)("h2",{id:"code-blocks"},"Code Blocks"),Object(r.b)("p",null,"Markdown code blocks are supported with Syntax highlighting."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),Object(r.b)("h2",{id:"admonitions"},"Admonitions"),Object(r.b)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},":::note\n\n  The content and title *can* include markdown.\n\n  :::\n\n  :::tip You can specify an optional title\n\n  Heads up! Here's a pro-tip.\n\n  :::\n\n  :::info\n\n  Useful information.\n\n  :::\n\n  :::caution\n\n  Warning! You better pay attention!\n\n  :::\n\n  :::danger\n\n  Danger danger, mayday!\n\n  :::\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The content and title ",Object(r.b)("em",{parentName:"p"},"can")," include markdown."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You can specify an optional title")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Heads up! Here's a pro-tip."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Useful information."))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Warning! You better pay attention!"))),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Danger danger, mayday!"))),Object(r.b)("h2",{id:"react-components"},"React components"),Object(r.b)("p",null,"Thanks to ",Object(r.b)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),", you can make your doc more interactive and use React components inside Markdown:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: 'red',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n")),Object(r.b)(g,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(r.b)(g,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.")}l.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=o.a.createContext({}),d=function(e){var t=o.a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(g.Provider,{value:t},e.children)},M={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),l=d(n),b=a,m=l["".concat(c,".").concat(b)]||l[b]||M[b]||r;return n?o.a.createElement(m,i(i({ref:t},g),{},{components:n})):o.a.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var g=2;g<r;g++)c[g]=n[g];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";n.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTkwLjAwMDAwMHB0IiBoZWlnaHQ9IjE0NC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDE5MC4wMDAwMDAgMTQ0LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTQ0LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzA5NjFiYyIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTg3MyAxMjk5IGMtNTAgLTI0IC0xMDMgLTgxIC0xMzQgLTE0MSAtMTIgLTI0IC02MiAtMTM5IC0xMTAgLTI1NwotNDkgLTExNyAtOTEgLTIxNiAtOTQgLTIxOSAtMyAtMyAtNTcgMTYgLTEyMCA0MSAtMTM2IDU2IC0xNzUgNTkgLTIxNiAxOCAtNDEKLTQyIC0zOCAtNzcgMjYgLTMwMyA2NiAtMjMxIDcxIC0yNDUgMTAyIC0yNjUgMzIgLTIxIDEwMCAtMTkgMTI1IDQgMzAgMjcgNDAKNTAgMjIzIDQ5OCA5MSAyMjYgMTc3IDQyOSAxOTAgNDUxIDUwIDg1IDE0MSA5MyAyMDMgMTggMTcgLTIwIDU3IC05NyA5MCAtMTcyCjU4IC0xMzIgNjIgLTEzNyA5MSAtMTM3IDE3IDAgNDAgLTEwIDU1IC0yNCAzNiAtMzQgNTcgLTIzIDQ1IDI3IC0xNCA2NSAtMTQ2CjM0MSAtMTg1IDM4OSAtNzEgODcgLTE5OCAxMTggLTI5MSA3MnogbS00MjggLTcyMyBjMTkgLTggMzUgLTIxIDM1IC0yOCAwIC04Ci0xNSAtNDkgLTMzIC05MyAtMTkgLTQ0IC0zNyAtODkgLTQxIC05OSAtNCAtMTIgLTEwIC0xNiAtMTYgLTEwIC0xMiAxMiAtODkKMjcyIC04MyAyNzggNSA0IDQ3IC0xMCAxMzggLTQ4eiIvPgo8cGF0aCBkPSJNMTQwMiA4NTcgYy02IC02IC0xMiAtMjggLTE0IC00NyAtMiAtMjUgLTEwIC0zOCAtMjkgLTQ5IC0yOCAtMTYKLTI4IC0xNiAtOTUgMzQgLTEwIDcgLTI0IDAgLTUxIC0yNyBsLTM2IC0zNyAyNiAtMzUgYzE1IC0xOSAyNyAtNDIgMjcgLTUwIDAKLTI1IC0zNyAtNTYgLTY4IC01NiAtMzggMCAtNTIgLTE3IC01MiAtNjIgMCAtNDEgMTkgLTU4IDYzIC01OCAyNyAwIDU3IC0yOAo1NyAtNTMgMCAtOCAtMTIgLTMwIC0yNiAtNDcgbC0yNyAtMzEgMjAgLTI2IGMyOSAtNDAgNTAgLTUwIDcxIC0zNSA0MSAyOSA2MwozNiA5MCAyNiAxOCAtNiAyOCAtMTggMzAgLTM0IDcgLTY4IDkgLTcwIDYyIC03MCA1MyAwIDU1IDIgNjIgNzAgMiAxNiAxMiAyOAozMCAzNCAyNyAxMCA0OSAzIDkwIC0yNiAyMSAtMTUgNDIgLTUgNzEgMzUgbDIwIDI2IC0yNyAzMSBjLTE0IDE3IC0yNiAzOSAtMjYKNDkgMCAyNSAzMiA1MSA2MSA1MSA0MSAwIDUwIDEzIDQ3IDY2IC0zIDQ4IC0zIDQ5IC00MiA1NSAtNjYgMTEgLTc5IDQ5IC0zNQoxMDkgbDIzIDMwIC0zNCAzNSBjLTM5IDQwIC01MCA0MyAtNzUgMTUgLTIwIC0yMiAtNzQgLTI3IC05MyAtOCAtNyA3IC0xMiAyNgotMTIgNDMgMCAxNyAtNSAzNiAtMTIgNDMgLTE2IDE2IC04MyAxNSAtOTYgLTF6IG0xMzIgLTE4NiBjNDcgLTI2IDY5IC02NSA3NAotMTI4IDMgLTQ4IDAgLTY0IC0yMCAtOTIgLTM5IC01OCAtNzIgLTc2IC0xMzggLTc2IC02MyAwIC05NSAxNiAtMTMzIDY3IC0yNQozMyAtMzMgMTA1IC0xNyAxNTIgMjggODcgMTQ3IDEyNiAyMzQgNzd6Ii8+CjxwYXRoIGQ9Ik0xNDIwIDY1MyBjLTU5IC0xOCAtOTQgLTYxIC03OSAtOTggNCAtMTEgOCAtMzkgOCAtNjMgMSAtMzcgNSAtNDUKMzQgLTYyIDUzIC0zMiA3NCAtMjcgODggMjIgMTkgNzMgLTE2IDIxMiAtNTEgMjAxeiIvPgo8cGF0aCBkPSJNNzUxIDUxNyBjLTUgLTEyIC0xNSAtMzggLTI0IC01OCBsLTE1IC0zNyAzNiAtMTQgYzIxIC05IDExNiAtNDcKMjEyIC04NiA5NiAtMzkgMTkzIC03NCAyMTUgLTc4IGw0MCAtNyAtMzQgMzggYy0yNiAzMCAtMzIgNDQgLTI5IDcxIGw0IDMzCi0xOTkgODAgYy0xOTQgNzggLTE5OCA3OSAtMjA2IDU4eiIvPgo8L2c+Cjwvc3ZnPgo="}}]);