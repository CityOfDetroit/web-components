!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],e):e((n=n||self).SiteMenu={},n.polymerElement_js)}(this,function(n,e){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function o(n){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function i(n,e){return(i=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function r(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function s(n,e,t){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,e,t){var a=function(n,e){for(;!Object.prototype.hasOwnProperty.call(n,e)&&null!==(n=o(n)););return n}(n,e);if(a){var i=Object.getOwnPropertyDescriptor(a,e);return i.get?i.get.call(t):i.value}})(n,e,t||n)}function c(){var n,e,t=(n=['\n<style>@import url("https://fonts.googleapis.com/css?family=Montserrat:300,300i,700,900");\n:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n\n:host([active]) {\n  background: red; }\n\n::-webkit-input-placeholder {\n  \n  color: #fff; }\n\n::-moz-placeholder {\n  \n  color: #fff; }\n\n:-ms-input-placeholder {\n  \n  color: #fff; }\n\n:-moz-placeholder {\n  \n  color: #fff; }\n\n*, *:before, *:after {\n  box-sizing: border-box;\n  outline: none; }\n\n.big-menu {\n  position: fixed;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 5em;\n  height: 5em;\n  background-color: #E48F22;\n  color: #000;\n  transition: transform 250ms ease;\n  cursor: pointer;\n  z-index: 200;\n  font-weight: bold;\n  letter-spacing: .2em;\n  padding: 1em 1em .5em 1em; }\n  .big-menu span {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 2px;\n    background-color: #000;\n    float: left;\n    transform-origin: center center;\n    transition: transform 250ms ease;\n    z-index: 200; }\n    .big-menu span:nth-of-type(1) {\n      transform: translateY(-0.5em); }\n    .big-menu span:nth-of-type(3) {\n      transform: translateY(0.5em);\n      margin-bottom: .75em; }\n\n#big-menu {\n  display: none; }\n  #big-menu:checked ~ .big-menu {\n    background-color: #E48F22;\n    color: #000; }\n    #big-menu:checked ~ .big-menu span {\n      background-color: #000;\n      transition: transform 250ms ease; }\n      #big-menu:checked ~ .big-menu span:nth-of-type(1) {\n        transform: translateY(1px) rotate(45deg); }\n      #big-menu:checked ~ .big-menu span:nth-of-type(2) {\n        display: none; }\n      #big-menu:checked ~ .big-menu span:nth-of-type(3) {\n        transform: translateY(-1px) rotate(-45deg); }\n  #big-menu:checked ~ .big-nav {\n    right: 0;\n    transition: right 500ms ease; }\n  #big-menu:checked ~ main {\n    transform: translateX(250px);\n    transition: transform 500ms ease; }\n\n.big-nav {\n  position: fixed;\n  top: 0;\n  right: -30em;\n  width: 30em;\n  height: 100vh;\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #000;\n  transition: right 500ms ease;\n  z-index: 5; }\n  .big-nav .search-box {\n    padding: 1em 6em 1em 1em;\n    position: relative; }\n    .big-nav .search-box input {\n      padding: 1em;\n      width: 100%;\n      border: none;\n      border-bottom: 0.2em solid #fff;\n      background-color: #000; }\n    .big-nav .search-box span {\n      position: absolute;\n      width: 1em;\n      top: 1.25em;\n      right: 6.5em; }\n  .big-nav .nav-container {\n    width: 30em;\n    max-width: 100%;\n    height: calc(100vh - 5em);\n    position: fixed;\n    transition: right 500ms ease;\n    top: 5em;\n    right: -30em;\n    background-color: #000;\n    overflow-y: auto; }\n    .big-nav .nav-container .nav-item {\n      display: flex; }\n      .big-nav .nav-container .nav-item a {\n        color: #fff;\n        text-decoration: none;\n        padding: .5em;\n        flex: 1;\n        display: flex; }\n        .big-nav .nav-container .nav-item a span {\n          margin: auto 0;\n          padding: .5em; }\n      .big-nav .nav-container .nav-item a:hover, .big-nav .nav-container .nav-item a:focus, .big-nav .nav-container .nav-item a:focus-within {\n        background-color: #9fd5b3;\n        color: #004544; }\n      .big-nav .nav-container .nav-item .sub-items-btn {\n        width: 5em;\n        text-align: center;\n        padding: 1em;\n        font-weight: bold;\n        color: #fff;\n        background-color: #000;\n        cursor: pointer; }\n      .big-nav .nav-container .nav-item .back {\n        padding: 1em;\n        font-weight: bold;\n        color: #fff;\n        background-color: #004544;\n        cursor: pointer; }\n      .big-nav .nav-container .nav-item .sub-items-btn:hover, .big-nav .nav-container .nav-item .sub-items-btn:focus {\n        background-color: #004544; }\n      .big-nav .nav-container .nav-item .back:hover, .big-nav .nav-container .nav-item .back:focus {\n        background-color: #E48F22; }\n  .big-nav .active.nav-container {\n    transition: right 500ms ease;\n    right: 0; }\n</style>\n<input type="checkbox" id="big-menu"/>\n<label for="big-menu" class="big-menu">\n<span></span>\n<span></span>\n<span></span>\nMENU\n</label>\n<nav class="big-nav" role="menubar" aria-label="site menu">\n        <div class="search-box">\n                <span></span>\n                <input id="menu-search" type="text" name="" value="" placeholder="BUSCAR">\n              </div>\n              <div class="nav-item lvl-1">\n\n\n                                    <a href="/how-do-i"><span>CÓMO PUEDO</span></a>\n                    <div class="sub-items-btn"></div>\n                    <article class="nav-container lvl-2">\n                      <div class="nav-item back lvl-2">\n                        <i class="fas fa-angle-left"></i> ATRÁS\n                      </div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/266"><span>Apelación</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/276"><span>Compra</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/236"><span>Encontrar información</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/3866"><span>Encuentra programas para jóvenes</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/1326"><span>Encuentre o solicite empleo</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/281"><span>Haz negocios con la ciudad</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/241"><span>Información de archivos o documentos</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/3141"><span>Obtener información de la concesión</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/211"><span>Pagar multa, factura o impuesto</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/271"><span>Regístrate</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/231"><span>Registro</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/201"><span>Reportar problema</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/256"><span>Solicitar documento</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/226"><span>Solicitar servicio o asistencia</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/246"><span>Solicite o renueve la licencia</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/216"><span>Solicite o renueve un permiso o certificación</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/261"><span>Ubicar algo</span></a></div><div class="nav-item lvl-2">\n                          <a href="/es/taxonomy/term/286"><span>Voluntario</span></a></div></article></div>\n</nav>'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return c=function(){return t},t}var l=function(n){function l(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),r(this,o(l).apply(this,arguments))}var m,p,v;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&i(n,e)}(l,e.PolymerElement),m=l,v=[{key:"template",get:function(){return e.html(c())}},{key:"properties",get:function(){return{active:{name:"active",type:"Boolean",value:!0,reflectToAttribute:!0,observer:"_activeChanged"}}}},{key:"tag",get:function(){return"site-menu"}}],(p=[{key:"connectedCallback",value:function(){s(o(l.prototype),"connectedCallback",this).call(this)}},{key:"_activeChanged",value:function(n,e){"undefined"!==t(n)&&console.log(n)}}])&&a(m.prototype,p),v&&a(m,v),l}();window.customElements.define(l.tag,l),n.SiteMenu=l,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=site-menu.umd.js.map
