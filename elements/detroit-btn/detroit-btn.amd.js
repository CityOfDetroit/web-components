define(["exports","./node_modules/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DetroitBtn=void 0;function _templateObject_957b26f0653c11e9a97dfff29fcf20f4(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: inline;\n  text-display: none; }\n  :host button {\n    cursor: pointer;\n    padding: .5em 1em;\n    transform: 1s ease-in-out; }\n\n:host([hidden]) {\n  display: none; }\n\n:host([type=\"compress\"][color=\"color-1\"]) button {\n  border: .25em solid transparent;\n  background-color: transparent;\n  color: #004544; }\n\n:host([type=\"compress\"][color=\"color-1\"]) button:hover {\n  background-color: rgba(0, 69, 68, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"compress\"][color=\"color-1\"][active=\"false\"]) button {\n  cursor: not-allowed;\n  background-color: rgba(0, 69, 68, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"solid\"][color=\"color-1\"]) button {\n  background-color: #004544;\n  border: 0.25em solid #004544;\n  color: #fff; }\n\n:host([type=\"solid\"][color=\"color-1\"]) button:hover {\n  border: 0.25em solid rgba(0, 69, 68, 0.3);\n  background-color: rgba(0, 69, 68, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"toggle\"][color=\"color-1\"][clicked=false]) button {\n  background-color: #9fd5b3;\n  border: 0.25em solid #9fd5b3;\n  color: #004544; }\n\n:host([type=\"toggle\"][color=\"color-1\"][clicked=false]) button:hover {\n  background-color: rgba(159, 213, 179, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"toggle\"][color=\"color-1\"][clicked=true]) button {\n  background-color: #CF3234;\n  border: 0.25em solid #CF3234;\n  color: #fff; }\n\n:host([type=\"toggle\"][color=\"color-1\"][clicked=true]) button:hover {\n  background-color: rgba(207, 50, 52, 0.3);\n  color: #000;\n  transform: 1s ease-in-out; }\n\n:host([type=\"border\"][color=\"color-1\"]) button {\n  border: 0.25em solid #004544;\n  background-color: transparent;\n  color: #004544; }\n\n:host([type=\"border\"][color=\"color-1\"]) button:hover {\n  background-color: #004544;\n  color: #fff;\n  transform: 1s ease-in-out; }\n\n:host([type=\"compress\"][color=\"color-2\"]) button {\n  border: .25em solid transparent;\n  background-color: transparent;\n  color: #004544; }\n\n:host([type=\"compress\"][color=\"color-2\"]) button:hover {\n  background-color: rgba(159, 213, 179, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"compress\"][color=\"color-2\"][active=\"false\"]) button {\n  cursor: not-allowed;\n  background-color: rgba(159, 213, 179, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"solid\"][color=\"color-2\"]) button {\n  background-color: #9fd5b3;\n  border: 0.25em solid #9fd5b3;\n  color: #004544; }\n\n:host([type=\"solid\"][color=\"color-2\"]) button:hover {\n  border: 0.25em solid rgba(159, 213, 179, 0.3);\n  background-color: rgba(159, 213, 179, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"toggle\"][color=\"color-2\"][clicked=false]) button {\n  background-color: #9fd5b3;\n  border: 0.25em solid #9fd5b3;\n  color: #004544; }\n\n:host([type=\"toggle\"][color=\"color-2\"][clicked=false]) button:hover {\n  background-color: rgba(159, 213, 179, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"toggle\"][color=\"color-2\"][clicked=true]) button {\n  background-color: #CF3234;\n  border: 0.25em solid #CF3234;\n  color: #fff; }\n\n:host([type=\"toggle\"][color=\"color-2\"][clicked=true]) button:hover {\n  background-color: rgba(207, 50, 52, 0.3);\n  color: #000;\n  transform: 1s ease-in-out; }\n\n:host([type=\"border\"][color=\"color-2\"]) button {\n  border: 0.25em solid #9fd5b3;\n  background-color: transparent;\n  color: #004544; }\n\n:host([type=\"border\"][color=\"color-2\"]) button:hover {\n  background-color: #9fd5b3;\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"compress\"][color=\"color-3\"]) button {\n  border: .25em solid transparent;\n  background-color: transparent;\n  color: #004544; }\n\n:host([type=\"compress\"][color=\"color-3\"]) button:hover {\n  background-color: rgba(228, 143, 34, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"compress\"][color=\"color-3\"][active=\"false\"]) button {\n  cursor: not-allowed;\n  background-color: rgba(228, 143, 34, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"solid\"][color=\"color-3\"]) button {\n  background-color: #E48F22;\n  border: 0.25em solid #E48F22;\n  color: #004544; }\n\n:host([type=\"solid\"][color=\"color-3\"]) button:hover {\n  border: 0.25em solid rgba(228, 143, 34, 0.3);\n  background-color: rgba(228, 143, 34, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"toggle\"][color=\"color-3\"][clicked=false]) button {\n  background-color: #9fd5b3;\n  border: 0.25em solid #9fd5b3;\n  color: #004544; }\n\n:host([type=\"toggle\"][color=\"color-3\"][clicked=false]) button:hover {\n  background-color: rgba(159, 213, 179, 0.3);\n  color: #004544;\n  transform: 1s ease-in-out; }\n\n:host([type=\"toggle\"][color=\"color-3\"][clicked=true]) button {\n  background-color: #CF3234;\n  border: 0.25em solid #CF3234;\n  color: #fff; }\n\n:host([type=\"toggle\"][color=\"color-3\"][clicked=true]) button:hover {\n  background-color: rgba(207, 50, 52, 0.3);\n  color: #000;\n  transform: 1s ease-in-out; }\n\n:host([type=\"border\"][color=\"color-3\"]) button {\n  border: 0.25em solid #E48F22;\n  background-color: transparent;\n  color: #004544; }\n\n:host([type=\"border\"][color=\"color-3\"]) button:hover {\n  background-color: #E48F22;\n  color: #004544;\n  transform: 1s ease-in-out; }\n</style>\n<button @click="," aria-disabled=\"","\" role=\"button\" aria-pressed=\"false\"><slot></slot></button>"]);_templateObject_957b26f0653c11e9a97dfff29fcf20f4=function _templateObject_957b26f0653c11e9a97dfff29fcf20f4(){return data};return data}/**
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
value:function render(){return(0,_litElement.html)(_templateObject_957b26f0653c11e9a97dfff29fcf20f4(),this.clickHandler,"true"===this.attributes.active.value?!1:!0)}// properties available to the custom element for data binding
},{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */value:function tag(){return"detroit-btn"}// life cycle
}],[{key:"properties",get:function get(){return{type:{name:"type",type:"String",value:"solid"},color:{name:"color",type:"String",value:"color-1"},clicked:{name:"clicked",type:"Bolean",value:!1},active:{name:"active",type:"Bolean",value:!0}}}}]);function DetroitBtn(){var _this;babelHelpers.classCallCheck(this,DetroitBtn);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DetroitBtn).call(this));_this.tag=DetroitBtn.tag;// map our imported properties json to real props on the element
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
},{key:"clickHandler",value:function clickHandler(event){if("false"===this.attributes.clicked.value){this.attributes.clicked.value=!0;event.target.setAttribute("aria-pressed",this.attributes.clicked.value)}else{this.attributes.clicked.value=!1;event.target.setAttribute("aria-pressed",this.attributes.clicked.value)}}}]);return DetroitBtn}(_litElement.LitElement);_exports.DetroitBtn=DetroitBtn;customElements.define("detroit-btn",DetroitBtn)});