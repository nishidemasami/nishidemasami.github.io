import React from "react";
import { Entry, WidgetFor } from "../../types/types";

type Props = {
  entry: Entry;
  widgetFor: WidgetFor;
};

function PagePreview({ entry, widgetFor }: Props): JSX.Element {
  const body = widgetFor("body");
  const title = entry.getIn(["data", "title"]);

  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__body">{body}</div>
    </div>
  );
}

export default PagePreview;
