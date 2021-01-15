# Observable Example: Custom Fixed Width

See it live: https://observablehq.github.io/examples/custom-fixed-width/

By default, `width` in an embedded notebook resolves to the [body’s client width](https://github.com/observablehq/stdlib/blob/master/src/width.js). Depending on where you embed a cell, you may wish redefine the value of `width`, *e.g.* to fit the cell’s container. We can accomplish this by [redefining](https://github.com/observablehq/runtime/blob/master/README.md#module_redefine) `width` in the embedded notebook as a fixed value such as 640px. (See also the [custom fluid width](../custom-fluid-width/) and [custom fluid width and height](../custom-fluid-width-and-height/) examples.)

Note that in some notebooks, `width` is only used to set an SVG’s viewBox attribute, which does not set the size of the SVG on the page; it merely affects the SVG’s internal coordinate system. In this case you may need to both redefine `width` and explicitly style the container to have the desired width.

Redefining `width` only affects the embedded notebook; it doesn’t change the value of `width` provided by the Observable standard library in transitive imports. For that, see the [custom library example](../custom-library).
