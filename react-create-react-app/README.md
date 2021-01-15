# Observable + create-react-app

This repo was created using `create-react-app`:

```
yarn create react-app react-zoomable-sunburst
```

To install the Observable runtime:

```
yarn add @observablehq/runtime
```

Then, go to the [D3 Zoomable Sunburst](https://observablehq.com/@d3/zoomable-sunburst) and click **Download code** in the notebook menu. Or, download this link:

https://api.observablehq.com/@d3/zoomable-sunburst.tgz?v=3

Copy the JavaScript files into src/@d3/zoomable-sunburst.

Edit the file attachments map to use an absolute path:

```js
const fileAttachments = new Map([["flare-2.json","/flare-2.json"]]);
```

This step is only necessary because create-react-app does not support the standard [import.meta syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta), and while there is a [@babel/plugin-syntax-import-meta](https://www.npmjs.com/package/@babel/plugin-syntax-import-meta), create-react-app does not allow you to add custom Babel plugins without ejecting.

Lastly, to instantiate the notebook, see App.js:

```js
import {Runtime, Inspector} from '@observablehq/runtime';
import React, {useEffect, useRef} from 'react';
import sunburst from './@d3/zoomable-sunburst';
import './App.css';

export default function App() {
  const ref = useRef();

  useEffect(
    () => {
      const runtime = new Runtime();
      runtime.module(sunburst, (name) => {
        if (name === "chart") {
          return new Inspector(ref.current);
        }
      });
      return () => runtime.dispose();
    },
    []
  );

  return (
    <>
      <h1>Hello, Observable!</h1>
      <div ref={ref} />
    </>
  );
}
```
