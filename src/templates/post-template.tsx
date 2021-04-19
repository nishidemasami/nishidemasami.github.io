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
  pageContext: {
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

function PostTemplate(props: Props): JSX.Element {
  const { data, pageContext } = props;
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
      description={metaDescription}
      socialImage={socialImageUrl}
      title={`${postTitle} - ${siteTitle}`}
    >
      <Post
        next={pageContext.next}
        post={data.mdx}
        previous={pageContext.previous}
      />
      <Sidebar />
    </Layout>
  );
}

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
