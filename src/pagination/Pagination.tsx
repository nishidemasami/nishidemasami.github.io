import React from 'react';

import Link from 'next/link';

export type IPaginationProps = {
	previous?: string;
	next?: string;
};

const Pagination = (props: IPaginationProps) => (
	<div className="text-sm flex justify-between">
		{props.previous && (
			<div className="w-1/2">
				<Link href={props.previous}>← 新しいレポート</Link>
			</div>
		)}

		{props.next && (
			<div className="text-right ml-auto w-1/2">
				<Link href={props.next}>過去のレポート →</Link>
			</div>
		)}
	</div>
);

export { Pagination };
