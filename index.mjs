// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.3-esm/index.mjs";function n(n,i){return s(n)||n<=0||s(i)||i<=0?NaN:n<2?e:i*i*n/(t(n-1,2)*(n-2))}export{n as default};
//# sourceMappingURL=index.mjs.map
