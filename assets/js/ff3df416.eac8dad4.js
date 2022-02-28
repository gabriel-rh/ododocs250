"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[7846],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2674:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Kubernetes",sidebar_position:1},s={unversionedId:"getting-started/cluster-setup/kubernetes",id:"getting-started/cluster-setup/kubernetes",isDocsHomePage:!1,title:"Setting up a Kubernetes cluster",description:"Note that this guide is only helpful in setting up a development environment; this setup is not recommended for a production environment.",source:"@site/docs/getting-started/cluster-setup/kubernetes.md",sourceDirName:"getting-started/cluster-setup",slug:"/getting-started/cluster-setup/kubernetes",permalink:"/ododocs250/docs/getting-started/cluster-setup/kubernetes",editUrl:"https://github.com/redhat-developer/odo/edit/main/website/docs/getting-started/cluster-setup/kubernetes.md",version:"current",sidebarPosition:1,frontMatter:{title:"Kubernetes",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/ododocs250/docs/getting-started/quickstart"},next:{title:"Setup an OpenShift cluster",permalink:"/ododocs250/docs/getting-started/cluster-setup/openshift"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Enabling Ingress",id:"enabling-ingress",children:[]},{value:"Installing the Operator Lifecycle Manager (OLM)",id:"installing-the-operator-lifecycle-manager-olm",children:[]},{value:"Installing the Service Binding Operator",id:"installing-the-service-binding-operator",children:[]},{value:"Installing an Operator",id:"installing-an-operator",children:[]},{value:"Verifying the Operator installation",id:"verifying-the-operator-installation",children:[]},{value:"Troubleshooting the Operator installation",id:"troubleshooting-the-operator-installation",children:[]}],u={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that this guide is only helpful in setting up a development environment; this setup is not recommended for a production environment.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have a Kubernetes cluster setup, this could for example be a ",(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")," cluster."),(0,o.kt)("li",{parentName:"ul"},"You have admin privileges to the cluster, since the Operator installation is only possible with an admin user.")),(0,o.kt)("h2",{id:"enabling-ingress"},"Enabling Ingress"),(0,o.kt)("p",null,"To access an application externally, you will create ",(0,o.kt)("em",{parentName:"p"},"URLs")," using odo, which are implemented on a Kubernetes cluster by Ingress resources; installing an Ingress controller helps in using this feature on a Kubernetes cluster."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Minikube:")," To install an Ingress controller on a minikube cluster, enable the ",(0,o.kt)("strong",{parentName:"p"},"ingress")," addon with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"minikube addons enable ingress\n")),(0,o.kt)("p",null,"To learn more about ingress addon, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/"},"the documentation on Kubernetes website"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other Kubernetes Cluster"),": To enable the Ingress feature on a Kubernetes cluster ",(0,o.kt)("em",{parentName:"p"},"other than minikube"),", using the NGINX Ingress controller see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"the official NGINX Ingress controller installation documentation"),"."),(0,o.kt)("p",null,"To use a different controller, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"the Ingress controller documentation"),"."),(0,o.kt)("p",null,"To learn more about enabling this feature on your cluster, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#prerequisites"},"Ingress prerequisites")," on the official kubernetes documentation."),(0,o.kt)("h2",{id:"installing-the-operator-lifecycle-manager-olm"},"Installing the Operator Lifecycle Manager (OLM)"),(0,o.kt)("p",null,"The Operator Lifecycle Manager(OLM) is a component of the Operator Framework, an open source toolkit to manage Kubernetes native applications, called Operators, in a streamlined and scalable way. ",(0,o.kt)("a",{parentName:"p",href:"https://olm.operatorframework.io/"},"(Source)")),(0,o.kt)("p",null,"What are Operators?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Operator pattern aims to capture the key aim of a human operator who is managing a service or set of services. Human operators who look after specific applications and services have deep knowledge of how the system ought to behave, how to deploy it, and how to react if there are problems."),(0,o.kt)("p",{parentName:"blockquote"},"People who run workloads on Kubernetes often like to use automation to take care of repeatable tasks. The Operator pattern captures how you can write code to automate a task beyond what Kubernetes itself provides.\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/#motivation"},"(Source)"))),(0,o.kt)("p",null,"To install an Operator, we will first need to install OLM ",(0,o.kt)("a",{parentName:"p",href:"https://olm.operatorframework.io/"},"(Operator Lifecycle Manager)")," on the cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.18.3/install.sh | bash -s v0.18.3\n")),(0,o.kt)("p",null,"Running the script will take some time to install all the necessary resources in the Kubernetes cluster including the ",(0,o.kt)("inlineCode",{parentName:"p"},"OperatorGroup")," resource."),(0,o.kt)("p",null,"Note: Check the OLM ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-lifecycle-manager/releases/"},"release page")," to use the latest version."),(0,o.kt)("h2",{id:"installing-the-service-binding-operator"},"Installing the Service Binding Operator"),(0,o.kt)("p",null,"odo uses ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/service-binding-operator"},"Service Binding Operator")," to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"odo link")," feature which helps to connect an odo component to a service or another component."),(0,o.kt)("p",null,"Operators can be installed in a specific namespace or across the cluster(i.e. in all the namespaces)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://operatorhub.io/install/service-binding-operator.yaml\n")),(0,o.kt)("p",null,"Running the command will create the necessary resource in the ",(0,o.kt)("inlineCode",{parentName:"p"},"operators")," namespace."),(0,o.kt)("p",null,"If you want to access this resource from other namespaces as well, add your target namespace to ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.targetNamespaces")," list in the ",(0,o.kt)("inlineCode",{parentName:"p"},"service-binding-operator.yaml")," file before running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl create"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#verifying-the-operator-installation"},"Verifying the Operator installation")," to ensure that the Operator was installed successfully."),(0,o.kt)("h2",{id:"installing-an-operator"},"Installing an Operator"),(0,o.kt)("p",null,"To install an operator from the OperatorHub website:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://operatorhub.io"},"OperatorHub")," website."),(0,o.kt)("li",{parentName:"ol"},"Search for an Operator of your choice."),(0,o.kt)("li",{parentName:"ol"},"Navigate to its detail page."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Install"),"."),(0,o.kt)("li",{parentName:"ol"},"Follow the instruction in the installation popup. Please make sure to install the Operator in your desired namespace or cluster-wide, depending on your choice and the Operator capability."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#verifying-the-operator-installation"},"Verify the Operator installation"),".")),(0,o.kt)("h2",{id:"verifying-the-operator-installation"},"Verifying the Operator installation"),(0,o.kt)("p",null,"Wait for a few seconds for the Operator to install."),(0,o.kt)("p",null,"Once the Operator is successfully installed on the cluster, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"odo")," to verify the Operator installation and see the CRDs associated with it; run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"odo catalog list services\n")),(0,o.kt)("p",null,"The output can look similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ odo catalog list services\nServices available through Operators\nNAME                                CRDs\ndatadog-operator.v0.6.0             DatadogAgent, DatadogMetric, DatadogMonitor\nservice-binding-operator.v0.9.1     ServiceBinding, ServiceBinding\n")),(0,o.kt)("p",null,"If you do not see your installed Operator in the list, follow the ",(0,o.kt)("a",{parentName:"p",href:"#troubleshoot-the-operator-installation"},"troubleshooting guide")," to find the issue and debug it."),(0,o.kt)("h2",{id:"troubleshooting-the-operator-installation"},"Troubleshooting the Operator installation"),(0,o.kt)("p",null,"There are two ways to confirm that the Operator has been installed properly.\nThe examples you may see in this guide use ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/datadog-operator"},"Datadog Operator")," and ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/service-binding-operator"},"Service Binding Operator"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify that its pod started and is in \u201cRunning\u201d state."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n operators\n")),(0,o.kt)("p",{parentName:"li"},"The output can look similar to:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n operators\nNAME                                       READY   STATUS    RESTARTS   AGE\ndatadog-operator-manager-5db67c7f4-hgb59   1/1     Running   0          2m13s\nservice-binding-operator-c8d7587b8-lxztx   1/1     Running   5          6d23h\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify that the ClusterServiceVersion (csv) resource is in Succeeded or Installing phase."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get csv -n operators\n")),(0,o.kt)("p",{parentName:"li"},"The output can look similar to the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get csv -n operators\nNAME                              DISPLAY                    VERSION   REPLACES                          PHASE\ndatadog-operator.v0.6.0           Datadog Operator           0.6.0     datadog-operator.v0.5.0           Succeeded\nservice-binding-operator.v0.9.1   Service Binding Operator   0.9.1     service-binding-operator.v0.9.0   Succeeded\n")),(0,o.kt)("p",{parentName:"li"},"If you see the value under PHASE column to be anything other than ",(0,o.kt)("em",{parentName:"p"},"Installing")," or ",(0,o.kt)("em",{parentName:"p"},"Succeeded"),", please take a look at the pods in ",(0,o.kt)("inlineCode",{parentName:"p"},"olm")," namespace and ensure that the pod starting with name ",(0,o.kt)("inlineCode",{parentName:"p"},"operatorhubio-catalog")," is in Running state:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n olm\nNAME                                READY   STATUS             RESTARTS   AGE\noperatorhubio-catalog-x24dq         0/1     CrashLoopBackOff   6          9m40s\n")),(0,o.kt)("p",{parentName:"li"},"If you see output like above where the pod is in CrashLoopBackOff state or any other state other than Running, delete the pod:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pods/<operatorhubio-catalog-name> -n olm\n")))))}c.isMDXComponent=!0}}]);