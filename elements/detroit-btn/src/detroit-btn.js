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
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

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
