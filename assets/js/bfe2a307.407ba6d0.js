(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(3),o=(t(0),t(118));const l={title:"helloworld.c"},c={unversionedId:"snippets/helloworld/helloworld-c",id:"snippets/helloworld/helloworld-c",isDocsHomePage:!1,title:"helloworld.c",description:'`c title="helloworld.c"',source:"@site/docs/snippets/helloworld/helloworld-c.mdx",slug:"/snippets/helloworld/helloworld-c",permalink:"/workshop/docs/snippets/helloworld/helloworld-c",version:"current",sidebar:"snippets",previous:{title:"helloworld.py",permalink:"/workshop/docs/snippets/helloworld/helloworld-py"},next:{title:"helloworld.cpp",permalink:"/workshop/docs/snippets/helloworld/helloworld-cpp"}},i=[],a={toc:i};function p({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},a,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c",metastring:'title="helloworld.c"',title:'"helloworld.c"'},'#include <stdio.h>\nint main() {\n   // printf() displays the string inside quotation\n   printf("Hello, World!");\n   return 0;\n}\n')))}p.isMDXComponent=!0},118:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return w}));var n=t(0),o=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,w=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return t?o.a.createElement(w,i(i({ref:r},p),{},{components:t})):o.a.createElement(w,i({ref:r},p))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=f;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);