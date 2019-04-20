/**
 * Copyright 2019
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";

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
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <slot></slot>
      <div>${this.active}</div>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      active: {
        name: "active",
        type: "Boolean",
        value: "false",
        reflectToAttribute: true,
        observer: "_activeChanged"
      }
    };
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

  // attributeChangedCallback(attr, oldValue, newValue) {}
  // Observer active for changes
  _activeChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }
}
customElements.define("detroit-main-menu", DetroitMainMenu);
export { DetroitMainMenu };
