import React from "react";
import { MDXProvider } from "@mdx-js/react";
import ReactHelloWorld from "./src/components/Content/ReactHelloWorld";
import ReactAudioTest from "./src/components/Content/ReactAudioTest";
export const MDXWrapRootElement = ({ children }) => (
  <MDXProvider
    components={{
      ReactHelloWorld: ReactHelloWorld,
      ReactAudioTest: ReactAudioTest,
    }}
  >
    {children}
  </MDXProvider>
);
