define(["exports","./node_modules/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DetroitMainMenuBtn=void 0;function _templateObject_aa7fc360651111e9a566d5d6ac9f9731(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<slot></slot>\n<div>","</div>"]);_templateObject_aa7fc360651111e9a566d5d6ac9f9731=function _templateObject_aa7fc360651111e9a566d5d6ac9f9731(){return data};return data}/**
 * `detroit-main-menu-btn`
 * `Main menu button component`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */var DetroitMainMenuBtn=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(DetroitMainMenuBtn,_LitElement);babelHelpers.createClass(DetroitMainMenuBtn,[{key:"render",// render function
value:function render(){return(0,_litElement.html)(_templateObject_aa7fc360651111e9a566d5d6ac9f9731(),this.clicked)}// properties available to the custom element for data binding
},{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */value:function tag(){return"detroit-main-menu-btn"}// life cycle
}],[{key:"properties",get:function get(){return{clicked:{name:"clicked",type:"Boolean",value:"false",reflectToAttribute:!0,observer:"_clickedChanged"}}}}]);function DetroitMainMenuBtn(){var _this;babelHelpers.classCallCheck(this,DetroitMainMenuBtn);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DetroitMainMenuBtn).call(this));_this.tag=DetroitMainMenuBtn.tag;// map our imported properties json to real props on the element
// @notice static getter of properties is built via tooling
// to edit modify src/detroit-main-menu-btn-properties.json
var obj=DetroitMainMenuBtn.properties;for(var p in obj){if(obj.hasOwnProperty(p)){if(_this.hasAttribute(p)){_this[p]=_this.getAttribute(p)}else{_this.setAttribute(p,obj[p].value);_this[p]=obj[p].value}}}return _this}/**
   * life cycle, element is afixed to the DOM
   */babelHelpers.createClass(DetroitMainMenuBtn,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DetroitMainMenuBtn.prototype),"connectedCallback",this).call(this)}// static get observedAttributes() {
//   return [];
// }
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
// Observer clicked for changes
},{key:"_clickedChanged",value:function _clickedChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}}]);return DetroitMainMenuBtn}(_litElement.LitElement);_exports.DetroitMainMenuBtn=DetroitMainMenuBtn;customElements.define("detroit-main-menu-btn",DetroitMainMenuBtn)});