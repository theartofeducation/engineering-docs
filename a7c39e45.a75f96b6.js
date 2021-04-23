(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),r=(n(0),n(91)),o={id:"commit-format",slug:"/source-control/commit-format",title:"Git Commit Formatting"},c={unversionedId:"source-control/commit-format",id:"source-control/commit-format",isDocsHomePage:!1,title:"Git Commit Formatting",description:"For all of our JavaScript/UI projects/repositories, we are using commitlint, combined with Husky commit-msg hooks to ensure that our git commits are properly formatted. We do this to help ensure a clean, consistent history of commits in our repositories, and because it can help us to automate the process of generating CHANGELOG.md files and incrementing package versions (using the Semantic Versioning (semver) standard) in a consistent and repeatable manner using tools like Conventional Changelog, Standard Version and semantic-release.",source:"@site/docs/source-control/commit-format.mdx",slug:"/source-control/commit-format",permalink:"/pages/source-control/commit-format",editUrl:"https://github.com/theartofeducation/engineering-docs/docs/source-control/commit-format.mdx",version:"current",sidebar:"docs",previous:{title:"Git Verified Commits",permalink:"/pages/source-control/verified-commits"},next:{title:"Tagging, Releasing and Publishing",permalink:"/pages/source-control/tag-release-publish"}},l=[{value:"Examples",id:"examples",children:[{value:"Good",id:"good",children:[]},{value:"Bad",id:"bad",children:[]}]},{value:"GitMojis",id:"gitmojis",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For all of our JavaScript/UI projects/repositories, we are using ",Object(r.b)("a",{parentName:"p",href:"https://commitlint.js.org/"},"commitlint"),", combined with ",Object(r.b)("a",{parentName:"p",href:"https://typicode.github.io/husky"},"Husky")," ",Object(r.b)("inlineCode",{parentName:"p"},"commit-msg")," hooks to ensure that our git commits are properly formatted. We do this to help ensure a clean, consistent history of commits in our repositories, and because it can help us to automate the process of generating ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG.md")," files and incrementing package versions (using the ",Object(r.b)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning (semver) standard"),") in a consistent and repeatable manner using tools like ",Object(r.b)("a",{parentName:"p",href:"https://github.com/conventional-changelog/conventional-changelog"},"Conventional Changelog"),", ",Object(r.b)("a",{parentName:"p",href:"https://github.com/conventional-changelog/standard-version"},"Standard Version")," and ",Object(r.b)("a",{parentName:"p",href:"https://semantic-release.gitbook.io/"},"semantic-release"),"."),Object(r.b)("p",null,"Commitlint expects git commit messages to be formatted in a specific manner based on known conventions that tools like Conventional Changelog and Standard Version can use for determining things like how to format the output of updates to ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG")," files, and how to apply a version update to the project/package. We use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional"},"the conventional commitlint configuration")," which supports the following commit message prefixes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"build")," - changes that impact the build process"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ci")," - changes that impact the continuous integration process"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"chore")," - general house-keeping type chores"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs")," - documentation additions and updates"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"feature")," - new features"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fix")," - bug fixes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"perf")," - performance enhancements"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"refactor")," - changes that refactor existing code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"revert")," - reverts to previous commits"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"style")," - styling (Sass/CSS) changes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"test")," - unit/integration testing changes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"wip")," - work in progress commits")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"good"},"Good"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"feature: added a new component\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"test(ch123): added unit tests for some functionality\n")),Object(r.b)("p",null,'\u261d\ud83c\udffc In this example, "ch123" is a reference to a Story/Card in ',Object(r.b)("a",{parentName:"p",href:"https://app.clubhouse.io/aoeu-se"},"Clubhouse"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"fix(sis): fixes ch456\n")),Object(r.b)("p",null,'\u261d\ud83c\udffc In this example, after the "type" prefix, you can include, in parentheses, a reference to a specific feature or portion of the app, in this case, "sis". There are no specific rules to what can be put in the parentheses in cases like this.'),Object(r.b)("h3",{id:"bad"},"Bad"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Added a new component\n")),Object(r.b)("p",null,'\u261d\ud83c\udffc This commit message is missing a "type" prefix'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"please work\n")),Object(r.b)("p",null,"\u261d\ud83c\udffc This is not only improperly formatted, but also not helpful"),Object(r.b)("h2",{id:"gitmojis"},"GitMojis"),Object(r.b)("p",null,"If you feel like having a little fun with your commit messages, you can add emojis to them with the following codes that correspond to the commit type prefixes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\udd28 ",Object(r.b)("inlineCode",{parentName:"li"},"build")," - ",Object(r.b)("inlineCode",{parentName:"li"},":hammer:")),Object(r.b)("li",{parentName:"ul"},"\u267b\ufe0f ",Object(r.b)("inlineCode",{parentName:"li"},"ci")," - ",Object(r.b)("inlineCode",{parentName:"li"},":recycle:")),Object(r.b)("li",{parentName:"ul"},"\u2611\ufe0f ",Object(r.b)("inlineCode",{parentName:"li"},"chore")," - ",Object(r.b)("inlineCode",{parentName:"li"},":white_check_mark:")),Object(r.b)("li",{parentName:"ul"},"\ud83d\udcdd ",Object(r.b)("inlineCode",{parentName:"li"},"docs")," - ",Object(r.b)("inlineCode",{parentName:"li"},":pencil:")),Object(r.b)("li",{parentName:"ul"},"\u2728 ",Object(r.b)("inlineCode",{parentName:"li"},"feature")," - ",Object(r.b)("inlineCode",{parentName:"li"},":sparkles:")),Object(r.b)("li",{parentName:"ul"},"\ud83d\udc1b ",Object(r.b)("inlineCode",{parentName:"li"},"fix")," - ",Object(r.b)("inlineCode",{parentName:"li"},":bug:")),Object(r.b)("li",{parentName:"ul"},"\u26a1\ufe0f ",Object(r.b)("inlineCode",{parentName:"li"},"perf")," - ",Object(r.b)("inlineCode",{parentName:"li"},":zap:")),Object(r.b)("li",{parentName:"ul"},"\ud83d\udd27",Object(r.b)("inlineCode",{parentName:"li"},"refactor")," - ",Object(r.b)("inlineCode",{parentName:"li"},":wrench:")),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude48 ",Object(r.b)("inlineCode",{parentName:"li"},"revert")," - ",Object(r.b)("inlineCode",{parentName:"li"},":see_no_evil:")),Object(r.b)("li",{parentName:"ul"},"\ud83c\udfa8 ",Object(r.b)("inlineCode",{parentName:"li"},"style")," - ",Object(r.b)("inlineCode",{parentName:"li"},":art:")),Object(r.b)("li",{parentName:"ul"},"\u2705 ",Object(r.b)("inlineCode",{parentName:"li"},"test")," - ",Object(r.b)("inlineCode",{parentName:"li"},":white_check_mark:")),Object(r.b)("li",{parentName:"ul"},"\ud83d\udea7 ",Object(r.b)("inlineCode",{parentName:"li"},"wip")," - ",Object(r.b)("inlineCode",{parentName:"li"},":construction:"))),Object(r.b)("p",null,"An example commit message using this would look like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'git commit -m "docs: :pencil: updated README"\n')),Object(r.b)("p",null,"Go on, have a little fun with it, you know you want to. \ud83d\ude06 ",Object(r.b)("a",{parentName:"p",href:"https://gitmoji.carloscuesta.me/"},"More GitMojis can be found here"),"."))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,d=m["".concat(o,".").concat(u)]||m[u]||b[u]||r;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);