import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";
import type { mdx } from "../types";
import { MDXRenderer } from "gatsby-plugin-mdx";

type Props = {
  data: {
    mdx: mdx;
  };
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { body: pageBody } = data.mdx;
  const { frontmatter } = data.mdx;
  const {
    title: pageTitle,
    description: pageDescription = "",
    socialImage,
  } = frontmatter;
  const metaDescription = pageDescription || siteSubtitle;
  const socialImageUrl = socialImage;

  return (
    <Layout
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImageUrl}
    >
      <Page title={pageTitle}>
        <MDXRenderer>{pageBody}</MDXRenderer>
      </Page>
      <Sidebar />
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default PageTemplate;
