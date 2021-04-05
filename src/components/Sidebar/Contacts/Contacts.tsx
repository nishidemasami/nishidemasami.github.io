import React from "react";
import { getContactHref, getIcon } from "../../../utils";
import Icon from "../../Icon";
import {
  contacts as contactsStyle,
  contactsList,
  contactsListItem,
  contactsListItemLink,
} from "./Contacts.module.scss";

type Props = {
  contacts: {
    [key: string]: string;
  };
};

function Contacts({ contacts }: Props): JSX.Element {
  return (
    <div className={contactsStyle}>
      <ul className={contactsList}>
        {Object.keys(contacts).map((name) =>
          !contacts[name] ? null : (
            <li className={contactsListItem} key={name}>
              <a
                className={contactsListItemLink}
                href={getContactHref(name, contacts[name])}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon icon={getIcon(name)} name={name} />
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Contacts;
