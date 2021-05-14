(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(91)),o={title:"JavaScript and React/JSX",slug:"/coding-standards/javascript-react"},c={unversionedId:"coding-standards/javascript-react",id:"coding-standards/javascript-react",isDocsHomePage:!1,title:"JavaScript and React/JSX",description:"ESLint",source:"@site/docs/coding-standards/javascript-react.mdx",slug:"/coding-standards/javascript-react",permalink:"/pages/coding-standards/javascript-react",editUrl:"https://github.com/theartofeducation/engineering-docs/docs/coding-standards/javascript-react.mdx",version:"current",sidebar:"docs",previous:{title:"Implementation and Testing Workflow",permalink:"/pages/implementation-testing-workflow"},next:{title:"Python",permalink:"/pages/coding-standards/python"}},l=[{value:"ESLint",id:"eslint",children:[]},{value:"Custom ESLint Config",id:"custom-eslint-config",children:[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Editor Integration",id:"editor-integration",children:[]}]},{value:"JavaScript, the important parts \ud83d\ude0f",id:"javascript-the-important-parts-",children:[{value:"semi",id:"semi",children:[]},{value:"quotes",id:"quotes",children:[]},{value:"complexity",id:"complexity",children:[]}]},{value:"React and JSX",id:"react-and-jsx",children:[{value:"react/jsx-closing-bracket-location",id:"reactjsx-closing-bracket-location",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"eslint"},"ESLint"),Object(r.b)("p",null,"We use ",Object(r.b)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," to perform static analysis and enforce coding standards on all of our JavaScript code. We have created ",Object(r.b)("a",{parentName:"p",href:"https://github.com/theartofeducation/eslint-config"},"our own custom ESLint config")," that ",Object(r.b)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files"},"extends")," the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/google/eslint-config-google"},"Google shareable config"),", which is based on ",Object(r.b)("a",{parentName:"p",href:"https://google.github.io/styleguide/jsguide.html"},"Google's JavaScript style guide"),", and which liberally extends the shareable ",Object(r.b)("a",{parentName:"p",href:"https://github.com/kunalgolani/eslint-config/tree/master/packages/recommended"},"eslint:recommended configuration"),"."),Object(r.b)("p",null,"ESLint has the benefit of providing functionality to both check and enforce our coding standards, but also perform static analysis for certain elements of code quality as well, such as ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cyclomatic_complexity"},"cyclomatic complexity"),". This helps us keep our code quality high, but has the additional benefit of helping us focus the tests we write for our code as well."),Object(r.b)("p",null,"If you wish to see the details of our JavaScript and React coding standards, you are encouraged to review that/those configurations and/or documentation."),Object(r.b)("h2",{id:"custom-eslint-config"},"Custom ESLint Config"),Object(r.b)("p",null,"We strongly recommend (lit: require) the use of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/theartofeducation/eslint-config"},"our custom ESLint configuration")," on all JavaScript/React projects."),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,"With Yarn (recommended):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"yarn add -D eslint @aoeu/eslint-config @babel/eslint-plugin eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-mdx eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testcafe\n")),Object(r.b)("p",null,"Or, with npm:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm install -D eslint @aoeu/eslint-config @babel/eslint-plugin eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-mdx eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testcafe\n")),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"We recommend the creation of an ",Object(r.b)("inlineCode",{parentName:"p"},".eslintrc.js")," file for ",Object(r.b)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/configuration-files"},"configuration")," (for consistency throughout our projects). For simple JavaScript projects, as a baseline, it can be configured like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  extends: [\n    "@aoeu/eslint-config"\n  ]\n}\n')),Object(r.b)("p",null,"For ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," projects:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  extends: [\n    "@aoeu/eslint-config",\n    "@aoeu/eslint-config/react"\n  ]\n}\n')),Object(r.b)("p",null,"And for projects that include tests (which should be ",Object(r.b)("em",{parentName:"p"},"all")," of our projects) (we use ",Object(r.b)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  extends: [\n    "@aoeu/eslint-config",\n    "@aoeu/eslint-config/react",\n    "@aoeu/eslint-config/testing"\n  ]\n}\n')),Object(r.b)("p",null,"The above configuration includes ",Object(r.b)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," and ",Object(r.b)("a",{parentName:"p",href:"https://testcafe.io/"},"TestCafe")," globals, and rules specific to those tools and common issues relevant to test fixtures."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("p",null,"Once you've added the configuration to your project, you can/should add the following task/script to your projects ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file to execute linting:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  "name": "your-project",\n  "scripts": {\n    "eslint": "eslint src testing next.config.js --ext js,jsx"\n  }\n}\n')),Object(r.b)("p",null,"In the above task, ",Object(r.b)("inlineCode",{parentName:"p"},"eslint")," is the command to run, and ",Object(r.b)("inlineCode",{parentName:"p"},"src"),", ",Object(r.b)("inlineCode",{parentName:"p"},"testing")," and ",Object(r.b)("inlineCode",{parentName:"p"},"next.config.js")," are the files and folders that you wish for ESLint to be run in, and the ",Object(r.b)("inlineCode",{parentName:"p"},"--ext")," argument tells ESLint the file extensions to look for to perform linting in."),Object(r.b)("p",null,"This task/script can be run from your terminal/cli with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"yarn run eslint\n")),Object(r.b)("p",null,"And you will/should see the output of the command in your terminal. In our projects, we expect all pull requests (PR) to be submitted with no ESLint errors or warnings, and this should be configured as part of your projects continuous integration workflow run as a GitHub action, to be run each time a change is commited to a PR."),Object(r.b)("h3",{id:"editor-integration"},"Editor Integration"),Object(r.b)("p",null,"Most modern code editors can have ESLint integrated into them such that it is run whenever a change is saved to a file, so you should be warned of ESLint errors and warnings in nearly real-time during the course of your development."),Object(r.b)("p",null,"The following extensions are available for these known editors."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Visual Studio Code: ",Object(r.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint extension")),Object(r.b)("li",{parentName:"ul"},"Sublime Text: ",Object(r.b)("a",{parentName:"li",href:"https://packagecontrol.io/packages/SublimeLinter"},"SublimeLinter")," with the ",Object(r.b)("a",{parentName:"li",href:"https://packagecontrol.io/packages/ESLint"},"ESLint plugin")," and the ",Object(r.b)("a",{parentName:"li",href:"https://packagecontrol.io/packages/SublimeLinter-eslint"},"SublimeLinter-eslint interface"),"."),Object(r.b)("li",{parentName:"ul"},"Vim: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/dgraham/vim-eslint"},"vim-eslint plugin")),Object(r.b)("li",{parentName:"ul"},"JetBrains WebStorm: ",Object(r.b)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/7494-eslint"},"ESLint plugin"))),Object(r.b)("p",null,"Integrations for other editors are available, but those are the most popular ones in use at this time."),Object(r.b)("h2",{id:"javascript-the-important-parts-"},"JavaScript, the important parts \ud83d\ude0f"),Object(r.b)("p",null,"While we like Google's JavaScript style guide as a general baseline, we have defined some of our own customizations to that guide that support our organizational preferences. This section will attempt to outline and highlight the significant distinctions between Google's ESLint config, and our customizations to it, that are the most signficant for you to be aware of."),Object(r.b)("h3",{id:"semi"},Object(r.b)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/semi#require-or-disallow-semicolons-instead-of-asi-semi"},Object(r.b)("inlineCode",{parentName:"a"},"semi"))),Object(r.b)("p",null,"We exclude the use of semicolons at the end of statements in our JavaScript."),Object(r.b)("p",null,"ESLint rule definition:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'"semi": ["error", "never"]\n')),Object(r.b)("h4",{id:"examples"},Object(r.b)("strong",{parentName:"h4"},"Examples")),Object(r.b)("p",null,"Bad:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'const foo = "bar";\n')),Object(r.b)("p",null,"Good:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'const foo = "bar"\n')),Object(r.b)("p",null,"The only possible exception to this rule would be the use of an indexed ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop, in which case we would typically prefer functional alternatives such as the use of ",Object(r.b)("inlineCode",{parentName:"p"},"map")," and/or ",Object(r.b)("inlineCode",{parentName:"p"},"forEach")," functions on ",Object(r.b)("inlineCode",{parentName:"p"},"Array.prototype"),"."),Object(r.b)("h3",{id:"quotes"},Object(r.b)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/quotes"},Object(r.b)("inlineCode",{parentName:"a"},"quotes"))),Object(r.b)("p",null,"We use double-quotes for string literals, with the exception of strings that require double-quotes within the string, in which case we allow the use of backticks for template literals."),Object(r.b)("p",null,"ESLint rule definition:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'"quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }]\n')),Object(r.b)("h4",{id:"examples-1"},Object(r.b)("strong",{parentName:"h4"},"Examples")),Object(r.b)("p",null,"Bad:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"const errMessage = 'Just, don\\'t do it.'\n")),Object(r.b)("p",null,"Good:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'const errMessage = "This is just much better"\n\n// or\n\nconst errMessage = `This is acceptable when you need to "quote something"`\n')),Object(r.b)("h3",{id:"complexity"},Object(r.b)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/complexity"},Object(r.b)("inlineCode",{parentName:"a"},"complexity"))),Object(r.b)("p",null,"The default complexity threshold for this rule set by ESLint is 20. We believe that is too high, and we have customized this rule to allow for a maximum complexity of 10. We feel that if you have written code that exceeds a complexity threshold of 10, that this is an indicator that your code is too complex, and some thought should be put into how it can be broken down and simplified. An effort such as this would have a number of benefits, but one of the primary ones would be making it much more easily tested with automated tests."),Object(r.b)("p",null,"ESLint rule definition:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'"complexity": ["error", { max: 10 }]\n')),Object(r.b)("h4",{id:"examples-2"},Object(r.b)("strong",{parentName:"h4"},"Examples")),Object(r.b)("p",null,"Bad:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const isNumber = input => {\n  if (input === 1) {\n    return true\n  }\n\n  if (input === 2) {\n    return true\n  }\n\n  if (input === 3) {\n    return true\n  }\n\n  if (input === 4) {\n    return true\n  }\n\n  if (input === 5) {\n    return true\n  }\n\n  if (input === 6) {\n    return true\n  }\n\n  if (input === 7) {\n    return true\n  }\n\n  if (input === 8) {\n    return true\n  }\n\n  if (input === 9) {\n    return true\n  }\n\n  if (input === 10) {\n    return true\n  }\n\n  if (input === 11) {\n    return true\n  }\n\n  if (input === 12) {\n    return true\n  }\n}\n")),Object(r.b)("p",null,"Good:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const isNumber = input => {\n  if (input > 0 && input <= 12) {\n    return true\n  }\n}\n")),Object(r.b)("h2",{id:"react-and-jsx"},"React and JSX"),Object(r.b)("p",null,"Our custom React/JSX configuration primarily revolves around accessibility (a11y) rule enforcement and React Hooks best practices, but there are a couple of minor stylistic preferences in there as well. Everything else is enforced by the default/recommended settings of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react"},"eslint-plugin-react"),", ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks"},"eslint-plugin-react-hooks")," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y"},"eslint-plugin-jsx-a11y"),"."),Object(r.b)("h3",{id:"reactjsx-closing-bracket-location"},Object(r.b)("a",{parentName:"h3",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md"},Object(r.b)("inlineCode",{parentName:"a"},"react/jsx-closing-bracket-location"))),Object(r.b)("p",null,"We have this rule set to the ",Object(r.b)("inlineCode",{parentName:"p"},"after-props")," setting."),Object(r.b)("p",null,"ESLint rule definition:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'"react/jsx-closing-bracket-location": ["error", "after-props"]\n')),Object(r.b)("h4",{id:"examples-3"},Object(r.b)("strong",{parentName:"h4"},"Examples")),Object(r.b)("p",null,"Bad:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Hello\n  firstName="John"\n  lastName="Smith"\n/>\n')),Object(r.b)("p",null,"Good:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Hello\n  firstName="John"\n  lastName="Smith" />\n')),Object(r.b)("p",null,'Having this rule in place prevents "orphaned" closing brackets:'),Object(r.b)("p",null,"Bad:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Notice\n  type="info"\n  heading="Hello"\n>\n  <p>World</p>\n</Notice>\n')),Object(r.b)("p",null,"Good:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Notice\n  type="info"\n  heading="Hello">\n  <p>World<p>\n</Notice>\n')))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);