import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import { Paper } from "@material-ui/core";
import type { Edges } from "../../types";
import {
  feed,
  feedItem,
  feedItemMeta,
  feedItemMetaTime,
  feedItemMetaDivider,
  feedItemMetaCategory,
  feedItemMetaCategoryLink,
  feedItemTitle,
  feedItemTitleLink,
  feedItemTitleDescription,
  feedItemReadmore,
} from "./Feed.module.scss";

type Props = {
  edges: Edges;
};

function Feed({ edges }: Props) {
  return (
    <div className={feed}>
      {edges.map((edge) => {
        const pagePath = edge.node.frontmatter.slug;
        return (
          <Paper className={feedItem} key={edge.node.frontmatter.slug}>
            <div className={feedItemMeta}>
              <time
                className={feedItemMetaTime}
                dateTime={new Date(
                  edge.node.frontmatter.date
                ).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              >
                {new Date(edge.node.frontmatter.date).toLocaleDateString(
                  "ja-JP",
                  {
                    year: "numeric",
                    month: "long",
                  }
                )}
              </time>
              <span className={feedItemMetaDivider} />
              <span className={feedItemMetaCategory}>
                <Link
                  className={feedItemMetaCategoryLink}
                  to={`/category/${_.kebabCase(
                    edge.node.frontmatter.category!
                  )}`}
                >
                  {edge.node.frontmatter.category}
                </Link>
              </span>
            </div>
            <h2 className={feedItemTitle}>
              <Link className={feedItemTitleLink} to={pagePath}>
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <p className={feedItemTitleDescription}>
              {edge.node.frontmatter.description}
            </p>
            <Link className={feedItemReadmore} to={pagePath}>
              続きを読む
            </Link>
          </Paper>
        );
      })}
    </div>
  );
}

export default Feed;
