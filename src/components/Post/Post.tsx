import React from "react";
import { Link } from "gatsby";
import Author from "./Author";
import Comments from "./Comments";
import Content from "./Content";
import Meta from "./Meta";
import Tags from "./Tags";
import styles from "./Post.module.scss";
import type { Node } from "../../types";

type Props = {
  post: Node;
};

const Post = ({ post }: Props) => {
  const { body } = post;
  const { slug } = post.frontmatter;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles["post"]}>
      <Link className={styles["post__home-button"]} to="/">
        トップページに戻る
      </Link>

      <div className={styles["post__content"]}>
        <Content body={body} title={title} />
      </div>

      <div className={styles["post__footer"]}>
        <Meta date={date} />
        {tags && <Tags tags={tags} tagSlugs={tags} />}
        {/* <Author /> */}
      </div>

      <div className={styles["post__comments"]}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
