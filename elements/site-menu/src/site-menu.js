/**
 * Copyright 2019
 * @license MIT, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

/**
 * `site-menu`
 * `Main site menu of Detroitmi.gov`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SiteMenu extends PolymerElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "site-menu";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }
  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {}
  // Observer active for changes
  _activeChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }
}
window.customElements.define(SiteMenu.tag, SiteMenu);
export { SiteMenu };
