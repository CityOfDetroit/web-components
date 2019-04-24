/**
 * Copyright 2019
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";

/**
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
 */
class DetroitMainMenuBtn extends LitElement {
  // render function
  render() {
    return html`
      <style>
        @import url("https://fonts.googleapis.com/css?family=Montserrat:300,300i,700,900");
        :host {
          display: block;
        }
        :host button {
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 5em;
          height: 5em;
          background-color: #feb70d;
          color: #000;
          transition: transform 250ms ease;
          cursor: pointer;
          z-index: 200;
          font-weight: bold;
          padding: 1em 1em 0.5em 1em;
        }
        :host button span {
          position: relative;
          display: block;
          width: 100%;
          height: 0.25em;
          background-color: #000;
          float: left;
          transform-origin: center center;
          transition: transform 250ms ease;
          z-index: 200;
        }
        :host button span:nth-of-type(1) {
          transform: translateY(-0.25em);
        }
        :host button span:nth-of-type(3) {
          transform: translateY(0.25em);
          margin-bottom: 0.4em;
        }

        :host([clicked="true"]) button span {
          background-color: #000;
          transition: transform 250ms ease;
        }
        :host([clicked="true"]) button span:nth-of-type(1) {
          transform: translateY(1px) rotate(45deg);
        }
        :host([clicked="true"]) button span:nth-of-type(2) {
          display: none;
        }
        :host([clicked="true"]) button span:nth-of-type(3) {
          transform: translateY(-1px) rotate(-45deg);
          margin-bottom: 0.8em;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <button
        .clicked="${this.clicked}"
        @click=${this.clickHandler}
        role="button"
      >
        <span></span>
        <span></span>
        <span></span>
        <slot></slot>
      </button>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      clicked: {
        name: "clicked",
        type: "Boolean",
        value: false,
        reflectToAttribute: true,
        observer: "_clickedChanged"
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "detroit-main-menu-btn";
  }

  // life cycle
  constructor() {
    super();

    this.tag = DetroitMainMenuBtn.tag;
    // map our imported properties json to real props on the element
    // @notice static getter of properties is built via tooling
    // to edit modify src/detroit-main-menu-btn-properties.json
    let obj = DetroitMainMenuBtn.properties;
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
  // Observer clicked for changes
  _clickedChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  clickHandler(event) {
    if (this.attributes.clicked.value === "false") {
      this.attributes.clicked.value = true;
      this.setAttribute("aria-expanded", this.attributes.clicked.value);
    } else {
      this.attributes.clicked.value = false;
      this.setAttribute("aria-expanded", this.attributes.clicked.value);
    }
  }
}
customElements.define("detroit-main-menu-btn", DetroitMainMenuBtn);
export { DetroitMainMenuBtn };
