import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata, useTagsList } from "../hooks";

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags: { fieldValue: string; totalCount: number }[] = useTagsList();

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Page title="Tags">
        <div
          style={{
            borderRadius: 10,
            padding: "12px 20px",
            border: "1px solid #e6e6e6",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <ul>
            {tags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Page>
      <Sidebar />
    </Layout>
  );
};

export default TagsListTemplate;
