"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95904],{31393:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"extensions/developing/adding-icons","title":"Adding icons","description":"Podman Desktop and resources icons","source":"@site/docs/extensions/developing/adding-icons.md","sourceDirName":"extensions/developing","slug":"/extensions/developing/adding-icons","permalink":"/docs/extensions/developing/adding-icons","draft":false,"unlisted":false,"editUrl":"https://github.com/containers/podman-desktop/tree/main/website/docs/extensions/developing/adding-icons.md","tags":[{"inline":true,"label":"podman-desktop","permalink":"/docs/tags/podman-desktop"},{"inline":true,"label":"extension","permalink":"/docs/tags/extension"},{"inline":true,"label":"writing","permalink":"/docs/tags/writing"},{"inline":true,"label":"icons","permalink":"/docs/tags/icons"}],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Adding icons","description":"Podman Desktop and resources icons","tags":["podman-desktop","extension","writing","icons"],"keywords":["podman desktop","extension","writing","icons"]},"sidebar":"mySidebar","previous":{"title":"When clause contexts","permalink":"/docs/extensions/developing/when-clause-context"},"next":{"title":"Adding UI components","permalink":"/docs/extensions/developing/adding-ui-components"}}');var s=o(62540),t=o(43023);const d={sidebar_position:4,title:"Adding icons",description:"Podman Desktop and resources icons",tags:["podman-desktop","extension","writing","icons"],keywords:["podman desktop","extension","writing","icons"]},r="Adding icons",c={},a=[{value:"Creating a .woff2 file",id:"creating-a-woff2-file",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"adding-icons",children:"Adding icons"})}),"\n",(0,s.jsxs)(n.p,{children:["Podman Desktop allows extensions to register custom icons that can be used for resources based on certain condition defined by a ",(0,s.jsx)(n.a,{href:"/docs/extensions/developing/when-clause-context",children:"when clause"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For example, the Kind extension register a custom icons by using the following instruction."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"icons": {\n  "kind-icon": {\n    "description": "Kind icon",\n    "default": {\n      "fontPath": "kind-icon.woff2",\n      "fontCharacter": "\\\\EA01"\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We restrict the format to the ",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/WOFF2/",children:"Web Open Font Format 2 (aka woff2)"})," to use icons as text, to keep consistency across the UI, as the color and size is managed by Podman-Desktop."]}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-woff2-file",children:"Creating a .woff2 file"}),"\n",(0,s.jsxs)(n.p,{children:["You probably have an existing ",(0,s.jsx)(n.code,{children:".svg"})," file that you want to use, to make it possible you can use the tool ",(0,s.jsx)(n.a,{href:"https://nfroidure.github.io/svgiconfont/",children:"svgiconfont"})," made by ",(0,s.jsx)(n.a,{href:"https://twitter.com/nfroidure",children:"@nfroidure"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To ensure the produced ",(0,s.jsx)(n.code,{children:".woff2"})," file contains the expected characters you created from your svg file(s). You can use the tool ",(0,s.jsx)(n.a,{href:"https://fontforge.org/",children:"fontforge.org"})," to visualize it."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["To find the ",(0,s.jsx)(n.code,{children:"fontCharacter"})," where your icons has been saved, you can search inside the FontForge tool by the name of the svg file you used."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>r});var i=o(63696);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);