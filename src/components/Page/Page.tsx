import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import {
  page,
  pageHomeButton,
  pageInner,
  pageTitle,
  pageBody,
} from "./Page.module.scss";
import { useSiteMetadata } from "../../hooks";

type Props = {
  title?: string;
  children: React.ReactNode;
};

function Page({ title, children }: Props): JSX.Element {
  const { title: websitetitle } = useSiteMetadata();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView();
    }
  });

  return (
    <div className={page} ref={pageRef}>
      <Link className={pageHomeButton} to="/">
        {websitetitle}
      </Link>
      <div className={pageInner}>
        {title && <h1 className={pageTitle}>{title}</h1>}
        <div className={pageBody}>{children}</div>
      </div>
    </div>
  );
}

export default Page;
