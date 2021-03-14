import React from "react";
import "./src/assets/scss/init.scss";
import "./static/css/prismjs/theme.min.css";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

import { MDXWrapRootElement } from "./mdx-root";
export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <MDXWrapRootElement>{element}</MDXWrapRootElement>
  </Provider>
);
