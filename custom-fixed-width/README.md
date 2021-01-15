# Observable Example: Custom Fixed Width

See it live: https://observablehq.github.io/examples/custom-fixed-width/

Using the Runtime API in vanilla JavaScript to embed a notebook, the container will resize to fit the content. Sometimes we instead want the content to fit the container, e.g. where the container size is specified by CSS. We can accomplish this by overriding the `width` variable in the standard library. In this example we create a library in which `width` is defined as the constant `640`, and then pass that library into the runtime.

The behavior of this technique depends on how the notebook uses `width`. In this case, it sets the width of a canvas, so the canvas ends up 640px wide. In other notebooks, `width` is passed into an SVG’s `viewBox` attribute, which does not necessarily set the size of the SVG on the page; rather, it sets the internal coordinate system. In those cases you may need to both override `width` and explicitly style the container to have the same width.
