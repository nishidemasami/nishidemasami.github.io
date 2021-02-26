import Icons from "@material-ui/icons";
import React from "react";
import { Link } from "gatsby";
import styles from "./Tags.module.scss";
import _ from "lodash";

type Props = {
  tags: string[];
  tagSlugs: string[];
};

const Tags = ({ tags }: Props) => (
  <div className={styles["tags"]}>
    <ul className={styles["tags__list"]}>
      {tags.map((slug) => (
        <li className={styles["tags__list-item"]} key={slug}>
          <Link
            to={"/tag/" + _.kebabCase(slug)}
            className={styles["tags__list-item-link"]}
          >
            ＃{slug}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
