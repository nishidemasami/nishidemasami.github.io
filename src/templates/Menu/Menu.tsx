import React from 'react';

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
					<a href={item.path}>{item.label}</a>
				</li>
			))}
		</ul>
	</nav>
);

export { Menu };
