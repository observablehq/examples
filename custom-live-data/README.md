# Observable Example: Custom Live Data

See it live: https://observablehq.github.io/examples/custom-live-data/

When you embed an Observable notebook, you can also override any cell with your own values. This is akin to doing

```js
import {chart} with {myData as data} from "@d3/histogram"
```

within a notebook. This example shows a [histogram](https://observablehq.com/@d3/histogram) where the data has been replaced to show a live histogram of recent Bitcoin transaction sizes via [Blockchain’s Websocket API](https://www.blockchain.com/api/api_websocket).

See also the [custom static data example](../custom-data/).
