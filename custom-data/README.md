# Observable Example: Custom Data

See it live: https://observablehq.github.io/examples/custom-data/

When you embed an Observable notebook, you can also override any cell with your own values. This is akin to doing

```js
import {chart} with {myData as data} from "@d3/zoomable-sunburst"
```

within a notebook. This example shows a [Zoomable Sunburst](https://observablehq.com/@d3/zoomable-sunburst) where the data has been replaced by the local `population.json`, which uses [data from the Census Bureau](https://www.census.gov/data/datasets/time-series/demo/popest/2010s-counties-total.html).

The data was previously converted from a flat CSV (with columns for name, parent, and value) to a hierarchy using [d3.stratify](https://observablehq.com/@d3/d3-stratify), and the hierarchy was then [saved to JSON](https://observablehq.com/@tophtucker/d3-hierarchy-to-json).

Note that, in this case, `data` is actually redefined as a _promise_, and the chart renders with the data as soon as it resolves! If we didn’t have to fetch the file asynchronously, the redefinition wouldn’t have to be inside an asynchronous anonymous self-invoking function (the `(async function() { … })()` part).
