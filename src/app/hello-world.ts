class HelloWorldComponent extends HTMLElement {
  clickEvent: any;
  shadowRoot: any;

  constructor() {
    super();

    // this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.clickEvent = new CustomEvent('click', {
      bubbles: true,
      cancelable: false,
    });
  }

  connectedCallback() {
    this.innerHTML = `
    <h1>Hello world!</h1>
    <button id="my-button" type="button">Click Me</button>
    `;
    // console.log(this.shadowRoot);
    // console.log('off');
    // const shadowRoot = this.attachShadow({ mode: 'open' });
    // let btn = this.querySelector('button');
    // console.log(btn);
    this.querySelector('#my-button').addEventListener('click', (e) => {
      // console.log('checked', e.target);
      console.log('oh good');
      this.dispatchEvent(this.clickEvent);
    });
  }
}

customElements.define('hello-world', HelloWorldComponent);
