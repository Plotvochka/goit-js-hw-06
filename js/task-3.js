'use strict';

class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value.padEnd(this.#value.length + 1, str);
  }
  padStart(str) {
    this.#value = this.#value.padStart(this.#value.length + 1, str);
  }
  padBoth(str) {
    this.#value = this.#value.padEnd(this.#value.length + 1, str);
    this.#value = this.#value.padStart(this.#value.length + 1, str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
