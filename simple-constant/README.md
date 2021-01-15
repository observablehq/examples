# Observable Example: Simple Constant

See it live: https://observablehq.github.io/examples/simple-constant/

This example demonstrates extracting values from an [example notebook](https://observablehq.com/d/e893bb16368a0a92) using [*module*.value](https://github.com/observablehq/runtime/blob/master/README.md#module_value). This is convenient when the value of the cell never changes; see the [simple generator example](../simple-generator/) for an alternative technique that allows observing values that change over time.

```js
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import notebook from "https://api.observablehq.com/d/e893bb16368a0a92.js?v=3";

(async () => {
  const runtime = new Runtime();
  const main = runtime.module(notebook);

  // Extract the value of “answer”.
  const answer = await module.value("answer");
  console.log(`The answer is ${answer}.`); // The answer is 42.

  // Extract the value of “greet”.
  const greet = await module.value("greet");
  console.log(greet("world")); // Hello, world!
})();
```
