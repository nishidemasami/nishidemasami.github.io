import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { useSiteMetadata } from "../hooks";
import type { mdx } from "../types";
import Sidebar from "../components/Sidebar";

type Props = {
  data: {
    mdx: mdx;
  };
  pathContext: {
    next: {
      frontmatter: {
        slug: string;
        title: string;
      };
    };
    previous: {
      frontmatter: {
        slug: string;
        title: string;
      };
    };
  };
};

const PostTemplate = (props: Props) => {
  const data: {
    mdx: mdx;
  } = props.data;
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.mdx;
  const {
    title: postTitle,
    description: postDescription = "",
    socialImage,
  } = frontmatter;
  const metaDescription = postDescription || siteSubtitle;
  const socialImageUrl = socialImage;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImageUrl}
    >
      <Post
        post={data.mdx}
        next={props.pathContext.next}
        previous={props.pathContext.previous}
      />
      <Sidebar />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        slug
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`;

export default PostTemplate;
