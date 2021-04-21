import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { Paper } from "@material-ui/core";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata, useTagsList } from "../hooks";

function TagsListTemplate(): JSX.Element {
  const { title, subtitle } = useSiteMetadata();
  const tags: { fieldValue: string; totalCount: number }[] = useTagsList();

  return (
    <Layout description={subtitle} title={`Tags - ${title}`}>
      <Page title="Tags">
        <Paper style={{ border: "1px solid lime" }}>
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
}

export default TagsListTemplate;
