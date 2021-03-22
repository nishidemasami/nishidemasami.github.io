import { Paper } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { useSiteMetadata } from "../../../hooks";
import Meta from "../Meta";
import styles from "./Content.module.scss";

type Props = {
  body: string;
  title: string;
  date: string;
};

const Content = ({ body, title, date }: Props) => {
  const { title: websitetitle } = useSiteMetadata();
  return (
    <div className={styles["content"]}>
      <h1 className={styles["content__title"]}>{title}</h1>
      <Paper className={styles["content__body"]}>
        <MDXRenderer>{body}</MDXRenderer>

        <Meta date={date} />
      </Paper>
      <a
        href="https://b.hatena.ne.jp/entry/"
        className={
          styles["content__snssharebutton"] + " hatena-bookmark-button"
        }
        data-hatena-bookmark-layout="vertical-normal"
        data-hatena-bookmark-lang="ja"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width="20"
          height="20"
          style={{ border: "none" }}
        />
      </a>
    </div>
  );
};

export default Content;
