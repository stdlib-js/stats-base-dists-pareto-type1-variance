"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=t(function(N,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-pow/dist'),c=require('@stdlib/constants-float64-pinf/dist');function o(e,r){return i(e)||e<=0||i(r)||r<=0?NaN:e<2?c:r*r*e/(v(e-1,2)*(e-2))}u.exports=o
});var q=n();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
