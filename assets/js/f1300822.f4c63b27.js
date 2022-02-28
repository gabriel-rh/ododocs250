"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[2251],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],p={title:"Using devfile lifecycle events",sidebar_position:5},l={unversionedId:"tutorials/using-devfile-lifecycle-events",id:"tutorials/using-devfile-lifecycle-events",isDocsHomePage:!1,title:"Using devfile lifecycle events",description:"odo uses devfile to build and deploy components. You can also use devfile events with a component during its lifecycle. The four different types of devfile events are preStart, postStart, preStop and postStop",source:"@site/docs/tutorials/using-devfile-lifecycle-events.md",sourceDirName:"tutorials",slug:"/tutorials/using-devfile-lifecycle-events",permalink:"/docs/tutorials/using-devfile-lifecycle-events",editUrl:"https://github.com/redhat-developer/odo/edit/main/website/docs/tutorials/using-devfile-lifecycle-events.md",version:"current",sidebarPosition:5,frontMatter:{title:"Using devfile lifecycle events",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Using the odo.dev.push.path related attribute",permalink:"/docs/tutorials/using-devfile-odo.dev.push.path-attribute"},next:{title:"Debugging using devfile",permalink:"/docs/tutorials/debugging-using-devfile"}},c=[{value:"preStart",id:"prestart",children:[]},{value:"postStart",id:"poststart",children:[]},{value:"preStop",id:"prestop",children:[]},{value:"postStop",id:"poststop",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"odo uses devfile to build and deploy components. You can also use devfile events with a component during its lifecycle. The four different types of devfile events are ",(0,i.kt)("inlineCode",{parentName:"p"},"preStart"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"postStart"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"preStop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"postStop")),(0,i.kt)("p",null,"Each event is an array of devfile commands to be executed. The devfile command to be executed should be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"composite"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'components:\n  - name: runtime\n    container:\n      image: quay.io/eclipse/che-nodejs10-ubi:nightly\n      memoryLimit: 1024Mi\n      endpoints:\n        - name: "3000/tcp"\n          targetPort: 3000 \n      mountSources: true\n      command: [\'tail\']\n      args: [ \'-f\', \'/dev/null\']\n  - name: "tools"\n    container:\n      image: quay.io/eclipse/che-nodejs10-ubi:nightly\n      mountSources: true\n      memoryLimit: 1024Mi\ncommands:\n  - id: copy\n    exec:\n      commandLine: "cp /tools/myfile.txt tools.txt"\n      component: tools\n      workingDir: /\n  - id: initCache\n    exec:\n      commandLine: "./init_cache.sh"\n      component: tools\n      workingDir: /\n  - id: connectDB\n    exec:\n      commandLine: "./connect_db.sh"\n      component: runtime\n      workingDir: /\n  - id: disconnectDB\n    exec:\n      commandLine: "./disconnect_db.sh"\n      component: runtime\n      workingDir: /\n  - id: cleanup\n    exec:\n      commandLine: "./cleanup.sh"\n      component: tools\n      workingDir: /\n  - id: postStartCompositeCmd\n    composite:\n      label: Copy and Init Cache\n      commands:\n        - copy\n        - initCache\n      parallel: true\nevents:\n  preStart:\n    - "connectDB"\n  postStart:\n    - "postStartCompositeCmd" \n  preStop:\n    - "disconnectDB"\n  postStop:\n    - "cleanup"\n')),(0,i.kt)("h3",{id:"prestart"},"preStart"),(0,i.kt)("p",null,"PreStart events are executed as init containers for the project pod in the order they are specified."),(0,i.kt)("p",null,"The devfile command's ",(0,i.kt)("inlineCode",{parentName:"p"},"commandLine")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"workingDir")," become the init container's command and as a result the devfile component container's ",(0,i.kt)("inlineCode",{parentName:"p"},"command")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," or the container image's ",(0,i.kt)("inlineCode",{parentName:"p"},"Command")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Args")," are overwritten. If a composite command with ",(0,i.kt)("inlineCode",{parentName:"p"},"parallel: true")," is used, it will be executed sequentially as Kubernetes init containers only execute in sequence."),(0,i.kt)("p",null,"In the above example, PreStart is going to execute the devfile command ",(0,i.kt)("inlineCode",{parentName:"p"},"connectDB")," as an init container for the odo component's main pod."),(0,i.kt)("p",null,"Caution should be exercised when using preStart with devfile container component that mount sources. File operations with preStart on the project sync directory may result in inconsistent behaviour."),(0,i.kt)("p",null,"Note that odo currently does not support preStart events."),(0,i.kt)("h3",{id:"poststart"},"postStart"),(0,i.kt)("p",null,"PostStart events are executed when the Kubernetes deployment for the odo component is created. "),(0,i.kt)("p",null,"In the above example, PostStart is going to execute the composite command ",(0,i.kt)("inlineCode",{parentName:"p"},"postStartCompositeCmd")," once the odo component's deployment is created and the pod is up and running. The composite command ",(0,i.kt)("inlineCode",{parentName:"p"},"postStartCompositeCmd")," has sub-commands ",(0,i.kt)("inlineCode",{parentName:"p"},"copy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"initCache")," which will be executed in parallel."),(0,i.kt)("h3",{id:"prestop"},"preStop"),(0,i.kt)("p",null,"PreStop events are executed before the Kubernetes deployment for the odo component is deleted. "),(0,i.kt)("p",null,"In the above example, PreStop is going to execute the devfile command ",(0,i.kt)("inlineCode",{parentName:"p"},"disconnectDB")," before the odo component deployment is deleted."),(0,i.kt)("h3",{id:"poststop"},"postStop"),(0,i.kt)("p",null,"PostStop events are executed after the Kubernetes deployment for the odo component is deleted."),(0,i.kt)("p",null,"In the above example, PostStop will execute the devfile command ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanup")," after the component has been deleted.\nNote that odo currently does not support postStop events."))}d.isMDXComponent=!0}}]);