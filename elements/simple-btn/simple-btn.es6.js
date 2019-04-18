/**
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
 */class SimpleBtn extends HTMLElement{// render function
get html(){return`
<style>


:host {
  display: inline;
  cursor: pointer;
  padding: 1em;
  background: #004544;
  color: #9fd5b3;
  transform: 1s ease; }

:host(:hover) {
  background: #9fd5b3;
  color: #004544;
  transform: 1s ease; }

:host([color="color-2"]) {
  background: #9fd5b3;
  color: #004544;
  transform: 1s ease; }

:host(:hover[color="color-2"]) {
  background: #004544;
  color: #9fd5b3;
  transform: 1s ease; }

:host([hidden]) {
  display: none; }
</style>
<slot></slot>`}// properties available to the custom element for data binding
static get properties(){return{clicked:{name:"clicked",type:"Boolean",value:!1,reflectToAttribute:!1,observer:"_clickedChanged"},color:{name:"color",type:"String",value:"color-1",reflectToAttribute:!1,observer:"_colorChanged"}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */static get tag(){return"simple-btn"}/**
   * life cycle
   */constructor(delayRender=!1){super();// set tag for later use
this.tag=SimpleBtn.tag;// map our imported properties json to real props on the element
// @notice static getter of properties is built via tooling
// to edit modify src/simple-btn-properties.json
let obj=SimpleBtn.properties;for(let p in obj){if(obj.hasOwnProperty(p)){if(this.hasAttribute(p)){this[p]=this.getAttribute(p)}else{this.setAttribute(p,obj[p].value);this[p]=obj[p].value}}}// optional queue for future use
this._queue=[];this.template=document.createElement("template");this.attachShadow({mode:"open"});if(!delayRender){this.render()}}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}if(this._queue.length){this._processQueue()}}_copyAttribute(name,to){const recipients=this.shadowRoot.querySelectorAll(to),value=this.getAttribute(name),fname=null==value?"removeAttribute":"setAttribute";for(const node of recipients){node[fname](name,value)}}_queueAction(action){this._queue.push(action)}_processQueue(){this._queue.forEach(action=>{this[`_${action.type}`](action.data)});this._queue=[]}_setProperty({name,value}){this[name]=value}render(){this.shadowRoot.innerHTML=null;this.template.innerHTML=this.html;if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(this.template,this.tag)}this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}//static get observedAttributes() {
//  return [];
//}
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
// Observer clicked for changes
_clickedChanged(newValue,oldValue){if(typeof newValue!==typeof void 0){console.log(newValue)}}_colorChanged(newValue,oldValue){if(typeof newValue!==typeof void 0){console.log(newValue)}}}window.customElements.define(SimpleBtn.tag,SimpleBtn);export{SimpleBtn};