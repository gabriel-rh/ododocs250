"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[7939],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"odo catalog",sidebar_position:2},c={unversionedId:"command-reference/catalog",id:"command-reference/catalog",isDocsHomePage:!1,title:"odo catalog",description:"odo uses different catalogs to deploy components and services.",source:"@site/docs/command-reference/catalog.md",sourceDirName:"command-reference",slug:"/command-reference/catalog",permalink:"/ododocs250/docs/command-reference/catalog",editUrl:"https://github.com/redhat-developer/odo/edit/main/website/docs/command-reference/catalog.md",version:"current",sidebarPosition:2,frontMatter:{title:"odo catalog",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"odo build-images",permalink:"/ododocs250/docs/command-reference/build-images"},next:{title:"odo delete",permalink:"/ododocs250/docs/command-reference/delete"}},l=[{value:"Components",id:"components",children:[{value:"Listing components",id:"listing-components",children:[]},{value:"Getting information about a component",id:"getting-information-about-a-component",children:[]}]},{value:"Services",id:"services",children:[{value:"Listing services",id:"listing-services",children:[]},{value:"Searching services",id:"searching-services",children:[]},{value:"Getting information about a service",id:"getting-information-about-a-service",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"odo uses different ",(0,a.kt)("em",{parentName:"p"},"catalogs")," to deploy ",(0,a.kt)("em",{parentName:"p"},"components")," and ",(0,a.kt)("em",{parentName:"p"},"services"),"."),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("p",null,"odo uses the portable ",(0,a.kt)("em",{parentName:"p"},"devfile")," format to describe the components. It can connect to various devfile registries to download devfiles for different languages and frameworks. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/command-reference/registry"},(0,a.kt)("inlineCode",{parentName:"a"},"odo registry"))," for more information."),(0,a.kt)("h3",{id:"listing-components"},"Listing components"),(0,a.kt)("p",null,"You can list all the ",(0,a.kt)("em",{parentName:"p"},"devfiles")," available on the different registries with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"odo catalog list components\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ odo catalog list components\nOdo Devfile Components:\nNAME             DESCRIPTION                          REGISTRY\ngo               Stack with the latest Go version     DefaultDevfileRegistry\njava-maven       Upstream Maven and OpenJDK 11        DefaultDevfileRegistry\nnodejs           Stack with Node.js 14                DefaultDevfileRegistry\nphp-laravel      Stack with Laravel 8                 DefaultDevfileRegistry\npython           Python Stack with Python 3.7         DefaultDevfileRegistry\n[...]\n")),(0,a.kt)("h3",{id:"getting-information-about-a-component"},"Getting information about a component"),(0,a.kt)("p",null,"You can get more information about a specific component with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"odo catalog describe component\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ odo catalog describe component nodejs\n* Registry: DefaultDevfileRegistry\n\nStarter Projects:\n---\nname: nodejs-starter\nattributes: {}\ndescription: ""\nsubdir: ""\nprojectsource:\n  sourcetype: ""\n  git:\n    gitlikeprojectsource:\n      commonprojectsource: {}\n      checkoutfrom: null\n      remotes:\n        origin: https://github.com/odo-devfiles/nodejs-ex.git\n  zip: null\n  custom: null\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Registry")," is the registry from which the devfile is retrieved."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Starter projects")," are sample projects in the same language and framework of the devfile, that can help you start a new project. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/command-reference/create"},(0,a.kt)("inlineCode",{parentName:"a"},"odo create"))," for more information on creating a project from a starter project."),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("p",null,"odo can deploy ",(0,a.kt)("em",{parentName:"p"},"services")," with the help of ",(0,a.kt)("em",{parentName:"p"},"operators"),"."),(0,a.kt)("p",null,"Only operators deployed with the help of the ",(0,a.kt)("a",{parentName:"p",href:"https://olm.operatorframework.io/"},(0,a.kt)("em",{parentName:"a"},"Operator Lifecycle Manager"))," are supported by odo. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/cluster-setup/kubernetes#installing-the-operator-lifecycle-manager-olm"},"Installing the Operator Lifecycle Manager (OLM)")," for more information."),(0,a.kt)("h3",{id:"listing-services"},"Listing services"),(0,a.kt)("p",null,"You can get the list of available operators and their associated services with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"odo catalog list services\n")),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ odo catalog list services\nServices available through Operators\nNAME                                 CRDs\npostgresql-operator.v0.1.1           Backup, Database\nredis-operator.v0.8.0                RedisCluster, Redis\n")),(0,a.kt)("p",null,"In this example, you can see that two operators are installed in the cluster. The ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-operator.v0.1.1")," operator can deploy services related to PostgreSQL: ",(0,a.kt)("inlineCode",{parentName:"p"},"Backup")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Database"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-operator.v0.8.0")," operator can deploy services related to Redis: ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisCluster")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Redis"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: To get a list of all the available operators, odo fetches the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterServiceVersion")," (",(0,a.kt)("inlineCode",{parentName:"p"},"CSV"),") resources of the current namespace that are in a ",(0,a.kt)("em",{parentName:"p"},"Succeeded")," phase. For operators that support cluster-wide access, when a new namespace is created, these resources are automatically added to it, but it may take some time before they are in the ",(0,a.kt)("em",{parentName:"p"},"Succeeded")," phase, and odo may return an empty list until the resources are ready.")),(0,a.kt)("h3",{id:"searching-services"},"Searching services"),(0,a.kt)("p",null,"You can search for a specific service by a keyword with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"odo catalog search service\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ odo catalog search service postgre\nServices available through Operators\nNAME                           CRDs\npostgresql-operator.v0.1.1     Backup, Database\n")),(0,a.kt)("p",null,"You may see a similar list that contains only the relevant operators, whose name contains the searched keyword."),(0,a.kt)("h3",{id:"getting-information-about-a-service"},"Getting information about a service"),(0,a.kt)("p",null,"You can get more information about a specific service with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"odo catalog describe service\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ odo catalog describe service postgresql-operator.v0.1.1/Database\nKIND:    Database\nVERSION: v1alpha1\n\nDESCRIPTION:\n     Database is the Schema for the the Database Database API\n\nFIELDS:\n   awsAccessKeyId (string)   \n     AWS S3 accessKey/token ID\n\n     Key ID of AWS S3 storage. Default Value: nil Required to create the Secret\n     with the data to allow send the backup files to AWS S3 storage.\n[...]\n")),(0,a.kt)("p",null,"A service is represented in the cluster by a ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomResourceDefinition")," (commonly named ",(0,a.kt)("inlineCode",{parentName:"p"},"CRD"),"). This command will display the details about this CRD such as  ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),", and the list of fields available to define an instance of this custom resource."),(0,a.kt)("p",null,"The list of fields is extracted from the ",(0,a.kt)("em",{parentName:"p"},"OpenAPI schema")," included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CRD"),". This information is optional in a ",(0,a.kt)("inlineCode",{parentName:"p"},"CRD"),", and if it is not present, it is extracted from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterServiceVersion")," (",(0,a.kt)("inlineCode",{parentName:"p"},"CSV"),") representing the service instead."),(0,a.kt)("p",null,"It is also possible to request description of operator backed service without providing crd type information. Let us say you want to describe redis operator on cluster without CRD, you can do"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"odo catalog describe service redis-operator.v0.8.0\nNAME:   redis-operator.v0.8.0\nDESCRIPTION:\n\n    A Golang based redis operator that will make/oversee Redis\n    standalone/cluster mode setup on top of the Kubernetes. It can create a\n    redis cluster setup with best practices on Cloud as well as the Bare metal\n    environment. Also, it provides an in-built monitoring capability using\n\n... (cut short for beverity)\n    \n    Logging Operator is licensed under [Apache License, Version\n    2.0](https://github.com/OT-CONTAINER-KIT/redis-operator/blob/master/LICENSE)\n    \n\nCRDs:\n    NAME           DESCRIPTION\n    RedisCluster   Redis Cluster\n    Redis          Redis\n\n")))}d.isMDXComponent=!0}}]);