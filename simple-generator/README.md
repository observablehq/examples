# Observable Example: Simple Generator

See it live: https://observablehq.github.io/examples/simple-generator/

This example demonstrates listening to the value of a [generator cell](https://observablehq.com/@observablehq/introduction-to-generators) in an Observable-hosted [example notebook](https://observablehq.com/@jashkenas/tick). If the value of the desired cell never changes, see the [simple constant](../simple-constant/) example for how to read the value once.

```js
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import notebook from "https://api.observablehq.com/@jashkenas/tick.js?v=3";

// Select the element into which we’ll show the observed value.
const display = document.querySelector("#tick");

// Load the notebook, observing the “tick” cell with a custom Inspector that
// renders any fulfilled value into the previously-selected element.
const runtime = new Runtime();
const main = runtime.module(notebook, name => {
  if (name === "tick") {
    return {
      fulfilled(value) {
        display.textContent = value;
      },
      rejected(error) { // optional, if you want to handle errors
        display.textContent = error;
      }
    };
  }
});
```
