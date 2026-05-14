function yg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function pf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gf={exports:{}},Ys={},yf={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),vg=Symbol.for("react.portal"),xg=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),kg=Symbol.for("react.profiler"),Sg=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),Cg=Symbol.for("react.forward_ref"),Tg=Symbol.for("react.suspense"),Pg=Symbol.for("react.memo"),jg=Symbol.for("react.lazy"),$u=Symbol.iterator;function Ng(e){return e===null||typeof e!="object"?null:(e=$u&&e[$u]||e["@@iterator"],typeof e=="function"?e:null)}var vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xf=Object.assign,wf={};function fr(e,t,n){this.props=e,this.context=t,this.refs=wf,this.updater=n||vf}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kf(){}kf.prototype=fr.prototype;function Tl(e,t,n){this.props=e,this.context=t,this.refs=wf,this.updater=n||vf}var Pl=Tl.prototype=new kf;Pl.constructor=Tl;xf(Pl,fr.prototype);Pl.isPureReactComponent=!0;var Hu=Array.isArray,Sf=Object.prototype.hasOwnProperty,jl={current:null},Ef={key:!0,ref:!0,__self:!0,__source:!0};function Cf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Sf.call(t,r)&&!Ef.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xi,type:e,key:s,ref:o,props:i,_owner:jl.current}}function Ag(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nl(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function Ig(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gu=/\/+/g;function To(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ig(""+e.key):t.toString(36)}function Zi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xi:case vg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+To(o,0):r,Hu(i)?(n="",e!=null&&(n=e.replace(Gu,"$&/")+"/"),Zi(i,t,n,"",function(u){return u})):i!=null&&(Nl(i)&&(i=Ag(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Hu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+To(s,a);o+=Zi(s,t,n,l,i)}else if(l=Ng(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+To(s,a++),o+=Zi(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ii(e,t,n){if(e==null)return e;var r=[],i=0;return Zi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Rg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Ji={transition:null},Mg={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:jl};function Tf(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Ii,forEach:function(e,t,n){Ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ii(e,function(){t++}),t},toArray:function(e){return Ii(e,function(t){return t})||[]},only:function(e){if(!Nl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=fr;O.Fragment=xg;O.Profiler=kg;O.PureComponent=Tl;O.StrictMode=wg;O.Suspense=Tg;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mg;O.act=Tf;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=jl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Sf.call(t,l)&&!Ef.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xi,type:e.type,key:i,ref:s,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sg,_context:e},e.Consumer=e};O.createElement=Cf;O.createFactory=function(e){var t=Cf.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Cg,render:e}};O.isValidElement=Nl;O.lazy=function(e){return{$$typeof:jg,_payload:{_status:-1,_result:e},_init:Rg}};O.memo=function(e,t){return{$$typeof:Pg,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ji.transition;Ji.transition={};try{e()}finally{Ji.transition=t}};O.unstable_act=Tf;O.useCallback=function(e,t){return Ee.current.useCallback(e,t)};O.useContext=function(e){return Ee.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};O.useEffect=function(e,t){return Ee.current.useEffect(e,t)};O.useId=function(){return Ee.current.useId()};O.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Ee.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};O.useRef=function(e){return Ee.current.useRef(e)};O.useState=function(e){return Ee.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Ee.current.useTransition()};O.version="18.3.1";yf.exports=O;var S=yf.exports;const wi=pf(S),Lg=yg({__proto__:null,default:wi},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg=S,Dg=Symbol.for("react.element"),Vg=Symbol.for("react.fragment"),Og=Object.prototype.hasOwnProperty,_g=bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zg={key:!0,ref:!0,__self:!0,__source:!0};function Pf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Og.call(t,r)&&!zg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Dg,type:e,key:s,ref:o,props:i,_owner:_g.current}}Ys.Fragment=Vg;Ys.jsx=Pf;Ys.jsxs=Pf;gf.exports=Ys;var c=gf.exports,ha={},jf={exports:{}},Oe={},Nf={exports:{}},Af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,b){var V=N.length;N.push(b);e:for(;0<V;){var D=V-1>>>1,G=N[D];if(0<i(G,b))N[D]=b,N[V]=G,V=D;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var b=N[0],V=N.pop();if(V!==b){N[0]=V;e:for(var D=0,G=N.length,tn=G>>>1;D<tn;){var tt=2*(D+1)-1,An=N[tt],Re=tt+1,nn=N[Re];if(0>i(An,V))Re<G&&0>i(nn,An)?(N[D]=nn,N[Re]=V,D=Re):(N[D]=An,N[tt]=V,D=tt);else if(Re<G&&0>i(nn,V))N[D]=nn,N[Re]=V,D=Re;else break e}}return b}function i(N,b){var V=N.sortIndex-b.sortIndex;return V!==0?V:N.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,h=3,g=!1,v=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=N)r(u),b.sortIndex=b.expirationTime,t(l,b);else break;b=n(u)}}function w(N){if(x=!1,p(N),!v)if(n(l)!==null)v=!0,ee(E);else{var b=n(u);b!==null&&ze(w,b.startTime-N)}}function E(N,b){v=!1,x&&(x=!1,y(C),C=-1),g=!0;var V=h;try{for(p(b),f=n(l);f!==null&&(!(f.expirationTime>b)||N&&!H());){var D=f.callback;if(typeof D=="function"){f.callback=null,h=f.priorityLevel;var G=D(f.expirationTime<=b);b=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(l)&&r(l),p(b)}else r(l);f=n(l)}if(f!==null)var tn=!0;else{var tt=n(u);tt!==null&&ze(w,tt.startTime-b),tn=!1}return tn}finally{f=null,h=V,g=!1}}var T=!1,P=null,C=-1,R=5,A=-1;function H(){return!(e.unstable_now()-A<R)}function se(){if(P!==null){var N=e.unstable_now();A=N;var b=!0;try{b=P(!0,N)}finally{b?xe():(T=!1,P=null)}}else T=!1}var xe;if(typeof m=="function")xe=function(){m(se)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Pt=le.port2;le.port1.onmessage=se,xe=function(){Pt.postMessage(null)}}else xe=function(){k(se,0)};function ee(N){P=N,T||(T=!0,xe())}function ze(N,b){C=k(function(){N(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,ee(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var V=h;h=b;try{return N()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,b){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=h;h=N;try{return b()}finally{h=V}},e.unstable_scheduleCallback=function(N,b,V){var D=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?D+V:D):V=D,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=V+G,N={id:d++,callback:b,priorityLevel:N,startTime:V,expirationTime:G,sortIndex:-1},V>D?(N.sortIndex=V,t(u,N),n(l)===null&&N===n(u)&&(x?(y(C),C=-1):x=!0,ze(w,V-D))):(N.sortIndex=G,t(l,N),v||g||(v=!0,ee(E))),N},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(N){var b=h;return function(){var V=h;h=b;try{return N.apply(this,arguments)}finally{h=V}}}})(Af);Nf.exports=Af;var Fg=Nf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg=S,De=Fg;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var If=new Set,Yr={};function En(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Yr[e]=t,e=0;e<t.length;e++)If.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=Object.prototype.hasOwnProperty,Ug=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yu={},Ku={};function Wg(e){return ma.call(Ku,e)?!0:ma.call(Yu,e)?!1:Ug.test(e)?Ku[e]=!0:(Yu[e]=!0,!1)}function $g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hg(e,t,n,r){if(t===null||typeof t>"u"||$g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Il(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Al,Il);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Al,Il);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Al,Il);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rl(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hg(t,n,i,r)&&(n=null),r||i===null?Wg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ri=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),Ml=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),Rf=Symbol.for("react.provider"),Mf=Symbol.for("react.context"),Ll=Symbol.for("react.forward_ref"),ga=Symbol.for("react.suspense"),ya=Symbol.for("react.suspense_list"),bl=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Lf=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Po;function Ar(e){if(Po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Po=t&&t[1]||""}return`
`+Po+e}var jo=!1;function No(e,t){if(!e||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function Gg(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=No(e.type,!1),e;case 11:return e=No(e.type.render,!1),e;case 1:return e=No(e.type,!0),e;default:return""}}function va(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Rn:return"Portal";case pa:return"Profiler";case Ml:return"StrictMode";case ga:return"Suspense";case ya:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mf:return(e.displayName||"Context")+".Consumer";case Rf:return(e._context.displayName||"Context")+".Provider";case Ll:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bl:return t=e.displayName||null,t!==null?t:va(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return va(e(t))}catch{}}return null}function Yg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return va(t);case 8:return t===Ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kg(e){var t=bf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=Kg(e))}function Df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xa(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vf(e,t){t=t.checked,t!=null&&Rl(e,"checked",t,!1)}function wa(e,t){Vf(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ka(e,t.type,n):t.hasOwnProperty("defaultValue")&&ka(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ka(e,t,n){(t!=="number"||fs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Ir(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function Of(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ea(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_f(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,zf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qg=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){Qg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function Ff(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function Bf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ff(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Xg=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(e,t){if(t){if(Xg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ta(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,Qn=null,Xn=null;function ec(e){if(e=Ei(e)){if(typeof ja!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Zs(t),ja(e.stateNode,e.type,t))}}function Uf(e){Qn?Xn?Xn.push(e):Xn=[e]:Qn=e}function Wf(){if(Qn){var e=Qn,t=Xn;if(Xn=Qn=null,ec(e),t)for(e=0;e<t.length;e++)ec(t[e])}}function $f(e,t){return e(t)}function Hf(){}var Ao=!1;function Gf(e,t,n){if(Ao)return e(t,n);Ao=!0;try{return $f(e,t,n)}finally{Ao=!1,(Qn!==null||Xn!==null)&&(Hf(),Wf())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Zs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Na=!1;if(yt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Na=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Na=!1}function qg(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Dr=!1,hs=null,ms=!1,Aa=null,Zg={onError:function(e){Dr=!0,hs=e}};function Jg(e,t,n,r,i,s,o,a,l){Dr=!1,hs=null,qg.apply(Zg,arguments)}function ey(e,t,n,r,i,s,o,a,l){if(Jg.apply(this,arguments),Dr){if(Dr){var u=hs;Dr=!1,hs=null}else throw Error(j(198));ms||(ms=!0,Aa=u)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tc(e){if(Cn(e)!==e)throw Error(j(188))}function ty(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tc(i),e;if(s===r)return tc(i),t;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Kf(e){return e=ty(e),e!==null?Qf(e):null}function Qf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qf(e);if(t!==null)return t;e=e.sibling}return null}var Xf=De.unstable_scheduleCallback,nc=De.unstable_cancelCallback,ny=De.unstable_shouldYield,ry=De.unstable_requestPaint,te=De.unstable_now,iy=De.unstable_getCurrentPriorityLevel,Vl=De.unstable_ImmediatePriority,qf=De.unstable_UserBlockingPriority,ps=De.unstable_NormalPriority,sy=De.unstable_LowPriority,Zf=De.unstable_IdlePriority,Ks=null,ot=null;function oy(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ks,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:uy,ay=Math.log,ly=Math.LN2;function uy(e){return e>>>=0,e===0?32:31-(ay(e)/ly|0)|0}var bi=64,Di=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Rr(a):(s&=o,s!==0&&(r=Rr(s)))}else o=n&~i,o!==0?r=Rr(o):s!==0&&(r=Rr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function cy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ze(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cy(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jf(){var e=bi;return bi<<=1,!(bi&4194240)&&(bi=64),e}function Io(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function fy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ol(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function eh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var th,_l,nh,rh,ih,Ra=!1,Vi=[],Ot=null,_t=null,zt=null,Xr=new Map,qr=new Map,Mt=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rc(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function xr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ei(t),t!==null&&_l(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function my(e,t,n,r,i){switch(t){case"focusin":return Ot=xr(Ot,e,t,n,r,i),!0;case"dragenter":return _t=xr(_t,e,t,n,r,i),!0;case"mouseover":return zt=xr(zt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xr.set(s,xr(Xr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qr.set(s,xr(qr.get(s)||null,e,t,n,r,i)),!0}return!1}function sh(e){var t=dn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yf(n),t!==null){e.blockedOn=t,ih(e.priority,function(){nh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ma(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pa=r,n.target.dispatchEvent(r),Pa=null}else return t=Ei(n),t!==null&&_l(t),e.blockedOn=n,!1;t.shift()}return!0}function ic(e,t,n){es(e)&&n.delete(t)}function py(){Ra=!1,Ot!==null&&es(Ot)&&(Ot=null),_t!==null&&es(_t)&&(_t=null),zt!==null&&es(zt)&&(zt=null),Xr.forEach(ic),qr.forEach(ic)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ra||(Ra=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,py)))}function Zr(e){function t(i){return wr(i,e)}if(0<Vi.length){wr(Vi[0],e);for(var n=1;n<Vi.length;n++){var r=Vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&wr(Ot,e),_t!==null&&wr(_t,e),zt!==null&&wr(zt,e),Xr.forEach(t),qr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&Mt.shift()}var qn=St.ReactCurrentBatchConfig,ys=!0;function gy(e,t,n,r){var i=z,s=qn.transition;qn.transition=null;try{z=1,zl(e,t,n,r)}finally{z=i,qn.transition=s}}function yy(e,t,n,r){var i=z,s=qn.transition;qn.transition=null;try{z=4,zl(e,t,n,r)}finally{z=i,qn.transition=s}}function zl(e,t,n,r){if(ys){var i=Ma(e,t,n,r);if(i===null)Fo(e,t,r,vs,n),rc(e,r);else if(my(i,e,t,n,r))r.stopPropagation();else if(rc(e,r),t&4&&-1<hy.indexOf(e)){for(;i!==null;){var s=Ei(i);if(s!==null&&th(s),s=Ma(e,t,n,r),s===null&&Fo(e,t,r,vs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fo(e,t,r,null,n)}}var vs=null;function Ma(e,t,n,r){if(vs=null,e=Dl(r),e=dn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vs=e,null}function oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iy()){case Vl:return 1;case qf:return 4;case ps:case sy:return 16;case Zf:return 536870912;default:return 16}default:return 16}}var bt=null,Fl=null,ts=null;function ah(){if(ts)return ts;var e,t=Fl,n=t.length,r,i="value"in bt?bt.value:bt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ts=i.slice(e,1<r?1-r:void 0)}function ns(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function sc(){return!1}function _e(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oi:sc,this.isPropagationStopped=sc,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=_e(hr),Si=Z({},hr,{view:0,detail:0}),vy=_e(Si),Ro,Mo,kr,Qs=Z({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Ro=e.screenX-kr.screenX,Mo=e.screenY-kr.screenY):Mo=Ro=0,kr=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),oc=_e(Qs),xy=Z({},Qs,{dataTransfer:0}),wy=_e(xy),ky=Z({},Si,{relatedTarget:0}),Lo=_e(ky),Sy=Z({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=_e(Sy),Cy=Z({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ty=_e(Cy),Py=Z({},hr,{data:0}),ac=_e(Py),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ay[e])?!!t[e]:!1}function Ul(){return Iy}var Ry=Z({},Si,{key:function(e){if(e.key){var t=jy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ul,charCode:function(e){return e.type==="keypress"?ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),My=_e(Ry),Ly=Z({},Qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=_e(Ly),by=Z({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ul}),Dy=_e(by),Vy=Z({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=_e(Vy),_y=Z({},Qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=_e(_y),Fy=[9,13,27,32],Wl=yt&&"CompositionEvent"in window,Vr=null;yt&&"documentMode"in document&&(Vr=document.documentMode);var By=yt&&"TextEvent"in window&&!Vr,lh=yt&&(!Wl||Vr&&8<Vr&&11>=Vr),uc=" ",cc=!1;function uh(e,t){switch(e){case"keyup":return Fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ch(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Uy(e,t){switch(e){case"compositionend":return ch(t);case"keypress":return t.which!==32?null:(cc=!0,uc);case"textInput":return e=t.data,e===uc&&cc?null:e;default:return null}}function Wy(e,t){if(Ln)return e==="compositionend"||!Wl&&uh(e,t)?(e=ah(),ts=Fl=bt=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lh&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function dh(e,t,n,r){Uf(r),t=xs(t,"onChange"),0<t.length&&(n=new Bl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Jr=null;function Hy(e){Sh(e,0)}function Xs(e){var t=Vn(e);if(Df(t))return e}function Gy(e,t){if(e==="change")return t}var fh=!1;if(yt){var bo;if(yt){var Do="oninput"in document;if(!Do){var fc=document.createElement("div");fc.setAttribute("oninput","return;"),Do=typeof fc.oninput=="function"}bo=Do}else bo=!1;fh=bo&&(!document.documentMode||9<document.documentMode)}function hc(){Or&&(Or.detachEvent("onpropertychange",hh),Jr=Or=null)}function hh(e){if(e.propertyName==="value"&&Xs(Jr)){var t=[];dh(t,Jr,e,Dl(e)),Gf(Hy,t)}}function Yy(e,t,n){e==="focusin"?(hc(),Or=t,Jr=n,Or.attachEvent("onpropertychange",hh)):e==="focusout"&&hc()}function Ky(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xs(Jr)}function Qy(e,t){if(e==="click")return Xs(t)}function Xy(e,t){if(e==="input"||e==="change")return Xs(t)}function qy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:qy;function ei(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ma.call(t,i)||!et(e[i],t[i]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var n=mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mc(n)}}function mh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ph(){for(var e=window,t=fs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fs(e.document)}return t}function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zy(e){var t=ph(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mh(n.ownerDocument.documentElement,n)){if(r!==null&&$l(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=pc(n,s);var o=pc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jy=yt&&"documentMode"in document&&11>=document.documentMode,bn=null,La=null,_r=null,ba=!1;function gc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ba||bn==null||bn!==fs(r)||(r=bn,"selectionStart"in r&&$l(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&ei(_r,r)||(_r=r,r=xs(La,"onSelect"),0<r.length&&(t=new Bl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},Vo={},gh={};yt&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function qs(e){if(Vo[e])return Vo[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gh)return Vo[e]=t[n];return e}var yh=qs("animationend"),vh=qs("animationiteration"),xh=qs("animationstart"),wh=qs("transitionend"),kh=new Map,yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){kh.set(e,t),En(t,[e])}for(var Oo=0;Oo<yc.length;Oo++){var _o=yc[Oo],e0=_o.toLowerCase(),t0=_o[0].toUpperCase()+_o.slice(1);qt(e0,"on"+t0)}qt(yh,"onAnimationEnd");qt(vh,"onAnimationIteration");qt(xh,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(wh,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function vc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ey(r,t,void 0,e),e.currentTarget=null}function Sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;vc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;vc(i,a,u),s=l}}}if(ms)throw e=Aa,ms=!1,Aa=null,e}function W(e,t){var n=t[za];n===void 0&&(n=t[za]=new Set);var r=e+"__bubble";n.has(r)||(Eh(t,e,2,!1),n.add(r))}function zo(e,t,n){var r=0;t&&(r|=4),Eh(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[zi]){e[zi]=!0,If.forEach(function(n){n!=="selectionchange"&&(n0.has(n)||zo(n,!1,e),zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,zo("selectionchange",!1,t))}}function Eh(e,t,n,r){switch(oh(t)){case 1:var i=gy;break;case 4:i=yy;break;default:i=zl}n=i.bind(null,t,n,e),i=void 0,!Na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=dn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Gf(function(){var u=s,d=Dl(n),f=[];e:{var h=kh.get(e);if(h!==void 0){var g=Bl,v=e;switch(e){case"keypress":if(ns(n)===0)break e;case"keydown":case"keyup":g=My;break;case"focusin":v="focus",g=Lo;break;case"focusout":v="blur",g=Lo;break;case"beforeblur":case"afterblur":g=Lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Dy;break;case yh:case vh:case xh:g=Ey;break;case wh:g=Oy;break;case"scroll":g=vy;break;case"wheel":g=zy;break;case"copy":case"cut":case"paste":g=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=lc}var x=(t&4)!==0,k=!x&&e==="scroll",y=x?h!==null?h+"Capture":null:h;x=[];for(var m=u,p;m!==null;){p=m;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,y!==null&&(w=Qr(m,y),w!=null&&x.push(ni(m,w,p)))),k)break;m=m.return}0<x.length&&(h=new g(h,v,null,n,d),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Pa&&(v=n.relatedTarget||n.fromElement)&&(dn(v)||v[vt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?dn(v):null,v!==null&&(k=Cn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=oc,w="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=lc,w="onPointerLeave",y="onPointerEnter",m="pointer"),k=g==null?h:Vn(g),p=v==null?h:Vn(v),h=new x(w,m+"leave",g,n,d),h.target=k,h.relatedTarget=p,w=null,dn(d)===u&&(x=new x(y,m+"enter",v,n,d),x.target=p,x.relatedTarget=k,w=x),k=w,g&&v)t:{for(x=g,y=v,m=0,p=x;p;p=In(p))m++;for(p=0,w=y;w;w=In(w))p++;for(;0<m-p;)x=In(x),m--;for(;0<p-m;)y=In(y),p--;for(;m--;){if(x===y||y!==null&&x===y.alternate)break t;x=In(x),y=In(y)}x=null}else x=null;g!==null&&xc(f,h,g,x,!1),v!==null&&k!==null&&xc(f,k,v,x,!0)}}e:{if(h=u?Vn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=Gy;else if(dc(h))if(fh)E=Xy;else{E=Ky;var T=Yy}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Qy);if(E&&(E=E(e,u))){dh(f,E,n,d);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ka(h,"number",h.value)}switch(T=u?Vn(u):window,e){case"focusin":(dc(T)||T.contentEditable==="true")&&(bn=T,La=u,_r=null);break;case"focusout":_r=La=bn=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,gc(f,n,d);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":gc(f,n,d)}var P;if(Wl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ln?uh(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(lh&&n.locale!=="ko"&&(Ln||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ln&&(P=ah()):(bt=d,Fl="value"in bt?bt.value:bt.textContent,Ln=!0)),T=xs(u,C),0<T.length&&(C=new ac(C,e,null,n,d),f.push({event:C,listeners:T}),P?C.data=P:(P=ch(n),P!==null&&(C.data=P)))),(P=By?Uy(e,n):Wy(e,n))&&(u=xs(u,"onBeforeInput"),0<u.length&&(d=new ac("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}Sh(f,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qr(e,n),s!=null&&r.unshift(ni(e,s,i)),s=Qr(e,t),s!=null&&r.push(ni(e,s,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qr(n,s),l!=null&&o.unshift(ni(n,l,a))):i||(l=Qr(n,s),l!=null&&o.push(ni(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var r0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(r0,`
`).replace(i0,"")}function Fi(e,t,n){if(t=wc(t),wc(e)!==t&&n)throw Error(j(425))}function ws(){}var Da=null,Va=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,s0=typeof clearTimeout=="function"?clearTimeout:void 0,kc=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof kc<"u"?function(e){return kc.resolve(null).then(e).catch(a0)}:_a;function a0(e){setTimeout(function(){throw e})}function Bo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),st="__reactFiber$"+mr,ri="__reactProps$"+mr,vt="__reactContainer$"+mr,za="__reactEvents$"+mr,l0="__reactListeners$"+mr,u0="__reactHandles$"+mr;function dn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sc(e);e!==null;){if(n=e[st])return n;e=Sc(e)}return t}e=n,n=e.parentNode}return null}function Ei(e){return e=e[st]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Zs(e){return e[ri]||null}var Fa=[],On=-1;function Zt(e){return{current:e}}function $(e){0>On||(e.current=Fa[On],Fa[On]=null,On--)}function B(e,t){On++,Fa[On]=e.current,e.current=t}var Kt={},ve=Zt(Kt),je=Zt(!1),vn=Kt;function tr(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function ks(){$(je),$(ve)}function Ec(e,t,n){if(ve.current!==Kt)throw Error(j(168));B(ve,t),B(je,n)}function Ch(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Yg(e)||"Unknown",i));return Z({},n,r)}function Ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,vn=ve.current,B(ve,e),B(je,je.current),!0}function Cc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Ch(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,$(je),$(ve),B(ve,e)):$(je),B(je,n)}var ct=null,Js=!1,Uo=!1;function Th(e){ct===null?ct=[e]:ct.push(e)}function c0(e){Js=!0,Th(e)}function Jt(){if(!Uo&&ct!==null){Uo=!0;var e=0,t=z;try{var n=ct;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Js=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),Xf(Vl,Jt),i}finally{z=t,Uo=!1}}return null}var _n=[],zn=0,Es=null,Cs=0,Ue=[],We=0,xn=null,dt=1,ft="";function on(e,t){_n[zn++]=Cs,_n[zn++]=Es,Es=e,Cs=t}function Ph(e,t,n){Ue[We++]=dt,Ue[We++]=ft,Ue[We++]=xn,xn=e;var r=dt;e=ft;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var s=32-Ze(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Ze(t)+i|n<<i|r,ft=s+e}else dt=1<<s|n<<i|r,ft=e}function Hl(e){e.return!==null&&(on(e,1),Ph(e,1,0))}function Gl(e){for(;e===Es;)Es=_n[--zn],_n[zn]=null,Cs=_n[--zn],_n[zn]=null;for(;e===xn;)xn=Ue[--We],Ue[We]=null,ft=Ue[--We],Ue[We]=null,dt=Ue[--We],Ue[We]=null}var be=null,Le=null,Y=!1,qe=null;function jh(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Le=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Le=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ua(e){if(Y){var t=Le;if(t){var n=t;if(!Tc(e,t)){if(Ba(e))throw Error(j(418));t=Ft(n.nextSibling);var r=be;t&&Tc(e,t)?jh(r,n):(e.flags=e.flags&-4097|2,Y=!1,be=e)}}else{if(Ba(e))throw Error(j(418));e.flags=e.flags&-4097|2,Y=!1,be=e}}}function Pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Bi(e){if(e!==be)return!1;if(!Y)return Pc(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=Le)){if(Ba(e))throw Nh(),Error(j(418));for(;t;)jh(e,t),t=Ft(t.nextSibling)}if(Pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=be?Ft(e.stateNode.nextSibling):null;return!0}function Nh(){for(var e=Le;e;)e=Ft(e.nextSibling)}function nr(){Le=be=null,Y=!1}function Yl(e){qe===null?qe=[e]:qe.push(e)}var d0=St.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ui(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jc(e){var t=e._init;return t(e._payload)}function Ah(e){function t(y,m){if(e){var p=y.deletions;p===null?(y.deletions=[m],y.flags|=16):p.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=$t(y,m),y.index=0,y.sibling=null,y}function s(y,m,p){return y.index=p,e?(p=y.alternate,p!==null?(p=p.index,p<m?(y.flags|=2,m):p):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,m,p,w){return m===null||m.tag!==6?(m=Qo(p,y.mode,w),m.return=y,m):(m=i(m,p),m.return=y,m)}function l(y,m,p,w){var E=p.type;return E===Mn?d(y,m,p.props.children,w,p.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===At&&jc(E)===m.type)?(w=i(m,p.props),w.ref=Sr(y,m,p),w.return=y,w):(w=us(p.type,p.key,p.props,null,y.mode,w),w.ref=Sr(y,m,p),w.return=y,w)}function u(y,m,p,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Xo(p,y.mode,w),m.return=y,m):(m=i(m,p.children||[]),m.return=y,m)}function d(y,m,p,w,E){return m===null||m.tag!==7?(m=gn(p,y.mode,w,E),m.return=y,m):(m=i(m,p),m.return=y,m)}function f(y,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Qo(""+m,y.mode,p),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ri:return p=us(m.type,m.key,m.props,null,y.mode,p),p.ref=Sr(y,null,m),p.return=y,p;case Rn:return m=Xo(m,y.mode,p),m.return=y,m;case At:var w=m._init;return f(y,w(m._payload),p)}if(Ir(m)||yr(m))return m=gn(m,y.mode,p,null),m.return=y,m;Ui(y,m)}return null}function h(y,m,p,w){var E=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(y,m,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ri:return p.key===E?l(y,m,p,w):null;case Rn:return p.key===E?u(y,m,p,w):null;case At:return E=p._init,h(y,m,E(p._payload),w)}if(Ir(p)||yr(p))return E!==null?null:d(y,m,p,w,null);Ui(y,p)}return null}function g(y,m,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(p)||null,a(m,y,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ri:return y=y.get(w.key===null?p:w.key)||null,l(m,y,w,E);case Rn:return y=y.get(w.key===null?p:w.key)||null,u(m,y,w,E);case At:var T=w._init;return g(y,m,p,T(w._payload),E)}if(Ir(w)||yr(w))return y=y.get(p)||null,d(m,y,w,E,null);Ui(m,w)}return null}function v(y,m,p,w){for(var E=null,T=null,P=m,C=m=0,R=null;P!==null&&C<p.length;C++){P.index>C?(R=P,P=null):R=P.sibling;var A=h(y,P,p[C],w);if(A===null){P===null&&(P=R);break}e&&P&&A.alternate===null&&t(y,P),m=s(A,m,C),T===null?E=A:T.sibling=A,T=A,P=R}if(C===p.length)return n(y,P),Y&&on(y,C),E;if(P===null){for(;C<p.length;C++)P=f(y,p[C],w),P!==null&&(m=s(P,m,C),T===null?E=P:T.sibling=P,T=P);return Y&&on(y,C),E}for(P=r(y,P);C<p.length;C++)R=g(P,y,C,p[C],w),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?C:R.key),m=s(R,m,C),T===null?E=R:T.sibling=R,T=R);return e&&P.forEach(function(H){return t(y,H)}),Y&&on(y,C),E}function x(y,m,p,w){var E=yr(p);if(typeof E!="function")throw Error(j(150));if(p=E.call(p),p==null)throw Error(j(151));for(var T=E=null,P=m,C=m=0,R=null,A=p.next();P!==null&&!A.done;C++,A=p.next()){P.index>C?(R=P,P=null):R=P.sibling;var H=h(y,P,A.value,w);if(H===null){P===null&&(P=R);break}e&&P&&H.alternate===null&&t(y,P),m=s(H,m,C),T===null?E=H:T.sibling=H,T=H,P=R}if(A.done)return n(y,P),Y&&on(y,C),E;if(P===null){for(;!A.done;C++,A=p.next())A=f(y,A.value,w),A!==null&&(m=s(A,m,C),T===null?E=A:T.sibling=A,T=A);return Y&&on(y,C),E}for(P=r(y,P);!A.done;C++,A=p.next())A=g(P,y,C,A.value,w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?C:A.key),m=s(A,m,C),T===null?E=A:T.sibling=A,T=A);return e&&P.forEach(function(se){return t(y,se)}),Y&&on(y,C),E}function k(y,m,p,w){if(typeof p=="object"&&p!==null&&p.type===Mn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ri:e:{for(var E=p.key,T=m;T!==null;){if(T.key===E){if(E=p.type,E===Mn){if(T.tag===7){n(y,T.sibling),m=i(T,p.props.children),m.return=y,y=m;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===At&&jc(E)===T.type){n(y,T.sibling),m=i(T,p.props),m.ref=Sr(y,T,p),m.return=y,y=m;break e}n(y,T);break}else t(y,T);T=T.sibling}p.type===Mn?(m=gn(p.props.children,y.mode,w,p.key),m.return=y,y=m):(w=us(p.type,p.key,p.props,null,y.mode,w),w.ref=Sr(y,m,p),w.return=y,y=w)}return o(y);case Rn:e:{for(T=p.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(y,m.sibling),m=i(m,p.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=Xo(p,y.mode,w),m.return=y,y=m}return o(y);case At:return T=p._init,k(y,m,T(p._payload),w)}if(Ir(p))return v(y,m,p,w);if(yr(p))return x(y,m,p,w);Ui(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,p),m.return=y,y=m):(n(y,m),m=Qo(p,y.mode,w),m.return=y,y=m),o(y)):n(y,m)}return k}var rr=Ah(!0),Ih=Ah(!1),Ts=Zt(null),Ps=null,Fn=null,Kl=null;function Ql(){Kl=Fn=Ps=null}function Xl(e){var t=Ts.current;$(Ts),e._currentValue=t}function Wa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){Ps=e,Kl=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(Ps===null)throw Error(j(308));Fn=e,Ps.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var fn=null;function ql(e){fn===null?fn=[e]:fn.push(e)}function Rh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ql(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,ql(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ol(e,n)}}function Nc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function js(e,t,n,r){var i=e.updateQueue;It=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(h=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=Z({},f,h);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);kn|=o,e.lanes=o,e.memoizedState=f}}function Ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ci={},at=Zt(Ci),ii=Zt(Ci),si=Zt(Ci);function hn(e){if(e===Ci)throw Error(j(174));return e}function Jl(e,t){switch(B(si,t),B(ii,e),B(at,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ea(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ea(t,e)}$(at),B(at,t)}function ir(){$(at),$(ii),$(si)}function Lh(e){hn(si.current);var t=hn(at.current),n=Ea(t,e.type);t!==n&&(B(ii,e),B(at,n))}function eu(e){ii.current===e&&($(at),$(ii))}var K=Zt(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=[];function tu(){for(var e=0;e<Wo.length;e++)Wo[e]._workInProgressVersionPrimary=null;Wo.length=0}var is=St.ReactCurrentDispatcher,$o=St.ReactCurrentBatchConfig,wn=0,X=null,oe=null,ue=null,As=!1,zr=!1,oi=0,f0=0;function me(){throw Error(j(321))}function nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function ru(e,t,n,r,i,s){if(wn=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,is.current=e===null||e.memoizedState===null?g0:y0,e=n(r,i),zr){s=0;do{if(zr=!1,oi=0,25<=s)throw Error(j(301));s+=1,ue=oe=null,t.updateQueue=null,is.current=v0,e=n(r,i)}while(zr)}if(is.current=Is,t=oe!==null&&oe.next!==null,wn=0,ue=oe=X=null,As=!1,t)throw Error(j(300));return e}function iu(){var e=oi!==0;return oi=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?X.memoizedState=ue=e:ue=ue.next=e,ue}function Ye(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?X.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(j(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?X.memoizedState=ue=e:ue=ue.next=e}return ue}function ai(e,t){return typeof t=="function"?t(e):t}function Ho(e){var t=Ye(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((wn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,X.lanes|=d,kn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,et(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,kn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Ye(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);et(s,t.memoizedState)||(Pe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function bh(){}function Dh(e,t){var n=X,r=Ye(),i=t(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Pe=!0),r=r.queue,su(_h.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,li(9,Oh.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(j(349));wn&30||Vh(n,t,i)}return i}function Vh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oh(e,t,n,r){t.value=n,t.getSnapshot=r,zh(t)&&Fh(e)}function _h(e,t,n){return n(function(){zh(t)&&Fh(e)})}function zh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Fh(e){var t=xt(e,1);t!==null&&Je(t,e,1,-1)}function Ic(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t.queue=e,e=e.dispatch=p0.bind(null,X,e),[t.memoizedState,e]}function li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bh(){return Ye().memoizedState}function ss(e,t,n,r){var i=it();X.flags|=e,i.memoizedState=li(1|t,n,void 0,r===void 0?null:r)}function eo(e,t,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&nu(r,o.deps)){i.memoizedState=li(t,n,s,r);return}}X.flags|=e,i.memoizedState=li(1|t,n,s,r)}function Rc(e,t){return ss(8390656,8,e,t)}function su(e,t){return eo(2048,8,e,t)}function Uh(e,t){return eo(4,2,e,t)}function Wh(e,t){return eo(4,4,e,t)}function $h(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hh(e,t,n){return n=n!=null?n.concat([e]):null,eo(4,4,$h.bind(null,t,e),n)}function ou(){}function Gh(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yh(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kh(e,t,n){return wn&21?(et(n,t)||(n=Jf(),X.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function h0(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=$o.transition;$o.transition={};try{e(!1),t()}finally{z=n,$o.transition=r}}function Qh(){return Ye().memoizedState}function m0(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xh(e))qh(t,n);else if(n=Rh(e,t,n,r),n!==null){var i=Se();Je(n,e,r,i),Zh(n,t,r)}}function p0(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xh(e))qh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,o)){var l=t.interleaved;l===null?(i.next=i,ql(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Rh(e,t,i,r),n!==null&&(i=Se(),Je(n,e,r,i),Zh(n,t,r))}}function Xh(e){var t=e.alternate;return e===X||t!==null&&t===X}function qh(e,t){zr=As=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ol(e,n)}}var Is={readContext:Ge,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},g0={readContext:Ge,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ss(4194308,4,$h.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return ss(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=m0.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:Ic,useDebugValue:ou,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=Ic(!1),t=e[0];return e=h0.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=it();if(Y){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ce===null)throw Error(j(349));wn&30||Vh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Rc(_h.bind(null,r,s,e),[e]),r.flags|=2048,li(9,Oh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(Y){var n=ft,r=dt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=f0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y0={readContext:Ge,useCallback:Gh,useContext:Ge,useEffect:su,useImperativeHandle:Hh,useInsertionEffect:Uh,useLayoutEffect:Wh,useMemo:Yh,useReducer:Ho,useRef:Bh,useState:function(){return Ho(ai)},useDebugValue:ou,useDeferredValue:function(e){var t=Ye();return Kh(t,oe.memoizedState,e)},useTransition:function(){var e=Ho(ai)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:bh,useSyncExternalStore:Dh,useId:Qh,unstable_isNewReconciler:!1},v0={readContext:Ge,useCallback:Gh,useContext:Ge,useEffect:su,useImperativeHandle:Hh,useInsertionEffect:Uh,useLayoutEffect:Wh,useMemo:Yh,useReducer:Go,useRef:Bh,useState:function(){return Go(ai)},useDebugValue:ou,useDeferredValue:function(e){var t=Ye();return oe===null?t.memoizedState=e:Kh(t,oe.memoizedState,e)},useTransition:function(){var e=Go(ai)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:bh,useSyncExternalStore:Dh,useId:Qh,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $a(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var to={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Wt(e),s=mt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Bt(e,s,i),t!==null&&(Je(t,e,i,r),rs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Wt(e),s=mt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Bt(e,s,i),t!==null&&(Je(t,e,i,r),rs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Wt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,r),t!==null&&(Je(t,e,r,n),rs(t,e,r))}};function Mc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,s):!0}function Jh(e,t,n){var r=!1,i=Kt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(i=Ne(t)?vn:ve.current,r=t.contextTypes,s=(r=r!=null)?tr(e,i):Kt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=to,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&to.enqueueReplaceState(t,t.state,null)}function Ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Zl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ge(s):(s=Ne(t)?vn:ve.current,i.context=tr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&($a(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&to.enqueueReplaceState(i,i.state,null),js(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=Gg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var x0=typeof WeakMap=="function"?WeakMap:Map;function em(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ms||(Ms=!0,nl=r),Ga(e,t)},n}function tm(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ga(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ga(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function bc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new x0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=L0.bind(null,e,t,n),t.then(e,e))}function Dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var w0=St.ReactCurrentOwner,Pe=!1;function ke(e,t,n,r){t.child=e===null?Ih(t,null,n,r):rr(t,e.child,n,r)}function Oc(e,t,n,r,i){n=n.render;var s=t.ref;return Zn(t,i),r=ru(e,t,n,r,s,i),n=iu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(Y&&n&&Hl(t),t.flags|=1,ke(e,t,r,i),t.child)}function _c(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!mu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,nm(e,t,s,r,i)):(e=us(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(o,r)&&e.ref===t.ref)return wt(e,t,i)}return t.flags|=1,e=$t(s,r),e.ref=t.ref,e.return=t,t.child=e}function nm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ei(s,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,wt(e,t,i)}return Ya(e,t,n,r,i)}function rm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Un,Me),Me|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Un,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(Un,Me),Me|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,B(Un,Me),Me|=r;return ke(e,t,i,n),t.child}function im(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ya(e,t,n,r,i){var s=Ne(n)?vn:ve.current;return s=tr(t,s),Zn(t,i),n=ru(e,t,n,r,s,i),r=iu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(Y&&r&&Hl(t),t.flags|=1,ke(e,t,n,i),t.child)}function zc(e,t,n,r,i){if(Ne(n)){var s=!0;Ss(t)}else s=!1;if(Zn(t,i),t.stateNode===null)os(e,t),Jh(t,n,r),Ha(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Ne(n)?vn:ve.current,u=tr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Lc(t,o,r,u),It=!1;var h=t.memoizedState;o.state=h,js(t,r,o,i),l=t.memoizedState,a!==r||h!==l||je.current||It?(typeof d=="function"&&($a(t,n,d,r),l=t.memoizedState),(a=It||Mc(t,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ge(l):(l=Ne(n)?vn:ve.current,l=tr(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Lc(t,o,r,l),It=!1,h=t.memoizedState,o.state=h,js(t,r,o,i);var v=t.memoizedState;a!==f||h!==v||je.current||It?(typeof g=="function"&&($a(t,n,g,r),v=t.memoizedState),(u=It||Mc(t,n,u,r,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ka(e,t,n,r,s,i)}function Ka(e,t,n,r,i,s){im(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Cc(t,n,!1),wt(e,t,s);r=t.stateNode,w0.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=rr(t,e.child,null,s),t.child=rr(t,null,a,s)):ke(e,t,a,s),t.memoizedState=r.state,i&&Cc(t,n,!0),t.child}function sm(e){var t=e.stateNode;t.pendingContext?Ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ec(e,t.context,!1),Jl(e,t.containerInfo)}function Fc(e,t,n,r,i){return nr(),Yl(i),t.flags|=256,ke(e,t,n,r),t.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function om(e,t,n){var r=t.pendingProps,i=K.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(K,i&1),e===null)return Ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=io(o,r,0,null),e=gn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Xa(n),t.memoizedState=Qa,e):au(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return k0(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=$t(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$t(a,s):(s=gn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Xa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Qa,r}return s=e.child,e=s.sibling,r=$t(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function au(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&Yl(r),rr(t,e.child,null,n),e=au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k0(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Yo(Error(j(422))),Wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=io({mode:"visible",children:r.children},i,0,null),s=gn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&rr(t,e.child,null,o),t.child.memoizedState=Xa(o),t.memoizedState=Qa,s);if(!(t.mode&1))return Wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=Yo(s,r,void 0),Wi(e,t,o,r)}if(a=(o&e.childLanes)!==0,Pe||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xt(e,i),Je(r,e,i,-1))}return hu(),r=Yo(Error(j(421))),Wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=b0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Le=Ft(i.nextSibling),be=t,Y=!0,qe=null,e!==null&&(Ue[We++]=dt,Ue[We++]=ft,Ue[We++]=xn,dt=e.id,ft=e.overflow,xn=t),t=au(t,r.children),t.flags|=4096,t)}function Bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wa(e.return,t,n)}function Ko(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function am(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ke(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bc(e,n,t);else if(e.tag===19)Bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ns(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ko(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ns(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ko(t,!0,n,null,s);break;case"together":Ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function S0(e,t,n){switch(t.tag){case 3:sm(t),nr();break;case 5:Lh(t);break;case 1:Ne(t.type)&&Ss(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ts,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?om(e,t,n):(B(K,K.current&1),e=wt(e,t,n),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return am(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,rm(e,t,n)}return wt(e,t,n)}var lm,qa,um,cm;lm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qa=function(){};um=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,hn(at.current);var s=null;switch(n){case"input":i=xa(e,i),r=xa(e,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=Sa(e,i),r=Sa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ws)}Ca(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};cm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Er(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function E0(e,t,n){var r=t.pendingProps;switch(Gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ne(t.type)&&ks(),pe(t),null;case 3:return r=t.stateNode,ir(),$(je),$(ve),tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(sl(qe),qe=null))),qa(e,t),pe(t),null;case 5:eu(t);var i=hn(si.current);if(n=t.type,e!==null&&t.stateNode!=null)um(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return pe(t),null}if(e=hn(at.current),Bi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[st]=t,r[ri]=s,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)W(Mr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Xu(r,s),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},W("invalid",r);break;case"textarea":Zu(r,s),W("invalid",r)}Ca(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",""+a]):Yr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Mi(r),qu(r,s,!0);break;case"textarea":Mi(r),Ju(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ws)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_f(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[st]=t,e[ri]=r,lm(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ta(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)W(Mr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Xu(e,r),i=xa(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":Zu(e,r),i=Sa(e,r),W("invalid",e);break;default:i=r}Ca(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Kr(e,l):typeof l=="number"&&Kr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&W("scroll",e):l!=null&&Rl(e,s,l,o))}switch(n){case"input":Mi(e),qu(e,r,!1);break;case"textarea":Mi(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Kn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ws)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)cm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=hn(si.current),hn(at.current),Bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(s=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Fi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return pe(t),null;case 13:if($(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Le!==null&&t.mode&1&&!(t.flags&128))Nh(),nr(),t.flags|=98560,s=!1;else if(s=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[st]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),s=!1}else qe!==null&&(sl(qe),qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ae===0&&(ae=3):hu())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return ir(),qa(e,t),e===null&&ti(t.stateNode.containerInfo),pe(t),null;case 10:return Xl(t.type._context),pe(t),null;case 17:return Ne(t.type)&&ks(),pe(t),null;case 19:if($(K),s=t.memoizedState,s===null)return pe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Er(s,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ns(e),o!==null){for(t.flags|=128,Er(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(K,K.current&1|2),t.child}e=e.sibling}s.tail!==null&&te()>or&&(t.flags|=128,r=!0,Er(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ns(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Er(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return pe(t),null}else 2*te()-s.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,Er(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=te(),t.sibling=null,n=K.current,B(K,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function C0(e,t){switch(Gl(t),t.tag){case 1:return Ne(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),$(je),$(ve),tu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eu(t),null;case 13:if($(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(K),null;case 4:return ir(),null;case 10:return Xl(t.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var $i=!1,ye=!1,T0=typeof WeakSet=="function"?WeakSet:Set,I=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Za(e,t,n){try{n()}catch(r){J(e,t,r)}}var Uc=!1;function P0(e,t){if(Da=ys,e=ph(),$l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Va={focusedElem:e,selectionRange:n},ys=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,k=v.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),k);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=Uc,Uc=!1,v}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Za(t,n,s)}i=i.next}while(i!==r)}}function no(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dm(e){var t=e.alternate;t!==null&&(e.alternate=null,dm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[ri],delete t[za],delete t[l0],delete t[u0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fm(e){return e.tag===5||e.tag===3||e.tag===4}function Wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ws));else if(r!==4&&(e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}var de=null,Xe=!1;function jt(e,t,n){for(n=n.child;n!==null;)hm(e,t,n),n=n.sibling}function hm(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ks,n)}catch{}switch(n.tag){case 5:ye||Bn(n,t);case 6:var r=de,i=Xe;de=null,jt(e,t,n),de=r,Xe=i,de!==null&&(Xe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Xe?(e=de,n=n.stateNode,e.nodeType===8?Bo(e.parentNode,n):e.nodeType===1&&Bo(e,n),Zr(e)):Bo(de,n.stateNode));break;case 4:r=de,i=Xe,de=n.stateNode.containerInfo,Xe=!0,jt(e,t,n),de=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Za(n,t,o),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!ye&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,jt(e,t,n),ye=r):jt(e,t,n);break;default:jt(e,t,n)}}function $c(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new T0),t.forEach(function(r){var i=D0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Xe=!1;break e;case 3:de=a.stateNode.containerInfo,Xe=!0;break e;case 4:de=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(de===null)throw Error(j(160));hm(s,o,i),de=null,Xe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mm(t,e),t=t.sibling}function mm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),nt(e),r&4){try{Fr(3,e,e.return),no(3,e)}catch(x){J(e,e.return,x)}try{Fr(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:Ke(t,e),nt(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(Ke(t,e),nt(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var i=e.stateNode;try{Kr(i,"")}catch(x){J(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vf(i,s),Ta(a,o);var u=Ta(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Bf(i,f):d==="dangerouslySetInnerHTML"?zf(i,f):d==="children"?Kr(i,f):Rl(i,d,f,u)}switch(a){case"input":wa(i,s);break;case"textarea":Of(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Kn(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Kn(i,!!s.multiple,s.defaultValue,!0):Kn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ri]=s}catch(x){J(e,e.return,x)}}break;case 6:if(Ke(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){J(e,e.return,x)}}break;case 3:if(Ke(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:Ke(t,e),nt(e);break;case 13:Ke(t,e),nt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cu=te())),r&4&&$c(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||d,Ke(t,e),ye=u):Ke(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(f=I=d;I!==null;){switch(h=I,g=h.child,h.tag){case 0:case 11:case 14:case 15:Fr(4,h,h.return);break;case 1:Bn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){J(r,n,x)}}break;case 5:Bn(h,h.return);break;case 22:if(h.memoizedState!==null){Gc(f);continue}}g!==null?(g.return=h,I=g):Gc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ff("display",o))}catch(x){J(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){J(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ke(t,e),nt(e),r&4&&$c(e);break;case 21:break;default:Ke(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fm(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kr(i,""),r.flags&=-33);var s=Wc(e);tl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wc(e);el(e,a,o);break;default:throw Error(j(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function j0(e,t,n){I=e,pm(e)}function pm(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$i;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=$i;var u=ye;if($i=o,(ye=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Yc(i):l!==null?(l.return=o,I=l):Yc(i);for(;s!==null;)I=s,pm(s),s=s.sibling;I=i,$i=a,ye=u}Hc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):Hc(e)}}function Hc(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||no(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ac(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ac(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Zr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ye||t.flags&512&&Ja(t)}catch(h){J(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Gc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Yc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{no(4,t)}catch(l){J(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){J(t,i,l)}}var s=t.return;try{Ja(t)}catch(l){J(t,s,l)}break;case 5:var o=t.return;try{Ja(t)}catch(l){J(t,o,l)}}}catch(l){J(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var N0=Math.ceil,Rs=St.ReactCurrentDispatcher,lu=St.ReactCurrentOwner,He=St.ReactCurrentBatchConfig,_=0,ce=null,ie=null,fe=0,Me=0,Un=Zt(0),ae=0,ui=null,kn=0,ro=0,uu=0,Br=null,Te=null,cu=0,or=1/0,ut=null,Ms=!1,nl=null,Ut=null,Hi=!1,Dt=null,Ls=0,Ur=0,rl=null,as=-1,ls=0;function Se(){return _&6?te():as!==-1?as:as=te()}function Wt(e){return e.mode&1?_&2&&fe!==0?fe&-fe:d0.transition!==null?(ls===0&&(ls=Jf()),ls):(e=z,e!==0||(e=window.event,e=e===void 0?16:oh(e.type)),e):1}function Je(e,t,n,r){if(50<Ur)throw Ur=0,rl=null,Error(j(185));ki(e,n,r),(!(_&2)||e!==ce)&&(e===ce&&(!(_&2)&&(ro|=n),ae===4&&Lt(e,fe)),Ae(e,r),n===1&&_===0&&!(t.mode&1)&&(or=te()+500,Js&&Jt()))}function Ae(e,t){var n=e.callbackNode;dy(e,t);var r=gs(e,e===ce?fe:0);if(r===0)n!==null&&nc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nc(n),t===1)e.tag===0?c0(Kc.bind(null,e)):Th(Kc.bind(null,e)),o0(function(){!(_&6)&&Jt()}),n=null;else{switch(eh(r)){case 1:n=Vl;break;case 4:n=qf;break;case 16:n=ps;break;case 536870912:n=Zf;break;default:n=ps}n=Em(n,gm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gm(e,t){if(as=-1,ls=0,_&6)throw Error(j(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=gs(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bs(e,r);else{t=r;var i=_;_|=2;var s=vm();(ce!==e||fe!==t)&&(ut=null,or=te()+500,pn(e,t));do try{R0();break}catch(a){ym(e,a)}while(!0);Ql(),Rs.current=s,_=i,ie!==null?t=0:(ce=null,fe=0,t=ae)}if(t!==0){if(t===2&&(i=Ia(e),i!==0&&(r=i,t=il(e,i))),t===1)throw n=ui,pn(e,0),Lt(e,r),Ae(e,te()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!A0(i)&&(t=bs(e,r),t===2&&(s=Ia(e),s!==0&&(r=s,t=il(e,s))),t===1))throw n=ui,pn(e,0),Lt(e,r),Ae(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:an(e,Te,ut);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=cu+500-te(),10<t)){if(gs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_a(an.bind(null,e,Te,ut),t);break}an(e,Te,ut);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ze(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N0(r/1960))-r,10<r){e.timeoutHandle=_a(an.bind(null,e,Te,ut),r);break}an(e,Te,ut);break;case 5:an(e,Te,ut);break;default:throw Error(j(329))}}}return Ae(e,te()),e.callbackNode===n?gm.bind(null,e):null}function il(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=bs(e,t),e!==2&&(t=Te,Te=n,t!==null&&sl(t)),e}function sl(e){Te===null?Te=e:Te.push.apply(Te,e)}function A0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~uu,t&=~ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Kc(e){if(_&6)throw Error(j(327));Jn();var t=gs(e,0);if(!(t&1))return Ae(e,te()),null;var n=bs(e,t);if(e.tag!==0&&n===2){var r=Ia(e);r!==0&&(t=r,n=il(e,r))}if(n===1)throw n=ui,pn(e,0),Lt(e,t),Ae(e,te()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Te,ut),Ae(e,te()),null}function du(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(or=te()+500,Js&&Jt())}}function Sn(e){Dt!==null&&Dt.tag===0&&!(_&6)&&Jn();var t=_;_|=1;var n=He.transition,r=z;try{if(He.transition=null,z=1,e)return e()}finally{z=r,He.transition=n,_=t,!(_&6)&&Jt()}}function fu(){Me=Un.current,$(Un)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,s0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Gl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ks();break;case 3:ir(),$(je),$(ve),tu();break;case 5:eu(r);break;case 4:ir();break;case 13:$(K);break;case 19:$(K);break;case 10:Xl(r.type._context);break;case 22:case 23:fu()}n=n.return}if(ce=e,ie=e=$t(e.current,null),fe=Me=t,ae=0,ui=null,uu=ro=kn=0,Te=Br=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fn=null}return e}function ym(e,t){do{var n=ie;try{if(Ql(),is.current=Is,As){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}As=!1}if(wn=0,ue=oe=X=null,zr=!1,oi=0,lu.current=null,n===null||n.return===null){ae=1,ui=t,ie=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Dc(o);if(g!==null){g.flags&=-257,Vc(g,o,a,s,t),g.mode&1&&bc(s,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){bc(s,u,t),hu();break e}l=Error(j(426))}}else if(Y&&a.mode&1){var k=Dc(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Vc(k,o,a,s,t),Yl(sr(l,a));break e}}s=l=sr(l,a),ae!==4&&(ae=2),Br===null?Br=[s]:Br.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=em(s,l,t);Nc(s,y);break e;case 1:a=l;var m=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ut===null||!Ut.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=tm(s,a,t);Nc(s,w);break e}}s=s.return}while(s!==null)}wm(n)}catch(E){t=E,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function vm(){var e=Rs.current;return Rs.current=Is,e===null?Is:e}function hu(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(kn&268435455)&&!(ro&268435455)||Lt(ce,fe)}function bs(e,t){var n=_;_|=2;var r=vm();(ce!==e||fe!==t)&&(ut=null,pn(e,t));do try{I0();break}catch(i){ym(e,i)}while(!0);if(Ql(),_=n,Rs.current=r,ie!==null)throw Error(j(261));return ce=null,fe=0,ae}function I0(){for(;ie!==null;)xm(ie)}function R0(){for(;ie!==null&&!ny();)xm(ie)}function xm(e){var t=Sm(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?wm(e):ie=t,lu.current=null}function wm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=C0(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(n=E0(n,t,Me),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function an(e,t,n){var r=z,i=He.transition;try{He.transition=null,z=1,M0(e,t,n,r)}finally{He.transition=i,z=r}return null}function M0(e,t,n,r){do Jn();while(Dt!==null);if(_&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(fy(e,s),e===ce&&(ie=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hi||(Hi=!0,Em(ps,function(){return Jn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=He.transition,He.transition=null;var o=z;z=1;var a=_;_|=4,lu.current=null,P0(e,n),mm(n,e),Zy(Va),ys=!!Da,Va=Da=null,e.current=n,j0(n),ry(),_=a,z=o,He.transition=s}else e.current=n;if(Hi&&(Hi=!1,Dt=e,Ls=i),s=e.pendingLanes,s===0&&(Ut=null),oy(n.stateNode),Ae(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ms)throw Ms=!1,e=nl,nl=null,e;return Ls&1&&e.tag!==0&&Jn(),s=e.pendingLanes,s&1?e===rl?Ur++:(Ur=0,rl=e):Ur=0,Jt(),null}function Jn(){if(Dt!==null){var e=eh(Ls),t=He.transition,n=z;try{if(He.transition=null,z=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Ls=0,_&6)throw Error(j(331));var i=_;for(_|=4,I=e.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Fr(8,d,s)}var f=d.child;if(f!==null)f.return=d,I=f;else for(;I!==null;){d=I;var h=d.sibling,g=d.return;if(dm(d),d===u){I=null;break}if(h!==null){h.return=g,I=h;break}I=g}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fr(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,I=y;break e}I=s.return}}var m=e.current;for(I=m;I!==null;){o=I;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,I=p;else e:for(o=m;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:no(9,a)}}catch(E){J(a,a.return,E)}if(a===o){I=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,I=w;break e}I=a.return}}if(_=i,Jt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ks,e)}catch{}r=!0}return r}finally{z=n,He.transition=t}}return!1}function Qc(e,t,n){t=sr(n,t),t=em(e,t,1),e=Bt(e,t,1),t=Se(),e!==null&&(ki(e,1,t),Ae(e,t))}function J(e,t,n){if(e.tag===3)Qc(e,e,n);else for(;t!==null;){if(t.tag===3){Qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=sr(n,e),e=tm(t,e,1),t=Bt(t,e,1),e=Se(),t!==null&&(ki(t,1,e),Ae(t,e));break}}t=t.return}}function L0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-cu?pn(e,0):uu|=n),Ae(e,t)}function km(e,t){t===0&&(e.mode&1?(t=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):t=1);var n=Se();e=xt(e,t),e!==null&&(ki(e,t,n),Ae(e,n))}function b0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),km(e,n)}function D0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),km(e,n)}var Sm;Sm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,S0(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Y&&t.flags&1048576&&Ph(t,Cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;os(e,t),e=t.pendingProps;var i=tr(t,ve.current);Zn(t,n),i=ru(null,t,r,e,i,n);var s=iu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,Ss(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zl(t),i.updater=to,t.stateNode=i,i._reactInternals=t,Ha(t,r,e,n),t=Ka(null,t,r,!0,s,n)):(t.tag=0,Y&&s&&Hl(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=O0(r),e=Qe(r,e),i){case 0:t=Ya(null,t,r,e,n);break e;case 1:t=zc(null,t,r,e,n);break e;case 11:t=Oc(null,t,r,e,n);break e;case 14:t=_c(null,t,r,Qe(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),zc(e,t,r,i,n);case 3:e:{if(sm(t),e===null)throw Error(j(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Mh(e,t),js(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=sr(Error(j(423)),t),t=Fc(e,t,r,n,i);break e}else if(r!==i){i=sr(Error(j(424)),t),t=Fc(e,t,r,n,i);break e}else for(Le=Ft(t.stateNode.containerInfo.firstChild),be=t,Y=!0,qe=null,n=Ih(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=wt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Lh(t),e===null&&Ua(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Oa(r,i)?o=null:s!==null&&Oa(r,s)&&(t.flags|=32),im(e,t),ke(e,t,o,n),t.child;case 6:return e===null&&Ua(t),null;case 13:return om(e,t,n);case 4:return Jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Oc(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,B(Ts,r._currentValue),r._currentValue=o,s!==null)if(et(s.value,o)){if(s.children===i.children&&!je.current){t=wt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wa(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zn(t,n),i=Ge(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),_c(e,t,r,i,n);case 15:return nm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),os(e,t),t.tag=1,Ne(r)?(e=!0,Ss(t)):e=!1,Zn(t,n),Jh(t,r,i),Ha(t,r,i,n),Ka(null,t,r,!0,e,n);case 19:return am(e,t,n);case 22:return rm(e,t,n)}throw Error(j(156,t.tag))};function Em(e,t){return Xf(e,t)}function V0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new V0(e,t,n,r)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O0(e){if(typeof e=="function")return mu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ll)return 11;if(e===bl)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function us(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")mu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mn:return gn(n.children,i,s,t);case Ml:o=8,i|=8;break;case pa:return e=$e(12,n,t,i|2),e.elementType=pa,e.lanes=s,e;case ga:return e=$e(13,n,t,i),e.elementType=ga,e.lanes=s,e;case ya:return e=$e(19,n,t,i),e.elementType=ya,e.lanes=s,e;case Lf:return io(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rf:o=10;break e;case Mf:o=9;break e;case Ll:o=11;break e;case bl:o=14;break e;case At:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=$e(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function gn(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function io(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Lf,e.lanes=n,e.stateNode={isHidden:!1},e}function Qo(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Xo(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Io(0),this.expirationTimes=Io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Io(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pu(e,t,n,r,i,s,o,a,l){return e=new _0(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=$e(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(s),e}function z0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cm(e){if(!e)return Kt;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Ch(e,n,t)}return t}function Tm(e,t,n,r,i,s,o,a,l){return e=pu(n,r,!0,e,i,s,o,a,l),e.context=Cm(null),n=e.current,r=Se(),i=Wt(n),s=mt(r,i),s.callback=t??null,Bt(n,s,i),e.current.lanes=i,ki(e,i,r),Ae(e,r),e}function so(e,t,n,r){var i=t.current,s=Se(),o=Wt(i);return n=Cm(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(i,t,o),e!==null&&(Je(e,i,o,s),rs(e,i,o)),o}function Ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gu(e,t){Xc(e,t),(e=e.alternate)&&Xc(e,t)}function F0(){return null}var Pm=typeof reportError=="function"?reportError:function(e){console.error(e)};function yu(e){this._internalRoot=e}oo.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));so(e,t,null,null)};oo.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){so(null,e,null,null)}),t[vt]=null}};function oo(e){this._internalRoot=e}oo.prototype.unstable_scheduleHydration=function(e){if(e){var t=rh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&sh(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function B0(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ds(o);s.call(u)}}var o=Tm(t,r,e,0,null,!1,!1,"",qc);return e._reactRootContainer=o,e[vt]=o.current,ti(e.nodeType===8?e.parentNode:e),Sn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ds(l);a.call(u)}}var l=pu(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=l,e[vt]=l.current,ti(e.nodeType===8?e.parentNode:e),Sn(function(){so(t,l,n,r)}),l}function lo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ds(o);a.call(l)}}so(t,o,e,i)}else o=B0(n,t,e,i,r);return Ds(o)}th=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(Ol(t,n|1),Ae(t,te()),!(_&6)&&(or=te()+500,Jt()))}break;case 13:Sn(function(){var r=xt(e,1);if(r!==null){var i=Se();Je(r,e,1,i)}}),gu(e,1)}};_l=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Se();Je(t,e,134217728,n)}gu(e,134217728)}};nh=function(e){if(e.tag===13){var t=Wt(e),n=xt(e,t);if(n!==null){var r=Se();Je(n,e,t,r)}gu(e,t)}};rh=function(){return z};ih=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};ja=function(e,t,n){switch(t){case"input":if(wa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zs(r);if(!i)throw Error(j(90));Df(r),wa(r,i)}}}break;case"textarea":Of(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};$f=du;Hf=Sn;var U0={usingClientEntryPoint:!1,Events:[Ei,Vn,Zs,Uf,Wf,du]},Cr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W0={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kf(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ks=Gi.inject(W0),ot=Gi}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(j(200));return z0(e,t,null,n)};Oe.createRoot=function(e,t){if(!vu(e))throw Error(j(299));var n=!1,r="",i=Pm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pu(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,ti(e.nodeType===8?e.parentNode:e),new yu(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Kf(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Sn(e)};Oe.hydrate=function(e,t,n){if(!ao(t))throw Error(j(200));return lo(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Tm(t,null,e,1,n??null,i,!1,s,o),e[vt]=t.current,ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new oo(t)};Oe.render=function(e,t,n){if(!ao(t))throw Error(j(200));return lo(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!ao(e))throw Error(j(40));return e._reactRootContainer?(Sn(function(){lo(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Oe.unstable_batchedUpdates=du;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ao(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return lo(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function jm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jm)}catch(e){console.error(e)}}jm(),jf.exports=Oe;var $0=jf.exports,Zc=$0;ha.createRoot=Zc.createRoot,ha.hydrateRoot=Zc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ci.apply(this,arguments)}var Vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vt||(Vt={}));const Jc="popstate";function H0(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:a="",hash:l=""}=Tn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ol("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Vs(s))}function r(i,s){uo(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Y0(t,n,r,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function G0(){return Math.random().toString(36).substr(2,8)}function ed(e,t){return{usr:e.state,key:e.key,idx:t}}function ol(e,t,n,r){return n===void 0&&(n=null),ci({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tn(t):t,{state:n,key:t&&t.key||r||G0()})}function Vs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Y0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ci({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Vt.Pop;let k=d(),y=k==null?null:k-u;u=k,l&&l({action:a,location:x.location,delta:y})}function h(k,y){a=Vt.Push;let m=ol(x.location,k,y);n&&n(m,k),u=d()+1;let p=ed(m,u),w=x.createHref(m);try{o.pushState(p,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}s&&l&&l({action:a,location:x.location,delta:1})}function g(k,y){a=Vt.Replace;let m=ol(x.location,k,y);n&&n(m,k),u=d();let p=ed(m,u),w=x.createHref(m);o.replaceState(p,"",w),s&&l&&l({action:a,location:x.location,delta:0})}function v(k){let y=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof k=="string"?k:Vs(k);return m=m.replace(/ $/,"%20"),q(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let x={get action(){return a},get location(){return e(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Jc,f),l=k,()=>{i.removeEventListener(Jc,f),l=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let y=v(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:g,go(k){return o.go(k)}};return x}var td;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(td||(td={}));function K0(e,t,n){return n===void 0&&(n="/"),Q0(e,t,n)}function Q0(e,t,n,r){let i=typeof t=="string"?Tn(t):t,s=ar(i.pathname||"/",n);if(s==null)return null;let o=Nm(e);X0(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=av(s);a=sv(o[l],u)}return a}function Nm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ht([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nm(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:rv(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Am(s.path))i(s,o,l)}),t}function Am(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Am(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function X0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:iv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const q0=/^:[\w-]+$/,Z0=3,J0=2,ev=1,tv=10,nv=-2,nd=e=>e==="*";function rv(e,t){let n=e.split("/"),r=n.length;return n.some(nd)&&(r+=nv),t&&(r+=J0),n.filter(i=>!nd(i)).reduce((i,s)=>i+(q0.test(s)?Z0:s===""?ev:tv),r)}function iv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sv(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=al({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ht([s,f.pathname]),pathnameBase:fv(Ht([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Ht([s,f.pathnameBase]))}return o}function al(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ov(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function ov(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),uo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function av(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return uo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ar(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uv=e=>lv.test(e);function cv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Tn(e):e,s;if(n)if(uv(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),uo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=rd(n.substring(1),"/"):s=rd(n,t)}else s=t;return{pathname:s,search:hv(r),hash:mv(i)}}function rd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function xu(e,t){let n=dv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Tn(e):(i=ci({},e),q(!i.pathname||!i.pathname.includes("?"),qo("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),qo("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),qo("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=cv(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ht=e=>e.join("/").replace(/\/\/+/g,"/"),fv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Im=["post","put","patch","delete"];new Set(Im);const gv=["get",...Im];new Set(gv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},di.apply(this,arguments)}const co=S.createContext(null),Rm=S.createContext(null),Et=S.createContext(null),fo=S.createContext(null),Ct=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Mm=S.createContext(null);function yv(e,t){let{relative:n}=t===void 0?{}:t;pr()||q(!1);let{basename:r,navigator:i}=S.useContext(Et),{hash:s,pathname:o,search:a}=ho(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ht([r,o])),i.createHref({pathname:l,search:a,hash:s})}function pr(){return S.useContext(fo)!=null}function Pn(){return pr()||q(!1),S.useContext(fo).location}function Lm(e){S.useContext(Et).static||S.useLayoutEffect(e)}function gr(){let{isDataRoute:e}=S.useContext(Ct);return e?Rv():vv()}function vv(){pr()||q(!1);let e=S.useContext(co),{basename:t,future:n,navigator:r}=S.useContext(Et),{matches:i}=S.useContext(Ct),{pathname:s}=Pn(),o=JSON.stringify(xu(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Lm(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=wu(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ht([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function xv(){let{matches:e}=S.useContext(Ct),t=e[e.length-1];return t?t.params:{}}function ho(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Et),{matches:i}=S.useContext(Ct),{pathname:s}=Pn(),o=JSON.stringify(xu(i,r.v7_relativeSplatPath));return S.useMemo(()=>wu(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function wv(e,t){return kv(e,t)}function kv(e,t,n,r){pr()||q(!1);let{navigator:i}=S.useContext(Et),{matches:s}=S.useContext(Ct),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Pn(),d;if(t){var f;let k=typeof t=="string"?Tn(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||q(!1),d=k}else d=u;let h=d.pathname||"/",g=h;if(l!=="/"){let k=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=K0(e,{pathname:g}),x=Pv(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Ht([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Ht([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&x?S.createElement(fo.Provider,{value:{location:di({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Vt.Pop}},x):x}function Sv(){let e=Iv(),t=pv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const Ev=S.createElement(Sv,null);class Cv extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Ct.Provider,{value:this.props.routeContext},S.createElement(Mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tv(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(co);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Ct.Provider,{value:t},r)}function Pv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||q(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:g}=n,v=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let g,v=!1,x=null,k=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||Ev,l&&(u<0&&h===0?(Mv("route-fallback"),v=!0,k=null):u===h&&(v=!0,k=f.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,h+1)),m=()=>{let p;return g?p=x:v?p=k:f.route.Component?p=S.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,S.createElement(Tv,{match:f,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?S.createElement(Cv,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:m(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):m()},null)}var bm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bm||{}),Dm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Dm||{});function jv(e){let t=S.useContext(co);return t||q(!1),t}function Nv(e){let t=S.useContext(Rm);return t||q(!1),t}function Av(e){let t=S.useContext(Ct);return t||q(!1),t}function Vm(e){let t=Av(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function Iv(){var e;let t=S.useContext(Mm),n=Nv(),r=Vm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Rv(){let{router:e}=jv(bm.UseNavigateStable),t=Vm(Dm.UseNavigateStable),n=S.useRef(!1);return Lm(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,di({fromRouteId:t},s)))},[e,t])}const id={};function Mv(e,t,n){id[e]||(id[e]=!0)}function Lv(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function bv(e){let{to:t,replace:n,state:r,relative:i}=e;pr()||q(!1);let{future:s,static:o}=S.useContext(Et),{matches:a}=S.useContext(Ct),{pathname:l}=Pn(),u=gr(),d=wu(t,xu(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function rt(e){q(!1)}function Dv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vt.Pop,navigator:s,static:o=!1,future:a}=e;pr()&&q(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:di({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Tn(r));let{pathname:d="/",search:f="",hash:h="",state:g=null,key:v="default"}=r,x=S.useMemo(()=>{let k=ar(d,l);return k==null?null:{location:{pathname:k,search:f,hash:h,state:g,key:v},navigationType:i}},[l,d,f,h,g,v,i]);return x==null?null:S.createElement(Et.Provider,{value:u},S.createElement(fo.Provider,{children:n,value:x}))}function Vv(e){let{children:t,location:n}=e;return wv(ll(t),n)}new Promise(()=>{});function ll(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,ll(r.props.children,s));return}r.type!==rt&&q(!1),!r.props.index||!r.props.children||q(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ll(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(this,arguments)}function Om(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ov(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _v(e,t){return e.button===0&&(!t||t==="_self")&&!Ov(e)}const zv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Bv="6";try{window.__reactRouterVersion=Bv}catch{}const Uv=S.createContext({isTransitioning:!1}),Wv="startTransition",sd=Lg[Wv];function $v(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=H0({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(f=>{u&&sd?sd(()=>l(f)):l(f)},[l,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.useEffect(()=>Lv(r),[r]),S.createElement(Dv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Hv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yv=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,h=Om(t,zv),{basename:g}=S.useContext(Et),v,x=!1;if(typeof u=="string"&&Gv.test(u)&&(v=u,Hv))try{let p=new URL(window.location.href),w=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=ar(w.pathname,g);w.origin===p.origin&&E!=null?u=E+w.search+w.hash:x=!0}catch{}let k=yv(u,{relative:i}),y=Qv(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function m(p){r&&r(p),p.defaultPrevented||y(p)}return S.createElement("a",Os({},h,{href:v||k,onClick:x||s?r:m,ref:n,target:l}))}),Tr=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:u,children:d}=t,f=Om(t,Fv),h=ho(l,{relative:f.relative}),g=Pn(),v=S.useContext(Rm),{navigator:x,basename:k}=S.useContext(Et),y=v!=null&&Xv(h)&&u===!0,m=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,p=g.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(p=p.toLowerCase(),w=w?w.toLowerCase():null,m=m.toLowerCase()),w&&k&&(w=ar(w,k)||w);const E=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let T=p===m||!o&&p.startsWith(m)&&p.charAt(E)==="/",P=w!=null&&(w===m||!o&&w.startsWith(m)&&w.charAt(m.length)==="/"),C={isActive:T,isPending:P,isTransitioning:y},R=T?r:void 0,A;typeof s=="function"?A=s(C):A=[s,T?"active":null,P?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let H=typeof a=="function"?a(C):a;return S.createElement(Yv,Os({},f,{"aria-current":R,className:A,ref:n,style:H,to:l,viewTransition:u}),typeof d=="function"?d(C):d)});var ul;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ul||(ul={}));var od;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(od||(od={}));function Kv(e){let t=S.useContext(co);return t||q(!1),t}function Qv(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=gr(),u=Pn(),d=ho(e,{relative:o});return S.useCallback(f=>{if(_v(f,n)){f.preventDefault();let h=r!==void 0?r:Vs(u)===Vs(d);l(e,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}function Xv(e,t){t===void 0&&(t={});let n=S.useContext(Uv);n==null&&q(!1);let{basename:r}=Kv(ul.useViewTransitionState),i=ho(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=ar(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ar(n.nextLocation.pathname,r)||n.nextLocation.pathname;return al(i.pathname,o)!=null||al(i.pathname,s)!=null}const qv={},ad=e=>{let t;const n=new Set,r=(d,f)=>{const h=typeof d=="function"?d(t):d;if(!Object.is(h,t)){const g=t;t=f??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(v=>v(t,g))}},i=()=>t,l={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(qv?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,l);return l},Zv=e=>e?ad(e):ad;var _m={exports:{}},zm={},Fm={exports:{}},Bm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=S;function Jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ex=typeof Object.is=="function"?Object.is:Jv,tx=lr.useState,nx=lr.useEffect,rx=lr.useLayoutEffect,ix=lr.useDebugValue;function sx(e,t){var n=t(),r=tx({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return rx(function(){i.value=n,i.getSnapshot=t,Zo(i)&&s({inst:i})},[e,n,t]),nx(function(){return Zo(i)&&s({inst:i}),e(function(){Zo(i)&&s({inst:i})})},[e]),ix(n),n}function Zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ex(e,n)}catch{return!0}}function ox(e,t){return t()}var ax=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ox:sx;Bm.useSyncExternalStore=lr.useSyncExternalStore!==void 0?lr.useSyncExternalStore:ax;Fm.exports=Bm;var lx=Fm.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=S,ux=lx;function cx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dx=typeof Object.is=="function"?Object.is:cx,fx=ux.useSyncExternalStore,hx=mo.useRef,mx=mo.useEffect,px=mo.useMemo,gx=mo.useDebugValue;zm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=hx(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=px(function(){function l(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&o.hasValue){var v=o.value;if(i(v,g))return f=v}return f=g}if(v=f,dx(d,g))return v;var x=r(g);return i!==void 0&&i(v,x)?(d=g,v):(d=g,f=x)}var u=!1,d,f,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=fx(e,s[0],s[1]);return mx(function(){o.hasValue=!0,o.value=a},[a]),gx(a),a};_m.exports=zm;var yx=_m.exports;const vx=pf(yx),Um={},{useDebugValue:xx}=wi,{useSyncExternalStoreWithSelector:wx}=vx;let ld=!1;const kx=e=>e;function Sx(e,t=kx,n){(Um?"production":void 0)!=="production"&&n&&!ld&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ld=!0);const r=wx(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return xx(r),r}const ud=e=>{(Um?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Zv(e):e,n=(r,i)=>Sx(t,r,i);return Object.assign(n,t),n},Ex=e=>e?ud(e):ud,Cx={};function Tx(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var s;const o=l=>l===null?null:JSON.parse(l,void 0),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const fi=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return fi(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return fi(r)(n)}}}},Px=(e,t)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:k=>k,version:0,merge:(k,y)=>({...y,...k}),...t},o=!1;const a=new Set,l=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return e((...k)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...k)},r,i);const d=fi(s.serialize),f=()=>{const k=s.partialize({...r()});let y;const m=d({state:k,version:s.version}).then(p=>u.setItem(s.name,p)).catch(p=>{y=p});if(y)throw y;return m},h=i.setState;i.setState=(k,y)=>{h(k,y),f()};const g=e((...k)=>{n(...k),f()},r,i);let v;const x=()=>{var k;if(!u)return;o=!1,a.forEach(m=>m(r()));const y=((k=s.onRehydrateStorage)==null?void 0:k.call(s,r()))||void 0;return fi(u.getItem.bind(u))(s.name).then(m=>{if(m)return s.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==s.version){if(s.migrate)return s.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var p;return v=s.merge(m,(p=r())!=null?p:g),n(v,!0),f()}).then(()=>{y==null||y(v,void 0),o=!0,l.forEach(m=>m(v))}).catch(m=>{y==null||y(void 0,m)})};return i.persist={setOptions:k=>{s={...s,...k},k.getStorage&&(u=k.getStorage())},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>x(),hasHydrated:()=>o,onHydrate:k=>(a.add(k),()=>{a.delete(k)}),onFinishHydration:k=>(l.add(k),()=>{l.delete(k)})},x(),v||g},jx=(e,t)=>(n,r,i)=>{let s={storage:Tx(()=>localStorage),partialize:x=>x,version:0,merge:(x,k)=>({...k,...x}),...t},o=!1;const a=new Set,l=new Set;let u=s.storage;if(!u)return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...x)},r,i);const d=()=>{const x=s.partialize({...r()});return u.setItem(s.name,{state:x,version:s.version})},f=i.setState;i.setState=(x,k)=>{f(x,k),d()};const h=e((...x)=>{n(...x),d()},r,i);i.getInitialState=()=>h;let g;const v=()=>{var x,k;if(!u)return;o=!1,a.forEach(m=>{var p;return m((p=r())!=null?p:h)});const y=((k=s.onRehydrateStorage)==null?void 0:k.call(s,(x=r())!=null?x:h))||void 0;return fi(u.getItem.bind(u))(s.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==s.version){if(s.migrate)return[!0,s.migrate(m.state,m.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,m.state];return[!1,void 0]}).then(m=>{var p;const[w,E]=m;if(g=s.merge(E,(p=r())!=null?p:h),n(g,!0),w)return d()}).then(()=>{y==null||y(g,void 0),g=r(),o=!0,l.forEach(m=>m(g))}).catch(m=>{y==null||y(void 0,m)})};return i.persist={setOptions:x=>{s={...s,...x},x.storage&&(u=x.storage)},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>v(),hasHydrated:()=>o,onHydrate:x=>(a.add(x),()=>{a.delete(x)}),onFinishHydration:x=>(l.add(x),()=>{l.delete(x)})},s.skipHydration||v(),g||h},Nx=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((Cx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Px(e,t)):jx(e,t),Ax=Nx,Ix=[{id:"week1-day1",title:"Day 1: Social Media & Smartphone Life",day:1,week:1,completed:!1,xp:0},{id:"week1-day2",title:"Day 2: Money & Online Shopping",day:2,week:1,completed:!1,xp:0},{id:"week1-day3",title:"Day 3: Fitness & Exercise",day:3,week:1,completed:!1,xp:0},{id:"week1-day4",title:"Day 4: Movies & Entertainment",day:4,week:1,completed:!1,xp:0},{id:"week1-day5",title:"Day 5: Travel & Vacations",day:5,week:1,completed:!1,xp:0},{id:"week1-day6",title:"Day 6: Technology & Social Media",day:6,week:1,completed:!1,xp:0},{id:"week1-day7",title:"Day 7: Week 1 Review",day:7,week:1,completed:!1,xp:0}],Rx=[{id:"first-lesson",name:"First Steps",description:"Complete your first lesson",icon:"🎯",unlocked:!1},{id:"streak-3",name:"3-Day Streak",description:"Learn for 3 days in a row",icon:"🔥",unlocked:!1},{id:"streak-7",name:"Week Warrior",description:"Learn for 7 days in a row",icon:"⚡",unlocked:!1},{id:"xp-100",name:"100 XP Club",description:"Earn 100 XP",icon:"⭐",unlocked:!1},{id:"xp-500",name:"500 XP Master",description:"Earn 500 XP",icon:"🏆",unlocked:!1},{id:"vocab-10",name:"Vocabulary Builder",description:"Learn 10 words",icon:"📚",unlocked:!1},{id:"vocab-50",name:"Word Collector",description:"Learn 50 words",icon:"🎓",unlocked:!1},{id:"game-win",name:"Game Champion",description:"Win a game",icon:"🎮",unlocked:!1},{id:"perfect-lesson",name:"Perfect Score",description:"Get 100% on a lesson",icon:"💯",unlocked:!1},{id:"all-week1",name:"Week 1 Complete",description:"Complete all Week 1 lessons",icon:"🎉",unlocked:!1}],Tt=Ex(Ax((e,t)=>({user:{name:"Learner",level:1,xp:0,streak:0,lastLogin:null},lessons:Ix,achievements:Rx,flashcards:[],gameStats:{gamesPlayed:0,gamesWon:0,highScore:0},settings:{soundEnabled:!0,darkMode:!0,notifications:!0},addXP:n=>{e(r=>{const i=r.user.xp+n,s=Math.floor(i/200)+1;return{user:{...r.user,xp:i,level:s}}}),t().checkAchievements()},completeLesson:(n,r)=>{e(i=>({lessons:i.lessons.map(s=>s.id===n?{...s,completed:!0,xp:r}:s)})),t().addXP(r)},updateStreak:()=>{const n=new Date().toDateString();e(r=>{const i=r.user.lastLogin;if(i===n)return r;const s=new Date(Date.now()-864e5).toDateString(),o=i===s?r.user.streak+1:1;return{user:{...r.user,streak:o,lastLogin:n}}}),t().checkAchievements()},addFlashcard:n=>{e(r=>({flashcards:[...r.flashcards,{...n,id:Date.now(),learned:!1}]}))},markFlashcardLearned:n=>{e(r=>({flashcards:r.flashcards.map(i=>i.id===n?{...i,learned:!0}:i)}))},incrementGamesPlayed:()=>{e(n=>({gameStats:{...n.gameStats,gamesPlayed:n.gameStats.gamesPlayed+1}}))},winGame:n=>{e(r=>({gameStats:{gamesPlayed:r.gameStats.gamesPlayed+1,gamesWon:r.gameStats.gamesWon+1,highScore:Math.max(r.gameStats.highScore,n)}})),t().checkAchievements()},unlockAchievement:n=>{e(r=>({achievements:r.achievements.map(i=>i.id===n?{...i,unlocked:!0}:i)}))},checkAchievements:()=>{const n=t(),{xp:r,streak:i}=n.user,s=n.lessons.filter(l=>l.completed).length,o=n.flashcards.filter(l=>l.learned).length;[{id:"first-lesson",condition:s>=1},{id:"streak-3",condition:i>=3},{id:"streak-7",condition:i>=7},{id:"xp-100",condition:r>=100},{id:"xp-500",condition:r>=500},{id:"vocab-10",condition:o>=10},{id:"vocab-50",condition:o>=50},{id:"game-win",condition:n.gameStats.gamesWon>=1},{id:"all-week1",condition:s>=7}].forEach(({id:l,condition:u})=>{if(u){const d=n.achievements.find(f=>f.id===l);d&&!d.unlocked&&t().unlockAchievement(l)}})},updateSettings:n=>{e(r=>({settings:{...r.settings,...n}}))}}),{name:"english-learning-storage",partialize:e=>({user:e.user,lessons:e.lessons,achievements:e.achievements,flashcards:e.flashcards,gameStats:e.gameStats,settings:e.settings})})),Wm=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),po=S.createContext({}),go=S.createContext(null),yo=typeof document<"u",ku=yo?S.useLayoutEffect:S.useEffect,$m=S.createContext({strict:!1}),Su=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Mx="framerAppearId",Hm="data-"+Su(Mx);function Lx(e,t,n,r){const{visualElement:i}=S.useContext(po),s=S.useContext($m),o=S.useContext(go),a=S.useContext(Wm).reducedMotion,l=S.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;S.useInsertionEffect(()=>{u&&u.update(n,o)});const d=S.useRef(!!(n[Hm]&&!window.HandoffComplete));return ku(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),S.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Wn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function bx(e,t,n){return S.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Wn(n)&&(n.current=r))},[t])}function hi(e){return typeof e=="string"||Array.isArray(e)}function vo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Eu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cu=["initial",...Eu];function xo(e){return vo(e.animate)||Cu.some(t=>hi(e[t]))}function Gm(e){return!!(xo(e)||e.variants)}function Dx(e,t){if(xo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||hi(n)?n:void 0,animate:hi(r)?r:void 0}}return e.inherit!==!1?t:{}}function Vx(e){const{initial:t,animate:n}=Dx(e,S.useContext(po));return S.useMemo(()=>({initial:t,animate:n}),[cd(t),cd(n)])}function cd(e){return Array.isArray(e)?e.join(" "):e}const dd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},mi={};for(const e in dd)mi[e]={isEnabled:t=>dd[e].some(n=>!!t[n])};function Ox(e){for(const t in e)mi[t]={...mi[t],...e[t]}}const Tu=S.createContext({}),Ym=S.createContext({}),_x=Symbol.for("motionComponentSymbol");function zx({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Ox(e);function s(a,l){let u;const d={...S.useContext(Wm),...a,layoutId:Fx(a)},{isStatic:f}=d,h=Vx(a),g=r(a,f);if(!f&&yo){h.visualElement=Lx(i,g,d,t);const v=S.useContext(Ym),x=S.useContext($m).strict;h.visualElement&&(u=h.visualElement.loadFeatures(d,x,e,v))}return S.createElement(po.Provider,{value:h},u&&h.visualElement?S.createElement(u,{visualElement:h.visualElement,...d}):null,n(i,a,bx(g,h.visualElement,l),g,f,h.visualElement))}const o=S.forwardRef(s);return o[_x]=i,o}function Fx({layoutId:e}){const t=S.useContext(Tu).id;return t&&e!==void 0?t+"-"+e:e}function Bx(e){function t(r,i={}){return zx(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Ux=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pu(e){return typeof e!="string"||e.includes("-")?!1:!!(Ux.indexOf(e)>-1||/[A-Z]/.test(e))}const _s={};function Wx(e){Object.assign(_s,e)}const Ti=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jn=new Set(Ti);function Km(e,{layout:t,layoutId:n}){return jn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!_s[e]||e==="opacity")}const Ie=e=>!!(e&&e.getVelocity),$x={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Hx=Ti.length;function Gx(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<Hx;o++){const a=Ti[o];if(e[a]!==void 0){const l=$x[a]||a;s+=`${l}(${e[a]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}const Qm=e=>t=>typeof t=="string"&&t.startsWith(e),Xm=Qm("--"),cl=Qm("var(--"),Yx=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Kx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Qt=(e,t,n)=>Math.min(Math.max(n,e),t),Nn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Wr={...Nn,transform:e=>Qt(0,1,e)},Yi={...Nn,default:1},$r=e=>Math.round(e*1e5)/1e5,wo=/(-)?([\d]*\.?[\d])+/g,qm=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Qx=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Pi(e){return typeof e=="string"}const ji=e=>({test:t=>Pi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Nt=ji("deg"),lt=ji("%"),L=ji("px"),Xx=ji("vh"),qx=ji("vw"),fd={...lt,parse:e=>lt.parse(e)/100,transform:e=>lt.transform(e*100)},hd={...Nn,transform:Math.round},Zm={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,size:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,rotate:Nt,rotateX:Nt,rotateY:Nt,rotateZ:Nt,scale:Yi,scaleX:Yi,scaleY:Yi,scaleZ:Yi,skew:Nt,skewX:Nt,skewY:Nt,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Wr,originX:fd,originY:fd,originZ:L,zIndex:hd,fillOpacity:Wr,strokeOpacity:Wr,numOctaves:hd};function ju(e,t,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const f in t){const h=t[f];if(Xm(f)){s[f]=h;continue}const g=Zm[f],v=Kx(h,g);if(jn.has(f)){if(l=!0,o[f]=v,!d)continue;h!==(g.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,a[f]=v):i[f]=v}if(t.transform||(l||r?i.transform=Gx(e.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:g=0}=a;i.transformOrigin=`${f} ${h} ${g}`}}const Nu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Jm(e,t,n){for(const r in t)!Ie(t[r])&&!Km(r,n)&&(e[r]=t[r])}function Zx({transformTemplate:e},t,n){return S.useMemo(()=>{const r=Nu();return ju(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Jx(e,t,n){const r=e.style||{},i={};return Jm(i,r,e),Object.assign(i,Zx(e,t,n)),e.transformValues?e.transformValues(i):i}function e1(e,t,n){const r={},i=Jx(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const t1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||t1.has(e)}let ep=e=>!zs(e);function n1(e){e&&(ep=t=>t.startsWith("on")?!zs(t):e(t))}try{n1(require("@emotion/is-prop-valid").default)}catch{}function r1(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ep(i)||n===!0&&zs(i)||!t&&!zs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function md(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function i1(e,t,n){const r=md(t,e.x,e.width),i=md(n,e.y,e.height);return`${r} ${i}`}const s1={offset:"stroke-dashoffset",array:"stroke-dasharray"},o1={offset:"strokeDashoffset",array:"strokeDasharray"};function a1(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?s1:o1;e[s.offset]=L.transform(-r);const o=L.transform(t),a=L.transform(n);e[s.array]=`${o} ${a}`}function Au(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},d,f,h){if(ju(e,u,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:x}=e;g.transform&&(x&&(v.transform=g.transform),delete g.transform),x&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=i1(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),o!==void 0&&a1(g,o,a,l,!1)}const tp=()=>({...Nu(),attrs:{}}),Iu=e=>typeof e=="string"&&e.toLowerCase()==="svg";function l1(e,t,n,r){const i=S.useMemo(()=>{const s=tp();return Au(s,t,{enableHardwareAcceleration:!1},Iu(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Jm(s,e.style,e),i.style={...s,...i.style}}return i}function u1(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Pu(n)?l1:e1)(r,s,o,n),d={...r1(r,typeof n=="string",e),...l,ref:i},{children:f}=r,h=S.useMemo(()=>Ie(f)?f.get():f,[f]);return S.createElement(n,{...d,children:h})}}function np(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const rp=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ip(e,t,n,r){np(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(rp.has(i)?i:Su(i),t.attrs[i])}function Ru(e,t){const{style:n}=e,r={};for(const i in n)(Ie(n[i])||t.style&&Ie(t.style[i])||Km(i,e))&&(r[i]=n[i]);return r}function sp(e,t){const n=Ru(e,t);for(const r in e)if(Ie(e[r])||Ie(t[r])){const i=Ti.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Mu(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function op(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const Fs=e=>Array.isArray(e),c1=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),d1=e=>Fs(e)?e[e.length-1]||0:e;function cs(e){const t=Ie(e)?e.get():e;return c1(t)?t.toValue():t}function f1({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:h1(r,i,s,e),renderState:t()};return n&&(o.mount=a=>n(r,a,o)),o}const ap=e=>(t,n)=>{const r=S.useContext(po),i=S.useContext(go),s=()=>f1(e,t,r,i);return n?s():op(s)};function h1(e,t,n,r){const i={},s=r(e,{});for(const h in s)i[h]=cs(s[h]);let{initial:o,animate:a}=e;const l=xo(e),u=Gm(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;return f&&typeof f!="boolean"&&!vo(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const v=Mu(e,g);if(!v)return;const{transitionEnd:x,transition:k,...y}=v;for(const m in y){let p=y[m];if(Array.isArray(p)){const w=d?p.length-1:0;p=p[w]}p!==null&&(i[m]=p)}for(const m in x)i[m]=x[m]}),i}const ne=e=>e;class pd{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function m1(e){let t=new pd,n=new pd,r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const f=d&&i,h=f?t:n;return u&&o.add(l),h.add(l)&&f&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),o.has(d)&&(a.schedule(d),e())}i=!1,s&&(s=!1,a.process(l))}};return a}const Ki=["prepare","read","update","preRender","render","postRender"],p1=40;function g1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=Ki.reduce((f,h)=>(f[h]=m1(()=>n=!0),f),{}),o=f=>s[f].process(i),a=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,p1),1),i.timestamp=f,i.isProcessing=!0,Ki.forEach(o),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Ki.reduce((f,h)=>{const g=s[h];return f[h]=(v,x=!1,k=!1)=>(n||l(),g.schedule(v,x,k)),f},{}),cancel:f=>Ki.forEach(h=>s[h].cancel(f)),state:i,steps:s}}const{schedule:U,cancel:kt,state:ge,steps:Jo}=g1(typeof requestAnimationFrame<"u"?requestAnimationFrame:ne,!0),y1={useVisualState:ap({scrapeMotionValuesFromProps:sp,createRenderState:tp,onMount:(e,t,{renderState:n,latestValues:r})=>{U.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),U.render(()=>{Au(n,r,{enableHardwareAcceleration:!1},Iu(t.tagName),e.transformTemplate),ip(t,n)})}})},v1={useVisualState:ap({scrapeMotionValuesFromProps:Ru,createRenderState:Nu})};function x1(e,{forwardMotionProps:t=!1},n,r){return{...Pu(e)?y1:v1,preloadedFeatures:n,useRender:u1(t),createVisualElement:r,Component:e}}function ht(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const lp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ko(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const w1=e=>t=>lp(t)&&e(t,ko(t));function pt(e,t,n,r){return ht(e,t,w1(n),r)}const k1=(e,t)=>n=>t(e(n)),Gt=(...e)=>e.reduce(k1);function up(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const gd=up("dragHorizontal"),yd=up("dragVertical");function cp(e){let t=!1;if(e==="y")t=yd();else if(e==="x")t=gd();else{const n=gd(),r=yd();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function dp(){const e=cp(!0);return e?(e(),!1):!0}class en{constructor(t){this.isMounted=!1,this.node=t}update(){}}function vd(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||dp())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&U.update(()=>a[r](s,o))};return pt(e.current,n,i,{passive:!e.getProps()[r]})}class S1 extends en{mount(){this.unmount=Gt(vd(this.node,!0),vd(this.node,!1))}unmount(){}}class E1 extends en{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Gt(ht(this.node.current,"focus",()=>this.onFocus()),ht(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const fp=(e,t)=>t?e===t?!0:fp(e,t.parentElement):!1;function ea(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ko(n))}class C1 extends en{constructor(){super(...arguments),this.removeStartListeners=ne,this.removeEndListeners=ne,this.removeAccessibleListeners=ne,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=pt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();U.update(()=>{!f&&!fp(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=pt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Gt(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||ea("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&U.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=ht(this.node.current,"keyup",o),ea("down",(a,l)=>{this.startPress(a,l)})},n=ht(this.node.current,"keydown",t),r=()=>{this.isPressing&&ea("cancel",(s,o)=>this.cancelPress(s,o))},i=ht(this.node.current,"blur",r);this.removeAccessibleListeners=Gt(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&U.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!dp()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&U.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=pt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=ht(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Gt(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const dl=new WeakMap,ta=new WeakMap,T1=e=>{const t=dl.get(e.target);t&&t(e)},P1=e=>{e.forEach(T1)};function j1({root:e,...t}){const n=e||document;ta.has(n)||ta.set(n,{});const r=ta.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(P1,{root:e,...t})),r[i]}function N1(e,t,n){const r=j1(t);return dl.set(e,n),r.observe(e),()=>{dl.delete(e),r.unobserve(e)}}const A1={some:0,all:1};class I1 extends en{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:A1[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(l)};return N1(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(R1(t,n))&&this.startObserver()}unmount(){}}function R1({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const M1={inView:{Feature:I1},tap:{Feature:C1},focus:{Feature:E1},hover:{Feature:S1}};function hp(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function L1(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function b1(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function So(e,t,n){const r=e.getProps();return Mu(r,t,n!==void 0?n:r.custom,L1(e),b1(e))}let Lu=ne;const yn=e=>e*1e3,gt=e=>e/1e3,D1={current:!1},mp=e=>Array.isArray(e)&&typeof e[0]=="number";function pp(e){return!!(!e||typeof e=="string"&&gp[e]||mp(e)||Array.isArray(e)&&e.every(pp))}const Lr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,gp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Lr([0,.65,.55,1]),circOut:Lr([.55,0,1,.45]),backIn:Lr([.31,.01,.66,-.59]),backOut:Lr([.33,1.53,.69,.99])};function yp(e){if(e)return mp(e)?Lr(e):Array.isArray(e)?e.map(yp):gp[e]}function V1(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=yp(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function O1(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const vp=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,_1=1e-7,z1=12;function F1(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=vp(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>_1&&++a<z1);return o}function Ni(e,t,n,r){if(e===t&&n===r)return ne;const i=s=>F1(s,0,1,e,n);return s=>s===0||s===1?s:vp(i(s),t,r)}const B1=Ni(.42,0,1,1),U1=Ni(0,0,.58,1),xp=Ni(.42,0,.58,1),W1=e=>Array.isArray(e)&&typeof e[0]!="number",wp=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,kp=e=>t=>1-e(1-t),bu=e=>1-Math.sin(Math.acos(e)),Sp=kp(bu),$1=wp(bu),Ep=Ni(.33,1.53,.69,.99),Du=kp(Ep),H1=wp(Du),G1=e=>(e*=2)<1?.5*Du(e):.5*(2-Math.pow(2,-10*(e-1))),Y1={linear:ne,easeIn:B1,easeInOut:xp,easeOut:U1,circIn:bu,circInOut:$1,circOut:Sp,backIn:Du,backInOut:H1,backOut:Ep,anticipate:G1},xd=e=>{if(Array.isArray(e)){Lu(e.length===4);const[t,n,r,i]=e;return Ni(t,n,r,i)}else if(typeof e=="string")return Y1[e];return e},Vu=(e,t)=>n=>!!(Pi(n)&&Qx.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Cp=(e,t,n)=>r=>{if(!Pi(r))return r;const[i,s,o,a]=r.match(wo);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},K1=e=>Qt(0,255,e),na={...Nn,transform:e=>Math.round(K1(e))},mn={test:Vu("rgb","red"),parse:Cp("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+na.transform(e)+", "+na.transform(t)+", "+na.transform(n)+", "+$r(Wr.transform(r))+")"};function Q1(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const fl={test:Vu("#"),parse:Q1,transform:mn.transform},$n={test:Vu("hsl","hue"),parse:Cp("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+lt.transform($r(t))+", "+lt.transform($r(n))+", "+$r(Wr.transform(r))+")"},we={test:e=>mn.test(e)||fl.test(e)||$n.test(e),parse:e=>mn.test(e)?mn.parse(e):$n.test(e)?$n.parse(e):fl.parse(e),transform:e=>Pi(e)?e:e.hasOwnProperty("red")?mn.transform(e):$n.transform(e)},Q=(e,t,n)=>-n*e+n*t+e;function ra(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function X1({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=ra(l,a,e+1/3),s=ra(l,a,e),o=ra(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const ia=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},q1=[fl,mn,$n],Z1=e=>q1.find(t=>t.test(e));function wd(e){const t=Z1(e);let n=t.parse(e);return t===$n&&(n=X1(n)),n}const Tp=(e,t)=>{const n=wd(e),r=wd(t),i={...n};return s=>(i.red=ia(n.red,r.red,s),i.green=ia(n.green,r.green,s),i.blue=ia(n.blue,r.blue,s),i.alpha=Q(n.alpha,r.alpha,s),mn.transform(i))};function J1(e){var t,n;return isNaN(e)&&Pi(e)&&(((t=e.match(wo))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(qm))===null||n===void 0?void 0:n.length)||0)>0}const Pp={regex:Yx,countKey:"Vars",token:"${v}",parse:ne},jp={regex:qm,countKey:"Colors",token:"${c}",parse:we.parse},Np={regex:wo,countKey:"Numbers",token:"${n}",parse:Nn.parse};function sa(e,{regex:t,countKey:n,token:r,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(i)))}function Bs(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&sa(n,Pp),sa(n,jp),sa(n,Np),n}function Ap(e){return Bs(e).values}function Ip(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Bs(e),s=t.length;return o=>{let a=i;for(let l=0;l<s;l++)l<r?a=a.replace(Pp.token,o[l]):l<r+n?a=a.replace(jp.token,we.transform(o[l])):a=a.replace(Np.token,$r(o[l]));return a}}const ew=e=>typeof e=="number"?0:e;function tw(e){const t=Ap(e);return Ip(e)(t.map(ew))}const Xt={test:J1,parse:Ap,createTransformer:Ip,getAnimatableNone:tw},Rp=(e,t)=>n=>`${n>0?t:e}`;function Mp(e,t){return typeof e=="number"?n=>Q(e,t,n):we.test(e)?Tp(e,t):e.startsWith("var(")?Rp(e,t):bp(e,t)}const Lp=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,o)=>Mp(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},nw=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Mp(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},bp=(e,t)=>{const n=Xt.createTransformer(t),r=Bs(e),i=Bs(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Gt(Lp(r.values,i.values),n):Rp(e,t)},pi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},kd=(e,t)=>n=>Q(e,t,n);function rw(e){return typeof e=="number"?kd:typeof e=="string"?we.test(e)?Tp:bp:Array.isArray(e)?Lp:typeof e=="object"?nw:kd}function iw(e,t,n){const r=[],i=n||rw(e[0]),s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||ne:t;a=Gt(l,a)}r.push(a)}return r}function Dp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Lu(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=iw(t,r,i),a=o.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=pi(e[d],e[d+1],u);return o[d](f)};return n?u=>l(Qt(e[0],e[s-1],u)):l}function sw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=pi(0,t,r);e.push(Q(n,1,i))}}function ow(e){const t=[0];return sw(t,e.length-1),t}function aw(e,t){return e.map(n=>n*t)}function lw(e,t){return e.map(()=>t||xp).splice(0,e.length-1)}function Us({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=W1(r)?r.map(xd):xd(r),s={done:!1,value:t[0]},o=aw(n&&n.length===t.length?n:ow(t),e),a=Dp(o,t,{ease:Array.isArray(i)?i:lw(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}function Vp(e,t){return t?e*(1e3/t):0}const uw=5;function Op(e,t,n){const r=Math.max(t-uw,0);return Vp(n-e(r),t-r)}const oa=.001,cw=.01,dw=10,fw=.05,hw=1;function mw({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s,o=1-t;o=Qt(fw,hw,o),e=Qt(cw,dw,gt(e)),o<1?(i=u=>{const d=u*o,f=d*e,h=d-n,g=hl(u,o),v=Math.exp(-f);return oa-h/g*v},s=u=>{const f=u*o*e,h=f*n+n,g=Math.pow(o,2)*Math.pow(u,2)*e,v=Math.exp(-f),x=hl(Math.pow(u,2),o);return(-i(u)+oa>0?-1:1)*((h-g)*v)/x}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-oa+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=gw(i,s,a);if(e=yn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const pw=12;function gw(e,t,n){let r=n;for(let i=1;i<pw;i++)r=r-e(r)/t(r);return r}function hl(e,t){return e*Math.sqrt(1-t*t)}const yw=["duration","bounce"],vw=["stiffness","damping","mass"];function Sd(e,t){return t.some(n=>e[n]!==void 0)}function xw(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Sd(e,vw)&&Sd(e,yw)){const n=mw(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function _p({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=xw({...r,velocity:-gt(r.velocity||0)}),g=f||0,v=l/(2*Math.sqrt(a*u)),x=s-i,k=gt(Math.sqrt(a/u)),y=Math.abs(x)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let m;if(v<1){const p=hl(k,v);m=w=>{const E=Math.exp(-v*k*w);return s-E*((g+v*k*x)/p*Math.sin(p*w)+x*Math.cos(p*w))}}else if(v===1)m=p=>s-Math.exp(-k*p)*(x+(g+k*x)*p);else{const p=k*Math.sqrt(v*v-1);m=w=>{const E=Math.exp(-v*k*w),T=Math.min(p*w,300);return s-E*((g+v*k*x)*Math.sinh(T)+p*x*Math.cosh(T))/p}}return{calculatedDuration:h&&d||null,next:p=>{const w=m(p);if(h)o.done=p>=d;else{let E=g;p!==0&&(v<1?E=Op(m,p,w):E=0);const T=Math.abs(E)<=n,P=Math.abs(s-w)<=t;o.done=T&&P}return o.value=o.done?s:w,o}}}function Ed({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},g=C=>a!==void 0&&C<a||l!==void 0&&C>l,v=C=>a===void 0?l:l===void 0||Math.abs(a-C)<Math.abs(l-C)?a:l;let x=n*t;const k=f+x,y=o===void 0?k:o(k);y!==k&&(x=y-f);const m=C=>-x*Math.exp(-C/r),p=C=>y+m(C),w=C=>{const R=m(C),A=p(C);h.done=Math.abs(R)<=u,h.value=h.done?y:A};let E,T;const P=C=>{g(h.value)&&(E=C,T=_p({keyframes:[h.value,v(h.value)],velocity:Op(p,C,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:C=>{let R=!1;return!T&&E===void 0&&(R=!0,w(C),P(C)),E!==void 0&&C>E?T.next(C-E):(!R&&w(C),h)}}}const ww=e=>{const t=({timestamp:n})=>e(n);return{start:()=>U.update(t,!0),stop:()=>kt(t),now:()=>ge.isProcessing?ge.timestamp:performance.now()}},Cd=2e4;function Td(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Cd;)t+=n,r=e.next(t);return t>=Cd?1/0:t}const kw={decay:Ed,inertia:Ed,tween:Us,keyframes:Us,spring:_p};function Ws({autoplay:e=!0,delay:t=0,driver:n=ww,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:f,...h}){let g=1,v=!1,x,k;const y=()=>{k=new Promise(D=>{x=D})};y();let m;const p=kw[i]||Us;let w;p!==Us&&typeof r[0]!="number"&&(w=Dp([0,100],r,{clamp:!1}),r=[0,100]);const E=p({...h,keyframes:r});let T;a==="mirror"&&(T=p({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let P="idle",C=null,R=null,A=null;E.calculatedDuration===null&&s&&(E.calculatedDuration=Td(E));const{calculatedDuration:H}=E;let se=1/0,xe=1/0;H!==null&&(se=H+o,xe=se*(s+1)-o);let le=0;const Pt=D=>{if(R===null)return;g>0&&(R=Math.min(R,D)),g<0&&(R=Math.min(D-xe/g,R)),C!==null?le=C:le=Math.round(D-R)*g;const G=le-t*(g>=0?1:-1),tn=g>=0?G<0:G>xe;le=Math.max(G,0),P==="finished"&&C===null&&(le=xe);let tt=le,An=E;if(s){const Co=Math.min(le,xe)/se;let Ai=Math.floor(Co),rn=Co%1;!rn&&Co>=1&&(rn=1),rn===1&&Ai--,Ai=Math.min(Ai,s+1),!!(Ai%2)&&(a==="reverse"?(rn=1-rn,o&&(rn-=o/se)):a==="mirror"&&(An=T)),tt=Qt(0,1,rn)*se}const Re=tn?{done:!1,value:r[0]}:An.next(tt);w&&(Re.value=w(Re.value));let{done:nn}=Re;!tn&&H!==null&&(nn=g>=0?le>=xe:le<=0);const gg=C===null&&(P==="finished"||P==="running"&&nn);return f&&f(Re.value),gg&&N(),Re},ee=()=>{m&&m.stop(),m=void 0},ze=()=>{P="idle",ee(),x(),y(),R=A=null},N=()=>{P="finished",d&&d(),ee(),x()},b=()=>{if(v)return;m||(m=n(Pt));const D=m.now();l&&l(),C!==null?R=D-C:(!R||P==="finished")&&(R=D),P==="finished"&&y(),A=R,C=null,P="running",m.start()};e&&b();const V={then(D,G){return k.then(D,G)},get time(){return gt(le)},set time(D){D=yn(D),le=D,C!==null||!m||g===0?C=D:R=m.now()-D/g},get duration(){const D=E.calculatedDuration===null?Td(E):E.calculatedDuration;return gt(D)},get speed(){return g},set speed(D){D===g||!m||(g=D,V.time=gt(le))},get state(){return P},play:b,pause:()=>{P="paused",C=le},stop:()=>{v=!0,P!=="idle"&&(P="idle",u&&u(),ze())},cancel:()=>{A!==null&&Pt(A),ze()},complete:()=>{P="finished"},sample:D=>(R=0,Pt(D))};return V}function Sw(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ew=Sw(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Cw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Qi=10,Tw=2e4,Pw=(e,t)=>t.type==="spring"||e==="backgroundColor"||!pp(t.ease);function jw(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Ew()&&Cw.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l,u=!1;const d=()=>{l=new Promise(p=>{a=p})};d();let{keyframes:f,duration:h=300,ease:g,times:v}=i;if(Pw(t,i)){const p=Ws({...i,repeat:0,delay:0});let w={done:!1,value:f[0]};const E=[];let T=0;for(;!w.done&&T<Tw;)w=p.sample(T),E.push(w.value),T+=Qi;v=void 0,f=E,h=T-Qi,g="linear"}const x=V1(e.owner.current,t,f,{...i,duration:h,ease:g,times:v}),k=()=>{u=!1,x.cancel()},y=()=>{u=!0,U.update(k),a(),d()};return x.onfinish=()=>{u||(e.set(O1(f,i)),r&&r(),y())},{then(p,w){return l.then(p,w)},attachTimeline(p){return x.timeline=p,x.onfinish=null,ne},get time(){return gt(x.currentTime||0)},set time(p){x.currentTime=yn(p)},get speed(){return x.playbackRate},set speed(p){x.playbackRate=p},get duration(){return gt(h)},play:()=>{o||(x.play(),kt(k))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:p}=x;if(p){const w=Ws({...i,autoplay:!1});e.setWithVelocity(w.sample(p-Qi).value,w.sample(p).value,Qi)}y()},complete:()=>{u||x.finish()},cancel:y}}function Nw({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ne,pause:ne,stop:ne,then:s=>(s(),Promise.resolve()),cancel:ne,complete:ne});return t?Ws({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Aw={type:"spring",stiffness:500,damping:25,restSpeed:10},Iw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Rw={type:"keyframes",duration:.8},Mw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Lw=(e,{keyframes:t})=>t.length>2?Rw:jn.has(e)?e.startsWith("scale")?Iw(t[1]):Aw:Mw,ml=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Xt.test(t)||t==="0")&&!t.startsWith("url(")),bw=new Set(["brightness","contrast","saturate","opacity"]);function Dw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(wo)||[];if(!r)return e;const i=n.replace(r,"");let s=bw.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Vw=/([a-z-]*)\(.*?\)/g,pl={...Xt,getAnimatableNone:e=>{const t=e.match(Vw);return t?t.map(Dw).join(" "):e}},Ow={...Zm,color:we,backgroundColor:we,outlineColor:we,fill:we,stroke:we,borderColor:we,borderTopColor:we,borderRightColor:we,borderBottomColor:we,borderLeftColor:we,filter:pl,WebkitFilter:pl},Ou=e=>Ow[e];function zp(e,t){let n=Ou(e);return n!==pl&&(n=Xt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Fp=e=>/^0[^.\s]+$/.test(e);function _w(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Fp(e)}function zw(e,t,n,r){const i=ml(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),_w(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const d=l[u];s[d]=zp(t,a)}return s}function Fw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function _u(e,t){return e[t]||e.default||e}const Bw={skipAnimations:!1},zu=(e,t,n,r={})=>i=>{const s=_u(r,e)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-yn(o);const l=zw(t,e,n,s),u=l[0],d=l[l.length-1],f=ml(e,u),h=ml(e,d);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:v=>{t.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(Fw(s)||(g={...g,...Lw(e,g)}),g.duration&&(g.duration=yn(g.duration)),g.repeatDelay&&(g.repeatDelay=yn(g.repeatDelay)),!f||!h||D1.current||s.type===!1||Bw.skipAnimations)return Nw(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=jw(t,e,g);if(v)return v}return Ws(g)};function $s(e){return!!(Ie(e)&&e.add)}const Bp=e=>/^\-?\d*\.?\d+$/.test(e);function Fu(e,t){e.indexOf(t)===-1&&e.push(t)}function Bu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Uu{constructor(){this.subscriptions=[]}add(t){return Fu(this.subscriptions,t),()=>Bu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Uw=e=>!isNaN(parseFloat(e));class Ww{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=ge;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,U.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>U.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Uw(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Uu);const r=this.events[t].add(n);return t==="change"?()=>{r(),U.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Vp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ur(e,t){return new Ww(e,t)}const Up=e=>t=>t.test(e),$w={test:e=>e==="auto",parse:e=>e},Wp=[Nn,L,lt,Nt,qx,Xx,$w],Pr=e=>Wp.find(Up(e)),Hw=[...Wp,we,Xt],Gw=e=>Hw.find(Up(e));function Yw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ur(n))}function Kw(e,t){const n=So(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=d1(s[o]);Yw(e,o,a)}}function Qw(e,t,n){var r,i;const s=Object.keys(t).filter(a=>!e.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(Bp(d)||Fp(d))?d=parseFloat(d):!Gw(d)&&Xt.test(u)&&(d=zp(l,u)),e.addValue(l,ur(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function Xw(e,t){return t?(t[e]||t.default||t).from:void 0}function qw(e,t,n){const r={};for(const i in e){const s=Xw(i,t);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function Zw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Jw(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function $p(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const h=e.getValue(f),g=a[f];if(!h||g===void 0||d&&Zw(d,f))continue;const v={delay:n,elapsed:0,..._u(s||{},f)};if(window.HandoffAppearAnimations){const y=e.getProps()[Hm];if(y){const m=window.HandoffAppearAnimations(y,f,h,U);m!==null&&(v.elapsed=m,v.isHandoff=!0)}}let x=!v.isHandoff&&!Jw(h,g);if(v.type==="spring"&&(h.getVelocity()||v.velocity)&&(x=!1),h.animation&&(x=!1),x)continue;h.start(zu(f,h,g,e.shouldReduceMotion&&jn.has(f)?{type:!1}:v));const k=h.animation;$s(l)&&(l.add(f),k.then(()=>l.remove(f))),u.push(k)}return o&&Promise.all(u).then(()=>{o&&Kw(e,o)}),u}function gl(e,t,n={}){const r=So(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all($p(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=i;return ek(e,t,u+l,d,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function ek(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(tk).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(gl(u,t,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function tk(e,t){return e.sortNodePosition(t)}function nk(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>gl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=gl(e,t,n);else{const i=typeof t=="function"?So(e,t,n.custom):t;r=Promise.all($p(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const rk=[...Eu].reverse(),ik=Eu.length;function sk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>nk(e,n,r)))}function ok(e){let t=sk(e);const n=lk();let r=!0;const i=(l,u)=>{const d=So(e,u);if(d){const{transition:f,transitionEnd:h,...g}=d;l={...l,...g,...h}}return l};function s(l){t=l(e)}function o(l,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},h=[],g=new Set;let v={},x=1/0;for(let y=0;y<ik;y++){const m=rk[y],p=n[m],w=d[m]!==void 0?d[m]:f[m],E=hi(w),T=m===u?p.isActive:null;T===!1&&(x=y);let P=w===f[m]&&w!==d[m]&&E;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),p.protectedKeys={...v},!p.isActive&&T===null||!w&&!p.prevProp||vo(w)||typeof w=="boolean")continue;let R=ak(p.prevProp,w)||m===u&&p.isActive&&!P&&E||y>x&&E,A=!1;const H=Array.isArray(w)?w:[w];let se=H.reduce(i,{});T===!1&&(se={});const{prevResolvedValues:xe={}}=p,le={...xe,...se},Pt=ee=>{R=!0,g.has(ee)&&(A=!0,g.delete(ee)),p.needsAnimating[ee]=!0};for(const ee in le){const ze=se[ee],N=xe[ee];if(v.hasOwnProperty(ee))continue;let b=!1;Fs(ze)&&Fs(N)?b=!hp(ze,N):b=ze!==N,b?ze!==void 0?Pt(ee):g.add(ee):ze!==void 0&&g.has(ee)?Pt(ee):p.protectedKeys[ee]=!0}p.prevProp=w,p.prevResolvedValues=se,p.isActive&&(v={...v,...se}),r&&e.blockInitialAnimation&&(R=!1),R&&(!P||A)&&h.push(...H.map(ee=>({animation:ee,options:{type:m,...l}})))}if(g.size){const y={};g.forEach(m=>{const p=e.getBaseTarget(m);p!==void 0&&(y[m]=p)}),h.push({animation:y})}let k=!!h.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(h):Promise.resolve()}function a(l,u,d){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const h=o(d,l);for(const g in n)n[g].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function ak(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!hp(t,e):!1}function sn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lk(){return{animate:sn(!0),whileInView:sn(),whileHover:sn(),whileTap:sn(),whileDrag:sn(),whileFocus:sn(),exit:sn()}}class uk extends en{constructor(t){super(t),t.animationState||(t.animationState=ok(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),vo(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let ck=0;class dk extends en{constructor(){super(...arguments),this.id=ck++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const fk={animation:{Feature:uk},exit:{Feature:dk}},Pd=(e,t)=>Math.abs(e-t);function hk(e,t){const n=Pd(e.x,t.x),r=Pd(e.y,t.y);return Math.sqrt(n**2+r**2)}class Hp{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=la(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,g=hk(f.offset,{x:0,y:0})>=3;if(!h&&!g)return;const{point:v}=f,{timestamp:x}=ge;this.history.push({...v,timestamp:x});const{onStart:k,onMove:y}=this.handlers;h||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=aa(h,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=la(f.type==="pointercancel"?this.lastMoveEventInfo:aa(h,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,k),v&&v(f,k)},!lp(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=ko(t),a=aa(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=ge;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,la(a,this.history)),this.removeListeners=Gt(pt(this.contextWindow,"pointermove",this.handlePointerMove),pt(this.contextWindow,"pointerup",this.handlePointerUp),pt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),kt(this.updatePoint)}}function aa(e,t){return t?{point:t(e.point)}:e}function jd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function la({point:e},t){return{point:e,delta:jd(e,Gp(t)),offset:jd(e,mk(t)),velocity:pk(t,.1)}}function mk(e){return e[0]}function Gp(e){return e[e.length-1]}function pk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Gp(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>yn(t)));)n--;if(!r)return{x:0,y:0};const s=gt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ve(e){return e.max-e.min}function yl(e,t=0,n=.01){return Math.abs(e-t)<=n}function Nd(e,t,n,r=.5){e.origin=r,e.originPoint=Q(t.min,t.max,e.origin),e.scale=Ve(n)/Ve(t),(yl(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Q(n.min,n.max,e.origin)-e.originPoint,(yl(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Hr(e,t,n,r){Nd(e.x,t.x,n.x,r?r.originX:void 0),Nd(e.y,t.y,n.y,r?r.originY:void 0)}function Ad(e,t,n){e.min=n.min+t.min,e.max=e.min+Ve(t)}function gk(e,t,n){Ad(e.x,t.x,n.x),Ad(e.y,t.y,n.y)}function Id(e,t,n){e.min=t.min-n.min,e.max=e.min+Ve(t)}function Gr(e,t,n){Id(e.x,t.x,n.x),Id(e.y,t.y,n.y)}function yk(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Q(n,e,r.max):Math.min(e,n)),e}function Rd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function vk(e,{top:t,left:n,bottom:r,right:i}){return{x:Rd(e.x,n,i),y:Rd(e.y,t,r)}}function Md(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function xk(e,t){return{x:Md(e.x,t.x),y:Md(e.y,t.y)}}function wk(e,t){let n=.5;const r=Ve(e),i=Ve(t);return i>r?n=pi(t.min,t.max-r,e.min):r>i&&(n=pi(e.min,e.max-i,t.min)),Qt(0,1,n)}function kk(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const vl=.35;function Sk(e=vl){return e===!1?e=0:e===!0&&(e=vl),{x:Ld(e,"left","right"),y:Ld(e,"top","bottom")}}function Ld(e,t,n){return{min:bd(e,t),max:bd(e,n)}}function bd(e,t){return typeof e=="number"?e:e[t]||0}const Dd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hn=()=>({x:Dd(),y:Dd()}),Vd=()=>({min:0,max:0}),re=()=>({x:Vd(),y:Vd()});function Be(e){return[e("x"),e("y")]}function Yp({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ek({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Ck(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ua(e){return e===void 0||e===1}function xl({scale:e,scaleX:t,scaleY:n}){return!ua(e)||!ua(t)||!ua(n)}function ln(e){return xl(e)||Kp(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Kp(e){return Od(e.x)||Od(e.y)}function Od(e){return e&&e!=="0%"}function Hs(e,t,n){const r=e-n,i=t*r;return n+i}function _d(e,t,n,r,i){return i!==void 0&&(e=Hs(e,i,r)),Hs(e,n,r)+t}function wl(e,t=0,n=1,r,i){e.min=_d(e.min,t,n,r,i),e.max=_d(e.max,t,n,r,i)}function Qp(e,{x:t,y:n}){wl(e.x,t.translate,t.scale,t.originPoint),wl(e.y,n.translate,n.scale,n.originPoint)}function Tk(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Gn(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Qp(e,o)),r&&ln(s.latestValues)&&Gn(e,s.latestValues))}t.x=zd(t.x),t.y=zd(t.y)}function zd(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Rt(e,t){e.min=e.min+t,e.max=e.max+t}function Fd(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=Q(e.min,e.max,s);wl(e,t[n],t[r],o,t.scale)}const Pk=["x","scaleX","originX"],jk=["y","scaleY","originY"];function Gn(e,t){Fd(e.x,t,Pk),Fd(e.y,t,jk)}function Xp(e,t){return Yp(Ck(e.getBoundingClientRect(),t))}function Nk(e,t,n){const r=Xp(e,n),{scroll:i}=t;return i&&(Rt(r.x,i.offset.x),Rt(r.y,i.offset.y)),r}const qp=({current:e})=>e?e.ownerDocument.defaultView:null,Ak=new WeakMap;class Ik{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=re(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ko(d,"page").point)},s=(d,f)=>{const{drag:h,dragPropagation:g,onDragStart:v}=this.getProps();if(h&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=cp(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Be(k=>{let y=this.getAxisMotionValue(k).get()||0;if(lt.test(y)){const{projection:m}=this.visualElement;if(m&&m.layout){const p=m.layout.layoutBox[k];p&&(y=Ve(p)*(parseFloat(y)/100))}}this.originPoint[k]=y}),v&&U.update(()=>v(d,f),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:h,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:k}=f;if(g&&this.currentDirection===null){this.currentDirection=Rk(k),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),x&&x(d,f)},a=(d,f)=>this.stop(d,f),l=()=>Be(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Hp(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:qp(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&U.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Xi(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=yk(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Wn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=vk(i.layoutBox,n):this.constraints=!1,this.elastic=Sk(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Be(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=kk(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Wn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=Nk(r,i.root,this.visualElement.getTransformPagePoint());let o=xk(i.layout.layoutBox,s);if(n){const a=n(Ek(o));this.hasMutatedConstraints=!!a,a&&(o=Yp(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Be(d=>{if(!Xi(d,n,this.currentDirection))return;let f=l&&l[d]||{};o&&(f={min:0,max:0});const h=i?200:1e6,g=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(zu(t,r,0,n))}stopAnimation(){Be(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Be(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Be(n=>{const{drag:r}=this.getProps();if(!Xi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-Q(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Wn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Be(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=wk({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Be(o=>{if(!Xi(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(Q(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;Ak.set(this.visualElement,this);const t=this.visualElement.current,n=pt(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Wn(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=ht(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Be(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=vl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Xi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Rk(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Mk extends en{constructor(t){super(t),this.removeGroupControls=ne,this.removeListeners=ne,this.controls=new Ik(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ne}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bd=e=>(t,n)=>{e&&U.update(()=>e(t,n))};class Lk extends en{constructor(){super(...arguments),this.removePointerDownListener=ne}onPointerDown(t){this.session=new Hp(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qp(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Bd(t),onStart:Bd(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&U.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=pt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function bk(){const e=S.useContext(go);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=S.useId();return S.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const ds={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ud(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const jr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=Ud(e,t.target.x),r=Ud(e,t.target.y);return`${n}% ${r}%`}},Dk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Xt.parse(e);if(i.length>5)return r;const s=Xt.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=Q(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class Vk extends wi.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;Wx(Ok),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ds.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||U.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Zp(e){const[t,n]=bk(),r=S.useContext(Tu);return wi.createElement(Vk,{...e,layoutGroup:r,switchLayoutGroup:S.useContext(Ym),isPresent:t,safeToRemove:n})}const Ok={borderRadius:{...jr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jr,borderTopRightRadius:jr,borderBottomLeftRadius:jr,borderBottomRightRadius:jr,boxShadow:Dk},Jp=["TopLeft","TopRight","BottomLeft","BottomRight"],_k=Jp.length,Wd=e=>typeof e=="string"?parseFloat(e):e,$d=e=>typeof e=="number"||L.test(e);function zk(e,t,n,r,i,s){i?(e.opacity=Q(0,n.opacity!==void 0?n.opacity:1,Fk(r)),e.opacityExit=Q(t.opacity!==void 0?t.opacity:1,0,Bk(r))):s&&(e.opacity=Q(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<_k;o++){const a=`border${Jp[o]}Radius`;let l=Hd(t,a),u=Hd(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||$d(l)===$d(u)?(e[a]=Math.max(Q(Wd(l),Wd(u),r),0),(lt.test(u)||lt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Q(t.rotate||0,n.rotate||0,r))}function Hd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Fk=eg(0,.5,Sp),Bk=eg(.5,.95,ne);function eg(e,t,n){return r=>r<e?0:r>t?1:n(pi(e,t,r))}function Gd(e,t){e.min=t.min,e.max=t.max}function Fe(e,t){Gd(e.x,t.x),Gd(e.y,t.y)}function Yd(e,t,n,r,i){return e-=t,e=Hs(e,1/n,r),i!==void 0&&(e=Hs(e,1/i,r)),e}function Uk(e,t=0,n=1,r=.5,i,s=e,o=e){if(lt.test(t)&&(t=parseFloat(t),t=Q(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=Q(s.min,s.max,r);e===s&&(a-=t),e.min=Yd(e.min,t,n,a,i),e.max=Yd(e.max,t,n,a,i)}function Kd(e,t,[n,r,i],s,o){Uk(e,t[n],t[r],t[i],t.scale,s,o)}const Wk=["x","scaleX","originX"],$k=["y","scaleY","originY"];function Qd(e,t,n,r){Kd(e.x,t,Wk,n?n.x:void 0,r?r.x:void 0),Kd(e.y,t,$k,n?n.y:void 0,r?r.y:void 0)}function Xd(e){return e.translate===0&&e.scale===1}function tg(e){return Xd(e.x)&&Xd(e.y)}function Hk(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function ng(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function qd(e){return Ve(e.x)/Ve(e.y)}class Gk{constructor(){this.members=[]}add(t){Fu(this.members,t),t.scheduleRender()}remove(t){if(Bu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Zd(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const o=e.x.scale*t.x,a=e.y.scale*t.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const Yk=(e,t)=>e.depth-t.depth;class Kk{constructor(){this.children=[],this.isDirty=!1}add(t){Fu(this.children,t),this.isDirty=!0}remove(t){Bu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Yk),this.isDirty=!1,this.children.forEach(t)}}function Qk(e,t){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(kt(r),e(s-t))};return U.read(r,!0),()=>kt(r)}function Xk(e){window.MotionDebug&&window.MotionDebug.record(e)}function qk(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Zk(e,t,n){const r=Ie(e)?e:ur(e);return r.start(zu("",r,t,n)),r.animation}const Jd=["","X","Y","Z"],Jk={visibility:"hidden"},ef=1e3;let eS=0;const un={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function rg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=eS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,un.totalNodes=un.resolvedTargetDeltas=un.recalculatedProjection=0,this.nodes.forEach(rS),this.nodes.forEach(lS),this.nodes.forEach(uS),this.nodes.forEach(iS),Xk(un)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Kk)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Uu),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=qk(o),this.instance=o;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Qk(h,250),ds.hasAnimatedSinceResize&&(ds.hasAnimatedSinceResize=!1,this.nodes.forEach(nf))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||mS,{onLayoutAnimationStart:k,onLayoutAnimationComplete:y}=d.getProps(),m=!this.targetLayout||!ng(this.targetLayout,v)||g,p=!h&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||p||h&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,p);const w={..._u(x,"layout"),onPlay:k,onComplete:y};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else h||nf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,kt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(cS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(tf);return}this.isUpdating||this.nodes.forEach(oS),this.isUpdating=!1,this.nodes.forEach(aS),this.nodes.forEach(tS),this.nodes.forEach(nS),this.clearAllSnapshots();const a=performance.now();ge.delta=Qt(0,1e3/60,a-ge.timestamp),ge.timestamp=a,ge.isProcessing=!0,Jo.update.process(ge),Jo.preRender.process(ge),Jo.render.process(ge),ge.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(sS),this.sharedNodes.forEach(dS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!tg(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(a||ln(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),pS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return re();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Rt(a.x,l.offset.x),Rt(a.y,l.offset.y)),a}removeElementScroll(o){const a=re();Fe(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){Fe(a,o);const{scroll:h}=this.root;h&&(Rt(a.x,-h.offset.x),Rt(a.y,-h.offset.y))}Rt(a.x,d.offset.x),Rt(a.y,d.offset.y)}}return a}applyTransform(o,a=!1){const l=re();Fe(l,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Gn(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),ln(d.latestValues)&&Gn(l,d.latestValues)}return ln(this.latestValues)&&Gn(l,this.latestValues),l}removeTransform(o){const a=re();Fe(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!ln(u.latestValues))continue;xl(u.latestValues)&&u.updateSnapshot();const d=re(),f=u.measurePageBox();Fe(d,f),Qd(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return ln(this.latestValues)&&Qd(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ge.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=ge.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=re(),this.relativeTargetOrigin=re(),Gr(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Fe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=re(),this.targetWithTransforms=re()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Fe(this.target,this.layout.layoutBox),Qp(this.target,this.targetDelta)):Fe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=re(),this.relativeTargetOrigin=re(),Gr(this.relativeTargetOrigin,this.target,g.target),Fe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}un.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||xl(this.parent.latestValues)||Kp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ge.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Fe(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,g=this.treeScale.y;Tk(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=Hn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Hn(),this.projectionDeltaWithTransform=Hn());const x=this.projectionTransform;Hr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Zd(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==h||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),un.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Hn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=re(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=g!==v,k=this.getStack(),y=!k||k.members.length<=1,m=!!(x&&!y&&this.options.crossfade===!0&&!this.path.some(hS));this.animationProgress=0;let p;this.mixTargetDelta=w=>{const E=w/1e3;rf(f.x,o.x,E),rf(f.y,o.y,E),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Gr(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fS(this.relativeTarget,this.relativeTargetOrigin,h,E),p&&Hk(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=re()),Fe(p,this.relativeTarget)),x&&(this.animationValues=d,zk(d,u,this.latestValues,E,m,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(kt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{ds.hasAnimatedSinceResize=!0,this.currentAnimation=Zk(0,ef,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ef),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&ig(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||re();const f=Ve(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=Ve(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Fe(a,l),Gn(a,d),Hr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Gk),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<Jd.length;d++){const f="rotate"+Jd[d];l[f]&&(u[f]=l[f],o.setStaticValue(f,0))}o.render();for(const d in u)o.setStaticValue(d,u[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Jk;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=cs(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=cs(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ln(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Zd(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:g,y:v}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in _s){if(h[x]===void 0)continue;const{correct:k,applyTo:y}=_s[x],m=u.transform==="none"?h[x]:k(h[x],f);if(y){const p=y.length;for(let w=0;w<p;w++)u[y[w]]=m}else u[x]=m}return this.options.layoutId&&(u.pointerEvents=f===this?cs(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(tf),this.root.sharedNodes.clear()}}}function tS(e){e.updateLayout()}function nS(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Be(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],g=Ve(h);h.min=r[f].min,h.max=h.min+g}):ig(s,n.layoutBox,r)&&Be(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],g=Ve(r[f]);h.max=h.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const a=Hn();Hr(a,r,n.layoutBox);const l=Hn();o?Hr(l,e.applyTransform(i,!0),n.measuredBox):Hr(l,r,n.layoutBox);const u=!tg(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:g}=f;if(h&&g){const v=re();Gr(v,n.layoutBox,h.layoutBox);const x=re();Gr(x,r,g.layoutBox),ng(v,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function rS(e){un.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function iS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function sS(e){e.clearSnapshot()}function tf(e){e.clearMeasurements()}function oS(e){e.isLayoutDirty=!1}function aS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function nf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function lS(e){e.resolveTargetDelta()}function uS(e){e.calcProjection()}function cS(e){e.resetRotation()}function dS(e){e.removeLeadSnapshot()}function rf(e,t,n){e.translate=Q(t.translate,0,n),e.scale=Q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function sf(e,t,n,r){e.min=Q(t.min,n.min,r),e.max=Q(t.max,n.max,r)}function fS(e,t,n,r){sf(e.x,t.x,n.x,r),sf(e.y,t.y,n.y,r)}function hS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const mS={duration:.45,ease:[.4,0,.1,1]},of=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),af=of("applewebkit/")&&!of("chrome/")?Math.round:ne;function lf(e){e.min=af(e.min),e.max=af(e.max)}function pS(e){lf(e.x),lf(e.y)}function ig(e,t,n){return e==="position"||e==="preserve-aspect"&&!yl(qd(t),qd(n),.2)}const gS=rg({attachResizeListener:(e,t)=>ht(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ca={current:void 0},sg=rg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ca.current){const e=new gS({});e.mount(window),e.setOptions({layoutScroll:!0}),ca.current=e}return ca.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),yS={pan:{Feature:Lk},drag:{Feature:Mk,ProjectionNode:sg,MeasureLayout:Zp}},vS=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function xS(e){const t=vS.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function kl(e,t,n=1){const[r,i]=xS(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return Bp(o)?parseFloat(o):o}else return cl(i)?kl(i,t,n+1):i}function wS(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const s=i.get();if(!cl(s))return;const o=kl(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!cl(s))continue;const o=kl(s,r);o&&(t[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const kS=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),og=e=>kS.has(e),SS=e=>Object.keys(e).some(og),uf=e=>e===Nn||e===L,cf=(e,t)=>parseFloat(e.split(", ")[t]),df=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return cf(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?cf(s[1],e):0}},ES=new Set(["x","y","z"]),CS=Ti.filter(e=>!ES.has(e));function TS(e){const t=[];return CS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const cr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:df(4,13),y:df(5,14)};cr.translateX=cr.x;cr.translateY=cr.y;const PS=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=cr[u](r,s)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(a[u]),e[u]=cr[u](l,s)}),e},jS=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(og);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=Pr(d);const h=t[l];let g;if(Fs(h)){const v=h.length,x=h[0]===null?1:0;d=h[x],f=Pr(d);for(let k=x;k<v&&h[k]!==null;k++)g?Lu(Pr(h[k])===g):g=Pr(h[k])}else g=Pr(h);if(f!==g)if(uf(f)&&uf(g)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof h=="string"?t[l]=parseFloat(h):Array.isArray(h)&&g===L&&(t[l]=h.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(d===0||h===0)?d===0?u.set(g.transform(d)):t[l]=f.transform(h):(o||(s=TS(e),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=PS(t,e,a);return s.length&&s.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),yo&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function NS(e,t,n,r){return SS(t)?jS(e,t,n,r):{target:t,transitionEnd:r}}const AS=(e,t,n,r)=>{const i=wS(e,t,r);return t=i.target,r=i.transitionEnd,NS(e,t,n,r)},Sl={current:null},ag={current:!1};function IS(){if(ag.current=!0,!!yo)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Sl.current=e.matches;e.addListener(t),t()}else Sl.current=!1}function RS(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(Ie(s))e.addValue(i,s),$s(r)&&r.add(i);else if(Ie(o))e.addValue(i,ur(s,{owner:e})),$s(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=e.getStaticValue(i);e.addValue(i,ur(a!==void 0?a:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const ff=new WeakMap,lg=Object.keys(mi),MS=lg.length,hf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],LS=Cu.length;class bS{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>U.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=xo(n),this.isVariantNode=Gm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const h=d[f];a[f]!==void 0&&Ie(h)&&(h.set(a[f],!1),$s(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,ff.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),ag.current||IS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Sl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ff.delete(this.current),this.projection&&this.projection.unmount(),kt(this.notifyUpdate),kt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=jn.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&U.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,s){let o,a;for(let l=0;l<MS;l++){const u=lg[l],{isEnabled:d,Feature:f,ProjectionNode:h,MeasureLayout:g}=mi[u];h&&(o=h),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:f,layoutScroll:h,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||f&&Wn(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:g})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):re()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<hf.length;r++){const i=hf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=RS(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<LS;r++){const i=Cu[r],s=this.props[i];(hi(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ur(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Mu(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Ie(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Uu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class ug extends bS{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},s){let o=qw(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){Qw(this,r,o);const a=AS(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function DS(e){return window.getComputedStyle(e)}class VS extends ug{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(jn.has(n)){const r=Ou(n);return r&&r.default||0}else{const r=DS(t),i=(Xm(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Xp(t,n)}build(t,n,r,i){ju(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Ru(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ie(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){np(t,n,r,i)}}class OS extends ug{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(jn.has(n)){const r=Ou(n);return r&&r.default||0}return n=rp.has(n)?n:Su(n),t.getAttribute(n)}measureInstanceViewportBox(){return re()}scrapeMotionValuesFromProps(t,n){return sp(t,n)}build(t,n,r,i){Au(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){ip(t,n,r,i)}mount(t){this.isSVGTag=Iu(t.tagName),super.mount(t)}}const _S=(e,t)=>Pu(e)?new OS(t,{enableHardwareAcceleration:!1}):new VS(t,{enableHardwareAcceleration:!0}),zS={layout:{ProjectionNode:sg,MeasureLayout:Zp}},FS={...fk,...M1,...yS,...zS},M=Bx((e,t)=>x1(e,t,FS,_S));function cg(){const e=S.useRef(!1);return ku(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function BS(){const e=cg(),[t,n]=S.useState(0),r=S.useCallback(()=>{e.current&&n(t+1)},[t]);return[S.useCallback(()=>U.postRender(r),[r]),t]}class US extends S.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function WS({children:e,isPresent:t}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0});return S.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=i.current;if(t||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),S.createElement(US,{isPresent:t,childRef:r,sizeRef:i},S.cloneElement(e,{ref:r}))}const da=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=op($S),l=S.useId(),u=S.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),s?void 0:[n]);return S.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),S.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=S.createElement(WS,{isPresent:n},e)),S.createElement(go.Provider,{value:u},e)};function $S(){return new Map}function HS(e){return S.useEffect(()=>()=>e(),[])}const cn=e=>e.key||"";function GS(e,t){e.forEach(n=>{const r=cn(n);t.set(r,n)})}function YS(e){const t=[];return S.Children.forEach(e,n=>{S.isValidElement(n)&&t.push(n)}),t}const KS=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=S.useContext(Tu).forceRender||BS()[0],l=cg(),u=YS(e);let d=u;const f=S.useRef(new Map).current,h=S.useRef(d),g=S.useRef(new Map).current,v=S.useRef(!0);if(ku(()=>{v.current=!1,GS(u,g),h.current=d}),HS(()=>{v.current=!0,g.clear(),f.clear()}),v.current)return S.createElement(S.Fragment,null,d.map(m=>S.createElement(da,{key:cn(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},m)));d=[...d];const x=h.current.map(cn),k=u.map(cn),y=x.length;for(let m=0;m<y;m++){const p=x[m];k.indexOf(p)===-1&&!f.has(p)&&f.set(p,void 0)}return o==="wait"&&f.size&&(d=[]),f.forEach((m,p)=>{if(k.indexOf(p)!==-1)return;const w=g.get(p);if(!w)return;const E=x.indexOf(p);let T=m;if(!T){const P=()=>{f.delete(p);const C=Array.from(g.keys()).filter(R=>!k.includes(R));if(C.forEach(R=>g.delete(R)),h.current=u.filter(R=>{const A=cn(R);return A===p||C.includes(A)}),!f.size){if(l.current===!1)return;a(),r&&r()}};T=S.createElement(da,{key:cn(w),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:s,mode:o},w),f.set(p,T)}d.splice(E,0,T)}),d=d.map(m=>{const p=m.key;return f.has(p)?m:S.createElement(da,{key:cn(m),isPresent:!0,presenceAffectsLayout:s,mode:o},m)}),S.createElement(S.Fragment,null,f.size?d:d.map(m=>S.cloneElement(m)))};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),F=(e,t)=>{const n=S.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},d)=>S.createElement("svg",{ref:d,...QS,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${XS(e)}`,a].join(" "),...u},[...t.map(([f,h])=>S.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=F("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=F("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=F("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=F("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=F("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=F("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=F("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=F("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=F("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=F("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=F("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=F("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=F("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=F("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=F("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=F("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=F("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=F("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=F("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=F("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=F("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=F("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=F("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=F("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=F("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=F("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=F("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),fa=[{path:"/dashboard",icon:i2,label:"Home"},{path:"/lessons",icon:dr,label:"Lessons"},{path:"/games",icon:Eo,label:"Games"},{path:"/flashcards",icon:Wu,label:"Cards"},{path:"/achievements",icon:vi,label:"Achievements"},{path:"/profile",icon:mg,label:"Profile"}];function c2({children:e}){const t=Pn(),[n,r]=S.useState(!1);return t.pathname.startsWith("/lesson/")?c.jsx("div",{className:"min-h-screen bg-dark-950",children:e}):c.jsxs("div",{className:"min-h-screen bg-dark-950 flex",children:[c.jsxs("aside",{className:"hidden lg:flex flex-col w-64 bg-dark-900/50 border-r border-dark-800 fixed h-screen",children:[c.jsx("div",{className:"p-6",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx("span",{className:"text-white font-bold text-xl",children:"E"})}),c.jsx("span",{className:"font-display font-bold text-xl gradient-text",children:"English"})]})}),c.jsx("nav",{className:"flex-1 px-3 py-4 space-y-1",children:fa.map(s=>c.jsxs(Tr,{to:s.path,className:({isActive:o})=>`nav-item ${o?"active":""}`,children:[c.jsx(s.icon,{size:20}),c.jsx("span",{className:"text-sm font-medium",children:s.label})]},s.path))}),c.jsx("div",{className:"p-4 border-t border-dark-800",children:c.jsxs(Tr,{to:"/settings",className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[c.jsx(mf,{size:20}),c.jsx("span",{className:"text-sm font-medium",children:"Settings"})]})})]}),c.jsx("header",{className:"lg:hidden fixed top-0 left-0 right-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-dark-800",children:c.jsxs("div",{className:"flex items-center justify-between px-4 h-16",children:[c.jsx("button",{onClick:()=>r(!0),className:"p-2 rounded-lg hover:bg-dark-800",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M3 12h18M3 6h18M3 18h18"})})}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx("span",{className:"text-white font-bold",children:"E"})}),c.jsx("span",{className:"font-display font-bold text-lg gradient-text",children:"English"})]}),c.jsx("div",{className:"w-10"})]})}),c.jsx(KS,{children:n&&c.jsxs(c.Fragment,{children:[c.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 bg-black/60 z-50",onClick:()=>r(!1)}),c.jsxs(M.div,{initial:{x:-280},animate:{x:0},exit:{x:-280},transition:{type:"spring",damping:25},className:"lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-dark-900 z-50",children:[c.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-dark-800",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx("span",{className:"text-white font-bold text-xl",children:"E"})}),c.jsx("span",{className:"font-display font-bold text-xl gradient-text",children:"English"})]}),c.jsx("button",{onClick:()=>r(!1),className:"p-2 rounded-lg hover:bg-dark-800",children:c.jsx(u2,{size:20})})]}),c.jsxs("nav",{className:"p-3 space-y-1",children:[fa.map(s=>c.jsxs(Tr,{to:s.path,onClick:()=>r(!1),className:({isActive:o})=>`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${o?"bg-primary-500/20 text-primary-400":"text-dark-400 hover:bg-dark-800 hover:text-white"}`,children:[c.jsx(s.icon,{size:20}),c.jsx("span",{className:"font-medium",children:s.label})]},s.path)),c.jsxs(Tr,{to:"/settings",onClick:()=>r(!1),className:({isActive:s})=>`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${s?"bg-primary-500/20 text-primary-400":"text-dark-400 hover:bg-dark-800 hover:text-white"}`,children:[c.jsx(mf,{size:20}),c.jsx("span",{className:"font-medium",children:"Settings"})]})]})]})]})}),c.jsx("main",{className:"flex-1 lg:ml-64 pt-16 lg:pt-0",children:c.jsx("div",{className:"p-4 lg:p-8 pb-24 lg:pb-8",children:e})}),c.jsx("nav",{className:"lg:hidden fixed bottom-0 left-0 right-0 bg-dark-900/90 backdrop-blur-md border-t border-dark-800 z-40",children:c.jsx("div",{className:"flex justify-around py-2",children:fa.slice(0,5).map(s=>c.jsxs(Tr,{to:s.path,className:({isActive:o})=>`nav-item flex-1 ${o?"active":""}`,children:[c.jsx(s.icon,{size:20}),c.jsx("span",{className:"text-xs",children:s.label})]},s.path))})})]})}function d2(){const e=gr(),{user:t,lessons:n,gameStats:r,achievements:i}=Tt(),s=n.filter(g=>g.completed).length,o=n.length,a=s/o*100,l=200-t.xp%200,u=[{icon:dr,label:"Continue Learning",path:"/lessons",color:"from-primary-500 to-primary-600"},{icon:Eo,label:"Play Games",path:"/games",color:"from-accent-500 to-accent-600"},{icon:Wu,label:"Flashcards",path:"/flashcards",color:"from-green-500 to-emerald-600"}],d=i.filter(g=>g.unlocked).slice(0,3),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},h={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return c.jsxs(M.div,{variants:f,initial:"hidden",animate:"visible",className:"space-y-6",children:[c.jsxs(M.div,{variants:h,className:"card relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"}),c.jsxs("div",{className:"relative flex flex-col md:flex-row md:items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:["Welcome back, ",c.jsx("span",{className:"gradient-text",children:t.name}),"!"]}),c.jsx("p",{className:"text-dark-400",children:"Ready to continue your English journey?"})]}),c.jsx("div",{className:"flex items-center gap-4",children:c.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-dark-800 rounded-xl",children:[c.jsx(fg,{className:"text-orange-500",size:20}),c.jsx("span",{className:"font-bold text-orange-400",children:t.streak}),c.jsx("span",{className:"text-dark-400 text-sm",children:"day streak"})]})})]})]}),c.jsxs(M.div,{variants:h,className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"card flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-3",children:c.jsx(Cl,{className:"text-white",size:24})}),c.jsx("span",{className:"text-2xl font-bold",children:t.xp}),c.jsx("span",{className:"text-dark-400 text-sm",children:"Total XP"})]}),c.jsxs("div",{className:"card flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-3",children:c.jsx(yi,{className:"text-white",size:24})}),c.jsxs("span",{className:"text-2xl font-bold",children:["Level ",t.level]}),c.jsxs("span",{className:"text-dark-400 text-sm",children:[l," XP to next"]})]}),c.jsxs("div",{className:"card flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-3",children:c.jsx(dr,{className:"text-white",size:24})}),c.jsxs("span",{className:"text-2xl font-bold",children:[s,"/",o]}),c.jsx("span",{className:"text-dark-400 text-sm",children:"Lessons"})]}),c.jsxs("div",{className:"card flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-3",children:c.jsx(vi,{className:"text-white",size:24})}),c.jsx("span",{className:"text-2xl font-bold",children:i.filter(g=>g.unlocked).length}),c.jsx("span",{className:"text-dark-400 text-sm",children:"Achievements"})]})]}),c.jsxs(M.div,{variants:h,className:"card",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("h2",{className:"font-display font-semibold text-lg flex items-center gap-2",children:[c.jsx(hg,{className:"text-primary-400",size:20}),"Weekly Progress"]}),c.jsxs("span",{className:"text-dark-400 text-sm",children:[Math.round(a),"% Complete"]})]}),c.jsx("div",{className:"progress-bar",children:c.jsx(M.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${a}%`},transition:{duration:1,delay:.5}})}),c.jsxs("div",{className:"mt-4 flex justify-between text-sm text-dark-400",children:[c.jsxs("span",{children:[s," lessons completed"]}),c.jsxs("span",{children:[o-s," lessons remaining"]})]})]}),c.jsxs(M.div,{variants:h,children:[c.jsx("h2",{className:"font-display font-semibold text-lg mb-4",children:"Quick Actions"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:u.map((g,v)=>c.jsxs(M.button,{onClick:()=>e(g.path),whileHover:{scale:1.02},whileTap:{scale:.98},className:`card flex items-center justify-between group bg-gradient-to-r ${g.color} bg-none border-0`,style:{background:"none"},children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:`w-10 h-10 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center`,children:c.jsx(g.icon,{className:"text-white",size:20})}),c.jsx("span",{className:"font-medium text-white",children:g.label})]}),c.jsx(Yn,{className:"text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all",size:20})]},g.label))})]}),c.jsxs(M.div,{variants:h,children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h2",{className:"font-display font-semibold text-lg",children:"Continue Learning"}),c.jsxs("button",{onClick:()=>e("/lessons"),className:"text-primary-400 text-sm hover:underline flex items-center gap-1",children:["View All ",c.jsx(Yn,{size:16})]})]}),c.jsxs("div",{className:"space-y-3",children:[n.filter(g=>!g.completed).slice(0,3).map((g,v)=>c.jsxs(M.button,{onClick:()=>e(`/lesson/${g.id}`),whileHover:{scale:1.01},whileTap:{scale:.99},className:"w-full card flex items-center justify-between text-left",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold",children:g.day}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-medium",children:g.title}),c.jsxs("p",{className:"text-dark-400 text-sm flex items-center gap-1",children:[c.jsx(dg,{size:14})," 15 min"]})]})]}),c.jsx(Yn,{className:"text-dark-500",size:20})]},g.id)),n.filter(g=>!g.completed).length===0&&c.jsxs("div",{className:"card text-center py-8",children:[c.jsx(vi,{className:"mx-auto text-yellow-500 mb-2",size:40}),c.jsx("p",{className:"text-dark-400",children:"All lessons completed! Great job!"})]})]})]}),d.length>0&&c.jsxs(M.div,{variants:h,children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h2",{className:"font-display font-semibold text-lg",children:"Recent Achievements"}),c.jsxs("button",{onClick:()=>e("/achievements"),className:"text-primary-400 text-sm hover:underline flex items-center gap-1",children:["View All ",c.jsx(Yn,{size:16})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:d.map(g=>c.jsxs("div",{className:"card flex items-center gap-3",children:[c.jsx("div",{className:"text-3xl",children:g.icon}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-medium",children:g.name}),c.jsx("p",{className:"text-dark-400 text-sm",children:g.description})]})]},g.id))})]})]})}const f2=`# [DAY 1: SOCIAL MEDIA & SMARTPHONE LIFE]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Scroll: Lướt điện thoại.
2. Upload: Đăng tải.
3. Notification: Thông báo.
4. Addicted: Nghiện, bị phụ thuộc.
5. Follow: Theo dõi.
6. Viral: Lan truyền mạnh trên mạng.

---

### 5 Natural English Sentences

• Casual:
"I spent the whole night scrolling through TikTok."
(Tối qua mình lướt TikTok cả đêm.)

• Asking:
"What apps do you use the most these days?"
(Dạo này bạn dùng app gì nhiều nhất?)

• Natural:
"That video went viral so fast."
(Video đó nổi nhanh thật.)

• Complaining:
"I think I'm addicted to my phone."
(Mình nghĩ mình nghiện điện thoại rồi.)

• Friendly:
"Send me your Instagram. I'll follow you."
(Gửi Instagram cho mình đi, mình follow cho.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Communicate

• Meaning: Giao tiếp.

• TOEIC/IELTS Example:
"Technology helps people communicate more easily."
(Công nghệ giúp con người giao tiếp dễ dàng hơn.)

• Daily English:
"We mostly communicate through social media now."
(Bây giờ tụi mình chủ yếu giao tiếp qua mạng xã hội.)

---

## 2. Depend

• Meaning: Phụ thuộc.

• TOEIC/IELTS Example:
"Many teenagers depend too much on smartphones."
(Nhiều thanh thiếu niên phụ thuộc quá nhiều vào điện thoại.)

• Daily English:
"I depend on Google Maps all the time."
(Mình lúc nào cũng phụ thuộc vào Google Maps.)

---

## 3. Improve

• Meaning: Cải thiện.

• TOEIC/IELTS Example:
"Online learning can improve language skills."
(Học online có thể cải thiện kỹ năng ngôn ngữ.)

• Daily English:
"I'm trying to improve my English through YouTube."
(Mình đang cố cải thiện tiếng Anh qua YouTube.)

---

## 4. Influence

• Meaning: Ảnh hưởng.

• TOEIC/IELTS Example:
"Social media has a strong influence on young people."
(Mạng xã hội có ảnh hưởng lớn đến giới trẻ.)

• Daily English:
"That influencer really affects fashion trends."
(Influencer đó ảnh hưởng mạnh đến xu hướng thời trang.)

---

## 5. Balance

• Meaning: Cân bằng.

• TOEIC/IELTS Example:
"It is important to balance work and personal life."
(Việc cân bằng công việc và cuộc sống rất quan trọng.)

• Daily English:
"I'm trying to balance studying and social media."
(Mình đang cố cân bằng việc học và mạng xã hội.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Why didn't you reply to my message?"

• B: "Sorry, I turned off my notifications."

• A: "Really? I thought you were ignoring me."

• B: "No, I'm trying to spend less time on social media these days."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   You are talking about your favorite app with your friend.

3. Answer the question:
   "How much time do you spend on your phone every day?"

---

# [PART 4 – REAL GRAMMAR]

## Trying to

( Đang cố gắng làm gì )

• Explanation:
Used when talking about effort or habits you want to change.

---

### Examples

• "I'm trying to sleep earlier."
(Tôi đang cố ngủ sớm hơn.)

• "She's trying to use her phone less."
(Cô ấy đang cố dùng điện thoại ít hơn.)

---

### Real-life English

Native speakers use this expression constantly in daily conversation.

• "I'm trying to eat healthier."
• "I'm trying to save money."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend spends too much time on social media.

## Task:

Write 2–3 English sentences:

1. Give advice.
2. Talk about balancing phone use and studying.

---

### Example

"You should take breaks from your phone sometimes. Spending too much time online can affect your sleep and studies."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Nowadays, many students spend hours on social media every day. While smartphones make communication easier, depending on them too much can negatively ( ㄱ ) students' concentration. Therefore, it is important to keep a good ( ㄴ ) between studying and phone use."

---

## Hint

• ㄱ = influence / affect
• ㄴ = balance

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Scroll
• Upload
• Notification
• Addicted
• Follow
• Viral

### TOEIC/IELTS Vocabulary

• Communicate
• Depend
• Improve
• Influence
• Balance

---

## Exercises

1. Translate:
   "Mạng xã hội có ảnh hưởng lớn đến cuộc sống của giới trẻ."

2. Make a sentence using the word "addicted".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes in front of a mirror about:
   "How does social media affect my life?"

2. Use these 3 sentences today:

• "I spend too much time on my phone."

• "I'm trying to use social media less."

• "That video went viral overnight."

`,h2=`# [DAY 2: MONEY & ONLINE SHOPPING]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Discount: Giảm giá.
2. Expensive: Đắt.
3. Cheap: Rẻ.
4. Delivery fee: Phí giao hàng.
5. Brand: Thương hiệu.
6. Wallet: Ví tiền.

---

### 5 Natural English Sentences

• Casual:
"I bought it because it was on sale."
(Mình mua nó vì đang giảm giá.)

• Asking:
"How much did you pay for that?"
(Bạn trả bao nhiêu cho cái đó vậy?)

• Complaining:
"The delivery fee is way too expensive."
(Phí giao hàng mắc quá.)

• Natural:
"I'm trying to save money these days."
(Dạo này mình đang cố tiết kiệm tiền.)

• Friendly:
"That brand is really popular right now."
(Thương hiệu đó đang nổi lắm.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Purchase

• Meaning: Mua hàng.

• TOEIC/IELTS Example:
"Many customers purchase products online nowadays."
(Ngày nay nhiều khách hàng mua sản phẩm online.)

• Daily English:
"I purchased a new laptop last week."
(Tuần trước mình mua laptop mới.)

---

## 2. Budget

• Meaning: Ngân sách.

• TOEIC/IELTS Example:
"Students should manage their budgets carefully."
(Sinh viên nên quản lý ngân sách cẩn thận.)

• Daily English:
"My budget this month is really tight."
(Ngân sách tháng này của mình khá eo hẹp.)

---

## 3. Compare

• Meaning: So sánh.

• TOEIC/IELTS Example:
"Consumers often compare prices before buying products."
(Người tiêu dùng thường so sánh giá trước khi mua hàng.)

• Daily English:
"I compared several phones before choosing one."
(Mình đã so sánh nhiều điện thoại trước khi chọn.)

---

## 4. Value

• Meaning: Giá trị.

• TOEIC/IELTS Example:
"This product offers good value for money."
(Sản phẩm này đáng tiền.)

• Daily English:
"I care more about value than brand names."
(Mình quan tâm giá trị hơn là thương hiệu.)

---

## 5. Waste

• Meaning: Lãng phí.

• TOEIC/IELTS Example:
"Buying unnecessary items is a waste of money."
(Mua đồ không cần thiết là lãng phí tiền bạc.)

• Daily English:
"I wasted too much money on snacks."
(Mình đã tiêu quá nhiều tiền vào đồ ăn vặt.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Why did you buy so many things?"

• B: "Everything was on sale yesterday."

• A: "You really love online shopping."

• B: "Yeah, but I'm trying to spend less money now."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about something expensive you want to buy.

3. Answer the question:
   "What do you usually spend money on?"

---

# [PART 4 – REAL GRAMMAR]

## Too + Adjective

( Quá... )

• Explanation:
Used when something is excessive or more than necessary.

---

### Examples

• "This bag is too expensive."
(Cái túi này quá đắt.)

• "I spend too much money online."
(Tôi tiêu quá nhiều tiền online.)

---

### Real-life English

Native speakers use "too" constantly in conversation.

• "It's too hot today."
• "That phone is too expensive for me."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend spends too much money shopping online.

## Task:

Write 2–3 English sentences:

1. Give advice about saving money.
2. Mention budgeting.

---

### Example

"You should make a monthly budget. Buying unnecessary things online can waste a lot of money."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Online shopping is becoming more popular because it is convenient and fast. However, many people spend money without comparing prices carefully, which can lead to unnecessary ( ㄱ ). Therefore, consumers should manage their ( ㄴ ) wisely."

---

## Hint

• ㄱ = waste
• ㄴ = budget

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Discount
• Expensive
• Cheap
• Delivery fee
• Brand
• Wallet

### TOEIC/IELTS Vocabulary

• Purchase
• Budget
• Compare
• Value
• Waste

---

## Exercises

1. Translate:
   "Tôi đang cố tiết kiệm tiền để mua laptop mới."

2. Make a sentence using the word "discount".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "How do I spend my money every month?"

2. Use these 3 sentences today:

• "I'm trying to save money."

• "That's too expensive for me."

• "I bought it because it was on sale."
`,m2=`# [DAY 3: FITNESS & EXERCISE]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Workout: Buổi tập thể dục.
2. Muscle soreness: Đau cơ.
3. Stretch: Giãn cơ.
4. Diet: Chế độ ăn uống.
5. Gym membership: Thẻ tập gym.
6. Cardio: Bài tập tim mạch.

---

### 5 Natural English Sentences

• Casual:
"I skipped my workout yesterday."
(Hôm qua mình bỏ buổi tập.)

• Asking:
"How often do you go to the gym?"
(Bạn đi gym bao nhiêu lần một tuần?)

• Complaining:
"My legs are sore after leg day."
(Chân mình đau nhức sau buổi tập chân.)

• Natural:
"I'm trying to eat healthier these days."
(Dạo này mình đang cố ăn uống lành mạnh hơn.)

• Friendly:
"Wanna work out together sometime?"
(Hôm nào tập chung không?)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Maintain

• Meaning: Duy trì.

• TOEIC/IELTS Example:
"Regular exercise helps maintain good health."
(Tập thể dục đều đặn giúp duy trì sức khỏe tốt.)

• Daily English:
"I'm trying to maintain a healthy lifestyle."
(Mình đang cố duy trì lối sống lành mạnh.)

---

## 2. Improve

• Meaning: Cải thiện.

• TOEIC/IELTS Example:
"Exercise can improve mental health."
(Tập thể dục có thể cải thiện sức khỏe tinh thần.)

• Daily English:
"I want to improve my stamina."
(Mình muốn cải thiện thể lực.)

---

## 3. Reduce

• Meaning: Giảm bớt.

• TOEIC/IELTS Example:
"Walking daily can reduce stress."
(Đi bộ mỗi ngày có thể giảm stress.)

• Daily English:
"I'm trying to reduce sugar intake."
(Mình đang cố giảm lượng đường nạp vào.)

---

## 4. Energy

• Meaning: Năng lượng.

• TOEIC/IELTS Example:
"Healthy food gives people more energy."
(Đồ ăn lành mạnh giúp con người có nhiều năng lượng hơn.)

• Daily English:
"I have no energy today."
(Hôm nay mình không có năng lượng gì cả.)

---

## 5. Routine

• Meaning: Thói quen hằng ngày/lịch sinh hoạt.

• TOEIC/IELTS Example:
"Having a healthy routine is important."
(Có một lịch sinh hoạt lành mạnh rất quan trọng.)

• Daily English:
"My morning routine is simple."
(Thói quen buổi sáng của mình khá đơn giản.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "You look healthier these days."

• B: "Really? I started going to the gym recently."

• A: "How often do you work out?"

• B: "About four times a week."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about your exercise routine.

3. Answer the question:
   "What do you do to stay healthy?"

---

# [PART 4 – REAL GRAMMAR]

## Start + Verb-ing

( Bắt đầu làm gì )

• Explanation:
Used to talk about new habits or activities.

---

### Examples

• "I started exercising last month."
(Tôi bắt đầu tập thể dục tháng trước.)

• "She started eating healthier food."
(Cô ấy bắt đầu ăn uống lành mạnh hơn.)

---

### Real-life English

Native speakers use this structure very naturally.

• "I started learning English online."
• "He started going to bed earlier."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend feels tired and stressed lately.

## Task:

Write 2–3 English sentences:

1. Recommend exercise or healthy habits.
2. Mention stress reduction.

---

### Example

"You should exercise more often. Working out regularly can reduce stress and give you more energy."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Many people exercise regularly to ( ㄱ ) their health and reduce stress. In addition, having a healthy daily ( ㄴ ) can improve both physical and mental health."

---

## Hint

• ㄱ = maintain
• ㄴ = routine

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Workout
• Muscle soreness
• Stretch
• Diet
• Gym membership
• Cardio

### TOEIC/IELTS Vocabulary

• Maintain
• Improve
• Reduce
• Energy
• Routine

---

## Exercises

1. Translate:
   "Tập thể dục đều đặn giúp tôi có nhiều năng lượng hơn."

2. Make a sentence using the word "routine".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "My exercise habits and health goals."

2. Use these 3 sentences today:

• "I started working out recently."

• "I'm trying to eat healthier."

• "Exercise helps reduce stress."
`,p2=`# [DAY 4: MOVIES & ENTERTAINMENT]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Spoiler: Tiết lộ nội dung phim.
2. Episode: Tập phim.
3. Series: Series/phim dài tập.
4. Subtitle: Phụ đề.
5. Streaming service: Nền tảng xem phim trực tuyến.
6. Genre: Thể loại.

---

### 5 Natural English Sentences

• Casual:
"I finished the whole series in one night."
(Mình cày hết cả series chỉ trong một đêm.)

• Asking:
"What kind of movies do you usually watch?"
(Bạn thường xem thể loại phim nào?)

• Warning:
"Don't spoil the ending for me."
(Đừng spoil cái kết cho mình.)

• Natural:
"I usually watch movies with English subtitles."
(Mình thường xem phim với phụ đề tiếng Anh.)

• Friendly:
"You should watch this movie. It's really good."
(Bạn nên xem phim này đi, hay lắm.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Entertain

• Meaning: Giải trí.

• TOEIC/IELTS Example:
"Movies can entertain people and reduce stress."
(Phim ảnh có thể giải trí và giảm căng thẳng.)

• Daily English:
"I watch YouTube videos to entertain myself."
(Mình xem YouTube để giải trí.)

---

## 2. Recommend

• Meaning: Đề xuất, giới thiệu.

• TOEIC/IELTS Example:
"I highly recommend this documentary."
(Tôi rất đề xuất bộ phim tài liệu này.)

• Daily English:
"Can you recommend a good movie?"
(Bạn có thể gợi ý phim hay không?)

---

## 3. Popular

• Meaning: Phổ biến, nổi tiếng.

• TOEIC/IELTS Example:
"Korean dramas are popular worldwide."
(Phim Hàn nổi tiếng trên toàn thế giới.)

• Daily English:
"That series is really popular these days."
(Series đó dạo này nổi lắm.)

---

## 4. Relax

• Meaning: Thư giãn.

• TOEIC/IELTS Example:
"Listening to music helps people relax."
(Nghe nhạc giúp con người thư giãn.)

• Daily English:
"I watch movies to relax after studying."
(Mình xem phim để thư giãn sau khi học.)

---

## 5. Emotion

• Meaning: Cảm xúc.

• TOEIC/IELTS Example:
"Movies can strongly affect people's emotions."
(Phim có thể ảnh hưởng mạnh đến cảm xúc con người.)

• Daily English:
"That ending made me emotional."
(Cái kết đó làm mình xúc động.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Have you watched that new Netflix series?"

• B: "Yeah, I finished it yesterday."

• A: "Was it good?"

• B: "Definitely. The story was really emotional."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about your favorite movie or drama.

3. Answer the question:
   "What do you usually watch when you want to relax?"

---

# [PART 4 – REAL GRAMMAR]

## Used to

( Từng thường làm gì )

• Explanation:
Used to talk about past habits or situations.

---

### Examples

• "I used to watch cartoons every day."
(Hồi trước tôi từng xem hoạt hình mỗi ngày.)

• "She used to hate horror movies."
(Cô ấy từng ghét phim kinh dị.)

---

### Real-life English

Very common in storytelling and conversations about memories.

• "We used to play games together."
• "I used to stay up late watching movies."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend asks you for movie recommendations.

## Task:

Write 2–3 English sentences:

1. Recommend a movie or drama.
2. Explain why you liked it.

---

### Example

"You should watch this drama on Netflix. The story is really emotional, and the actors are amazing."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Streaming services have become extremely ( ㄱ ) in recent years because they provide convenient entertainment. Many people watch movies or dramas online to ( ㄴ ) after work or school."

---

## Hint

• ㄱ = popular
• ㄴ = relax

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Spoiler
• Episode
• Series
• Subtitle
• Streaming service
• Genre

### TOEIC/IELTS Vocabulary

• Entertain
• Recommend
• Popular
• Relax
• Emotion

---

## Exercises

1. Translate:
   "Tôi thường xem phim để thư giãn sau giờ học."

2. Make a sentence using the word "spoiler".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "My favorite movie or drama."

2. Use these 3 sentences today:

• "Don't spoil it for me."

• "That movie was really emotional."

• "Can you recommend something good to watch?"
`,g2=`# [DAY 5: TRAVEL & VACATIONS]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Destination: Điểm đến.
2. Backpack: Ba lô du lịch.
3. Reservation: Đặt chỗ.
4. Tourist attraction: Địa điểm du lịch.
5. Schedule: Lịch trình.
6. Souvenir: Quà lưu niệm.

---

### 5 Natural English Sentences

• Casual:
"I really want to travel abroad someday."
(Mình thật sự muốn đi du lịch nước ngoài một ngày nào đó.)

• Asking:
"What's your dream travel destination?"
(Điểm du lịch mơ ước của bạn là đâu?)

• Natural:
"We already made hotel reservations."
(Bọn mình đã đặt khách sạn rồi.)

• Friendly:
"Don't forget to buy souvenirs."
(Đừng quên mua quà lưu niệm nhé.)

• Complaining:
"Our flight got delayed again."
(Chuyến bay của bọn mình lại bị hoãn nữa rồi.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Explore

• Meaning: Khám phá.

• TOEIC/IELTS Example:
"Traveling allows people to explore different cultures."
(Du lịch cho phép con người khám phá nhiều nền văn hóa khác nhau.)

• Daily English:
"I want to explore more places in Korea."
(Mình muốn khám phá nhiều nơi hơn ở Hàn Quốc.)

---

## 2. Journey

• Meaning: Hành trình.

• TOEIC/IELTS Example:
"The journey took over ten hours."
(Hành trình kéo dài hơn 10 tiếng.)

• Daily English:
"Our journey was really fun."
(Hành trình của bọn mình rất vui.)

---

## 3. Adventure

• Meaning: Cuộc phiêu lưu.

• TOEIC/IELTS Example:
"Traveling alone can be an exciting adventure."
(Du lịch một mình có thể là một cuộc phiêu lưu thú vị.)

• Daily English:
"I'm looking for a new adventure."
(Mình đang tìm một trải nghiệm phiêu lưu mới.)

---

## 4. Culture

• Meaning: Văn hóa.

• TOEIC/IELTS Example:
"Learning about local culture is important when traveling."
(Tìm hiểu văn hóa địa phương rất quan trọng khi du lịch.)

• Daily English:
"Korean culture is really interesting."
(Văn hóa Hàn Quốc thật sự thú vị.)

---

## 5. Memory

• Meaning: Kỷ niệm.

• TOEIC/IELTS Example:
"Traveling creates unforgettable memories."
(Du lịch tạo ra những kỷ niệm khó quên.)

• Daily English:
"That trip gave me a lot of good memories."
(Chuyến đi đó cho mình rất nhiều kỷ niệm đẹp.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Where are you going during vacation?"

• B: "I'm planning to visit Japan."

• A: "That sounds exciting."

• B: "Yeah, I really want to explore the culture there."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about your dream vacation.

3. Answer the question:
   "What country do you want to visit most?"

---

# [PART 4 – REAL GRAMMAR]

## Be going to

( Sắp / Dự định sẽ )

• Explanation:
Used for future plans and intentions.

---

### Examples

• "I'm going to travel this summer."
(Tôi sẽ đi du lịch mùa hè này.)

• "We're going to book a hotel tonight."
(Tối nay bọn tôi sẽ đặt khách sạn.)

---

### Real-life English

Very common in casual daily conversation.

• "I'm gonna visit my friend tomorrow."
• "She's gonna study abroad next year."

---

# [PART 5 – APPLICATION]

## Situation:

You are planning a trip with your friend.

## Task:

Write 2–3 English sentences:

1. Mention the destination.
2. Talk about what you want to do there.

---

### Example

"We're going to visit Busan during vacation. I want to explore famous tourist attractions and try local food."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Many people enjoy traveling because it gives them opportunities to ( ㄱ ) different cultures and create unforgettable ( ㄴ ). In addition, traveling can reduce stress and provide exciting experiences."

---

## Hint

• ㄱ = explore
• ㄴ = memories

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Destination
• Backpack
• Reservation
• Tourist attraction
• Schedule
• Souvenir

### TOEIC/IELTS Vocabulary

• Explore
• Journey
• Adventure
• Culture
• Memory

---

## Exercises

1. Translate:
   "Tôi muốn khám phá nhiều nền văn hóa khác nhau."

2. Make a sentence using the word "adventure".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "My dream trip."

2. Use these 3 sentences today:

• "I'm going to travel abroad someday."

• "What's your dream destination?"

• "That trip gave me unforgettable memories."
`,y2=`# [DAY 6: TECHNOLOGY & SOCIAL MEDIA]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Notification: Thông báo.
2. Upload: Tải lên.
3. Comment section: Phần bình luận.
4. Screen time: Thời gian sử dụng màn hình.
5. Viral: Lan truyền mạnh, nổi tiếng nhanh.
6. Content creator: Người sáng tạo nội dung.

---

### 5 Natural English Sentences

• Casual:
"I spend way too much time on social media."
(Mình dành quá nhiều thời gian trên mạng xã hội.)

• Asking:
"What apps do you use the most?"
(Bạn dùng ứng dụng nào nhiều nhất?)

• Complaining:
"My phone battery dies so quickly these days."
(Pin điện thoại dạo này hết nhanh quá.)

• Natural:
"That video went viral overnight."
(Video đó nổi chỉ sau một đêm.)

• Friendly:
"I uploaded a new photo yesterday."
(Hôm qua mình đăng ảnh mới.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Communicate

• Meaning: Giao tiếp.

• TOEIC/IELTS Example:
"Technology helps people communicate more easily."
(Công nghệ giúp con người giao tiếp dễ dàng hơn.)

• Daily English:
"I usually communicate with friends online."
(Mình thường giao tiếp với bạn bè online.)

---

## 2. Access

• Meaning: Truy cập/tiếp cận.

• TOEIC/IELTS Example:
"Students can access information quickly through the internet."
(Học sinh có thể truy cập thông tin nhanh chóng qua internet.)

• Daily English:
"I can't access my account right now."
(Mình không thể truy cập tài khoản lúc này.)

---

## 3. Addiction

• Meaning: Sự nghiện.

• TOEIC/IELTS Example:
"Smartphone addiction is becoming a serious issue."
(Nghiện điện thoại thông minh đang trở thành vấn đề nghiêm trọng.)

• Daily English:
"I think I have a social media addiction."
(Mình nghĩ mình bị nghiện mạng xã hội rồi.)

---

## 4. Convenient

• Meaning: Tiện lợi.

• TOEIC/IELTS Example:
"Online learning is convenient for many students."
(Học online tiện lợi cho nhiều học sinh.)

• Daily English:
"Online shopping is really convenient."
(Mua sắm online rất tiện.)

---

## 5. Influence

• Meaning: Ảnh hưởng.

• TOEIC/IELTS Example:
"Social media has a strong influence on teenagers."
(Mạng xã hội có ảnh hưởng lớn đến thanh thiếu niên.)

• Daily English:
"That influencer has millions of followers."
(Influencer đó có hàng triệu người theo dõi.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Why are you always on your phone?"

• B: "I'm watching short videos online."

• A: "You should reduce your screen time."

• B: "Yeah, I know. It's becoming a bad habit."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about your favorite app or website.

3. Answer the question:
   "How does technology affect your daily life?"

---

# [PART 4 – REAL GRAMMAR]

## Spend time + Verb-ing

( Dành thời gian làm gì )

• Explanation:
Used to talk about how time is used.

---

### Examples

• "I spend a lot of time watching YouTube."
(Tôi dành nhiều thời gian xem YouTube.)

• "She spends hours studying English."
(Cô ấy dành hàng giờ học tiếng Anh.)

---

### Real-life English

Very common in daily conversation.

• "He spends too much time gaming."
• "I spend most of my evenings reading."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend spends too much time on social media.

## Task:

Write 2–3 English sentences:

1. Give advice about reducing screen time.
2. Mention healthy habits or studying.

---

### Example

"You should spend less time scrolling on social media. Try reading books or studying English instead."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Technology has made communication more ( ㄱ ) and efficient. However, excessive smartphone use can lead to internet ( ㄴ ), especially among teenagers."

---

## Hint

• ㄱ = convenient
• ㄴ = addiction

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Notification
• Upload
• Comment section
• Screen time
• Viral
• Content creator

### TOEIC/IELTS Vocabulary

• Communicate
• Access
• Addiction
• Convenient
• Influence

---

## Exercises

1. Translate:
   "Mạng xã hội có ảnh hưởng lớn đến cuộc sống hằng ngày của giới trẻ."

2. Make a sentence using the word "viral".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "How technology affects my life."

2. Use these 3 sentences today:

• "I spend too much time on my phone."

• "That video went viral."

• "Technology makes life more convenient."
`,v2=`# [DAY 7: WEEK 1 REVIEW & MASTER PRACTICE]

## [PART 1 – GOLDEN VOCABULARY REVIEW]

Try reading the words below and check whether you still remember their meanings.

---

## 1. Money & Shopping

• Discount: Giảm giá
• Expensive: Đắt
• Cheap: Rẻ
• Delivery fee: Phí giao hàng
• Brand: Thương hiệu

### Important Vocabulary

• Purchase: Mua hàng
• Budget: Ngân sách
• Compare: So sánh
• Value: Giá trị
• Waste: Lãng phí

---

## 2. Fitness & Exercise

• Workout: Buổi tập
• Stretch: Giãn cơ
• Diet: Chế độ ăn
• Cardio: Bài tập tim mạch
• Muscle soreness: Đau cơ

### Important Vocabulary

• Maintain: Duy trì
• Improve: Cải thiện
• Reduce: Giảm bớt
• Energy: Năng lượng
• Routine: Thói quen/lịch sinh hoạt

---

## 3. Movies & Entertainment

• Spoiler: Tiết lộ nội dung
• Episode: Tập phim
• Series: Series phim
• Subtitle: Phụ đề
• Genre: Thể loại

### Important Vocabulary

• Entertain: Giải trí
• Recommend: Đề xuất
• Popular: Phổ biến
• Relax: Thư giãn
• Emotion: Cảm xúc

---

## 4. Travel & Vacations

• Destination: Điểm đến
• Backpack: Ba lô
• Reservation: Đặt chỗ
• Schedule: Lịch trình
• Souvenir: Quà lưu niệm

### Important Vocabulary

• Explore: Khám phá
• Journey: Hành trình
• Adventure: Phiêu lưu
• Culture: Văn hóa
• Memory: Kỷ niệm

---

## 5. Technology & Social Media

• Notification: Thông báo
• Upload: Tải lên
• Screen time: Thời gian dùng màn hình
• Viral: Nổi nhanh
• Content creator: Người sáng tạo nội dung

### Important Vocabulary

• Communicate: Giao tiếp
• Access: Truy cập
• Addiction: Sự nghiện
• Convenient: Tiện lợi
• Influence: Ảnh hưởng

---

# [PART 2 – GRAMMAR REVIEW]

Review these important grammar structures:

---

## 1. Too + Adjective

( Quá... )

• "This bag is too expensive."
• "The weather is too hot."

---

## 2. Start + Verb-ing

( Bắt đầu làm gì )

• "I started working out recently."
• "She started learning English online."

---

## 3. Used to

( Từng thường làm gì )

• "I used to watch cartoons every day."
• "We used to play games together."

---

## 4. Be going to

( Dự định sẽ )

• "I'm going to travel abroad."
• "We're going to book a hotel."

---

## 5. Spend time + Verb-ing

( Dành thời gian làm gì )

• "I spend a lot of time studying English."
• "He spends too much time gaming."

---

# [PART 3 – MINI TOEIC/IELTS REVIEW TEST]

## Fill in the blanks

"Nowadays, many people spend a lot of time using social media because it is convenient and entertaining. However, excessive screen time can negatively ( ㄱ ) people's health and daily routine. Therefore, it is important to maintain a healthy lifestyle and manage time wisely. During vacations, many people also travel abroad to explore different ( ㄴ ) and create unforgettable memories."

---

## Hint

• ㄱ = influence
• ㄴ = cultures

---

# [PART 4 – COMPREHENSIVE SPEAKING PRACTICE]

## Dialogue

• A: "What do you usually do when you have free time?"

• B: "I usually watch movies or go to the gym."

• A: "That sounds healthy and relaxing."

• B: "Yeah, but sometimes I spend too much time online."

---

## Tasks

1. Shadow the dialogue 5 times.

2. Change the topic:
   Talk about your weekly routine.

3. Answer these questions:
   • "What is your biggest goal this year?"
   • "How do you usually reduce stress?"
   • "What country do you want to visit?"

---

# [PART 5 – WRITING PRACTICE]

## Situation:

You are introducing your lifestyle and hobbies to an online friend.

## Task:

Write 5–7 English sentences about:

1. Your hobbies
2. Your health habits
3. Your favorite entertainment
4. Your travel goals
5. Your screen time habits

---

### Example

"I usually spend my free time watching movies and exercising. Recently, I started working out more often to maintain my health. I also enjoy traveling and exploring different cultures. My dream destination is Japan because I love Japanese food and anime. However, I spend too much time on social media sometimes."

---

# [PART 6 – TRANSLATION PRACTICE]

Translate these sentences into English:

1. Tôi đang cố giảm thời gian sử dụng điện thoại.

2. Tôi muốn khám phá nhiều nền văn hóa khác nhau.

3. Bộ phim đó rất cảm động và thú vị.

4. Tôi thường mua đồ online khi có giảm giá.

5. Tập thể dục giúp tôi giảm stress và duy trì sức khỏe.

---

# [PART 7 – FINAL WEEK REVIEW]

## Weekly Challenge

Try speaking English alone for 5 minutes about:

### "My lifestyle and future goals."

Try using:
• too + adjective
• used to
• be going to
• spend time + V-ing

---

# TEACHER'S REMINDER 📌

1. Review all vocabulary from Day 1–6 for at least 30 minutes.

2. Practice speaking every day, even if your sentences are simple.

3. Don't focus only on grammar — focus on speaking naturally too.

---

## Use these 3 sentences today:

• "I'm trying to improve myself every day."

• "I spend too much time on my phone."

• "I'm going to achieve my goals."
`,x2={"week1-day1":{content:f2,title:"Social Media & Smartphone Life"},"week1-day2":{content:h2,title:"Money & Online Shopping"},"week1-day3":{content:m2,title:"Fitness & Exercise"},"week1-day4":{content:p2,title:"Movies & Entertainment"},"week1-day5":{content:g2,title:"Travel & Vacations"},"week1-day6":{content:y2,title:"Technology & Social Media"},"week1-day7":{content:v2,title:"Week 1 Review"}},w2=e=>{var a;const t=[],n=e.split(`
`);let r=null,i=null,s=[];const o=()=>{s.length>0&&(i?(i.content||(i.content=[]),i.content.push(s.join(`
`).trim())):r&&(r.content||(r.content=[]),r.content.push(s.join(`
`).trim())),s=[])};for(let l=0;l<n.length;l++){const u=n[l].trim();if((a=n[l+1])!=null&&a.trim(),u.startsWith("# [DAY")||u.startsWith("# Day"))o(),i&&(r.parts||(r.parts=[]),r.parts.push(i),i=null),r&&t.push(r),r={type:"day",title:u.replace("# [","").replace("]","").replace("# ",""),parts:[]};else if(u.match(/^#\s*\[PART\s*\d+\]/i)||u.match(/^##\s*PART\s*\d+/i))o(),i&&(r.parts||(r.parts=[]),r.parts.push(i)),i={type:"part",title:u.replace("# [","").replace("]","").replace("# ","").replace("## ",""),content:[]};else if(u.match(/^##\s*\d+\./)||u.match(/^##\s*[A-ZÀ-Ỹ]+/)){o(),i||(i={type:"part",title:"Content",content:[]});const d={word:"",meaning:"",examples:[]},f=u.match(/^##\s*(\d+\.)\s*(.+)/);f&&(d.word=f[2].trim());let h=l+1;for(;h<n.length&&!n[h].trim().startsWith("##")&&!n[h].trim().startsWith("#")&&!n[h].trim().startsWith("---");){const g=n[h].trim();g.startsWith("• Meaning:")&&(d.meaning=g.replace("• Meaning:","").trim()),(g.startsWith("• TOEIC")||g.startsWith("• Daily"))&&d.examples.push(g.replace("• ","")),h++}i.vocab||(i.vocab=[]),i.vocab.push(d)}else u.startsWith("###")?(o(),i||(i={type:"part",title:"Content",content:[]}),i.subtitle=u.replace("###","").trim()):u.startsWith("---")?o():u&&s.push(u)}return o(),i&&(r||(r={type:"day",title:"Unknown",parts:[]}),r.parts.push(i)),r&&t.push(r),t},pg=e=>{const t=x2[e];return t?{id:e,...t,parsed:w2(t.content)}:null},k2=e=>{const t=pg(e);if(!t)return[];const n=[];return t.parsed.forEach(r=>{r.parts&&r.parts.forEach(i=>{i.vocab&&i.vocab.forEach(s=>{n.push({word:s.word,meaning:s.meaning,examples:s.examples})})})}),n};function S2(){const{lessonId:e}=xv(),t=gr(),{completeLesson:n,addFlashcard:r}=Tt(),[i,s]=S.useState(null),[o,a]=S.useState([]),[l,u]=S.useState({}),[d,f]=S.useState(!1),[h,g]=S.useState(0);if(S.useEffect(()=>{var m,p;const y=pg(e);if(y){s(y),a(k2(e));const w=(p=(m=y.parsed[0])==null?void 0:m.parts)==null?void 0:p[0];w&&u({0:w.title})}},[e]),!i)return c.jsx("div",{className:"min-h-screen bg-dark-950 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-dark-800 flex items-center justify-center",children:c.jsx(dr,{className:"text-dark-500",size:32})}),c.jsx("p",{className:"text-dark-400",children:"Loading lesson..."})]})});const v=()=>{n(e,50),o.forEach(m=>r(m)),f(!0)},x=y=>{const m=new SpeechSynthesisUtterance(y);m.rate=.9,speechSynthesis.speak(m)},k=()=>{const y=i.content.split(`
`),m=[];let p=[],w=null;const E=()=>{p.length>0&&(w==="vocab"?m.push(c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 my-4",children:p.map((T,P)=>{const C=T.match(/(\d+)\.\s*(.+?):\s*(.+)/);return C?c.jsx(M.button,{whileTap:{scale:.98},onClick:()=>x(C[2]),className:"card text-left hover:border-primary-500/50",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-primary-400 font-semibold",children:C[2]}),c.jsxs("span",{className:"text-dark-400 text-sm ml-2",children:["- ",C[3]]})]}),c.jsx(Gs,{className:"text-dark-500",size:16})]})},P):null})},m.length)):m.push(c.jsx("ul",{className:`space-y-2 my-4 ${w==="numbered"?"list-decimal":""}`,children:p.map((T,P)=>c.jsxs("li",{className:"text-dark-300 flex items-start gap-2",children:[c.jsx("span",{className:"text-primary-400 mt-1",children:"•"}),c.jsx("span",{className:"leading-relaxed",children:T})]},P))},m.length)),p=[],w=null)};return y.forEach((T,P)=>{var R;const C=T.trim();if(C.startsWith("# [DAY")||C.startsWith("# Day"))E(),m.push(c.jsx(M.h1,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-2xl md:text-3xl font-display font-bold mb-6 gradient-text",children:C.replace("# [","").replace("]","").replace("# ","")},P));else if(C.match(/^#\s*\[PART\s*\d+\]/i))E(),m.push(c.jsx("h2",{className:"text-xl font-bold text-primary-400 mt-8 mb-4",children:C.replace("# [","").replace("]","")},P));else if(C.startsWith("## ")&&!C.match(/^\d+\./)){E();const A=C.includes("VOCAB")||C.includes("Important TOEIC");m.push(c.jsx("h3",{className:`text-lg font-semibold mt-6 mb-3 ${A?"text-accent-400":"text-white"}`,children:C.replace("## ","")},P))}else if(C.startsWith("### "))E(),m.push(c.jsx("h4",{className:"text-md font-medium text-primary-300 mt-4 mb-2",children:C.replace("### ","")},P));else if(C.startsWith("• ")){const A=C.replace("• ","");if(A.match(/^\w+:\s*/)||A.match(/^(Casual|Asking|Natural|Complaining|Friendly|Warning|Task|Situation)/)){E();const H=A.split(":")[0],se=A.split(":").slice(1).join(":");m.push(c.jsxs("div",{className:"my-3",children:[c.jsxs("span",{className:"text-accent-400 font-semibold",children:[H,":"]}),c.jsx("span",{className:"text-dark-300",children:se.replace(/^:\s*/," ")})]},P))}else A.match(/^\d+\.\s*.+:/)?(w="vocab",p.push(A)):(w!=="vocab"&&(w="bullet"),p.push(A))}else if(C.startsWith("- ")&&C.includes("=")){E();const A=C.split("=");m.push(c.jsxs("div",{className:"my-2 py-2 border-t border-dark-700",children:[c.jsx("span",{className:"text-green-400 font-medium",children:A[0].replace("- ","").trim()}),c.jsxs("span",{className:"text-dark-400 ml-2",children:["= ",(R=A[1])==null?void 0:R.trim()]})]},P))}else C.startsWith("---")?(E(),m.push(c.jsx("hr",{className:"border-dark-700 my-6"},P))):C.startsWith("# TEACHER")?(E(),m.push(c.jsxs(M.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"card bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20 my-6",children:[c.jsx("h3",{className:"font-semibold text-lg text-yellow-400 mb-3",children:"📌 Teacher's Reminder"}),c.jsx("div",{className:"text-dark-300 space-y-2",children:y.slice(P+1).map((A,H)=>A.trim().startsWith("#")||A.trim()===""?null:c.jsx("p",{children:A.trim()},H))})]},P))):C&&!C.startsWith("#")&&!C.startsWith("---")&&(E(),C.match(/^\d+\.\s*[A-Z]/)&&m.push(c.jsx("p",{className:"text-dark-300 my-2 leading-relaxed",children:C},P)))}),E(),m};return d?c.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},className:"min-h-screen bg-dark-950 flex items-center justify-center p-4",children:c.jsxs(M.div,{initial:{scale:.8},animate:{scale:1},className:"card text-center max-w-md w-full",children:[c.jsx(M.div,{animate:{rotate:[0,10,-10,0]},transition:{repeat:1/0,duration:2},className:"text-6xl mb-4",children:"🎉"}),c.jsx("h2",{className:"text-2xl font-display font-bold mb-2",children:"Lesson Complete!"}),c.jsx("p",{className:"text-dark-400 mb-6",children:"You've earned 50 XP"}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:()=>t("/lessons"),className:"btn-secondary flex-1",children:"Back to Lessons"}),c.jsx("button",{onClick:()=>t("/dashboard"),className:"btn-primary flex-1",children:"Go Home"})]})]})}):c.jsxs("div",{className:"min-h-screen bg-dark-950",children:[c.jsx("header",{className:"sticky top-0 z-40 bg-dark-950/80 backdrop-blur-md border-b border-dark-800",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-3 flex items-center justify-between",children:[c.jsxs("button",{onClick:()=>t("/lessons"),className:"flex items-center gap-2 text-dark-400 hover:text-white transition-colors",children:[c.jsx(qS,{size:20}),c.jsx("span",{children:"Back"})]}),c.jsx("h1",{className:"font-semibold truncate max-w-[200px]",children:i.title}),c.jsx("div",{className:"w-16"})]})}),c.jsx("div",{className:"max-w-4xl mx-auto px-4 py-6 pb-32",children:k()}),c.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-dark-900/90 backdrop-blur-md border-t border-dark-800 p-4",children:c.jsxs("div",{className:"max-w-4xl mx-auto flex gap-3",children:[c.jsxs("button",{onClick:()=>t("/flashcards"),className:"btn-secondary flex-1",children:[c.jsx(a2,{size:18}),"Practice Flashcards"]}),c.jsxs("button",{onClick:v,className:"btn-primary flex-1 flex items-center justify-center gap-2",children:[c.jsx(gi,{size:18}),"Complete Lesson"]})]})})]})}const E2=["Social Media & Smartphone","Money & Online Shopping","Fitness & Exercise","Movies & Entertainment","Travel & Vacations","Technology & Social Media","Week 1 Review"];function C2(){const e=gr(),{lessons:t,user:n}=Tt(),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return c.jsxs(M.div,{variants:r,initial:"hidden",animate:"visible",className:"space-y-6",children:[c.jsxs(M.div,{variants:i,children:[c.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:["Week 1: ",c.jsx("span",{className:"gradient-text",children:"Daily Life English"})]}),c.jsx("p",{className:"text-dark-400",children:"Master everyday English vocabulary and expressions"})]}),c.jsxs(M.div,{variants:i,className:"card",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx(yi,{className:"text-white",size:24})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-semibold",children:"Week 1 Progress"}),c.jsxs("p",{className:"text-dark-400 text-sm",children:["Level ",n.level," • ",n.xp," XP"]})]})]}),c.jsxs("span",{className:"text-2xl font-bold text-primary-400",children:[t.filter(s=>s.completed).length,"/",t.length]})]}),c.jsx("div",{className:"progress-bar h-3",children:c.jsx(M.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${t.filter(s=>s.completed).length/t.length*100}%`},transition:{duration:.8}})})]}),c.jsx(M.div,{variants:i,className:"space-y-3",children:t.map((s,o)=>c.jsxs(M.button,{onClick:()=>e(`/lesson/${s.id}`),whileHover:{scale:1.01,x:4},whileTap:{scale:.99},className:`w-full card flex items-center justify-between text-left group ${s.completed?"border-green-500/30":""}`,children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:`relative w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg
                ${s.completed?"bg-green-500/20 text-green-400":"bg-gradient-to-br from-primary-500 to-accent-500 text-white"}`,children:s.completed?c.jsx(gi,{size:28}):c.jsx("span",{children:o+1})}),c.jsxs("div",{children:[c.jsx("h3",{className:`font-semibold text-lg ${s.completed?"text-dark-400":""}`,children:s.title}),c.jsxs("p",{className:"text-dark-400 text-sm flex items-center gap-2",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(dr,{size:14}),E2[o]]}),c.jsx("span",{className:"text-dark-600",children:"•"}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(dg,{size:14}),"15-20 min"]})]}),s.completed&&c.jsxs("p",{className:"text-green-400 text-sm mt-1",children:["+",s.xp," XP earned"]})]})]}),c.jsx(Yn,{className:`text-dark-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all ${s.completed?"opacity-50":""}`,size:24})]},s.id))}),c.jsxs(M.div,{variants:i,className:"card bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-primary-500/20",children:[c.jsxs("h3",{className:"font-semibold text-lg mb-2 flex items-center gap-2",children:[c.jsx(yi,{className:"text-yellow-400",size:20}),"Learning Tips"]}),c.jsxs("ul",{className:"space-y-2 text-dark-300 text-sm",children:[c.jsx("li",{children:"• Complete 1 lesson per day to build a strong habit"}),c.jsx("li",{children:"• Review flashcards daily to reinforce memory"}),c.jsx("li",{children:"• Play games to practice vocabulary in a fun way"}),c.jsx("li",{children:"• Don't skip the speaking practice sections!"})]})]})]})}const T2=[{id:"speed-quiz",name:"Speed Quiz",description:"Answer vocabulary questions quickly!",icon:"⚡",color:"from-yellow-500 to-orange-500"},{id:"memory-match",name:"Memory Match",description:"Match words with their meanings",icon:"🧠",color:"from-blue-500 to-cyan-500"},{id:"sentence-builder",name:"Sentence Builder",description:"Construct correct sentences",icon:"✍️",color:"from-green-500 to-emerald-500"},{id:"flashcard-battle",name:"Flashcard Battle",description:"Test your vocabulary knowledge",icon:"⚔️",color:"from-red-500 to-pink-500"},{id:"vocab-battle",name:"Vocab Battle",description:"Challenge yourself with words",icon:"🎯",color:"from-purple-500 to-violet-500"}],Nr=[{word:"Scroll",options:["To scroll on phone","To delete","To call","To write"],correct:0},{word:"Viral",options:["To delete","Spread quickly","To vote","To visit"],correct:1},{word:"Discount",options:["Sale price","Delivery","Return","Exchange"],correct:0},{word:"Budget",options:["Money plan","Credit card","Bank account","Loan"],correct:0},{word:"Workout",options:["Work schedule","Exercise","Meeting","Project"],correct:1},{word:"Routine",options:["Emergency","Schedule","Accident","Holiday"],correct:1},{word:"Destination",options:["Decision","Location","Information","Reservation"],correct:1},{word:"Explore",options:["To explain","To discover","To express","To expose"],correct:1},{word:"Addiction",options:["Habit","Disease","Bad habit","Strong need"],correct:3},{word:"Convenient",options:["Comfortable","Available","Easy to use","Popular"],correct:2}],qi=[{word:"Scroll",meaning:"Lướt điện thoại"},{word:"Upload",meaning:"Đăng tải"},{word:"Discount",meaning:"Giảm giá"},{word:"Workout",meaning:"Buổi tập"},{word:"Destination",meaning:"Điểm đến"},{word:"Viral",meaning:"Lan truyền"}];function P2(){gr();const{addXP:e,winGame:t,incrementGamesPlayed:n,gameStats:r}=Tt(),[i,s]=S.useState(null),[o,a]=S.useState({currentQuestion:0,score:0,answers:[],timeLeft:60,gameOver:!1}),[l,u]=S.useState([]),[d,f]=S.useState([]),[h,g]=S.useState([]),v=p=>{if(s(p),n(),p==="memory-match"){const w=[...qi,...qi].sort(()=>Math.random()-.5).map((E,T)=>({...E,id:T}));u(w),f([]),g([])}a({currentQuestion:0,score:0,answers:[],timeLeft:60,gameOver:!1})},x=p=>{const w=Nr[o.currentQuestion],E=p===w.correct;a(T=>({...T,score:E?T.score+10:T.score,answers:[...T.answers,{question:w.word,correct:E,yourAnswer:p,correctAnswer:w.correct}],currentQuestion:T.currentQuestion+1})),o.currentQuestion>=Nr.length-1&&y()},k=p=>{if(d.length>=2||h.includes(p.word))return;const w=[...d,p];f(w),w.length===2&&(w[0].word===w[1].word?(g([...h,w[0].word]),f([]),h.length===qi.length-1&&(a(E=>({...E,score:E.score+50,gameOver:!0})),t(50))):setTimeout(()=>f([]),1e3))},y=()=>{a(p=>({...p,gameOver:!0})),e(o.score),t(o.score)},m=()=>{s(null),a({currentQuestion:0,score:0,answers:[],timeLeft:60,gameOver:!1})};if(i==="speed-quiz"){if(o.gameOver)return c.jsx(M.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"min-h-screen bg-dark-950 flex items-center justify-center p-4",children:c.jsxs("div",{className:"card text-center max-w-md w-full",children:[c.jsx("div",{className:"text-6xl mb-4",children:o.score>50?"🏆":"💪"}),c.jsx("h2",{className:"text-2xl font-display font-bold mb-2",children:"Game Over!"}),c.jsx("p",{className:"text-dark-400 mb-2",children:"Your Score"}),c.jsxs("p",{className:"text-4xl font-bold gradient-text mb-6",children:[o.score," XP"]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>v("speed-quiz"),className:"btn-secondary flex-1",children:[c.jsx(El,{size:18}),"Play Again"]}),c.jsx("button",{onClick:m,className:"btn-primary flex-1",children:"Back to Games"})]})]})});const p=Nr[o.currentQuestion];return p?c.jsx("div",{className:"min-h-screen bg-dark-950 p-4",children:c.jsxs("div",{className:"max-w-xl mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsx("button",{onClick:m,className:"text-dark-400 hover:text-white",children:"← Back"}),c.jsxs("div",{className:"flex items-center gap-2 text-primary-400",children:[c.jsx(Cl,{size:20}),c.jsxs("span",{className:"font-bold",children:[o.score," XP"]})]})]}),c.jsx("div",{className:"progress-bar mb-6",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${o.currentQuestion/Nr.length*100}%`}})}),c.jsxs(M.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"card mb-6",children:[c.jsx("h3",{className:"text-xl font-semibold text-center mb-2",children:"What does this mean?"}),c.jsx("p",{className:"text-3xl font-bold text-center gradient-text mb-6",children:p.word}),c.jsx("div",{className:"grid grid-cols-1 gap-3",children:p.options.map((w,E)=>c.jsx(M.button,{whileTap:{scale:.98},onClick:()=>x(E),className:"btn-secondary text-left",children:w},E))})]},o.currentQuestion),c.jsxs("p",{className:"text-center text-dark-400",children:["Question ",o.currentQuestion+1," of ",Nr.length]})]})}):null}return i==="memory-match"?o.gameOver?c.jsx(M.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"min-h-screen bg-dark-950 flex items-center justify-center p-4",children:c.jsxs("div",{className:"card text-center max-w-md w-full",children:[c.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),c.jsx("h2",{className:"text-2xl font-display font-bold mb-2",children:"Excellent!"}),c.jsx("p",{className:"text-dark-400 mb-2",children:"You found all pairs!"}),c.jsx("p",{className:"text-4xl font-bold gradient-text mb-6",children:"+50 XP"}),c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>v("memory-match"),className:"btn-secondary flex-1",children:[c.jsx(El,{size:18}),"Play Again"]}),c.jsx("button",{onClick:m,className:"btn-primary flex-1",children:"Back to Games"})]})]})}):c.jsx("div",{className:"min-h-screen bg-dark-950 p-4",children:c.jsxs("div",{className:"max-w-xl mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsx("button",{onClick:m,className:"text-dark-400 hover:text-white",children:"← Back"}),c.jsxs("div",{className:"flex items-center gap-2 text-primary-400",children:[c.jsx(hg,{size:20}),c.jsxs("span",{className:"font-bold",children:[h.length,"/",qi.length]})]})]}),c.jsx("div",{className:"grid grid-cols-3 gap-3",children:l.map(p=>{const w=d.includes(p)||h.includes(p.word);return c.jsx(M.button,{whileTap:{scale:.95},onClick:()=>k(p),className:`aspect-square rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${w?"bg-primary-500/20 border-2 border-primary-500":"bg-dark-800 border-2 border-dark-700 hover:border-primary-500"}`,children:w?p.meaning:"?"},p.id)})})]})}):c.jsxs(M.div,{initial:{opacity:0},animate:{opacity:1},className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:["Games ",c.jsx("span",{className:"gradient-text",children:"Hub"})]}),c.jsx("p",{className:"text-dark-400",children:"Practice English through fun mini-games"})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[c.jsxs("div",{className:"card text-center",children:[c.jsx(Eo,{className:"mx-auto text-primary-400 mb-2",size:24}),c.jsx("span",{className:"text-xl font-bold",children:r.gamesPlayed}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Games Played"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx(ZS,{className:"mx-auto text-accent-400 mb-2",size:24}),c.jsx("span",{className:"text-xl font-bold",children:r.gamesWon}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Games Won"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx(Cl,{className:"mx-auto text-yellow-400 mb-2",size:24}),c.jsx("span",{className:"text-xl font-bold",children:r.highScore}),c.jsx("p",{className:"text-dark-400 text-sm",children:"High Score"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:T2.map(p=>c.jsx(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>v(p.id),className:"card text-left group",children:c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-3xl`,children:p.icon}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"font-semibold text-lg group-hover:text-primary-400 transition-colors",children:p.name}),c.jsx("p",{className:"text-dark-400 text-sm",children:p.description})]}),c.jsx(Yn,{className:"text-dark-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all",size:20})]})},p.id))}),c.jsxs("div",{className:"card bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-primary-500/20",children:[c.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[c.jsx(e2,{className:"text-primary-400",size:20}),"Learning Tip"]}),c.jsx("p",{className:"text-dark-300 text-sm",children:"Playing games regularly helps reinforce vocabulary and makes learning more enjoyable!"})]})]})}const j2=[{word:"Scroll",meaning:"Lướt điện thoại",learned:!1},{word:"Upload",meaning:"Đăng tải",learned:!1},{word:"Notification",meaning:"Thông báo",learned:!1},{word:"Addicted",meaning:"Nghiện, bị phụ thuộc",learned:!1},{word:"Follow",meaning:"Theo dõi",learned:!1},{word:"Viral",meaning:"Lan truyền mạnh trên mạng",learned:!1},{word:"Discount",meaning:"Giảm giá",learned:!1},{word:"Expensive",meaning:"Đắt",learned:!1},{word:"Delivery fee",meaning:"Phí giao hàng",learned:!1},{word:"Workout",meaning:"Buổi tập thể dục",learned:!1},{word:"Routine",meaning:"Thói quen hằng ngày",learned:!1},{word:"Destination",meaning:"Điểm đến",learned:!1}];function N2(){const{flashcards:e,markFlashcardLearned:t}=Tt(),[n,r]=S.useState(0),[i,s]=S.useState(!1),[o,a]=S.useState(!1),l=e.length>0?e:j2,u=o?l.filter(k=>k.learned):l,d=u[n],f=()=>{if(d){const k=new SpeechSynthesisUtterance(d.word);speechSynthesis.speak(k)}},h=()=>{s(!1),setTimeout(()=>{r(k=>(k+1)%u.length)},100)},g=()=>{s(!1),setTimeout(()=>{r(k=>(k-1+u.length)%u.length)},100)},v=()=>{d&&(t(d.id||n),h())},x=()=>{r(Math.floor(Math.random()*u.length)),s(!1)};return d?c.jsxs(M.div,{initial:{opacity:0},animate:{opacity:1},className:"space-y-6",children:[c.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:c.jsx("span",{className:"gradient-text",children:"Flashcards"})}),c.jsxs("p",{className:"text-dark-400",children:[l.filter(k=>k.learned).length,"/",l.length," words learned"]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("button",{onClick:()=>a(!o),className:`btn-secondary ${o?"bg-primary-500/20 border-primary-500":""}`,children:[c.jsx(gi,{size:18}),"Learned (",l.filter(k=>k.learned).length,")"]}),c.jsx("button",{onClick:x,className:"btn-secondary",children:c.jsx(El,{size:18})})]})]}),c.jsx("div",{className:"progress-bar h-2",children:c.jsx(M.div,{className:"progress-bar-fill",animate:{width:`${l.filter(k=>k.learned).length/l.length*100}%`}})}),c.jsx("div",{className:"flex justify-center",children:c.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full max-w-md",children:c.jsx("div",{onClick:()=>s(!i),className:"relative min-h-[300px] cursor-pointer perspective-1000",children:c.jsxs(M.div,{animate:{rotateY:i?180:0},transition:{duration:.6},className:"w-full min-h-[300px]",style:{transformStyle:"preserve-3d"},children:[c.jsxs("div",{className:`absolute inset-0 card flex flex-col items-center justify-center p-8 ${i?"opacity-0":"opacity-100"}`,style:{backfaceVisibility:"hidden"},children:[c.jsx("span",{className:"text-sm text-dark-400 mb-2",children:"English"}),c.jsx("h2",{className:"text-4xl font-display font-bold gradient-text mb-6",children:d.word}),c.jsxs("button",{onClick:k=>{k.stopPropagation(),f()},className:"btn-secondary",children:[c.jsx(Gs,{size:18}),"Listen"]}),c.jsx("p",{className:"text-dark-500 text-sm mt-4",children:"Tap to flip"})]}),c.jsxs("div",{className:`absolute inset-0 card flex flex-col items-center justify-center p-8 ${i?"opacity-100":"opacity-0"}`,style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[c.jsx("span",{className:"text-sm text-dark-400 mb-2",children:"Vietnamese"}),c.jsx("h2",{className:"text-3xl font-display font-bold text-white mb-6 text-center",children:d.meaning}),c.jsxs("button",{onClick:k=>{k.stopPropagation(),s(!1),f()},className:"btn-secondary mb-4",children:[c.jsx(Gs,{size:18}),"Listen"]})]})]})})})}),c.jsxs("div",{className:"flex items-center justify-between max-w-md mx-auto",children:[c.jsxs("button",{onClick:g,className:"btn-secondary flex items-center gap-2",children:[c.jsx(n2,{size:20}),"Previous"]}),c.jsxs("span",{className:"text-dark-400",children:[n+1," / ",u.length]}),c.jsxs("button",{onClick:h,className:"btn-secondary flex items-center gap-2",children:["Next",c.jsx(r2,{size:20})]})]}),c.jsx("div",{className:"flex justify-center gap-4",children:c.jsxs("button",{onClick:v,className:"btn-accent flex items-center gap-2",children:[c.jsx(gi,{size:18}),"Mark as Learned"]})})]}):c.jsx("div",{className:"min-h-screen bg-dark-950 flex items-center justify-center p-4",children:c.jsxs("div",{className:"card text-center",children:[c.jsx(Wu,{className:"mx-auto text-primary-400 mb-4",size:48}),c.jsx("h2",{className:"text-xl font-semibold mb-2",children:"No Flashcards Yet"}),c.jsx("p",{className:"text-dark-400 mb-4",children:"Complete lessons to add flashcards"}),c.jsx("button",{onClick:()=>a(!1),className:"btn-primary",children:"Show All Cards"})]})})}function A2(){const{achievements:e,user:t,lessons:n,flashcards:r,gameStats:i}=Tt(),s=e.filter(l=>l.unlocked).length,o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return c.jsxs(M.div,{variants:o,initial:"hidden",animate:"visible",className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:c.jsx("span",{className:"gradient-text",children:"Achievements"})}),c.jsxs("p",{className:"text-dark-400",children:[s,"/",e.length," unlocked"]})]}),c.jsx(M.div,{variants:a,className:"card",children:c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-2xl font-bold text-primary-400",children:t.xp}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Total XP"})]}),c.jsxs("div",{children:[c.jsx("p",{className:"text-2xl font-bold text-orange-400",children:t.streak}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Day Streak"})]}),c.jsxs("div",{children:[c.jsx("p",{className:"text-2xl font-bold text-green-400",children:n.filter(l=>l.completed).length}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Lessons Done"})]}),c.jsxs("div",{children:[c.jsx("p",{className:"text-2xl font-bold text-accent-400",children:r.filter(l=>l.learned).length}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Words Learned"})]})]})}),c.jsx(M.div,{variants:a,className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.map(l=>c.jsxs(M.div,{variants:a,className:`card flex items-center gap-4 ${l.unlocked?"border-primary-500/30 bg-primary-500/5":"opacity-60"}`,children:[c.jsx("div",{className:`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${l.unlocked?"bg-gradient-to-br from-primary-500 to-accent-500":"bg-dark-800"}`,children:l.unlocked?l.icon:"🔒"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:`font-semibold text-lg ${l.unlocked?"text-white":"text-dark-400"}`,children:l.name}),c.jsx("p",{className:"text-dark-400 text-sm",children:l.description}),l.unlocked&&c.jsxs("p",{className:"text-primary-400 text-xs mt-1 flex items-center gap-1",children:[c.jsx(gi,{size:12})," Unlocked"]})]})]},l.id))}),c.jsx(M.div,{variants:a,className:"card bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20",children:c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx(vi,{className:"text-yellow-400",size:40}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"font-semibold text-lg",children:"Total Progress"}),c.jsx("div",{className:"progress-bar mt-2",children:c.jsx(M.div,{className:"progress-bar-fill bg-gradient-to-r from-yellow-500 to-orange-500",animate:{width:`${s/e.length*100}%`}})})]}),c.jsxs("span",{className:"text-2xl font-bold text-yellow-400",children:[Math.round(s/e.length*100),"%"]})]})})]})}function I2(){const{settings:e,updateSettings:t}=Tt(),n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},i=()=>{confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(localStorage.clear(),window.location.reload())};return c.jsxs(M.div,{variants:n,initial:"hidden",animate:"visible",className:"space-y-6 max-w-2xl mx-auto",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:c.jsx("span",{className:"gradient-text",children:"Settings"})}),c.jsx("p",{className:"text-dark-400",children:"Customize your learning experience"})]}),c.jsxs(M.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(Gs,{className:"text-primary-400",size:20}),"Sound"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-medium",children:"Sound Effects"}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Play sounds for achievements and actions"})]}),c.jsx("button",{onClick:()=>t({soundEnabled:!e.soundEnabled}),className:`w-12 h-6 rounded-full transition-colors ${e.soundEnabled?"bg-primary-500":"bg-dark-600"}`,children:c.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${e.soundEnabled?"translate-x-6":"translate-x-0.5"}`})})]})})]}),c.jsxs(M.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(o2,{className:"text-primary-400",size:20}),"Display"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-medium",children:"Dark Mode"}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Use dark theme throughout the app"})]}),c.jsx("button",{onClick:()=>t({darkMode:!e.darkMode}),className:`w-12 h-6 rounded-full transition-colors ${e.darkMode?"bg-primary-500":"bg-dark-600"}`,children:c.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${e.darkMode?"translate-x-6":"translate-x-0.5"}`})})]})})]}),c.jsxs(M.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(JS,{className:"text-primary-400",size:20}),"Notifications"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-medium",children:"Daily Reminders"}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Get reminded to practice daily"})]}),c.jsx("button",{onClick:()=>t({notifications:!e.notifications}),className:`w-12 h-6 rounded-full transition-colors ${e.notifications?"bg-primary-500":"bg-dark-600"}`,children:c.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${e.notifications?"translate-x-6":"translate-x-0.5"}`})})]})})]}),c.jsxs(M.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(l2,{className:"text-red-400",size:20}),"Data Management"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{children:[c.jsx("p",{className:"text-dark-400 text-sm mb-3",children:"Clear all your progress, achievements, and settings. This action cannot be undone."}),c.jsx("button",{onClick:i,className:"px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-colors",children:"Reset All Data"})]})})]}),c.jsxs(M.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(s2,{className:"text-primary-400",size:20}),"About"]}),c.jsxs("div",{className:"space-y-2 text-dark-400 text-sm",children:[c.jsx("p",{children:"English Learning App v1.0.0"}),c.jsx("p",{children:"Built with React, Vite, and TailwindCSS"}),c.jsx("p",{children:"Designed for GitHub Pages deployment"})]})]})]})}function R2(){const{user:e,lessons:t,flashcards:n,gameStats:r,achievements:i}=Tt(),s=t.filter(f=>f.completed).length,o=n.filter(f=>f.learned).length,a=i.filter(f=>f.unlocked).length,l=e.xp%200/200*100,u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return c.jsxs(M.div,{variants:u,initial:"hidden",animate:"visible",className:"space-y-6",children:[c.jsxs(M.div,{variants:d,className:"card relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"}),c.jsxs("div",{className:"relative flex flex-col md:flex-row items-center gap-6",children:[c.jsx("div",{className:"w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx(mg,{className:"text-white",size:48})}),c.jsxs("div",{className:"text-center md:text-left",children:[c.jsx("h1",{className:"text-2xl font-display font-bold mb-1",children:e.name}),c.jsx("p",{className:"text-dark-400",children:"English Learner"}),c.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-4 mt-3",children:[c.jsxs("div",{className:"flex items-center gap-2 text-primary-400",children:[c.jsx(yi,{size:18,fill:"currentColor"}),c.jsxs("span",{className:"font-bold",children:["Level ",e.level]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-orange-400",children:[c.jsx(fg,{size:18,fill:"currentColor"}),c.jsxs("span",{className:"font-bold",children:[e.streak," day streak"]})]})]})]})]}),c.jsxs("div",{className:"mt-6",children:[c.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[c.jsxs("span",{className:"text-dark-400",children:["XP Progress to Level ",e.level+1]}),c.jsxs("span",{className:"text-primary-400",children:[e.xp," / ",e.level*200," XP"]})]}),c.jsx("div",{className:"progress-bar h-3",children:c.jsx(M.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${l}%`},transition:{duration:1}})})]})]}),c.jsxs(M.div,{variants:d,className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"card text-center",children:[c.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-500/20 flex items-center justify-center",children:c.jsx(dr,{className:"text-primary-400",size:24})}),c.jsx("p",{className:"text-2xl font-bold",children:s}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Lessons"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-xl bg-green-500/20 flex items-center justify-center",children:c.jsx(yi,{className:"text-green-400",size:24})}),c.jsx("p",{className:"text-2xl font-bold",children:o}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Words"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-500/20 flex items-center justify-center",children:c.jsx(Eo,{className:"text-accent-400",size:24})}),c.jsx("p",{className:"text-2xl font-bold",children:r.gamesWon}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Games Won"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-xl bg-yellow-500/20 flex items-center justify-center",children:c.jsx(vi,{className:"text-yellow-400",size:24})}),c.jsx("p",{className:"text-2xl font-bold",children:a}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Achievements"})]})]}),c.jsxs(M.div,{variants:d,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(t2,{className:"text-primary-400",size:20}),"Learning Activity"]}),c.jsx("div",{className:"grid grid-cols-7 gap-2",children:Array.from({length:28}).map((f,h)=>{const g=h<e.streak;return c.jsx("div",{className:`aspect-square rounded-lg ${g?"bg-gradient-to-br from-primary-500 to-accent-500":"bg-dark-800"}`,style:{opacity:g?1:.3}},h)})}),c.jsxs("p",{className:"text-dark-400 text-sm mt-4 text-center",children:["You've been learning for ",e.streak," days in a row!"]})]}),c.jsxs(M.div,{variants:d,className:"card",children:[c.jsx("h2",{className:"font-semibold text-lg mb-4",children:"All Time Stats"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"Total XP Earned"}),c.jsxs("span",{className:"font-bold text-primary-400",children:[e.xp," XP"]})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"Current Level"}),c.jsxs("span",{className:"font-bold",children:["Level ",e.level]})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"Current Streak"}),c.jsxs("span",{className:"font-bold text-orange-400",children:[e.streak," days"]})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"Total Games Played"}),c.jsx("span",{className:"font-bold",children:r.gamesPlayed})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"High Score"}),c.jsxs("span",{className:"font-bold text-accent-400",children:[r.highScore," XP"]})]})]})]})]})}function M2(){const{updateStreak:e,user:t}=Tt();return S.useEffect(()=>{e()},[]),c.jsx(c2,{children:c.jsxs(Vv,{children:[c.jsx(rt,{path:"/",element:c.jsx(bv,{to:"/dashboard",replace:!0})}),c.jsx(rt,{path:"/dashboard",element:c.jsx(d2,{})}),c.jsx(rt,{path:"/lessons",element:c.jsx(C2,{})}),c.jsx(rt,{path:"/lesson/:lessonId",element:c.jsx(S2,{})}),c.jsx(rt,{path:"/games",element:c.jsx(P2,{})}),c.jsx(rt,{path:"/flashcards",element:c.jsx(N2,{})}),c.jsx(rt,{path:"/achievements",element:c.jsx(A2,{})}),c.jsx(rt,{path:"/profile",element:c.jsx(R2,{})}),c.jsx(rt,{path:"/settings",element:c.jsx(I2,{})})]})})}ha.createRoot(document.getElementById("root")).render(c.jsx(wi.StrictMode,{children:c.jsx($v,{children:c.jsx(M2,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});
