const templateTodo: any = document.createElement('template');
templateTodo.innerHTML = `
  <label id="test-label"></label>
  <input id="test-input"
    style="height: 2em; width: 10em; background: red;"
    type="text"
  />
`;
class CustomInput extends HTMLElement {
    private _label: string;
    private _value: string;
    private _disabled: boolean;
    private _input: HTMLInputElement;
    constructor() {
      super();
      // this._label = '';
      // this._value = '';
      // this._disabled = false;
      // this._input = document.createElement('input');
      // this._input.type = 'text';
      // this._input.addEventListener('input', this.handleInputChange.bind(this));
    }
    get label(): string {
      return this._label;
    }
    set label(value: string) {
      this._label = value;
      this.render();
    }
    get value(): string {
      return this._value;
    }
    set value(value: string) {
      this._value = value;
      this.render();
    }
    get disabled(): boolean {
      return this._disabled;
    }
    set disabled(value: boolean) {
      this._disabled = value;
      this.render();
    }
    handleInputChange(event: Event) {
      debugger
      const inputElement = event.target as HTMLInputElement;
      this._value = inputElement.value;
      this.dispatchEvent(new CustomEvent('value-changed', { detail: this._value }));
    }
    connectedCallback() {
      this.appendChild(templateTodo.content.cloneNode(true));
      this._input = this.querySelector('#test-input');
      this._input.addEventListener('input', this.handleInputChange.bind(this));
      const useappsettings = this.getAttribute('test');
      debugger
      this.render();
    }
    render() {
    }
  }
if (!customElements.get("custom-input")) {
  customElements.define('custom-input', CustomInput);
}
  export {}