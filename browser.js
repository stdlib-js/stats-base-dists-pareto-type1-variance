// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}function e(r){return t(r/2)}function o(r){return e(r>0?r-1:r+1)}var i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;function f(r){return r===i||r===u}var a=Math.sqrt;function c(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty,p=Object.prototype,v=p.toString,s=p.__defineGetter__,b=p.__defineSetter__,w=p.__lookupGetter__,d=p.__lookupSetter__,A=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?y:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===v.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(w.call(r,n)||d.call(r,n)?(e=r.__proto__,r.__proto__=p,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&s&&s.call(r,n,t.get),u&&b&&b.call(r,n,t.set),r};function _(r,n,t){A(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var m,g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",I=g&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return h.call(r);t=r[j],i=j,n=null!=(o=r)&&U.call(o,i);try{r[j]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[j]=t:delete r[j],e}:function(r){return h.call(r)},N="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(N&&t instanceof Uint32Array||"[object Uint32Array]"===I(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=m,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===I(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,L=E,V="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===I(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var M,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===I(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:M,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new L(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}_(nr,"assign",rr);var tr=!0===K?0:1,er=new L(1),or=new F(er.buffer);function ir(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ur(r){return 0|r}var fr,ar,cr=2147483647,lr=!0===K?1:0,yr=new L(1),pr=new F(yr.buffer);function vr(r){return yr[0]=r,pr[lr]}!0===K?(fr=1,ar=0):(fr=0,ar=1);var sr={HIGH:fr,LOW:ar},br=new L(1),wr=new F(br.buffer),dr=sr.HIGH,Ar=sr.LOW;function _r(r,n){return wr[dr]=r,wr[Ar]=n,br[0]}var mr=[0,0];function gr(r,n){var t,e;return nr.assign(r,mr,1,0),t=mr[0],t&=cr,e=vr(n),_r(t|=e&=2147483648,mr[1])}var hr=!0===K?1:0,Ur=new L(1),jr=new F(Ur.buffer);function Ir(r,n){return Ur[0]=r,jr[hr]=n>>>0,Ur[0]}var Nr=1023,Or=1048576,Sr=[1,1.5],Er=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Tr(n,t,e,o){return r(n)||f(n)?(t[o]=n,t[o+e]=0,t):0!==n&&c(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}_((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Hr=[0,0],Gr=[0,0];function Pr(n,t){var e,o;return 0===t||0===n||r(n)||f(n)?n:(Tr(n,Hr,1,0),t+=Hr[1],t+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-Nr|0}(n=Hr[0]),t<-1074?gr(0,n):t>1023?n<0?u:i:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,nr.assign(n,Gr,1,0),e=Gr[0],e&=2148532223,o*_r(e|=t+Nr<<20,Gr[1])))}var Lr=1048575,Vr=1048576,Wr=1083179008,xr=1e300,Mr=1e-300,kr=[0,0],Yr=[0,0];function qr(n,e){var l,y,p,v,s,b,w,d,A,_,m,g,h,U;if(r(n)||r(e))return NaN;if(nr.assign(e,kr,1,0),s=kr[0],0===kr[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return a(n);if(-.5===e)return 1/a(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(f(e))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(n===i)?0:i}(n,e)}if(nr.assign(n,kr,1,0),v=kr[0],0===kr[1]){if(0===v)return function(r,n){return n===u?i:n===i?0:n>0?o(n)?r:0:o(n)?gr(i,r):i}(n,e);if(1===n)return 1;if(-1===n&&o(e))return-1;if(f(n))return n===u?qr(-0,-e):e<0?0:i}if(n<0&&!1===t(e))return(n-n)/(n-n);if(p=c(n),l=v&cr|0,y=s&cr|0,w=s>>>31|0,b=(b=v>>>31|0)&&o(e)?-1:1,y>1105199104){if(y>1139802112)return function(r,n){return(vr(r)&cr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,e);if(l<1072693247)return 1===w?b*xr*xr:b*Mr*Mr;if(l>1072693248)return 0===w?b*xr*xr:b*Mr*Mr;m=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ir(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Yr,p)}else m=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,w,d,A,_,m,g,h,U;return m=0,t<Or&&(m-=53,t=vr(n*=9007199254740992)),m+=(t>>20)-Nr|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Or),u=ir(o=(A=(n=Ir(n,t))-(c=Sr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Ir(0,e+=h<<18),d=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=ir(a=3+(i=u*u)+(d+=(f=_*(A-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=ir(y=(A=u*a)+(_=f*a+(d-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+Fr[h])-((s=ir(s=(p=.9617967009544373*y)+v+(l=Er[h])+(w=m),0))-w-l-p),r[0]=s,r[1]=b,r}(Yr,p,l);if(g=(_=(e-(d=ir(e,0)))*m[0]+e*m[1])+(A=d*m[0]),nr.assign(g,kr,1,0),h=ur(kr[0]),U=ur(kr[1]),h>=Wr){if(0!=(h-Wr|U))return b*xr*xr;if(_+8008566259537294e-32>g-A)return b*xr*xr}else if((h&cr)>=1083231232){if(0!=(h-3230714880|U))return b*Mr*Mr;if(_<=g-A)return b*Mr*Mr}return g=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&cr|0)>>20)-Nr|0,c=0,l>1071644672&&(o=Ir(0,((c=r+(Vr>>y+1)>>>0)&~(Lr>>(y=((c&cr)>>20)-Nr|0)))>>>0),c=(c&Lr|Vr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=ur(r=vr(a=1-((a=(i=.6931471824645996*(o=ir(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):Ir(a,r)}(h,A,_),b*g}return function(n,t){return r(n)||n<=0||r(t)||t<=0?NaN:n<2?i:t*t*n/(qr(n-1,2)*(n-2))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).variance=n();
//# sourceMappingURL=browser.js.map
