!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element")):"function"==typeof define&&define.amd?define(["exports","lit-element"],t):t((e=e||self).DetroitBtn={},e.litElement)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(){var e,t,n=(e=["\n<style>:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<slot></slot>\n<div>","</div>\n<div>","</div>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return n},n}var a=function(e){function r(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=l(this,i(r).call(this))).tag=r.tag;var t=r.properties;for(var n in t)t.hasOwnProperty(n)&&(e.hasAttribute(n)?e[n]=e.getAttribute(n):(e.setAttribute(n,t[n].value),e[n]=t[n].value));return e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(r,t.LitElement),o(r,[{key:"render",value:function(){return t.html(f(),this.type,this.style)}},{key:"tag",value:function(){return"detroit-btn"}}],[{key:"properties",get:function(){return{type:{name:"type",type:"String",value:"solid",reflectToAttribute:!0,observer:"_typeChanged"},style:{name:"style",type:"String",value:"color-1",reflectToAttribute:!0,observer:"_styleChanged"}}}}]),o(r,[{key:"connectedCallback",value:function(){c(i(r.prototype),"connectedCallback",this).call(this)}},{key:"_typeChanged",value:function(e,t){"undefined"!==n(e)&&console.log(e)}},{key:"_styleChanged",value:function(e,t){"undefined"!==n(e)&&console.log(e)}}]),r}();customElements.define("detroit-btn",a),e.DetroitBtn=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=detroit-btn.umd.js.map