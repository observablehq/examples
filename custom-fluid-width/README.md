# Observable Example: Custom Fluid Width

See it live: https://observablehq.github.io/examples/custom-fluid-width/

By default, `width` in an embedded notebook resolves to the [body’s client width](https://github.com/observablehq/stdlib/blob/master/src/width.js). Depending on where you embed a cell, you may wish redefine the value of `width`, *e.g.* to fit the cell’s container. We can accomplish this by [redefining](https://github.com/observablehq/runtime/blob/master/README.md#module_redefine) `width` in the embedded notebook as a [Generator](https://observablehq.com/@observablehq/introduction-to-generators) that listens for window *resize* events and yields a new value if the client width of the container has changed. (See the [custom fluid width and height example](../custom-fluid-width-and-height/) for an alternative that uses ResizeObserver.)

Redefining `width` only affects the embedded notebook; it doesn’t change the value of `width` provided by the standard library in transitive imports. For that, see the [custom library example](../custom-library).
