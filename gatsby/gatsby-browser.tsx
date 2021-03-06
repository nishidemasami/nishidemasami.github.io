import React from "react";
import "../src/assets/scss/init.scss";
import "../static/css/prismjs/theme.min.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { GatsbyBrowser } from "gatsby";
import { store } from "../src/redux/store";
import theme from "../src/styles/theme";
import MDXWrapRootElement from "./mdx-root";
import onRenderBody from "./on-render-body.js";

const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <MDXWrapRootElement>{element}</MDXWrapRootElement>
    </Provider>
  </ThemeProvider>
);

export { onRenderBody, wrapRootElement };
