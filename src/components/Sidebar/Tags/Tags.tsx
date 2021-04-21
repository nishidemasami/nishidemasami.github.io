import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import {
  tags as tagsStyle,
  tagsTitleLinkActive,
  tagsTitleLink,
  tagsList,
  tagsListItem,
  tagsListItemLinkActive,
  tagsListItemLink,
} from "./Tags.module.scss";
import { useTagsList } from "../../../hooks";

function Tags(): JSX.Element {
  const tags: { fieldValue: string; totalCount: number }[] = useTagsList();
  return (
    <nav className={tagsStyle}>
      <Link
        activeClassName={tagsTitleLinkActive}
        className={tagsTitleLink}
        to="/tags/"
      >
        タグ
      </Link>
      <ul className={tagsList}>
        {tags
          .sort((left, right) => right.totalCount - left.totalCount)
          .map((tag) => (
            <li className={tagsListItem} key={tag.fieldValue}>
              <Link
                activeClassName={tagsListItemLinkActive}
                className={tagsListItemLink}
                to={`/tag/${_.kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue}({tag.totalCount})
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Tags;
