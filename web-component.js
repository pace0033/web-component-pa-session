const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    :host{
      display: block;
    }
    .card {
      max-width: 10rem;
      background-color: red;
    }
  </style>
  <div class="card">
    <slot name="thumbnail"></slot>
    <slot name="title"></slot>
    <slot name="description"></slot>
  </div>
`;

export default class Card extends HTMLElement {
  static defaultSharedProp = 5000; //static prop
  #age = 30; //private variable
  sample = 'hello'; //public variable

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
    const clone = template.content.cloneNode(true);
    this.root.appendChild(clone);
    this.div = this.root.querySelector('div.thing');
  }

  static get observedAttributes() {
    return ['a', 'abc'];
  }
  get a() {
    //when someone asks for a property, get the value from the attribute
    return this.getAttribute('a');
  }
  set a(value) {
    //when someone updates a property, update the attribute too
    this.setAttribute('a', value);
  }

  connectedCallback() {
    //when the component is added to the DOM
    console.log('added!');
  }
  disconnectedCallback() {
    //when the component is removed from the DOM
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    //when an attribute is added or changed
  }

  #privateMethod() {
    //can only be called from inside the component
  }
  publicMethod() {
    //can be called from web page
  }
}

window.customElements.define('will-card', Card);
