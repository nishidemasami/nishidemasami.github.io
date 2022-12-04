import React from 'react';

import Link from 'next/link';

export type IPaginationProps = {
	previous?: string;
	next?: string;
};

const Pagination = (props: IPaginationProps) => (
	<div className="text-sm flex justify-between">
		{props.previous && (
			<div>
				<Link href={props.previous}>← 新しい投稿</Link>
			</div>
		)}

		{props.next && (
			<div className="text-right ml-auto">
				<Link href={props.next}>過去の投稿 →</Link>
			</div>
		)}
	</div>
);

export { Pagination };
