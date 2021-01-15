import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import {terser} from "rollup-plugin-terser";

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "iife"
  },
  plugins: [
    resolve(),
    commonjs({
      include: "node_modules/**"
    }),
    // This is for our app source code, which uses jsx
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      exclude: "node_modules/**", // only transpile jsx in our source code
      babelHelpers: "bundled"
    }),
    // This is for the Observable notebook that uses import.meta
    babel({
      plugins: [
        ["bundled-import-meta", {
          "mappings": {
            "node_modules/@d3/brushable-scatterplot": "."
          }
        }]
      ],
      generatorOpts: {compact: true}, // suppress
      include: "node_modules/**", // Observable is the only thing using import.meta
      babelHelpers: "bundled"
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    terser()
  ]
}
