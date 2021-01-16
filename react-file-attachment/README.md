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

See also [the create-react-app example](../react-create-react-app), which edits the downloaded code directly to avoid the use of import.meta, and the more advanced [React + dataflow example](../react-dataflow/) for coordinating state between React and Observable.
