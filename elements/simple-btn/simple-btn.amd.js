define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleBtn=void 0;/**
 * Copyright 2019
 * @license MIT, see License.md for full text.
 */ /**
 * `simple-btn`
 * `Basic button component`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @demo demo/index.html
 */var SimpleBtn=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(SimpleBtn,_HTMLElement);babelHelpers.createClass(SimpleBtn,[{key:"html",// render function
get:function get(){return"\n<style>\n\n\n:host {\n  display: inline;\n  cursor: pointer;\n  padding: 1em;\n  background: #004544;\n  color: #9fd5b3;\n  transform: 1s ease; }\n\n:host(:hover) {\n  background: #9fd5b3;\n  color: #004544;\n  transform: 1s ease; }\n\n:host([color=\"color-2\"]) {\n  background: #9fd5b3;\n  color: #004544;\n  transform: 1s ease; }\n\n:host(:hover[color=\"color-2\"]) {\n  background: #004544;\n  color: #9fd5b3;\n  transform: 1s ease; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<slot></slot>"}// properties available to the custom element for data binding
}],[{key:"properties",get:function get(){return{clicked:{name:"clicked",type:"Boolean",value:!1,reflectToAttribute:!1,observer:"_clickedChanged"},color:{name:"color",type:"String",value:"color-1",reflectToAttribute:!1,observer:"_colorChanged"}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"simple-btn"}/**
   * life cycle
   */}]);function SimpleBtn(){var _this,delayRender=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!1;babelHelpers.classCallCheck(this,SimpleBtn);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleBtn).call(this));// set tag for later use
_this.tag=SimpleBtn.tag;// map our imported properties json to real props on the element
// @notice static getter of properties is built via tooling
// to edit modify src/simple-btn-properties.json
var obj=SimpleBtn.properties;for(var p in obj){if(obj.hasOwnProperty(p)){if(_this.hasAttribute(p)){_this[p]=_this.getAttribute(p)}else{_this.setAttribute(p,obj[p].value);_this[p]=obj[p].value}}}// optional queue for future use
_this._queue=[];_this.template=document.createElement("template");_this.attachShadow({mode:"open"});if(!delayRender){_this.render()}return _this}/**
   * life cycle, element is afixed to the DOM
   */babelHelpers.createClass(SimpleBtn,[{key:"connectedCallback",value:function connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}if(this._queue.length){this._processQueue()}}},{key:"_copyAttribute",value:function _copyAttribute(name,to){var recipients=this.shadowRoot.querySelectorAll(to),value=this.getAttribute(name),fname=null==value?"removeAttribute":"setAttribute",_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=recipients[Symbol.iterator](),_step,node;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){node=_step.value;node[fname](name,value)}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}},{key:"_queueAction",value:function _queueAction(action){this._queue.push(action)}},{key:"_processQueue",value:function _processQueue(){var _this2=this;this._queue.forEach(function(action){_this2["_".concat(action.type)](action.data)});this._queue=[]}},{key:"_setProperty",value:function _setProperty(_ref){var name=_ref.name,value=_ref.value;this[name]=value}},{key:"render",value:function render(){this.shadowRoot.innerHTML=null;this.template.innerHTML=this.html;if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(this.template,this.tag)}this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}//static get observedAttributes() {
//  return [];
//}
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
// Observer clicked for changes
},{key:"_clickedChanged",value:function _clickedChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}},{key:"_colorChanged",value:function _colorChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}}]);return SimpleBtn}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.SimpleBtn=SimpleBtn;window.customElements.define(SimpleBtn.tag,SimpleBtn)});