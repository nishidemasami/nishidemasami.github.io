import React from "react";
import { Link } from "gatsby";
import styles from "./Tags.module.scss";
import { useTagsList } from "../../../hooks";
import _ from "lodash";

const Tags = () => {
  const tags: { fieldValue: string; totalCount: number }[] = useTagsList();
  return (
    <nav className={styles["tags"]}>
      <Link
        to={`/tags/`}
        className={styles["tags__title-link"]}
        activeClassName={styles["tags__title-link--active"]}
      >
        Tags
      </Link>
      <ul className={styles["tags__list"]}>
        {tags
          .sort((left, right) => right.totalCount - left.totalCount)
          .map((tag) => (
            <li className={styles["tags__list-item"]} key={tag.fieldValue}>
              <Link
                to={`/tag/${_.kebabCase(tag.fieldValue)}/`}
                className={styles["tags__list-item-link"]}
                activeClassName={styles["tags__list-item-link--active"]}
              >
                {tag.fieldValue}({tag.totalCount})
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Tags;
