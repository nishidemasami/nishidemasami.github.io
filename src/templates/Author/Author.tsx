import React from 'react';

import Link from 'next/link';

import { AppConfig } from '../../utils/AppConfig';

const Author = () => {
	const { author, description } = AppConfig;
	return (
		<div>
			<p className="text-zinc-800 text-xs my-2">{description}</p>
			<Link href="/about/">
				<img
					src="/assets/images/author.jpg"
					className="inline-block m-0 rounded-full bg-clip-padding object-cover"
					width="75"
					height="75"
					alt={author}
				/>
			</Link>
		</div>
	);
};
export { Author };
