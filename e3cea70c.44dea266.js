(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),o=(n(0),n(92)),l={id:"software-development-lifecycle",title:"Software Development Lifecycle"},i={unversionedId:"software-development-lifecycle",id:"software-development-lifecycle",isDocsHomePage:!1,title:"Software Development Lifecycle",description:"In general, an engineer should have a WIP (work in progress) limit of 1 story at a time (In Development through Complete). The engineer claims ownership of that story through the entire development cycle.",source:"@site/docs/software-development-lifecycle.mdx",slug:"/software-development-lifecycle",permalink:"/pages/software-development-lifecycle",editUrl:"https://github.com/theartofeducation/engineering-docs/docs/software-development-lifecycle.mdx",version:"current",sidebar:"docs",previous:{title:"Technology Stack",permalink:"/pages/technology-stack"},next:{title:"Policies & Procedures",permalink:"/pages/policies-and-procedures"}},c=[],b={rightToc:c};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In general, an engineer should have a WIP (work in progress) limit of 1 story at a time (",Object(o.b)("strong",{parentName:"p"},"In Development")," through ",Object(o.b)("strong",{parentName:"p"},"Complete"),"). The engineer claims ownership of that story through the entire development cycle."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Library projects do not have a ",Object(o.b)("inlineCode",{parentName:"p"},"develop")," branch and feature branches will be merged directly into ",Object(o.b)("inlineCode",{parentName:"p"},"main"),". This breaks the automation in ",Object(o.b)("a",{parentName:"p",href:"https://shortcut.com/"},"Shortcut")," and those cards will need to be moved manually.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Backlog",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This is the default column"),Object(o.b)("li",{parentName:"ul"},"Stories that need more information or planning before development work will be added or moved here"),Object(o.b)("li",{parentName:"ul"},"When a story has been deemed ready it will be moved to ",Object(o.b)("strong",{parentName:"li"},"Ready For Development")))),Object(o.b)("li",{parentName:"ol"},"Ready For Development",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These are stories that are ready to be worked on by engineering"),Object(o.b)("li",{parentName:"ul"},"All stories in this state should have story points"),Object(o.b)("li",{parentName:"ul"},"When an engineer is ready for a new story they will take one from this column and assign it to the current iteration"),Object(o.b)("li",{parentName:"ul"},"Creating a Git branch referencing the story ID will automatically move the story to the ",Object(o.b)("strong",{parentName:"li"},"In Development")," column"))),Object(o.b)("li",{parentName:"ol"},"In Development",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These are stories that are actively being worked on by an engineer"),Object(o.b)("li",{parentName:"ul"},"An engineer should normally have no more than 1 story in this column at a time"))),Object(o.b)("li",{parentName:"ol"},"QA Ready",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Once an engineer has finished work on a story it is moved to the QA Ready column"),Object(o.b)("li",{parentName:"ul"},"The engineer opens a Pull Request from their feature branch into ",Object(o.b)("inlineCode",{parentName:"li"},"develop"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This will move the card from ",Object(o.b)("strong",{parentName:"li"},"In Development")," to ",Object(o.b)("strong",{parentName:"li"},"QA Ready")))),Object(o.b)("li",{parentName:"ul"},"If a card has the ",Object(o.b)("strong",{parentName:"li"},"No QA")," label it is manually moved directly to ",Object(o.b)("strong",{parentName:"li"},"QA Done")))),Object(o.b)("li",{parentName:"ol"},"QA Testing",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"When a QA engineer starts testing a story, they will move the card to this column"),Object(o.b)("li",{parentName:"ul"},"The QA engineer will manually test the story"),Object(o.b)("li",{parentName:"ul"},"The QA engineer will write automated tests for the story",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A branch with the same name as the feature branch will be created in the QA E2E repo"))),Object(o.b)("li",{parentName:"ul"},"If QA finds issues they will add them to the story and move the card to the ",Object(o.b)("strong",{parentName:"li"},"Rejected")," column"),Object(o.b)("li",{parentName:"ul"},"Once there are no issues related to the story and automated tests are complete, QA moves the card to the ",Object(o.b)("strong",{parentName:"li"},"QA Done")," column"))),Object(o.b)("li",{parentName:"ol"},"QA Done",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Cards in this column have passed QA and have automated tests written for it"),Object(o.b)("li",{parentName:"ul"},"Once the Pull Request has approval from QA and the other requested developers it is merged into ",Object(o.b)("inlineCode",{parentName:"li"},"develop")," and automatically moved to the ",Object(o.b)("strong",{parentName:"li"},"Acceptance")," column"))),Object(o.b)("li",{parentName:"ol"},"Acceptance",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"When a working branch is merged into ",Object(o.b)("inlineCode",{parentName:"li"},"develop")," a build will start for an acceptance server"),Object(o.b)("li",{parentName:"ul"},"The Product Team will evaluate stories in this column to ensure the implementation meets the requirements"),Object(o.b)("li",{parentName:"ul"},"If a story does not meet the requirements Product will move the card to ",Object(o.b)("strong",{parentName:"li"},"Rejected")," and add details"),Object(o.b)("li",{parentName:"ul"},"Once a story meets the requirements, Product will move the card to ",Object(o.b)("strong",{parentName:"li"},"Accepted")," to indicate it is ready for production release"),Object(o.b)("li",{parentName:"ul"},"If a card has the ",Object(o.b)("strong",{parentName:"li"},"No ACC")," label it is manually moved directly to ",Object(o.b)("strong",{parentName:"li"},"Accepted")))),Object(o.b)("li",{parentName:"ol"},"Accepted",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These cards have been identified by the Product Team as ready for production release"),Object(o.b)("li",{parentName:"ul"},"The responsible engineer will open a Pull Request to merge ",Object(o.b)("inlineCode",{parentName:"li"},"develop")," into ",Object(o.b)("inlineCode",{parentName:"li"},"main")),Object(o.b)("li",{parentName:"ul"},"Once the Pull Request has the required approvals, the engineer will merge the request and start a production build"),Object(o.b)("li",{parentName:"ul"},"Once the story has been merged into ",Object(o.b)("inlineCode",{parentName:"li"},"main"),", it is automatically moved to the ",Object(o.b)("strong",{parentName:"li"},"Completed")," column"))),Object(o.b)("li",{parentName:"ol"},"Rejected",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These cards have been identified by QA or the Product Team as not meeting the story requirements"),Object(o.b)("li",{parentName:"ul"},"The responsible engineer will move the card back into the ",Object(o.b)("strong",{parentName:"li"},"In Development")," column and address the identified issues"),Object(o.b)("li",{parentName:"ul"},"The story follows the normal cycle starting from the ",Object(o.b)("strong",{parentName:"li"},"In Development")," column"))),Object(o.b)("li",{parentName:"ol"},"Complete",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These cards are completed stories that have been pushed to production")))))}m.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),m=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,d=s["".concat(l,".").concat(u)]||s[u]||p[u]||o;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);