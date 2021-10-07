import model from './model.js';

class Form extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('formTemplate');
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(templateContent.cloneNode(true));

    shadowRoot.getElementById('form').addEventListener('submit', (e) => {
      e.preventDefault();

      const entry = {
        id: parseInt(shadowRoot.getElementById('id').value, 10),
        username: shadowRoot.getElementById('username').value,
        password: shadowRoot.getElementById('password').value,
        url: shadowRoot.getElementById('url').value,
        notes: shadowRoot.getElementById('notes').value,
      };

      this.save(entry);
    });
  }

  static get observedAttributes() {
    return ['id'];
  }

  loadData(id) {
    const data = model.getOneById(parseInt(id, 10));
    for (const [key, value] of Object.entries(data)) {
      this.shadowRoot.getElementById(key).value = value;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.getElementById('id').value = '';
    switch (name) {
      case 'id':
        if (!newValue) {
          break;
        }
        this.loadData(newValue);
        break;
    }
  }

  save(entry) {
    model.save(entry);
    const event = new CustomEvent('save');
    this.dispatchEvent(event);
    this.shadowRoot.getElementById('form').reset();
  }
}

customElements.define('pw-form', Form);
