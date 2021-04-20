import React from "react";
import { MDXProvider } from "@mdx-js/react";
import ReactHelloWorld from "./src/components/Content/ReactHelloWorld";
import ReactAudioTest from "./src/components/Content/ReactAudioTest";

function MDXWrapRootElement({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <MDXProvider
      components={{
        ReactHelloWorld,
        ReactAudioTest,
      }}
    >
      {children}
    </MDXProvider>
  );
}

export { MDXWrapRootElement as default };
