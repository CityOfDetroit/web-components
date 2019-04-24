define(["exports","./node_modules/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DetroitMainMenuBtn=void 0;function _templateObject_95792b20653c11e9bad3f3f81d743b52(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,300i,700,900\");\n:host {\n  display: block; }\n  :host button {\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 5em;\n    height: 5em;\n    background-color: #feb70d;\n    color: #000;\n    transition: transform 250ms ease;\n    cursor: pointer;\n    z-index: 200;\n    font-weight: bold;\n    padding: 1em 1em .5em 1em; }\n    :host button span {\n      position: relative;\n      display: block;\n      width: 100%;\n      height: .25em;\n      background-color: #000;\n      float: left;\n      transform-origin: center center;\n      transition: transform 250ms ease;\n      z-index: 200; }\n      :host button span:nth-of-type(1) {\n        transform: translateY(-0.25em); }\n      :host button span:nth-of-type(3) {\n        transform: translateY(0.25em);\n        margin-bottom: .4em; }\n\n:host([clicked=\"true\"]) button span {\n  background-color: #000;\n  transition: transform 250ms ease; }\n  :host([clicked=\"true\"]) button span:nth-of-type(1) {\n    transform: translateY(1px) rotate(45deg); }\n  :host([clicked=\"true\"]) button span:nth-of-type(2) {\n    display: none; }\n  :host([clicked=\"true\"]) button span:nth-of-type(3) {\n    transform: translateY(-1px) rotate(-45deg);\n    margin-bottom: .8em; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<button @click="," role=\"button\" aria-expanded=\"false\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <slot></slot>\n</button>"]);_templateObject_95792b20653c11e9bad3f3f81d743b52=function _templateObject_95792b20653c11e9bad3f3f81d743b52(){return data};return data}/**
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
value:function render(){return(0,_litElement.html)(_templateObject_95792b20653c11e9bad3f3f81d743b52(),this.clickHandler)}// properties available to the custom element for data binding
},{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */value:function tag(){return"detroit-main-menu-btn"}// life cycle
}],[{key:"properties",get:function get(){return{clicked:{name:"clicked",type:"Boolean",value:!1,reflectToAttribute:!0,observer:"_clickedChanged"}}}}]);function DetroitMainMenuBtn(){var _this;babelHelpers.classCallCheck(this,DetroitMainMenuBtn);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DetroitMainMenuBtn).call(this));_this.tag=DetroitMainMenuBtn.tag;// map our imported properties json to real props on the element
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
},{key:"_clickedChanged",value:function _clickedChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}},{key:"clickHandler",value:function clickHandler(event){if("false"===this.attributes.clicked.value){this.attributes.clicked.value=!0;event.target.setAttribute("aria-expanded",this.attributes.clicked.value)}else{this.attributes.clicked.value=!1;event.target.setAttribute("aria-expanded",this.attributes.clicked.value)}}}]);return DetroitMainMenuBtn}(_litElement.LitElement);_exports.DetroitMainMenuBtn=DetroitMainMenuBtn;customElements.define("detroit-main-menu-btn",DetroitMainMenuBtn)});