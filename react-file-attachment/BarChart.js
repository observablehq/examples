import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/bar-chart";

function BarChart() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      (new Runtime).module(notebook, name => {
        if (name === "chart") return Inspector.into(ref.current.querySelector(".chart"))();
      });
    }
  }, []);

  return (
    <div className="BarChart" ref={ref}>
      <div className="chart"></div>
      <p>Credit: <a href="https://observablehq.com/@d3/bar-chart">Bar Chart by D3</a></p>
    </div>
  );
}

export default BarChart;
