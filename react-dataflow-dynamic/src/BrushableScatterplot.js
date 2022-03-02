import {useEffect, useRef, useState} from "react";

function BrushableScatterplot({height, setSelection}) {
  const ref = useRef();
  const [module, setModule] = useState();

  useEffect(() => {
    async function load() {
      // Dynamically load the Runtime and the latest published version of the
      // notebook, https://observablehq.com/@d3/brushable-scatterplot.
      const {Runtime, Inspector} = await import("https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js");
      const {default: notebook} = await import("https://api.observablehq.com/@d3/brushable-scatterplot.js?v=3");

      const runtime = new Runtime();
      const main = runtime.module(notebook, name => {
        // Embed the chart.
        if (name === "viewof selection") {
          return new Inspector(ref.current);
        }
        // Propagate selection state from Observable to React.
        if (name === "selection") {
          return {fulfilled: setSelection};
        }
      });
      setModule(main);
      return () => {
        setModule(undefined);
        runtime.dispose();
      };
    }
    load();
  }, []);

  // Propagate height state from React to Observable.
  useEffect(() => {
    if (module !== undefined) {
      module.redefine("height", height);
    }
  }, [height, module]);

  return (
    <div className="BrushableScatterplot">
      <div ref={ref}></div>
      <p>Credit: <a href="https://observablehq.com/@d3/brushable-scatterplot">Mike Bostock</a></p>
    </div>
  );
}

export default BrushableScatterplot;
