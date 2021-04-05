// @flow strict
import React from "react";
import { getContactHref } from "../../../utils";
import {
  author as authorStyle,
  authorBio,
  authorBioTwitter,
} from "./Author.module.scss";
import { useSiteMetadata } from "../../../hooks";

function Author(): JSX.Element {
  const { author } = useSiteMetadata();

  return (
    <div className={authorStyle}>
      <p className={authorBio}>
        {author.bio}
        <a
          className={authorBioTwitter}
          href={getContactHref("twitter", author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
}

export default Author;
