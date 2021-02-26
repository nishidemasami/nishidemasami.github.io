import React from "react";
import { Link } from "gatsby";
import styles from "./Recents.module.scss";
import { usePostsList } from "../../../hooks";
import _ from "lodash";
import { Edges } from "../../../types";

const Recents = () => {
  const edges: Edges = usePostsList();
  return (
    <nav className={styles["recents"]}>
      Recents
      <ul className={styles["recents__list"]}>
        {edges.map((edge) => {
          const pagePath = edge.node.frontmatter.slug;
          return (
            <li
              className={styles["recents__list-item"]}
              key={edge.node.frontmatter.slug}
            >
              <Link
                to={pagePath}
                className={styles["recents__list-item-link"]}
                activeClassName={styles["recents__list-item-link--active"]}
              >
                {edge.node.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Recents;
