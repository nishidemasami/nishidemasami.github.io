import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import styles from "./Page.module.scss";
import { useSiteMetadata } from "../../hooks";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Page = ({ title, children }: Props) => {
  const { title: websitetitle } = useSiteMetadata();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView();
    }
  });

  return (
    <React.Fragment>
      <div ref={pageRef} className={styles["page"]}>
        <Link className={styles["page__home-button"]} to="/">
          {websitetitle}
        </Link>
        <div className={styles["page__inner"]}>
          {title && <h1 className={styles["page__title"]}>{title}</h1>}
          <div className={styles["page__body"]}>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page;
