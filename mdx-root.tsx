import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import ReactHelloWorld from "./src/components/Content/ReactHelloWorld";
export const wrapRootElement = ({
  element,
}: {
  element: ReactNode;
}): ReactNode => (
  <MDXProvider components={{ ReactHelloWorld: ReactHelloWorld }}>
    {element}
  </MDXProvider>
);
