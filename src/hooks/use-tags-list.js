// @flow strict
import { useStaticQuery, graphql } from "gatsby";

const useTagsList = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMdx(
          filter: {
            frontmatter: { template: { eq: "post" }, draft: { eq: false } }
          }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMdx.group;
};

export default useTagsList;
