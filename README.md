# react-comlink-example

### About

This project was created to learn how to leverage Google's `comlink`; a microlibrary for working with Web Workers, without ejecting an application created with CRA.
Utilizing the comlink-loader for webpack, we can asynchronously load in our target web worker and register a new instance. Once initialized, we can asynchronously farm tasks to our webworker that will run outside of our primary thread.

---

Copyright (c) 2020 John Nolette Licensed under the MIT license.
