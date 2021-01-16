# Observable Example: Custom Data

See it live: https://observablehq.github.io/examples/custom-data/

When you embed an Observable notebook, you can also override any cell with your own values using [*module*.redefine](https://github.com/observablehq/runtime/blob/master/README.md#module_redefine). For example:

```js
// Redefine the cell “data” as the contents of the local file population.json;
// this will affect the chart embedded above.
main.redefine("data", fetch("population.json").then(response => response.json()));
```

This is akin to doing

```js
import {chart} with {myData as data} from "@d3/zoomable-sunburst"
```

within a notebook.

This example shows a [Zoomable Sunburst](https://observablehq.com/@d3/zoomable-sunburst) where the data has been replaced by the local `population.json`, which uses [data from the Census Bureau](https://www.census.gov/data/datasets/time-series/demo/popest/2010s-counties-total.html). Note that here `data` is redefined as a _promise_, and the chart renders with the data as soon as it resolves!

The data was previously converted from a flat CSV (with columns for name, parent, and value) to a hierarchy using [d3.stratify](https://observablehq.com/@d3/d3-stratify), and the hierarchy was then [saved to JSON](https://observablehq.com/@tophtucker/d3-hierarchy-to-json).

See also the [custom live data example](../custom-live-data/).
