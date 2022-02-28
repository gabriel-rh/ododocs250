"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[9671],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),h=r,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},426:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={sidebar_position:1,title:"Introduction"},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"What is odo?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/redhat-developer/odo/edit/main/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Features provided by odo",permalink:"/docs/getting-started/features"}},u=[{value:"What is odo?",id:"what-is-odo",children:[]},{value:"What is &quot;inner loop&quot; and &quot;outer loop&quot;?",id:"what-is-inner-loop-and-outer-loop",children:[]},{value:"Who should use odo?",id:"who-should-use-odo",children:[]},{value:"How is odo different from <code>kubectl</code> and <code>oc</code>?",id:"how-is-odo-different-from-kubectl-and-oc",children:[]}],p={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"what-is-odo"},"What is odo?"),(0,i.kt)("p",null,"odo is a fast, iterative and straightforward CLI tool for developers who write, build, and deploy applications on Kubernetes."),(0,i.kt)("p",null,"odo abstracts the complex Kubernetes terminology so that an application developer can focus on writing code in their favourite framework without having to learn Kubernetes."),(0,i.kt)("p",null,"odo is focused on ",(0,i.kt)("a",{parentName:"p",href:"./intro#what-is-inner-loop-and-outer-loop"},"inner loop")," development with some tooling that would help users transition to the ",(0,i.kt)("a",{parentName:"p",href:"./intro#what-is-inner-loop-and-outer-loop"},"outer loop"),"."),(0,i.kt)("p",null,"Brendan Burns, one of the co-founders of Kubernetes, said in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.redhat.com/cms/managed-files/cm-oreilly-kubernetes-patterns-ebook-f19824-201910-en.pdf"},"book Kubernetes Patterns"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It (Kubernetes) is the foundation on which applications will be built, and it provides a large library of APIs and tools for building these applications, but it does little to provide the application architect or developer with any hints or guidance for how these various pieces can be combined into a complete, reliable system that satisfies their business needs and goals.")),(0,i.kt)("p",null,"odo makes Kubernetes easy for application architects and developers."),(0,i.kt)("h3",{id:"what-is-inner-loop-and-outer-loop"},'What is "inner loop" and "outer loop"?'),(0,i.kt)("p",null,"The inner loop consists of local coding, building, running, and testing the application\u2014all activities that you, as a developer, can control. The outer loop consists of the larger team processes that your code flows through on its way to the cluster: code reviews, integration tests, security and compliance, and so on. The inner loop could happen mostly on your laptop. The outer loop happens on shared servers and runs in containers, and is often automated with continuous integration/continuous delivery (CI/CD) pipelines. Usually, a code commit to source control is the transition point between the inner and outer loops.\n",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"https://developers.redhat.com/blog/2020/06/16/enterprise-kubernetes-development-with-odo-the-cli-tool-for-developers#improving_the_developer_workflow"},"Source"),")")),(0,i.kt)("h3",{id:"who-should-use-odo"},"Who should use odo?"),(0,i.kt)("p",null,"You should use odo if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you are developing applications using Node.js, Spring Boot, or similar framework"),(0,i.kt)("li",{parentName:"ul"},"your applications are intended to run in Kubernetes and your Ops team will help deploy them"),(0,i.kt)("li",{parentName:"ul"},"you do not want to spend time learning about Kubernetes, and prefer to focus on develop applications using your favourite framework")),(0,i.kt)("p",null,"Basically, if you are an application developer, you should use odo to run your application on a Kubernetes cluster."),(0,i.kt)("h3",{id:"how-is-odo-different-from-kubectl-and-oc"},"How is odo different from ",(0,i.kt)("inlineCode",{parentName:"h3"},"kubectl")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"oc"),"?"),(0,i.kt)("p",null,"Both ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubectl"},(0,i.kt)("inlineCode",{parentName:"a"},"kubectl"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openshift/oc/"},(0,i.kt)("inlineCode",{parentName:"a"},"oc"))," require deep understanding of Kubernetes concepts."),(0,i.kt)("p",null,"odo is different from these tools in that it is focused on application developers and architects. Both ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"oc")," are Ops oriented tools and help in deploying applications to and maintaining a Kubernetes cluster provided you know Kubernetes well."),(0,i.kt)("p",null,"You should not use odo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to maintain a production Kubernetes cluster"),(0,i.kt)("li",{parentName:"ul"},"to perform administration tasks against a Kubernetes cluster")))}d.isMDXComponent=!0}}]);