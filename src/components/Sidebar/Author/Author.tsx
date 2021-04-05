import React from "react";
import { withPrefix, Link } from "gatsby";
import {
  author as authorStyle,
  authorSubtitle,
  authorPhoto,
} from "./Author.module.scss";

type Props = {
  author: {
    name: string;
    bio: string;
    photo: string;
  };
};

function Author({ author }: Props): JSX.Element {
  return (
    <div className={authorStyle}>
      <p className={authorSubtitle}>{author.bio}</p>
      <Link to="/about">
        <img
          alt={author.name}
          className={authorPhoto}
          height="75"
          src={withPrefix(author.photo)}
          width="75"
        />
      </Link>
    </div>
  );
}

export default Author;
