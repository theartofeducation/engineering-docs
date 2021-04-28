(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(91)),c={title:"Python",slug:"/coding-standards/python"},i={unversionedId:"coding-standards/python",id:"coding-standards/python",isDocsHomePage:!1,title:"Python",description:"For our Python code, we use a collection of community tools to help enforce code style and standards to keep our code consistent.",source:"@site/docs/coding-standards/python.mdx",slug:"/coding-standards/python",permalink:"/pages/coding-standards/python",editUrl:"https://github.com/theartofeducation/engineering-docs/docs/coding-standards/python.mdx",version:"current",sidebar:"docs",previous:{title:"JavaScript and React/JSX",permalink:"/pages/coding-standards/javascript-react"},next:{title:"Go",permalink:"/pages/coding-standards/go"}},p=[{value:"Black",id:"black",children:[]},{value:"Pylint",id:"pylint",children:[]},{value:"Flake8",id:"flake8",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For our Python code, we use a collection of community tools to help enforce code style and standards to keep our code consistent."),Object(a.b)("h2",{id:"black"},"Black"),Object(a.b)("p",null,"We use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/psf/black"},"Black"),", which is maintained and provided by the Python Software Foundation, as our ",Object(a.b)("strong",{parentName:"p"},"code formatter"),". Documentation for Black can be found on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/psf/black"},"it's GitHub repository"),", and ",Object(a.b)("a",{parentName:"p",href:"https://black.readthedocs.io/"},"the public documentation site")," for the tool."),Object(a.b)("h2",{id:"pylint"},"Pylint"),Object(a.b)("p",null,"We use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/PyCQA/pylint"},"Pylint")," for ",Object(a.b)("strong",{parentName:"p"},"static analysis")," of our code to help ensure that our code remains consistent and high quality. Documentation for Pylint can be found on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/PyCQA/pylint"},"it's GitHub repository")," and ",Object(a.b)("a",{parentName:"p",href:"https://pylint.pycqa.org/"},"the public documentation site")," for the tool."),Object(a.b)("h2",{id:"flake8"},"Flake8"),Object(a.b)("p",null,"Under the hood, Pylint uses ",Object(a.b)("a",{parentName:"p",href:"https://github.com/PyCQA/flake8"},"Flake8")," for checking coding style and quality."))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);