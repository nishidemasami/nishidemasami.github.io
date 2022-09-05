import React from "react";
import { Link } from "gatsby";
import { Paper } from "@material-ui/core";
import Author from "./Author";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import Menu from "./Menu";
import { sidebar, sidebarInner, titleItemLink } from "./Sidebar.module.scss";
import { useSiteMetadata } from "../../hooks";
import Tags from "./Tags/index";
import Recents from "./Recents";
import Amazon from "./Amazon";

type Props = {
  isIndex?: boolean;
};

function Sidebar({ isIndex }: Props): JSX.Element {
  const { author, copyright, menu, title } = useSiteMetadata();
  return (
    <Paper className={sidebar}>
      <div className={sidebarInner}>
        <Link className={titleItemLink} to="/">
          {title}
        </Link>
        <Author author={author} />
        <Menu menu={menu} />
        <Recents />
        <Tags />
        <Contacts contacts={author.contacts} />
        <Amazon />
        <Copyright copyright={copyright} />
      </div>
    </Paper>
  );
}

export default Sidebar;
