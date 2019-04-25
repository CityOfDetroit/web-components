/**
 * Copyright 2019
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
/**
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
 */
class DetroitBtn extends LitElement {
  
  // render function
  render() {
    return html`
<style>@import url("https://fonts.googleapis.com/css?family=Montserrat:300,300i,700,900");
:host {
  display: inline;
  font-family: 'Montserrat', sans-serif;
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
  color: #004445; }

:host([type="compress"][color="color-1"]) button:hover {
  background-color: #004445;
  color: #fff;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-1"][active="false"]) button {
  cursor: not-allowed;
  background-color: rgba(0, 68, 69, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="solid"][color="color-1"]) button {
  background-color: #004445;
  border: 0.25em solid #004445;
  color: #fff; }

:host([type="solid"][color="color-1"]) button:hover {
  border: 0.25em solid rgba(0, 68, 69, 0.3);
  background-color: rgba(0, 68, 69, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-1"][clicked=false]) button {
  background-color: #9FD5B3;
  border: 0.25em solid #9FD5B3;
  color: #004445; }

:host([type="toggle"][color="color-1"][clicked=false]) button:hover {
  background-color: rgba(159, 213, 179, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-1"][clicked=true]) button {
  background-color: #cb4d4f;
  border: 0.25em solid #cb4d4f;
  color: #fff; }

:host([type="toggle"][color="color-1"][clicked=true]) button:hover {
  background-color: rgba(203, 77, 79, 0.3);
  color: #000;
  transform: 1s ease-in-out; }

:host([type="border"][color="color-1"]) button {
  border: 0.25em solid #004445;
  background-color: transparent;
  color: #004445; }

:host([type="border"][color="color-1"]) button:hover {
  background-color: #004445;
  color: #fff;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-2"]) button {
  border: .25em solid transparent;
  background-color: transparent;
  color: #004445; }

:host([type="compress"][color="color-2"]) button:hover {
  background-color: #9FD5B3;
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-2"][active="false"]) button {
  cursor: not-allowed;
  background-color: rgba(159, 213, 179, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="solid"][color="color-2"]) button {
  background-color: #9FD5B3;
  border: 0.25em solid #9FD5B3;
  color: #004445; }

:host([type="solid"][color="color-2"]) button:hover {
  border: 0.25em solid rgba(159, 213, 179, 0.3);
  background-color: rgba(159, 213, 179, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-2"][clicked=false]) button {
  background-color: #9FD5B3;
  border: 0.25em solid #9FD5B3;
  color: #004445; }

:host([type="toggle"][color="color-2"][clicked=false]) button:hover {
  background-color: rgba(159, 213, 179, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-2"][clicked=true]) button {
  background-color: #cb4d4f;
  border: 0.25em solid #cb4d4f;
  color: #fff; }

:host([type="toggle"][color="color-2"][clicked=true]) button:hover {
  background-color: rgba(203, 77, 79, 0.3);
  color: #000;
  transform: 1s ease-in-out; }

:host([type="border"][color="color-2"]) button {
  border: 0.25em solid #9FD5B3;
  background-color: transparent;
  color: #004445; }

:host([type="border"][color="color-2"]) button:hover {
  background-color: #9FD5B3;
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-3"]) button {
  border: .25em solid transparent;
  background-color: transparent;
  color: #004445; }

:host([type="compress"][color="color-3"]) button:hover {
  background-color: #f5b842;
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="compress"][color="color-3"][active="false"]) button {
  cursor: not-allowed;
  background-color: rgba(245, 184, 66, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="solid"][color="color-3"]) button {
  background-color: #f5b842;
  border: 0.25em solid #f5b842;
  color: #004445; }

:host([type="solid"][color="color-3"]) button:hover {
  border: 0.25em solid rgba(245, 184, 66, 0.3);
  background-color: rgba(245, 184, 66, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-3"][clicked=false]) button {
  background-color: #9FD5B3;
  border: 0.25em solid #9FD5B3;
  color: #004445; }

:host([type="toggle"][color="color-3"][clicked=false]) button:hover {
  background-color: rgba(159, 213, 179, 0.3);
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="color-3"][clicked=true]) button {
  background-color: #cb4d4f;
  border: 0.25em solid #cb4d4f;
  color: #fff; }

:host([type="toggle"][color="color-3"][clicked=true]) button:hover {
  background-color: rgba(203, 77, 79, 0.3);
  color: #000;
  transform: 1s ease-in-out; }

:host([type="border"][color="color-3"]) button {
  border: 0.25em solid #f5b842;
  background-color: transparent;
  color: #004445; }

:host([type="border"][color="color-3"]) button:hover {
  background-color: #f5b842;
  color: #004445;
  transform: 1s ease-in-out; }

:host([type="compress"][color="white"]) button {
  border: .25em solid transparent;
  background-color: transparent;
  color: #fff; }

:host([type="compress"][color="white"]) button:hover {
  background-color: #004445;
  color: #fff;
  transform: 1s ease-in-out; }

:host([type="compress"][color="white"][active="false"]) button {
  cursor: not-allowed;
  background-color: rgba(255, 255, 255, 0.4);
  color: #fff;
  transform: 1s ease-in-out; }

:host([type="solid"][color="white"]) button {
  background-color: #fff;
  border: 0.25em solid #fff;
  color: #004445; }

:host([type="solid"][color="white"]) button:hover {
  border: 0.25em solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="white"][clicked=false]) button {
  background-color: #9FD5B3;
  border: 0.25em solid #9FD5B3;
  color: #004445; }

:host([type="toggle"][color="white"][clicked=false]) button:hover {
  background-color: rgba(159, 213, 179, 0.3);
  color: #fff;
  transform: 1s ease-in-out; }

:host([type="toggle"][color="white"][clicked=true]) button {
  background-color: #cb4d4f;
  border: 0.25em solid #cb4d4f;
  color: #fff; }

:host([type="toggle"][color="white"][clicked=true]) button:hover {
  background-color: rgba(203, 77, 79, 0.3);
  color: #fff;
  transform: 1s ease-in-out; }

:host([type="border"][color="white"]) button {
  border: 0.25em solid #fff;
  background-color: transparent;
  color: #fff; }

:host([type="border"][color="white"]) button:hover {
  background-color: #fff;
  color: #004445;
  transform: 1s ease-in-out; }
</style>
<button @click=${this.clickHandler} aria-disabled="${(this.attributes.active.value === "true") ? false : true }" role="button" aria-pressed="false">
    <slot name="icon-left"></slot>
    <slot name="title"></slot>
    <slot name="icon-right"></slot>
</button>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  "type": {
    "name": "type",
    "type": "String",
    "value": "solid"
  },
  "color": {
    "name": "color",
    "type": "String",
    "value": "color-1"
  },
  "clicked": {
    "name": "clicked",
    "type": "Bolean",
    "value": false
  },
  "active": {
    "name": "active",
    "type": "Bolean",
    "value": true
  }
}
;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "detroit-btn";
  }

  // life cycle
  constructor() {
    super();

    this.tag = DetroitBtn.tag;
    // map our imported properties json to real props on the element
    // @notice static getter of properties is built via tooling
    // to edit modify src/detroit-btn-properties.json
    let obj = DetroitBtn.properties;
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

  // attributeChangedCallback(attr, oldValue, newValue) {}
  // Observer type for changes

  clickHandler(event) {
    if (this.attributes.clicked.value === "false") {
      this.attributes.clicked.value = true;
      event.target.setAttribute("aria-pressed", this.attributes.clicked.value);
    } else {
      this.attributes.clicked.value = false;
      event.target.setAttribute("aria-pressed", this.attributes.clicked.value);
    }
  }
}
customElements.define("detroit-btn", DetroitBtn);
export { DetroitBtn };
