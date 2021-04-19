import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { useSiteMetadata, useCategoriesList } from "../hooks";

function CategoriesListTemplate(): JSX.Element {
  const { title, subtitle } = useSiteMetadata();
  const categories: {
    fieldValue: string;
    totalCount: number;
  }[] = useCategoriesList();

  return (
    <Layout description={subtitle} title={`Categories - ${title}`}>
      <Sidebar />
      <Page title="Categories">
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
}

export default CategoriesListTemplate;
