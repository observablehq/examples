import React, {useState} from "react";
import BrushableScatterplot from "./BrushableScatterplot.js";

export const App = () => {
  // passed to notebook
  const [height, setHeight] = useState(600)

  // setter passed to notebook so it can set and this component can render
  const [selection, setSelection] = useState([])

  return (
    <>
      <BrushableScatterplot height={height} setSelection={setSelection} />
      <div style={{padding: "1em", border: "1px solid gray"}}>
        <p>Height of chart: <input type="number" value={height} onChange={e => setHeight(e.target.value)} /></p>
        <p>Current selection: {selection.length ? selection.map(d => d.name).join(", ") : "empty"}</p>
      </div>
    </>
  );
}
