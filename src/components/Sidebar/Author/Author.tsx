import React from "react";
import { withPrefix, Link } from "gatsby";
import styles from "./Author.module.scss";

type Props = {
  author: {
    name: string;
    bio: string;
    photo: string;
  };
};

const Author = ({ author }: Props) => (
  <div className={styles["author"]}>
    <p className={styles["author__subtitle"]}>{author.bio}</p>
    <Link to={"/about"}>
      <img
        src={withPrefix(author.photo)}
        className={styles["author__photo"]}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>
  </div>
);

export default Author;
