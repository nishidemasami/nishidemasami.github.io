import React from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { MDXWrapRootElement } from "./mdx-root";
import { theme } from "./src/styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";

export const onRenderBody = require("./gatsby/on-render-body.js");

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <MDXWrapRootElement>{element}</MDXWrapRootElement>
    </Provider>
  </ThemeProvider>
);
