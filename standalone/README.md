# Example: A Standalone Observable Notebook

This example demonstrates how to [download](https://observablehq.com/@observablehq/downloading-and-embedding-notebooks) and run an Observable notebook with zero external dependencies in vanilla JavaScript! We also demonstrate substituting a local dataset and overriding the behavior of the notebook at runtime. You can apply the techniques here to any Observable notebook. (License-permitting; the D3 notebooks are ISC licensed.)

## How-To

Go to the desired notebook and click **Download code** in the notebook menu (the three horizontal dots in the top-right corner of the screen). Here we’ll use [D3’s Bar Chart Race](https://observablehq.com/@d3/bar-chart-race). Alternatively, you can download directly from the command line, which is nice for automation:

```
curl -o bar-chart-race.tgz 'https://api.observablehq.com/@d3/bar-chart-race.tgz?v=3'
```

Open and expand the archive into a new folder, `bar-chart-race`.

```
mkdir bar-chart-race
tar -C bar-chart-race -xvzf bar-chart-race.tgz
```

If the notebook requires external libraries, such as [D3](https://d3js.org), you can download local copies of the libraries to avoid loading them from an external CDN (such as jsDelivr) at runtime. D3’s Bar Chart Race uses D3, so we download the latest compatible version from npm:

```
curl -o d3.js 'https://cdn.jsdelivr.net/npm/d3@6'
```

All Observable notebooks require the open-source [Observable runtime](https://github.com/observablehq/runtime), which powers [Observable dataflow](https://observablehq.com/@observablehq/how-observable-runs). And don’t worry — the runtime is small, about 10KB gzipped. The runtime comes bundled with the notebook download, but if you prefer, you can download it yourself from npm.

```
curl -o runtime.js 'https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js'
```

Some notebooks, including D3’s Bar Chart Race, use [file attachments](https://observablehq.com/@observablehq/file-attachments). Attached files are automatically included in the notebook download, too, and thus do not require external dependencies. (Note that file attachments use [import.meta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta) syntax which isn’t supported by some bundlers.) However, here we’ll further demonstrate replacing the notebook’s data with our own CSV file in the same structure.

```js
// Redefine the “data” cell to use our CSV file (in the same format).
main.redefine("data", d3.csv("./world-economies.csv", d3.autoType));
```

If you’d like to load data from an API instead of a file, replace the d3.csv call above with a [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). Just make sure that the promised value conforms to the structure that the notebook expects: here, an array of objects with `{date, name, category, value}` properties, where the `date` field is a date, the `name` and `category` are strings, and the `value` is a number. Inspect the notebook’s *data* cell if you’re unsure what format is expected. (If you already have the data loaded, you can also pass an array directly, rather than needing a promise.)

Lastly, we need an HTML file to host the chart. The full source is in [index.html](./index.html). Here’s the relevant bit:

```html
<div name="viewof replay"></div>
<div name="chart"></div>
<script src="d3.js"></script>
<script type="module">

import {Runtime, Library, Inspector} from "./runtime.js";
import barChartRace from "./bar-chart-race/index.js";

// Initialize the Observable Runtime, telling it to use our local copy of D3
// rather than loading one from a CDN.
const runtime = new Runtime(new Library(name => {
  switch (name) {
    case "d3@6": return d3;
  }
}));

// Show the output of the “chart” and “viewof replay” cells in the DIV elements
// with the corresponding name.
const main = runtime.module(barChartRace, name => {
  if (["chart", "viewof replay"].includes(name)) {
    return new Inspector(document.querySelector(`[name='${name}']`));
  }
});

// Redefine the “data” cell to use our CSV file (in the same format).
main.redefine("data", d3.csv("./cities.csv", d3.autoType));

// Redefine the “k” cell to disable tweening between keyframes. (By default,
// D3’s Bar Chart Race computes 11 interstitial frames between rows in the data;
// however, this dataset is already interpolated with one observation per year.
// Eliminating the tweened frames makes the animation much faster.)
main.redefine("k", 1);

</script>
```

To see it live:

https://observablehq.github.io/notebook-download-example/

## Further Resources

If you’re doing this in the context of a larger web application, you can call [*runtime*.dispose](https://github.com/observablehq/runtime/blob/master/README.md#runtime_dispose) to clean up if you no longer want to show the chart. For more advanced techniques, including two-way coordination between vanilla JavaScript and Observable JavaScript, see our tutorial on [embedding Observable in React](https://next.observablehq.com/@observablehq/how-to-embed-a-notebook-in-a-react-app).

If you’d prefer live embeds to standalone code, see our [embed examples](https://github.com/observablehq/examples).
