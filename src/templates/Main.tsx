import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { PostItems } from '../utils/Content';
import { Sidebar } from './SideBar';

type IMainProps = {
	recents: PostItems[];
	tags: string[];
	meta: ReactNode;
	children: ReactNode;
};

const Main = (props: IMainProps) => (
	<div className="antialiased w-full text-gray-700 md:px-0 sm:flex min-h-screen">
		{props.meta}

		<div className="mx-auto float-left px-3 w-full sm:w-3/4 lg:w-[calc(100vw-256px)] bg-slate-100 min-h-fit sm:min-h-screen">
			<div className="border-b border-gray-300 break-all text-center text-zinc-900 font-semibold block sm:hidden">
				<div className="pt-4 pb-8">
					<div className="font-semibold text-2xl text-gray-900">
						<Link href="/">{AppConfig.title}</Link>
					</div>
					<div className="text-sm">{AppConfig.description}</div>
				</div>
				<div>
					<Navbar>
						<li className="mr-6">
							<Link href="/">Home</Link>
						</li>
						<li className="mr-6">
							<Link href="/about/">About</Link>
						</li>
						{/* <li className="mr-6">
							<Link href="/blog/1/">Blog</Link>
						</li> */}
					</Navbar>
				</div>
			</div>

			<div className="text-base py-5">{props.children}</div>
			<iframe
				src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=288&l=ur1&category=amazonfresh&banner=1BJRY423M3VZNDGD6QR2&f=ifr&linkID=a397c9c3ef85b520249e0b949c3458f8&t=nishidemasami-22&tracking_id=nishidemasami-22"
				width="320"
				height="50"
				scrolling="no"
				marginWidth={0}
				className="border-none border-0 m-auto"
				frameBorder="0"
				sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
			></iframe>
		</div>
		<div className="w-full sm:w-1/4 lg:w-[256px] float-right sm:sticky shadow-md sm:h-full sm:flex sm:top-auto sm:self-end sm:bottom-0 min-h-fit sm:min-h-screen">
			<Sidebar recents={props.recents} tags={props.tags} />
		</div>
	</div>
);

export { Main };
