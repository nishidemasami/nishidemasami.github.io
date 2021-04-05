import React from "react";
import { meta, metaDate } from "./Meta.module.scss";

type Props = {
  date: string;
};

function Meta({ date }: Props): JSX.Element {
  return (
    <div className={meta}>
      <p className={metaDate}>
        公開日：{" "}
        {new Date(date).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
}

export default Meta;
