import React from 'react';

import Link from 'next/link';

type Props = {
	menu: {
		label: string;
		path: string;
	}[];
};

const Menu = ({ menu }: Props) => (
	<nav className="my-6">
		<ul className="list-none p-0 m-0 ">
			{menu.map((item) => (
				<li className="p-0 mx-0 my-2" key={item.path}>
					<Link href={item.path}>{item.label}</Link>
				</li>
			))}
		</ul>
	</nav>
);

export { Menu };
