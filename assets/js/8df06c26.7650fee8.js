(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{118:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),s=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},y=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),y=n,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||l;return t?o.a.createElement(f,i(i({ref:r},c),{},{components:t})):o.a.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=y;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<l;c++)p[c]=t[c];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},95:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return a})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),l=(t(0),t(118)),p={title:"helloworld.py"},i={unversionedId:"snippets/helloworld/helloworld-py",id:"snippets/helloworld/helloworld-py",isDocsHomePage:!1,title:"helloworld.py",description:'`python title="helloworld.py"',source:"@site/docs/snippets/helloworld/helloworld-py.mdx",slug:"/snippets/helloworld/helloworld-py",permalink:"/workshop/docs/snippets/helloworld/helloworld-py",version:"current",sidebar:"snippets",previous:{title:"Snippets",permalink:"/workshop/docs/snippets"},next:{title:"helloworld.c",permalink:"/workshop/docs/snippets/helloworld/helloworld-c"}},a=[],c={toc:a};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:'title="helloworld.py"',title:'"helloworld.py"'},'# This program prints Hello, world!\nprint("This line will be printed.")\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:'title="helloworld.py"',title:'"helloworld.py"'},'# This program prints Hello, world!\nmy_string = "Hello, World!"\nprint(my_string)\n')))}s.isMDXComponent=!0}}]);