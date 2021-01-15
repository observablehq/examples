# Observable Example: Custom Fluid Width & Height

See it live: https://observablehq.github.io/examples/custom-fluid-width-and-height/

By default, `width` in an embedded notebook resolves to the [body’s client width](https://github.com/observablehq/stdlib/blob/master/src/width.js). Many notebooks also define a fixed `height` cell. Depending on where you embed a cell, you may wish redefine the value of `width` and `height`, *e.g.* to fit the cell’s container. We can accomplish this by [redefining](https://github.com/observablehq/runtime/blob/master/README.md#module_redefine) `width` and `height` in the embedded notebook as a [Generator](https://observablehq.com/@observablehq/introduction-to-generators) that uses a ResizeObserver and yields a new value when the size of the container changes. (See the [custom fluid width example](../custom-fluid-width/) for an alternative that use the window *resize* event.)

Redefining `width` and `height` only affects the embedded notebook; it doesn’t change the value of `width` provided by the standard library in transitive imports. For that, see the [custom library example](../custom-library).
