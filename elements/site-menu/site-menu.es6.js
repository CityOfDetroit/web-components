/**
 * Copyright 2019
 * @license MIT, see License.md for full text.
 */import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";/**
 * `site-menu`
 * `Main site menu of Detroitmi.gov`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */class SiteMenu extends PolymerElement{// render function
static get template(){return html`
<style>@import url("https://fonts.googleapis.com/css?family=Montserrat:300,300i,700,900");
:host {
  display: block; }

:host([hidden]) {
  display: none; }

:host([active]) {
  background: red; }

::-webkit-input-placeholder {
  
  color: #fff; }

::-moz-placeholder {
  
  color: #fff; }

:-ms-input-placeholder {
  
  color: #fff; }

:-moz-placeholder {
  
  color: #fff; }

*, *:before, *:after {
  box-sizing: border-box;
  outline: none; }

.big-menu {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 5em;
  height: 5em;
  background-color: #E48F22;
  color: #000;
  transition: transform 250ms ease;
  cursor: pointer;
  z-index: 200;
  font-weight: bold;
  letter-spacing: .2em;
  padding: 1em 1em .5em 1em; }
  .big-menu span {
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    float: left;
    transform-origin: center center;
    transition: transform 250ms ease;
    z-index: 200; }
    .big-menu span:nth-of-type(1) {
      transform: translateY(-0.5em); }
    .big-menu span:nth-of-type(3) {
      transform: translateY(0.5em);
      margin-bottom: .75em; }

#big-menu {
  display: none; }
  #big-menu:checked ~ .big-menu {
    background-color: #E48F22;
    color: #000; }
    #big-menu:checked ~ .big-menu span {
      background-color: #000;
      transition: transform 250ms ease; }
      #big-menu:checked ~ .big-menu span:nth-of-type(1) {
        transform: translateY(1px) rotate(45deg); }
      #big-menu:checked ~ .big-menu span:nth-of-type(2) {
        display: none; }
      #big-menu:checked ~ .big-menu span:nth-of-type(3) {
        transform: translateY(-1px) rotate(-45deg); }
  #big-menu:checked ~ .big-nav {
    right: 0;
    transition: right 500ms ease; }
  #big-menu:checked ~ main {
    transform: translateX(250px);
    transition: transform 500ms ease; }

.big-nav {
  position: fixed;
  top: 0;
  right: -30em;
  width: 30em;
  height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #000;
  transition: right 500ms ease;
  z-index: 5; }
  .big-nav .search-box {
    padding: 1em 6em 1em 1em;
    position: relative; }
    .big-nav .search-box input {
      padding: 1em;
      width: 100%;
      border: none;
      border-bottom: 0.2em solid #fff;
      background-color: #000; }
    .big-nav .search-box span {
      position: absolute;
      width: 1em;
      top: 1.25em;
      right: 6.5em; }
  .big-nav .nav-container {
    width: 30em;
    max-width: 100%;
    height: calc(100vh - 5em);
    position: fixed;
    transition: right 500ms ease;
    top: 5em;
    right: -30em;
    background-color: #000;
    overflow-y: auto; }
    .big-nav .nav-container .nav-item {
      display: flex; }
      .big-nav .nav-container .nav-item a {
        color: #fff;
        text-decoration: none;
        padding: .5em;
        flex: 1;
        display: flex; }
        .big-nav .nav-container .nav-item a span {
          margin: auto 0;
          padding: .5em; }
      .big-nav .nav-container .nav-item a:hover, .big-nav .nav-container .nav-item a:focus, .big-nav .nav-container .nav-item a:focus-within {
        background-color: #9fd5b3;
        color: #004544; }
      .big-nav .nav-container .nav-item .sub-items-btn {
        width: 5em;
        text-align: center;
        padding: 1em;
        font-weight: bold;
        color: #fff;
        background-color: #000;
        cursor: pointer; }
      .big-nav .nav-container .nav-item .back {
        padding: 1em;
        font-weight: bold;
        color: #fff;
        background-color: #004544;
        cursor: pointer; }
      .big-nav .nav-container .nav-item .sub-items-btn:hover, .big-nav .nav-container .nav-item .sub-items-btn:focus {
        background-color: #004544; }
      .big-nav .nav-container .nav-item .back:hover, .big-nav .nav-container .nav-item .back:focus {
        background-color: #E48F22; }
  .big-nav .active.nav-container {
    transition: right 500ms ease;
    right: 0; }
</style>
<input type="checkbox" id="big-menu"/>
<label for="big-menu" class="big-menu">
<span></span>
<span></span>
<span></span>
MENU
</label>
<nav class="big-nav" role="menubar" aria-label="site menu">
        <div class="search-box">
                <span></span>
                <input id="menu-search" type="text" name="" value="" placeholder="BUSCAR">
              </div>
              <div class="nav-item lvl-1">


                                    <a href="/how-do-i"><span>CÓMO PUEDO</span></a>
                    <div class="sub-items-btn"></div>
                    <article class="nav-container lvl-2">
                      <div class="nav-item back lvl-2">
                        <i class="fas fa-angle-left"></i> ATRÁS
                      </div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/266"><span>Apelación</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/276"><span>Compra</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/236"><span>Encontrar información</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/3866"><span>Encuentra programas para jóvenes</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/1326"><span>Encuentre o solicite empleo</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/281"><span>Haz negocios con la ciudad</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/241"><span>Información de archivos o documentos</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/3141"><span>Obtener información de la concesión</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/211"><span>Pagar multa, factura o impuesto</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/271"><span>Regístrate</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/231"><span>Registro</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/201"><span>Reportar problema</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/256"><span>Solicitar documento</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/226"><span>Solicitar servicio o asistencia</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/246"><span>Solicite o renueve la licencia</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/216"><span>Solicite o renueve un permiso o certificación</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/261"><span>Ubicar algo</span></a></div><div class="nav-item lvl-2">
                          <a href="/es/taxonomy/term/286"><span>Voluntario</span></a></div></article></div>
</nav>`}// properties available to the custom element for data binding
static get properties(){return{active:{name:"active",type:"Boolean",value:!0,reflectToAttribute:!0,observer:"_activeChanged"}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */static get tag(){return"site-menu"}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback()}/**
   * life cycle, element is removed from the DOM
   */ //disconnectedCallback() {}
// Observer active for changes
_activeChanged(newValue,oldValue){if(typeof newValue!==typeof void 0){console.log(newValue)}}}window.customElements.define(SiteMenu.tag,SiteMenu);export{SiteMenu};