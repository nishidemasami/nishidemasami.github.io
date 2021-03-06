import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { useSiteMetadata } from "../../../hooks";
import styles from "./Content.module.scss";

type Props = {
  body: string;
  title: string;
};

const Content = ({ body, title }: Props) => {
  const { title: websitetitle } = useSiteMetadata();
  return (
    <div className={styles["content"]}>
      <h1 className={styles["content__title"]}>{title}</h1>
      <div className={styles["content__body"]}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className={styles["content__snssharebutton"] + " twitter-share-button"}
        data-text={title + " | " + websitetitle}
        data-via={"nishidemasami"}
        data-related={"nishidemasami"}
        data-show-count="false"
        data-lang="ja"
      >
        Tweet
      </a>
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
