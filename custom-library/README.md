# Observable Example: Custom Library

See it live: https://observablehq.github.io/examples/custom-library/

The [Observable standard library](https://github.com/observablehq/stdlib/blob/master/README.md) provides standard functionality to all Observable notebooks, such as [responsive width](https://github.com/observablehq/stdlib/blob/master/README.md#width) and [require](https://github.com/observablehq/stdlib/blob/master/README.md#require) for loading libraries.

This example demonstrates how to redefine the standard library when embedding, allowing you to redefine its behavior both in the embedded notebook and any transitive imports. Here we’ll override the [md tagged template literal](https://github.com/observablehq/stdlib/blob/master/README.md#md) to use [markdown-it](https://github.com/markdown-it/markdown-it) and enable automatic typographic quotes.

See also the [custom fluid width example](../custom-fluid-width/) for a slightly simpler technique to redefine variables directly in the embedded notebook, and the [custom library resolver example](../custom-library-resolve/) if you just wish to change how required libraries are resolved.
