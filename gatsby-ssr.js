import React from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
export const onRenderBody = require("./gatsby/on-render-body.js");

import { MDXWrapRootElement } from "./mdx-root";
export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <MDXWrapRootElement>{element}</MDXWrapRootElement>
  </Provider>
);
