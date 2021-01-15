import React, {useRef, useEffect, useState} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/brushable-scatterplot";

function BrushableScatterplot({height, setSelection}) {
  const ref = useRef();
  const [module, setModule] = useState()

  useEffect(() => {
    const newModule = (new Runtime).module(notebook, name => {
      if (name === "viewof selection") return Inspector.into(ref.current.querySelector(".viewof-selection"))();

      // passes selection back up to parent component
      if (name === "selection") return {fulfilled(value) { setSelection(value); }};
    });
    setModule(newModule)
  }, []);

  // receives height updates from parent
  useEffect(() => {
    if (module) module.redefine("height", height)
  }, [height])

  return (
    <div className="BrushableScatterplot" ref={ref}>
      <div className="viewof-selection"></div>
      <p>Credit: <a href="https://observablehq.com/@d3/brushable-scatterplot">Brushable Scatterplot by D3</a></p>
    </div>
  );
}

export default BrushableScatterplot;
