import { Paper } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Comments from "../Comments";
import Meta from "../Meta";
import Tags from "../Tags";
import {
  content,
  contentTitle,
  contentBody,
  contentSnssharebutton,
  contentComments,
} from "./Content.module.scss";

type Props = {
  body: string;
  title: string;
  date: string;
  tags?: string[];
  slug: string;
};

function Content({ body, title, date, tags, slug }: Props): JSX.Element {
  return (
    <div className={content}>
      <h1 className={contentTitle}>{title}</h1>
      <Paper className={contentBody}>
        <MDXRenderer>{body}</MDXRenderer>

        <Meta date={date} />
        <a
          className={`${contentSnssharebutton} hatena-bookmark-button`}
          data-hatena-bookmark-lang="ja"
          data-hatena-bookmark-layout="vertical-normal"
          href="https://b.hatena.ne.jp/entry/"
          title="このエントリーをはてなブックマークに追加"
        >
          <img
            alt="このエントリーをはてなブックマークに追加"
            height="20"
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            style={{ border: "none" }}
            width="20"
          />
        </a>
        {tags && <Tags tags={tags} />}

        <div className={contentComments}>
          <Comments postSlug={slug} postTitle={title} />
        </div>
      </Paper>
    </div>
  );
}

export default Content;
