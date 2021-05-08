import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { store } from "../src/redux/store";
import MDXWrapRootElement from "./mdx-root";
import theme from "../src/styles/theme";
import onRenderBody from "./on-render-body.js";

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <MDXWrapRootElement>{element}</MDXWrapRootElement>
    </Provider>
  </ThemeProvider>
);

export { onRenderBody, wrapRootElement };
