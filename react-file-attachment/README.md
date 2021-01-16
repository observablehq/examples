# Observable Example: React + FileAttachment

See it live: https://observablehq.github.io/examples/react-file-attachment/

This Rollup configuration supports file attachments, whereas many React environments (like the one you get from `create-react-app`) stumble on file attachments’ use of import.meta.

```jsx
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
```

See also [this example using create-react-app](../react-create-react-app), which tweaks the way file attachments are loaded.
