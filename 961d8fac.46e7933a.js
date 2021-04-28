(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(91)),i={title:"Go",slug:"/coding-standards/go"},c={unversionedId:"coding-standards/go",id:"coding-standards/go",isDocsHomePage:!1,title:"Go",description:"Built-In Tools",source:"@site/docs/coding-standards/go.mdx",slug:"/coding-standards/go",permalink:"/pages/coding-standards/go",editUrl:"https://github.com/theartofeducation/engineering-docs/docs/coding-standards/go.mdx",version:"current",sidebar:"docs",previous:{title:"Python",permalink:"/pages/coding-standards/python"},next:{title:"Infrastructure",permalink:"/pages/infrastructure"}},l=[{value:"Built-In Tools",id:"built-in-tools",children:[]},{value:"Effective Go",id:"effective-go",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"built-in-tools"},"Built-In Tools"),Object(a.b)("p",null,"Go has tools that are built-in to the platform to handle things like code formatting structure and static analysis for code best practices. The following built-in tools are used for this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pkg.go.dev/golang.org/x/tools/cmd/goimports"},"goimports")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://golang.org/cmd/gofmt/"},"gofmt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/golang/lint"},"golint")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://golang.org/cmd/vet/"},"govet"))),Object(a.b)("h2",{id:"effective-go"},"Effective Go"),Object(a.b)("p",null,"We also use ",Object(a.b)("a",{parentName:"p",href:"https://golang.org/doc/effective_go"},"Effective Go")," as a general guide for best practices in our Go code. We strongly encourage our developers to get familiar with the concepts promoted in this document, and put them to practice in their code."))}u.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,g=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);