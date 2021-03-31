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

function Author({ author }: Props) {
  return (
    <div className={styles.author}>
      <p className={styles.author__subtitle}>{author.bio}</p>
      <Link to="/about">
        <img
          alt={author.name}
          className={styles.author__photo}
          height="75"
          src={withPrefix(author.photo)}
          width="75"
        />
      </Link>
    </div>
  );
}

export default Author;
