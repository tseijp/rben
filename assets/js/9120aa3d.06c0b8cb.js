"use strict";(self.webpackChunk_rben_docs=self.webpackChunk_rben_docs||[]).push([[629],{5762:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return u},contentTitle:function(){return b},metadata:function(){return f},toc:function(){return p},default:function(){return k}});var a=t(3117),i=t(102),s=(t(7294),t(3905)),r=t(8515),o=t(187),d=t(8307),c=["components"],u={},b="Sort",f={unversionedId:"sort",id:"sort",isDocsHomePage:!1,title:"Sort",description:"<UseRben Unit= Cases={[`",source:"@site/examples/sort.mdx",sourceDirName:".",slug:"/sort",permalink:"/rben/examples/sort",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Pow",permalink:"/rben/examples/pow"},next:{title:"Square",permalink:"/rben/examples/square"}},p=[],l={toc:p};function k(n){var e=n.components,t=(0,i.Z)(n,c);return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sort"},"Sort"),(0,s.kt)(r.nx,{Unit:d.f,Cases:["\ndef bubblesort(a, done=false)\n    while !done do\n        done = true\n        0.step(a.length-2) do |i|\n            if a[i] > a[i+1] then swap(a, i, i+1); done = false end\n        end\n    end\n    return a\nend\ndef swap(a, i, j)\n    x = a[i]; a[i] = a[j]; a[j] = x\nend\np bubblesort (1..100).to_a.shuffle\n","\ndef quicksort(a, i = 0, j=a.length-1)\n    if j <= i\n    else\n        pivot = a[j]\n        s = i\n        i.step(j-1) do |k|\n            if a[k] <= pivot then swap(a, s, k); s = s + 1 end\n        end\n        swap(a, j, s)\n        quicksort(a, i, s-1)\n        quicksort(a, s+1, j)\n    end\n    return a\nend\ndef swap(a, i, j)\n    x = a[i]; a[i] = a[j]; a[j] = x\nend\np quicksort (1..100).to_a.shuffle\n","\ndef binsort(a, b=makebin(a), k=0)\n    b.each_index do |i|\n        b[i].times do a[k] = i; k = k + 1 end\n    end\n    return a\nend\ndef makebin(a)\n    b = Array.new(10000, 0)\n    a.each do |x| b[x] = b[x] + 1 end\n    return b\nend\np binsort (1..100).to_a.shuffle\n","\ndef radixsort(a, bits=14, b=(0..a.length).to_a, c = (0..a.length).to_a)\n    bits.times do |pos|\n        mask = 2**pos; bc = 0; cc = 0\n        a.length.times do |i|\n            if (a[i] & mask) == 0 then\n                b[bc] = a[i]; bc = bc + 1\n            else\n                c[cc] = a[i]; cc = cc + 1\n            end\n        end\n        bc.times do |i| a[i] = b[i] end\n        cc.times do |i| a[bc+i] = c[i] end\n    end\n    return a\nend\np radixsort (1..100).to_a.shuffle\n","\np (1..100).to_a.shuffle.sort\n"],mdxType:"UseRben"},(function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,s.kt)(o.I,{key:e[1],args:e,mdxType:"Edit"})})))}k.isMDXComponent=!0}}]);