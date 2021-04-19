import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Page from "../components/Page";
import Pagination from "../components/Pagination";
import { useSiteMetadata } from "../hooks";
import type { PageContext, allMdx } from "../types";

type Props = {
  data: allMdx;
  pageContext: PageContext;
};

function CategoryTemplate({ data, pageContext }: Props): JSX.Element {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    category,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMdx;
  const pageTitle =
    currentPage > 0
      ? `${category} - Page ${currentPage} - ${siteTitle}`
      : `${category} - ${siteTitle}`;

  return (
    <Layout description={siteSubtitle} title={pageTitle}>
      <Page title={`${category}`}>
        <Feed edges={edges} />
        <Pagination
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          nextPagePath={nextPagePath}
          prevPagePath={prevPagePath}
        />
      </Page>
      <Sidebar />
    </Layout>
  );
}

export const query = graphql`
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          category: { eq: $category }
          template: { eq: "post" }
          draft: { eq: false }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            date
            description
            category
            title
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
