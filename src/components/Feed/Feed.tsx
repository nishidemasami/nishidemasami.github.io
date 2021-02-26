import React from "react";
import { Link } from "gatsby";
import type { Edges } from "../../types";
import styles from "./Feed.module.scss";
import _ from "lodash";

type Props = {
  edges: Edges;
};

const Feed = ({ edges }: Props) => (
  <div className={styles["feed"]}>
    {edges.map((edge) => {
      const pagePath = edge.node.frontmatter.slug;
      return (
        <div className={styles["feed__item"]} key={edge.node.frontmatter.slug}>
          <div className={styles["feed__item-meta"]}>
            <time
              className={styles["feed__item-meta-time"]}
              dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
                "ja-JP",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            >
              {new Date(edge.node.frontmatter.date).toLocaleDateString(
                "ja-JP",
                {
                  year: "numeric",
                  month: "long",
                }
              )}
            </time>
            <span className={styles["feed__item-meta-divider"]} />
            <span className={styles["feed__item-meta-category"]}>
              <Link
                to={"/category/" + _.kebabCase(edge.node.frontmatter.category!)}
                className={styles["feed__item-meta-category-link"]}
              >
                {edge.node.frontmatter.category}
              </Link>
            </span>
          </div>
          <h2 className={styles["feed__item-title"]}>
            <Link className={styles["feed__item-title-link"]} to={pagePath}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles["feed__item-description"]}>
            {edge.node.frontmatter.description}
          </p>
          <Link className={styles["feed__item-readmore"]} to={pagePath}>
            続きを読む
          </Link>
        </div>
      );
    })}
  </div>
);

export default Feed;
