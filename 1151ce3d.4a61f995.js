(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(80)),i={id:"tag-release-publish",title:"Tagging, Releasing and Publishing"},c={unversionedId:"tag-release-publish",id:"tag-release-publish",isDocsHomePage:!1,title:"Tagging, Releasing and Publishing",description:"This document covers a manual process for handling package releasing and publishing. The process overall may change to something more automated in the future, but for now, these manual steps must be taken and followed closely to ensure that we can accomplish releases accurately and consistently.",source:"@site/docs/tag-release-publish.mdx",slug:"/tag-release-publish",permalink:"/engineering-docs/pages/tag-release-publish",editUrl:"https://github.com/theartofeducation/engineering-docs/docs/tag-release-publish.mdx",version:"current",sidebar:"docs",previous:{title:"Git Commit Formatting",permalink:"/engineering-docs/pages/commit-format"},next:{title:"Story Points",permalink:"/engineering-docs/pages/story-points"}},s=[{value:"JavaScript / Web packages",id:"javascript--web-packages",children:[{value:"1. Increment the package version",id:"1-increment-the-package-version",children:[]},{value:"2. Update / Review / Verify the CHANGELOG",id:"2-update--review--verify-the-changelog",children:[]},{value:"3. Commit Your Changes",id:"3-commit-your-changes",children:[]},{value:"4. Create a Release Tag",id:"4-create-a-release-tag",children:[]},{value:"5. Push Your Changes to GitHub",id:"5-push-your-changes-to-github",children:[]},{value:"6. Publish the Package",id:"6-publish-the-package",children:[]},{value:"7. Rebase/Sync <code>develop</code>",id:"7-rebasesync-develop",children:[]},{value:"TLDR Version",id:"tldr-version",children:[]}]},{value:"Python packages",id:"python-packages",children:[]},{value:"Go packages",id:"go-packages",children:[]}],l={rightToc:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This document covers a manual process for handling package releasing and publishing. The process overall may change to something more automated in the future, but for now, these manual steps must be taken and followed closely to ensure that we can accomplish releases accurately and consistently."))),Object(r.b)("h2",{id:"javascript--web-packages"},"JavaScript / Web packages"),Object(r.b)("p",null,"For packages that are intended to be shared and consumable as dependencies in other projects, there are a number of things that need to happen to handle releasing them and making them available for consumption by dependent projects:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Incrementing the package version"),Object(r.b)("li",{parentName:"ul"},"Updating a ",Object(r.b)("inlineCode",{parentName:"li"},"CHANGELOG.md")," file"),Object(r.b)("li",{parentName:"ul"},"Commiting those changes to the ",Object(r.b)("inlineCode",{parentName:"li"},"main")," branch of the repository"),Object(r.b)("li",{parentName:"ul"},"Applying a version tag to the repository"),Object(r.b)("li",{parentName:"ul"},"Pushing those changes (",Object(r.b)("em",{parentName:"li"},"with the tag created"),") to the ",Object(r.b)("inlineCode",{parentName:"li"},"main")," branch of the repository on GitHub"),Object(r.b)("li",{parentName:"ul"},"Publishing the package to the npm and/or GitHub package registry(ies)"),Object(r.b)("li",{parentName:"ul"},"Rebasing the ",Object(r.b)("inlineCode",{parentName:"li"},"develop")," branch with ",Object(r.b)("inlineCode",{parentName:"li"},"main")," to keep them in-sync")),Object(r.b)("p",null,"Complete the following steps in this order to handle releasing and publishing a new version of a package:"),Object(r.b)("h3",{id:"1-increment-the-package-version"},"1. Increment the package version"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Ensure you are working in the ",Object(r.b)("inlineCode",{parentName:"strong"},"main")," branch, and that you have pulled the latest code from GitHub to your local repository instance before starting this process"),"."),Object(r.b)("p",{parentName:"div"},"ALL of the following should be performed on the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"main"))," branch of the project repository ",Object(r.b)("em",{parentName:"p"},"after")," changes have been merged in from the ",Object(r.b)("inlineCode",{parentName:"p"},"develop")," branch, or whenever you and the team feel it is most appropriate to tag and release a new version of the package (perhaps the team has explicitly decided to hold off until multiple different in-flight changes have been merged in before pushing out a change)."))),Object(r.b)("p",null,"We use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/conventional-changelog/standard-version"}),"Standard Version")," (standard-version) for helping to consistently bump package version numbers in accordance with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/"}),"Semantic Versioning (semver) standard"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/conventional-changelog/standard-version#standard-version"}),"Full documentation for standard-version")," can be found in the README file of its repository on GitHub. This can be useful for full details on how to use it, but in most cases, the project you're working on should already be setup with the appropriate tasks for running the tool to increment the version for your project."),Object(r.b)("h4",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"In order for the rest of this workflow to work as documented, in the target project, if it is not already configured in this manner, it is recommended that you add the following configuration block to your project's ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"standard-version": {\n  "skip": {\n    "commit": true,\n    "tag": true\n  }\n}\n')),Object(r.b)("p",null,"This will prevent standard-version from automatically committing the changes that it applies to the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG.md")," files, and creating a tag for the release. By not committing these changes, standard-version will automate bumping the version and updating the ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG")," for you, but will give you the opportunity to review the changes that are made before they are committed to the repository. We will manually make this commit and tag the release in subsequent steps in the workflow."),Object(r.b)("h4",{id:"the-basics"},"The Basics"),Object(r.b)("p",null,"In it's most basic form, with no command-line arguments, you should be able to run this command from the root directory of your project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn run version\n")),Object(r.b)("p",null,"If this task is not already setup in your project, pleasure ensure that Standard Version is installed as a dev dependency, and add this task to the ",Object(r.b)("inlineCode",{parentName:"p"},"scripts")," section of the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," of your project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"version": "standard-version"\n')),Object(r.b)("h4",{id:"first-release"},"First Release"),Object(r.b)("p",null,"If this has not previously been done in your project, and this is the first release for your project, run the following command to run standard-version with the ",Object(r.b)("inlineCode",{parentName:"p"},"--first-release")," flag, which will tag a release without bumping the version of your project."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn run version --first-release\n")),Object(r.b)("h4",{id:"dry-run"},"Dry Run"),Object(r.b)("p",null,"Standard Version will attempt to read your git commit history and automatically determine how to increment the version number of the project by using the commit types and message content of all of the messages since the last time the project was released (tagged). It can often be a good idea to do a dry-run of this step first, as running it without a dry-run will actually update your ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG")," and ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," files and commit the change to your repository. Performing a dry-run will allow you to see the changes it will apply first."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn run version --dry-run\n")),Object(r.b)("p",null,"Once you've performed a dry-run, if you are satisfied that the output looks as you want it to, then you can run the ",Object(r.b)("inlineCode",{parentName:"p"},"version")," task with no arguments:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn run version\n")),Object(r.b)("h4",{id:"forcing-explicit-versions"},"Forcing Explicit Versions"),Object(r.b)("p",null,"However, if you wish to explicitly change the version by manually bumping the minor or major version, or if you wish to apply some kind of pre-release tag to your version, you can run one of the following commands:"),Object(r.b)("p",null,"To explicitly bump the ",Object(r.b)("strong",{parentName:"p"},"minor version"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn run version --release-as minor\n")),Object(r.b)("p",null,"You can also explicitly specify a version as part of your command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn run version --release-as 0.17.4\n")),Object(r.b)("p",null,"The scenarios above should cover most of your use cases, but for anything beyond this (such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/conventional-changelog/standard-version#release-as-a-pre-release"}),"creating a ",Object(r.b)("strong",{parentName:"a"},"pre-release")," version"),", perhaps), you can consult ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/conventional-changelog/standard-version#standard-version"}),"the standard-version documentation")," for additonal details and command line options."),Object(r.b)("h3",{id:"2-update--review--verify-the-changelog"},"2. Update / Review / Verify the CHANGELOG"),Object(r.b)("p",null,"Because we're using standard-version, the ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG.md")," file should have already been updated by standard-version as part of the previous step. As a result, unless something has gone wrong (you should be able to check by running ",Object(r.b)("inlineCode",{parentName:"p"},"git status")," and see ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG.md")," as a modified file), you should have only to review and verify the changes that were made to it for accuracy."),Object(r.b)("p",null,"It is recommended that you either run ",Object(r.b)("inlineCode",{parentName:"p"},"git diff")," or use your preferred diff/merge tool to review the changes that were made to the ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG")," file before commit your changes. This would also be the opportunity to make any manual changes that you may deem necessary to this file."),Object(r.b)("p",null,"Once you have verified the state of the ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG")," file, this step will be complete."),Object(r.b)("h3",{id:"3-commit-your-changes"},"3. Commit Your Changes"),Object(r.b)("p",null,"Once you feel confident with the changes that were made to the ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG")," and that the version bump that was applied to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file are correct and what you want for this release, it's time to commit this change to the repository."),Object(r.b)("p",null,"Using your preferred git editor, stage these files with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git add CHANGELOG.md package.json\n")),Object(r.b)("p",null,"Once those files have been staged, commit them with the following command and commit message:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'git commit -m "chore(release): <VERSION-NUMBER>"\n')),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"VERSION-NUMBER")," is the new version number that was written to the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file. This will be the version of the package that will be published to the registry (npm, GitHub, etc)."),Object(r.b)("p",null,"This should commit the changes to the modified files and complete this step."),Object(r.b)("h3",{id:"4-create-a-release-tag"},"4. Create a Release Tag"),Object(r.b)("p",null,"Once you have committed the changes to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG.md")," files, next you will need to create a tag for this release in the repository. You can create a tag with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'git tag -a v<VERSION-NUMBER> -m "Release v<VERSION-NUMBER>" --sign\n')),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"VERSION-NUMBER")," is the new version number that was written to the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file. You can omit the use of the ",Object(r.b)("inlineCode",{parentName:"p"},"--sign")," flag if you have ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/docs/git-config#Documentation/git-config.txt-taggpgSign"}),"the ",Object(r.b)("inlineCode",{parentName:"a"},"tag.gpgSign")," flag")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in your git configuration."),Object(r.b)("p",null,"Once the above command has been run successfully, verify that your tag has been applied as expected by running"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git tag\n")),Object(r.b)("p",null,"and verifying that your new tag is in the resulting list of tags. Once you have verified that the tag was created successfully, this step will be complete."),Object(r.b)("h3",{id:"5-push-your-changes-to-github"},"5. Push Your Changes to GitHub"),Object(r.b)("p",null,"Now that you've commited your release changes, and tagged the branch, it's time to push your changes to GitHub. You can push these changes ",Object(r.b)("em",{parentName:"p"},"with the tag you created")," to GitHub with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git push --follow-tags origin main\n")),Object(r.b)("p",null,"Once that command has completed successfully and your local changes have been sync'd to GitHub, this step will be complete."),Object(r.b)("h3",{id:"6-publish-the-package"},"6. Publish the Package"),Object(r.b)("h4",{id:"login-to-the-npm-registry"},"Login to the npm registry"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You should be running Yarn v1.x for these steps. We are not using Yarn v2 yet."))),Object(r.b)("p",null,"Before you will be able to publish the package to the npm registry, you will need to be logged in to it. You can login with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn login\n")),Object(r.b)("p",null,"Follow the prompts and enter your npm credentials to login."),Object(r.b)("p",null,"Once you've successfully logged in, than you will be able to publish your package to it."),Object(r.b)("p",null,"For packages that are published as publicly accessible packages to the npm registry, you can execute the following command to publish the package:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn publish --access public\n")),Object(r.b)("p",null,"Once this command has completed successfully, you can navigate to the npm registry at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://npmjs.com/package/@aoeu/YOUR-PACKAGE-NAME"}),"https://npmjs.com/package/@aoeu/YOUR-PACKAGE-NAME")," (where YOUR-PACKAGE-NAME is the value specified by the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," attribute in your project's ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file) to verify there that your package was published as expected and that the newly published version is now the latest available. Once you have verified this, this step will be complete."),Object(r.b)("h3",{id:"7-rebasesync-develop"},"7. Rebase/Sync ",Object(r.b)("inlineCode",{parentName:"h3"},"develop")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This step is critical to ensure that the ",Object(r.b)("inlineCode",{parentName:"p"},"develop")," branch in the repository stays in sync with the changes that were applied to the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," branch."))),Object(r.b)("p",null,"The final step in the process is to rebase the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," branch onto the ",Object(r.b)("inlineCode",{parentName:"p"},"develop")," branch to keep these branches in sync. There are three commands you will need to execute for this to happen:"),Object(r.b)("p",null,"Switch to the ",Object(r.b)("inlineCode",{parentName:"p"},"develop")," branch:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout develop\n")),Object(r.b)("p",null,"Rebase the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," branch onto ",Object(r.b)("inlineCode",{parentName:"p"},"develop"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git rebase main\n")),Object(r.b)("p",null,"Push the updates to the ",Object(r.b)("inlineCode",{parentName:"p"},"develop")," branch to GitHub:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git push origin develop\n")),Object(r.b)("p",null,"Once all of these steps have completed successfully, this step is complete. This will also complete the overall tag, release and publish process."),Object(r.b)("p",null,"\ud83c\udf89"),Object(r.b)("h3",{id:"tldr-version"},"TLDR Version"),Object(r.b)("p",null,"If you've been through this process before and are familiar with it and all prerequisites and configuration steps are already completed for you locally, but you just need a list of the commands to execute in order to get through the steps of the process, you've come to the right place."),Object(r.b)("p",null,"These are the commands that you will need to execute, in order:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn run version --dry-run\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn run version\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git add CHANGELOG.md package.json\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'git commit -m "chore(release): <VERSION-NUMBER>"\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'git tag -a v<VERSION-NUMBER> -m "Release v<VERSION-NUMBER>" --sign\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git tag\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git push --follow-tags origin main\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn npm publish --access public\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout develop\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git rebase main\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git push origin develop\n")),Object(r.b)("p",null,"\ud83c\udf89"),Object(r.b)("h2",{id:"python-packages"},"Python packages"),Object(r.b)("p",null,"TODO"),Object(r.b)("h2",{id:"go-packages"},"Go packages"),Object(r.b)("p",null,"TODO"))}b.isMDXComponent=!0},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(i,".").concat(u)]||p[u]||h[u]||r;return a?o.a.createElement(d,c(c({ref:t},l),{},{components:a})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);