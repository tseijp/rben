"use strict";(self.webpackChunk_rben_docs=self.webpackChunk_rben_docs||[]).push([[237],{614:function(n,t,e){e.d(t,{k:function(){return s}});var r,i,o,a=e(7446),u=e(9920),c=e(7379),s=(0,c.ZP)(u.animated.div)(r||(r=(0,a.Z)(["\n    width: 100%;\n    height: 100%;\n    margin: auto;\n    display: flex;\n    flex-wrap: wrap;\n    flex-flow: ",";\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    ","\n    ","\n"])),(function(n){return n.$row?"row":"column"}),(function(n){return n.$top&&(0,c.iv)(i||(i=(0,a.Z)(["\n        max-width: 992px;\n    "])))}),(function(n){return n.$tool&&(0,c.iv)(o||(o=(0,a.Z)(["\n        justify-content: flex-start;\n        transfrom: translate(1rem, 1rem);\n    "])))}))},4985:function(n,t,e){e.d(t,{V:function(){return b}});var r,i,o,a,u,c,s,l,f,d=e(102),m=e(7446),p=e(7379),h=e(5350),v=e(9920),g=["value"],b=(0,p.ZP)(v.animated.div).attrs((function(n){var t=(0,h.Z)().isDarkTheme;return n.$c=t?"0,0,0":"255,255,255",n})).attrs((function(n){n.$button?n.as=v.animated.button:n.$input?n.as=v.animated.textarea:n.$h1?n.as=v.animated.h1:n.$h2?n.as=v.animated.h2:n.$h3&&(n.as=v.animated.h3);return n})).attrs((function(n){n.$p&&(n.children="+");n.$m&&(n.children="-");return n})).attrs((function(n){var t,e;if(!n.$input)return n;var r=(null==(t=n.value)||null==t.split||null==(e=t.split("\n"))?void 0:e.length)||0;return n.style=(0,v.useSpring)({height:1.22*r+4.22+"rem"}),n})).attrs((function(n){if(!n.$input)return n;var t=n.value,e=(0,d.Z)(n,g);return Object.assign({defaultValue:t},e)}))(r||(r=(0,m.Z)(["\n    transition: 0.5s;\n    overflow: hidden;\n    display: block;\n    position: relative;\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n"])),(function(n){var t=n.$c;return(0,p.iv)(i||(i=(0,m.Z)(["\n        border: 1px solid rgba(",",0.1);\n        border-radius: 2rem;\n        backdrop-filter: blur(30px);\n        background-color: rgba(",",0.1);\n        box-shadow: 4px 4px 60px rgba(","},0.2);\n        :hover {\n            background-color: rgba(",",0.2);\n            box-shadow: 4px 4px 60px 8px rgba(","}.2);\n        }\n    "])),t,t,t,t,t)}),(function(n){return n.$button&&n.$start&&(0,p.iv)(o||(o=(0,m.Z)(['\n        width: 1em;\n        height: 1em;\n        :before {\n            position: absolute;\n            top: 50%;\n            left: 30%;\n            transform: translateY(-50%);\n            width: 0px;\n            height: 0px;\n            border: 0.3em solid transparent;\n            border-left: 0.5em solid currentColor;\n            box-sizing: border-box;\n            content: "";\n        }\n    '])))}),(function(n){return n.$button&&n.$stop&&(0,p.iv)(a||(a=(0,m.Z)(['\n        width: 1em;\n        height: 1em;\n        border-radius: 50%;\n        :before, :after {\n            position: absolute;\n            top: 50%;\n            transform: translateX(-50%) translateY(-50%);\n            width: 0.1em;\n            height: 0.5em;\n            box-sizing: border-box;\n            background-color: currentColor;\n            content: "";\n        }\n        :before {\n            left: 40%;\n        }\n        :after {\n            left: 60%;\n        }\n    '])))}),(function(n){return n.$button&&(0,p.iv)(u||(u=(0,m.Z)(["\n        border-radius: 5000px;\n        cursor: pointer;\n        width: 3rem;\n        height: 3rem;\n        margin-right: 0.5rem;\n        display: inline-block;\n        padding: 0;\n        font-size: 2rem;\n        letter-spacing: 2px;\n        padding: 0;\n        text-align: center;\n        text-transform: uppercase;\n        text-decoration: none;\n    "])))}),(function(n){return n.$input&&(0,p.iv)(c||(c=(0,m.Z)(["\n        outline: none;\n        overflow: hidden;\n        width: auto;\n        line-height: 1.2rem;\n        font-size: 1rem;\n        text-align: left;\n        font-weight: 1000;\n        font-family: Consolas, Menlo, 'Liberation Mono', Courier, monospace;\n        background: transparent;\n    "])))}),(function(n){return n.$output&&(0,p.iv)(s||(s=(0,m.Z)(["\n        font-size: 1rem;\n        ","\n    "])),""===n.value&&(0,p.iv)(l||(l=(0,m.Z)(["\n            height: 0;\n            margin: 0;\n            padding: 0;\n            display: none;\n        "]))))}),(function(n){return!n.$button&&(0,p.iv)(f||(f=(0,m.Z)(["\n        width: 100%;\n        padding: 2rem;\n        margin: 1rem 0;\n        padding: auto;\n    "])))}))},187:function(n,t,e){e.d(t,{I:function(){return p}});var r,i=e(102),o=e(7294),a=e(4985),u=e(614),c=e(7446),s=e(7379),l=e(9920),f=(0,s.ZP)(l.animated.div).attrs((function(n){var t=(0,l.useSpring)({dt:n.$dt||0}).dt;return n.children=t.to((function(n){return void 0===n&&(n=0),n.toFixed(0)+"ms"})),n}))(r||(r=(0,c.Z)(["\n    font-size: 1rem;\n"])));var d=e(543),m=["args","rm"];function p(n){var t=n.args,e=n.rm,r=void 0===e?function(){}:e,c=(0,i.Z)(n,m),s=t[0],l=t[1],p=t[2],h=(0,d.NW)(),v=(0,d.wP)((function(){p[l]=g.input,h()}),s,1e3),g=v[0],b=v[1];return o.createElement(a.V,c,o.createElement(u.k,{$row:!0,$tool:!0},o.createElement(a.V,{$button:!0,$start:!0,onClick:b}),o.createElement(a.V,{$button:!0,$stop:!0,onClick:r}),o.createElement(f,{$dt:g.deltaTime})),o.createElement(a.V,{$input:!0,value:g.input,onChange:function(n){return b(n.target.value)}}),o.createElement(a.V,{$input:!0,value:g.output,$output:!0}))}},8307:function(n,t,e){e.d(t,{f:function(){return l}});var r=e(102),i=e(7294),o=e(614),a=e(4985),u=["children","index","set"],c=function(n){return void 0===n&&(n=[]),[].concat(n,[n.slice(-1)[0]])},s=function(n){return void 0===n&&(n=[]),n.slice(0,n.length-1)};function l(n){var t=n.children,e=n.index,l=void 0===e?"":e,f=n.set,d=void 0===f?function(){}:f,m=(0,r.Z)(n,u);return i.createElement(o.k,m,i.createElement(a.V,null,l,i.createElement(a.V,{$button:!0,$p:!0,onClick:function(){return d(l,c)}}),i.createElement(a.V,{$button:!0,$m:!0,onClick:function(){return d(l,s)}}),t))}},543:function(n,t,e){e.d(t,{nx:function(){return p},w6:function(){return s},NW:function(){return v},G0:function(){return g},wP:function(){return h}});var r,i=e(102),o=e(7294);function a(){return new Worker(e.p+"assets/js/Ruby.worker.de1f9a1f.worker.js")}"undefined"!=typeof window&&(r=new a);var u=function(n,t){return n.forEach(t)};var c=function n(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(i.length>0)return n(t,e)&&n.apply(void 0,[e].concat(i));if(typeof t!=typeof e)return!1;if(n.str(t)||n.num(t))return t===e;for(var a in t)if(!(a in e))return!1;for(var u in e)if(t[u]!==e[u])return!1;return!0};function s(n){void 0===n&&(n=0);for(var t=new Array(n);n--;)t[n]=n;return t}c.arr=Array.isArray,c.fls=function(n){return c.und(n)||c.nul(n)||!1===n||""===n},c.nul=function(n){return null===n},c.und=function(n){return void 0===n},c.num=function(n){return"number"==typeof n},c.str=function(n){return"string"==typeof n},c.bol=function(n){return!0===n||!1===n},c.fun=function(n){return"function"==typeof n},c.obj=function(n){return!!n&&"Object"===n.constructor.name};var l=function(){function n(n){void 0===n&&(n=""),this.callback=function(){},this.state={error:null,input:n,output:"",running:!1},this.compute=this.compute.bind(this),this.run=this.run.bind(this)}var t=n.prototype;return t.compute=function(n){var t=this.state;n instanceof Error?t.error=n:n&&(t.output=function(n){return n.output.map((function(n){return n.output})).join("")}(n)),c.und(performance)||(t.prevTime=t.timeStamp,t.timeStamp=performance.now(),t.deltaTime=t.timeStamp-t.prevTime)},t.apply=function(n,t){var e=this;return void 0===n&&(n=function(){}),void 0===t&&(t=function(){}),this.callback=n,[this.state,function(n){return void 0===n&&(n=""),e.dispatch(n),void t()}]},t.dispatch=function(n){void 0===n&&(n="");var t=this.state;n!==t.input&&(c.str(n)||(n=t.input),t.input=n,this.callback(t))},t.run=function(){var n=this.state,t=this.compute;n.running||(n.running=!0,function(n){if("undefined"!=typeof window){var t={output:[],exitStatus:null},e=r;return r=new a,e.postMessage({input:n}),new Promise((function(n,r){e.onerror=function(n){console.error("Ruby worker error: ",n),r(n.message),e.terminate()},e.addEventListener("message",(function(i){var o=i.data;o.error?(r(i.error),e.terminate()):o.complete?(i.exitStatus&&(t.exitStatus=i.exitStatus),n(t),e.terminate()):o.output?t.output.push(o):console.log("unhandled Ruby worker message",i)}))}))}}(n.input).then(t,t).then((function(){n.running=!1})).then(this.callback))},n}(),f=e(323),d=function(){function n(n,t){var e=this;void 0===n&&(n=function(){}),void 0===t&&(t={}),this.callback=function(){},this._items=new Map,this._times=new Map,this.callback=n,function(n,t,e){for(var r in n)t.call(e,n[r],r)}(t,(function(n,t){c.arr(n)||(n=c.str(n)?[n]:[]),e._items.set(t,n.map((function(n){return void 0===n&&(n=""),n.trim()}))),e._times.set(t,n.map((function(){return 0})))}))}var t=n.prototype;return t.apply=function(){return[this,this.dispatch.bind(this)]},t.dispatch=function(n,t){void 0===n&&(n="");var e=this._items.get(n);c.fun(t)&&(t=t(e)),this._items.set(n,t),this.callback()},(0,f.Z)(n,[{key:"size",get:function(){var n=0;return u(this._items,(function(t){return u(t,(function(){return n++}))})),n}},{key:"entries",get:function(){return Array.from(this._items.entries())}}]),n}(),m=["children","Unit","Wrap"];function p(n){void 0===n&&(n={});var t=n,e=t.children,r=t.Unit,a=void 0===r?o.Fragment:r,u=t.Wrap,c=void 0===u?o.Fragment:u,s=function(n){var t=v();return(0,o.useState)(new d(t,n))[0].apply()}((0,i.Z)(t,m)),l=s[0],f=s[1];return(0,o.createElement)(c,{ctrl:l},l.entries.map((function(n){var t=n[0],r=void 0===t?"":t,i=n[1],u=void 0===i?[]:i;return(0,o.createElement)(a,{index:r,key:r,ctrl:l,set:f},u.map(e))})))}function h(n,t,e){void 0===n&&(n=function(){}),void 0===t&&(t=""),void 0===e&&(e=1e3);var r=(0,o.useState)(new l(t))[0],i=function(n,t){void 0===n&&(n=function(){});void 0===t&&(t=1e3);var e=(0,o.useState)(new b)[0];return(0,o.useEffect)((function(){return e.listener}),[]),e.apply(n,t)}(r.run,e);return r.apply(n,i)}function v(){var n=(0,o.useState)(Object.create(null))[1];return o.useCallback((function(){return n(Object.create(null))}),[n])}function g(n){var t=o.useRef(n);return t.current<n&&(t.current=n),t.current}var b=function(){function n(){this.listener=function(){},this.callback=function(){},this.timeStamp=1e3}var t=n.prototype;return t.apply=function(n,t){return void 0===n&&(n=function(){}),void 0===t&&(t=1e3),this.callback=n,this.timeStamp=t,this.delay.bind(this)},t.delay=function(){var n;this.listener();for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var i=(n=window).setTimeout.apply(n,[this.callback,this.timeStamp].concat(e));this.listener=function(){window.clearTimeout(i)}},n}()},8170:function(n,t,e){e.r(t),e.d(t,{default:function(){return G}});var r,i=e(7294),o=e(187),a=e(7446),u=e(102),c=e(7379),s=e(4814),l=e(8307),f=e(614),d=e(9920),m=(0,c.ZP)(d.animated.div).attrs((function(n){n.$h1&&(n.as=d.animated.h1);n.$h2&&(n.as=d.animated.h2);n.$h3&&(n.as=d.animated.h3);return n})).attrs((function(n){if(!n.$top)return n;var t=i.useState(!1),e=t[0],r=t[1];return n.onMouseEnter=function(){return r(!0)},n.onMouseLeave=function(){return r(!1)},n.style=(0,d.useSpring)({transform:"perspective(600px) rotateX("+(e?180:0)+"deg)",config:{mass:5,tension:500,friction:80}}),n}))(r||(r=(0,a.Z)(["\n    background: linear-gradient(transparent 5rem, #000 0%);\n    margin: auto;\n    color: black;\n    ","\n"])),(function(n){return n.$top&&"\n        width: 13.5rem;\n        height: 6rem;\n        font-size: 5rem;\n        transform-origin: center 60%;\n    "}));var p=e(4985),h=e(3117),v=e(6447),g=e(2212),b=e(1133),w=e(7946),y=e(5350),k=e(543),$=["size","shake","debug","children"];function E(n){var t=n.size,e=(n.shake,n.debug),r=n.children,o=(0,u.Z)(n,$),a=(0,k.G0)(t),c=(0,y.Z)().isDarkTheme?"#781E1E":"#FF8080";return e?i.createElement("div",{style:Object.assign({},Z,{background:c})}):i.createElement(v.Xz,(0,h.Z)({},o,{dpr:[1,2],style:Z}),i.createElement("color",{attach:"background",args:[c]}),i.createElement("spotLight",{position:[15,15,15],angle:.3,castShadow:!0}),i.createElement(i.Suspense,{fallback:null},i.createElement(b.wI,null,r,i.createElement(j,{position:[0,-.5,0],rotation:[-Math.PI/2,0,0]}),(0,k.w6)(5+a).map((function(n,t){return void 0===t&&(t=0),i.createElement(V,{key:t,position:[z(-1,0),z(5,10),z()],rotation:[z(.5,1),z(.1,.4),.1]})})))))}var x,Z={position:"absolute",zIndex:-1,top:0,left:0,width:"100%",height:"calc(100% + 15px)"},S={thickness:0,roughness:1,opacity:.7,clearcoat:.4,clearcoatRoughness:1,transmission:1.5,ior:1,envMapIntensity:15,color:"#ff0000",attenuationTint:"#ffe79e",attenuationDistance:0};function z(n,t){return void 0===n&&(n=0),void 0===t&&(t=1),n+Math.random()*(t-n)}function C(){var n=new g.ConeGeometry(.7,.7,8,1),t=(new w.Z).fromBufferGeometry(n);return t.mergeVertices(),[t.vertices.map((function(n){return[n.x,n.y,n.z]})),t.faces.map((function(n){return[n.a,n.b,n.c]})),[]]}function V(n){var t=i.useMemo(C,[]),e=b.XQ((function(){return Object.assign({mass:100},n,{args:t})}))[0];return i.createElement("mesh",(0,h.Z)({castShadow:!0,ref:e},n),i.createElement("meshPhysicalMaterial",(0,h.Z)({transparent:!0},S)),i.createElement("coneGeometry",{args:[.7,.7,8,1]}))}function j(n){var t=b.xK((function(){return Object.assign({type:"Static"},n)}))[0];return i.createElement("mesh",(0,h.Z)({ref:t,receiveShadow:!0},n),i.createElement("planeGeometry",{args:[10,10]}),i.createElement("shadowMaterial",{color:"#171717"}))}var M=["ctrl","children"],_=["children"];function P(n){var t=n.ctrl,e=n.children,r=(0,u.Z)(n,M);return i.createElement(T,r,i.createElement(E,{size:t.size}),e,i.createElement(l.f,{index:"Benchmark"},i.createElement(f.k,{$row:!0,$tool:!0},i.createElement(p.V,{$button:!0,$start:!0}),i.createElement(p.V,{$button:!0,$stop:!0}))))}function T(n){var t=n.children,e=(0,u.Z)(n,_);return i.createElement(s.Z,e,i.createElement(A,null,i.createElement(f.k,{$top:!0},i.createElement(p.V,null,i.createElement(m,{$h1:!0,$top:!0},"RBEN"),i.createElement(m,{$h3:!0},"Ruby Benchmark Test"),i.createElement(f.k,null,t)))))}var A=c.ZP.div(x||(x=(0,a.Z)(["\n    width: 100%;\n    height: auto;\n    margin: 0 auto;\n    padding: 0;\n    position: relative;\n"])));function G(){return i.createElement(k.nx,{Globals:[],Cases:['puts  "hello"'],Wrap:P,Unit:l.f},(function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return i.createElement(o.I,{key:t[1],args:t})}))}}}]);