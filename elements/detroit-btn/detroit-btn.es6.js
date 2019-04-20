/**
 * Copyright 2019
 * @license MIT, see License.md for full text.
 */import{LitElement,html}from"./node_modules/lit-element/lit-element.js";/**
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
 */class DetroitBtn extends LitElement{// render function
render(){return html`
<style>:host {
  display: inline;
  text-display: none; }
  :host button {
    cursor: pointer;
    padding: .5em 1em;
    transform: 1s ease-in-out; }

:host([hidden]) {
  display: none; }

:host([type="compress"][color="color-1"]) button {
  border: .25em solid transparent;
  background-color: transparent;
  color: #004544; }

:host([type="compress"][color="color-1"]) button:hover {
  background-color: rgba(0, 69, 68, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-1"][active="false"]) button {
  cursor: not-allowed;
  background-color: rgba(0, 69, 68, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="solid"][color="color-1"]) button {
  background-color: #004544;
  border: 0.25em solid #004544;
  color: #fff; }

:host([type="solid"][color="color-1"]) button:hover {
  border: 0.25em solid rgba(0, 69, 68, 0.3);
  background-color: rgba(0, 69, 68, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-1"][clicked=false]) button {
  background-color: #9fd5b3;
  border: 0.25em solid #9fd5b3;
  color: #004544; }

:host([type="toggle"][color="color-1"][clicked=false]) button:hover {
  background-color: rgba(159, 213, 179, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-1"][clicked=true]) button {
  background-color: #CF3234;
  border: 0.25em solid #CF3234;
  color: #fff; }

:host([type="toggle"][color="color-1"][clicked=true]) button:hover {
  background-color: rgba(207, 50, 52, 0.3);
  color: #000;
  transform: 1s ease-in-out; }

:host([type="border"][color="color-1"]) button {
  border: 0.25em solid #004544;
  background-color: transparent;
  color: #004544; }

:host([type="border"][color="color-1"]) button:hover {
  background-color: #004544;
  color: #fff;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-2"]) button {
  border: .25em solid transparent;
  background-color: transparent;
  color: #004544; }

:host([type="compress"][color="color-2"]) button:hover {
  background-color: rgba(159, 213, 179, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-2"][active="false"]) button {
  cursor: not-allowed;
  background-color: rgba(159, 213, 179, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="solid"][color="color-2"]) button {
  background-color: #9fd5b3;
  border: 0.25em solid #9fd5b3;
  color: #004544; }

:host([type="solid"][color="color-2"]) button:hover {
  border: 0.25em solid rgba(159, 213, 179, 0.3);
  background-color: rgba(159, 213, 179, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-2"][clicked=false]) button {
  background-color: #9fd5b3;
  border: 0.25em solid #9fd5b3;
  color: #004544; }

:host([type="toggle"][color="color-2"][clicked=false]) button:hover {
  background-color: rgba(159, 213, 179, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-2"][clicked=true]) button {
  background-color: #CF3234;
  border: 0.25em solid #CF3234;
  color: #fff; }

:host([type="toggle"][color="color-2"][clicked=true]) button:hover {
  background-color: rgba(207, 50, 52, 0.3);
  color: #000;
  transform: 1s ease-in-out; }

:host([type="border"][color="color-2"]) button {
  border: 0.25em solid #9fd5b3;
  background-color: transparent;
  color: #004544; }

:host([type="border"][color="color-2"]) button:hover {
  background-color: #9fd5b3;
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-3"]) button {
  border: .25em solid transparent;
  background-color: transparent;
  color: #004544; }

:host([type="compress"][color="color-3"]) button:hover {
  background-color: rgba(228, 143, 34, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-3"][active="false"]) button {
  cursor: not-allowed;
  background-color: rgba(228, 143, 34, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="solid"][color="color-3"]) button {
  background-color: #E48F22;
  border: 0.25em solid #E48F22;
  color: #004544; }

:host([type="solid"][color="color-3"]) button:hover {
  border: 0.25em solid rgba(228, 143, 34, 0.3);
  background-color: rgba(228, 143, 34, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-3"][clicked=false]) button {
  background-color: #9fd5b3;
  border: 0.25em solid #9fd5b3;
  color: #004544; }

:host([type="toggle"][color="color-3"][clicked=false]) button:hover {
  background-color: rgba(159, 213, 179, 0.3);
  color: #004544;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-3"][clicked=true]) button {
  background-color: #CF3234;
  border: 0.25em solid #CF3234;
  color: #fff; }

:host([type="toggle"][color="color-3"][clicked=true]) button:hover {
  background-color: rgba(207, 50, 52, 0.3);
  color: #000;
  transform: 1s ease-in-out; }

:host([type="border"][color="color-3"]) button {
  border: 0.25em solid #E48F22;
  background-color: transparent;
  color: #004544; }

:host([type="border"][color="color-3"]) button:hover {
  background-color: #E48F22;
  color: #004544;
  transform: 1s ease-in-out; }
</style>
<button @click=${this.clickHandler} aria-disabled="${"true"===this.attributes.active.value?!1:!0}" role="button" aria-pressed="false"><slot></slot></button>`}// properties available to the custom element for data binding
static get properties(){return{type:{name:"type",type:"String",value:"solid"},color:{name:"color",type:"String",value:"color-1"},clicked:{name:"clicked",type:"Bolean",value:!1},active:{name:"active",type:"Bolean",value:!0}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */tag(){return"detroit-btn"}// life cycle
constructor(){super();this.tag=DetroitBtn.tag;// map our imported properties json to real props on the element
// @notice static getter of properties is built via tooling
// to edit modify src/detroit-btn-properties.json
let obj=DetroitBtn.properties;for(let p in obj){if(obj.hasOwnProperty(p)){if(this.hasAttribute(p)){this[p]=this.getAttribute(p)}else{this.setAttribute(p,obj[p].value);this[p]=obj[p].value}}}}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback()}// static get observedAttributes() {
//   return [];
// }
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
// Observer type for changes
clickHandler(event){if("false"===this.attributes.clicked.value){this.attributes.clicked.value=!0;event.target.setAttribute("aria-pressed",this.attributes.clicked.value)}else{this.attributes.clicked.value=!1;event.target.setAttribute("aria-pressed",this.attributes.clicked.value)}}}customElements.define("detroit-btn",DetroitBtn);export{DetroitBtn};