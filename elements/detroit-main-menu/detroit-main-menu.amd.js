define(["exports","./node_modules/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DetroitMainMenu=void 0;function _templateObject_9570edc0653c11e9ad9621278db9829c(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<detroit-main-menu-btn>\n</detroit-main-menu-btn>\n<nav>\n</nav>"]);_templateObject_9570edc0653c11e9ad9621278db9829c=function _templateObject_9570edc0653c11e9ad9621278db9829c(){return data};return data}/**
 * `detroit-main-menu`
 * `Site main menu component`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */var DetroitMainMenu=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(DetroitMainMenu,_LitElement);babelHelpers.createClass(DetroitMainMenu,[{key:"render",// render function
value:function render(){return(0,_litElement.html)(_templateObject_9570edc0653c11e9ad9621278db9829c())}// properties available to the custom element for data binding
},{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */value:function tag(){return"detroit-main-menu"}// life cycle
}],[{key:"properties",get:function get(){return{active:{name:"active",type:"Boolean",value:"false",reflectToAttribute:!0,observer:"_activeChanged"}}}}]);function DetroitMainMenu(){var _this;babelHelpers.classCallCheck(this,DetroitMainMenu);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DetroitMainMenu).call(this));_this.tag=DetroitMainMenu.tag;// map our imported properties json to real props on the element
// @notice static getter of properties is built via tooling
// to edit modify src/detroit-main-menu-properties.json
var obj=DetroitMainMenu.properties;for(var p in obj){if(obj.hasOwnProperty(p)){if(_this.hasAttribute(p)){_this[p]=_this.getAttribute(p)}else{_this.setAttribute(p,obj[p].value);_this[p]=obj[p].value}}}return _this}/**
   * life cycle, element is afixed to the DOM
   */babelHelpers.createClass(DetroitMainMenu,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DetroitMainMenu.prototype),"connectedCallback",this).call(this)}// static get observedAttributes() {
//   return [];
// }
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
// Observer active for changes
},{key:"_activeChanged",value:function _activeChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}}]);return DetroitMainMenu}(_litElement.LitElement);_exports.DetroitMainMenu=DetroitMainMenu;customElements.define("detroit-main-menu",DetroitMainMenu)});