/**
 * Copyright 2019 
 * @license MIT, see License.md for full text.
 */import{LitElement,html}from"./node_modules/lit-element/lit-element.js";/**
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
 */class DetroitMainMenuBtn extends LitElement{// render function
render(){return html`
<style>:host {
  display: block; }

:host([hidden]) {
  display: none; }
</style>
<slot></slot>
<div>${this.clicked}</div>`}// properties available to the custom element for data binding
static get properties(){return{clicked:{name:"clicked",type:"Boolean",value:"false",reflectToAttribute:!0,observer:"_clickedChanged"}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */tag(){return"detroit-main-menu-btn"}// life cycle
constructor(){super();this.tag=DetroitMainMenuBtn.tag;// map our imported properties json to real props on the element
// @notice static getter of properties is built via tooling
// to edit modify src/detroit-main-menu-btn-properties.json
let obj=DetroitMainMenuBtn.properties;for(let p in obj){if(obj.hasOwnProperty(p)){if(this.hasAttribute(p)){this[p]=this.getAttribute(p)}else{this.setAttribute(p,obj[p].value);this[p]=obj[p].value}}}}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback()}// static get observedAttributes() {
//   return [];
// }
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
// Observer clicked for changes
_clickedChanged(newValue,oldValue){if(typeof newValue!==typeof void 0){console.log(newValue)}}}customElements.define("detroit-main-menu-btn",DetroitMainMenuBtn);export{DetroitMainMenuBtn};