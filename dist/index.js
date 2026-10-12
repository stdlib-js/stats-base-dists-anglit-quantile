"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var v=a(function(O,q){
var i=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-asin/dist'),N=require('@stdlib/math-base-special-sqrt/dist'),y=require('@stdlib/constants-float64-half-pi/dist');function l(e,r,t){return i(e)||i(r)||i(t)||t<0||e<0||e>1?NaN:t===0?r:r+t*(s(N(e))-.5*y)}q.exports=l
});var f=a(function(R,c){
var x=require('@stdlib/utils-constant-function/dist'),F=require('@stdlib/stats-base-dists-degenerate-quantile/dist').factory,u=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-asin/dist'),A=require('@stdlib/math-base-special-sqrt/dist'),H=require('@stdlib/constants-float64-half-pi/dist');function I(e,r){if(u(e)||u(r)||r<0)return x(NaN);if(r===0)return F(e);return t;function t(n){return u(n)||n<0||n>1?NaN:e+r*(d(A(n))-.5*H)}}c.exports=I
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),P=f();L(o,"factory",P);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
