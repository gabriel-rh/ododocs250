"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[8927],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8224:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"OpenShift",sidebar_position:2},s={unversionedId:"getting-started/cluster-setup/openshift",id:"getting-started/cluster-setup/openshift",isDocsHomePage:!1,title:"Setup an OpenShift cluster",description:"Note that this guide is only helpful in setting up a development environment; this setup is not recommended for a production environment.",source:"@site/docs/getting-started/cluster-setup/openshift.md",sourceDirName:"getting-started/cluster-setup",slug:"/getting-started/cluster-setup/openshift",permalink:"/ododocs250/docs/getting-started/cluster-setup/openshift",editUrl:"https://github.com/redhat-developer/odo/edit/main/website/docs/getting-started/cluster-setup/openshift.md",version:"current",sidebarPosition:2,frontMatter:{title:"OpenShift",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting up a Kubernetes cluster",permalink:"/ododocs250/docs/getting-started/cluster-setup/kubernetes"},next:{title:"Installation",permalink:"/ododocs250/docs/getting-started/installation"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing the Service Binding Operator",id:"installing-the-service-binding-operator",children:[]},{value:"Installing an Operator",id:"installing-an-operator",children:[]},{value:"Verifying the Operator installation",id:"verifying-the-operator-installation",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that this guide is only helpful in setting up a development environment; this setup is not recommended for a production environment.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have an OpenShift cluster setup, this could for example be a ",(0,o.kt)("a",{parentName:"li",href:"https://crc.dev/crc/#installing-codeready-containers_gsg"},"crc")," cluster."),(0,o.kt)("li",{parentName:"ul"},"You have admin privileges to the cluster, since Operator installation is only possible with an admin user.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What are Operators?")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Operator pattern aims to capture the key aim of a human operator who is managing a service or set of services. Human operators who look after specific applications and services have deep knowledge of how the system ought to behave, how to deploy it, and how to react if there are problems."),(0,o.kt)("p",{parentName:"blockquote"},"People who run workloads on Kubernetes often like to use automation to take care of repeatable tasks. The Operator pattern captures how you can write code to automate a task beyond what Kubernetes itself provides.\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/#motivation"},"(Source)"))),(0,o.kt)("h2",{id:"installing-the-service-binding-operator"},"Installing the Service Binding Operator"),(0,o.kt)("p",null,"odo uses ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/service-binding-operator"},"Service Binding Operator")," to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"odo link")," feature which helps connect an odo component to a service or another component."),(0,o.kt)("p",null,"To install the Service Binding Operator from the OpenShift web console:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to the OpenShift web console with admin, and navigate to Operators > OperatorHub."),(0,o.kt)("li",{parentName:"ol"},"Make sure that the Project is set to All Projects."),(0,o.kt)("li",{parentName:"ol"},"Search for ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"Service Binding Operator"))," in the search box under ",(0,o.kt)("strong",{parentName:"li"},"All Items"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Service Binding Operator"),"; this should open a side pane."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Install")," button on the side pane; this should open an ",(0,o.kt)("strong",{parentName:"li"},"Install Operator")," page."),(0,o.kt)("li",{parentName:"ol"},"Make sure the ",(0,o.kt)("strong",{parentName:"li"},"Installation mode"),' is set to "',(0,o.kt)("em",{parentName:"li"},"All namespaces on the cluster(default)"),'"; ',(0,o.kt)("strong",{parentName:"li"},"Installed Namespace"),' is set to "',(0,o.kt)("em",{parentName:"li"},"openshift-operators"),'"; and ',(0,o.kt)("strong",{parentName:"li"},"Approval Strategy"),' is "',(0,o.kt)("em",{parentName:"li"},"Automatic"),'".'),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Install")," button."),(0,o.kt)("li",{parentName:"ol"},"Wait until the Operator is installed."),(0,o.kt)("li",{parentName:"ol"},"Once the Operator is installed, you should see ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Installed operator - ready for use")),", and a ",(0,o.kt)("strong",{parentName:"li"},"View Operator")," button appears on the page."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"View Operator")," button; this should take you to Operators > Installed Operators > Operator details page, and you should be able to see details of your Operator.")),(0,o.kt)("h2",{id:"installing-an-operator"},"Installing an Operator"),(0,o.kt)("p",null,"To install an Operator from the OpenShift web console:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to the OpenShift web console with admin, and navigate to Operators > OperatorHub."),(0,o.kt)("li",{parentName:"ol"},"Make sure that the Project is set to All Projects."),(0,o.kt)("li",{parentName:"ol"},"Search for an Operator of your choice in the search box under ",(0,o.kt)("strong",{parentName:"li"},"All Items"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the Operator; this should open a side pane."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Install")," button on the side pane; this should open an ",(0,o.kt)("strong",{parentName:"li"},"Install Operator")," page."),(0,o.kt)("li",{parentName:"ol"},"Set the ",(0,o.kt)("strong",{parentName:"li"},"Installation mode"),", ",(0,o.kt)("strong",{parentName:"li"},"Installed Namespace")," and ",(0,o.kt)("strong",{parentName:"li"},"Approval Strategy")," as per your requirement."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Install")," button."),(0,o.kt)("li",{parentName:"ol"},"Wait until the Operator is installed."),(0,o.kt)("li",{parentName:"ol"},"Once the Operator is installed, you should see ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"Installed operator - ready for use")),", and a ",(0,o.kt)("strong",{parentName:"li"},"View Operator")," button appears on the page."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"View Operator")," button; this should take you to Operators > Installed Operators > Operator details page, and you should be able to see details of your Operator.")),(0,o.kt)("h2",{id:"verifying-the-operator-installation"},"Verifying the Operator installation"),(0,o.kt)("p",null,"Once the Operator is successfully installed on the cluster, you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"odo")," to verify the Operator installation and see the CRDs associated with it; run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"odo catalog list services\n")),(0,o.kt)("p",null,"The output can look similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ odo catalog list services\nServices available through Operators\nNAME                                CRDs\n  datadog-operator.v0.6.0             DatadogAgent, DatadogMetric, DatadogMonitor\nservice-binding-operator.v0.9.1     ServiceBinding, ServiceBinding\n")))}c.isMDXComponent=!0}}]);