import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/bar-chart";

function BarChart() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") {
        return new Inspector(ref.current);
      }
    });
    return () => runtime.dispose();
  }, []);

  return (
    <div className="BarChart">
      <div ref={ref}></div>
      <p>Credit: <a href="https://observablehq.com/@d3/bar-chart">Mike Bostock</a></p>
    </div>
  );
}

export default BarChart;
