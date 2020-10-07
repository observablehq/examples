This repository contains several small self-contained examples of embedding Observable notebooks in other contexts.

### simple-constant
Just about the most straightforward embed possible

### simple-generator
Nearly the most straightforward embed possible; no more code, but now it self-updates

### custom-fixed-width
Overriding the Standard Library with a constant width

### custom-fluid-width
Overriding the Standard Library with a generator the yields the current width of a given element

### custom-fluid-width-and-height
Overriding the Standard Library with a generator the yields the current width of a given element, and overriding the notebook’s height

### versioning
Version-pinning embeds to a particular entry in the history of a notebook

### iframe-resize
Implementing Embedly’s protocol for Iframes that resize to match their contents

### react-file-attachment
A simple React component embedding a notebook with a file attachment, which can trip up bundlers

### react-dataflow
Passing data between a React app and an Observable notebook

### breakout
An extravagant way to demonstrate mutable state
