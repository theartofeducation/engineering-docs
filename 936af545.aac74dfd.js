(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(91)),i={slug:"/best-practices/documentation",title:"Documentation"},c={unversionedId:"best-practices/documentation",id:"best-practices/documentation",isDocsHomePage:!1,title:"Documentation",description:"Documentation isn\u2019t for yourself or your current team members. It is for the future developers that were not there when you first wrote the code. Documentation should reflect the engineering of the solution, not the code itself.",source:"@site/docs/best-practices/documentation.md",slug:"/best-practices/documentation",permalink:"/pages/best-practices/documentation",editUrl:"https://github.com/theartofeducation/engineering-docs/docs/best-practices/documentation.md",version:"current",sidebar:"docs",previous:{title:"Accessibility (a11y)",permalink:"/pages/best-practices/accessibility"},next:{title:"Internationalization (i18n)",permalink:"/pages/best-practices/internationalization"}},u=[],l={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Documentation isn\u2019t for yourself or your current team members. It is for the future developers that were not there when you first wrote the code. Documentation should reflect the engineering of the solution, not the code itself."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Code should be \u201cself-documenting\u201d; use descriptive names and break code into logical blocks"),Object(o.b)("li",{parentName:"ul"},"Add comments for \u201cwhy you did something\u201d not \u201cwhat you did\u201d when needed"),Object(o.b)("li",{parentName:"ul"},"Public APIs should include DocBlocks for automatic documentation generation"),Object(o.b)("li",{parentName:"ul"},"Create and maintain Product Documentation for end-users",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Not technical documentation"),Object(o.b)("li",{parentName:"ul"},"Lists features and how to use them"))),Object(o.b)("li",{parentName:"ul"},"Create and maintain a Technical Design Logbook",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Explain how and why we chose each solution"),Object(o.b)("li",{parentName:"ul"},"The document should be added to each repository as a Markdown file"))),Object(o.b)("li",{parentName:"ul"},"Create and maintain Technical Schemas",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Database schemas",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Entity Relationship Diagrams"))),Object(o.b)("li",{parentName:"ul"},"Architecture schemas",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Explains how different parts interact together"))),Object(o.b)("li",{parentName:"ul"},"Sequence Diagrams",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Displays successive stages of a workflow")))))))}s.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);