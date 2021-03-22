import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata, useTagsList } from "../hooks";
import { Paper } from "@material-ui/core";

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags: { fieldValue: string; totalCount: number }[] = useTagsList();

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Page title="Tags">
        <Paper>
          <ul>
            {tags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </Paper>
      </Page>
      <Sidebar />
    </Layout>
  );
};

export default TagsListTemplate;
