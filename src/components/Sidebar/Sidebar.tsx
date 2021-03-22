import React from "react";
import Author from "./Author";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";
import { useSiteMetadata } from "../../hooks";
import { Link } from "gatsby";
import Tags from "./Tags";
import Recents from "./Recents";
import { Paper } from "@material-ui/core";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu, title } = useSiteMetadata();
  return (
    <Paper className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Link to={"/"} className={styles["title__item-link"]}>
          {title}
        </Link>
        <Author author={author} />
        <Menu menu={menu} />
        <Recents />
        <Tags />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </Paper>
  );
};

export default Sidebar;
