import React from "react";
import "./src/assets/scss/init.scss";
import "./static/css/prismjs/theme.min.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { store } from "./src/redux/store";
import { theme } from "./src/styles/theme";
import { MDXWrapRootElement } from "./mdx-root";

const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <MDXWrapRootElement>{element}</MDXWrapRootElement>
    </Provider>
  </ThemeProvider>
);

export default wrapPageElement;
