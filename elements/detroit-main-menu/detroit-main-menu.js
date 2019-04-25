/**
 * Copyright 2019
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";
import "@cityofdetroit/detroit-btn/detroit-btn.js";
import "@cityofdetroit/detroit-main-menu-btn/detroit-main-menu-btn.js";
/**
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
 */
class DetroitMainMenu extends LitElement {
  
  // render function
  render() {
    return html`
<style>@import url("https://fonts.googleapis.com/css?family=Montserrat:300,300i,700,900");
:host {
  font-family: 'Montserrat', sans-serif;
  display: block; }
  :host nav {
    position: fixed;
    top: 0;
    right: -30em;
    background-color: #000;
    color: #fff;
    width: 30em;
    max-width: 100%;
    transition: right 500ms ease;
    z-index: 5; }
    :host nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0; }
      :host nav ul li {
        display: flex;
        align-items: stretch; }
        :host nav ul li a {
          flex: 1;
          display: flex;
          text-decoration: none;
          color: #fff; }
          :host nav ul li a span {
            margin: auto 1em; }
        :host nav ul li a:hover {
          color: #004445;
          background-color: #9FD5B3; }
        :host nav ul li detroit-btn {
          margin: auto;
          width: 5em; }

:host([active="true"]) nav {
  right: 0em;
  transition: right 500ms ease; }

:host([hidden]) {
  display: none; }
</style>
<detroit-main-menu-btn .clicked="${this.clicked}" @click=${this.clickHandler} > 
    MENU
</detroit-main-menu-btn>
<nav>
    <ul>
        <li>
            <a href="#departments"><span>DEPARMENTS</span></a><detroit-btn type="compress" color="white"><span slot="icon-right"><iron-icon icon="chevron-right"></iron-icon></span></detroit-btn>
        </li>
        <li>
            <a href="#governemt"><span>GOVERNMENT</span></a><detroit-btn type="compress" color="white"><span slot="icon-right"><iron-icon icon="chevron-right"></iron-icon></span></detroit-btn>
        </li>
        <li>
            <a href="#how-do-i"><span>HOW DO I</span></a><detroit-btn type="compress" color="white"><span slot="icon-right"><iron-icon icon="chevron-right"></iron-icon></span></detroit-btn>
        </li>
    <ul>
</nav>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  "active": {
    "name": "active",
    "type": "Boolean",
    "value": false,
    "reflectToAttribute": true,
    "observer": "_activeChanged"
  }
}
;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "detroit-main-menu";
  }

  // life cycle
  constructor() {
    super();

    this.tag = DetroitMainMenu.tag;
    // map our imported properties json to real props on the element
    // @notice static getter of properties is built via tooling
    // to edit modify src/detroit-main-menu-properties.json
    let obj = DetroitMainMenu.properties;
    for (let p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (this.hasAttribute(p)) {
          this[p] = this.getAttribute(p);
        } else {
          this.setAttribute(p, obj[p].value);
          this[p] = obj[p].value;
        }
      }
    }
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }
  // static get observedAttributes() {
  //   return [];
  // }
  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {
  //   console.log(attr);
  // }
  // Observer active for changes
  _activeChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  clickHandler(event) {
    // console.log(event);
    this.attributes.active.value = this.shadowRoot.childNodes[4].getAttribute(
      "clicked"
    );
  }
}
customElements.define("detroit-main-menu", DetroitMainMenu);
export { DetroitMainMenu };
