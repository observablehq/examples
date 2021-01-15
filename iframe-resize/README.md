# Observable Example: Iframe Resize

See it live: https://observablehq.github.io/examples/iframe-resize/

oEmbed is an open specification letting websites discover how to embed content given only a URL. The embed is done by an iframe, but iframes do not naturally resize to fit their contents; on different screen sizes, or as content changes, there may be different amounts of the content inside visible. Embedly, which powers oEmbed on sites like Medium (which runs it), [specifics a protocol](https://docs.embed.ly/v1.0/docs/provider-height-resizing) for letting iframes resize themselves: [send a message](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) with the desired height. If you’re using the Iframe embed and would like to take advantage of automatic resizing, you can implement a message listener like this one.
