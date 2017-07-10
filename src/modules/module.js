export default class Module {
    constructor(props = {}) {
      this.id = props.id;
    }

    foo() {
      return `foo ${this.id}`;
    }
}
