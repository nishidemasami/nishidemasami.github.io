import React, { useState } from "react";
import { Link } from "gatsby";
import styles from "./Tags.module.scss";
import { useTagsList } from "../../../hooks";
import _ from "lodash";
import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Icons from "@material-ui/icons";

const toolTipStyles = makeStyles({
  button: {
    width: "100%",
    textAlign: "center",
    position: "initial",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
  },
  toolTip: {
    // width: "100%",
    // textAlign: "center",
    // border: "0px solid $color-gray",
    // position: "absolute",
    // bottom: "0px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
    color: "black",
  },
});
const hiddenToolTipStyles = makeStyles({
  button: {
    bottom: "0px",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
  },
  toolTip: {
    // width: "100%",
    // textAlign: "center",
    // border: "0px solid $color-gray",
    // position: "initial",
    // bottom: "0px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
    color: "black",
  },
});
const Tags = () => {
  const [open, setOpen] = React.useState(false);
  const click = React.useCallback(() => {
    setOpen(!open);
  }, [open]);
  const toolTipClasses = open ? toolTipStyles() : hiddenToolTipStyles();
  const tags: { fieldValue: string; totalCount: number }[] = useTagsList();
  return (
    <nav className={styles["tags"]}>
      <Link
        to={`/tags/`}
        className={styles["tags__title-link"]}
        activeClassName={styles["tags__title-link--active"]}
      >
        Tags
      </Link>
      <ul
        className={styles["tags__list"]}
        style={open ? {} : { height: "110px", overflowY: "hidden" }}
      >
        {tags
          .sort((left, right) => right.totalCount - left.totalCount)
          .map((tag) => (
            <li className={styles["tags__list-item"]} key={tag.fieldValue}>
              <Link
                to={`/tag/${_.kebabCase(tag.fieldValue)}/`}
                className={styles["tags__list-item-link"]}
                activeClassName={styles["tags__list-item-link--active"]}
              >
                {tag.fieldValue}({tag.totalCount})
              </Link>
            </li>
          ))}
      </ul>
      <Tooltip
        onClick={click}
        title={open ? "close Tags" : "open Tags"}
        classes={{
          tooltip: toolTipClasses.toolTip,
        }}
      >
        {open ? (
          <IconButton classes={{ root: toolTipClasses.button }}>
            <Icons.ExpandLess />
          </IconButton>
        ) : (
          <IconButton classes={{ root: toolTipClasses.button }}>
            <Icons.ExpandMore />
          </IconButton>
        )}
      </Tooltip>
    </nav>
  );
};

export default Tags;
