# Observable Example: Secret

See it live: https://observablehq.github.io/examples/secret

Observable lets you configure [Secrets](https://observablehq.com/@observablehq/secrets). Sensitive variables can be stored outside your code and returned by calling `Secret("MY_SECRET_KEY")`, which might return a password like `"$w0rdf1sh"`. If you publish the notebook, the Secret will throw an error instead of returning a value, so that the Secret is not publicly exposed.

Calling `Secret` will also throw an error if you download the notebook — but sometimes, you might be downloading it to run in your own secure setting where you’d like to set the Secret a different way. This example shows how to use your own implementation of the Secret function to provide things like environment variables or API keys without rewriting your code.

In this _insecure_ example, index.html gets Secret values from a hardcoded Map. This should never be used in code that would be seen openly on the client side; if you published this index.html publicly on the Web, anyone could read your hardcoded Secrets.

```js
const secrets = new Map([["MY_SECRET_KEY", "$w0rdf1sh"]]);
const Secret = () => key => secrets.get(key);
const runtime = new Runtime(Object.assign(new Library, {Secret}));
```

Note that our `Secret` is a function that returns the function that gets called by the cell; the [Runtime documentation](https://github.com/observablehq/runtime) says:

> If you wish for the value of a builtin to be a function, the builtin must be defined either as a promise that resolves to a function or as a function that returns a function. Builtins may also be defined as generators for dynamic values…
