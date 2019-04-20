define(["exports","./node_modules/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DetroitBtn=void 0;function _templateObject_cfb79fd062d311e9a97339b51fd1066d(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<slot></slot>\n<div>","</div>\n<div>","</div>"]);_templateObject_cfb79fd062d311e9a97339b51fd1066d=function _templateObject_cfb79fd062d311e9a97339b51fd1066d(){return data};return data}/**
 * `detroit-btn`
 * `Simple button component`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */var DetroitBtn=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(DetroitBtn,_LitElement);babelHelpers.createClass(DetroitBtn,[{key:"render",// render function
value:function render(){return(0,_litElement.html)(_templateObject_cfb79fd062d311e9a97339b51fd1066d(),this.type,this.style)}// properties available to the custom element for data binding
},{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */value:function tag(){return"detroit-btn"}// life cycle
}],[{key:"properties",get:function get(){return{type:{name:"type",type:"String",value:"solid",reflectToAttribute:!0,observer:"_typeChanged"},style:{name:"style",type:"String",value:"color-1",reflectToAttribute:!0,observer:"_styleChanged"}}}}]);function DetroitBtn(){var _this;babelHelpers.classCallCheck(this,DetroitBtn);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DetroitBtn).call(this));_this.tag=DetroitBtn.tag;// map our imported properties json to real props on the element
// @notice static getter of properties is built via tooling
// to edit modify src/detroit-btn-properties.json
var obj=DetroitBtn.properties;for(var p in obj){if(obj.hasOwnProperty(p)){if(_this.hasAttribute(p)){_this[p]=_this.getAttribute(p)}else{_this.setAttribute(p,obj[p].value);_this[p]=obj[p].value}}}return _this}/**
   * life cycle, element is afixed to the DOM
   */babelHelpers.createClass(DetroitBtn,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DetroitBtn.prototype),"connectedCallback",this).call(this)}// static get observedAttributes() {
//   return [];
// }
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
// Observer type for changes
},{key:"_typeChanged",value:function _typeChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}// Observer style for changes
},{key:"_styleChanged",value:function _styleChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}}]);return DetroitBtn}(_litElement.LitElement);_exports.DetroitBtn=DetroitBtn;customElements.define("detroit-btn",DetroitBtn)});