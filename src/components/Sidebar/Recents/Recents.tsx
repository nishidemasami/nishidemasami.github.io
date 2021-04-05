import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import {
  recents,
  recentsList,
  recentsListItem,
  recentsListItemLink,
  recentsListItemLinkActive,
} from "./Recents.module.scss";
import { usePostsList } from "../../../hooks";
import { Edges } from "../../../types";

function Recents() {
  const edges: Edges = usePostsList();
  return (
    <nav className={recents}>
      Recents
      <ul className={recentsList}>
        {edges.map((edge) => {
          const pagePath = edge.node.frontmatter.slug;
          return (
            <li className={recentsListItem} key={edge.node.frontmatter.slug}>
              <Link
                activeClassName={recentsListItemLinkActive}
                className={recentsListItemLink}
                to={pagePath}
              >
                {edge.node.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Recents;
