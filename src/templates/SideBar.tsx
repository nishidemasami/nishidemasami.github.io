import React from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { PostItems } from '../utils/Content';
import { Amazon } from './Amazon/Amazon';
import { Author } from './Author/Author';
import Contacts from './Contacts/Contacts';
import { Copyright } from './Copyright/Copyright';
import { Menu } from './Menu/Menu';
import { Recents } from './Recents/Recents';
import { Recommend } from './Recommend/Recommend';
import { Tags } from './Tags/Tags';

type SidebarProps = {
	recents: PostItems[];
	tags: string[];
};

const Sidebar = ({ recents, tags }: SidebarProps) => {
	const { title, copyright, contacts } = AppConfig;
	return (
		<div className="relative p-4">
			<Link href="/" className="break-all">
				{title}
			</Link>
			<Author />
			<Menu menu={AppConfig.sidebar_links} />
			<Recommend />
			<Recents posts={recents} />
			<Tags tags={tags} />
			<Amazon />
			<Contacts contacts={contacts} />
			<Copyright copyright={copyright} />
		</div>
	);
};

export { Sidebar };
