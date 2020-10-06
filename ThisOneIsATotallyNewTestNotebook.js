import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@ballingt/this-one-is-a-totally-new-test-notebook";

function ThisOneIsATotallyNewTestNotebook() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      (new Runtime).module(notebook, name => {
        if (name === "image") return Inspector.into(ref.current.querySelector(".image"))();
      });
    }
  }, []);

  return (
    <div className="ThisOneIsATotallyNewTestNotebook" ref={ref}>
      <div className="image"></div>
      <p>Credit: <a href="https://observablehq.com/@ballingt/this-one-is-a-totally-new-test-notebook">This one is a totally new test notebook. by Thomas Ballinger</a></p>
    </div>
  );
}

export default ThisOneIsATotallyNewTestNotebook;
