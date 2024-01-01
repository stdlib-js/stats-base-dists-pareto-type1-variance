"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(f,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-pow/dist'),v=require('@stdlib/constants-float64-pinf/dist');function c(e,r){return i(e)||e<=0||i(r)||r<=0?NaN:e<2?v:r*r*e/(t(e-1,2)*(e-2))}u.exports=c
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
