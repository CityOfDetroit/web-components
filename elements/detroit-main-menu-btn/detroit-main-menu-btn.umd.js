!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element")):"function"==typeof define&&define.amd?define(["exports","lit-element"],t):t((e=e||self).DetroitMainMenuBtn={},e.litElement)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function f(){var e,t,n=(e=["\n<style>:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<slot></slot>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return n},n}var l=function(e){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=u(this,o(n).call(this))).tag=n.tag;var t=n.properties;for(var r in t)t.hasOwnProperty(r)&&(e.hasAttribute(r)?e[r]=e.getAttribute(r):(e.setAttribute(r,t[r].value),e[r]=t[r].value));return e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,t.LitElement),r(n,[{key:"render",value:function(){return t.html(f())}},{key:"tag",value:function(){return"detroit-main-menu-btn"}}],[{key:"properties",get:function(){return{}}}]),r(n,[{key:"connectedCallback",value:function(){c(o(n.prototype),"connectedCallback",this).call(this)}}]),n}();customElements.define("detroit-main-menu-btn",l),e.DetroitMainMenuBtn=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=detroit-main-menu-btn.umd.js.map
