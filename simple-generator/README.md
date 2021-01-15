# Observable Example: Simple Generator

See it live: https://observablehq.github.io/examples/simple-generator/

This example demonstrates listening to the value of a [generator cell](https://observablehq.com/@observablehq/introduction-to-generators) in an Observable-hosted [example notebook](https://observablehq.com/@jashkenas/tick).

```js
// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/@jashkenas/tick.js?v=3";

// Load the notebook, observing its cells with a custom Inspector
// that renders the value of the named cell into the document.
const runtime = new Runtime();
const display = document.querySelector("#tick");
runtime.module(notebook, name => {
  if (name === "tick") return {
    fulfilled: (value) => {
      display.textContent = value;
    }
  };
});
```
