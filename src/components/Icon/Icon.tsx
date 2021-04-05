import React from "react";
import { icon as iconStyle } from "./Icon.module.scss";

type Props = {
  name: string;
  icon: {
    viewBox?: string;
    path?: string;
  };
};

function Icon({ name, icon }: Props): JSX.Element {
  return (
    <svg className={iconStyle} viewBox={icon.viewBox}>
      <title>{name}</title>
      <path d={icon.path} />
    </svg>
  );
}

export default Icon;
