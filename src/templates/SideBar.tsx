import React from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { PostItems } from '../utils/Content';
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
			<iframe
				sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
				className="w-[120px] h-[240px]"
				marginWidth={0}
				marginHeight={0}
				scrolling="no"
				frameBorder={0}
				src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=nishidemasami-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119049&linkId=bde5cca3913d36adf925bdcbb0553b61"
			></iframe>
			<Contacts contacts={contacts} />
			<Copyright copyright={copyright} />
		</div>
	);
};

export { Sidebar };
