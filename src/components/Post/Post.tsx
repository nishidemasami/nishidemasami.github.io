import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";
import Author from "./Author";
import Comments from "./Comments";
import Content from "./Content";
import Meta from "./Meta";
import Tags from "./Tags";
import styles from "./Post.module.scss";
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

const Post = ({ post, next, previous }: Props) => {
  const { title: websitetitle } = useSiteMetadata();
  const {
    body,
    frontmatter: { tags, title, date, slug },
  } = post;

  const nextpagePath = next && next.frontmatter.slug;
  const previouspagePath = previous && previous.frontmatter.slug;

  const cx = classNames.bind(styles);

  const prevClassName = cx({
    "pagination__prev-link": true,
    "pagination__prev-link--disable": !previous,
  });

  const nextClassName = cx({
    "pagination__next-link": true,
    "pagination__next-link--disable": !next,
  });

  return (
    <div className={styles["post"]}>
      <Link className={styles["post__home-button"]} to="/">
        {websitetitle}
      </Link>

      <div className={styles["post__content"]}>
        <Content body={body} title={title} date={date} tags={tags} />
      </div>

      <div className={styles["post__footer"]}>
        <div className={styles["pagination"]}>
          <div className={styles["pagination__prev"]}>
            <Link
              rel="prev"
              to={previouspagePath ? previouspagePath : "/"}
              className={prevClassName}
            >
              {PAGINATION.PREV_PAGE}
              <br />
              {previous ? previous.frontmatter.title : ""}
            </Link>
          </div>
          <div className={styles["pagination__next"]}>
            <Link
              rel="next"
              to={nextpagePath ? nextpagePath : "/"}
              className={nextClassName}
            >
              {PAGINATION.NEXT_PAGE}
              <br />
              {next ? next.frontmatter.title : ""}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles["post__comments"]}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
