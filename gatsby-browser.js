import React from "react";
import "./src/assets/scss/init.scss";
import "./static/css/prismjs/theme.min.css";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { theme } from "./src/styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import { MDXWrapRootElement } from "./mdx-root";
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <MDXWrapRootElement>{element}</MDXWrapRootElement>
    </Provider>
  </ThemeProvider>
);
