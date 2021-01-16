import React, {useRef, useEffect, useState} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/brushable-scatterplot";

function BrushableScatterplot({height, setSelection}) {
  const ref = useRef();
  const [module, setModule] = useState();

  useEffect(() => {
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
