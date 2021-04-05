import React from "react";
import { Link } from "gatsby";
import {
  menu as menuStyle,
  menuList,
  menuListItem,
  menuListItemLink,
  menuListItemLinkActive,
} from "./Menu.module.scss";

type Props = {
  menu: {
    label: string;
    path: string;
  }[];
};

function Menu({ menu }: Props): JSX.Element {
  return (
    <nav className={menuStyle}>
      <ul className={menuList}>
        {menu.map((item) => (
          <li className={menuListItem} key={item.path}>
            <Link
              activeClassName={menuListItemLinkActive}
              className={menuListItemLink}
              to={item.path}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
