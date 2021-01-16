# Observable Example: Custom Live Data

See it live: https://observablehq.github.io/examples/custom-live-data/

When you embed an Observable notebook, you can also override any cell with your own values using [*module*.redefine](https://github.com/observablehq/runtime/blob/master/README.md#module_redefine). For example:

```js
// Redefine the cell “data” as a generator that emits new data in response to
// web socket messages. (Note: if you need to terminate this generator in the
// future, call generator.return or runtime.dispose.)
main.redefine("data", library.Generators.observe(notify => {
  const data = [];
  data.x = "Size (KB)";
  data.y = "Count";
  const socket = new WebSocket("wss://ws.blockchain.info/inv");
  socket.addEventListener("open", () => {
    socket.send(JSON.stringify({op: "unconfirmed_sub"}));
  });
  socket.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    if (message.op === "utx") {
      data.push(Math.min(999, message.x.size));
      notify(data);
    }
  });
  return () => socket.close();
}));
```

This is akin to doing

```js
import {chart} with {myData as data} from "@d3/histogram"
```

within a notebook. This example shows a [histogram](https://observablehq.com/@d3/histogram) where the data has been replaced to show a live histogram of recent Bitcoin transaction sizes via [Blockchain’s Websocket API](https://www.blockchain.com/api/api_websocket). Note that here `data` is redefined as a _generator_, and the chart re-renders whenever the data changes!

See also the [custom static data example](../custom-data/).
