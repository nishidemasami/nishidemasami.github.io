import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import {
  tags as tagsStyle,
  tagsList,
  tagsListItem,
  tagsListItemLink,
} from "./Tags.module.scss";

type Props = {
  tags: string[];
};

function Tags({ tags }: Props): JSX.Element {
  return (
    <div className={tagsStyle}>
      <ul className={tagsList}>
        {tags.map((slug) => (
          <li className={tagsListItem} key={slug}>
            <Link className={tagsListItemLink} to={`/tag/${_.kebabCase(slug)}`}>
              ＃{slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;
