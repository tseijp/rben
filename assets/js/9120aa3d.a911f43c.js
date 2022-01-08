"use strict";(self.webpackChunk_rben_docs=self.webpackChunk_rben_docs||[]).push([[629],{3215:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=t(5134),s=(t(4926),t(8307),["components"]),c={},d="Sort",u={unversionedId:"sort",id:"sort",isDocsHomePage:!1,title:"Sort",description:"<Rben Globals={[]}  Cases={[`",source:"@site/examples/sort.mdx",sourceDirName:".",slug:"/sort",permalink:"/rben/examples/sort",editUrl:"https://github.com/tseijp/rben/edit/master/documents/examples/sort.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Pow",permalink:"/rben/examples/pow"},next:{title:"Square",permalink:"/rben/examples/square"}},l=[],f={toc:l};function m(n){var e=n.components,t=(0,i.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sort"},"Sort"),(0,a.kt)(o.C,{Globals:[],Cases:["\ndef bubblesort(a, done=false)\n    while !done do\n        done = true\n        0.step(a.length-2) do |i|\n            if a[i] > a[i+1] then swap(a, i, i+1); done = false end\n        end\n    end\n    return a\nend\ndef swap(a, i, j)\n    x = a[i]; a[i] = a[j]; a[j] = x\nend\np bubblesort (1..100).to_a.shuffle\n","\ndef quicksort(a, i = 0, j=a.length-1)\n    if j <= i\n    else\n        pivot = a[j]\n        s = i\n        i.step(j-1) do |k|\n            if a[k] <= pivot then swap(a, s, k); s = s + 1 end\n        end\n        swap(a, j, s)\n        quicksort(a, i, s-1)\n        quicksort(a, s+1, j)\n    end\n    return a\nend\ndef swap(a, i, j)\n    x = a[i]; a[i] = a[j]; a[j] = x\nend\np quicksort (1..100).to_a.shuffle\n","\ndef binsort(a, b=makebin(a), k=0)\n    b.each_index do |i|\n        b[i].times do a[k] = i; k = k + 1 end\n    end\n    return a\nend\ndef makebin(a)\n    b = Array.new(10000, 0)\n    a.each do |x| b[x] = b[x] + 1 end\n    return b\nend\np binsort (1..100).to_a.shuffle\n","\ndef radixsort(a, bits=14, b=(0..a.length).to_a, c = (0..a.length).to_a)\n    bits.times do |pos|\n        mask = 2**pos; bc = 0; cc = 0\n        a.length.times do |i|\n            if (a[i] & mask) == 0 then\n                b[bc] = a[i]; bc = bc + 1\n            else\n                c[cc] = a[i]; cc = cc + 1\n            end\n        end\n        bc.times do |i| a[i] = b[i] end\n        cc.times do |i| a[bc+i] = c[i] end\n    end\n    return a\nend\np radixsort (1..100).to_a.shuffle\n","\np (1..100).to_a.shuffle.sort\n"],mdxType:"Rben"}))}m.isMDXComponent=!0},4926:function(n,e,t){t.d(e,{I:function(){return u}});var r=t(102),i=t(7294),a=t(4985),o=t(614),s=t(5913),c=t(4793),d=["args","rm"];function u(n){var e=n.args,t=n.rm,u=void 0===t?function(){}:t,l=(0,r.Z)(n,d),f=e[0],m=e[1],p=e[2],b=(0,c.NW)(),k=(0,c.wP)((function(){p[m]=h.input,b()}),f,1e3),h=k[0],v=k[1];return i.createElement(a.V,l,i.createElement(o.k,{$row:!0,$tool:!0},i.createElement(a.V,{$btn:!0,$start:!0,onClick:v}),i.createElement(a.V,{$btn:!0,$stop:!0,onClick:u}),i.createElement(s.q,{$dt:h.deltaTime})),i.createElement(a.V,{$in:!0,value:h.input,onChange:function(n){return v(n.target.value)}}),i.createElement(a.V,{$in:!0,value:h.output,$out:!0}))}},5134:function(n,e,t){t.d(e,{C:function(){return l}});var r=t(102),i=t(7294),a=t(4926),o=t(8307),s=t(4793),c=["children","Unit","Wrap"],d=function(n){return n.children},u=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return i.createElement(a.I,{key:e[1],args:e})};function l(n){void 0===n&&(n={});var e=n,t=e.children,a=void 0===t?u:t,l=e.Unit,f=void 0===l?o.f:l,m=e.Wrap,p=void 0===m?d:m,b=(0,r.Z)(e,c),k=(0,s.Rr)(b),h=k[0],v=k[1];return i.createElement(p,{size:h.size,data:h.data},h.entries.map((function(n){var e=n[0],t=void 0===e?"":e,r=n[1],o=void 0===r?[]:r;return i.createElement(f,{index:t,key:t,set:v},o.map(a))})))}},8307:function(n,e,t){t.d(e,{f:function(){return u}});var r=t(102),i=t(7294),a=t(614),o=t(4985),s=["children","index","set"],c=function(n){return void 0===n&&(n=[]),[].concat(n,[n.slice(-1)[0]])},d=function(n){return void 0===n&&(n=[]),n.slice(0,n.length-1)};function u(n){var e=n.children,t=n.index,u=void 0===t?"":t,l=n.set,f=void 0===l?function(){}:l,m=(0,r.Z)(n,s);return i.createElement(a.k,m,i.createElement(o.V,{$clp:"Globals"===u},u,i.createElement(o.V,{$btn:!0,$p:!0,onClick:function(){return f(u,c)}}),i.createElement(o.V,{$btn:!0,$m:!0,onClick:function(){return f(u,d)}}),e))}}}]);