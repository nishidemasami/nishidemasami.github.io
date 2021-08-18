import React from "react";
import { Link } from "gatsby";
import Content from "./Content";
import {
  post as postStyle,
  postHomeButton,
  postContent,
  postFooter,
  paginationPrevLink,
  paginationPrevLinkDisable,
  paginationNextLink,
  paginationNextLinkDisable,
  pagination,
  paginationPrev,
  paginationNext,
} from "./Post.module.scss";
import type { Node } from "../../types";
import PAGINATION from "../../constants/pagination";
import { useSiteMetadata } from "../../hooks";

type Props = {
  post: Node;
  next?: {
    frontmatter: {
      slug: string;
      title: string;
    };
  };
  previous?: {
    frontmatter: {
      slug: string;
      title: string;
    };
  };
};

function Post({ post, next, previous }: Props) {
  const { title: websitetitle } = useSiteMetadata();
  const {
    body,
    frontmatter: { tags, title, date, slug },
  } = post;

  const nextpagePath = next && next.frontmatter.slug;
  const previouspagePath = previous && previous.frontmatter.slug;

  return (
    <div className={postStyle}>
      <Link className={postHomeButton} to="/">
        {websitetitle}
      </Link>

      <div className={postContent}>
        <Content
          body={body}
          date={date}
          slug={slug}
          tags={tags}
          title={title}
        />
      </div>

      <div className={postFooter}>
        <div className={pagination}>
          <div className={paginationPrev}>
            <Link
              className={
                previous ? paginationPrevLink : paginationPrevLinkDisable
              }
              rel="prev"
              to={previouspagePath || "/"}
            >
              {PAGINATION.PREV_PAGE}
              <br />
              {previous ? previous.frontmatter.title : ""}
            </Link>
          </div>
          <div className={paginationNext}>
            <Link
              className={next ? paginationNextLink : paginationNextLinkDisable}
              rel="next"
              to={nextpagePath || "/"}
            >
              {PAGINATION.NEXT_PAGE}
              <br />
              {next ? next.frontmatter.title : ""}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
