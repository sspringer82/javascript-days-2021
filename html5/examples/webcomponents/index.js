class MyComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('my-component');
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  customElements.define('my-component', MyComponent);
});
