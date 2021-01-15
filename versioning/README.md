# Observable Example: Versioning

See it live: https://observablehq.github.io/examples/versioning/

This example demonstrates how to specify the version of a notebook when embedding.

An unversioned import of the latest published version:

```js
import define from "https://api.observablehq.com/@observablehq/downloading-and-embedding-notebooks.js?v=3";
```

A versioned import of a specific published version:

```js
import define from "https://api.observablehq.com/@observablehq/downloading-and-embedding-notebooks@1046.js?v=3";
```
