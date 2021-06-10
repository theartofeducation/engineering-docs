(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{132:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/verified-commit-f7bd6fb43b69740b41107b4e8afe26b3.png"},133:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/verified-commits-gpg-suite-new-0ca6b708991a4e724dfe99b1c805c093.png"},134:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/verified-commits-gpg-suite-new-key-pair-dialog-01620cb6f151277a514d894be882ae38.png"},135:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/verified-commits-gpg-suite-view-key-details-07ce4dd6967c3bc3b69ab6d20b13a531.png"},136:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/verified-commits-gpg-suite-key-details-dialog-2b4b03676c10fccb2b5c19099facd95a.png"},137:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/verified-commits-testing-github-commit-4029e750304a823813d7f8a0673f7799.png"},77:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return l}));var o=i(2),n=i(6),a=(i(0),i(90)),r={id:"verified-commits",slug:"/source-control/verified-commits",title:"Git Verified Commits"},c={unversionedId:"source-control/verified-commits",id:"source-control/verified-commits",isDocsHomePage:!1,title:"Git Verified Commits",description:"By default, the identity of the author of a commit in a GitHub repository is provided by nothing more the local git configuration. This reality makes it very easy to change your local git configuration to use and apply the identity information of another individual (whatever name and email address you wish to configure locally) to change the information associated with a commit(s) in a git repository.",source:"@site/docs/source-control/verified-commits.mdx",slug:"/source-control/verified-commits",permalink:"/pages/source-control/verified-commits",editUrl:"https://github.com/theartofeducation/engineering-docs/docs/source-control/verified-commits.mdx",version:"current",sidebar:"docs",previous:{title:"Code Reviews",permalink:"/pages/source-control/code-reviews"},next:{title:"Git Commit Formatting",permalink:"/pages/source-control/commit-format"}},s=[{value:"Configuring Verified Commits",id:"configuring-verified-commits",children:[{value:"Generate a new GPG key",id:"generate-a-new-gpg-key",children:[]},{value:"Configure git to use GPG to sign your commits",id:"configure-git-to-use-gpg-to-sign-your-commits",children:[]},{value:"Add your public key to GitHub",id:"add-your-public-key-to-github",children:[]},{value:"Updating your MacOS keychain and testing",id:"updating-your-macos-keychain-and-testing",children:[]}]},{value:"Additional Info",id:"additional-info",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, the identity of the author of a commit in a GitHub repository is provided by nothing more the local git configuration. This reality makes it very easy to change your local git configuration to use and apply the identity information of another individual (whatever name and email address you wish to configure locally) to change the information associated with a commit(s) in a git repository."),Object(a.b)("p",null,"It is for this reason that ",Object(a.b)("strong",{parentName:"p"},"we require the configuration and use of signed/verified commits in all of our git repositories"),". This means that, if a repository on GitHub is configured correctly, when you attempt to push commits to it that ",Object(a.b)("em",{parentName:"p"},"are not signed"),", GitHub will reject your commits, and the push attempt will fail. This document will cover how to setup your local git configuration to support verified commits."),Object(a.b)("p",null,"GitHub describes commit signature verification in this way:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Using GPG or S/MIME, you can sign tags and commits locally. These tags or commits are marked as verified on GitHub so other people can be confident that the changes come from a trusted source.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Verified commit visual on GitHub",src:i(132).default})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification"},"You can find more information about how git and GitHub can use verified commit signatures to help ensure the integrity of commits to code repositories in the GitHub documentation"),"."),Object(a.b)("h2",{id:"configuring-verified-commits"},"Configuring Verified Commits"),Object(a.b)("h3",{id:"generate-a-new-gpg-key"},"Generate a new GPG key"),Object(a.b)("p",null,"The first step is to download and install ",Object(a.b)("a",{parentName:"p",href:"https://gpgtools.org/"},"GPG Suite")," (this can also be done via Homebrew with ",Object(a.b)("inlineCode",{parentName:"p"},"brew cask install gpg-suite"),'). Once you\'ve installed it, run it, and in the toolbar at the top, click "New" to create a new key pair:'),Object(a.b)("p",null,Object(a.b)("img",{alt:"GPG Suite - new key pair button",src:i(133).default})),Object(a.b)("p",null,"In the resulting dialog, enter your full name, your email address, and a strong password."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"It is strongly recommended that you use a password manager to generate and store a strong password for your key pair. You will need it later, and a password manager is the best way to generate a strong password, and be able to use it at a later time."))),Object(a.b)("p",null,Object(a.b)("img",{alt:"GPG Suite - new key pair dialog",src:i(134).default})),Object(a.b)("p",null,'Once you have created your new key pair, you will need to copy it, and update your local git configuration with it. In GPG Suite, click to select the new key pair that you created, and on the toolbar at the top, click the "Details".'),Object(a.b)("p",null,Object(a.b)("img",{alt:"GPG Suite - new key pair dialog",src:i(135).default})),Object(a.b)("p",null,'In the resulting dialog, hover over and user your mouse to highlight/select the value for "Fingerprint", and press ',Object(a.b)("inlineCode",{parentName:"p"},"Ctrl/Cmd+C")," to copy the value to your clipboard."),Object(a.b)("p",null,Object(a.b)("img",{alt:"GPG Suite - new key pair dialog",src:i(136).default})),Object(a.b)("p",null,"Additional detailed instructions for how to do this with an alternative command line utility can be found on ",Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key"},"the GitHub documentation"),"."),Object(a.b)("h3",{id:"configure-git-to-use-gpg-to-sign-your-commits"},"Configure git to use GPG to sign your commits"),Object(a.b)("p",null,"Add this value to your local git config with the following command from a terminal prompt:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ git config --global user.signingkey <PASTE YOUR KEY FINGERPRINT VALUE HERE>\n")),Object(a.b)("p",null,"Then, tell git to sign all commits with the following global configuration:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ git config --global commit.gpgsign true\n")),Object(a.b)("p",null,"You will need to set your global git configuration to use the email address that you associated with the key pair that you created above."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ git config --global user.email <YOUR EMAIL ADDRESS HERE>\n")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Remember, when executing the command above, enter the email address that you used/entered in GPG Suite when you created your key pair above."))),Object(a.b)("h3",{id:"add-your-public-key-to-github"},"Add your public key to GitHub"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Login to ",Object(a.b)("a",{parentName:"li",href:"https://github.com"},"GitHub")," and browse to ",Object(a.b)("a",{parentName:"li",href:"https://github.com/settings/profile"},"your user profile settings page"),"."),Object(a.b)("li",{parentName:"ol"},"From the menu on the left, click the ",Object(a.b)("a",{parentName:"li",href:"https://github.com/settings/keys"},"SSH and GPG keys menu item"),"."),Object(a.b)("li",{parentName:"ol"},'In the "GPG Keys" section, click the "New GPG Key" button to add your new GPG key to your user profile.'),Object(a.b)("li",{parentName:"ol"},"Open GPG Suite again, and find the key pair that you created in the steps above. ",Object(a.b)("strong",{parentName:"li"},"Right-click"),' on it, and from the resulting context menu, click the "',Object(a.b)("strong",{parentName:"li"},"Copy"),'" menu item. This will copy the public key to your clipboard.'),Object(a.b)("li",{parentName:"ol"},'Switch back over to GitHub in your web browser, and on the New GPG Key page, in the text box, paste the public key you copied from GPG Suite, and click the "Add GPG Key" button to save it. When you are returned to the keys page, under the GPG Keys section, you should see the new key that you just added. Check the details of that key, and ensure that the email address associated with the key matches the email address that you used to create the key (just to ensure that you copy/pasted the right one from GPG Suite).')),Object(a.b)("p",null,"Additional details, including screenshots, for how to do this, can be found on ",Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account"},"the GitHub documentation"),"."),Object(a.b)("h3",{id:"updating-your-macos-keychain-and-testing"},"Updating your MacOS keychain and testing"),Object(a.b)("p",null,"Once you've configured verified commits locally, you will want to test your configuration by making a commit and pushing it to one of our GitHub repositories that is setup to require verified commits (which should be all of them). The following steps will guide you through this process."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Prerequisite - these steps assume that you have cloned one of our repositories to your local machine, and are comfortable working with git from the CLI."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},'$ cd your/local/project/working/directory \u23ce\n$ git checkout -b chore/test-verified-commits \u23ce\n$ git commit --allow-empty --no-verify -m "chore($(git config --get user.name)): verifying signed commits on $(date "+%Y-%m-%d")" \u23ce\n$ git push origin chore/test-verified-commits \u23ce\n')),Object(a.b)("p",null,"The first time that you attempt to create a commit after the above configuration, you should be prompted to enter your signing key password that you used to create your GPG key pair above. When you enter the password, there should be an option on the prompt dialog to allow you to save the password in your MacOS keychain. If everything on your local machine is setup correctly, and you are prompted as expected and check this option, you should not be prompted again after entering it this initial time."),Object(a.b)("p",null,"After you've done this, open the repository on GitHub, and browse to ",Object(a.b)("inlineCode",{parentName:"p"},"/commits/chore/test-verified-commits"),' path in the repository to view the commits. The commit that you just added should be displayed at the top of the list of commits in the repository, and you should see the "Verified" tag on the commit, as in the screen capture below:'),Object(a.b)("p",null,Object(a.b)("img",{alt:"Testing your verified commit on GitHub",src:i(137).default})),Object(a.b)("p",null,"Once you've verified that your verified commit configuration is setup and working correctly, you can delete the branch you created for testing with the following commands."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ git checkout develop \u23ce\n$ git branch -D chore/test-verified-commits \u23ce\n$ git push origin --delete chore/test-verified-commits \u23ce\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Aaannnnd ... you're done.")),Object(a.b)("h2",{id:"additional-info"},"Additional Info"),Object(a.b)("p",null,"Some useful information can be found ",Object(a.b)("a",{parentName:"p",href:"https://github.com/sparkbox/standard/blob/1ca790bf2e5d553264b5d746ab3a9c91a6ffb766/security/security_policy_compliance/verified-commits.md#keeping-your-key-safe"},"here on keeping your GPG key safe"),", and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/sparkbox/standard/blob/1ca790bf2e5d553264b5d746ab3a9c91a6ffb766/security/security_policy_compliance/verified-commits.md#expired-keys"},"GPG key expiration"),"."))}l.isMDXComponent=!0},90:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return p}));var o=i(0),n=i.n(o);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},d=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(i),b=o,p=d["".concat(r,".").concat(b)]||d[b]||m[b]||a;return i?n.a.createElement(p,c(c({ref:t},u),{},{components:i})):n.a.createElement(p,c({ref:t},u))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var u=2;u<a;u++)r[u]=i[u];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"}}]);