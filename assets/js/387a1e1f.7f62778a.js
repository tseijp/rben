"use strict";(self.webpackChunk_rben_docs=self.webpackChunk_rben_docs||[]).push([[484],{7387:function(n,e,r){r.r(e),r.d(e,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return f},default:function(){return m}});var t=r(3117),o=r(102),s=(r(7294),r(3905)),a=r(8515),u=r(187),p=r(8307),i=["components"],d={},l="Pow",c={unversionedId:"pow",id:"pow",isDocsHomePage:!1,title:"Pow",description:"<UseRben Unit= Cases={[`",source:"@site/examples/pow.mdx",sourceDirName:".",slug:"/pow",permalink:"/rben/examples/pow",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Examples",permalink:"/rben/examples/intro"},next:{title:"Sort",permalink:"/rben/examples/sort"}},f=[],w={toc:f};function m(n){var e=n.components,r=(0,o.Z)(n,i);return(0,s.kt)("wrapper",(0,t.Z)({},w,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pow"},"Pow"),(0,s.kt)(a.nx,{Unit:p.f,Cases:["\ndef near1pow1(n)\n    result = 1.0\n        n.times do result = result * 1.0000000001 end\n    return result\nend\nputs near1pow1(1)\n","\ndef near1pow2(n)\n    if n == 0\n        return 1.0\n    elsif n == 1\n        return 1.0000000001\n    elsif n % 2 > 0\n        return near1pow2(n-1) * 1.0000000001\n    else\n        return near1pow2(n/2)**2\n    end\nend\nputs near1pow2(2)\n","\ndef near1pow3(n)\n    return Math.exp(n*Math.log(1.0000000001))\nend\nputs near1pow3(3)\n"],mdxType:"UseRben"},(function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(0,s.kt)(u.I,{key:e[1],args:e,mdxType:"Edit"})})))}m.isMDXComponent=!0}}]);