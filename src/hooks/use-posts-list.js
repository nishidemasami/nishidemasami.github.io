import { useStaticQuery, graphql } from "gatsby";

const usePostsList = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query recentPostsTemplate {
        allMdx(
          limit: 5
          filter: {
            frontmatter: { template: { eq: "post" }, draft: { eq: false } }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                date
                category
                description
              }
            }
          }
        }
      }
    `
  );

  return allMdx.edges;
};

export default usePostsList;
