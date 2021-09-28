export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["Secret"], function(Secret){return(
Secret("MY_SECRET_KEY")
)});
  return main;
}
