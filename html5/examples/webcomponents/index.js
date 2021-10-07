class MyComponent extends HTMLElement {
  constructor() {
    super();
    // this.init();
    this.initAsync();
  }

  async initAsync() {
    const response = await fetch('template.html');
    const data = await response.text();
    const template = document.createElement('template');
    template.innerHTML = data;
    const templateContent = template.content;
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  init() {
    const template = document.getElementById('my-component');
    const templateContent = template.content;
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  customElements.define('my-component', MyComponent);
});
