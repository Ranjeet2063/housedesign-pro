(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function rg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mc={exports:{}},Do={},Ec={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Pv(){if(zp)return dt;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function S(U,N,de){this.props=U,this.context=N,this.refs=C,this.updater=de||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,N){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,N,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(U,N,de){this.props=U,this.context=N,this.refs=C,this.updater=de||y}var b=L.prototype=new _;b.constructor=L,M(b,S.prototype),b.isPureReactComponent=!0;var w=Array.isArray,K=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function z(U,N,de){var Y,ie={},ve=null,pe=null;if(N!=null)for(Y in N.ref!==void 0&&(pe=N.ref),N.key!==void 0&&(ve=""+N.key),N)K.call(N,Y)&&!O.hasOwnProperty(Y)&&(ie[Y]=N[Y]);var Ae=arguments.length-2;if(Ae===1)ie.children=de;else if(1<Ae){for(var Re=Array(Ae),Fe=0;Fe<Ae;Fe++)Re[Fe]=arguments[Fe+2];ie.children=Re}if(U&&U.defaultProps)for(Y in Ae=U.defaultProps,Ae)ie[Y]===void 0&&(ie[Y]=Ae[Y]);return{$$typeof:s,type:U,key:ve,ref:pe,props:ie,_owner:k.current}}function P(U,N){return{$$typeof:s,type:U.type,key:N,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var N={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(de){return N[de]})}var se=/\/+/g;function X(U,N){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):N.toString(36)}function D(U,N,de,Y,ie){var ve=typeof U;(ve==="undefined"||ve==="boolean")&&(U=null);var pe=!1;if(U===null)pe=!0;else switch(ve){case"string":case"number":pe=!0;break;case"object":switch(U.$$typeof){case s:case e:pe=!0}}if(pe)return pe=U,ie=ie(pe),U=Y===""?"."+X(pe,0):Y,w(ie)?(de="",U!=null&&(de=U.replace(se,"$&/")+"/"),D(ie,N,de,"",function(Fe){return Fe})):ie!=null&&(A(ie)&&(ie=P(ie,de+(!ie.key||pe&&pe.key===ie.key?"":(""+ie.key).replace(se,"$&/")+"/")+U)),N.push(ie)),1;if(pe=0,Y=Y===""?".":Y+":",w(U))for(var Ae=0;Ae<U.length;Ae++){ve=U[Ae];var Re=Y+X(ve,Ae);pe+=D(ve,N,de,Re,ie)}else if(Re=x(U),typeof Re=="function")for(U=Re.call(U),Ae=0;!(ve=U.next()).done;)ve=ve.value,Re=Y+X(ve,Ae++),pe+=D(ve,N,de,Re,ie);else if(ve==="object")throw N=String(U),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return pe}function te(U,N,de){if(U==null)return U;var Y=[],ie=0;return D(U,Y,"","",function(ve){return N.call(de,ve,ie++)}),Y}function ee(U){if(U._status===-1){var N=U._result;N=N(),N.then(function(de){(U._status===0||U._status===-1)&&(U._status=1,U._result=de)},function(de){(U._status===0||U._status===-1)&&(U._status=2,U._result=de)}),U._status===-1&&(U._status=0,U._result=N)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},V={transition:null},H={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};function Q(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:te,forEach:function(U,N,de){te(U,function(){N.apply(this,arguments)},de)},count:function(U){var N=0;return te(U,function(){N++}),N},toArray:function(U){return te(U,function(N){return N})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},dt.Component=S,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=L,dt.StrictMode=r,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,dt.act=Q,dt.cloneElement=function(U,N,de){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Y=M({},U.props),ie=U.key,ve=U.ref,pe=U._owner;if(N!=null){if(N.ref!==void 0&&(ve=N.ref,pe=k.current),N.key!==void 0&&(ie=""+N.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Re in N)K.call(N,Re)&&!O.hasOwnProperty(Re)&&(Y[Re]=N[Re]===void 0&&Ae!==void 0?Ae[Re]:N[Re])}var Re=arguments.length-2;if(Re===1)Y.children=de;else if(1<Re){Ae=Array(Re);for(var Fe=0;Fe<Re;Fe++)Ae[Fe]=arguments[Fe+2];Y.children=Ae}return{$$typeof:s,type:U.type,key:ie,ref:ve,props:Y,_owner:pe}},dt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},dt.createElement=z,dt.createFactory=function(U){var N=z.bind(null,U);return N.type=U,N},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:f,render:U}},dt.isValidElement=A,dt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ee}},dt.memo=function(U,N){return{$$typeof:p,type:U,compare:N===void 0?null:N}},dt.startTransition=function(U){var N=V.transition;V.transition={};try{U()}finally{V.transition=N}},dt.unstable_act=Q,dt.useCallback=function(U,N){return ce.current.useCallback(U,N)},dt.useContext=function(U){return ce.current.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},dt.useEffect=function(U,N){return ce.current.useEffect(U,N)},dt.useId=function(){return ce.current.useId()},dt.useImperativeHandle=function(U,N,de){return ce.current.useImperativeHandle(U,N,de)},dt.useInsertionEffect=function(U,N){return ce.current.useInsertionEffect(U,N)},dt.useLayoutEffect=function(U,N){return ce.current.useLayoutEffect(U,N)},dt.useMemo=function(U,N){return ce.current.useMemo(U,N)},dt.useReducer=function(U,N,de){return ce.current.useReducer(U,N,de)},dt.useRef=function(U){return ce.current.useRef(U)},dt.useState=function(U){return ce.current.useState(U)},dt.useSyncExternalStore=function(U,N,de){return ce.current.useSyncExternalStore(U,N,de)},dt.useTransition=function(){return ce.current.useTransition()},dt.version="18.3.1",dt}var Bp;function Qf(){return Bp||(Bp=1,Ec.exports=Pv()),Ec.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function bv(){if(Vp)return Do;Vp=1;var s=Qf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,v={},x=null,y=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(y=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:y,props:v,_owner:a.current}}return Do.Fragment=t,Do.jsx=c,Do.jsxs=c,Do}var Hp;function Lv(){return Hp||(Hp=1,Mc.exports=bv()),Mc.exports}var ge=Lv(),Rt=Qf();const sg=rg(Rt);var ol={},wc={exports:{}},In={},Tc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Dv(){return Gp||(Gp=1,(function(s){function e(V,H){var Q=V.length;V.push(H);e:for(;0<Q;){var U=Q-1>>>1,N=V[U];if(0<a(N,H))V[U]=H,V[Q]=N,Q=U;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var H=V[0],Q=V.pop();if(Q!==H){V[0]=Q;e:for(var U=0,N=V.length,de=N>>>1;U<de;){var Y=2*(U+1)-1,ie=V[Y],ve=Y+1,pe=V[ve];if(0>a(ie,Q))ve<N&&0>a(pe,ie)?(V[U]=pe,V[ve]=Q,U=ve):(V[U]=ie,V[Y]=Q,U=Y);else if(ve<N&&0>a(pe,Q))V[U]=pe,V[ve]=Q,U=ve;else break e}}return H}function a(V,H){var Q=V.sortIndex-H.sortIndex;return Q!==0?Q:V.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,v=null,x=3,y=!1,M=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var H=t(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=V)r(p),H.sortIndex=H.expirationTime,e(h,H);else break;H=t(p)}}function w(V){if(C=!1,b(V),!M)if(t(h)!==null)M=!0,ee(K);else{var H=t(p);H!==null&&ce(w,H.startTime-V)}}function K(V,H){M=!1,C&&(C=!1,_(z),z=-1),y=!0;var Q=x;try{for(b(H),v=t(h);v!==null&&(!(v.expirationTime>H)||V&&!B());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var N=U(v.expirationTime<=H);H=s.unstable_now(),typeof N=="function"?v.callback=N:v===t(h)&&r(h),b(H)}else r(h);v=t(h)}if(v!==null)var de=!0;else{var Y=t(p);Y!==null&&ce(w,Y.startTime-H),de=!1}return de}finally{v=null,x=Q,y=!1}}var k=!1,O=null,z=-1,P=5,A=-1;function B(){return!(s.unstable_now()-A<P)}function se(){if(O!==null){var V=s.unstable_now();A=V;var H=!0;try{H=O(!0,V)}finally{H?X():(k=!1,O=null)}}else k=!1}var X;if(typeof L=="function")X=function(){L(se)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,te=D.port2;D.port1.onmessage=se,X=function(){te.postMessage(null)}}else X=function(){S(se,0)};function ee(V){O=V,k||(k=!0,X())}function ce(V,H){z=S(function(){V(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ee(K))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var Q=x;x=H;try{return V()}finally{x=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Q=x;x=V;try{return H()}finally{x=Q}},s.unstable_scheduleCallback=function(V,H,Q){var U=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?U+Q:U):Q=U,V){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Q+N,V={id:g++,callback:H,priorityLevel:V,startTime:Q,expirationTime:N,sortIndex:-1},Q>U?(V.sortIndex=Q,e(p,V),t(h)===null&&V===t(p)&&(C?(_(z),z=-1):C=!0,ce(w,Q-U))):(V.sortIndex=N,e(h,V),M||y||(M=!0,ee(K))),V},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(V){var H=x;return function(){var Q=x;x=H;try{return V.apply(this,arguments)}finally{x=Q}}}})(Ac)),Ac}var Wp;function Nv(){return Wp||(Wp=1,Tc.exports=Dv()),Tc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Iv(){if(Xp)return In;Xp=1;var s=Qf(),e=Nv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);S[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);S[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);S[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,o,u){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var w=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),V=Symbol.iterator;function H(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,U;function N(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var de=!1;function Y(n,i){if(!n||de)return"";de=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var u=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){u=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){u=ae}n()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,F=m.length-1;1<=E&&0<=F&&d[E]!==m[F];)F--;for(;1<=E&&0<=F;E--,F--)if(d[E]!==m[F]){if(E!==1||F!==1)do if(E--,F--,0>F||d[E]!==m[F]){var G=`
`+d[E].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=E&&0<=F);break}}}finally{de=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?N(n):""}function ie(n){switch(n.tag){case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case k:return"Portal";case P:return"Profiler";case z:return"StrictMode";case X:return"Suspense";case D:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return i=n.displayName||null,i!==null?i:ve(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return ve(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Fe(n){var i=Re(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function _t(n){n._valueTracker||(n._valueTracker=Fe(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Re(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function J(n,i){var o=i.checked;return Q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function yn(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function ct(n,i){ht(n,i);var o=Ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?At(n,i.type,o):i.hasOwnProperty("defaultValue")&&At(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function At(n,i,o){(i!=="number"||Nt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var $e=Array.isArray;function I(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function oe(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if($e(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function _e(n,i){var o=Ae(i.value),u=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ye(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pe,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,fe=null,me=null;function Ne(n){if(n=vo(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Sa(i),be(n.stateNode,n.type,i))}}function De(n){fe?me?me.push(n):me=[n]:fe=n}function st(){if(fe){var n=fe,i=me;if(me=fe=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function Ut(n,i){return n(i)}function qt(){}var xt=!1;function Cn(n,i,o){if(xt)return n(i,o);xt=!0;try{return Ut(n,i,o)}finally{xt=!1,(fe!==null||me!==null)&&(qt(),st())}}function Sn(n,i){var o=n.stateNode;if(o===null)return null;var u=Sa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ts=!1;if(f)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{ts=!1}function Ai(n,i,o,u,d,m,E,F,G){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(o,ae)}catch(Se){this.onError(Se)}}var Ci=!1,Ar=null,Cr=!1,$i=null,ta={onError:function(n){Ci=!0,Ar=n}};function ns(n,i,o,u,d,m,E,F,G){Ci=!1,Ar=null,Ai.apply(ta,arguments)}function na(n,i,o,u,d,m,E,F,G){if(ns.apply(this,arguments),Ci){if(Ci){var ae=Ar;Ci=!1,Ar=null}else throw Error(t(198));Cr||(Cr=!0,$i=ae)}}function pi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ia(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ra(n){if(pi(n)!==n)throw Error(t(188))}function Wl(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return ra(d),n;if(m===u)return ra(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var E=!1,F=d.child;F;){if(F===o){E=!0,o=d,u=m;break}if(F===u){E=!0,u=d,o=m;break}F=F.sibling}if(!E){for(F=m.child;F;){if(F===o){E=!0,o=m,u=d;break}if(F===u){E=!0,u=m,o=d;break}F=F.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function R(n){return n=Wl(n),n!==null?$(n):null}function $(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=$(n);if(i!==null)return i;n=n.sibling}return null}var le=e.unstable_scheduleCallback,ue=e.unstable_cancelCallback,Z=e.unstable_shouldYield,Ce=e.unstable_requestPaint,we=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,je=e.unstable_LowPriority,gt=e.unstable_IdlePriority,wt=null,mt=null;function ln(n){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Mt,Ye=Math.log,ei=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(Ye(n)/ei|0)|0}var un=64,ti=4194304;function Yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mi(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=o&268435455;if(E!==0){var F=E&~d;F!==0?u=Yt(F):(m&=E,m!==0&&(u=Yt(m)))}else E=o&~d,E!==0?u=Yt(E):m!==0&&(u=Yt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ot(i),d=1<<o,u|=n[o],i&=~d;return u}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-ot(m),F=1<<E,G=d[E];G===-1?((F&o)===0||(F&u)!==0)&&(d[E]=Lt(F,i)):G<=i&&(n.expiredLanes|=F),m&=~F}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mn(){var n=un;return un<<=1,(un&4194240)===0&&(un=64),n}function Xn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Rn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function sa(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ot(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function Xl(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ot(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Ct=0;function vd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var _d,jl,xd,yd,Sd,ql=!1,oa=[],Ki=null,Zi=null,Ji=null,eo=new Map,to=new Map,Qi=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(n,i){switch(n){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=vo(i),i!==null&&jl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Jg(n,i,o,u,d){switch(i){case"focusin":return Ki=no(Ki,n,i,o,u,d),!0;case"dragenter":return Zi=no(Zi,n,i,o,u,d),!0;case"mouseover":return Ji=no(Ji,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return eo.set(m,no(eo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,to.set(m,no(to.get(m)||null,n,i,o,u,d)),!0}return!1}function Ed(n){var i=Rr(n.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=ia(o),i!==null){n.blockedOn=i,Sd(n.priority,function(){xd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function aa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=$l(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Tt=u,o.target.dispatchEvent(u),Tt=null}else return i=vo(o),i!==null&&jl(i),n.blockedOn=o,!1;i.shift()}return!0}function wd(n,i,o){aa(n)&&o.delete(i)}function Qg(){ql=!1,Ki!==null&&aa(Ki)&&(Ki=null),Zi!==null&&aa(Zi)&&(Zi=null),Ji!==null&&aa(Ji)&&(Ji=null),eo.forEach(wd),to.forEach(wd)}function io(n,i){n.blockedOn===i&&(n.blockedOn=null,ql||(ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Qg)))}function ro(n){function i(d){return io(d,n)}if(0<oa.length){io(oa[0],n);for(var o=1;o<oa.length;o++){var u=oa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ki!==null&&io(Ki,n),Zi!==null&&io(Zi,n),Ji!==null&&io(Ji,n),eo.forEach(i),to.forEach(i),o=0;o<Qi.length;o++)u=Qi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Qi.length&&(o=Qi[0],o.blockedOn===null);)Ed(o),o.blockedOn===null&&Qi.shift()}var is=w.ReactCurrentBatchConfig,la=!0;function e0(n,i,o,u){var d=Ct,m=is.transition;is.transition=null;try{Ct=1,Yl(n,i,o,u)}finally{Ct=d,is.transition=m}}function t0(n,i,o,u){var d=Ct,m=is.transition;is.transition=null;try{Ct=4,Yl(n,i,o,u)}finally{Ct=d,is.transition=m}}function Yl(n,i,o,u){if(la){var d=$l(n,i,o,u);if(d===null)du(n,i,u,ua,o),Md(n,u);else if(Jg(d,n,i,o,u))u.stopPropagation();else if(Md(n,u),i&4&&-1<Zg.indexOf(n)){for(;d!==null;){var m=vo(d);if(m!==null&&_d(m),m=$l(n,i,o,u),m===null&&du(n,i,u,ua,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else du(n,i,u,null,o)}}var ua=null;function $l(n,i,o,u){if(ua=null,n=q(u),n=Rr(n),n!==null)if(i=pi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ia(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ua=n,null}function Td(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ve:return 1;case tt:return 4;case it:case je:return 16;case gt:return 536870912;default:return 16}default:return 16}}var er=null,Kl=null,ca=null;function Ad(){if(ca)return ca;var n,i=Kl,o=i.length,u,d="value"in er?er.value:er.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===d[m-u];u++);return ca=d.slice(n,1<u?1-u:void 0)}function fa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function da(){return!0}function Cd(){return!1}function On(n){function i(o,u,d,m,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?da:Cd,this.isPropagationStopped=Cd,this}return Q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=On(rs),so=Q({},rs,{view:0,detail:0}),n0=On(so),Jl,Ql,oo,ha=Q({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oo&&(oo&&n.type==="mousemove"?(Jl=n.screenX-oo.screenX,Ql=n.screenY-oo.screenY):Ql=Jl=0,oo=n),Jl)},movementY:function(n){return"movementY"in n?n.movementY:Ql}}),Rd=On(ha),i0=Q({},ha,{dataTransfer:0}),r0=On(i0),s0=Q({},so,{relatedTarget:0}),eu=On(s0),o0=Q({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=On(o0),l0=Q({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u0=On(l0),c0=Q({},rs,{data:0}),Pd=On(c0),f0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=h0[n])?!!i[n]:!1}function tu(){return p0}var m0=Q({},so,{key:function(n){if(n.key){var i=f0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?d0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(n){return n.type==="keypress"?fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),g0=On(m0),v0=Q({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=On(v0),_0=Q({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),x0=On(_0),y0=Q({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=On(y0),M0=Q({},ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=On(M0),w0=[9,13,27,32],nu=f&&"CompositionEvent"in window,ao=null;f&&"documentMode"in document&&(ao=document.documentMode);var T0=f&&"TextEvent"in window&&!ao,Ld=f&&(!nu||ao&&8<ao&&11>=ao),Dd=" ",Nd=!1;function Id(n,i){switch(n){case"keyup":return w0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function A0(n,i){switch(n){case"compositionend":return Ud(i);case"keypress":return i.which!==32?null:(Nd=!0,Dd);case"textInput":return n=i.data,n===Dd&&Nd?null:n;default:return null}}function C0(n,i){if(ss)return n==="compositionend"||!nu&&Id(n,i)?(n=Ad(),ca=Kl=er=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ld&&i.locale!=="ko"?null:i.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!R0[n.type]:i==="textarea"}function Od(n,i,o,u){De(u),i=_a(i,"onChange"),0<i.length&&(o=new Zl("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var lo=null,uo=null;function P0(n){th(n,0)}function pa(n){var i=cs(n);if(pt(i))return n}function b0(n,i){if(n==="change")return i}var kd=!1;if(f){var iu;if(f){var ru="oninput"in document;if(!ru){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),ru=typeof zd.oninput=="function"}iu=ru}else iu=!1;kd=iu&&(!document.documentMode||9<document.documentMode)}function Bd(){lo&&(lo.detachEvent("onpropertychange",Vd),uo=lo=null)}function Vd(n){if(n.propertyName==="value"&&pa(uo)){var i=[];Od(i,uo,n,q(n)),Cn(P0,i)}}function L0(n,i,o){n==="focusin"?(Bd(),lo=i,uo=o,lo.attachEvent("onpropertychange",Vd)):n==="focusout"&&Bd()}function D0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pa(uo)}function N0(n,i){if(n==="click")return pa(i)}function I0(n,i){if(n==="input"||n==="change")return pa(i)}function U0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:U0;function co(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ni(n[d],i[d]))return!1}return!0}function Hd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gd(n,i){var o=Hd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hd(o)}}function Wd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Xd(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Nt(n.document)}return i}function su(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function F0(n){var i=Xd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Wd(o.ownerDocument.documentElement,o)){if(u!==null&&su(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Gd(o,m);var E=Gd(o,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var O0=f&&"documentMode"in document&&11>=document.documentMode,os=null,ou=null,fo=null,au=!1;function jd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;au||os==null||os!==Nt(u)||(u=os,"selectionStart"in u&&su(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),fo&&co(fo,u)||(fo=u,u=_a(ou,"onSelect"),0<u.length&&(i=new Zl("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=os)))}function ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var as={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},lu={},qd={};f&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ga(n){if(lu[n])return lu[n];if(!as[n])return n;var i=as[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in qd)return lu[n]=i[o];return n}var Yd=ga("animationend"),$d=ga("animationiteration"),Kd=ga("animationstart"),Zd=ga("transitionend"),Jd=new Map,Qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){Jd.set(n,i),l(i,[n])}for(var uu=0;uu<Qd.length;uu++){var cu=Qd[uu],k0=cu.toLowerCase(),z0=cu[0].toUpperCase()+cu.slice(1);tr(k0,"on"+z0)}tr(Yd,"onAnimationEnd"),tr($d,"onAnimationIteration"),tr(Kd,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Zd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function eh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,na(u,i,void 0,n),n.currentTarget=null}function th(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var F=u[E],G=F.instance,ae=F.currentTarget;if(F=F.listener,G!==m&&d.isPropagationStopped())break e;eh(d,F,ae),m=G}else for(E=0;E<u.length;E++){if(F=u[E],G=F.instance,ae=F.currentTarget,F=F.listener,G!==m&&d.isPropagationStopped())break e;eh(d,F,ae),m=G}}}if(Cr)throw n=$i,Cr=!1,$i=null,n}function Ft(n,i){var o=i[_u];o===void 0&&(o=i[_u]=new Set);var u=n+"__bubble";o.has(u)||(nh(i,n,2,!1),o.add(u))}function fu(n,i,o){var u=0;i&&(u|=4),nh(o,n,u,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function po(n){if(!n[va]){n[va]=!0,r.forEach(function(o){o!=="selectionchange"&&(B0.has(o)||fu(o,!1,n),fu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[va]||(i[va]=!0,fu("selectionchange",!1,i))}}function nh(n,i,o,u){switch(Td(i)){case 1:var d=e0;break;case 4:d=t0;break;default:d=Yl}o=d.bind(null,i,o,n),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function du(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var F=u.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===d||G.nodeType===8&&G.parentNode===d))return;E=E.return}for(;F!==null;){if(E=Rr(F),E===null)return;if(G=E.tag,G===5||G===6){u=m=E;continue e}F=F.parentNode}}u=u.return}Cn(function(){var ae=m,Se=q(o),Me=[];e:{var xe=Jd.get(n);if(xe!==void 0){var Ie=Zl,Be=n;switch(n){case"keypress":if(fa(o)===0)break e;case"keydown":case"keyup":Ie=g0;break;case"focusin":Be="focus",Ie=eu;break;case"focusout":Be="blur",Ie=eu;break;case"beforeblur":case"afterblur":Ie=eu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=x0;break;case Yd:case $d:case Kd:Ie=a0;break;case Zd:Ie=S0;break;case"scroll":Ie=n0;break;case"wheel":Ie=E0;break;case"copy":case"cut":case"paste":Ie=u0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=bd}var He=(i&4)!==0,Wt=!He&&n==="scroll",ne=He?xe!==null?xe+"Capture":null:xe;He=[];for(var W=ae,re;W!==null;){re=W;var Te=re.stateNode;if(re.tag===5&&Te!==null&&(re=Te,ne!==null&&(Te=Sn(W,ne),Te!=null&&He.push(mo(W,Te,re)))),Wt)break;W=W.return}0<He.length&&(xe=new Ie(xe,Be,null,o,Se),Me.push({event:xe,listeners:He}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",xe&&o!==Tt&&(Be=o.relatedTarget||o.fromElement)&&(Rr(Be)||Be[Pi]))break e;if((Ie||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ie?(Be=o.relatedTarget||o.toElement,Ie=ae,Be=Be?Rr(Be):null,Be!==null&&(Wt=pi(Be),Be!==Wt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=ae),Ie!==Be)){if(He=Rd,Te="onMouseLeave",ne="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(He=bd,Te="onPointerLeave",ne="onPointerEnter",W="pointer"),Wt=Ie==null?xe:cs(Ie),re=Be==null?xe:cs(Be),xe=new He(Te,W+"leave",Ie,o,Se),xe.target=Wt,xe.relatedTarget=re,Te=null,Rr(Se)===ae&&(He=new He(ne,W+"enter",Be,o,Se),He.target=re,He.relatedTarget=Wt,Te=He),Wt=Te,Ie&&Be)t:{for(He=Ie,ne=Be,W=0,re=He;re;re=ls(re))W++;for(re=0,Te=ne;Te;Te=ls(Te))re++;for(;0<W-re;)He=ls(He),W--;for(;0<re-W;)ne=ls(ne),re--;for(;W--;){if(He===ne||ne!==null&&He===ne.alternate)break t;He=ls(He),ne=ls(ne)}He=null}else He=null;Ie!==null&&ih(Me,xe,Ie,He,!1),Be!==null&&Wt!==null&&ih(Me,Wt,Be,He,!0)}}e:{if(xe=ae?cs(ae):window,Ie=xe.nodeName&&xe.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&xe.type==="file")var qe=b0;else if(Fd(xe))if(kd)qe=I0;else{qe=D0;var Ze=L0}else(Ie=xe.nodeName)&&Ie.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(qe=N0);if(qe&&(qe=qe(n,ae))){Od(Me,qe,o,Se);break e}Ze&&Ze(n,xe,ae),n==="focusout"&&(Ze=xe._wrapperState)&&Ze.controlled&&xe.type==="number"&&At(xe,"number",xe.value)}switch(Ze=ae?cs(ae):window,n){case"focusin":(Fd(Ze)||Ze.contentEditable==="true")&&(os=Ze,ou=ae,fo=null);break;case"focusout":fo=ou=os=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,jd(Me,o,Se);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":jd(Me,o,Se)}var Je;if(nu)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ss?Id(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Ld&&o.locale!=="ko"&&(ss||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ss&&(Je=Ad()):(er=Se,Kl="value"in er?er.value:er.textContent,ss=!0)),Ze=_a(ae,nt),0<Ze.length&&(nt=new Pd(nt,n,null,o,Se),Me.push({event:nt,listeners:Ze}),Je?nt.data=Je:(Je=Ud(o),Je!==null&&(nt.data=Je)))),(Je=T0?A0(n,o):C0(n,o))&&(ae=_a(ae,"onBeforeInput"),0<ae.length&&(Se=new Pd("onBeforeInput","beforeinput",null,o,Se),Me.push({event:Se,listeners:ae}),Se.data=Je))}th(Me,i)})}function mo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function _a(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Sn(n,o),m!=null&&u.unshift(mo(n,m,d)),m=Sn(n,i),m!=null&&u.push(mo(n,m,d))),n=n.return}return u}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ih(n,i,o,u,d){for(var m=i._reactName,E=[];o!==null&&o!==u;){var F=o,G=F.alternate,ae=F.stateNode;if(G!==null&&G===u)break;F.tag===5&&ae!==null&&(F=ae,d?(G=Sn(o,m),G!=null&&E.unshift(mo(o,G,F))):d||(G=Sn(o,m),G!=null&&E.push(mo(o,G,F)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var V0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function rh(n){return(typeof n=="string"?n:""+n).replace(V0,`
`).replace(H0,"")}function xa(n,i,o){if(i=rh(i),rh(n)!==i&&o)throw Error(t(425))}function ya(){}var hu=null,pu=null;function mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(n){return sh.resolve(null).then(n).catch(X0)}:gu;function X0(n){setTimeout(function(){throw n})}function vu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),ro(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);ro(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function oh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),gi="__reactFiber$"+us,go="__reactProps$"+us,Pi="__reactContainer$"+us,_u="__reactEvents$"+us,j0="__reactListeners$"+us,q0="__reactHandles$"+us;function Rr(n){var i=n[gi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Pi]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=oh(n);n!==null;){if(o=n[gi])return o;n=oh(n)}return i}n=o,o=n.parentNode}return null}function vo(n){return n=n[gi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sa(n){return n[go]||null}var xu=[],fs=-1;function ir(n){return{current:n}}function Ot(n){0>fs||(n.current=xu[fs],xu[fs]=null,fs--)}function It(n,i){fs++,xu[fs]=n.current,n.current=i}var rr={},cn=ir(rr),Pn=ir(!1),Pr=rr;function ds(n,i){var o=n.type.contextTypes;if(!o)return rr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function bn(n){return n=n.childContextTypes,n!=null}function Ma(){Ot(Pn),Ot(cn)}function ah(n,i,o){if(cn.current!==rr)throw Error(t(168));It(cn,i),It(Pn,o)}function lh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,pe(n)||"Unknown",d));return Q({},o,u)}function Ea(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Pr=cn.current,It(cn,n),It(Pn,Pn.current),!0}function uh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=lh(n,i,Pr),u.__reactInternalMemoizedMergedChildContext=n,Ot(Pn),Ot(cn),It(cn,n)):Ot(Pn),It(Pn,o)}var bi=null,wa=!1,yu=!1;function ch(n){bi===null?bi=[n]:bi.push(n)}function Y0(n){wa=!0,ch(n)}function sr(){if(!yu&&bi!==null){yu=!0;var n=0,i=Ct;try{var o=bi;for(Ct=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}bi=null,wa=!1}catch(d){throw bi!==null&&(bi=bi.slice(n+1)),le(Ve,sr),d}finally{Ct=i,yu=!1}}return null}var hs=[],ps=0,Ta=null,Aa=0,jn=[],qn=0,br=null,Li=1,Di="";function Lr(n,i){hs[ps++]=Aa,hs[ps++]=Ta,Ta=n,Aa=i}function fh(n,i,o){jn[qn++]=Li,jn[qn++]=Di,jn[qn++]=br,br=n;var u=Li;n=Di;var d=32-ot(u)-1;u&=~(1<<d),o+=1;var m=32-ot(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Li=1<<32-ot(i)+d|o<<d|u,Di=m+n}else Li=1<<m|o<<d|u,Di=n}function Su(n){n.return!==null&&(Lr(n,1),fh(n,1,0))}function Mu(n){for(;n===Ta;)Ta=hs[--ps],hs[ps]=null,Aa=hs[--ps],hs[ps]=null;for(;n===br;)br=jn[--qn],jn[qn]=null,Di=jn[--qn],jn[qn]=null,Li=jn[--qn],jn[qn]=null}var kn=null,zn=null,kt=!1,ii=null;function dh(n,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function hh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,zn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Li,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,kn=n,zn=null,!0):!1;default:return!1}}function Eu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wu(n){if(kt){var i=zn;if(i){var o=i;if(!hh(n,i)){if(Eu(n))throw Error(t(418));i=nr(o.nextSibling);var u=kn;i&&hh(n,i)?dh(u,o):(n.flags=n.flags&-4097|2,kt=!1,kn=n)}}else{if(Eu(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,kn=n}}}function ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Ca(n){if(n!==kn)return!1;if(!kt)return ph(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mu(n.type,n.memoizedProps)),i&&(i=zn)){if(Eu(n))throw mh(),Error(t(418));for(;i;)dh(n,i),i=nr(i.nextSibling)}if(ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){zn=nr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=kn?nr(n.stateNode.nextSibling):null;return!0}function mh(){for(var n=zn;n;)n=nr(n.nextSibling)}function ms(){zn=kn=null,kt=!1}function Tu(n){ii===null?ii=[n]:ii.push(n)}var $0=w.ReactCurrentBatchConfig;function _o(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var F=d.refs;E===null?delete F[m]:F[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ra(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function gh(n){var i=n._init;return i(n._payload)}function vh(n){function i(ne,W){if(n){var re=ne.deletions;re===null?(ne.deletions=[W],ne.flags|=16):re.push(W)}}function o(ne,W){if(!n)return null;for(;W!==null;)i(ne,W),W=W.sibling;return null}function u(ne,W){for(ne=new Map;W!==null;)W.key!==null?ne.set(W.key,W):ne.set(W.index,W),W=W.sibling;return ne}function d(ne,W){return ne=hr(ne,W),ne.index=0,ne.sibling=null,ne}function m(ne,W,re){return ne.index=re,n?(re=ne.alternate,re!==null?(re=re.index,re<W?(ne.flags|=2,W):re):(ne.flags|=2,W)):(ne.flags|=1048576,W)}function E(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function F(ne,W,re,Te){return W===null||W.tag!==6?(W=gc(re,ne.mode,Te),W.return=ne,W):(W=d(W,re),W.return=ne,W)}function G(ne,W,re,Te){var qe=re.type;return qe===O?Se(ne,W,re.props.children,Te,re.key):W!==null&&(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ee&&gh(qe)===W.type)?(Te=d(W,re.props),Te.ref=_o(ne,W,re),Te.return=ne,Te):(Te=Ja(re.type,re.key,re.props,null,ne.mode,Te),Te.ref=_o(ne,W,re),Te.return=ne,Te)}function ae(ne,W,re,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=vc(re,ne.mode,Te),W.return=ne,W):(W=d(W,re.children||[]),W.return=ne,W)}function Se(ne,W,re,Te,qe){return W===null||W.tag!==7?(W=zr(re,ne.mode,Te,qe),W.return=ne,W):(W=d(W,re),W.return=ne,W)}function Me(ne,W,re){if(typeof W=="string"&&W!==""||typeof W=="number")return W=gc(""+W,ne.mode,re),W.return=ne,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case K:return re=Ja(W.type,W.key,W.props,null,ne.mode,re),re.ref=_o(ne,null,W),re.return=ne,re;case k:return W=vc(W,ne.mode,re),W.return=ne,W;case ee:var Te=W._init;return Me(ne,Te(W._payload),re)}if($e(W)||H(W))return W=zr(W,ne.mode,re,null),W.return=ne,W;Ra(ne,W)}return null}function xe(ne,W,re,Te){var qe=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return qe!==null?null:F(ne,W,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case K:return re.key===qe?G(ne,W,re,Te):null;case k:return re.key===qe?ae(ne,W,re,Te):null;case ee:return qe=re._init,xe(ne,W,qe(re._payload),Te)}if($e(re)||H(re))return qe!==null?null:Se(ne,W,re,Te,null);Ra(ne,re)}return null}function Ie(ne,W,re,Te,qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ne=ne.get(re)||null,F(W,ne,""+Te,qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case K:return ne=ne.get(Te.key===null?re:Te.key)||null,G(W,ne,Te,qe);case k:return ne=ne.get(Te.key===null?re:Te.key)||null,ae(W,ne,Te,qe);case ee:var Ze=Te._init;return Ie(ne,W,re,Ze(Te._payload),qe)}if($e(Te)||H(Te))return ne=ne.get(re)||null,Se(W,ne,Te,qe,null);Ra(W,Te)}return null}function Be(ne,W,re,Te){for(var qe=null,Ze=null,Je=W,nt=W=0,tn=null;Je!==null&&nt<re.length;nt++){Je.index>nt?(tn=Je,Je=null):tn=Je.sibling;var Et=xe(ne,Je,re[nt],Te);if(Et===null){Je===null&&(Je=tn);break}n&&Je&&Et.alternate===null&&i(ne,Je),W=m(Et,W,nt),Ze===null?qe=Et:Ze.sibling=Et,Ze=Et,Je=tn}if(nt===re.length)return o(ne,Je),kt&&Lr(ne,nt),qe;if(Je===null){for(;nt<re.length;nt++)Je=Me(ne,re[nt],Te),Je!==null&&(W=m(Je,W,nt),Ze===null?qe=Je:Ze.sibling=Je,Ze=Je);return kt&&Lr(ne,nt),qe}for(Je=u(ne,Je);nt<re.length;nt++)tn=Ie(Je,ne,nt,re[nt],Te),tn!==null&&(n&&tn.alternate!==null&&Je.delete(tn.key===null?nt:tn.key),W=m(tn,W,nt),Ze===null?qe=tn:Ze.sibling=tn,Ze=tn);return n&&Je.forEach(function(pr){return i(ne,pr)}),kt&&Lr(ne,nt),qe}function He(ne,W,re,Te){var qe=H(re);if(typeof qe!="function")throw Error(t(150));if(re=qe.call(re),re==null)throw Error(t(151));for(var Ze=qe=null,Je=W,nt=W=0,tn=null,Et=re.next();Je!==null&&!Et.done;nt++,Et=re.next()){Je.index>nt?(tn=Je,Je=null):tn=Je.sibling;var pr=xe(ne,Je,Et.value,Te);if(pr===null){Je===null&&(Je=tn);break}n&&Je&&pr.alternate===null&&i(ne,Je),W=m(pr,W,nt),Ze===null?qe=pr:Ze.sibling=pr,Ze=pr,Je=tn}if(Et.done)return o(ne,Je),kt&&Lr(ne,nt),qe;if(Je===null){for(;!Et.done;nt++,Et=re.next())Et=Me(ne,Et.value,Te),Et!==null&&(W=m(Et,W,nt),Ze===null?qe=Et:Ze.sibling=Et,Ze=Et);return kt&&Lr(ne,nt),qe}for(Je=u(ne,Je);!Et.done;nt++,Et=re.next())Et=Ie(Je,ne,nt,Et.value,Te),Et!==null&&(n&&Et.alternate!==null&&Je.delete(Et.key===null?nt:Et.key),W=m(Et,W,nt),Ze===null?qe=Et:Ze.sibling=Et,Ze=Et);return n&&Je.forEach(function(Rv){return i(ne,Rv)}),kt&&Lr(ne,nt),qe}function Wt(ne,W,re,Te){if(typeof re=="object"&&re!==null&&re.type===O&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case K:e:{for(var qe=re.key,Ze=W;Ze!==null;){if(Ze.key===qe){if(qe=re.type,qe===O){if(Ze.tag===7){o(ne,Ze.sibling),W=d(Ze,re.props.children),W.return=ne,ne=W;break e}}else if(Ze.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ee&&gh(qe)===Ze.type){o(ne,Ze.sibling),W=d(Ze,re.props),W.ref=_o(ne,Ze,re),W.return=ne,ne=W;break e}o(ne,Ze);break}else i(ne,Ze);Ze=Ze.sibling}re.type===O?(W=zr(re.props.children,ne.mode,Te,re.key),W.return=ne,ne=W):(Te=Ja(re.type,re.key,re.props,null,ne.mode,Te),Te.ref=_o(ne,W,re),Te.return=ne,ne=Te)}return E(ne);case k:e:{for(Ze=re.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){o(ne,W.sibling),W=d(W,re.children||[]),W.return=ne,ne=W;break e}else{o(ne,W);break}else i(ne,W);W=W.sibling}W=vc(re,ne.mode,Te),W.return=ne,ne=W}return E(ne);case ee:return Ze=re._init,Wt(ne,W,Ze(re._payload),Te)}if($e(re))return Be(ne,W,re,Te);if(H(re))return He(ne,W,re,Te);Ra(ne,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,W!==null&&W.tag===6?(o(ne,W.sibling),W=d(W,re),W.return=ne,ne=W):(o(ne,W),W=gc(re,ne.mode,Te),W.return=ne,ne=W),E(ne)):o(ne,W)}return Wt}var gs=vh(!0),_h=vh(!1),Pa=ir(null),ba=null,vs=null,Au=null;function Cu(){Au=vs=ba=null}function Ru(n){var i=Pa.current;Ot(Pa),n._currentValue=i}function Pu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function _s(n,i){ba=n,Au=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Yn(n){var i=n._currentValue;if(Au!==n)if(n={context:n,memoizedValue:i,next:null},vs===null){if(ba===null)throw Error(t(308));vs=n,ba.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return i}var Dr=null;function bu(n){Dr===null?Dr=[n]:Dr.push(n)}function xh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,bu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ni(n,u)}function Ni(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var or=!1;function Lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ii(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(yt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ni(n,o)}return d=u.interleaved,d===null?(i.next=i,bu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ni(n,o)}function La(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Xl(n,o)}}function Sh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Da(n,i,o,u){var d=n.updateQueue;or=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var G=F,ae=G.next;G.next=null,E===null?m=ae:E.next=ae,E=G;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,F=Se.lastBaseUpdate,F!==E&&(F===null?Se.firstBaseUpdate=ae:F.next=ae,Se.lastBaseUpdate=G))}if(m!==null){var Me=d.baseState;E=0,Se=ae=G=null,F=m;do{var xe=F.lane,Ie=F.eventTime;if((u&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Ie,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Be=n,He=F;switch(xe=i,Ie=o,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){Me=Be.call(Ie,Me,xe);break e}Me=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,xe=typeof Be=="function"?Be.call(Ie,Me,xe):Be,xe==null)break e;Me=Q({},Me,xe);break e;case 2:or=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[F]:xe.push(F))}else Ie={eventTime:Ie,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Se===null?(ae=Se=Ie,G=Me):Se=Se.next=Ie,E|=xe;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(Se===null&&(G=Me),d.baseState=G,d.firstBaseUpdate=ae,d.lastBaseUpdate=Se,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Ur|=E,n.lanes=E,n.memoizedState=Me}}function Mh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var xo={},vi=ir(xo),yo=ir(xo),So=ir(xo);function Nr(n){if(n===xo)throw Error(t(174));return n}function Du(n,i){switch(It(So,i),It(yo,n),It(vi,xo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Ot(vi),It(vi,i)}function xs(){Ot(vi),Ot(yo),Ot(So)}function Eh(n){Nr(So.current);var i=Nr(vi.current),o=We(i,n.type);i!==o&&(It(yo,n),It(vi,o))}function Nu(n){yo.current===n&&(Ot(vi),Ot(yo))}var Bt=ir(0);function Na(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Iu=[];function Uu(){for(var n=0;n<Iu.length;n++)Iu[n]._workInProgressVersionPrimary=null;Iu.length=0}var Ia=w.ReactCurrentDispatcher,Fu=w.ReactCurrentBatchConfig,Ir=0,Vt=null,$t=null,Qt=null,Ua=!1,Mo=!1,Eo=0,K0=0;function fn(){throw Error(t(321))}function Ou(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ni(n[o],i[o]))return!1;return!0}function ku(n,i,o,u,d,m){if(Ir=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ia.current=n===null||n.memoizedState===null?ev:tv,n=o(u,d),Mo){m=0;do{if(Mo=!1,Eo=0,25<=m)throw Error(t(301));m+=1,Qt=$t=null,i.updateQueue=null,Ia.current=nv,n=o(u,d)}while(Mo)}if(Ia.current=ka,i=$t!==null&&$t.next!==null,Ir=0,Qt=$t=Vt=null,Ua=!1,i)throw Error(t(300));return n}function zu(){var n=Eo!==0;return Eo=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Vt.memoizedState=Qt=n:Qt=Qt.next=n,Qt}function $n(){if($t===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=Qt===null?Vt.memoizedState:Qt.next;if(i!==null)Qt=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Qt===null?Vt.memoizedState=Qt=n:Qt=Qt.next=n}return Qt}function wo(n,i){return typeof i=="function"?i(n):i}function Bu(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=$t,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var F=E=null,G=null,ae=m;do{var Se=ae.lane;if((Ir&Se)===Se)G!==null&&(G=G.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:n(u,ae.action);else{var Me={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};G===null?(F=G=Me,E=u):G=G.next=Me,Vt.lanes|=Se,Ur|=Se}ae=ae.next}while(ae!==null&&ae!==m);G===null?E=u:G.next=F,ni(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=G,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Ur|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vu(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ni(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function wh(){}function Th(n,i){var o=Vt,u=$n(),d=i(),m=!ni(u.memoizedState,d);if(m&&(u.memoizedState=d,Ln=!0),u=u.queue,Hu(Rh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||Qt!==null&&Qt.memoizedState.tag&1){if(o.flags|=2048,To(9,Ch.bind(null,o,u,d,i),void 0,null),en===null)throw Error(t(349));(Ir&30)!==0||Ah(o,i,d)}return d}function Ah(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ch(n,i,o,u){i.value=o,i.getSnapshot=u,Ph(i)&&bh(n)}function Rh(n,i,o){return o(function(){Ph(i)&&bh(n)})}function Ph(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ni(n,o)}catch{return!0}}function bh(n){var i=Ni(n,1);i!==null&&ai(i,n,1,-1)}function Lh(n){var i=_i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:n},i.queue=n,n=n.dispatch=Q0.bind(null,Vt,n),[i.memoizedState,n]}function To(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Dh(){return $n().memoizedState}function Fa(n,i,o,u){var d=_i();Vt.flags|=n,d.memoizedState=To(1|i,o,void 0,u===void 0?null:u)}function Oa(n,i,o,u){var d=$n();u=u===void 0?null:u;var m=void 0;if($t!==null){var E=$t.memoizedState;if(m=E.destroy,u!==null&&Ou(u,E.deps)){d.memoizedState=To(i,o,m,u);return}}Vt.flags|=n,d.memoizedState=To(1|i,o,m,u)}function Nh(n,i){return Fa(8390656,8,n,i)}function Hu(n,i){return Oa(2048,8,n,i)}function Ih(n,i){return Oa(4,2,n,i)}function Uh(n,i){return Oa(4,4,n,i)}function Fh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Oh(n,i,o){return o=o!=null?o.concat([n]):null,Oa(4,4,Fh.bind(null,i,n),o)}function Gu(){}function kh(n,i){var o=$n();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ou(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function zh(n,i){var o=$n();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ou(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Bh(n,i,o){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=o):(ni(o,i)||(o=Mn(),Vt.lanes|=o,Ur|=o,n.baseState=!0),i)}function Z0(n,i){var o=Ct;Ct=o!==0&&4>o?o:4,n(!0);var u=Fu.transition;Fu.transition={};try{n(!1),i()}finally{Ct=o,Fu.transition=u}}function Vh(){return $n().memoizedState}function J0(n,i,o){var u=fr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Hh(n))Gh(i,o);else if(o=xh(n,i,o,u),o!==null){var d=wn();ai(o,n,u,d),Wh(o,i,u)}}function Q0(n,i,o){var u=fr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Hh(n))Gh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,F=m(E,o);if(d.hasEagerState=!0,d.eagerState=F,ni(F,E)){var G=i.interleaved;G===null?(d.next=d,bu(i)):(d.next=G.next,G.next=d),i.interleaved=d;return}}catch{}finally{}o=xh(n,i,d,u),o!==null&&(d=wn(),ai(o,n,u,d),Wh(o,i,u))}}function Hh(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Gh(n,i){Mo=Ua=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Wh(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Xl(n,o)}}var ka={readContext:Yn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},ev={readContext:Yn,useCallback:function(n,i){return _i().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:Nh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Fa(4194308,4,Fh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Fa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Fa(4,2,n,i)},useMemo:function(n,i){var o=_i();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=_i();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=J0.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=_i();return n={current:n},i.memoizedState=n},useState:Lh,useDebugValue:Gu,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=Lh(!1),i=n[0];return n=Z0.bind(null,n[1]),_i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Vt,d=_i();if(kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),en===null)throw Error(t(349));(Ir&30)!==0||Ah(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Nh(Rh.bind(null,u,m,n),[n]),u.flags|=2048,To(9,Ch.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=_i(),i=en.identifierPrefix;if(kt){var o=Di,u=Li;o=(u&~(1<<32-ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Eo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=K0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},tv={readContext:Yn,useCallback:kh,useContext:Yn,useEffect:Hu,useImperativeHandle:Oh,useInsertionEffect:Ih,useLayoutEffect:Uh,useMemo:zh,useReducer:Bu,useRef:Dh,useState:function(){return Bu(wo)},useDebugValue:Gu,useDeferredValue:function(n){var i=$n();return Bh(i,$t.memoizedState,n)},useTransition:function(){var n=Bu(wo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Th,useId:Vh,unstable_isNewReconciler:!1},nv={readContext:Yn,useCallback:kh,useContext:Yn,useEffect:Hu,useImperativeHandle:Oh,useInsertionEffect:Ih,useLayoutEffect:Uh,useMemo:zh,useReducer:Vu,useRef:Dh,useState:function(){return Vu(wo)},useDebugValue:Gu,useDeferredValue:function(n){var i=$n();return $t===null?i.memoizedState=n:Bh(i,$t.memoizedState,n)},useTransition:function(){var n=Vu(wo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Th,useId:Vh,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=Q({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Wu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:Q({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var za={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=wn(),d=fr(n),m=Ii(u,d);m.payload=i,o!=null&&(m.callback=o),i=ar(n,m,d),i!==null&&(ai(i,n,d,u),La(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=wn(),d=fr(n),m=Ii(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=ar(n,m,d),i!==null&&(ai(i,n,d,u),La(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=wn(),u=fr(n),d=Ii(o,u);d.tag=2,i!=null&&(d.callback=i),i=ar(n,d,u),i!==null&&(ai(i,n,u,o),La(i,n,u))}};function Xh(n,i,o,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!co(o,u)||!co(d,m):!0}function jh(n,i,o){var u=!1,d=rr,m=i.contextType;return typeof m=="object"&&m!==null?m=Yn(m):(d=bn(i)?Pr:cn.current,u=i.contextTypes,m=(u=u!=null)?ds(n,d):rr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=za,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function qh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&za.enqueueReplaceState(i,i.state,null)}function Xu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Lu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Yn(m):(m=bn(i)?Pr:cn.current,d.context=ds(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Wu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&za.enqueueReplaceState(d,d.state,null),Da(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ys(n,i){try{var o="",u=i;do o+=ie(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function ju(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function qu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function Yh(n,i,o){o=Ii(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ja||(ja=!0,lc=u),qu(n,i)},o}function $h(n,i,o){o=Ii(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){qu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){qu(n,i),typeof u!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Kh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new iv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=vv.bind(null,n,i,o),i.then(n,n))}function Zh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Jh(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ii(-1,1),i.tag=2,ar(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var rv=w.ReactCurrentOwner,Ln=!1;function En(n,i,o,u){i.child=n===null?_h(i,null,o,u):gs(i,n.child,o,u)}function Qh(n,i,o,u,d){o=o.render;var m=i.ref;return _s(i,d),u=ku(n,i,o,u,m,d),o=zu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ui(n,i,d)):(kt&&o&&Su(i),i.flags|=1,En(n,i,u,d),i.child)}function ep(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!mc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,tp(n,i,m,u,d)):(n=Ja(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(E,u)&&n.ref===i.ref)return Ui(n,i,d)}return i.flags|=1,n=hr(m,u),n.ref=i.ref,n.return=i,i.child=n}function tp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(co(m,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,Ui(n,i,d)}return Yu(n,i,o,u,d)}function np(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ms,Bn),Bn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Ms,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,It(Ms,Bn),Bn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,It(Ms,Bn),Bn|=u;return En(n,i,d,o),i.child}function ip(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Yu(n,i,o,u,d){var m=bn(o)?Pr:cn.current;return m=ds(i,m),_s(i,d),o=ku(n,i,o,u,m,d),u=zu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ui(n,i,d)):(kt&&u&&Su(i),i.flags|=1,En(n,i,o,d),i.child)}function rp(n,i,o,u,d){if(bn(o)){var m=!0;Ea(i)}else m=!1;if(_s(i,d),i.stateNode===null)Va(n,i),jh(i,o,u),Xu(i,o,u,d),u=!0;else if(n===null){var E=i.stateNode,F=i.memoizedProps;E.props=F;var G=E.context,ae=o.contextType;typeof ae=="object"&&ae!==null?ae=Yn(ae):(ae=bn(o)?Pr:cn.current,ae=ds(i,ae));var Se=o.getDerivedStateFromProps,Me=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==u||G!==ae)&&qh(i,E,u,ae),or=!1;var xe=i.memoizedState;E.state=xe,Da(i,u,E,d),G=i.memoizedState,F!==u||xe!==G||Pn.current||or?(typeof Se=="function"&&(Wu(i,o,Se,u),G=i.memoizedState),(F=or||Xh(i,o,F,u,xe,G,ae))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=G),E.props=u,E.state=G,E.context=ae,u=F):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,yh(n,i),F=i.memoizedProps,ae=i.type===i.elementType?F:ri(i.type,F),E.props=ae,Me=i.pendingProps,xe=E.context,G=o.contextType,typeof G=="object"&&G!==null?G=Yn(G):(G=bn(o)?Pr:cn.current,G=ds(i,G));var Ie=o.getDerivedStateFromProps;(Se=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==Me||xe!==G)&&qh(i,E,u,G),or=!1,xe=i.memoizedState,E.state=xe,Da(i,u,E,d);var Be=i.memoizedState;F!==Me||xe!==Be||Pn.current||or?(typeof Ie=="function"&&(Wu(i,o,Ie,u),Be=i.memoizedState),(ae=or||Xh(i,o,ae,u,xe,Be,G)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Be,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Be,G)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Be),E.props=u,E.state=Be,E.context=G,u=ae):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),u=!1)}return $u(n,i,o,u,m,d)}function $u(n,i,o,u,d,m){ip(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&uh(i,o,!1),Ui(n,i,m);u=i.stateNode,rv.current=i;var F=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=gs(i,n.child,null,m),i.child=gs(i,null,F,m)):En(n,i,F,m),i.memoizedState=u.state,d&&uh(i,o,!0),i.child}function sp(n){var i=n.stateNode;i.pendingContext?ah(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ah(n,i.context,!1),Du(n,i.containerInfo)}function op(n,i,o,u,d){return ms(),Tu(d),i.flags|=256,En(n,i,o,u),i.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Zu(n){return{baseLanes:n,cachePool:null,transitions:null}}function ap(n,i,o){var u=i.pendingProps,d=Bt.current,m=!1,E=(i.flags&128)!==0,F;if((F=E)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(Bt,d&1),n===null)return wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Qa(E,u,0,null),n=zr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Zu(o),i.memoizedState=Ku,n):Ju(i,E));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return sv(n,i,E,u,F,d,o);if(m){m=u.fallback,E=i.mode,d=n.child,F=d.sibling;var G={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=G,i.deletions=null):(u=hr(d,G),u.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=hr(F,m):(m=zr(m,E,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?Zu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~o,i.memoizedState=Ku,u}return m=n.child,n=m.sibling,u=hr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Ju(n,i){return i=Qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ba(n,i,o,u){return u!==null&&Tu(u),gs(i,n.child,null,o),n=Ju(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function sv(n,i,o,u,d,m,E){if(o)return i.flags&256?(i.flags&=-257,u=ju(Error(t(422))),Ba(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=Qa({mode:"visible",children:u.children},d,0,null),m=zr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&gs(i,n.child,null,E),i.child.memoizedState=Zu(E),i.memoizedState=Ku,m);if((i.mode&1)===0)return Ba(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var F=u.dgst;return u=F,m=Error(t(419)),u=ju(m,u,void 0),Ba(n,i,E,u)}if(F=(E&n.childLanes)!==0,Ln||F){if(u=en,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ni(n,d),ai(u,n,d,-1))}return pc(),u=ju(Error(t(421))),Ba(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=_v.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,zn=nr(d.nextSibling),kn=i,kt=!0,ii=null,n!==null&&(jn[qn++]=Li,jn[qn++]=Di,jn[qn++]=br,Li=n.id,Di=n.overflow,br=i),i=Ju(i,u.children),i.flags|=4096,i)}function lp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Pu(n.return,i,o)}function Qu(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function up(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(En(n,i,u.children,o),u=Bt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lp(n,o,i);else if(n.tag===19)lp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Bt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Na(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Qu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Na(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Qu(i,!0,o,null,m);break;case"together":Qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ui(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ur|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=hr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=hr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function ov(n,i,o){switch(i.tag){case 3:sp(i),ms();break;case 5:Eh(i);break;case 1:bn(i.type)&&Ea(i);break;case 4:Du(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(Pa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?ap(n,i,o):(It(Bt,Bt.current&1),n=Ui(n,i,o),n!==null?n.sibling:null);It(Bt,Bt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return up(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,np(n,i,o)}return Ui(n,i,o)}var cp,ec,fp,dp;cp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ec=function(){},fp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Nr(vi.current);var m=null;switch(o){case"input":d=J(n,d),u=J(n,u),m=[];break;case"select":d=Q({},d,{value:void 0}),u=Q({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ya)}ft(o,u);var E;o=null;for(ae in d)if(!u.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var F=d[ae];for(E in F)F.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?m||(m=[]):(m=m||[]).push(ae,null));for(ae in u){var G=u[ae];if(F=d!=null?d[ae]:void 0,u.hasOwnProperty(ae)&&G!==F&&(G!=null||F!=null))if(ae==="style")if(F){for(E in F)!F.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in G)G.hasOwnProperty(E)&&F[E]!==G[E]&&(o||(o={}),o[E]=G[E])}else o||(m||(m=[]),m.push(ae,o)),o=G;else ae==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(m=m||[]).push(ae,G)):ae==="children"?typeof G!="string"&&typeof G!="number"||(m=m||[]).push(ae,""+G):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(G!=null&&ae==="onScroll"&&Ft("scroll",n),m||F===G||(m=[])):(m=m||[]).push(ae,G))}o&&(m=m||[]).push("style",o);var ae=m;(i.updateQueue=ae)&&(i.flags|=4)}},dp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Ao(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function av(n,i,o){var u=i.pendingProps;switch(Mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return bn(i.type)&&Ma(),dn(i),null;case 3:return u=i.stateNode,xs(),Ot(Pn),Ot(cn),Uu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ca(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(fc(ii),ii=null))),ec(n,i),dn(i),null;case 5:Nu(i);var d=Nr(So.current);if(o=i.type,n!==null&&i.stateNode!=null)fp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=Nr(vi.current),Ca(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[gi]=i,u[go]=m,n=(i.mode&1)!==0,o){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(d=0;d<ho.length;d++)Ft(ho[d],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":yn(u,m),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",u);break;case"textarea":oe(u,m),Ft("invalid",u)}ft(o,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var F=m[E];E==="children"?typeof F=="string"?u.textContent!==F&&(m.suppressHydrationWarning!==!0&&xa(u.textContent,F,n),d=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&xa(u.textContent,F,n),d=["children",""+F]):a.hasOwnProperty(E)&&F!=null&&E==="onScroll"&&Ft("scroll",u)}switch(o){case"input":_t(u),Ke(u,m,!0);break;case"textarea":_t(u),ye(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=ya)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[gi]=i,n[go]=u,cp(n,i,!1,!1),i.stateNode=n;e:{switch(E=rt(o,u),o){case"dialog":Ft("cancel",n),Ft("close",n),d=u;break;case"iframe":case"object":case"embed":Ft("load",n),d=u;break;case"video":case"audio":for(d=0;d<ho.length;d++)Ft(ho[d],n);d=u;break;case"source":Ft("error",n),d=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=u;break;case"details":Ft("toggle",n),d=u;break;case"input":yn(n,u),d=J(n,u),Ft("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=Q({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":oe(n,u),d=T(n,u),Ft("invalid",n);break;default:d=u}ft(o,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var G=F[m];m==="style"?et(n,G):m==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ue(n,G)):m==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&ut(n,G):typeof G=="number"&&ut(n,""+G):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?G!=null&&m==="onScroll"&&Ft("scroll",n):G!=null&&b(n,m,G,E))}switch(o){case"input":_t(n),Ke(n,u,!1);break;case"textarea":_t(n),ye(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?I(n,!!u.multiple,m,!1):u.defaultValue!=null&&I(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)dp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Nr(So.current),Nr(vi.current),Ca(i)){if(u=i.stateNode,o=i.memoizedProps,u[gi]=i,(m=u.nodeValue!==o)&&(n=kn,n!==null))switch(n.tag){case 3:xa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xa(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return dn(i),null;case 13:if(Ot(Bt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mh(),ms(),i.flags|=98560,m=!1;else if(m=Ca(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[gi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),m=!1}else ii!==null&&(fc(ii),ii=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Bt.current&1)!==0?Kt===0&&(Kt=3):pc())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return xs(),ec(n,i),n===null&&po(i.stateNode.containerInfo),dn(i),null;case 10:return Ru(i.type._context),dn(i),null;case 17:return bn(i.type)&&Ma(),dn(i),null;case 19:if(Ot(Bt),m=i.memoizedState,m===null)return dn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Ao(m,!1);else{if(Kt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Na(n),E!==null){for(i.flags|=128,Ao(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return It(Bt,Bt.current&1|2),i.child}n=n.sibling}m.tail!==null&&we()>Es&&(i.flags|=128,u=!0,Ao(m,!1),i.lanes=4194304)}else{if(!u)if(n=Na(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!kt)return dn(i),null}else 2*we()-m.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,u=!0,Ao(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=we(),i.sibling=null,o=Bt.current,It(Bt,u?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return hc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function lv(n,i){switch(Mu(i),i.tag){case 1:return bn(i.type)&&Ma(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return xs(),Ot(Pn),Ot(cn),Uu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Nu(i),null;case 13:if(Ot(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Bt),null;case 4:return xs(),null;case 10:return Ru(i.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var Ha=!1,hn=!1,uv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ss(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function tc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var hp=!1;function cv(n,i){if(hu=la,n=Xd(),su(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,F=-1,G=-1,ae=0,Se=0,Me=n,xe=null;t:for(;;){for(var Ie;Me!==o||d!==0&&Me.nodeType!==3||(F=E+d),Me!==m||u!==0&&Me.nodeType!==3||(G=E+u),Me.nodeType===3&&(E+=Me.nodeValue.length),(Ie=Me.firstChild)!==null;)xe=Me,Me=Ie;for(;;){if(Me===n)break t;if(xe===o&&++ae===d&&(F=E),xe===m&&++Se===u&&(G=E),(Ie=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Ie}o=F===-1||G===-1?null:{start:F,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(pu={focusedElem:n,selectionRange:o},la=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Wt=Be.memoizedState,ne=i.stateNode,W=ne.getSnapshotBeforeUpdate(i.elementType===i.type?He:ri(i.type,He),Wt);ne.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Gt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Be=hp,hp=!1,Be}function Co(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&tc(i,o,m)}d=d.next}while(d!==u)}}function Ga(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function nc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function pp(n){var i=n.alternate;i!==null&&(n.alternate=null,pp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[go],delete i[_u],delete i[j0],delete i[q0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mp(n){return n.tag===5||n.tag===3||n.tag===4}function gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ic(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ya));else if(u!==4&&(n=n.child,n!==null))for(ic(n,i,o),n=n.sibling;n!==null;)ic(n,i,o),n=n.sibling}function rc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(rc(n,i,o),n=n.sibling;n!==null;)rc(n,i,o),n=n.sibling}var sn=null,si=!1;function lr(n,i,o){for(o=o.child;o!==null;)vp(n,i,o),o=o.sibling}function vp(n,i,o){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(wt,o)}catch{}switch(o.tag){case 5:hn||Ss(o,i);case 6:var u=sn,d=si;sn=null,lr(n,i,o),sn=u,si=d,sn!==null&&(si?(n=sn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):sn.removeChild(o.stateNode));break;case 18:sn!==null&&(si?(n=sn,o=o.stateNode,n.nodeType===8?vu(n.parentNode,o):n.nodeType===1&&vu(n,o),ro(n)):vu(sn,o.stateNode));break;case 4:u=sn,d=si,sn=o.stateNode.containerInfo,si=!0,lr(n,i,o),sn=u,si=d;break;case 0:case 11:case 14:case 15:if(!hn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&tc(o,i,E),d=d.next}while(d!==u)}lr(n,i,o);break;case 1:if(!hn&&(Ss(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(F){Gt(o,i,F)}lr(n,i,o);break;case 21:lr(n,i,o);break;case 22:o.mode&1?(hn=(u=hn)||o.memoizedState!==null,lr(n,i,o),hn=u):lr(n,i,o);break;default:lr(n,i,o)}}function _p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new uv),i.forEach(function(u){var d=xv.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function oi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,E=i,F=E;e:for(;F!==null;){switch(F.tag){case 5:sn=F.stateNode,si=!1;break e;case 3:sn=F.stateNode.containerInfo,si=!0;break e;case 4:sn=F.stateNode.containerInfo,si=!0;break e}F=F.return}if(sn===null)throw Error(t(160));vp(m,E,d),sn=null,si=!1;var G=d.alternate;G!==null&&(G.return=null),d.return=null}catch(ae){Gt(d,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xp(i,n),i=i.sibling}function xp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),xi(n),u&4){try{Co(3,n,n.return),Ga(3,n)}catch(He){Gt(n,n.return,He)}try{Co(5,n,n.return)}catch(He){Gt(n,n.return,He)}}break;case 1:oi(i,n),xi(n),u&512&&o!==null&&Ss(o,o.return);break;case 5:if(oi(i,n),xi(n),u&512&&o!==null&&Ss(o,o.return),n.flags&32){var d=n.stateNode;try{ut(d,"")}catch(He){Gt(n,n.return,He)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=o!==null?o.memoizedProps:m,F=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&ht(d,m),rt(F,E);var ae=rt(F,m);for(E=0;E<G.length;E+=2){var Se=G[E],Me=G[E+1];Se==="style"?et(d,Me):Se==="dangerouslySetInnerHTML"?Ue(d,Me):Se==="children"?ut(d,Me):b(d,Se,Me,ae)}switch(F){case"input":ct(d,m);break;case"textarea":_e(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?I(d,!!m.multiple,Ie,!1):xe!==!!m.multiple&&(m.defaultValue!=null?I(d,!!m.multiple,m.defaultValue,!0):I(d,!!m.multiple,m.multiple?[]:"",!1))}d[go]=m}catch(He){Gt(n,n.return,He)}}break;case 6:if(oi(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(He){Gt(n,n.return,He)}}break;case 3:if(oi(i,n),xi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(He){Gt(n,n.return,He)}break;case 4:oi(i,n),xi(n);break;case 13:oi(i,n),xi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(ac=we())),u&4&&_p(n);break;case 22:if(Se=o!==null&&o.memoizedState!==null,n.mode&1?(hn=(ae=hn)||Se,oi(i,n),hn=ae):oi(i,n),xi(n),u&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!Se&&(n.mode&1)!==0)for(Oe=n,Se=n.child;Se!==null;){for(Me=Oe=Se;Oe!==null;){switch(xe=Oe,Ie=xe.child,xe.tag){case 0:case 11:case 14:case 15:Co(4,xe,xe.return);break;case 1:Ss(xe,xe.return);var Be=xe.stateNode;if(typeof Be.componentWillUnmount=="function"){u=xe,o=xe.return;try{i=u,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){Gt(u,o,He)}}break;case 5:Ss(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Mp(Me);continue}}Ie!==null?(Ie.return=xe,Oe=Ie):Mp(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{d=Me.stateNode,ae?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Me.stateNode,G=Me.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=Qe("display",E))}catch(He){Gt(n,n.return,He)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ae?"":Me.memoizedProps}catch(He){Gt(n,n.return,He)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:oi(i,n),xi(n),u&4&&_p(n);break;case 21:break;default:oi(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(mp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ut(d,""),u.flags&=-33);var m=gp(n);rc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,F=gp(n);ic(n,F,E);break;default:throw Error(t(161))}}catch(G){Gt(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function fv(n,i,o){Oe=n,yp(n)}function yp(n,i,o){for(var u=(n.mode&1)!==0;Oe!==null;){var d=Oe,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Ha;if(!E){var F=d.alternate,G=F!==null&&F.memoizedState!==null||hn;F=Ha;var ae=hn;if(Ha=E,(hn=G)&&!ae)for(Oe=d;Oe!==null;)E=Oe,G=E.child,E.tag===22&&E.memoizedState!==null?Ep(d):G!==null?(G.return=E,Oe=G):Ep(d);for(;m!==null;)Oe=m,yp(m),m=m.sibling;Oe=d,Ha=F,hn=ae}Sp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Oe=m):Sp(n)}}function Sp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Ga(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!hn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Mh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Mh(i,E,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&ro(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&nc(i)}catch(xe){Gt(i,i.return,xe)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Mp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Ep(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ga(4,i)}catch(G){Gt(i,o,G)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(G){Gt(i,d,G)}}var m=i.return;try{nc(i)}catch(G){Gt(i,m,G)}break;case 5:var E=i.return;try{nc(i)}catch(G){Gt(i,E,G)}}}catch(G){Gt(i,i.return,G)}if(i===n){Oe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Oe=F;break}Oe=i.return}}var dv=Math.ceil,Wa=w.ReactCurrentDispatcher,sc=w.ReactCurrentOwner,Kn=w.ReactCurrentBatchConfig,yt=0,en=null,Xt=null,on=0,Bn=0,Ms=ir(0),Kt=0,Ro=null,Ur=0,Xa=0,oc=0,Po=null,Dn=null,ac=0,Es=1/0,Fi=null,ja=!1,lc=null,ur=null,qa=!1,cr=null,Ya=0,bo=0,uc=null,$a=-1,Ka=0;function wn(){return(yt&6)!==0?we():$a!==-1?$a:$a=we()}function fr(n){return(n.mode&1)===0?1:(yt&2)!==0&&on!==0?on&-on:$0.transition!==null?(Ka===0&&(Ka=Mn()),Ka):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:Td(n.type)),n)}function ai(n,i,o,u){if(50<bo)throw bo=0,uc=null,Error(t(185));Rn(n,o,u),((yt&2)===0||n!==en)&&(n===en&&((yt&2)===0&&(Xa|=o),Kt===4&&dr(n,on)),Nn(n,u),o===1&&yt===0&&(i.mode&1)===0&&(Es=we()+500,wa&&sr()))}function Nn(n,i){var o=n.callbackNode;Wn(n,i);var u=mi(n,n===en?on:0);if(u===0)o!==null&&ue(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&ue(o),i===1)n.tag===0?Y0(Tp.bind(null,n)):ch(Tp.bind(null,n)),W0(function(){(yt&6)===0&&sr()}),o=null;else{switch(vd(u)){case 1:o=Ve;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=gt;break;default:o=it}o=Np(o,wp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function wp(n,i){if($a=-1,Ka=0,(yt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ws()&&n.callbackNode!==o)return null;var u=mi(n,n===en?on:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Za(n,u);else{i=u;var d=yt;yt|=2;var m=Cp();(en!==n||on!==i)&&(Fi=null,Es=we()+500,Or(n,i));do try{mv();break}catch(F){Ap(n,F)}while(!0);Cu(),Wa.current=m,yt=d,Xt!==null?i=0:(en=null,on=0,i=Kt)}if(i!==0){if(i===2&&(d=Ri(n),d!==0&&(u=d,i=cc(n,d))),i===1)throw o=Ro,Or(n,0),dr(n,u),Nn(n,we()),o;if(i===6)dr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!hv(d)&&(i=Za(n,u),i===2&&(m=Ri(n),m!==0&&(u=m,i=cc(n,m))),i===1))throw o=Ro,Or(n,0),dr(n,u),Nn(n,we()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Dn,Fi);break;case 3:if(dr(n,u),(u&130023424)===u&&(i=ac+500-we(),10<i)){if(mi(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=gu(kr.bind(null,n,Dn,Fi),i);break}kr(n,Dn,Fi);break;case 4:if(dr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-ot(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=we()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*dv(u/1960))-u,10<u){n.timeoutHandle=gu(kr.bind(null,n,Dn,Fi),u);break}kr(n,Dn,Fi);break;case 5:kr(n,Dn,Fi);break;default:throw Error(t(329))}}}return Nn(n,we()),n.callbackNode===o?wp.bind(null,n):null}function cc(n,i){var o=Po;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=Za(n,i),n!==2&&(i=Dn,Dn=o,i!==null&&fc(i)),n}function fc(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function hv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ni(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(n,i){for(i&=~oc,i&=~Xa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),u=1<<o;n[o]=-1,i&=~u}}function Tp(n){if((yt&6)!==0)throw Error(t(327));ws();var i=mi(n,0);if((i&1)===0)return Nn(n,we()),null;var o=Za(n,i);if(n.tag!==0&&o===2){var u=Ri(n);u!==0&&(i=u,o=cc(n,u))}if(o===1)throw o=Ro,Or(n,0),dr(n,i),Nn(n,we()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Dn,Fi),Nn(n,we()),null}function dc(n,i){var o=yt;yt|=1;try{return n(i)}finally{yt=o,yt===0&&(Es=we()+500,wa&&sr())}}function Fr(n){cr!==null&&cr.tag===0&&(yt&6)===0&&ws();var i=yt;yt|=1;var o=Kn.transition,u=Ct;try{if(Kn.transition=null,Ct=1,n)return n()}finally{Ct=u,Kn.transition=o,yt=i,(yt&6)===0&&sr()}}function hc(){Bn=Ms.current,Ot(Ms)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,G0(o)),Xt!==null)for(o=Xt.return;o!==null;){var u=o;switch(Mu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ma();break;case 3:xs(),Ot(Pn),Ot(cn),Uu();break;case 5:Nu(u);break;case 4:xs();break;case 13:Ot(Bt);break;case 19:Ot(Bt);break;case 10:Ru(u.type._context);break;case 22:case 23:hc()}o=o.return}if(en=n,Xt=n=hr(n.current,null),on=Bn=i,Kt=0,Ro=null,oc=Xa=Ur=0,Dn=Po=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}o.pending=u}Dr=null}return n}function Ap(n,i){do{var o=Xt;try{if(Cu(),Ia.current=ka,Ua){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ua=!1}if(Ir=0,Qt=$t=Vt=null,Mo=!1,Eo=0,sc.current=null,o===null||o.return===null){Kt=1,Ro=i,Xt=null;break}e:{var m=n,E=o.return,F=o,G=i;if(i=on,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ae=G,Se=F,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ie=Zh(E);if(Ie!==null){Ie.flags&=-257,Jh(Ie,E,F,m,i),Ie.mode&1&&Kh(m,ae,i),i=Ie,G=ae;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(G),i.updateQueue=He}else Be.add(G);break e}else{if((i&1)===0){Kh(m,ae,i),pc();break e}G=Error(t(426))}}else if(kt&&F.mode&1){var Wt=Zh(E);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),Jh(Wt,E,F,m,i),Tu(ys(G,F));break e}}m=G=ys(G,F),Kt!==4&&(Kt=2),Po===null?Po=[m]:Po.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ne=Yh(m,G,i);Sh(m,ne);break e;case 1:F=G;var W=m.type,re=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(ur===null||!ur.has(re)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=$h(m,F,i);Sh(m,Te);break e}}m=m.return}while(m!==null)}Pp(o)}catch(qe){i=qe,Xt===o&&o!==null&&(Xt=o=o.return);continue}break}while(!0)}function Cp(){var n=Wa.current;return Wa.current=ka,n===null?ka:n}function pc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||(Ur&268435455)===0&&(Xa&268435455)===0||dr(en,on)}function Za(n,i){var o=yt;yt|=2;var u=Cp();(en!==n||on!==i)&&(Fi=null,Or(n,i));do try{pv();break}catch(d){Ap(n,d)}while(!0);if(Cu(),yt=o,Wa.current=u,Xt!==null)throw Error(t(261));return en=null,on=0,Kt}function pv(){for(;Xt!==null;)Rp(Xt)}function mv(){for(;Xt!==null&&!Z();)Rp(Xt)}function Rp(n){var i=Dp(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?Pp(n):Xt=i,sc.current=null}function Pp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=av(o,i,Bn),o!==null){Xt=o;return}}else{if(o=lv(o,i),o!==null){o.flags&=32767,Xt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,Xt=null;return}}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=n}while(i!==null);Kt===0&&(Kt=5)}function kr(n,i,o){var u=Ct,d=Kn.transition;try{Kn.transition=null,Ct=1,gv(n,i,o,u)}finally{Kn.transition=d,Ct=u}return null}function gv(n,i,o,u){do ws();while(cr!==null);if((yt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(sa(n,m),n===en&&(Xt=en=null,on=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||qa||(qa=!0,Np(it,function(){return ws(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Kn.transition,Kn.transition=null;var E=Ct;Ct=1;var F=yt;yt|=4,sc.current=null,cv(n,o),xp(o,n),F0(pu),la=!!hu,pu=hu=null,n.current=o,fv(o),Ce(),yt=F,Ct=E,Kn.transition=m}else n.current=o;if(qa&&(qa=!1,cr=n,Ya=d),m=n.pendingLanes,m===0&&(ur=null),ln(o.stateNode),Nn(n,we()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(ja)throw ja=!1,n=lc,lc=null,n;return(Ya&1)!==0&&n.tag!==0&&ws(),m=n.pendingLanes,(m&1)!==0?n===uc?bo++:(bo=0,uc=n):bo=0,sr(),null}function ws(){if(cr!==null){var n=vd(Ya),i=Kn.transition,o=Ct;try{if(Kn.transition=null,Ct=16>n?16:n,cr===null)var u=!1;else{if(n=cr,cr=null,Ya=0,(yt&6)!==0)throw Error(t(331));var d=yt;for(yt|=4,Oe=n.current;Oe!==null;){var m=Oe,E=m.child;if((Oe.flags&16)!==0){var F=m.deletions;if(F!==null){for(var G=0;G<F.length;G++){var ae=F[G];for(Oe=ae;Oe!==null;){var Se=Oe;switch(Se.tag){case 0:case 11:case 15:Co(8,Se,m)}var Me=Se.child;if(Me!==null)Me.return=Se,Oe=Me;else for(;Oe!==null;){Se=Oe;var xe=Se.sibling,Ie=Se.return;if(pp(Se),Se===ae){Oe=null;break}if(xe!==null){xe.return=Ie,Oe=xe;break}Oe=Ie}}}var Be=m.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Wt=He.sibling;He.sibling=null,He=Wt}while(He!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Oe=E;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Co(9,m,m.return)}var ne=m.sibling;if(ne!==null){ne.return=m.return,Oe=ne;break e}Oe=m.return}}var W=n.current;for(Oe=W;Oe!==null;){E=Oe;var re=E.child;if((E.subtreeFlags&2064)!==0&&re!==null)re.return=E,Oe=re;else e:for(E=W;Oe!==null;){if(F=Oe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Ga(9,F)}}catch(qe){Gt(F,F.return,qe)}if(F===E){Oe=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,Oe=Te;break e}Oe=F.return}}if(yt=d,sr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(wt,n)}catch{}u=!0}return u}finally{Ct=o,Kn.transition=i}}return!1}function bp(n,i,o){i=ys(o,i),i=Yh(n,i,1),n=ar(n,i,1),i=wn(),n!==null&&(Rn(n,1,i),Nn(n,i))}function Gt(n,i,o){if(n.tag===3)bp(n,n,o);else for(;i!==null;){if(i.tag===3){bp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ur===null||!ur.has(u))){n=ys(o,n),n=$h(i,n,1),i=ar(i,n,1),n=wn(),i!==null&&(Rn(i,1,n),Nn(i,n));break}}i=i.return}}function vv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&o,en===n&&(on&o)===o&&(Kt===4||Kt===3&&(on&130023424)===on&&500>we()-ac?Or(n,0):oc|=o),Nn(n,i)}function Lp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var o=wn();n=Ni(n,i),n!==null&&(Rn(n,i,o),Nn(n,o))}function _v(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Lp(n,o)}function xv(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Lp(n,o)}var Dp;Dp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Ln=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Ln=!1,ov(n,i,o);Ln=(n.flags&131072)!==0}else Ln=!1,kt&&(i.flags&1048576)!==0&&fh(i,Aa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Va(n,i),n=i.pendingProps;var d=ds(i,cn.current);_s(i,o),d=ku(null,i,u,n,d,o);var m=zu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(m=!0,Ea(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Lu(i),d.updater=za,i.stateNode=d,d._reactInternals=i,Xu(i,u,n,o),i=$u(null,i,u,!0,m,o)):(i.tag=0,kt&&m&&Su(i),En(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Va(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Sv(u),n=ri(u,n),d){case 0:i=Yu(null,i,u,n,o);break e;case 1:i=rp(null,i,u,n,o);break e;case 11:i=Qh(null,i,u,n,o);break e;case 14:i=ep(null,i,u,ri(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Yu(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),rp(n,i,u,d,o);case 3:e:{if(sp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,yh(n,i),Da(i,u,null,o);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ys(Error(t(423)),i),i=op(n,i,u,o,d);break e}else if(u!==d){d=ys(Error(t(424)),i),i=op(n,i,u,o,d);break e}else for(zn=nr(i.stateNode.containerInfo.firstChild),kn=i,kt=!0,ii=null,o=_h(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),u===d){i=Ui(n,i,o);break e}En(n,i,u,o)}i=i.child}return i;case 5:return Eh(i),n===null&&wu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,mu(u,d)?E=null:m!==null&&mu(u,m)&&(i.flags|=32),ip(n,i),En(n,i,E,o),i.child;case 6:return n===null&&wu(i),null;case 13:return ap(n,i,o);case 4:return Du(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=gs(i,null,u,o):En(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Qh(n,i,u,d,o);case 7:return En(n,i,i.pendingProps,o),i.child;case 8:return En(n,i,i.pendingProps.children,o),i.child;case 12:return En(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,It(Pa,u._currentValue),u._currentValue=E,m!==null)if(ni(m.value,E)){if(m.children===d.children&&!Pn.current){i=Ui(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){E=m.child;for(var G=F.firstContext;G!==null;){if(G.context===u){if(m.tag===1){G=Ii(-1,o&-o),G.tag=2;var ae=m.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),ae.pending=G}}m.lanes|=o,G=m.alternate,G!==null&&(G.lanes|=o),Pu(m.return,o,i),F.lanes|=o;break}G=G.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=o,F=E.alternate,F!==null&&(F.lanes|=o),Pu(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}En(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,_s(i,o),d=Yn(d),u=u(d),i.flags|=1,En(n,i,u,o),i.child;case 14:return u=i.type,d=ri(u,i.pendingProps),d=ri(u.type,d),ep(n,i,u,d,o);case 15:return tp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Va(n,i),i.tag=1,bn(u)?(n=!0,Ea(i)):n=!1,_s(i,o),jh(i,u,d),Xu(i,u,d,o),$u(null,i,u,!0,n,o);case 19:return up(n,i,o);case 22:return np(n,i,o)}throw Error(t(156,i.tag))};function Np(n,i){return le(n,i)}function yv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,o,u){return new yv(n,i,o,u)}function mc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sv(n){if(typeof n=="function")return mc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===te)return 14}return 2}function hr(n,i){var o=n.alternate;return o===null?(o=Zn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ja(n,i,o,u,d,m){var E=2;if(u=n,typeof n=="function")mc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return zr(o.children,d,m,i);case z:E=8,d|=8;break;case P:return n=Zn(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case X:return n=Zn(13,o,i,d),n.elementType=X,n.lanes=m,n;case D:return n=Zn(19,o,i,d),n.elementType=D,n.lanes=m,n;case ce:return Qa(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:E=10;break e;case B:E=9;break e;case se:E=11;break e;case te:E=14;break e;case ee:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(E,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function zr(n,i,o,u){return n=Zn(7,n,u,i),n.lanes=o,n}function Qa(n,i,o,u){return n=Zn(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function gc(n,i,o){return n=Zn(6,n,null,i),n.lanes=o,n}function vc(n,i,o){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Mv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xn(0),this.expirationTimes=Xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _c(n,i,o,u,d,m,E,F,G){return n=new Mv(n,i,o,F,G),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Zn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(m),n}function Ev(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Ip(n){if(!n)return rr;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(bn(o))return lh(n,o,i)}return i}function Up(n,i,o,u,d,m,E,F,G){return n=_c(o,u,!0,n,d,m,E,F,G),n.context=Ip(null),o=n.current,u=wn(),d=fr(o),m=Ii(u,d),m.callback=i??null,ar(o,m,d),n.current.lanes=d,Rn(n,d,u),Nn(n,u),n}function el(n,i,o,u){var d=i.current,m=wn(),E=fr(d);return o=Ip(o),i.context===null?i.context=o:i.pendingContext=o,i=Ii(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ar(d,i,E),n!==null&&(ai(n,d,E,m),La(n,d,E)),E}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function xc(n,i){Fp(n,i),(n=n.alternate)&&Fp(n,i)}function wv(){return null}var Op=typeof reportError=="function"?reportError:function(n){console.error(n)};function yc(n){this._internalRoot=n}nl.prototype.render=yc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));el(n,i,null,null)},nl.prototype.unmount=yc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){el(null,n,null,null)}),i[Pi]=null}};function nl(n){this._internalRoot=n}nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=yd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Qi.length&&i!==0&&i<Qi[o].priority;o++);Qi.splice(o,0,n),o===0&&Ed(n)}};function Sc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kp(){}function Tv(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ae=tl(E);m.call(ae)}}var E=Up(i,u,n,0,null,!1,!1,"",kp);return n._reactRootContainer=E,n[Pi]=E.current,po(n.nodeType===8?n.parentNode:n),Fr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var F=u;u=function(){var ae=tl(G);F.call(ae)}}var G=_c(n,0,!1,null,null,!1,!1,"",kp);return n._reactRootContainer=G,n[Pi]=G.current,po(n.nodeType===8?n.parentNode:n),Fr(function(){el(i,G,o,u)}),G}function rl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var F=d;d=function(){var G=tl(E);F.call(G)}}el(i,E,n,d)}else E=Tv(o,i,n,d,u);return tl(E)}_d=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Yt(i.pendingLanes);o!==0&&(Xl(i,o|1),Nn(i,we()),(yt&6)===0&&(Es=we()+500,sr()))}break;case 13:Fr(function(){var u=Ni(n,1);if(u!==null){var d=wn();ai(u,n,1,d)}}),xc(n,1)}},jl=function(n){if(n.tag===13){var i=Ni(n,134217728);if(i!==null){var o=wn();ai(i,n,134217728,o)}xc(n,134217728)}},xd=function(n){if(n.tag===13){var i=fr(n),o=Ni(n,i);if(o!==null){var u=wn();ai(o,n,i,u)}xc(n,i)}},yd=function(){return Ct},Sd=function(n,i){var o=Ct;try{return Ct=n,i()}finally{Ct=o}},be=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Sa(u);if(!d)throw Error(t(90));pt(u),ct(u,d)}}}break;case"textarea":_e(n,o);break;case"select":i=o.value,i!=null&&I(n,!!o.multiple,i,!1)}},Ut=dc,qt=Fr;var Av={usingClientEntryPoint:!1,Events:[vo,cs,Sa,De,st,dc]},Lo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cv={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{wt=sl.inject(Cv),mt=sl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av,In.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(i))throw Error(t(200));return Ev(n,i,null,o)},In.createRoot=function(n,i){if(!Sc(n))throw Error(t(299));var o=!1,u="",d=Op;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=_c(n,1,!1,null,null,o,!1,u,d),n[Pi]=i.current,po(n.nodeType===8?n.parentNode:n),new yc(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Fr(n)},In.hydrate=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!0,o)},In.hydrateRoot=function(n,i,o){if(!Sc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",E=Op;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Up(i,null,n,1,o??null,d,!1,m,E),n[Pi]=i.current,po(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new nl(i)},In.render=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!1,o)},In.unmountComponentAtNode=function(n){if(!il(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},In.unstable_batchedUpdates=dc,In.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!il(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,i,o,!1,u)},In.version="18.3.1-next-f1338f8080-20240426",In}var jp;function Uv(){if(jp)return wc.exports;jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wc.exports=Iv(),wc.exports}var qp;function Fv(){if(qp)return ol;qp=1;var s=Uv();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var Ov=Fv();const kv=rg(Ov);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),og=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=Rt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...f},h)=>Rt.createElement("svg",{ref:h,...Bv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:og("lucide",a),...f},[...c.map(([p,g])=>Rt.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=(s,e)=>{const t=Rt.forwardRef(({className:r,...a},l)=>Rt.createElement(Vv,{ref:l,iconNode:e,className:og(`lucide-${zv(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=xn("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=xn("Bath",[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=xn("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=xn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=xn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=xn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=xn("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=xn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=xn("MousePointer",[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=xn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=xn("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=xn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=xn("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=xn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=xn("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=xn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),cf={id:"modern-luxury-villa",name:"Modern Luxury Villa 3BHK",unit:"ft",gridSize:20,walls:[{id:"w1",start:{x:100,y:100},end:{x:700,y:100},thickness:10,height:9},{id:"w2",start:{x:700,y:100},end:{x:700,y:500},thickness:10,height:9},{id:"w3",start:{x:700,y:500},end:{x:100,y:500},thickness:10,height:9},{id:"w4",start:{x:100,y:500},end:{x:100,y:100},thickness:10,height:9},{id:"w5",start:{x:400,y:100},end:{x:400,y:500},thickness:8,height:9},{id:"w6",start:{x:400,y:300},end:{x:700,y:300},thickness:8,height:9},{id:"w7",start:{x:100,y:320},end:{x:400,y:320},thickness:8,height:9},{id:"w8",start:{x:580,y:100},end:{x:580,y:220},thickness:6,height:9},{id:"w9",start:{x:580,y:220},end:{x:700,y:220},thickness:6,height:9}],rooms:[{id:"r1",name:"Grand Living & Lounge",points:[{x:100,y:100},{x:400,y:100},{x:400,y:320},{x:100,y:320}],floorMaterial:"marble",color:"rgba(238, 242, 255, 0.4)",areaSqFt:660},{id:"r2",name:"Guest Bedroom",points:[{x:100,y:320},{x:400,y:320},{x:400,y:500},{x:100,y:500}],floorMaterial:"hardwood",color:"rgba(254, 243, 199, 0.4)",areaSqFt:540},{id:"r3",name:"Master Suite",points:[{x:400,y:100},{x:580,y:100},{x:580,y:220},{x:700,y:220},{x:700,y:300},{x:400,y:300}],floorMaterial:"hardwood",color:"rgba(240, 253, 244, 0.4)",areaSqFt:580},{id:"r4",name:"Ensuite Bathroom",points:[{x:580,y:100},{x:700,y:100},{x:700,y:220},{x:580,y:220}],floorMaterial:"tile",color:"rgba(224, 242, 254, 0.4)",areaSqFt:144},{id:"r5",name:"Modular Kitchen & Dining",points:[{x:400,y:300},{x:700,y:300},{x:700,y:500},{x:400,y:500}],floorMaterial:"tile",color:"rgba(255, 237, 213, 0.4)",areaSqFt:600}],openings:[{id:"d1",wallId:"w3",position:.35,width:36,type:"door",swingDirection:"right"},{id:"d2",wallId:"w6",position:.25,width:32,type:"door",swingDirection:"left"},{id:"d3",wallId:"w7",position:.75,width:32,type:"door",swingDirection:"right"},{id:"d4",wallId:"w8",position:.6,width:28,type:"door",swingDirection:"left"},{id:"wn1",wallId:"w1",position:.25,width:50,type:"window"},{id:"wn2",wallId:"w1",position:.75,width:50,type:"window"},{id:"wn3",wallId:"w2",position:.7,width:60,type:"window"},{id:"wn4",wallId:"w4",position:.4,width:50,type:"window"},{id:"wn5",wallId:"w4",position:.8,width:45,type:"window"}],furniture:[{id:"f1",type:"sofa",name:"L-Shape Luxury Sofa",category:"living",x:220,y:170,rotation:0,width:90,depth:45,height:30,color:"#475569"},{id:"f2",type:"tv_unit",name:'Media Console & 75" TV',category:"living",x:220,y:115,rotation:0,width:80,depth:18,height:40,color:"#1e293b"},{id:"f3",type:"plant",name:"Fiddle Leaf Fig Plant",category:"living",x:125,y:125,rotation:0,width:25,depth:25,height:45,color:"#16a34a"},{id:"f4",type:"double_bed",name:"Queen Size Bed",category:"bedroom",x:200,y:410,rotation:0,width:70,depth:80,height:35,color:"#64748b"},{id:"f5",type:"wardrobe",name:"Built-in Sliding Wardrobe",category:"bedroom",x:375,y:410,rotation:90,width:70,depth:24,height:75,color:"#334155"},{id:"f6",type:"double_bed",name:"King Platform Bed",category:"bedroom",x:490,y:220,rotation:0,width:80,depth:85,height:40,color:"#0284c7"},{id:"f7",type:"plant",name:"Indoor Palm",category:"bedroom",x:425,y:125,rotation:0,width:25,depth:25,height:50,color:"#15803d"},{id:"f8",type:"bathtub",name:"Freestanding Soaking Tub",category:"bathroom",x:640,y:140,rotation:0,width:60,depth:32,height:26,color:"#f8fafc"},{id:"f9",type:"toilet",name:"Modern Wall-Hung Commode",category:"bathroom",x:605,y:195,rotation:180,width:20,depth:28,height:28,color:"#f1f5f9"},{id:"f10",type:"dining_table",name:"6-Seater Marble Dining Set",category:"dining",x:500,y:400,rotation:0,width:75,depth:50,height:30,color:"#78716c"},{id:"f11",type:"kitchen_counter",name:"Granite Countertop & Sink",category:"kitchen",x:675,y:400,rotation:90,width:140,depth:28,height:36,color:"#0f172a"}]},$p={id:"modern-studio-apartment",name:"Minimalist Studio Loft",unit:"ft",gridSize:20,walls:[{id:"sw1",start:{x:150,y:120},end:{x:650,y:120},thickness:10,height:9},{id:"sw2",start:{x:650,y:120},end:{x:650,y:480},thickness:10,height:9},{id:"sw3",start:{x:650,y:480},end:{x:150,y:480},thickness:10,height:9},{id:"sw4",start:{x:150,y:480},end:{x:150,y:120},thickness:10,height:9},{id:"sw5",start:{x:150,y:260},end:{x:300,y:260},thickness:6,height:9},{id:"sw6",start:{x:300,y:260},end:{x:300,y:120},thickness:6,height:9}],rooms:[{id:"sr1",name:"Open Studio Space",points:[{x:300,y:120},{x:650,y:120},{x:650,y:480},{x:150,y:480},{x:150,y:260},{x:300,y:260}],floorMaterial:"hardwood",color:"rgba(254, 243, 199, 0.4)",areaSqFt:620},{id:"sr2",name:"Bath & Powder Room",points:[{x:150,y:120},{x:300,y:120},{x:300,y:260},{x:150,y:260}],floorMaterial:"marble",color:"rgba(224, 242, 254, 0.4)",areaSqFt:110}],openings:[{id:"sd1",wallId:"sw3",position:.5,width:36,type:"door"},{id:"sd2",wallId:"sw5",position:.6,width:28,type:"door"},{id:"swn1",wallId:"sw1",position:.7,width:60,type:"window"}],furniture:[{id:"sf1",type:"double_bed",name:"Queen Storage Bed",category:"bedroom",x:550,y:200,rotation:0,width:70,depth:80,height:35,color:"#475569"},{id:"sf2",type:"sofa",name:"3-Seater Velvet Sofa",category:"living",x:420,y:350,rotation:0,width:75,depth:36,height:30,color:"#059669"},{id:"sf3",type:"bathtub",name:"Compact Shower / Tub",category:"bathroom",x:220,y:160,rotation:0,width:50,depth:28,height:26,color:"#f8fafc"}]},n_=({viewMode:s,onSetViewMode:e,activeTool:t,onSetTool:r,timeOfDay:a,onSetTimeOfDay:l,onOpenCatalog:c,project:f,onLoadProject:h,onExportPNG:p})=>{const g=f.rooms.reduce((v,x)=>v+(x.areaSqFt||400),0);return ge.jsxs("header",{className:"h-16 px-6 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md flex items-center justify-between select-none z-30",children:[ge.jsxs("div",{className:"flex items-center gap-6",children:[ge.jsxs("div",{className:"flex items-center gap-3",children:[ge.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/25",children:ge.jsx(Xv,{className:"w-6 h-6 text-white"})}),ge.jsxs("div",{children:[ge.jsxs("h1",{className:"font-extrabold text-base tracking-tight text-white flex items-center gap-2",children:["Architect3D ",ge.jsx("span",{className:"bg-sky-500/20 text-sky-400 text-[10px] px-2 py-0.5 rounded-full font-mono border border-sky-500/30",children:"PRO"})]}),ge.jsx("p",{className:"text-[11px] text-slate-400",children:"Next-Gen Floor Plan & 3D Space Studio"})]})]}),ge.jsxs("div",{className:"hidden lg:flex items-center gap-4 pl-6 border-l border-slate-800 text-xs",children:[ge.jsxs("div",{className:"flex flex-col",children:[ge.jsx("span",{className:"text-slate-400 text-[10px] uppercase font-semibold",children:"Total Area"}),ge.jsxs("span",{className:"font-mono font-bold text-sky-400",children:[g.toLocaleString()," sq.ft"]})]}),ge.jsxs("div",{className:"flex flex-col",children:[ge.jsx("span",{className:"text-slate-400 text-[10px] uppercase font-semibold",children:"Rooms"}),ge.jsxs("span",{className:"font-mono text-slate-200",children:[f.rooms.length," Built"]})]}),ge.jsxs("div",{className:"flex flex-col",children:[ge.jsx("span",{className:"text-slate-400 text-[10px] uppercase font-semibold",children:"Walls"}),ge.jsxs("span",{className:"font-mono text-slate-200",children:[f.walls.length," Segments"]})]}),ge.jsxs("div",{className:"flex flex-col",children:[ge.jsx("span",{className:"text-slate-400 text-[10px] uppercase font-semibold",children:"Furniture"}),ge.jsxs("span",{className:"font-mono text-slate-200",children:[f.furniture.length," Items"]})]})]})]}),ge.jsxs("div",{className:"flex items-center gap-1 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shadow-inner",children:[ge.jsxs("button",{onClick:()=>e("2d"),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${s==="2d"?"bg-sky-500 text-white shadow-md shadow-sky-500/30":"text-slate-400 hover:text-white"}`,children:[ge.jsx(Zv,{className:"w-4 h-4"}),"2D Floor Plan"]}),ge.jsxs("button",{onClick:()=>e("3d"),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${s==="3d"?"bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-500/30":"text-slate-400 hover:text-white"}`,children:[ge.jsx(Wv,{className:"w-4 h-4"}),"3D Walkthrough"]})]}),ge.jsxs("div",{className:"flex items-center gap-3",children:[s==="2d"?ge.jsxs("div",{className:"flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60",children:[ge.jsx("button",{onClick:()=>r("select"),title:"Select & Move (V)",className:`p-2 rounded-lg text-xs transition ${t==="select"?"bg-sky-500 text-white shadow":"text-slate-300 hover:text-white hover:bg-slate-700"}`,children:ge.jsx($v,{className:"w-4 h-4"})}),ge.jsx("button",{onClick:()=>r("wall"),title:"Draw Walls (W)",className:`p-2 rounded-lg text-xs transition ${t==="wall"?"bg-sky-500 text-white shadow":"text-slate-300 hover:text-white hover:bg-slate-700"}`,children:ge.jsx("span",{className:"font-bold text-xs px-1",children:"━ Wall"})}),ge.jsxs("button",{onClick:()=>{r("furniture"),c()},title:"Add Furniture",className:`p-2 rounded-lg text-xs transition flex items-center gap-1.5 ${t==="furniture"?"bg-sky-500 text-white shadow":"text-slate-300 hover:text-white hover:bg-slate-700"}`,children:[ge.jsx(uf,{className:"w-4 h-4"}),ge.jsx("span",{children:"Furniture"})]}),ge.jsx("button",{onClick:()=>r("delete"),title:"Eraser / Delete",className:`p-2 rounded-lg text-xs transition ${t==="delete"?"bg-rose-500 text-white shadow":"text-slate-300 hover:text-rose-400 hover:bg-slate-700"}`,children:ge.jsx(e_,{className:"w-4 h-4"})})]}):ge.jsxs("div",{className:"flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60",children:[ge.jsx("button",{onClick:()=>l("day"),title:"Daylight",className:`p-2 rounded-lg transition ${a==="day"?"bg-amber-500 text-white":"text-slate-400 hover:text-white"}`,children:ge.jsx(Jv,{className:"w-4 h-4"})}),ge.jsx("button",{onClick:()=>l("warm"),title:"Golden Sunset",className:`p-2 rounded-lg transition ${a==="warm"?"bg-orange-500 text-white":"text-slate-400 hover:text-white"}`,children:ge.jsx(Qv,{className:"w-4 h-4"})}),ge.jsx("button",{onClick:()=>l("night"),title:"Night Ambience",className:`p-2 rounded-lg transition ${a==="night"?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"}`,children:ge.jsx(Yv,{className:"w-4 h-4"})})]}),ge.jsxs("div",{className:"relative group",children:[ge.jsxs("button",{className:"flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition",children:[ge.jsx(qv,{className:"w-4 h-4 text-sky-400"}),ge.jsx("span",{children:"Templates"})]}),ge.jsxs("div",{className:"absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-1.5 hidden group-hover:block z-50",children:[ge.jsx("button",{onClick:()=>h(cf),className:"w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition",children:"🏰 3BHK Luxury Villa"}),ge.jsx("button",{onClick:()=>h($p),className:"w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition",children:"🏢 Modern Studio Loft"}),ge.jsx("button",{onClick:()=>h({...$p,id:`p_${Date.now()}`,name:"Empty Canvas",walls:[],rooms:[],openings:[],furniture:[]}),className:"w-full text-left px-3 py-2 rounded-lg text-xs text-rose-400 hover:bg-rose-950/40 transition",children:"📄 Blank Canvas"})]})]}),ge.jsxs("button",{onClick:p,className:"flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20 transition active:scale-95",children:[ge.jsx(jv,{className:"w-4 h-4"}),ge.jsx("span",{children:"Export Plan"})]}),ge.jsx("button",{onClick:()=>h(cf),title:"Reset to Sample Villa",className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition",children:ge.jsx(Kv,{className:"w-4 h-4"})})]})]})},i_=({project:s,onUpdateProject:e,activeTool:t,selectedFurnitureType:r})=>{const a=Rt.useRef(null),[l,c]=Rt.useState(1),[f,h]=Rt.useState({x:50,y:50}),[p,g]=Rt.useState(!1),[v,x]=Rt.useState({x:0,y:0}),[y,M]=Rt.useState(null),[C,S]=Rt.useState({x:0,y:0}),[_,L]=Rt.useState(null),[b,w]=Rt.useState(!1),[K,k]=Rt.useState({x:0,y:0}),O=(X,D=10)=>Math.round(X/D)*D,z=(X,D)=>{var ee;const te=(ee=a.current)==null?void 0:ee.getBoundingClientRect();return te?{x:(X-te.left-f.x)/l,y:(D-te.top-f.y)/l}:{x:0,y:0}};Rt.useEffect(()=>{var Q,U;const X=a.current;if(!X)return;const D=X.getContext("2d");if(!D)return;X.width=((Q=X.parentElement)==null?void 0:Q.clientWidth)||1e3,X.height=((U=X.parentElement)==null?void 0:U.clientHeight)||800,D.save(),D.clearRect(0,0,X.width,X.height),D.translate(f.x,f.y),D.scale(l,l);const te=s.gridSize||20,ee=-f.x/l,ce=-f.y/l,V=ee+X.width/l,H=ce+X.height/l;D.lineWidth=.5,D.strokeStyle="#1e293b";for(let N=Math.floor(ee/te)*te;N<V;N+=te)D.beginPath(),D.moveTo(N,ce),D.lineTo(N,H),D.stroke();for(let N=Math.floor(ce/te)*te;N<H;N+=te)D.beginPath(),D.moveTo(ee,N),D.lineTo(V,N),D.stroke();D.lineWidth=1,D.strokeStyle="#334155";for(let N=Math.floor(ee/(te*5))*(te*5);N<V;N+=te*5)D.beginPath(),D.moveTo(N,ce),D.lineTo(N,H),D.stroke();for(let N=Math.floor(ce/(te*5))*(te*5);N<H;N+=te*5)D.beginPath(),D.moveTo(ee,N),D.lineTo(V,N),D.stroke();if(s.rooms.forEach(N=>{if(N.points.length<3)return;D.fillStyle=N.color||"rgba(56, 189, 248, 0.15)",D.strokeStyle="rgba(56, 189, 248, 0.4)",D.lineWidth=1.5,D.beginPath(),D.moveTo(N.points[0].x,N.points[0].y);for(let ie=1;ie<N.points.length;ie++)D.lineTo(N.points[ie].x,N.points[ie].y);D.closePath(),D.fill(),D.stroke();const de=N.points.reduce((ie,ve)=>ie+ve.x,0)/N.points.length,Y=N.points.reduce((ie,ve)=>ie+ve.y,0)/N.points.length;D.save(),D.fillStyle="#f8fafc",D.font='bold 12px "Plus Jakarta Sans", sans-serif',D.textAlign="center",D.textBaseline="middle",D.fillText(N.name,de,Y-8),D.fillStyle="#94a3b8",D.font='10px "JetBrains Mono", monospace',D.fillText(`${N.areaSqFt||450} sq.ft (${Math.round((N.areaSqFt||450)*.0929)} m²)`,de,Y+8),D.restore()}),s.walls.forEach(N=>{const de=_===N.id;D.lineWidth=N.thickness,D.lineCap="square",D.strokeStyle=de?"#38bdf8":N.color||"#e2e8f0",D.beginPath(),D.moveTo(N.start.x,N.start.y),D.lineTo(N.end.x,N.end.y),D.stroke();const Y=N.end.x-N.start.x,ie=N.end.y-N.start.y,pe=(Math.sqrt(Y*Y+ie*ie)/10).toFixed(1),Ae=(N.start.x+N.end.x)/2,Re=(N.start.y+N.end.y)/2;D.save(),D.fillStyle="#0f172a",D.strokeStyle="#475569",D.lineWidth=1;const Fe=`${pe} ft`;D.font='9px "JetBrains Mono", monospace';const _t=D.measureText(Fe).width;D.fillRect(Ae-_t/2-4,Re-7,_t+8,14),D.strokeRect(Ae-_t/2-4,Re-7,_t+8,14),D.fillStyle="#38bdf8",D.textAlign="center",D.textBaseline="middle",D.fillText(Fe,Ae,Re),D.restore()}),s.openings.forEach(N=>{const de=s.walls.find(pe=>pe.id===N.wallId);if(!de)return;const Y=de.start.x+(de.end.x-de.start.x)*N.position,ie=de.start.y+(de.end.y-de.start.y)*N.position,ve=Math.atan2(de.end.y-de.start.y,de.end.x-de.start.x);D.save(),D.translate(Y,ie),D.rotate(ve),N.type==="door"?(D.fillStyle="#0f172a",D.fillRect(-N.width/2,-de.thickness/2-1,N.width,de.thickness+2),D.strokeStyle="#f59e0b",D.lineWidth=2,D.beginPath(),D.moveTo(-N.width/2,0),D.lineTo(-N.width/2,-N.width),D.stroke(),D.strokeStyle="rgba(245, 158, 11, 0.4)",D.setLineDash([3,3]),D.beginPath(),D.arc(-N.width/2,0,N.width,-Math.PI/2,0),D.stroke()):(D.fillStyle="#0f172a",D.fillRect(-N.width/2,-de.thickness/2-1,N.width,de.thickness+2),D.strokeStyle="#38bdf8",D.lineWidth=3,D.beginPath(),D.moveTo(-N.width/2,0),D.lineTo(N.width/2,0),D.stroke()),D.restore()}),s.furniture.forEach(N=>{const de=_===N.id;D.save(),D.translate(N.x,N.y),D.rotate(N.rotation*Math.PI/180),D.fillStyle=N.color||"#334155",D.strokeStyle=de?"#38bdf8":"#64748b",D.lineWidth=de?2.5:1.5,D.beginPath(),D.roundRect(-N.width/2,-N.depth/2,N.width,N.depth,4),D.fill(),D.stroke(),D.fillStyle="rgba(255, 255, 255, 0.2)",N.type==="sofa"?D.fillRect(-N.width/2+6,-N.depth/2+6,N.width-12,10):N.type==="double_bed"&&(D.fillRect(-N.width/2+8,-N.depth/2+6,N.width*.4,14),D.fillRect(N.width*.1,-N.depth/2+6,N.width*.4,14)),D.fillStyle="#ffffff",D.font='10px "Plus Jakarta Sans", sans-serif',D.textAlign="center",D.textBaseline="middle",D.fillText(N.name.split(" ")[0],0,0),de&&(D.strokeStyle="#0284c7",D.setLineDash([4,4]),D.strokeRect(-N.width/2-6,-N.depth/2-6,N.width+12,N.depth+12),D.fillStyle="#38bdf8",D.beginPath(),D.arc(0,-N.depth/2-16,5,0,Math.PI*2),D.fill()),D.restore()}),y&&t==="wall"){const N={x:O(C.x),y:O(C.y)};D.strokeStyle="#22c55e",D.lineWidth=10,D.lineCap="square",D.beginPath(),D.moveTo(y.x,y.y),D.lineTo(N.x,N.y),D.stroke();const de=N.x-y.x,Y=N.y-y.y,ie=(Math.sqrt(de*de+Y*Y)/10).toFixed(1);D.save(),D.fillStyle="#22c55e",D.font='bold 12px "JetBrains Mono", monospace',D.fillText(`${ie} ft`,(y.x+N.x)/2,(y.y+N.y)/2-12),D.restore()}D.restore()},[s,l,f,y,C,_,t]);const P=X=>{const D=z(X.clientX,X.clientY);if(X.button===1||X.altKey){g(!0),x({x:X.clientX-f.x,y:X.clientY-f.y});return}if(t==="wall"){const te={x:O(D.x),y:O(D.y)};if(!y)M(te);else{const ee={id:`w_${Date.now()}`,start:y,end:te,thickness:10,height:9,color:"#e2e8f0"};e(ce=>({...ce,walls:[...ce.walls,ee]})),M(null)}}else if(t==="furniture"&&r){const te={id:`f_${Date.now()}`,type:r,name:r.toUpperCase(),category:"living",x:O(D.x),y:O(D.y),rotation:0,width:60,depth:40,height:30,color:"#38bdf8"};e(ee=>({...ee,furniture:[...ee.furniture,te]}))}else if(t==="select"){const te=[...s.furniture].reverse().find(ee=>{const ce=Math.abs(D.x-ee.x),V=Math.abs(D.y-ee.y);return ce<=ee.width/2+5&&V<=ee.depth/2+5});te?(L(te.id),w(!0),k({x:D.x-te.x,y:D.y-te.y})):(L(null),g(!0),x({x:X.clientX-f.x,y:X.clientY-f.y}))}else if(t==="delete"){const te=s.furniture.find(ee=>Math.hypot(ee.x-D.x,ee.y-D.y)<30);te&&e(ee=>({...ee,furniture:ee.furniture.filter(ce=>ce.id!==te.id)}))}},A=X=>{const D=z(X.clientX,X.clientY);if(S(D),p)h({x:X.clientX-v.x,y:X.clientY-v.y});else if(b&&_){const te=O(D.x-K.x),ee=O(D.y-K.y);e(ce=>({...ce,furniture:ce.furniture.map(V=>V.id===_?{...V,x:te,y:ee}:V)}))}},B=()=>{g(!1),w(!1)},se=X=>{X.preventDefault();const D=X.deltaY<0?1.1:.9;c(te=>Math.min(Math.max(te*D,.3),3))};return Rt.useEffect(()=>{const X=D=>{_&&(D.key==="r"||D.key==="R"?e(te=>({...te,furniture:te.furniture.map(ee=>ee.id===_?{...ee,rotation:(ee.rotation+45)%360}:ee)})):(D.key==="Delete"||D.key==="Backspace")&&(e(te=>({...te,furniture:te.furniture.filter(ee=>ee.id!==_),walls:te.walls.filter(ee=>ee.id!==_)})),L(null)))};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[_]),ge.jsxs("div",{className:"relative w-full h-full bg-slate-950 overflow-hidden select-none",children:[ge.jsx("canvas",{ref:a,onMouseDown:P,onMouseMove:A,onMouseUp:B,onWheel:se,className:"w-full h-full cursor-crosshair"}),ge.jsxs("div",{className:"absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700/60 shadow-xl flex items-center gap-3 text-xs",children:[ge.jsxs("span",{className:"flex items-center gap-1.5 text-slate-300",children:[ge.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Tool: ",ge.jsx("strong",{className:"text-white capitalize",children:t})]}),ge.jsx("span",{className:"text-slate-600",children:"|"}),ge.jsxs("span",{className:"text-slate-400",children:["Zoom: ",Math.round(l*100),"%"]}),_&&ge.jsxs(ge.Fragment,{children:[ge.jsx("span",{className:"text-slate-600",children:"|"}),ge.jsxs("span",{className:"text-amber-400 flex items-center gap-1 font-medium",children:["Press ",ge.jsx("kbd",{className:"bg-slate-800 px-1 py-0.5 rounded text-white border border-slate-700",children:"R"})," Rotate",ge.jsx("kbd",{className:"bg-slate-800 px-1 py-0.5 rounded text-white border border-slate-700 ml-1",children:"Del"})," Remove"]})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ed="170",r_=0,Kp=1,s_=2,ag=1,lg=2,Hi=3,wr=0,Fn=1,Gi=2,Mr=0,Vs=1,Zp=2,Jp=3,Qp=4,o_=5,Yr=100,a_=101,l_=102,u_=103,c_=104,f_=200,d_=201,h_=202,p_=203,ff=204,df=205,m_=206,g_=207,v_=208,__=209,x_=210,y_=211,S_=212,M_=213,E_=214,hf=0,pf=1,mf=2,Ws=3,gf=4,vf=5,_f=6,xf=7,ug=0,w_=1,T_=2,Er=0,A_=1,C_=2,R_=3,cg=4,P_=5,b_=6,L_=7,fg=300,Xs=301,js=302,yf=303,Sf=304,Bl=306,Xo=1e3,Kr=1001,Mf=1002,hi=1003,D_=1004,al=1005,Si=1006,Cc=1007,Zr=1008,qi=1009,dg=1010,hg=1011,jo=1012,td=1013,Jr=1014,Wi=1015,Ko=1016,nd=1017,id=1018,qs=1020,pg=35902,mg=1021,gg=1022,di=1023,vg=1024,_g=1025,Hs=1026,Ys=1027,xg=1028,rd=1029,yg=1030,sd=1031,od=1033,Ll=33776,Dl=33777,Nl=33778,Il=33779,Ef=35840,wf=35841,Tf=35842,Af=35843,Cf=36196,Rf=37492,Pf=37496,bf=37808,Lf=37809,Df=37810,Nf=37811,If=37812,Uf=37813,Ff=37814,Of=37815,kf=37816,zf=37817,Bf=37818,Vf=37819,Hf=37820,Gf=37821,Ul=36492,Wf=36494,Xf=36495,Sg=36283,jf=36284,qf=36285,Yf=36286,N_=3200,I_=3201,Mg=0,U_=1,Sr="",Qn="srgb",Ks="srgb-linear",Vl="linear",Pt="srgb",Ts=7680,em=519,F_=512,O_=513,k_=514,Eg=515,z_=516,B_=517,V_=518,H_=519,tm=35044,nm="300 es",Xi=2e3,Ol=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,$f=180/Math.PI;function Js(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function vn(s,e,t){return Math.max(e,Math.min(t,s))}function G_(s,e){return(s%e+e)%e}function Pc(s,e,t){return(1-t)*s+t*e}function No(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,r,a,l,c,f,h,p){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],M=r[8],C=a[0],S=a[3],_=a[6],L=a[1],b=a[4],w=a[7],K=a[2],k=a[5],O=a[8];return l[0]=c*C+f*L+h*K,l[3]=c*S+f*b+h*k,l[6]=c*_+f*w+h*O,l[1]=p*C+g*L+v*K,l[4]=p*S+g*b+v*k,l[7]=p*_+g*w+v*O,l[2]=x*C+y*L+M*K,l[5]=x*S+y*b+M*k,l[8]=x*_+y*w+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=g*c-f*p,x=f*h-g*l,y=p*l-c*h,M=t*v+r*x+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=v*C,e[1]=(a*p-g*r)*C,e[2]=(f*r-a*c)*C,e[3]=x*C,e[4]=(g*t-a*h)*C,e[5]=(a*l-f*t)*C,e[6]=y*C,e[7]=(r*h-p*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new at;function wg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function kl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function W_(){const s=kl("canvas");return s.style.display="block",s}const im={};function zo(s){s in im||(im[s]=!0,console.warn(s))}function X_(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function j_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function q_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?Vl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const rm=[.64,.33,.3,.6,.15,.06],sm=[.2126,.7152,.0722],om=[.3127,.329],am=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Ks]:{primaries:rm,whitePoint:om,transfer:Vl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:rm,whitePoint:om,transfer:Pt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}});let As;class Y_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=kl("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ji(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ji(t[r]/255)*255):t[r]=ji(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $_=0;class Tg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Lc(a[c].image)):l.push(Lc(a[c]))}else l=Lc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Y_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K_=0;class An extends Zs{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=Kr,a=Kr,l=Si,c=Zr,f=di,h=qi,p=An.DEFAULT_ANISOTROPY,g=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Js(),this.name="",this.source=new Tg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=fg;An.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,r=0,a=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],g=h[4],v=h[8],x=h[1],y=h[5],M=h[9],C=h[2],S=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,w=(y+1)/2,K=(_+1)/2,k=(g+x)/4,O=(v+C)/4,z=(M+S)/4;return b>w&&b>K?b<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(b),a=k/r,l=O/r):w>K?w<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(w),r=k/a,l=z/a):K<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(K),r=O/l,a=z/l),this.set(r,a,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(v-C)/L,this.z=(x-g)/L,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z_ extends Zs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends Z_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ag extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J_ extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];const x=l[c+0],y=l[c+1],M=l[c+2],C=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=x,e[t+1]=y,e[t+2]=M,e[t+3]=C;return}if(v!==C||h!==x||p!==y||g!==M){let S=1-f;const _=h*x+p*y+g*M+v*C,L=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const K=Math.sqrt(b),k=Math.atan2(K,_*L);S=Math.sin(S*k)/K,f=Math.sin(f*k)/K}const w=f*L;if(h=h*S+x*w,p=p*S+y*w,g=g*S+M*w,v=v*S+C*w,S===1-f){const K=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=K,p*=K,g*=K,v*=K}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],g=r[a+3],v=l[c],x=l[c+1],y=l[c+2],M=l[c+3];return e[t]=f*M+g*v+h*y-p*x,e[t+1]=h*M+g*x+p*v-f*y,e[t+2]=p*M+g*y+f*x-h*v,e[t+3]=g*M-f*v-h*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(a/2),v=f(l/2),x=h(r/2),y=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=x*g*v+p*y*M,this._y=p*y*v-x*g*M,this._z=p*g*M+x*y*v,this._w=p*g*v-x*y*M;break;case"YXZ":this._x=x*g*v+p*y*M,this._y=p*y*v-x*g*M,this._z=p*g*M-x*y*v,this._w=p*g*v+x*y*M;break;case"ZXY":this._x=x*g*v-p*y*M,this._y=p*y*v+x*g*M,this._z=p*g*M+x*y*v,this._w=p*g*v-x*y*M;break;case"ZYX":this._x=x*g*v-p*y*M,this._y=p*y*v+x*g*M,this._z=p*g*M-x*y*v,this._w=p*g*v+x*y*M;break;case"YZX":this._x=x*g*v+p*y*M,this._y=p*y*v+x*g*M,this._z=p*g*M-x*y*v,this._w=p*g*v-x*y*M;break;case"XZY":this._x=x*g*v-p*y*M,this._y=p*y*v-x*g*M,this._z=p*g*M+x*y*v,this._w=p*g*v+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],v=t[10],x=r+f+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-h)*y,this._y=(l-p)*y,this._z=(c-a)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(g-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+p)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(l-p)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+g)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(c-a)/y,this._x=(l+p)/y,this._y=(h+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+a*p-l*h,this._y=a*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-a*f,this._w=c*g-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*r+t*this._x,this._y=y*a+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),g=2*(f*t-l*a),v=2*(l*r-c*t);return this.x=t+h*p+c*v-f*g,this.y=r+h*g+f*p-l*v,this.z=a+h*v+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new j,um=new Zo;class Jo{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),ul.subVectors(this.max,Io),Cs.subVectors(e.a,Io),Rs.subVectors(e.b,Io),Ps.subVectors(e.c,Io),mr.subVectors(Rs,Cs),gr.subVectors(Ps,Rs),Br.subVectors(Cs,Ps);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Br.z,Br.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Br.z,0,-Br.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Br.y,Br.x,0];return!Nc(t,Cs,Rs,Ps,ul)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Cs,Rs,Ps,ul))?!1:(cl.crossVectors(mr,gr),t=[cl.x,cl.y,cl.z],Nc(t,Cs,Rs,Ps,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new j,new j,new j,new j,new j,new j,new j,new j],li=new j,ll=new Jo,Cs=new j,Rs=new j,Ps=new j,mr=new j,gr=new j,Br=new j,Io=new j,ul=new j,cl=new j,Vr=new j;function Nc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Vr.fromArray(s,l);const f=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),h=e.dot(Vr),p=t.dot(Vr),g=r.dot(Vr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const Q_=new Jo,Uo=new j,Ic=new j;class ad{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Q_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Ic)),this.expandByPoint(Uo.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new j,Uc=new j,fl=new j,vr=new j,Fc=new j,dl=new j,Oc=new j;class ex{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Uc.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Uc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(fl),f=vr.dot(this.direction),h=-vr.dot(fl),p=vr.lengthSq(),g=Math.abs(1-c*c);let v,x,y,M;if(g>0)if(v=c*h-f,x=c*f-h,M=l*g,v>=0)if(x>=-M)if(x<=M){const C=1/g;v*=C,x*=C,y=v*(v+c*x+2*f)+x*(c*v+x+2*h)+p}else x=l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*h)+p;else x=-l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*h)+p;else x<=-M?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),y=-v*v+x*(x+2*h)+p):x<=M?(v=0,x=Math.min(Math.max(-l,-h),l),y=x*(x+2*h)+p):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),y=-v*v+x*(x+2*h)+p);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Uc).addScaledVector(fl,x),y}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,r,a,l){Fc.subVectors(t,e),dl.subVectors(r,e),Oc.crossVectors(Fc,dl);let c=this.direction.dot(Oc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;vr.subVectors(this.origin,e);const h=f*this.direction.dot(dl.crossVectors(vr,dl));if(h<0)return null;const p=f*this.direction.dot(Fc.cross(vr));if(p<0||h+p>c)return null;const g=-f*vr.dot(Oc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,r,a,l,c,f,h,p,g,v,x,y,M,C,S){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,g,v,x,y,M,C,S)}set(e,t,r,a,l,c,f,h,p,g,v,x,y,M,C,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=M,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),c=1/bs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,y=c*v,M=f*g,C=f*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=y+M*p,t[5]=x-C*p,t[9]=-f*h,t[2]=C-x*p,t[6]=M+y*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,y=h*v,M=p*g,C=p*v;t[0]=x+C*f,t[4]=M*f-y,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=y*f-M,t[6]=C+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,y=h*v,M=p*g,C=p*v;t[0]=x-C*f,t[4]=-c*v,t[8]=M+y*f,t[1]=y+M*f,t[5]=c*g,t[9]=C-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,y=c*v,M=f*g,C=f*v;t[0]=h*g,t[4]=M*p-y,t[8]=x*p+C,t[1]=h*v,t[5]=C*p+x,t[9]=y*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,y=c*p,M=f*h,C=f*p;t[0]=h*g,t[4]=C-x*v,t[8]=M*v+y,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=y*v+M,t[10]=x-C*v}else if(e.order==="XZY"){const x=c*h,y=c*p,M=f*h,C=f*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=x*v+C,t[5]=c*g,t[9]=y*v-M,t[2]=M*v-y,t[6]=f*g,t[10]=C*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tx,e,nx)}lookAt(e,t,r){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),_r.crossVectors(r,Vn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),_r.crossVectors(r,Vn)),_r.normalize(),hl.crossVectors(Vn,_r),a[0]=_r.x,a[4]=hl.x,a[8]=Vn.x,a[1]=_r.y,a[5]=hl.y,a[9]=Vn.y,a[2]=_r.z,a[6]=hl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],M=r[2],C=r[6],S=r[10],_=r[14],L=r[3],b=r[7],w=r[11],K=r[15],k=a[0],O=a[4],z=a[8],P=a[12],A=a[1],B=a[5],se=a[9],X=a[13],D=a[2],te=a[6],ee=a[10],ce=a[14],V=a[3],H=a[7],Q=a[11],U=a[15];return l[0]=c*k+f*A+h*D+p*V,l[4]=c*O+f*B+h*te+p*H,l[8]=c*z+f*se+h*ee+p*Q,l[12]=c*P+f*X+h*ce+p*U,l[1]=g*k+v*A+x*D+y*V,l[5]=g*O+v*B+x*te+y*H,l[9]=g*z+v*se+x*ee+y*Q,l[13]=g*P+v*X+x*ce+y*U,l[2]=M*k+C*A+S*D+_*V,l[6]=M*O+C*B+S*te+_*H,l[10]=M*z+C*se+S*ee+_*Q,l[14]=M*P+C*X+S*ce+_*U,l[3]=L*k+b*A+w*D+K*V,l[7]=L*O+b*B+w*te+K*H,l[11]=L*z+b*se+w*ee+K*Q,l[15]=L*P+b*X+w*ce+K*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],v=e[6],x=e[10],y=e[14],M=e[3],C=e[7],S=e[11],_=e[15];return M*(+l*h*v-a*p*v-l*f*x+r*p*x+a*f*y-r*h*y)+C*(+t*h*y-t*p*x+l*c*x-a*c*y+a*p*g-l*h*g)+S*(+t*p*v-t*f*y-l*c*v+r*c*y+l*f*g-r*p*g)+_*(-a*f*g-t*h*v+t*f*x+a*c*v-r*c*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=e[9],x=e[10],y=e[11],M=e[12],C=e[13],S=e[14],_=e[15],L=v*S*p-C*x*p+C*h*y-f*S*y-v*h*_+f*x*_,b=M*x*p-g*S*p-M*h*y+c*S*y+g*h*_-c*x*_,w=g*C*p-M*v*p+M*f*y-c*C*y-g*f*_+c*v*_,K=M*v*h-g*C*h-M*f*x+c*C*x+g*f*S-c*v*S,k=t*L+r*b+a*w+l*K;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return e[0]=L*O,e[1]=(C*x*l-v*S*l-C*a*y+r*S*y+v*a*_-r*x*_)*O,e[2]=(f*S*l-C*h*l+C*a*p-r*S*p-f*a*_+r*h*_)*O,e[3]=(v*h*l-f*x*l-v*a*p+r*x*p+f*a*y-r*h*y)*O,e[4]=b*O,e[5]=(g*S*l-M*x*l+M*a*y-t*S*y-g*a*_+t*x*_)*O,e[6]=(M*h*l-c*S*l-M*a*p+t*S*p+c*a*_-t*h*_)*O,e[7]=(c*x*l-g*h*l+g*a*p-t*x*p-c*a*y+t*h*y)*O,e[8]=w*O,e[9]=(M*v*l-g*C*l-M*r*y+t*C*y+g*r*_-t*v*_)*O,e[10]=(c*C*l-M*f*l+M*r*p-t*C*p-c*r*_+t*f*_)*O,e[11]=(g*f*l-c*v*l-g*r*p+t*v*p+c*r*y-t*f*y)*O,e[12]=K*O,e[13]=(g*C*a-M*v*a+M*r*x-t*C*x-g*r*S+t*v*S)*O,e[14]=(M*f*a-c*C*a-M*r*h+t*C*h+c*r*S-t*f*S)*O,e[15]=(c*v*a-g*f*a+g*r*h-t*v*h-c*r*x+t*f*x)*O,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+r,g*h-a*c,0,p*h-a*f,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,v=f+f,x=l*p,y=l*g,M=l*v,C=c*g,S=c*v,_=f*v,L=h*p,b=h*g,w=h*v,K=r.x,k=r.y,O=r.z;return a[0]=(1-(C+_))*K,a[1]=(y+w)*K,a[2]=(M-b)*K,a[3]=0,a[4]=(y-w)*k,a[5]=(1-(x+_))*k,a[6]=(S+L)*k,a[7]=0,a[8]=(M+b)*O,a[9]=(S-L)*O,a[10]=(1-(x+C))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=bs.set(a[0],a[1],a[2]).length();const c=bs.set(a[4],a[5],a[6]).length(),f=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const p=1/l,g=1/c,v=1/f;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=Xi){const h=this.elements,p=2*l/(t-e),g=2*l/(r-a),v=(t+e)/(t-e),x=(r+a)/(r-a);let y,M;if(f===Xi)y=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Ol)y=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=Xi){const h=this.elements,p=1/(t-e),g=1/(r-a),v=1/(c-l),x=(t+e)*p,y=(r+a)*g;let M,C;if(f===Xi)M=(c+l)*v,C=-2*v;else if(f===Ol)M=l*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=C,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const bs=new j,ui=new zt,tx=new j(0,0,0),nx=new j(1,1,1),_r=new j,hl=new j,Vn=new j,cm=new zt,fm=new Zo;class Ei{constructor(e=0,t=0,r=0,a=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],g=a[9],v=a[2],x=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(vn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ix=0;const dm=new j,Ls=new Zo,zi=new zt,pl=new j,Fo=new j,rx=new j,sx=new Zo,hm=new j(1,0,0),pm=new j(0,1,0),mm=new j(0,0,1),gm={type:"added"},ox={type:"removed"},Ds={type:"childadded",child:null},kc={type:"childremoved",child:null};class an extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new j,t=new Ei,r=new Zo,a=new j(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new at}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,t){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?pl.copy(e):pl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Fo,pl,this.up):zi.lookAt(pl,Fo,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(zi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ox),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),y=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=a,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}an.DEFAULT_UP=new j(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new j,Bi=new j,zc=new j,Vi=new j,Ns=new j,Is=new j,vm=new j,Bc=new j,Vc=new j,Hc=new j,Gc=new bt,Wc=new bt,Xc=new bt;class fi{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ci.subVectors(e,t),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ci.subVectors(a,t),Bi.subVectors(r,t),zc.subVectors(e,t);const c=ci.dot(ci),f=ci.dot(Bi),h=ci.dot(zc),p=Bi.dot(Bi),g=Bi.dot(zc),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,y=(p*h-f*g)*x,M=(c*g-f*h)*x;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Vi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Vi.x),h.addScaledVector(c,Vi.y),h.addScaledVector(f,Vi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,r),Xc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Gc,l.x),c.addScaledVector(Wc,l.y),c.addScaledVector(Xc,l.z),c}static isFrontFacing(e,t,r,a){return ci.subVectors(r,t),Bi.subVectors(e,t),ci.cross(Bi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ci.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Ns.subVectors(a,r),Is.subVectors(l,r),Bc.subVectors(e,r);const h=Ns.dot(Bc),p=Is.dot(Bc);if(h<=0&&p<=0)return t.copy(r);Vc.subVectors(e,a);const g=Ns.dot(Vc),v=Is.dot(Vc);if(g>=0&&v<=g)return t.copy(a);const x=h*v-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Ns,c);Hc.subVectors(e,l);const y=Ns.dot(Hc),M=Is.dot(Hc);if(M>=0&&y<=M)return t.copy(l);const C=y*p-h*M;if(C<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Is,f);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return vm.subVectors(l,a),f=(v-g)/(v-g+(y-M)),t.copy(a).addScaledVector(vm,f);const _=1/(S+C+x);return c=C*_,f=x*_,t.copy(r).addScaledVector(Ns,c).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function jc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class vt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=St.workingColorSpace){if(e=G_(e,1),t=vn(t,0,1),r=vn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=jc(c,l,e+1/3),this.g=jc(c,l,e),this.b=jc(c,l,e-1/3)}return St.toWorkingColorSpace(this,a),this}setStyle(e,t=Qn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const r=Rg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return St.fromWorkingColorSpace(mn.copy(this),e),Math.round(vn(mn.r*255,0,255))*65536+Math.round(vn(mn.g*255,0,255))*256+Math.round(vn(mn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(mn.copy(this),t);const r=mn.r,a=mn.g,l=mn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=g<=.5?v/(c+f):v/(2-c-f),c){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Qn){St.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,r=mn.g,a=mn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(ml);const r=Pc(xr.h,ml.h,t),a=Pc(xr.s,ml.s,t),l=Pc(xr.l,ml.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new vt;vt.NAMES=Rg;let ax=0;class Qo extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Js(),this.name="",this.blending=Vs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=df,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ff&&(r.blendSrc=this.blendSrc),this.blendDst!==df&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pg extends Qo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new j,gl=new Ge;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tm,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=No(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=No(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=No(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=No(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class bg extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Lg extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class _n extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let lx=0;const Jn=new zt,qc=new an,Us=new j,Hn=new Jo,Oo=new Jo,nn=new j;class wi extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?Lg:bg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new at().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,r){return Jn.makeTranslation(e,t,r),this.applyMatrix4(Jn),this}scale(e,t,r){return Jn.makeScale(e,t,r),this.applyMatrix4(Jn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new _n(r,3))}else{for(let r=0,a=t.count;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Oo.setFromBufferAttribute(f),this.morphTargetsRelative?(nn.addVectors(Hn.min,Oo.min),Hn.expandByPoint(nn),nn.addVectors(Hn.max,Oo.max),Hn.expandByPoint(nn)):(Hn.expandByPoint(Oo.min),Hn.expandByPoint(Oo.max))}Hn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)nn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(nn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)nn.fromBufferAttribute(f,p),h&&(Us.fromBufferAttribute(e,p),nn.add(Us)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let z=0;z<r.count;z++)f[z]=new j,h[z]=new j;const p=new j,g=new j,v=new j,x=new Ge,y=new Ge,M=new Ge,C=new j,S=new j;function _(z,P,A){p.fromBufferAttribute(r,z),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(l,z),y.fromBufferAttribute(l,P),M.fromBufferAttribute(l,A),g.sub(p),v.sub(p),y.sub(x),M.sub(x);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(C.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(B),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(B),f[z].add(C),f[P].add(C),f[A].add(C),h[z].add(S),h[P].add(S),h[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let z=0,P=L.length;z<P;++z){const A=L[z],B=A.start,se=A.count;for(let X=B,D=B+se;X<D;X+=3)_(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new j,w=new j,K=new j,k=new j;function O(z){K.fromBufferAttribute(a,z),k.copy(K);const P=f[z];b.copy(P),b.sub(K.multiplyScalar(K.dot(P))).normalize(),w.crossVectors(k,P);const B=w.dot(h[z])<0?-1:1;c.setXYZW(z,b.x,b.y,b.z,B)}for(let z=0,P=L.length;z<P;++z){const A=L[z],B=A.start,se=A.count;for(let X=B,D=B+se;X<D;X+=3)O(e.getX(X+0)),O(e.getX(X+1)),O(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new j,l=new j,c=new j,f=new j,h=new j,p=new j,g=new j,v=new j;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),f.add(g),h.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,v=f.normalized,x=new p.constructor(h.length*g);let y=0,M=0;for(let C=0,S=h.length;C<S;C++){f.isInterleavedBufferAttribute?y=h[C]*f.data.stride+f.offset:y=h[C]*g;for(let _=0;_<g;_++)x[M++]=p[y++]}return new Mi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=e(x,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new zt,Hr=new ex,vl=new ad,xm=new j,_l=new j,xl=new j,yl=new j,Yc=new j,Sl=new j,ym=new j,Ml=new j;class Dt extends an{constructor(e=new wi,t=new Pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Sl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],v=l[h];g!==0&&(Yc.fromBufferAttribute(v,e),c?Sl.addScaledVector(Yc,g):Sl.addScaledVector(Yc.sub(t),g))}t.add(Sl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(vl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(vl,xm)===null||Hr.origin.distanceToSquared(xm)>(e.far-e.near)**2))&&(_m.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(_m),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,C=x.length;M<C;M++){const S=x[M],_=c[S.materialIndex],L=Math.max(S.start,y.start),b=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let w=L,K=b;w<K;w+=3){const k=f.getX(w),O=f.getX(w+1),z=f.getX(w+2);a=El(this,_,e,r,p,g,v,k,O,z),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),C=Math.min(f.count,y.start+y.count);for(let S=M,_=C;S<_;S+=3){const L=f.getX(S),b=f.getX(S+1),w=f.getX(S+2);a=El(this,c,e,r,p,g,v,L,b,w),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,C=x.length;M<C;M++){const S=x[M],_=c[S.materialIndex],L=Math.max(S.start,y.start),b=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let w=L,K=b;w<K;w+=3){const k=w,O=w+1,z=w+2;a=El(this,_,e,r,p,g,v,k,O,z),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let S=M,_=C;S<_;S+=3){const L=S,b=S+1,w=S+2;a=El(this,c,e,r,p,g,v,L,b,w),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function ux(s,e,t,r,a,l,c,f){let h;if(e.side===Fn?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===wr,f),h===null)return null;Ml.copy(f),Ml.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ml);return p<t.near||p>t.far?null:{distance:p,point:Ml.clone(),object:s}}function El(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,_l),s.getVertexPosition(h,xl),s.getVertexPosition(p,yl);const g=ux(s,e,t,r,_l,xl,yl,ym);if(g){const v=new j;fi.getBarycoord(ym,_l,xl,yl,v),a&&(g.uv=fi.getInterpolatedAttribute(a,f,h,p,v,new Ge)),l&&(g.uv1=fi.getInterpolatedAttribute(l,f,h,p,v,new Ge)),c&&(g.normal=fi.getInterpolatedAttribute(c,f,h,p,v,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new j,materialIndex:0};fi.getNormal(_l,xl,yl,x.normal),g.face=x,g.barycoord=v}return g}class rn extends wi{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],v=[];let x=0,y=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,a,c,2),M("x","z","y",1,-1,e,r,-t,a,c,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(v,2));function M(C,S,_,L,b,w,K,k,O,z,P){const A=w/O,B=K/z,se=w/2,X=K/2,D=k/2,te=O+1,ee=z+1;let ce=0,V=0;const H=new j;for(let Q=0;Q<ee;Q++){const U=Q*B-X;for(let N=0;N<te;N++){const de=N*A-se;H[C]=de*L,H[S]=U*b,H[_]=D,p.push(H.x,H.y,H.z),H[C]=0,H[S]=0,H[_]=k>0?1:-1,g.push(H.x,H.y,H.z),v.push(N/O),v.push(1-Q/z),ce+=1}}for(let Q=0;Q<z;Q++)for(let U=0;U<O;U++){const N=x+U+te*Q,de=x+U+te*(Q+1),Y=x+(U+1)+te*(Q+1),ie=x+(U+1)+te*Q;h.push(N,de,ie),h.push(de,Y,ie),V+=6}f.addGroup(y,V,P),y+=V,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=$s(s[t]);for(const a in r)e[a]=r[a]}return e}function cx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const fx={clone:$s,merge:Tn};var dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Qo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ng extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new j,Sm=new Ge,Mm=new Ge;class Gn extends Ng{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$f*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $f*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,Sm,Mm),t.subVectors(Mm,Sm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class px extends an{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Gn(Fs,Os,e,t);a.layers=this.layers,this.add(a);const l=new Gn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const c=new Gn(Fs,Os,e,t);c.layers=this.layers,this.add(c);const f=new Gn(Fs,Os,e,t);f.layers=this.layers,this.add(f);const h=new Gn(Fs,Os,e,t);h.layers=this.layers,this.add(h);const p=new Gn(Fs,Os,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(v,x,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Ig extends An{constructor(e,t,r,a,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,r,a,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mx extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ig(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new rn(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Mr});l.uniforms.tEquirect.value=t;const c=new Dt(a,l),f=t.minFilter;return t.minFilter===Zr&&(t.minFilter=Si),new px(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}const $c=new j,gx=new j,vx=new at;class jr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=$c.subVectors(r,t).cross(gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta($c),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||vx.getNormalMatrix(e),a=this.coplanarPoint($c).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new ad,wl=new j;class ld{constructor(e=new jr,t=new jr,r=new jr,a=new jr,l=new jr,c=new jr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],g=a[5],v=a[6],x=a[7],y=a[8],M=a[9],C=a[10],S=a[11],_=a[12],L=a[13],b=a[14],w=a[15];if(r[0].setComponents(h-l,x-p,S-y,w-_).normalize(),r[1].setComponents(h+l,x+p,S+y,w+_).normalize(),r[2].setComponents(h+c,x+g,S+M,w+L).normalize(),r[3].setComponents(h-c,x-g,S-M,w-L).normalize(),r[4].setComponents(h-f,x-v,S-C,w-b).normalize(),t===Xi)r[5].setComponents(h+f,x+v,S+C,w+b).normalize();else if(t===Ol)r[5].setComponents(f,v,C,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ug(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function _x(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,g),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,p){const g=h.array,v=h.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,g);else{v.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<v.length;y++){const M=v[x],C=v[y];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,M=v.length;y<M;y++){const C=v[y];s.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}class ea extends wi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,g=h+1,v=e/f,x=t/h,y=[],M=[],C=[],S=[];for(let _=0;_<g;_++){const L=_*x-c;for(let b=0;b<p;b++){const w=b*v-l;M.push(w,-L,0),C.push(0,0,1),S.push(b/f),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const b=L+p*_,w=L+p*(_+1),K=L+1+p*(_+1),k=L+1+p*_;y.push(b,w,k),y.push(w,K,k)}this.setIndex(y),this.setAttribute("position",new _n(M,3)),this.setAttribute("normal",new _n(C,3)),this.setAttribute("uv",new _n(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ex=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_y=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ry=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:xx,alphahash_pars_fragment:yx,alphamap_fragment:Sx,alphamap_pars_fragment:Mx,alphatest_fragment:Ex,alphatest_pars_fragment:wx,aomap_fragment:Tx,aomap_pars_fragment:Ax,batching_pars_vertex:Cx,batching_vertex:Rx,begin_vertex:Px,beginnormal_vertex:bx,bsdfs:Lx,iridescence_fragment:Dx,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ox,color_fragment:kx,color_pars_fragment:zx,color_pars_vertex:Bx,color_vertex:Vx,common:Hx,cube_uv_reflection_fragment:Gx,defaultnormal_vertex:Wx,displacementmap_pars_vertex:Xx,displacementmap_vertex:jx,emissivemap_fragment:qx,emissivemap_pars_fragment:Yx,colorspace_fragment:$x,colorspace_pars_fragment:Kx,envmap_fragment:Zx,envmap_common_pars_fragment:Jx,envmap_pars_fragment:Qx,envmap_pars_vertex:ey,envmap_physical_pars_fragment:fy,envmap_vertex:ty,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:ry,fog_pars_fragment:sy,gradientmap_pars_fragment:oy,lightmap_pars_fragment:ay,lights_lambert_fragment:ly,lights_lambert_pars_fragment:uy,lights_pars_begin:cy,lights_toon_fragment:dy,lights_toon_pars_fragment:hy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:gy,lights_physical_pars_fragment:vy,lights_fragment_begin:_y,lights_fragment_maps:xy,lights_fragment_end:yy,logdepthbuf_fragment:Sy,logdepthbuf_pars_fragment:My,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:wy,map_fragment:Ty,map_pars_fragment:Ay,map_particle_fragment:Cy,map_particle_pars_fragment:Ry,metalnessmap_fragment:Py,metalnessmap_pars_fragment:by,morphinstance_vertex:Ly,morphcolor_vertex:Dy,morphnormal_vertex:Ny,morphtarget_pars_vertex:Iy,morphtarget_vertex:Uy,normal_fragment_begin:Fy,normal_fragment_maps:Oy,normal_pars_fragment:ky,normal_pars_vertex:zy,normal_vertex:By,normalmap_pars_fragment:Vy,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Wy,iridescence_pars_fragment:Xy,opaque_fragment:jy,packing:qy,premultiplied_alpha_fragment:Yy,project_vertex:$y,dithering_fragment:Ky,dithering_pars_fragment:Zy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:eS,shadowmap_pars_vertex:tS,shadowmap_vertex:nS,shadowmask_pars_fragment:iS,skinbase_vertex:rS,skinning_pars_vertex:sS,skinning_vertex:oS,skinnormal_vertex:aS,specularmap_fragment:lS,specularmap_pars_fragment:uS,tonemapping_fragment:cS,tonemapping_pars_fragment:fS,transmission_fragment:dS,transmission_pars_fragment:hS,uv_pars_fragment:pS,uv_pars_vertex:mS,uv_vertex:gS,worldpos_vertex:vS,background_vert:_S,background_frag:xS,backgroundCube_vert:yS,backgroundCube_frag:SS,cube_vert:MS,cube_frag:ES,depth_vert:wS,depth_frag:TS,distanceRGBA_vert:AS,distanceRGBA_frag:CS,equirect_vert:RS,equirect_frag:PS,linedashed_vert:bS,linedashed_frag:LS,meshbasic_vert:DS,meshbasic_frag:NS,meshlambert_vert:IS,meshlambert_frag:US,meshmatcap_vert:FS,meshmatcap_frag:OS,meshnormal_vert:kS,meshnormal_frag:zS,meshphong_vert:BS,meshphong_frag:VS,meshphysical_vert:HS,meshphysical_frag:GS,meshtoon_vert:WS,meshtoon_frag:XS,points_vert:jS,points_frag:qS,shadow_vert:YS,shadow_frag:$S,sprite_vert:KS,sprite_frag:ZS},Le={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},yi={basic:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Tn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Tn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Tn([Le.points,Le.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Tn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Tn([Le.common,Le.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Tn([Le.sprite,Le.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Tn([Le.common,Le.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Tn([Le.lights,Le.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};yi.physical={uniforms:Tn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Tl={r:0,b:0,g:0},Wr=new Ei,JS=new zt;function QS(s,e,t,r,a,l,c){const f=new vt(0);let h=l===!0?0:1,p,g,v=null,x=0,y=null;function M(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?t:e).get(b)),b}function C(L){let b=!1;const w=M(L);w===null?_(f,h):w&&w.isColor&&(_(w,1),b=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,c):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,b){const w=M(b);w&&(w.isCubeTexture||w.mapping===Bl)?(g===void 0&&(g=new Dt(new rn(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:$s(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(K,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Wr.copy(b.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=w,g.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(JS.makeRotationFromEuler(Wr)),g.material.toneMapped=St.getTransfer(w.colorSpace)!==Pt,(v!==w||x!==w.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=w,x=w.version,y=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Dt(new ea(2,2),new Tr({name:"BackgroundMaterial",uniforms:$s(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=St.getTransfer(w.colorSpace)!==Pt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||x!==w.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,v=w,x=w.version,y=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,b){L.getRGB(Tl,Dg(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,b,c)}return{getClearColor:function(){return f},setClearColor:function(L,b=1){f.set(L),h=b,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(f,h)},render:C,addToRenderList:S}}function eM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(A,B,se,X,D){let te=!1;const ee=v(X,se,B);l!==ee&&(l=ee,p(l.object)),te=y(A,X,se,D),te&&M(A,X,se,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,w(A,B,se,X),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function h(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function v(A,B,se){const X=se.wireframe===!0;let D=r[A.id];D===void 0&&(D={},r[A.id]=D);let te=D[B.id];te===void 0&&(te={},D[B.id]=te);let ee=te[X];return ee===void 0&&(ee=x(h()),te[X]=ee),ee}function x(A){const B=[],se=[],X=[];for(let D=0;D<t;D++)B[D]=0,se[D]=0,X[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:se,attributeDivisors:X,object:A,attributes:{},index:null}}function y(A,B,se,X){const D=l.attributes,te=B.attributes;let ee=0;const ce=se.getAttributes();for(const V in ce)if(ce[V].location>=0){const Q=D[V];let U=te[V];if(U===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),Q===void 0||Q.attribute!==U||U&&Q.data!==U.data)return!0;ee++}return l.attributesNum!==ee||l.index!==X}function M(A,B,se,X){const D={},te=B.attributes;let ee=0;const ce=se.getAttributes();for(const V in ce)if(ce[V].location>=0){let Q=te[V];Q===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor));const U={};U.attribute=Q,Q&&Q.data&&(U.data=Q.data),D[V]=U,ee++}l.attributes=D,l.attributesNum=ee,l.index=X}function C(){const A=l.newAttributes;for(let B=0,se=A.length;B<se;B++)A[B]=0}function S(A){_(A,0)}function _(A,B){const se=l.newAttributes,X=l.enabledAttributes,D=l.attributeDivisors;se[A]=1,X[A]===0&&(s.enableVertexAttribArray(A),X[A]=1),D[A]!==B&&(s.vertexAttribDivisor(A,B),D[A]=B)}function L(){const A=l.newAttributes,B=l.enabledAttributes;for(let se=0,X=B.length;se<X;se++)B[se]!==A[se]&&(s.disableVertexAttribArray(se),B[se]=0)}function b(A,B,se,X,D,te,ee){ee===!0?s.vertexAttribIPointer(A,B,se,D,te):s.vertexAttribPointer(A,B,se,X,D,te)}function w(A,B,se,X){C();const D=X.attributes,te=se.getAttributes(),ee=B.defaultAttributeValues;for(const ce in te){const V=te[ce];if(V.location>=0){let H=D[ce];if(H===void 0&&(ce==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),ce==="instanceColor"&&A.instanceColor&&(H=A.instanceColor)),H!==void 0){const Q=H.normalized,U=H.itemSize,N=e.get(H);if(N===void 0)continue;const de=N.buffer,Y=N.type,ie=N.bytesPerElement,ve=Y===s.INT||Y===s.UNSIGNED_INT||H.gpuType===td;if(H.isInterleavedBufferAttribute){const pe=H.data,Ae=pe.stride,Re=H.offset;if(pe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<V.locationSize;Fe++)_(V.location+Fe,pe.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)S(V.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,de);for(let Fe=0;Fe<V.locationSize;Fe++)b(V.location+Fe,U/V.locationSize,Y,Q,Ae*ie,(Re+U/V.locationSize*Fe)*ie,ve)}else{if(H.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)_(V.location+pe,H.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let pe=0;pe<V.locationSize;pe++)S(V.location+pe);s.bindBuffer(s.ARRAY_BUFFER,de);for(let pe=0;pe<V.locationSize;pe++)b(V.location+pe,U/V.locationSize,Y,Q,U*ie,U/V.locationSize*pe*ie,ve)}}else if(ee!==void 0){const Q=ee[ce];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(V.location,Q);break;case 3:s.vertexAttrib3fv(V.location,Q);break;case 4:s.vertexAttrib4fv(V.location,Q);break;default:s.vertexAttrib1fv(V.location,Q)}}}}L()}function K(){z();for(const A in r){const B=r[A];for(const se in B){const X=B[se];for(const D in X)g(X[D].object),delete X[D];delete B[se]}delete r[A]}}function k(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const se in B){const X=B[se];for(const D in X)g(X[D].object),delete X[D];delete B[se]}delete r[A.id]}function O(A){for(const B in r){const se=r[B];if(se[A.id]===void 0)continue;const X=se[A.id];for(const D in X)g(X[D].object),delete X[D];delete se[A.id]}}function z(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:z,resetDefaultState:P,dispose:K,releaseStatesOfGeometry:k,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:L}}function tM(s,e,t){let r;function a(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),t.update(g,r,v))}function f(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let M=0;M<v;M++)y+=g[M];t.update(y,r,1)}function h(p,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)c(p[M],g[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let M=0;for(let C=0;C<v;C++)M+=g[C]*x[C];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function nM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(O){return!(O!==di&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const z=O===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==qi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Wi&&!z)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=M>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:K,maxSamples:k}}function iM(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new jr,f=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||a;return a=x,r=v.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,y){const M=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!a||M===null||M.length===0||l&&!S)l?g(null):p();else{const L=l?0:r,b=L*4;let w=_.clippingState||null;h.value=w,w=g(M,x,b,y);for(let K=0;K!==b;++K)w[K]=t[K];_.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,M){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=h.value,M!==!0||S===null){const _=y+C*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let b=0,w=y;b!==C;++b,w+=4)c.copy(v[b]).applyMatrix4(L,f),c.normal.toArray(S,w),S[w+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function rM(s){let e=new WeakMap;function t(c,f){return f===yf?c.mapping=Xs:f===Sf&&(c.mapping=js),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===yf||f===Sf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new mx(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Fg extends Ng{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,Em=[.125,.215,.35,.446,.526,.582],$r=20,Kc=new Fg,wm=new vt;let Zc=null,Jc=0,Qc=0,ef=!1;const qr=(1+Math.sqrt(5))/2,ks=1/qr,Tm=[new j(-qr,ks,0),new j(qr,ks,0),new j(-ks,0,qr),new j(ks,0,qr),new j(0,qr,-ks),new j(0,qr,ks),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Jc,Qc),this._renderer.xr.enabled=ef,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Ko,format:di,colorSpace:Ks,depthBuffer:!1},a=Cm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sM(l)),this._blurMaterial=oM(l,e,t)}return a}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,r,a){const f=new Gn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(wm),g.toneMapping=Er,g.autoClear=!1;const y=new Pg({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),M=new Dt(new rn,y);let C=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,C=!0):(y.color.copy(wm),C=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(f.up.set(0,h[_],0),f.lookAt(p[_],0,0)):L===1?(f.up.set(0,0,h[_]),f.lookAt(0,p[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,p[_]));const b=this._cubeSize;Al(a,L*b,_>2?b:0,b,b),g.setRenderTarget(a),C&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Xs||e.mapping===js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Dt(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Al(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Kc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Tm[(a-l-1)%Tm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Dt(this._lodPlanes[a],p),x=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*$r-1),C=l/M,S=isFinite(l)?1+Math.floor(g*C):$r;S>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${$r}`);const _=[];let L=0;for(let O=0;O<$r;++O){const z=O/C,P=Math.exp(-z*z/2);_.push(P),O===0?L+=P:O<S&&(L+=2*P)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=M,x.mipInt.value=b-r;const w=this._sizeLods[a],K=3*w*(a>b-zs?a-b+zs:0),k=4*(this._cubeSize-w);Al(t,K,k,3*w,2*w),h.setRenderTarget(t),h.render(v,Kc)}}function sM(s){const e=[],t=[],r=[];let a=s;const l=s-zs+1+Em.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-zs?h=Em[c-s+zs-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,C=3,S=2,_=1,L=new Float32Array(C*M*y),b=new Float32Array(S*M*y),w=new Float32Array(_*M*y);for(let k=0;k<y;k++){const O=k%3*2/3-1,z=k>2?0:-1,P=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];L.set(P,C*M*k),b.set(x,S*M*k);const A=[k,k,k,k,k,k];w.set(A,_*M*k)}const K=new wi;K.setAttribute("position",new Mi(L,C)),K.setAttribute("uv",new Mi(b,S)),K.setAttribute("faceIndex",new Mi(w,_)),e.push(K),a>zs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Cm(s,e,t){const r=new Qr(s,e,t);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Al(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function oM(s,e,t){const r=new Float32Array($r),a=new j(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Rm(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Pm(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===yf||h===Sf,g=h===Xs||h===js;if(p||g){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Am(s)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return p&&y&&y.height>0||g&&y&&a(y)?(t===null&&(t=new Am(s)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function lM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&zo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function uM(s,e,t,r){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);for(const M in x.morphAttributes){const C=x.morphAttributes[M];for(let S=0,_=C.length;S<_;S++)e.remove(C[S])}x.removeEventListener("dispose",c),delete a[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER);const y=v.morphAttributes;for(const M in y){const C=y[M];for(let S=0,_=C.length;S<_;S++)e.update(C[S],s.ARRAY_BUFFER)}}function p(v){const x=[],y=v.index,M=v.attributes.position;let C=0;if(y!==null){const L=y.array;C=y.version;for(let b=0,w=L.length;b<w;b+=3){const K=L[b+0],k=L[b+1],O=L[b+2];x.push(K,k,k,O,O,K)}}else if(M!==void 0){const L=M.array;C=M.version;for(let b=0,w=L.length/3-1;b<w;b+=3){const K=b+0,k=b+1,O=b+2;x.push(K,k,k,O,O,K)}}else return;const S=new(wg(x)?Lg:bg)(x,1);S.version=C;const _=l.get(v);_&&e.remove(_),l.set(v,S)}function g(v){const x=l.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function cM(s,e,t){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,y){s.drawElements(r,y,l,x*c),t.update(y,r,1)}function p(x,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,x*c,M),t.update(y,r,M))}function g(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,x,0,M);let S=0;for(let _=0;_<M;_++)S+=y[_];t.update(S,r,1)}function v(x,y,M,C){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/c,y[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,x,0,C,0,M);let _=0;for(let L=0;L<M;L++)_+=y[L]*C[L];t.update(_,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function fM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function dM(s,e,t){const r=new WeakMap,a=new bt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let A=function(){z.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let w=0;M===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let K=f.attributes.position.count*w,k=1;K>e.maxTextureSize&&(k=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const O=new Float32Array(K*k*4*v),z=new Ag(O,K,k,v);z.type=Wi,z.needsUpdate=!0;const P=w*4;for(let B=0;B<v;B++){const se=_[B],X=L[B],D=b[B],te=K*k*4*B;for(let ee=0;ee<se.count;ee++){const ce=ee*P;M===!0&&(a.fromBufferAttribute(se,ee),O[te+ce+0]=a.x,O[te+ce+1]=a.y,O[te+ce+2]=a.z,O[te+ce+3]=0),C===!0&&(a.fromBufferAttribute(X,ee),O[te+ce+4]=a.x,O[te+ce+5]=a.y,O[te+ce+6]=a.z,O[te+ce+7]=0),S===!0&&(a.fromBufferAttribute(D,ee),O[te+ce+8]=a.x,O[te+ce+9]=a.y,O[te+ce+10]=a.z,O[te+ce+11]=D.itemSize===4?a.w:1)}}x={count:v,texture:z,size:new Ge(K,k)},r.set(f,x),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const C=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function hM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return v}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}class Og extends An{constructor(e,t,r,a,l,c,f,h,p,g=Hs){if(g!==Hs&&g!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Hs&&(r=Jr),r===void 0&&g===Ys&&(r=qs),super(null,a,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kg=new An,bm=new Og(1,1),zg=new Ag,Bg=new J_,Vg=new Ig,Lm=[],Dm=[],Nm=new Float32Array(16),Im=new Float32Array(9),Um=new Float32Array(4);function Qs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Lm[a];if(l===void 0&&(l=new Float32Array(a),Lm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Zt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Jt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Hl(s,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function pM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2fv(this.addr,e),Jt(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;s.uniform3fv(this.addr,e),Jt(t,e)}}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4fv(this.addr,e),Jt(t,e)}}function _M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,r))return;Um.set(r),s.uniformMatrix2fv(this.addr,!1,Um),Jt(t,r)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,r))return;Im.set(r),s.uniformMatrix3fv(this.addr,!1,Im),Jt(t,r)}}function yM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,r))return;Nm.set(r),s.uniformMatrix4fv(this.addr,!1,Nm),Jt(t,r)}}function SM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2iv(this.addr,e),Jt(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3iv(this.addr,e),Jt(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4iv(this.addr,e),Jt(t,e)}}function TM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2uiv(this.addr,e),Jt(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3uiv(this.addr,e),Jt(t,e)}}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4uiv(this.addr,e),Jt(t,e)}}function PM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(bm.compareFunction=Eg,l=bm):l=kg,t.setTexture2D(e||l,a)}function bM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Bg,a)}function LM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Vg,a)}function DM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||zg,a)}function NM(s){switch(s){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return vM;case 35674:return _M;case 35675:return xM;case 35676:return yM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return EM;case 35669:case 35673:return wM;case 5125:return TM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return DM}}function IM(s,e){s.uniform1fv(this.addr,e)}function UM(s,e){const t=Qs(e,this.size,2);s.uniform2fv(this.addr,t)}function FM(s,e){const t=Qs(e,this.size,3);s.uniform3fv(this.addr,t)}function OM(s,e){const t=Qs(e,this.size,4);s.uniform4fv(this.addr,t)}function kM(s,e){const t=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zM(s,e){const t=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){const t=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function VM(s,e){s.uniform1iv(this.addr,e)}function HM(s,e){s.uniform2iv(this.addr,e)}function GM(s,e){s.uniform3iv(this.addr,e)}function WM(s,e){s.uniform4iv(this.addr,e)}function XM(s,e){s.uniform1uiv(this.addr,e)}function jM(s,e){s.uniform2uiv(this.addr,e)}function qM(s,e){s.uniform3uiv(this.addr,e)}function YM(s,e){s.uniform4uiv(this.addr,e)}function $M(s,e,t){const r=this.cache,a=e.length,l=Hl(t,a);Zt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||kg,l[c])}function KM(s,e,t){const r=this.cache,a=e.length,l=Hl(t,a);Zt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Bg,l[c])}function ZM(s,e,t){const r=this.cache,a=e.length,l=Hl(t,a);Zt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Vg,l[c])}function JM(s,e,t){const r=this.cache,a=e.length,l=Hl(t,a);Zt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||zg,l[c])}function QM(s){switch(s){case 5126:return IM;case 35664:return UM;case 35665:return FM;case 35666:return OM;case 35674:return kM;case 35675:return zM;case 35676:return BM;case 5124:case 35670:return VM;case 35667:case 35671:return HM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return jM;case 36295:return qM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}class eE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}}class tE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class nE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Fm(s,e){s.seq.push(e),s.map[e.id]=e}function iE(s,e,t){const r=s.name,a=r.length;for(tf.lastIndex=0;;){const l=tf.exec(r),c=tf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Fm(t,p===void 0?new eE(f,s,e):new tE(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new nE(f),Fm(t,v)),t=v}}}class Fl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);iE(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Om(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const rE=37297;let sE=0;function oE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const km=new at;function aE(s){St._getMatrix(km,St.workingColorSpace,s);const e=`mat3( ${km.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+oE(s.getShaderSource(e),c)}else return a}function lE(s,e){const t=aE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uE(s,e){let t;switch(e){case A_:t="Linear";break;case C_:t="Reinhard";break;case R_:t="Cineon";break;case cg:t="ACESFilmic";break;case b_:t="AgX";break;case L_:t="Neutral";break;case P_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new j;function cE(){St.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function dE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Bo(s){return s!==""}function Bm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(s){return s.replace(pE,gE)}const mE=new Map;function gE(s,e){let t=lt[e];if(t===void 0){const r=mE.get(e);if(r!==void 0)t=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kf(t)}const vE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(vE,_E)}function _E(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Gm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ag?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function yE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function ME(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ug:e="ENVMAP_BLENDING_MULTIPLY";break;case w_:e="ENVMAP_BLENDING_MIX";break;case T_:e="ENVMAP_BLENDING_ADD";break}return e}function EE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function wE(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=xE(t),p=yE(t),g=SE(t),v=ME(t),x=EE(t),y=fE(t),M=dE(l),C=a.createProgram();let S,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Bo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(S=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?lt.tonemapping_pars_fragment:"",t.toneMapping!==Er?uE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,lE("linearToOutputTexel",t.outputColorSpace),cE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),c=Kf(c),c=Bm(c,t),c=Vm(c,t),f=Kf(f),f=Bm(f,t),f=Vm(f,t),c=Hm(c),f=Hm(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=L+S+c,w=L+_+f,K=Om(a,a.VERTEX_SHADER,b),k=Om(a,a.FRAGMENT_SHADER,w);a.attachShader(C,K),a.attachShader(C,k),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function O(B){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(C).trim(),X=a.getShaderInfoLog(K).trim(),D=a.getShaderInfoLog(k).trim();let te=!0,ee=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,K,k);else{const ce=zm(a,K,"vertex"),V=zm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+se+`
`+ce+`
`+V)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(X===""||D==="")&&(ee=!1);ee&&(B.diagnostics={runnable:te,programLog:se,vertexShader:{log:X,prefix:S},fragmentShader:{log:D,prefix:_}})}a.deleteShader(K),a.deleteShader(k),z=new Fl(a,C),P=hE(a,C)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(C,rE)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=K,this.fragmentShader=k,this}let TE=0;class AE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CE(e),t.set(e,r)),r}}class CE{constructor(e){this.id=TE++,this.code=e,this.usedTimes=0}}function RE(s,e,t,r,a,l,c){const f=new Cg,h=new AE,p=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(P){return p.add(P),P===0?"uv":`uv${P}`}function S(P,A,B,se,X){const D=se.fog,te=X.geometry,ee=P.isMeshStandardMaterial?se.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||ee),V=ce&&ce.mapping===Bl?ce.image.height:null,H=M[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const Q=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,U=Q!==void 0?Q.length:0;let N=0;te.morphAttributes.position!==void 0&&(N=1),te.morphAttributes.normal!==void 0&&(N=2),te.morphAttributes.color!==void 0&&(N=3);let de,Y,ie,ve;if(H){const xt=yi[H];de=xt.vertexShader,Y=xt.fragmentShader}else de=P.vertexShader,Y=P.fragmentShader,h.update(P),ie=h.getVertexShaderID(P),ve=h.getFragmentShaderID(P);const pe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Re=X.isInstancedMesh===!0,Fe=X.isBatchedMesh===!0,_t=!!P.map,pt=!!P.matcap,Nt=!!ce,J=!!P.aoMap,yn=!!P.lightMap,ht=!!P.bumpMap,ct=!!P.normalMap,Ke=!!P.displacementMap,At=!!P.emissiveMap,$e=!!P.metalnessMap,I=!!P.roughnessMap,T=P.anisotropy>0,oe=P.clearcoat>0,_e=P.dispersion>0,ye=P.iridescence>0,he=P.sheen>0,We=P.transmission>0,Pe=T&&!!P.anisotropyMap,Ue=oe&&!!P.clearcoatMap,ut=oe&&!!P.clearcoatNormalMap,Ee=oe&&!!P.clearcoatRoughnessMap,ke=ye&&!!P.iridescenceMap,Qe=ye&&!!P.iridescenceThicknessMap,et=he&&!!P.sheenColorMap,ze=he&&!!P.sheenRoughnessMap,ft=!!P.specularMap,rt=!!P.specularColorMap,Tt=!!P.specularIntensityMap,q=We&&!!P.transmissionMap,be=We&&!!P.thicknessMap,fe=!!P.gradientMap,me=!!P.alphaMap,Ne=P.alphaTest>0,De=!!P.alphaHash,st=!!P.extensions;let Ut=Er;P.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const qt={shaderID:H,shaderType:P.type,shaderName:P.name,vertexShader:de,fragmentShader:Y,defines:P.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Fe,batchingColor:Fe&&X._colorsTexture!==null,instancing:Re,instancingColor:Re&&X.instanceColor!==null,instancingMorph:Re&&X.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ks,alphaToCoverage:!!P.alphaToCoverage,map:_t,matcap:pt,envMap:Nt,envMapMode:Nt&&ce.mapping,envMapCubeUVHeight:V,aoMap:J,lightMap:yn,bumpMap:ht,normalMap:ct,displacementMap:x&&Ke,emissiveMap:At,normalMapObjectSpace:ct&&P.normalMapType===U_,normalMapTangentSpace:ct&&P.normalMapType===Mg,metalnessMap:$e,roughnessMap:I,anisotropy:T,anisotropyMap:Pe,clearcoat:oe,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ee,dispersion:_e,iridescence:ye,iridescenceMap:ke,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ft,specularColorMap:rt,specularIntensityMap:Tt,transmission:We,transmissionMap:q,thicknessMap:be,gradientMap:fe,opaque:P.transparent===!1&&P.blending===Vs&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:Ne,alphaHash:De,combine:P.combine,mapUv:_t&&C(P.map.channel),aoMapUv:J&&C(P.aoMap.channel),lightMapUv:yn&&C(P.lightMap.channel),bumpMapUv:ht&&C(P.bumpMap.channel),normalMapUv:ct&&C(P.normalMap.channel),displacementMapUv:Ke&&C(P.displacementMap.channel),emissiveMapUv:At&&C(P.emissiveMap.channel),metalnessMapUv:$e&&C(P.metalnessMap.channel),roughnessMapUv:I&&C(P.roughnessMap.channel),anisotropyMapUv:Pe&&C(P.anisotropyMap.channel),clearcoatMapUv:Ue&&C(P.clearcoatMap.channel),clearcoatNormalMapUv:ut&&C(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&C(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&C(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&C(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&C(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(P.sheenRoughnessMap.channel),specularMapUv:ft&&C(P.specularMap.channel),specularColorMapUv:rt&&C(P.specularColorMap.channel),specularIntensityMapUv:Tt&&C(P.specularIntensityMap.channel),transmissionMapUv:q&&C(P.transmissionMap.channel),thicknessMapUv:be&&C(P.thicknessMap.channel),alphaMapUv:me&&C(P.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ct||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!te.attributes.uv&&(_t||me),fog:!!D,useFog:P.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:X.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:N,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:_t&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:At&&P.emissiveMap.isVideoTexture===!0&&St.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Gi,flipSided:P.side===Fn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function _(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(L(A,P),b(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function L(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function b(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function w(P){const A=M[P.type];let B;if(A){const se=yi[A];B=fx.clone(se.uniforms)}else B=P.uniforms;return B}function K(P,A){let B;for(let se=0,X=g.length;se<X;se++){const D=g[se];if(D.cacheKey===A){B=D,++B.usedTimes;break}}return B===void 0&&(B=new wE(s,A,P,l),g.push(B)),B}function k(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function O(P){h.remove(P)}function z(){h.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:w,acquireProgram:K,releaseProgram:k,releaseShaderCache:O,programs:g,dispose:z}}function PE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function bE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(v,x,y,M,C,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:M,renderOrder:v.renderOrder,z:C,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=C,_.group=S),e++,_}function f(v,x,y,M,C,S){const _=c(v,x,y,M,C,S);y.transmission>0?r.push(_):y.transparent===!0?a.push(_):t.push(_)}function h(v,x,y,M,C,S){const _=c(v,x,y,M,C,S);y.transmission>0?r.unshift(_):y.transparent===!0?a.unshift(_):t.unshift(_)}function p(v,x){t.length>1&&t.sort(v||bE),r.length>1&&r.sort(x||Wm),a.length>1&&a.sort(x||Wm)}function g(){for(let v=e,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function LE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Xm,s.set(r,[c])):a>=l.length?(c=new Xm,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function DE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new vt};break;case"SpotLight":t={position:new j,direction:new j,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=t,t}}}function NE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let IE=0;function UE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function FE(s){const e=new DE,t=NE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new j);const a=new j,l=new zt,c=new zt;function f(p){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,M=0,C=0,S=0,_=0,L=0,b=0,w=0,K=0,k=0,O=0;p.sort(UE);for(let P=0,A=p.length;P<A;P++){const B=p[P],se=B.color,X=B.intensity,D=B.distance,te=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=se.r*X,v+=se.g*X,x+=se.b*X;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(B.sh.coefficients[ee],X);O++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,V=t.get(B);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.directionalShadow[y]=V,r.directionalShadowMap[y]=te,r.directionalShadowMatrix[y]=B.shadow.matrix,L++}r.directional[y]=ee,y++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(se).multiplyScalar(X),ee.distance=D,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,r.spot[C]=ee;const ce=B.shadow;if(B.map&&(r.spotLightMap[K]=B.map,K++,ce.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[C]=ce.matrix,B.castShadow){const V=t.get(B);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.spotShadow[C]=V,r.spotShadowMap[C]=te,w++}C++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy(se).multiplyScalar(X),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=ee,S++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const ce=B.shadow,V=t.get(B);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,V.shadowCameraNear=ce.camera.near,V.shadowCameraFar=ce.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=te,r.pointShadowMatrix[M]=B.shadow.matrix,b++}r.point[M]=ee,M++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(X),ee.groundColor.copy(B.groundColor).multiplyScalar(X),r.hemi[_]=ee,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==y||z.pointLength!==M||z.spotLength!==C||z.rectAreaLength!==S||z.hemiLength!==_||z.numDirectionalShadows!==L||z.numPointShadows!==b||z.numSpotShadows!==w||z.numSpotMaps!==K||z.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=S,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=w+K-k,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=O,z.directionalLength=y,z.pointLength=M,z.spotLength=C,z.rectAreaLength=S,z.hemiLength=_,z.numDirectionalShadows=L,z.numPointShadows=b,z.numSpotShadows=w,z.numSpotMaps=K,z.numLightProbes=O,r.version=IE++)}function h(p,g){let v=0,x=0,y=0,M=0,C=0;const S=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const b=p[_];if(b.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(S),v++}else if(b.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(S),y++}else if(b.isRectAreaLight){const w=r.rectArea[M];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(S),c.identity(),l.copy(b.matrixWorld),l.premultiply(S),c.extractRotation(l),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(S),x++}else if(b.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:f,setupView:h,state:r}}function jm(s){const e=new FE(s),t=[],r=[];function a(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function OE(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new jm(s),e.set(a,[f])):l>=c.length?(f=new jm(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}class kE extends Qo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=N_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zE extends Qo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HE(s,e,t){let r=new ld;const a=new Ge,l=new Ge,c=new bt,f=new kE({depthPacking:I_}),h=new zE,p={},g=t.maxTextureSize,v={[wr]:Fn,[Fn]:wr,[Gi]:Gi},x=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:BE,fragmentShader:VE}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new wi;M.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Dt(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ag;let _=this.type;this.render=function(k,O,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Mr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const X=_!==Hi&&this.type===Hi,D=_===Hi&&this.type!==Hi;for(let te=0,ee=k.length;te<ee;te++){const ce=k[te],V=ce.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const H=V.getFrameExtents();if(a.multiply(H),l.copy(V.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/H.x),a.x=l.x*H.x,V.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/H.y),a.y=l.y*H.y,V.mapSize.y=l.y)),V.map===null||X===!0||D===!0){const U=this.type!==Hi?{minFilter:hi,magFilter:hi}:{};V.map!==null&&V.map.dispose(),V.map=new Qr(a.x,a.y,U),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const Q=V.getViewportCount();for(let U=0;U<Q;U++){const N=V.getViewport(U);c.set(l.x*N.x,l.y*N.y,l.x*N.z,l.y*N.w),se.viewport(c),V.updateMatrices(ce,U),r=V.getFrustum(),w(O,z,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===Hi&&L(V,z),V.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(P,A,B)};function L(k,O){const z=e.update(C);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Qr(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(O,null,z,x,C,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(O,null,z,y,C,null)}function b(k,O,z,P){let A=null;const B=z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)A=B;else if(A=z.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const se=A.uuid,X=O.uuid;let D=p[se];D===void 0&&(D={},p[se]=D);let te=D[X];te===void 0&&(te=A.clone(),D[X]=te,O.addEventListener("dispose",K)),A=te}if(A.visible=O.visible,A.wireframe=O.wireframe,P===Hi?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:v[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const se=s.properties.get(A);se.light=z}return A}function w(k,O,z,P,A){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Hi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,k.matrixWorld);const X=e.update(k),D=k.material;if(Array.isArray(D)){const te=X.groups;for(let ee=0,ce=te.length;ee<ce;ee++){const V=te[ee],H=D[V.materialIndex];if(H&&H.visible){const Q=b(k,H,P,A);k.onBeforeShadow(s,k,O,z,X,Q,V),s.renderBufferDirect(z,null,X,Q,k,V),k.onAfterShadow(s,k,O,z,X,Q,V)}}}else if(D.visible){const te=b(k,D,P,A);k.onBeforeShadow(s,k,O,z,X,te,null),s.renderBufferDirect(z,null,X,te,k,null),k.onAfterShadow(s,k,O,z,X,te,null)}}const se=k.children;for(let X=0,D=se.length;X<D;X++)w(se[X],O,z,P,A)}function K(k){k.target.removeEventListener("dispose",K);for(const z in p){const P=p[z],A=k.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const GE={[hf]:pf,[mf]:_f,[gf]:xf,[Ws]:vf,[pf]:hf,[_f]:mf,[xf]:gf,[vf]:Ws};function WE(s,e){function t(){let q=!1;const be=new bt;let fe=null;const me=new bt(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!q&&(s.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){q=Ne},setClear:function(Ne,De,st,Ut,qt){qt===!0&&(Ne*=Ut,De*=Ut,st*=Ut),be.set(Ne,De,st,Ut),me.equals(be)===!1&&(s.clearColor(Ne,De,st,Ut),me.copy(be))},reset:function(){q=!1,fe=null,me.set(-1,0,0,0)}}}function r(){let q=!1,be=!1,fe=null,me=null,Ne=null;return{setReversed:function(De){if(be!==De){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ne;Ne=null,this.setClear(Ut)}be=De},getReversed:function(){return be},setTest:function(De){De?pe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(De){fe!==De&&!q&&(s.depthMask(De),fe=De)},setFunc:function(De){if(be&&(De=GE[De]),me!==De){switch(De){case hf:s.depthFunc(s.NEVER);break;case pf:s.depthFunc(s.ALWAYS);break;case mf:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case gf:s.depthFunc(s.EQUAL);break;case vf:s.depthFunc(s.GEQUAL);break;case _f:s.depthFunc(s.GREATER);break;case xf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=De}},setLocked:function(De){q=De},setClear:function(De){Ne!==De&&(be&&(De=1-De),s.clearDepth(De),Ne=De)},reset:function(){q=!1,fe=null,me=null,Ne=null,be=!1}}}function a(){let q=!1,be=null,fe=null,me=null,Ne=null,De=null,st=null,Ut=null,qt=null;return{setTest:function(xt){q||(xt?pe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(xt){be!==xt&&!q&&(s.stencilMask(xt),be=xt)},setFunc:function(xt,Cn,Sn){(fe!==xt||me!==Cn||Ne!==Sn)&&(s.stencilFunc(xt,Cn,Sn),fe=xt,me=Cn,Ne=Sn)},setOp:function(xt,Cn,Sn){(De!==xt||st!==Cn||Ut!==Sn)&&(s.stencilOp(xt,Cn,Sn),De=xt,st=Cn,Ut=Sn)},setLocked:function(xt){q=xt},setClear:function(xt){qt!==xt&&(s.clearStencil(xt),qt=xt)},reset:function(){q=!1,be=null,fe=null,me=null,Ne=null,De=null,st=null,Ut=null,qt=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],M=null,C=!1,S=null,_=null,L=null,b=null,w=null,K=null,k=null,O=new vt(0,0,0),z=0,P=!1,A=null,B=null,se=null,X=null,D=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ce=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(V)[1]),ee=ce>=1):V.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ee=ce>=2);let H=null,Q={};const U=s.getParameter(s.SCISSOR_BOX),N=s.getParameter(s.VIEWPORT),de=new bt().fromArray(U),Y=new bt().fromArray(N);function ie(q,be,fe,me){const Ne=new Uint8Array(4),De=s.createTexture();s.bindTexture(q,De),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<fe;st++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(be+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return De}const ve={};ve[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(s.DEPTH_TEST),c.setFunc(Ws),ht(!1),ct(Kp),pe(s.CULL_FACE),J(Mr);function pe(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function Ae(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function Re(q,be){return v[q]!==be?(s.bindFramebuffer(q,be),v[q]=be,q===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=be),q===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Fe(q,be){let fe=y,me=!1;if(q){fe=x.get(be),fe===void 0&&(fe=[],x.set(be,fe));const Ne=q.textures;if(fe.length!==Ne.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let De=0,st=Ne.length;De<st;De++)fe[De]=s.COLOR_ATTACHMENT0+De;fe.length=Ne.length,me=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,me=!0);me&&s.drawBuffers(fe)}function _t(q){return M!==q?(s.useProgram(q),M=q,!0):!1}const pt={[Yr]:s.FUNC_ADD,[a_]:s.FUNC_SUBTRACT,[l_]:s.FUNC_REVERSE_SUBTRACT};pt[u_]=s.MIN,pt[c_]=s.MAX;const Nt={[f_]:s.ZERO,[d_]:s.ONE,[h_]:s.SRC_COLOR,[ff]:s.SRC_ALPHA,[x_]:s.SRC_ALPHA_SATURATE,[v_]:s.DST_COLOR,[m_]:s.DST_ALPHA,[p_]:s.ONE_MINUS_SRC_COLOR,[df]:s.ONE_MINUS_SRC_ALPHA,[__]:s.ONE_MINUS_DST_COLOR,[g_]:s.ONE_MINUS_DST_ALPHA,[y_]:s.CONSTANT_COLOR,[S_]:s.ONE_MINUS_CONSTANT_COLOR,[M_]:s.CONSTANT_ALPHA,[E_]:s.ONE_MINUS_CONSTANT_ALPHA};function J(q,be,fe,me,Ne,De,st,Ut,qt,xt){if(q===Mr){C===!0&&(Ae(s.BLEND),C=!1);return}if(C===!1&&(pe(s.BLEND),C=!0),q!==o_){if(q!==S||xt!==P){if((_!==Yr||w!==Yr)&&(s.blendEquation(s.FUNC_ADD),_=Yr,w=Yr),xt)switch(q){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}L=null,b=null,K=null,k=null,O.set(0,0,0),z=0,S=q,P=xt}return}Ne=Ne||be,De=De||fe,st=st||me,(be!==_||Ne!==w)&&(s.blendEquationSeparate(pt[be],pt[Ne]),_=be,w=Ne),(fe!==L||me!==b||De!==K||st!==k)&&(s.blendFuncSeparate(Nt[fe],Nt[me],Nt[De],Nt[st]),L=fe,b=me,K=De,k=st),(Ut.equals(O)===!1||qt!==z)&&(s.blendColor(Ut.r,Ut.g,Ut.b,qt),O.copy(Ut),z=qt),S=q,P=!1}function yn(q,be){q.side===Gi?Ae(s.CULL_FACE):pe(s.CULL_FACE);let fe=q.side===Fn;be&&(fe=!fe),ht(fe),q.blending===Vs&&q.transparent===!1?J(Mr):J(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const me=q.stencilWrite;f.setTest(me),me&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),At(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(q){A!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),A=q)}function ct(q){q!==r_?(pe(s.CULL_FACE),q!==B&&(q===Kp?s.cullFace(s.BACK):q===s_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),B=q}function Ke(q){q!==se&&(ee&&s.lineWidth(q),se=q)}function At(q,be,fe){q?(pe(s.POLYGON_OFFSET_FILL),(X!==be||D!==fe)&&(s.polygonOffset(be,fe),X=be,D=fe)):Ae(s.POLYGON_OFFSET_FILL)}function $e(q){q?pe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function I(q){q===void 0&&(q=s.TEXTURE0+te-1),H!==q&&(s.activeTexture(q),H=q)}function T(q,be,fe){fe===void 0&&(H===null?fe=s.TEXTURE0+te-1:fe=H);let me=Q[fe];me===void 0&&(me={type:void 0,texture:void 0},Q[fe]=me),(me.type!==q||me.texture!==be)&&(H!==fe&&(s.activeTexture(fe),H=fe),s.bindTexture(q,be||ve[q]),me.type=q,me.texture=be)}function oe(){const q=Q[H];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function et(q){de.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),de.copy(q))}function ze(q){Y.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Y.copy(q))}function ft(q,be){let fe=p.get(be);fe===void 0&&(fe=new WeakMap,p.set(be,fe));let me=fe.get(q);me===void 0&&(me=s.getUniformBlockIndex(be,q.name),fe.set(q,me))}function rt(q,be){const me=p.get(be).get(q);h.get(be)!==me&&(s.uniformBlockBinding(be,me,q.__bindingPointIndex),h.set(be,me))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},H=null,Q={},v={},x=new WeakMap,y=[],M=null,C=!1,S=null,_=null,L=null,b=null,w=null,K=null,k=null,O=new vt(0,0,0),z=0,P=!1,A=null,B=null,se=null,X=null,D=null,de.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:pe,disable:Ae,bindFramebuffer:Re,drawBuffers:Fe,useProgram:_t,setBlending:J,setMaterial:yn,setFlipSided:ht,setCullFace:ct,setLineWidth:Ke,setPolygonOffset:At,setScissorTest:$e,activeTexture:I,bindTexture:T,unbindTexture:oe,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:ke,texImage3D:Qe,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ut,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ue,scissor:et,viewport:ze,reset:Tt}}function qm(s,e,t,r){const a=XE(r);switch(t){case mg:return s*e;case vg:return s*e;case _g:return s*e*2;case xg:return s*e/a.components*a.byteLength;case rd:return s*e/a.components*a.byteLength;case yg:return s*e*2/a.components*a.byteLength;case sd:return s*e*2/a.components*a.byteLength;case gg:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case od:return s*e*4/a.components*a.byteLength;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:case Af:return Math.max(s,16)*Math.max(e,8)/4;case Ef:case Tf:return Math.max(s,8)*Math.max(e,8)/2;case Cf:case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sg:case jf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function XE(s){switch(s){case qi:case dg:return{byteLength:1,components:1};case jo:case hg:case Ko:return{byteLength:2,components:1};case nd:case id:return{byteLength:2,components:4};case Jr:case td:case Wi:return{byteLength:4,components:1};case pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function jE(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ge,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,T){return y?new OffscreenCanvas(I,T):kl("canvas")}function C(I,T,oe){let _e=1;const ye=$e(I);if((ye.width>oe||ye.height>oe)&&(_e=oe/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const he=Math.floor(_e*ye.width),We=Math.floor(_e*ye.height);v===void 0&&(v=M(he,We));const Pe=T?M(he,We):v;return Pe.width=he,Pe.height=We,Pe.getContext("2d").drawImage(I,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+We+")."),Pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),I;return I}function S(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,T,oe,_e,ye=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let he=T;if(T===s.RED&&(oe===s.FLOAT&&(he=s.R32F),oe===s.HALF_FLOAT&&(he=s.R16F),oe===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(oe===s.UNSIGNED_BYTE&&(he=s.R8UI),oe===s.UNSIGNED_SHORT&&(he=s.R16UI),oe===s.UNSIGNED_INT&&(he=s.R32UI),oe===s.BYTE&&(he=s.R8I),oe===s.SHORT&&(he=s.R16I),oe===s.INT&&(he=s.R32I)),T===s.RG&&(oe===s.FLOAT&&(he=s.RG32F),oe===s.HALF_FLOAT&&(he=s.RG16F),oe===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(oe===s.UNSIGNED_BYTE&&(he=s.RG8UI),oe===s.UNSIGNED_SHORT&&(he=s.RG16UI),oe===s.UNSIGNED_INT&&(he=s.RG32UI),oe===s.BYTE&&(he=s.RG8I),oe===s.SHORT&&(he=s.RG16I),oe===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(oe===s.UNSIGNED_BYTE&&(he=s.RGB8UI),oe===s.UNSIGNED_SHORT&&(he=s.RGB16UI),oe===s.UNSIGNED_INT&&(he=s.RGB32UI),oe===s.BYTE&&(he=s.RGB8I),oe===s.SHORT&&(he=s.RGB16I),oe===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(oe===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),oe===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),oe===s.UNSIGNED_INT&&(he=s.RGBA32UI),oe===s.BYTE&&(he=s.RGBA8I),oe===s.SHORT&&(he=s.RGBA16I),oe===s.INT&&(he=s.RGBA32I)),T===s.RGB&&oe===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),T===s.RGBA){const We=ye?Vl:St.getTransfer(_e);oe===s.FLOAT&&(he=s.RGBA32F),oe===s.HALF_FLOAT&&(he=s.RGBA16F),oe===s.UNSIGNED_BYTE&&(he=We===Pt?s.SRGB8_ALPHA8:s.RGBA8),oe===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),oe===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function w(I,T){let oe;return I?T===null||T===Jr||T===qs?oe=s.DEPTH24_STENCIL8:T===Wi?oe=s.DEPTH32F_STENCIL8:T===jo&&(oe=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Jr||T===qs?oe=s.DEPTH_COMPONENT24:T===Wi?oe=s.DEPTH_COMPONENT32F:T===jo&&(oe=s.DEPTH_COMPONENT16),oe}function K(I,T){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==hi&&I.minFilter!==Si?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function k(I){const T=I.target;T.removeEventListener("dispose",k),z(T),T.isVideoTexture&&g.delete(T)}function O(I){const T=I.target;T.removeEventListener("dispose",O),A(T)}function z(I){const T=r.get(I);if(T.__webglInit===void 0)return;const oe=I.source,_e=x.get(oe);if(_e){const ye=_e[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(I),Object.keys(_e).length===0&&x.delete(oe)}r.remove(I)}function P(I){const T=r.get(I);s.deleteTexture(T.__webglTexture);const oe=I.source,_e=x.get(oe);delete _e[T.__cacheKey],c.memory.textures--}function A(I){const T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let ye=0;ye<T.__webglFramebuffer[_e].length;ye++)s.deleteFramebuffer(T.__webglFramebuffer[_e][ye]);else s.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[_e]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const oe=I.textures;for(let _e=0,ye=oe.length;_e<ye;_e++){const he=r.get(oe[_e]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(oe[_e])}r.remove(I)}let B=0;function se(){B=0}function X(){const I=B;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),B+=1,I}function D(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function te(I,T){const oe=r.get(I);if(I.isVideoTexture&&Ke(I),I.isRenderTargetTexture===!1&&I.version>0&&oe.__version!==I.version){const _e=I.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(oe,I,T);return}}t.bindTexture(s.TEXTURE_2D,oe.__webglTexture,s.TEXTURE0+T)}function ee(I,T){const oe=r.get(I);if(I.version>0&&oe.__version!==I.version){Y(oe,I,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,oe.__webglTexture,s.TEXTURE0+T)}function ce(I,T){const oe=r.get(I);if(I.version>0&&oe.__version!==I.version){Y(oe,I,T);return}t.bindTexture(s.TEXTURE_3D,oe.__webglTexture,s.TEXTURE0+T)}function V(I,T){const oe=r.get(I);if(I.version>0&&oe.__version!==I.version){ie(oe,I,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture,s.TEXTURE0+T)}const H={[Xo]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[Mf]:s.MIRRORED_REPEAT},Q={[hi]:s.NEAREST,[D_]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Cc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},U={[F_]:s.NEVER,[H_]:s.ALWAYS,[O_]:s.LESS,[Eg]:s.LEQUAL,[k_]:s.EQUAL,[V_]:s.GEQUAL,[z_]:s.GREATER,[B_]:s.NOTEQUAL};function N(I,T){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Si||T.magFilter===Cc||T.magFilter===al||T.magFilter===Zr||T.minFilter===Si||T.minFilter===Cc||T.minFilter===al||T.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,H[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,H[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,H[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Q[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==al&&T.minFilter!==Zr||T.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function de(I,T){let oe=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",k));const _e=T.source;let ye=x.get(_e);ye===void 0&&(ye={},x.set(_e,ye));const he=D(T);if(he!==I.__cacheKey){ye[he]===void 0&&(ye[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,oe=!0),ye[he].usedTimes++;const We=ye[I.__cacheKey];We!==void 0&&(ye[I.__cacheKey].usedTimes--,We.usedTimes===0&&P(T)),I.__cacheKey=he,I.__webglTexture=ye[he].texture}return oe}function Y(I,T,oe){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const ye=de(I,T),he=T.source;t.bindTexture(_e,I.__webglTexture,s.TEXTURE0+oe);const We=r.get(he);if(he.version!==We.__version||ye===!0){t.activeTexture(s.TEXTURE0+oe);const Pe=St.getPrimaries(St.workingColorSpace),Ue=T.colorSpace===Sr?null:St.getPrimaries(T.colorSpace),ut=T.colorSpace===Sr||Pe===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ee=C(T.image,!1,a.maxTextureSize);Ee=At(T,Ee);const ke=l.convert(T.format,T.colorSpace),Qe=l.convert(T.type);let et=b(T.internalFormat,ke,Qe,T.colorSpace,T.isVideoTexture);N(_e,T);let ze;const ft=T.mipmaps,rt=T.isVideoTexture!==!0,Tt=We.__version===void 0||ye===!0,q=he.dataReady,be=K(T,Ee);if(T.isDepthTexture)et=w(T.format===Ys,T.type),Tt&&(rt?t.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ke,Qe,null));else if(T.isDataTexture)if(ft.length>0){rt&&Tt&&t.texStorage2D(s.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let fe=0,me=ft.length;fe<me;fe++)ze=ft[fe],rt?q&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,ke,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,fe,et,ze.width,ze.height,0,ke,Qe,ze.data);T.generateMipmaps=!1}else rt?(Tt&&t.texStorage2D(s.TEXTURE_2D,be,et,Ee.width,Ee.height),q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,Qe,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ke,Qe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,ft[0].width,ft[0].height,Ee.depth);for(let fe=0,me=ft.length;fe<me;fe++)if(ze=ft[fe],T.format!==di)if(ke!==null)if(rt){if(q)if(T.layerUpdates.size>0){const Ne=qm(ze.width,ze.height,T.format,T.type);for(const De of T.layerUpdates){const st=ze.data.subarray(De*Ne/ze.data.BYTES_PER_ELEMENT,(De+1)*Ne/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,De,ze.width,ze.height,1,ke,st)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ze.width,ze.height,Ee.depth,ke,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,et,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ze.width,ze.height,Ee.depth,ke,Qe,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,et,ze.width,ze.height,Ee.depth,0,ke,Qe,ze.data)}else{rt&&Tt&&t.texStorage2D(s.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let fe=0,me=ft.length;fe<me;fe++)ze=ft[fe],T.format!==di?ke!==null?rt?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?q&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,ke,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,fe,et,ze.width,ze.height,0,ke,Qe,ze.data)}else if(T.isDataArrayTexture)if(rt){if(Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,Ee.width,Ee.height,Ee.depth),q)if(T.layerUpdates.size>0){const fe=qm(Ee.width,Ee.height,T.format,T.type);for(const me of T.layerUpdates){const Ne=Ee.data.subarray(me*fe/Ee.data.BYTES_PER_ELEMENT,(me+1)*fe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Ee.width,Ee.height,1,ke,Qe,Ne)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Qe,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,ke,Qe,Ee.data);else if(T.isData3DTexture)rt?(Tt&&t.texStorage3D(s.TEXTURE_3D,be,et,Ee.width,Ee.height,Ee.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Qe,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,ke,Qe,Ee.data);else if(T.isFramebufferTexture){if(Tt)if(rt)t.texStorage2D(s.TEXTURE_2D,be,et,Ee.width,Ee.height);else{let fe=Ee.width,me=Ee.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,et,fe,me,0,ke,Qe,null),fe>>=1,me>>=1}}else if(ft.length>0){if(rt&&Tt){const fe=$e(ft[0]);t.texStorage2D(s.TEXTURE_2D,be,et,fe.width,fe.height)}for(let fe=0,me=ft.length;fe<me;fe++)ze=ft[fe],rt?q&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ke,Qe,ze):t.texImage2D(s.TEXTURE_2D,fe,et,ke,Qe,ze);T.generateMipmaps=!1}else if(rt){if(Tt){const fe=$e(Ee);t.texStorage2D(s.TEXTURE_2D,be,et,fe.width,fe.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Qe,Ee)}else t.texImage2D(s.TEXTURE_2D,0,et,ke,Qe,Ee);S(T)&&_(_e),We.__version=he.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ie(I,T,oe){if(T.image.length!==6)return;const _e=de(I,T),ye=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+oe);const he=r.get(ye);if(ye.version!==he.__version||_e===!0){t.activeTexture(s.TEXTURE0+oe);const We=St.getPrimaries(St.workingColorSpace),Pe=T.colorSpace===Sr?null:St.getPrimaries(T.colorSpace),Ue=T.colorSpace===Sr||We===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let me=0;me<6;me++)!ut&&!Ee?ke[me]=C(T.image[me],!0,a.maxCubemapSize):ke[me]=Ee?T.image[me].image:T.image[me],ke[me]=At(T,ke[me]);const Qe=ke[0],et=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),ft=b(T.internalFormat,et,ze,T.colorSpace),rt=T.isVideoTexture!==!0,Tt=he.__version===void 0||_e===!0,q=ye.dataReady;let be=K(T,Qe);N(s.TEXTURE_CUBE_MAP,T);let fe;if(ut){rt&&Tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ft,Qe.width,Qe.height);for(let me=0;me<6;me++){fe=ke[me].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const De=fe[Ne];T.format!==di?et!==null?rt?q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,0,0,De.width,De.height,et,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,ft,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,0,0,De.width,De.height,et,ze,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,ft,De.width,De.height,0,et,ze,De.data)}}}else{if(fe=T.mipmaps,rt&&Tt){fe.length>0&&be++;const me=$e(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ft,me.width,me.height)}for(let me=0;me<6;me++)if(Ee){rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke[me].width,ke[me].height,et,ze,ke[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,ke[me].width,ke[me].height,0,et,ze,ke[me].data);for(let Ne=0;Ne<fe.length;Ne++){const st=fe[Ne].image[me].image;rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,0,0,st.width,st.height,et,ze,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,ft,st.width,st.height,0,et,ze,st.data)}}else{rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,et,ze,ke[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,et,ze,ke[me]);for(let Ne=0;Ne<fe.length;Ne++){const De=fe[Ne];rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,0,0,et,ze,De.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,ft,et,ze,De.image[me])}}}S(T)&&_(s.TEXTURE_CUBE_MAP),he.__version=ye.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ve(I,T,oe,_e,ye,he){const We=l.convert(oe.format,oe.colorSpace),Pe=l.convert(oe.type),Ue=b(oe.internalFormat,We,Pe,oe.colorSpace),ut=r.get(T),Ee=r.get(oe);if(Ee.__renderTarget=T,!ut.__hasExternalTextures){const ke=Math.max(1,T.width>>he),Qe=Math.max(1,T.height>>he);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,he,Ue,ke,Qe,T.depth,0,We,Pe,null):t.texImage2D(ye,he,Ue,ke,Qe,0,We,Pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ye,Ee.__webglTexture,0,ht(T)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,ye,Ee.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(I,T,oe){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const _e=T.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,he=w(T.stencilBuffer,ye),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=ht(T);ct(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,he,T.width,T.height):oe?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,I)}else{const _e=T.textures;for(let ye=0;ye<_e.length;ye++){const he=_e[ye],We=l.convert(he.format,he.colorSpace),Pe=l.convert(he.type),Ue=b(he.internalFormat,We,Pe,he.colorSpace),ut=ht(T);oe&&ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Ue,T.width,T.height):ct(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(T.depthTexture);_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te(T.depthTexture,0);const ye=_e.__webglTexture,he=ht(T);if(T.depthTexture.format===Hs)ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(T.depthTexture.format===Ys)ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Re(I){const T=r.get(I),oe=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const _e=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=_e}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,I)}else if(oe){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=s.createRenderbuffer(),pe(T.__webglDepthbuffer[_e],I,!1);else{const ye=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),pe(T.__webglDepthbuffer,I,!1);else{const _e=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ye)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(I,T,oe){const _e=r.get(I);T!==void 0&&ve(_e.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),oe!==void 0&&Re(I)}function _t(I){const T=I.texture,oe=r.get(I),_e=r.get(T);I.addEventListener("dispose",O);const ye=I.textures,he=I.isWebGLCubeRenderTarget===!0,We=ye.length>1;if(We||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,c.memory.textures++),he){oe.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){oe.__webglFramebuffer[Pe]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)oe.__webglFramebuffer[Pe][Ue]=s.createFramebuffer()}else oe.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)oe.__webglFramebuffer[Pe]=s.createFramebuffer()}else oe.__webglFramebuffer=s.createFramebuffer();if(We)for(let Pe=0,Ue=ye.length;Pe<Ue;Pe++){const ut=r.get(ye[Pe]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&ct(I)===!1){oe.__webglMultisampledFramebuffer=s.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ye.length;Pe++){const Ue=ye[Pe];oe.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,oe.__webglColorRenderbuffer[Pe]);const ut=l.convert(Ue.format,Ue.colorSpace),Ee=l.convert(Ue.type),ke=b(Ue.internalFormat,ut,Ee,Ue.colorSpace,I.isXRRenderTarget===!0),Qe=ht(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,ke,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(oe.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(oe.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),N(s.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ve(oe.__webglFramebuffer[Pe][Ue],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ue);else ve(oe.__webglFramebuffer[Pe],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Pe=0,Ue=ye.length;Pe<Ue;Pe++){const ut=ye[Pe],Ee=r.get(ut);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),N(s.TEXTURE_2D,ut),ve(oe.__webglFramebuffer,I,ut,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),S(ut)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,_e.__webglTexture),N(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ve(oe.__webglFramebuffer[Ue],I,T,s.COLOR_ATTACHMENT0,Pe,Ue);else ve(oe.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,Pe,0);S(T)&&_(Pe),t.unbindTexture()}I.depthBuffer&&Re(I)}function pt(I){const T=I.textures;for(let oe=0,_e=T.length;oe<_e;oe++){const ye=T[oe];if(S(ye)){const he=L(I),We=r.get(ye).__webglTexture;t.bindTexture(he,We),_(he),t.unbindTexture()}}}const Nt=[],J=[];function yn(I){if(I.samples>0){if(ct(I)===!1){const T=I.textures,oe=I.width,_e=I.height;let ye=s.COLOR_BUFFER_BIT;const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(I),Pe=T.length>1;if(Pe)for(let Ue=0;Ue<T.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,oe,_e,0,0,oe,_e,ye,s.NEAREST),h===!0&&(Nt.length=0,J.length=0,Nt.push(s.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push(he),J.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,J)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Ue=0;Ue<T.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=r.get(T[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ht(I){return Math.min(a.maxSamples,I.samples)}function ct(I){const T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(I){const T=c.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function At(I,T){const oe=I.colorSpace,_e=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||oe!==Ks&&oe!==Sr&&(St.getTransfer(oe)===Pt?(_e!==di||ye!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),T}function $e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=X,this.resetTextureUnits=se,this.setTexture2D=te,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=V,this.rebindTextures=Fe,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ct}function qE(s,e){function t(r,a=Sr){let l;const c=St.getTransfer(a);if(r===qi)return s.UNSIGNED_BYTE;if(r===nd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===id)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===dg)return s.BYTE;if(r===hg)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===td)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===Ko)return s.HALF_FLOAT;if(r===mg)return s.ALPHA;if(r===gg)return s.RGB;if(r===di)return s.RGBA;if(r===vg)return s.LUMINANCE;if(r===_g)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===Ys)return s.DEPTH_STENCIL;if(r===xg)return s.RED;if(r===rd)return s.RED_INTEGER;if(r===yg)return s.RG;if(r===sd)return s.RG_INTEGER;if(r===od)return s.RGBA_INTEGER;if(r===Ll||r===Dl||r===Nl||r===Il)if(c===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ll)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ll)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ef||r===wf||r===Tf||r===Af)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ef)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Af)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cf||r===Rf||r===Pf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Cf||r===Rf)return c===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Pf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bf||r===Lf||r===Df||r===Nf||r===If||r===Uf||r===Ff||r===Of||r===kf||r===zf||r===Bf||r===Vf||r===Hf||r===Gf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===bf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Df)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===If)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ff)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Of)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===Wf||r===Xf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ul)return c===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sg||r===jf||r===qf||r===Yf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ul)return l.COMPRESSED_RED_RGTC1_EXT;if(r===jf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class YE extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vo extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $E={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,r),_=this._getHandJoint(p,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent($E)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Vo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Tr({vertexShader:KE,fragmentShader:ZE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new ea(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QE extends Zs{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,v=null,x=null,y=null,M=null;const C=new JE,S=t.getContextAttributes();let _=null,L=null;const b=[],w=[],K=new Ge;let k=null;const O=new Gn;O.viewport=new bt;const z=new Gn;z.viewport=new bt;const P=[O,z],A=new YE;let B=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=b[Y];return ie===void 0&&(ie=new nf,b[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=b[Y];return ie===void 0&&(ie=new nf,b[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=b[Y];return ie===void 0&&(ie=new nf,b[Y]=ie),ie.getHandSpace()};function X(Y){const ie=w.indexOf(Y.inputSource);if(ie===-1)return;const ve=b[ie];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,p||c),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function D(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",D),a.removeEventListener("inputsourceschange",te);for(let Y=0;Y<b.length;Y++){const ie=w[Y];ie!==null&&(w[Y]=null,b[Y].disconnect(ie))}B=null,se=null,C.reset(),e.setRenderTarget(_),y=null,x=null,v=null,a=null,L=null,de.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",D),a.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(K),a.renderState.layers===void 0){const ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Qr(y.framebufferWidth,y.framebufferHeight,{format:di,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ie=null,ve=null,pe=null;S.depth&&(pe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?Ys:Hs,ve=S.stencil?qs:Jr);const Ae={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:l};v=new XRWebGLBinding(a,t),x=v.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Qr(x.textureWidth,x.textureHeight,{format:di,type:qi,depthTexture:new Og(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),de.setContext(a),de.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function te(Y){for(let ie=0;ie<Y.removed.length;ie++){const ve=Y.removed[ie],pe=w.indexOf(ve);pe>=0&&(w[pe]=null,b[pe].disconnect(ve))}for(let ie=0;ie<Y.added.length;ie++){const ve=Y.added[ie];let pe=w.indexOf(ve);if(pe===-1){for(let Re=0;Re<b.length;Re++)if(Re>=w.length){w.push(ve),pe=Re;break}else if(w[Re]===null){w[Re]=ve,pe=Re;break}if(pe===-1)break}const Ae=b[pe];Ae&&Ae.connect(ve)}}const ee=new j,ce=new j;function V(Y,ie,ve){ee.setFromMatrixPosition(ie.matrixWorld),ce.setFromMatrixPosition(ve.matrixWorld);const pe=ee.distanceTo(ce),Ae=ie.projectionMatrix.elements,Re=ve.projectionMatrix.elements,Fe=Ae[14]/(Ae[10]-1),_t=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],Nt=(Ae[9]-1)/Ae[5],J=(Ae[8]-1)/Ae[0],yn=(Re[8]+1)/Re[0],ht=Fe*J,ct=Fe*yn,Ke=pe/(-J+yn),At=Ke*-J;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(At),Y.translateZ(Ke),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const $e=Fe+Ke,I=_t+Ke,T=ht-At,oe=ct+(pe-At),_e=pt*_t/I*$e,ye=Nt*_t/I*$e;Y.projectionMatrix.makePerspective(T,oe,_e,ye,$e,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function H(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let ie=Y.near,ve=Y.far;C.texture!==null&&(C.depthNear>0&&(ie=C.depthNear),C.depthFar>0&&(ve=C.depthFar)),A.near=z.near=O.near=ie,A.far=z.far=O.far=ve,(B!==A.near||se!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,se=A.far),O.layers.mask=Y.layers.mask|2,z.layers.mask=Y.layers.mask|4,A.layers.mask=O.layers.mask|z.layers.mask;const pe=Y.parent,Ae=A.cameras;H(A,pe);for(let Re=0;Re<Ae.length;Re++)H(Ae[Re],pe);Ae.length===2?V(A,O,z):A.projectionMatrix.copy(O.projectionMatrix),Q(Y,A,pe)};function Q(Y,ie,ve){ve===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$f*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return h},this.setFoveation=function(Y){h=Y,x!==null&&(x.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let U=null;function N(Y,ie){if(g=ie.getViewerPose(p||c),M=ie,g!==null){const ve=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let pe=!1;ve.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let Re=0;Re<ve.length;Re++){const Fe=ve[Re];let _t=null;if(y!==null)_t=y.getViewport(Fe);else{const Nt=v.getViewSubImage(x,Fe);_t=Nt.viewport,Re===0&&(e.setRenderTargetTextures(L,Nt.colorTexture,x.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(L))}let pt=P[Re];pt===void 0&&(pt=new Gn,pt.layers.enable(Re),pt.viewport=new bt,P[Re]=pt),pt.matrix.fromArray(Fe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Fe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(_t.x,_t.y,_t.width,_t.height),Re===0&&(A.matrix.copy(pt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(pt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Re=v.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&C.init(e,Re,a.renderState)}}for(let ve=0;ve<b.length;ve++){const pe=w[ve],Ae=b[ve];pe!==null&&Ae!==void 0&&Ae.update(pe,ie,p||c)}U&&U(Y,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),M=null}const de=new Ug;de.setAnimationLoop(N),this.setAnimationLoop=function(Y){U=Y},this.dispose=function(){}}}const Xr=new Ei,e1=new zt;function t1(s,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Dg(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,L,b,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),v(S,_)):_.isMeshPhongMaterial?(l(S,_),g(S,_)):_.isMeshStandardMaterial?(l(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,w)):_.isMeshMatcapMaterial?(l(S,_),M(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),C(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?h(S,_,L,b):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Fn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Fn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),b=L.envMap,w=L.envMapRotation;b&&(S.envMap.value=b,Xr.copy(w),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),S.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(Xr)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,L,b){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=b*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function n1(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,b){const w=b.program;r.uniformBlockBinding(L,w)}function p(L,b){let w=a[L.id];w===void 0&&(M(L),w=g(L),a[L.id]=w,L.addEventListener("dispose",S));const K=b.program;r.updateUBOMapping(L,K);const k=e.render.frame;l[L.id]!==k&&(x(L),l[L.id]=k)}function g(L){const b=v();L.__bindingPointIndex=b;const w=s.createBuffer(),K=L.__size,k=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,K,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,w),w}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const b=a[L.id],w=L.uniforms,K=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let k=0,O=w.length;k<O;k++){const z=Array.isArray(w[k])?w[k]:[w[k]];for(let P=0,A=z.length;P<A;P++){const B=z[P];if(y(B,k,P,K)===!0){const se=B.__offset,X=Array.isArray(B.value)?B.value:[B.value];let D=0;for(let te=0;te<X.length;te++){const ee=X[te],ce=C(ee);typeof ee=="number"||typeof ee=="boolean"?(B.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,se+D,B.__data)):ee.isMatrix3?(B.__data[0]=ee.elements[0],B.__data[1]=ee.elements[1],B.__data[2]=ee.elements[2],B.__data[3]=0,B.__data[4]=ee.elements[3],B.__data[5]=ee.elements[4],B.__data[6]=ee.elements[5],B.__data[7]=0,B.__data[8]=ee.elements[6],B.__data[9]=ee.elements[7],B.__data[10]=ee.elements[8],B.__data[11]=0):(ee.toArray(B.__data,D),D+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,b,w,K){const k=L.value,O=b+"_"+w;if(K[O]===void 0)return typeof k=="number"||typeof k=="boolean"?K[O]=k:K[O]=k.clone(),!0;{const z=K[O];if(typeof k=="number"||typeof k=="boolean"){if(z!==k)return K[O]=k,!0}else if(z.equals(k)===!1)return z.copy(k),!0}return!1}function M(L){const b=L.uniforms;let w=0;const K=16;for(let O=0,z=b.length;O<z;O++){const P=Array.isArray(b[O])?b[O]:[b[O]];for(let A=0,B=P.length;A<B;A++){const se=P[A],X=Array.isArray(se.value)?se.value:[se.value];for(let D=0,te=X.length;D<te;D++){const ee=X[D],ce=C(ee),V=w%K,H=V%ce.boundary,Q=V+H;w+=H,Q!==0&&K-Q<ce.storage&&(w+=K-Q),se.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=w,w+=ce.storage}}}const k=w%K;return k>0&&(w+=K-k),L.__size=w,L.__cache={},this}function C(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function S(L){const b=L.target;b.removeEventListener("dispose",S);const w=c.indexOf(b.__bindingPointIndex);c.splice(w,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function _(){for(const L in a)s.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:h,update:p,dispose:_}}class i1{constructor(e={}){const{canvas:t=W_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),C=new Int32Array(4);let S=null,_=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Er,this.toneMappingExposure=1;const w=this;let K=!1,k=0,O=0,z=null,P=-1,A=null;const B=new bt,se=new bt;let X=null;const D=new vt(0);let te=0,ee=t.width,ce=t.height,V=1,H=null,Q=null;const U=new bt(0,0,ee,ce),N=new bt(0,0,ee,ce);let de=!1;const Y=new ld;let ie=!1,ve=!1;const pe=new zt,Ae=new zt,Re=new j,Fe=new bt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return z===null?V:1}let J=r;function yn(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ed}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),J===null){const $="webgl2";if(J=yn($,R),J===null)throw yn($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ht,ct,Ke,At,$e,I,T,oe,_e,ye,he,We,Pe,Ue,ut,Ee,ke,Qe,et,ze,ft,rt,Tt,q;function be(){ht=new lM(J),ht.init(),rt=new qE(J,ht),ct=new nM(J,ht,e,rt),Ke=new WE(J,ht),ct.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),At=new fM(J),$e=new PE,I=new jE(J,ht,Ke,$e,ct,rt,At),T=new rM(w),oe=new aM(w),_e=new _x(J),Tt=new eM(J,_e),ye=new uM(J,_e,At,Tt),he=new hM(J,ye,_e,At),et=new dM(J,ct,I),Ee=new iM($e),We=new RE(w,T,oe,ht,ct,Tt,Ee),Pe=new t1(w,$e),Ue=new LE,ut=new OE(ht),Qe=new QS(w,T,oe,Ke,he,y,h),ke=new HE(w,he,ct),q=new n1(J,At,ct,Ke),ze=new tM(J,ht,At),ft=new cM(J,ht,At),At.programs=We.programs,w.capabilities=ct,w.extensions=ht,w.properties=$e,w.renderLists=Ue,w.shadowMap=ke,w.state=Ke,w.info=At}be();const fe=new QE(w,J);this.xr=fe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(ee,ce,!1))},this.getSize=function(R){return R.set(ee,ce)},this.setSize=function(R,$,le=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,ce=$,t.width=Math.floor(R*V),t.height=Math.floor($*V),le===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(ee*V,ce*V).floor()},this.setDrawingBufferSize=function(R,$,le){ee=R,ce=$,V=le,t.width=Math.floor(R*le),t.height=Math.floor($*le),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,$,le,ue){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,$,le,ue),Ke.viewport(B.copy(U).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,$,le,ue){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,$,le,ue),Ke.scissor(se.copy(N).multiplyScalar(V).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(R){Ke.setScissorTest(de=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(R=!0,$=!0,le=!0){let ue=0;if(R){let Z=!1;if(z!==null){const Ce=z.texture.format;Z=Ce===od||Ce===sd||Ce===rd}if(Z){const Ce=z.texture.type,we=Ce===qi||Ce===Jr||Ce===jo||Ce===qs||Ce===nd||Ce===id,Xe=Qe.getClearColor(),Ve=Qe.getClearAlpha(),tt=Xe.r,it=Xe.g,je=Xe.b;we?(M[0]=tt,M[1]=it,M[2]=je,M[3]=Ve,J.clearBufferuiv(J.COLOR,0,M)):(C[0]=tt,C[1]=it,C[2]=je,C[3]=Ve,J.clearBufferiv(J.COLOR,0,C))}else ue|=J.COLOR_BUFFER_BIT}$&&(ue|=J.DEPTH_BUFFER_BIT),le&&(ue|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ue.dispose(),ut.dispose(),$e.dispose(),T.dispose(),oe.dispose(),he.dispose(),Tt.dispose(),q.dispose(),We.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ts),fe.removeEventListener("sessionend",Yi),Ai.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const R=At.autoReset,$=ke.enabled,le=ke.autoUpdate,ue=ke.needsUpdate,Z=ke.type;be(),At.autoReset=R,ke.enabled=$,ke.autoUpdate=le,ke.needsUpdate=ue,ke.type=Z}function De(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){const $=R.target;$.removeEventListener("dispose",st),Ut($)}function Ut(R){qt(R),$e.remove(R)}function qt(R){const $=$e.get(R).programs;$!==void 0&&($.forEach(function(le){We.releaseProgram(le)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,le,ue,Z,Ce){$===null&&($=_t);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,Xe=ia(R,$,le,ue,Z);Ke.setMaterial(ue,we);let Ve=le.index,tt=1;if(ue.wireframe===!0){if(Ve=ye.getWireframeAttribute(le),Ve===void 0)return;tt=2}const it=le.drawRange,je=le.attributes.position;let gt=it.start*tt,wt=(it.start+it.count)*tt;Ce!==null&&(gt=Math.max(gt,Ce.start*tt),wt=Math.min(wt,(Ce.start+Ce.count)*tt)),Ve!==null?(gt=Math.max(gt,0),wt=Math.min(wt,Ve.count)):je!=null&&(gt=Math.max(gt,0),wt=Math.min(wt,je.count));const mt=wt-gt;if(mt<0||mt===1/0)return;Tt.setup(Z,ue,Xe,le,Ve);let ln,ot=ze;if(Ve!==null&&(ln=_e.get(Ve),ot=ft,ot.setIndex(ln)),Z.isMesh)ue.wireframe===!0?(Ke.setLineWidth(ue.wireframeLinewidth*Nt()),ot.setMode(J.LINES)):ot.setMode(J.TRIANGLES);else if(Z.isLine){let Ye=ue.linewidth;Ye===void 0&&(Ye=1),Ke.setLineWidth(Ye*Nt()),Z.isLineSegments?ot.setMode(J.LINES):Z.isLineLoop?ot.setMode(J.LINE_LOOP):ot.setMode(J.LINE_STRIP)}else Z.isPoints?ot.setMode(J.POINTS):Z.isSprite&&ot.setMode(J.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ot.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ot.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ye=Z._multiDrawStarts,ei=Z._multiDrawCounts,Mt=Z._multiDrawCount,un=Ve?_e.get(Ve).bytesPerElement:1,ti=$e.get(ue).currentProgram.getUniforms();for(let Yt=0;Yt<Mt;Yt++)ti.setValue(J,"_gl_DrawID",Yt),ot.render(Ye[Yt]/un,ei[Yt])}else if(Z.isInstancedMesh)ot.renderInstances(gt,mt,Z.count);else if(le.isInstancedBufferGeometry){const Ye=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,ei=Math.min(le.instanceCount,Ye);ot.renderInstances(gt,mt,ei)}else ot.render(gt,mt)};function xt(R,$,le){R.transparent===!0&&R.side===Gi&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,ns(R,$,le),R.side=wr,R.needsUpdate=!0,ns(R,$,le),R.side=Gi):ns(R,$,le)}this.compile=function(R,$,le=null){le===null&&(le=R),_=ut.get(le),_.init($),b.push(_),le.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==le&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const ue=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ce=Z.material;if(Ce)if(Array.isArray(Ce))for(let we=0;we<Ce.length;we++){const Xe=Ce[we];xt(Xe,le,Z),ue.add(Xe)}else xt(Ce,le,Z),ue.add(Ce)}),b.pop(),_=null,ue},this.compileAsync=function(R,$,le=null){const ue=this.compile(R,$,le);return new Promise(Z=>{function Ce(){if(ue.forEach(function(we){$e.get(we).currentProgram.isReady()&&ue.delete(we)}),ue.size===0){Z(R);return}setTimeout(Ce,10)}ht.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Cn=null;function Sn(R){Cn&&Cn(R)}function ts(){Ai.stop()}function Yi(){Ai.start()}const Ai=new Ug;Ai.setAnimationLoop(Sn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){Cn=R,fe.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},fe.addEventListener("sessionstart",ts),fe.addEventListener("sessionend",Yi),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera($),$=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,$,z),_=ut.get(R,b.length),_.init($),b.push(_),Ae.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,ie=Ee.init(this.clippingPlanes,ve),S=Ue.get(R,L.length),S.init(),L.push(S),fe.enabled===!0&&fe.isPresenting===!0){const Ce=w.xr.getDepthSensingMesh();Ce!==null&&Ci(Ce,$,-1/0,w.sortObjects)}Ci(R,$,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(H,Q),pt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,pt&&Qe.addToRenderList(S,R),this.info.render.frame++,ie===!0&&Ee.beginShadows();const le=_.state.shadowsArray;ke.render(le,R,$),ie===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,Z=S.transmissive;if(_.setupLights(),$.isArrayCamera){const Ce=$.cameras;if(Z.length>0)for(let we=0,Xe=Ce.length;we<Xe;we++){const Ve=Ce[we];Cr(ue,Z,R,Ve)}pt&&Qe.render(R);for(let we=0,Xe=Ce.length;we<Xe;we++){const Ve=Ce[we];Ar(S,R,Ve,Ve.viewport)}}else Z.length>0&&Cr(ue,Z,R,$),pt&&Qe.render(R),Ar(S,R,$);z!==null&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(w,R,$),Tt.resetDefaultState(),P=-1,A=null,b.pop(),b.length>0?(_=b[b.length-1],ie===!0&&Ee.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ci(R,$,le,ue){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){ue&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);const we=he.update(R),Xe=R.material;Xe.visible&&S.push(R,we,Xe,le,Fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const we=he.update(R),Xe=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Fe.copy(we.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray(Xe)){const Ve=we.groups;for(let tt=0,it=Ve.length;tt<it;tt++){const je=Ve[tt],gt=Xe[je.materialIndex];gt&&gt.visible&&S.push(R,we,gt,le,Fe.z,je)}}else Xe.visible&&S.push(R,we,Xe,le,Fe.z,null)}}const Ce=R.children;for(let we=0,Xe=Ce.length;we<Xe;we++)Ci(Ce[we],$,le,ue)}function Ar(R,$,le,ue){const Z=R.opaque,Ce=R.transmissive,we=R.transparent;_.setupLightsView(le),ie===!0&&Ee.setGlobalState(w.clippingPlanes,le),ue&&Ke.viewport(B.copy(ue)),Z.length>0&&$i(Z,$,le),Ce.length>0&&$i(Ce,$,le),we.length>0&&$i(we,$,le),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Cr(R,$,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ue.id]===void 0&&(_.state.transmissionRenderTarget[ue.id]=new Qr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ko:qi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ce=_.state.transmissionRenderTarget[ue.id],we=ue.viewport||B;Ce.setSize(we.z,we.w);const Xe=w.getRenderTarget();w.setRenderTarget(Ce),w.getClearColor(D),te=w.getClearAlpha(),te<1&&w.setClearColor(16777215,.5),w.clear(),pt&&Qe.render(le);const Ve=w.toneMapping;w.toneMapping=Er;const tt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),_.setupLightsView(ue),ie===!0&&Ee.setGlobalState(w.clippingPlanes,ue),$i(R,le,ue),I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let je=0,gt=$.length;je<gt;je++){const wt=$[je],mt=wt.object,ln=wt.geometry,ot=wt.material,Ye=wt.group;if(ot.side===Gi&&mt.layers.test(ue.layers)){const ei=ot.side;ot.side=Fn,ot.needsUpdate=!0,ta(mt,le,ue,ln,ot,Ye),ot.side=ei,ot.needsUpdate=!0,it=!0}}it===!0&&(I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce))}w.setRenderTarget(Xe),w.setClearColor(D,te),tt!==void 0&&(ue.viewport=tt),w.toneMapping=Ve}function $i(R,$,le){const ue=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,Ce=R.length;Z<Ce;Z++){const we=R[Z],Xe=we.object,Ve=we.geometry,tt=ue===null?we.material:ue,it=we.group;Xe.layers.test(le.layers)&&ta(Xe,$,le,Ve,tt,it)}}function ta(R,$,le,ue,Z,Ce){R.onBeforeRender(w,$,le,ue,Z,Ce),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,$,le,ue,R,Ce),Z.transparent===!0&&Z.side===Gi&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,w.renderBufferDirect(le,$,ue,Z,R,Ce),Z.side=wr,Z.needsUpdate=!0,w.renderBufferDirect(le,$,ue,Z,R,Ce),Z.side=Gi):w.renderBufferDirect(le,$,ue,Z,R,Ce),R.onAfterRender(w,$,le,ue,Z,Ce)}function ns(R,$,le){$.isScene!==!0&&($=_t);const ue=$e.get(R),Z=_.state.lights,Ce=_.state.shadowsArray,we=Z.state.version,Xe=We.getParameters(R,Z.state,Ce,$,le),Ve=We.getProgramCacheKey(Xe);let tt=ue.programs;ue.environment=R.isMeshStandardMaterial?$.environment:null,ue.fog=$.fog,ue.envMap=(R.isMeshStandardMaterial?oe:T).get(R.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",st),tt=new Map,ue.programs=tt);let it=tt.get(Ve);if(it!==void 0){if(ue.currentProgram===it&&ue.lightsStateVersion===we)return pi(R,Xe),it}else Xe.uniforms=We.getUniforms(R),R.onBeforeCompile(Xe,w),it=We.acquireProgram(Xe,Ve),tt.set(Ve,it),ue.uniforms=Xe.uniforms;const je=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Ee.uniform),pi(R,Xe),ue.needsLights=Wl(R),ue.lightsStateVersion=we,ue.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),ue.currentProgram=it,ue.uniformsList=null,it}function na(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Fl.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function pi(R,$){const le=$e.get(R);le.outputColorSpace=$.outputColorSpace,le.batching=$.batching,le.batchingColor=$.batchingColor,le.instancing=$.instancing,le.instancingColor=$.instancingColor,le.instancingMorph=$.instancingMorph,le.skinning=$.skinning,le.morphTargets=$.morphTargets,le.morphNormals=$.morphNormals,le.morphColors=$.morphColors,le.morphTargetsCount=$.morphTargetsCount,le.numClippingPlanes=$.numClippingPlanes,le.numIntersection=$.numClipIntersection,le.vertexAlphas=$.vertexAlphas,le.vertexTangents=$.vertexTangents,le.toneMapping=$.toneMapping}function ia(R,$,le,ue,Z){$.isScene!==!0&&($=_t),I.resetTextureUnits();const Ce=$.fog,we=ue.isMeshStandardMaterial?$.environment:null,Xe=z===null?w.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ks,Ve=(ue.isMeshStandardMaterial?oe:T).get(ue.envMap||we),tt=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,it=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),je=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,wt=!!le.morphAttributes.color;let mt=Er;ue.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(mt=w.toneMapping);const ln=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ot=ln!==void 0?ln.length:0,Ye=$e.get(ue),ei=_.state.lights;if(ie===!0&&(ve===!0||R!==A)){const Mn=R===A&&ue.id===P;Ee.setState(ue,R,Mn)}let Mt=!1;ue.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ei.state.version||Ye.outputColorSpace!==Xe||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==Ve||ue.fog===!0&&Ye.fog!==Ce||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==it||Ye.morphTargets!==je||Ye.morphNormals!==gt||Ye.morphColors!==wt||Ye.toneMapping!==mt||Ye.morphTargetsCount!==ot)&&(Mt=!0):(Mt=!0,Ye.__version=ue.version);let un=Ye.currentProgram;Mt===!0&&(un=ns(ue,$,Z));let ti=!1,Yt=!1,mi=!1;const Lt=un.getUniforms(),Wn=Ye.uniforms;if(Ke.useProgram(un.program)&&(ti=!0,Yt=!0,mi=!0),ue.id!==P&&(P=ue.id,Yt=!0),ti||A!==R){Ke.buffers.depth.getReversed()?(pe.copy(R.projectionMatrix),j_(pe),q_(pe),Lt.setValue(J,"projectionMatrix",pe)):Lt.setValue(J,"projectionMatrix",R.projectionMatrix),Lt.setValue(J,"viewMatrix",R.matrixWorldInverse);const Xn=Lt.map.cameraPosition;Xn!==void 0&&Xn.setValue(J,Re.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&Lt.setValue(J,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Lt.setValue(J,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Yt=!0,mi=!0)}if(Z.isSkinnedMesh){Lt.setOptional(J,Z,"bindMatrix"),Lt.setOptional(J,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Lt.setValue(J,"boneTexture",Mn.boneTexture,I))}Z.isBatchedMesh&&(Lt.setOptional(J,Z,"batchingTexture"),Lt.setValue(J,"batchingTexture",Z._matricesTexture,I),Lt.setOptional(J,Z,"batchingIdTexture"),Lt.setValue(J,"batchingIdTexture",Z._indirectTexture,I),Lt.setOptional(J,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Lt.setValue(J,"batchingColorTexture",Z._colorsTexture,I));const Ri=le.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&et.update(Z,le,un),(Yt||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,Lt.setValue(J,"receiveShadow",Z.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Wn.envMap.value=Ve,Wn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&$.environment!==null&&(Wn.envMapIntensity.value=$.environmentIntensity),Yt&&(Lt.setValue(J,"toneMappingExposure",w.toneMappingExposure),Ye.needsLights&&ra(Wn,mi),Ce&&ue.fog===!0&&Pe.refreshFogUniforms(Wn,Ce),Pe.refreshMaterialUniforms(Wn,ue,V,ce,_.state.transmissionRenderTarget[R.id]),Fl.upload(J,na(Ye),Wn,I)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Fl.upload(J,na(Ye),Wn,I),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Lt.setValue(J,"center",Z.center),Lt.setValue(J,"modelViewMatrix",Z.modelViewMatrix),Lt.setValue(J,"normalMatrix",Z.normalMatrix),Lt.setValue(J,"modelMatrix",Z.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Mn=ue.uniformsGroups;for(let Xn=0,Rn=Mn.length;Xn<Rn;Xn++){const sa=Mn[Xn];q.update(sa,un),q.bind(sa,un)}}return un}function ra(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Wl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,$,le){$e.get(R.texture).__webglTexture=$,$e.get(R.depthTexture).__webglTexture=le;const ue=$e.get(R);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const le=$e.get(R);le.__webglFramebuffer=$,le.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,le=0){z=R,k=$,O=le;let ue=!0,Z=null,Ce=!1,we=!1;if(R){const Ve=$e.get(R);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(J.FRAMEBUFFER,null),ue=!1;else if(Ve.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Ve.__hasExternalTextures)I.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&$e.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(we=!0);const it=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[$])?Z=it[$][le]:Z=it[$],Ce=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?Z=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?Z=it[le]:Z=it,B.copy(R.viewport),se.copy(R.scissor),X=R.scissorTest}else B.copy(U).multiplyScalar(V).floor(),se.copy(N).multiplyScalar(V).floor(),X=de;if(Ke.bindFramebuffer(J.FRAMEBUFFER,Z)&&ue&&Ke.drawBuffers(R,Z),Ke.viewport(B),Ke.scissor(se),Ke.setScissorTest(X),Ce){const Ve=$e.get(R.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ve.__webglTexture,le)}else if(we){const Ve=$e.get(R.texture),tt=$||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ve.__webglTexture,le||0,tt)}P=-1},this.readRenderTargetPixels=function(R,$,le,ue,Z,Ce,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Xe=Xe[we]),Xe){Ke.bindFramebuffer(J.FRAMEBUFFER,Xe);try{const Ve=R.texture,tt=Ve.format,it=Ve.type;if(!ct.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ue&&le>=0&&le<=R.height-Z&&J.readPixels($,le,ue,Z,rt.convert(tt),rt.convert(it),Ce)}finally{const Ve=z!==null?$e.get(z).__webglFramebuffer:null;Ke.bindFramebuffer(J.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,$,le,ue,Z,Ce,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Xe=Xe[we]),Xe){const Ve=R.texture,tt=Ve.format,it=Ve.type;if(!ct.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=R.width-ue&&le>=0&&le<=R.height-Z){Ke.bindFramebuffer(J.FRAMEBUFFER,Xe);const je=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,je),J.bufferData(J.PIXEL_PACK_BUFFER,Ce.byteLength,J.STREAM_READ),J.readPixels($,le,ue,Z,rt.convert(tt),rt.convert(it),0);const gt=z!==null?$e.get(z).__webglFramebuffer:null;Ke.bindFramebuffer(J.FRAMEBUFFER,gt);const wt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await X_(J,wt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,je),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ce),J.deleteBuffer(je),J.deleteSync(wt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,$=null,le=0){R.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1]);const ue=Math.pow(2,-le),Z=Math.floor(R.image.width*ue),Ce=Math.floor(R.image.height*ue),we=$!==null?$.x:0,Xe=$!==null?$.y:0;I.setTexture2D(R,0),J.copyTexSubImage2D(J.TEXTURE_2D,le,0,0,we,Xe,Z,Ce),Ke.unbindTexture()},this.copyTextureToTexture=function(R,$,le=null,ue=null,Z=0){R.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,R=arguments[1],$=arguments[2],Z=arguments[3]||0,le=null);let Ce,we,Xe,Ve,tt,it,je,gt,wt;const mt=R.isCompressedTexture?R.mipmaps[Z]:R.image;le!==null?(Ce=le.max.x-le.min.x,we=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,Ve=le.min.x,tt=le.min.y,it=le.isBox3?le.min.z:0):(Ce=mt.width,we=mt.height,Xe=mt.depth||1,Ve=0,tt=0,it=0),ue!==null?(je=ue.x,gt=ue.y,wt=ue.z):(je=0,gt=0,wt=0);const ln=rt.convert($.format),ot=rt.convert($.type);let Ye;$.isData3DTexture?(I.setTexture3D($,0),Ye=J.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(I.setTexture2DArray($,0),Ye=J.TEXTURE_2D_ARRAY):(I.setTexture2D($,0),Ye=J.TEXTURE_2D),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment);const ei=J.getParameter(J.UNPACK_ROW_LENGTH),Mt=J.getParameter(J.UNPACK_IMAGE_HEIGHT),un=J.getParameter(J.UNPACK_SKIP_PIXELS),ti=J.getParameter(J.UNPACK_SKIP_ROWS),Yt=J.getParameter(J.UNPACK_SKIP_IMAGES);J.pixelStorei(J.UNPACK_ROW_LENGTH,mt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,mt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Ve),J.pixelStorei(J.UNPACK_SKIP_ROWS,tt),J.pixelStorei(J.UNPACK_SKIP_IMAGES,it);const mi=R.isDataArrayTexture||R.isData3DTexture,Lt=$.isDataArrayTexture||$.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Wn=$e.get(R),Ri=$e.get($),Mn=$e.get(Wn.__renderTarget),Xn=$e.get(Ri.__renderTarget);Ke.bindFramebuffer(J.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ke.bindFramebuffer(J.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Rn=0;Rn<Xe;Rn++)mi&&J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,$e.get(R).__webglTexture,Z,it+Rn),R.isDepthTexture?(Lt&&J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,$e.get($).__webglTexture,Z,wt+Rn),J.blitFramebuffer(Ve,tt,Ce,we,je,gt,Ce,we,J.DEPTH_BUFFER_BIT,J.NEAREST)):Lt?J.copyTexSubImage3D(Ye,Z,je,gt,wt+Rn,Ve,tt,Ce,we):J.copyTexSubImage2D(Ye,Z,je,gt,wt+Rn,Ve,tt,Ce,we);Ke.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?J.texSubImage3D(Ye,Z,je,gt,wt,Ce,we,Xe,ln,ot,mt.data):$.isCompressedArrayTexture?J.compressedTexSubImage3D(Ye,Z,je,gt,wt,Ce,we,Xe,ln,mt.data):J.texSubImage3D(Ye,Z,je,gt,wt,Ce,we,Xe,ln,ot,mt):R.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Z,je,gt,Ce,we,ln,ot,mt.data):R.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Z,je,gt,mt.width,mt.height,ln,mt.data):J.texSubImage2D(J.TEXTURE_2D,Z,je,gt,Ce,we,ln,ot,mt);J.pixelStorei(J.UNPACK_ROW_LENGTH,ei),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Mt),J.pixelStorei(J.UNPACK_SKIP_PIXELS,un),J.pixelStorei(J.UNPACK_SKIP_ROWS,ti),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Yt),Z===0&&$.generateMipmaps&&J.generateMipmap(Ye),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,$,le=null,ue=null,Z=0){return R.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,R=arguments[2],$=arguments[3],Z=arguments[4]||0),zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,le,ue,Z)},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){k=0,O=0,z=null,Ke.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class cd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(e),this.density=t}clone(){return new cd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class r1 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class s1 extends An{constructor(e,t,r,a,l,c,f,h,p){super(e,t,r,a,l,c,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),p=r[a]-c,p<0)f=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===c)return a/(l-1);const g=r[a],x=r[a+1]-g,y=(c-g)/x;return(a+y)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),h=t||(c.isVector2?new Ge:new j);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new j,a=[],l=[],c=[],f=new j,h=new zt;for(let y=0;y<=e;y++){const M=y/e;a[y]=this.getTangentAt(M,new j)}l[0]=new j,c[0]=new j;let p=Number.MAX_VALUE;const g=Math.abs(a[0].x),v=Math.abs(a[0].y),x=Math.abs(a[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(a[y-1],a[y]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(vn(a[y-1].dot(a[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(f,M))}c[y].crossVectors(a[y],l[y])}if(t===!0){let y=Math.acos(vn(l[0].dot(l[e]),-1,1));y/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(a[M],y*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fd extends Ti{constructor(e=0,t=0,r=1,a=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ge){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=h-this.aX,y=p-this.aY;h=x*g-y*v+this.aX,p=x*v+y*g+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class o1 extends fd{constructor(e,t,r,a,l,c){super(e,t,r,r,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function dd(){let s=0,e=0,t=0,r=0;function a(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){a(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,g,v){let x=(c-l)/p-(f-l)/(p+g)+(f-c)/g,y=(f-c)/g-(h-c)/(g+v)+(h-f)/v;x*=g,y*=g,a(c,f,x,y)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Rl=new j,rf=new dd,sf=new dd,of=new dd;class a1 extends Ti{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new j){const r=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,g;this.closed||f>0?p=a[(f-1)%l]:(Rl.subVectors(a[0],a[1]).add(a[0]),p=Rl);const v=a[f%l],x=a[(f+1)%l];if(this.closed||f+2<l?g=a[(f+2)%l]:(Rl.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(v),y),C=Math.pow(v.distanceToSquared(x),y),S=Math.pow(x.distanceToSquared(g),y);C<1e-4&&(C=1),M<1e-4&&(M=C),S<1e-4&&(S=C),rf.initNonuniformCatmullRom(p.x,v.x,x.x,g.x,M,C,S),sf.initNonuniformCatmullRom(p.y,v.y,x.y,g.y,M,C,S),of.initNonuniformCatmullRom(p.z,v.z,x.z,g.z,M,C,S)}else this.curveType==="catmullrom"&&(rf.initCatmullRom(p.x,v.x,x.x,g.x,this.tension),sf.initCatmullRom(p.y,v.y,x.y,g.y,this.tension),of.initCatmullRom(p.z,v.z,x.z,g.z,this.tension));return r.set(rf.calc(h),sf.calc(h),of.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new j().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ym(s,e,t,r,a){const l=(r-e)*.5,c=(a-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function l1(s,e){const t=1-s;return t*t*e}function u1(s,e){return 2*(1-s)*s*e}function c1(s,e){return s*s*e}function Ho(s,e,t,r){return l1(s,e)+u1(s,t)+c1(s,r)}function f1(s,e){const t=1-s;return t*t*t*e}function d1(s,e){const t=1-s;return 3*t*t*s*e}function h1(s,e){return 3*(1-s)*s*s*e}function p1(s,e){return s*s*s*e}function Go(s,e,t,r,a){return f1(s,e)+d1(s,t)+h1(s,r)+p1(s,a)}class Hg extends Ti{constructor(e=new Ge,t=new Ge,r=new Ge,a=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Go(e,a.x,l.x,c.x,f.x),Go(e,a.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m1 extends Ti{constructor(e=new j,t=new j,r=new j,a=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new j){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Go(e,a.x,l.x,c.x,f.x),Go(e,a.y,l.y,c.y,f.y),Go(e,a.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gg extends Ti{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g1 extends Ti{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wg extends Ti{constructor(e=new Ge,t=new Ge,r=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Ho(e,a.x,l.x,c.x),Ho(e,a.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v1 extends Ti{constructor(e=new j,t=new j,r=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new j){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Ho(e,a.x,l.x,c.x),Ho(e,a.y,l.y,c.y),Ho(e,a.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xg extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const r=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),f=l-c,h=a[c===0?c:c-1],p=a[c],g=a[c>a.length-2?a.length-1:c+1],v=a[c>a.length-3?a.length-1:c+2];return r.set(Ym(f,h.x,p.x,g.x,v.x),Ym(f,h.y,p.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Ge().fromArray(a))}return this}}var $m=Object.freeze({__proto__:null,ArcCurve:o1,CatmullRomCurve3:a1,CubicBezierCurve:Hg,CubicBezierCurve3:m1,EllipseCurve:fd,LineCurve:Gg,LineCurve3:g1,QuadraticBezierCurve:Wg,QuadraticBezierCurve3:v1,SplineCurve:Xg});class _1 extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $m[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=r){const c=a[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,a=this.curves.length;r<a;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const g=h[p];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(new $m[a.type]().fromJSON(a))}return this}}class Km extends _1{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Gg(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,a){const l=new Wg(this.currentPoint.clone(),new Ge(e,t),new Ge(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}bezierCurveTo(e,t,r,a,l,c){const f=new Hg(this.currentPoint.clone(),new Ge(e,t),new Ge(r,a),new Ge(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Xg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,a,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,a,l,c),this}absarc(e,t,r,a,l,c){return this.absellipse(e,t,r,r,a,l,c),this}ellipse(e,t,r,a,l,c,f,h){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,t+g,r,a,l,c,f,h),this}absellipse(e,t,r,a,l,c,f,h){const p=new fd(e,t,r,a,l,c,f,h);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zl extends wi{constructor(e=1,t=1,r=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const g=[],v=[],x=[],y=[];let M=0;const C=[],S=r/2;let _=0;L(),c===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(g),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(y,2));function L(){const w=new j,K=new j;let k=0;const O=(t-e)/r;for(let z=0;z<=l;z++){const P=[],A=z/l,B=A*(t-e)+e;for(let se=0;se<=a;se++){const X=se/a,D=X*h+f,te=Math.sin(D),ee=Math.cos(D);K.x=B*te,K.y=-A*r+S,K.z=B*ee,v.push(K.x,K.y,K.z),w.set(te,O,ee).normalize(),x.push(w.x,w.y,w.z),y.push(X,1-A),P.push(M++)}C.push(P)}for(let z=0;z<a;z++)for(let P=0;P<l;P++){const A=C[P][z],B=C[P+1][z],se=C[P+1][z+1],X=C[P][z+1];(e>0||P!==0)&&(g.push(A,B,X),k+=3),(t>0||P!==l-1)&&(g.push(B,se,X),k+=3)}p.addGroup(_,k,0),_+=k}function b(w){const K=M,k=new Ge,O=new j;let z=0;const P=w===!0?e:t,A=w===!0?1:-1;for(let se=1;se<=a;se++)v.push(0,S*A,0),x.push(0,A,0),y.push(.5,.5),M++;const B=M;for(let se=0;se<=a;se++){const D=se/a*h+f,te=Math.cos(D),ee=Math.sin(D);O.x=P*ee,O.y=S*A,O.z=P*te,v.push(O.x,O.y,O.z),x.push(0,A,0),k.x=te*.5+.5,k.y=ee*.5*A+.5,y.push(k.x,k.y),M++}for(let se=0;se<a;se++){const X=K+se,D=B+se;w===!0?g.push(D,D+1,X):g.push(D+1,D,X),z+=3}p.addGroup(_,z,w===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hd extends wi{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],c=[];f(a),p(r),g(),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(l.slice(),3)),this.setAttribute("uv",new _n(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const b=new j,w=new j,K=new j;for(let k=0;k<t.length;k+=3)y(t[k+0],b),y(t[k+1],w),y(t[k+2],K),h(b,w,K,L)}function h(L,b,w,K){const k=K+1,O=[];for(let z=0;z<=k;z++){O[z]=[];const P=L.clone().lerp(w,z/k),A=b.clone().lerp(w,z/k),B=k-z;for(let se=0;se<=B;se++)se===0&&z===k?O[z][se]=P:O[z][se]=P.clone().lerp(A,se/B)}for(let z=0;z<k;z++)for(let P=0;P<2*(k-z)-1;P++){const A=Math.floor(P/2);P%2===0?(x(O[z][A+1]),x(O[z+1][A]),x(O[z][A])):(x(O[z][A+1]),x(O[z+1][A+1]),x(O[z+1][A]))}}function p(L){const b=new j;for(let w=0;w<l.length;w+=3)b.x=l[w+0],b.y=l[w+1],b.z=l[w+2],b.normalize().multiplyScalar(L),l[w+0]=b.x,l[w+1]=b.y,l[w+2]=b.z}function g(){const L=new j;for(let b=0;b<l.length;b+=3){L.x=l[b+0],L.y=l[b+1],L.z=l[b+2];const w=S(L)/2/Math.PI+.5,K=_(L)/Math.PI+.5;c.push(w,1-K)}M(),v()}function v(){for(let L=0;L<c.length;L+=6){const b=c[L+0],w=c[L+2],K=c[L+4],k=Math.max(b,w,K),O=Math.min(b,w,K);k>.9&&O<.1&&(b<.2&&(c[L+0]+=1),w<.2&&(c[L+2]+=1),K<.2&&(c[L+4]+=1))}}function x(L){l.push(L.x,L.y,L.z)}function y(L,b){const w=L*3;b.x=e[w+0],b.y=e[w+1],b.z=e[w+2]}function M(){const L=new j,b=new j,w=new j,K=new j,k=new Ge,O=new Ge,z=new Ge;for(let P=0,A=0;P<l.length;P+=9,A+=6){L.set(l[P+0],l[P+1],l[P+2]),b.set(l[P+3],l[P+4],l[P+5]),w.set(l[P+6],l[P+7],l[P+8]),k.set(c[A+0],c[A+1]),O.set(c[A+2],c[A+3]),z.set(c[A+4],c[A+5]),K.copy(L).add(b).add(w).divideScalar(3);const B=S(K);C(k,A+0,L,B),C(O,A+2,b,B),C(z,A+4,w,B)}}function C(L,b,w,K){K<0&&L.x===1&&(c[b]=L.x-1),w.x===0&&w.z===0&&(c[b]=K/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function _(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hd(e.vertices,e.indices,e.radius,e.details)}}class pd extends hd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pd(e.radius,e.detail)}}class jg extends Km{constructor(e){super(e),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,a=this.holes.length;r<a;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const a=e.holes[t];this.holes.push(new Km().fromJSON(a))}return this}}const x1={triangulate:function(s,e,t=2){const r=e&&e.length,a=r?e[0]*t:s.length;let l=qg(s,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p,g,v,x,y;if(r&&(l=w1(s,e,l,t)),s.length>80*t){f=p=s[0],h=g=s[1];for(let M=t;M<a;M+=t)v=s[M],x=s[M+1],v<f&&(f=v),x<h&&(h=x),v>p&&(p=v),x>g&&(g=x);y=Math.max(p-f,g-h),y=y!==0?32767/y:0}return qo(l,c,t,f,h,y,0),c}};function qg(s,e,t,r,a){let l,c;if(a===U1(s,e,t,r)>0)for(l=e;l<t;l+=r)c=Zm(l,s[l],s[l+1],c);else for(l=t-r;l>=e;l-=r)c=Zm(l,s[l],s[l+1],c);return c&&Gl(c,c.next)&&($o(c),c=c.next),c}function es(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(Gl(t,t.next)||Ht(t.prev,t,t.next)===0)){if($o(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function qo(s,e,t,r,a,l,c){if(!s)return;!c&&l&&P1(s,r,a,l);let f=s,h,p;for(;s.prev!==s.next;){if(h=s.prev,p=s.next,l?S1(s,r,a,l):y1(s)){e.push(h.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),$o(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=M1(es(s),e,t),qo(s,e,t,r,a,l,2)):c===2&&E1(s,e,t,r,a,l):qo(es(s),e,t,r,a,l,1);break}}}function y1(s){const e=s.prev,t=s,r=s.next;if(Ht(e,t,r)>=0)return!1;const a=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,g=a<l?a<c?a:c:l<c?l:c,v=f<h?f<p?f:p:h<p?h:p,x=a>l?a>c?a:c:l>c?l:c,y=f>h?f>p?f:p:h>p?h:p;let M=r.next;for(;M!==e;){if(M.x>=g&&M.x<=x&&M.y>=v&&M.y<=y&&Bs(a,f,l,h,c,p,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function S1(s,e,t,r){const a=s.prev,l=s,c=s.next;if(Ht(a,l,c)>=0)return!1;const f=a.x,h=l.x,p=c.x,g=a.y,v=l.y,x=c.y,y=f<h?f<p?f:p:h<p?h:p,M=g<v?g<x?g:x:v<x?v:x,C=f>h?f>p?f:p:h>p?h:p,S=g>v?g>x?g:x:v>x?v:x,_=Zf(y,M,e,t,r),L=Zf(C,S,e,t,r);let b=s.prevZ,w=s.nextZ;for(;b&&b.z>=_&&w&&w.z<=L;){if(b.x>=y&&b.x<=C&&b.y>=M&&b.y<=S&&b!==a&&b!==c&&Bs(f,g,h,v,p,x,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,w.x>=y&&w.x<=C&&w.y>=M&&w.y<=S&&w!==a&&w!==c&&Bs(f,g,h,v,p,x,w.x,w.y)&&Ht(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;b&&b.z>=_;){if(b.x>=y&&b.x<=C&&b.y>=M&&b.y<=S&&b!==a&&b!==c&&Bs(f,g,h,v,p,x,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;w&&w.z<=L;){if(w.x>=y&&w.x<=C&&w.y>=M&&w.y<=S&&w!==a&&w!==c&&Bs(f,g,h,v,p,x,w.x,w.y)&&Ht(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function M1(s,e,t){let r=s;do{const a=r.prev,l=r.next.next;!Gl(a,l)&&Yg(a,r,r.next,l)&&Yo(a,l)&&Yo(l,a)&&(e.push(a.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),$o(r),$o(r.next),r=s=l),r=r.next}while(r!==s);return es(r)}function E1(s,e,t,r,a,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&D1(c,f)){let h=$g(c,f);c=es(c,c.next),h=es(h,h.next),qo(c,e,t,r,a,l,0),qo(h,e,t,r,a,l,0);return}f=f.next}c=c.next}while(c!==s)}function w1(s,e,t,r){const a=[];let l,c,f,h,p;for(l=0,c=e.length;l<c;l++)f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=qg(s,f,h,r,!1),p===p.next&&(p.steiner=!0),a.push(L1(p));for(a.sort(T1),l=0;l<a.length;l++)t=A1(a[l],t);return t}function T1(s,e){return s.x-e.x}function A1(s,e){const t=C1(s,e);if(!t)return e;const r=$g(t,s);return es(r,r.next),es(t,t.next)}function C1(s,e){let t=e,r=-1/0,a;const l=s.x,c=s.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const x=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=l&&x>r&&(r=x,a=t.x<t.next.x?t:t.next,x===l))return a}t=t.next}while(t!==e);if(!a)return null;const f=a,h=a.x,p=a.y;let g=1/0,v;t=a;do l>=t.x&&t.x>=h&&l!==t.x&&Bs(c<p?l:r,c,h,p,c<p?r:l,c,t.x,t.y)&&(v=Math.abs(c-t.y)/(l-t.x),Yo(t,s)&&(v<g||v===g&&(t.x>a.x||t.x===a.x&&R1(a,t)))&&(a=t,g=v)),t=t.next;while(t!==f);return a}function R1(s,e){return Ht(s.prev,s,e.prev)<0&&Ht(e.next,s,s.next)<0}function P1(s,e,t,r){let a=s;do a.z===0&&(a.z=Zf(a.x,a.y,e,t,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==s);a.prevZ.nextZ=null,a.prevZ=null,b1(a)}function b1(s){let e,t,r,a,l,c,f,h,p=1;do{for(t=s,s=null,l=null,c=0;t;){for(c++,r=t,f=0,e=0;e<p&&(f++,r=r.nextZ,!!r);e++);for(h=p;f>0||h>0&&r;)f!==0&&(h===0||!r||t.z<=r.z)?(a=t,t=t.nextZ,f--):(a=r,r=r.nextZ,h--),l?l.nextZ=a:s=a,a.prevZ=l,l=a;t=r}l.nextZ=null,p*=2}while(c>1);return s}function Zf(s,e,t,r,a){return s=(s-t)*a|0,e=(e-r)*a|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function L1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Bs(s,e,t,r,a,l,c,f){return(a-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(a-c)*(r-f)}function D1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!N1(s,e)&&(Yo(s,e)&&Yo(e,s)&&I1(s,e)&&(Ht(s.prev,s,e.prev)||Ht(s,e.prev,e))||Gl(s,e)&&Ht(s.prev,s,s.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Gl(s,e){return s.x===e.x&&s.y===e.y}function Yg(s,e,t,r){const a=bl(Ht(s,e,t)),l=bl(Ht(s,e,r)),c=bl(Ht(t,r,s)),f=bl(Ht(t,r,e));return!!(a!==l&&c!==f||a===0&&Pl(s,t,e)||l===0&&Pl(s,r,e)||c===0&&Pl(t,s,r)||f===0&&Pl(t,e,r))}function Pl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function bl(s){return s>0?1:s<0?-1:0}function N1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Yg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Yo(s,e){return Ht(s.prev,s,s.next)<0?Ht(s,e,s.next)>=0&&Ht(s,s.prev,e)>=0:Ht(s,e,s.prev)<0||Ht(s,s.next,e)<0}function I1(s,e){let t=s,r=!1;const a=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function $g(s,e){const t=new Jf(s.i,s.x,s.y),r=new Jf(e.i,e.x,e.y),a=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=a,a.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Zm(s,e,t,r){const a=new Jf(s,e,t);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function $o(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jf(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function U1(s,e,t,r){let a=0;for(let l=e,c=t-r;l<t;l+=r)a+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return a}class Wo{static area(e){const t=e.length;let r=0;for(let a=t-1,l=0;l<t;a=l++)r+=e[a].x*e[l].y-e[l].x*e[a].y;return r*.5}static isClockWise(e){return Wo.area(e)<0}static triangulateShape(e,t){const r=[],a=[],l=[];Jm(e),Qm(r,e);let c=e.length;t.forEach(Jm);for(let h=0;h<t.length;h++)a.push(c),c+=t[h].length,Qm(r,t[h]);const f=x1.triangulate(r,a);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function Jm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class md extends wi{constructor(e=new jg([new Ge(0,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],a=[],l=[],c=[];let f=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let g=0;g<e.length;g++)p(e[g]),this.addGroup(f,h,g),f+=h,h=0;this.setIndex(r),this.setAttribute("position",new _n(a,3)),this.setAttribute("normal",new _n(l,3)),this.setAttribute("uv",new _n(c,2));function p(g){const v=a.length/3,x=g.extractPoints(t);let y=x.shape;const M=x.holes;Wo.isClockWise(y)===!1&&(y=y.reverse());for(let S=0,_=M.length;S<_;S++){const L=M[S];Wo.isClockWise(L)===!0&&(M[S]=L.reverse())}const C=Wo.triangulateShape(y,M);for(let S=0,_=M.length;S<_;S++){const L=M[S];y=y.concat(L)}for(let S=0,_=y.length;S<_;S++){const L=y[S];a.push(L.x,L.y,0),l.push(0,0,1),c.push(L.x,L.y)}for(let S=0,_=C.length;S<_;S++){const L=C[S],b=L[0]+v,w=L[1]+v,K=L[2]+v;r.push(b,w,K),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return F1(t,e)}static fromJSON(e,t){const r=[];for(let a=0,l=e.shapes.length;a<l;a++){const c=t[e.shapes[a]];r.push(c)}return new md(r,e.curveSegments)}}function F1(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const a=s[t];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e}class gn extends Qo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gd extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class O1 extends gd{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const af=new zt,eg=new j,tg=new j;class Kg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ld,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tg),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ng=new zt,ko=new j,lf=new j;class k1 extends Kg{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),r.position.copy(ko),lf.copy(r.position),lf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(lf),r.updateMatrixWorld(),a.makeTranslation(-ko.x,-ko.y,-ko.z),ng.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ng)}}class z1 extends gd{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new k1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class B1 extends Kg{constructor(){super(new Fg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V1 extends gd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new B1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);const H1=({project:s,timeOfDay:e})=>{const t=Rt.useRef(null),r=Rt.useRef(null),a=Rt.useRef(null),l=Rt.useRef(null);return Rt.useEffect(()=>{if(!t.current)return;const c=t.current.clientWidth,f=t.current.clientHeight,h=new r1;a.current=h;const p={day:988970,warm:1841431,night:132631};h.background=new vt(p[e]),h.fog=new cd(p[e],.0015);const g=new Gn(45,c/f,1,3e3);g.position.set(400,500,650),g.lookAt(400,0,300),l.current=g;const v=new i1({antialias:!0,preserveDrawingBuffer:!0});v.setSize(c,f),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.shadowMap.enabled=!0,v.shadowMap.type=lg,v.toneMapping=cg,v.toneMappingExposure=1.05,t.current.appendChild(v.domElement),r.current=v;const x=new O1(e==="warm"?16772829:16777215,e==="night"?328976:3359061,e==="night"?.3:.7);h.add(x);const y=new V1(e==="warm"?16750916:e==="night"?8952251:16777215,e==="night"?.4:1.2);y.position.set(300,600,400),y.castShadow=!0,y.shadow.mapSize.width=2048,y.shadow.mapSize.height=2048,y.shadow.camera.near=100,y.shadow.camera.far=1500;const M=500;if(y.shadow.camera.left=-M,y.shadow.camera.right=M,y.shadow.camera.top=M,y.shadow.camera.bottom=-M,y.shadow.bias=-5e-4,h.add(y),e==="night"||e==="warm"){const H=new z1(16755268,1.2,500);H.position.set(400,100,300),h.add(H)}const C=new ea(3e3,3e3),S=new gn({color:e==="night"?399888:e==="warm"?1325088:1980964,roughness:.9,metalness:.1}),_=new Dt(C,S);_.rotation.x=-Math.PI/2,_.position.y=-.5,_.receiveShadow=!0,h.add(_);const L=H=>{const Q=document.createElement("canvas");Q.width=256,Q.height=256;const U=Q.getContext("2d");if(H==="hardwood"){U.fillStyle="#b45309",U.fillRect(0,0,256,256),U.fillStyle="#92400e";for(let N=0;N<256;N+=32){U.fillRect(0,N,256,2);for(let de=N%64===0?0:64;de<256;de+=128)U.fillRect(de,N,2,32)}}else H==="marble"?(U.fillStyle="#f8fafc",U.fillRect(0,0,256,256),U.strokeStyle="#e2e8f0",U.lineWidth=3,U.strokeRect(4,4,248,248)):(U.fillStyle="#cbd5e1",U.fillRect(0,0,256,256),U.strokeStyle="#94a3b8",U.lineWidth=2,U.strokeRect(2,2,252,252));return new s1(Q)};s.rooms.forEach(H=>{if(H.points.length<3)return;const Q=new jg;Q.moveTo(H.points[0].x,H.points[0].y);for(let ie=1;ie<H.points.length;ie++)Q.lineTo(H.points[ie].x,H.points[ie].y);Q.closePath();const U=new md(Q),N=L(H.floorMaterial);N.wrapS=Xo,N.wrapT=Xo,N.repeat.set(.02,.02);const de=new gn({map:N,roughness:H.floorMaterial==="marble"?.2:.6,metalness:H.floorMaterial==="marble"?.3:.05}),Y=new Dt(U,de);Y.rotation.x=Math.PI/2,Y.scale.set(1,-1,1),Y.position.y=.2,Y.receiveShadow=!0,h.add(Y)});const b=80,w=new gn({color:15857145,roughness:.8,metalness:.1});s.walls.forEach(H=>{const Q=H.end.x-H.start.x,U=H.end.y-H.start.y,N=Math.sqrt(Q*Q+U*U),de=Math.atan2(U,Q),Y=new rn(N,b,H.thickness),ie=new Dt(Y,w),ve=(H.start.x+H.end.x)/2,pe=(H.start.y+H.end.y)/2;ie.position.set(ve,b/2,pe),ie.rotation.y=-de,ie.castShadow=!0,ie.receiveShadow=!0,h.add(ie);const Ae=new rn(N+2,4,H.thickness+2),Re=new gn({color:3359061,roughness:.5}),Fe=new Dt(Ae,Re);Fe.position.set(ve,b+2,pe),Fe.rotation.y=-de,h.add(Fe)}),s.furniture.forEach(H=>{const Q=new Vo,U=new vt(H.color);if(H.type==="sofa"){const N=new gn({color:U,roughness:.8}),de=new Dt(new rn(H.width,16,H.depth),N);de.position.y=8,de.castShadow=!0,Q.add(de);const Y=new Dt(new rn(H.width,24,10),N);Y.position.set(0,20,-H.depth/2+5),Y.castShadow=!0,Q.add(Y);const ie=new Dt(new rn(8,20,H.depth),N);ie.position.set(-H.width/2+4,18,0),Q.add(ie);const ve=ie.clone();ve.position.x=H.width/2-4,Q.add(ve)}else if(H.type==="double_bed"){const N=new gn({color:3359061,roughness:.7}),de=new Dt(new rn(H.width,12,H.depth),N);de.position.y=6,de.castShadow=!0,Q.add(de);const Y=new gn({color:16317180,roughness:.9}),ie=new Dt(new rn(H.width-6,12,H.depth-8),Y);ie.position.y=16,ie.castShadow=!0,Q.add(ie);const ve=new gn({color:14870768}),pe=new Dt(new rn(H.width*.4,6,14),ve);pe.position.set(-H.width*.22,23,-H.depth/2+15),Q.add(pe);const Ae=pe.clone();Ae.position.x=H.width*.22,Q.add(Ae);const Re=new gn({color:U,roughness:.6}),Fe=new Dt(new rn(H.width,36,6),Re);Fe.position.set(0,22,-H.depth/2+3),Fe.castShadow=!0,Q.add(Fe)}else if(H.type==="dining_table"){const N=new gn({color:U,roughness:.3,metalness:.2}),de=new Dt(new rn(H.width,5,H.depth),N);de.position.y=28,de.castShadow=!0,Q.add(de);const Y=new gn({color:1976635,roughness:.5}),ie=new zl(2,2,28),ve=H.width/2-6,pe=H.depth/2-6;[[-ve,-pe],[ve,-pe],[-ve,pe],[ve,pe]].forEach(([Ae,Re])=>{const Fe=new Dt(ie,Y);Fe.position.set(Ae,14,Re),Fe.castShadow=!0,Q.add(Fe)})}else if(H.type==="bathtub"){const N=new gn({color:16777215,roughness:.1,metalness:.1}),de=new Dt(new rn(H.width,22,H.depth),N);de.position.y=11,de.castShadow=!0,Q.add(de);const Y=new gn({color:3718648,roughness:.05,opacity:.8,transparent:!0}),ie=new Dt(new rn(H.width-6,2,H.depth-6),Y);ie.position.y=19,Q.add(ie)}else if(H.type==="plant"){const N=new gn({color:14251782,roughness:.7}),de=new Dt(new zl(8,6,16),N);de.position.y=8,de.castShadow=!0,Q.add(de);const Y=new gn({color:1409085,roughness:.5}),ie=new Dt(new pd(14,1),Y);ie.position.y=26,ie.castShadow=!0,Q.add(ie)}else{const N=new gn({color:U,roughness:.7}),de=new Dt(new rn(H.width,H.height||30,H.depth),N);de.position.y=(H.height||30)/2,de.castShadow=!0,Q.add(de)}Q.position.set(H.x,0,H.y),Q.rotation.y=H.rotation*Math.PI/180,h.add(Q)});let K=!1,k=0,O=0,z={radius:850,theta:Math.PI/4,phi:Math.PI/3};const P=new j(400,30,300),A=()=>{g.position.x=P.x+z.radius*Math.sin(z.phi)*Math.sin(z.theta),g.position.y=P.y+z.radius*Math.cos(z.phi),g.position.z=P.z+z.radius*Math.sin(z.phi)*Math.cos(z.theta),g.lookAt(P)};A();const B=H=>{K=!0,k=H.clientX,O=H.clientY},se=H=>{if(!K)return;const Q=H.clientX-k,U=H.clientY-O;k=H.clientX,O=H.clientY,H.buttons===1?(z.theta-=Q*.006,z.phi=Math.max(.1,Math.min(Math.PI/2.1,z.phi-U*.006))):H.buttons===2&&(P.x-=Q*.5,P.z-=U*.5),A()},X=()=>{K=!1},D=H=>{H.preventDefault(),z.radius=Math.max(150,Math.min(1800,z.radius+H.deltaY*.7)),A()},te=v.domElement;te.addEventListener("mousedown",B),window.addEventListener("mousemove",se),window.addEventListener("mouseup",X),te.addEventListener("wheel",D,{passive:!1}),te.addEventListener("contextmenu",H=>H.preventDefault());let ee;const ce=()=>{ee=requestAnimationFrame(ce),v.render(h,g)};ce();const V=()=>{if(!t.current)return;const H=t.current.clientWidth,Q=t.current.clientHeight;g.aspect=H/Q,g.updateProjectionMatrix(),v.setSize(H,Q)};return window.addEventListener("resize",V),()=>{cancelAnimationFrame(ee),te.removeEventListener("mousedown",B),window.removeEventListener("mousemove",se),window.removeEventListener("mouseup",X),te.removeEventListener("wheel",D),window.removeEventListener("resize",V),v.dispose(),t.current&&te.parentNode===t.current&&t.current.removeChild(te)}},[s,e]),ge.jsxs("div",{className:"relative w-full h-full select-none overflow-hidden bg-slate-950",children:[ge.jsx("div",{ref:t,className:"w-full h-full cursor-grab active:cursor-grabbing"}),ge.jsxs("div",{className:"absolute bottom-5 left-5 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700/60 text-xs text-slate-300 flex items-center gap-3 shadow-xl pointer-events-none",children:[ge.jsxs("span",{className:"flex items-center gap-1.5",children:[ge.jsx("kbd",{className:"bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-200",children:"Left Click"})," Rotate"]}),ge.jsx("span",{className:"text-slate-600",children:"•"}),ge.jsxs("span",{className:"flex items-center gap-1.5",children:[ge.jsx("kbd",{className:"bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-200",children:"Right Click"})," Pan"]}),ge.jsx("span",{className:"text-slate-600",children:"•"}),ge.jsxs("span",{className:"flex items-center gap-1.5",children:[ge.jsx("kbd",{className:"bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-200",children:"Scroll"})," Zoom"]})]})]})},ig=[{type:"sofa",name:"L-Shape Sectional Sofa",category:"living",dimensions:"9ft x 4.5ft",desc:"Plush modern corner sofa with chaise lounge"},{type:"tv_unit",name:"Floating TV & Media Console",category:"living",dimensions:"8ft x 1.8ft",desc:"Minimalist low-profile media cabinet"},{type:"plant",name:"Potted Indoor Tree",category:"living",dimensions:"2.5ft x 2.5ft",desc:"Air-purifying tropical architectural foliage"},{type:"double_bed",name:"King Platform Bed",category:"bedroom",dimensions:"6.6ft x 7ft",desc:"Upholstered headboard with floating frame"},{type:"wardrobe",name:"Sliding Mirror Wardrobe",category:"bedroom",dimensions:"7ft x 2ft",desc:"Full-height modular wardrobe system"},{type:"dining_table",name:"6-Seater Dining Set",category:"dining",dimensions:"6.5ft x 3.5ft",desc:"Solid wood table with matching chairs"},{type:"kitchen_counter",name:"Chef Island & Cooktop",category:"kitchen",dimensions:"12ft x 2.5ft",desc:"Quartz countertop with integrated sink"},{type:"bathtub",name:"Freestanding Soaking Tub",category:"bathroom",dimensions:"5.5ft x 3ft",desc:"Deep acrylic tub with chrome floor faucet"},{type:"toilet",name:"Wall-Hung Smart Toilet",category:"bathroom",dimensions:"1.8ft x 2.5ft",desc:"Concealed tank with rimless bowl"}],G1=({isOpen:s,onClose:e,onSelectFurniture:t})=>{const[r,a]=sg.useState("all");if(!s)return null;const l=r==="all"?ig:ig.filter(c=>c.category===r);return ge.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:ge.jsxs("div",{className:"relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",children:[ge.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50",children:[ge.jsxs("div",{children:[ge.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[ge.jsx(uf,{className:"w-5 h-5 text-sky-400"}),"Architectural Furniture Catalog"]}),ge.jsx("p",{className:"text-xs text-slate-400",children:"Select an item to place onto your 2D floor plan"})]}),ge.jsx("button",{onClick:e,className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition",children:ge.jsx(t_,{className:"w-5 h-5"})})]}),ge.jsx("div",{className:"flex items-center gap-2 px-6 py-3 border-b border-slate-800/80 bg-slate-900/60 overflow-x-auto",children:[{id:"all",label:"All Items"},{id:"living",label:"Living",icon:uf},{id:"bedroom",label:"Bedroom",icon:Gv},{id:"dining",label:"Dining",icon:Yp},{id:"kitchen",label:"Kitchen",icon:Yp},{id:"bathroom",label:"Bath",icon:Hv}].map(c=>ge.jsx("button",{onClick:()=>a(c.id),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 whitespace-nowrap ${r===c.id?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:c.label},c.id))}),ge.jsx("div",{className:"p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4",children:l.map(c=>ge.jsxs("div",{onClick:()=>{t(c.type),e()},className:"group p-4 rounded-xl border border-slate-800 bg-slate-800/50 hover:bg-slate-800 hover:border-sky-500/60 cursor-pointer transition flex flex-col justify-between",children:[ge.jsxs("div",{children:[ge.jsxs("div",{className:"flex items-start justify-between",children:[ge.jsx("h4",{className:"font-semibold text-sm text-slate-200 group-hover:text-sky-300 transition",children:c.name}),ge.jsx("span",{className:"text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400 font-mono",children:c.dimensions})]}),ge.jsx("p",{className:"text-xs text-slate-400 mt-1",children:c.desc})]}),ge.jsxs("div",{className:"mt-4 flex items-center justify-between text-xs text-sky-400 font-medium",children:[ge.jsx("span",{children:"Click to stamp"}),ge.jsx("span",{className:"group-hover:translate-x-1 transition",children:"→"})]})]},c.type))})]})})},W1=()=>{const[s,e]=Rt.useState(cf),[t,r]=Rt.useState("2d"),[a,l]=Rt.useState("select"),[c,f]=Rt.useState("day"),[h,p]=Rt.useState(!1),[g,v]=Rt.useState("sofa"),x=()=>{const y=document.querySelector("canvas");if(!y)return;const M=y.toDataURL("image/png"),C=document.createElement("a");C.href=M,C.download=`${s.name.toLowerCase().replace(/\s+/g,"-")}-${t}-plan.png`,document.body.appendChild(C),C.click(),document.body.removeChild(C)};return ge.jsxs("div",{className:"flex flex-col w-screen h-screen overflow-hidden bg-slate-950 font-sans",children:[ge.jsx(n_,{viewMode:t,onSetViewMode:r,activeTool:a,onSetTool:l,timeOfDay:c,onSetTimeOfDay:f,onOpenCatalog:()=>p(!0),project:s,onLoadProject:e,onExportPNG:x}),ge.jsx("main",{className:"flex-1 relative overflow-hidden",children:t==="2d"?ge.jsx(i_,{project:s,onUpdateProject:e,activeTool:a,selectedFurnitureType:g}):ge.jsx(H1,{project:s,timeOfDay:c})}),ge.jsx(G1,{isOpen:h,onClose:()=>p(!1),onSelectFurniture:y=>{v(y),l("furniture")}})]})};kv.createRoot(document.getElementById("root")).render(ge.jsx(sg.StrictMode,{children:ge.jsx(W1,{})}));
