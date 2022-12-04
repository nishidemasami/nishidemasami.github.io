import React from 'react';

import Link from 'next/link';

import { PostItems } from '../utils/Content';

export type IPaginationProps = {
	prevPost?: PostItems;
	nextPost?: PostItems;
};

const PostPagination = (props: IPaginationProps) => (
	<div className="text-sm flex justify-between">
		{props.prevPost && (
			<div>
				← 新しい投稿
				<br />
				<Link
					href={
						props.prevPost.slug.startsWith('posts/')
							? '/posts/[slug]'
							: `/${props.prevPost.slug}`
					}
					as={
						props.prevPost.slug.startsWith('posts/')
							? `/${props.prevPost.slug}`
							: undefined
					}
				>
					{props.prevPost.title}
				</Link>
			</div>
		)}

		{props.nextPost && (
			<div className="text-right ml-auto">
				過去の投稿 →
				<br />
				<Link
					href={
						props.nextPost.slug.startsWith('posts/')
							? '/posts/[slug]'
							: `/${props.nextPost.slug}`
					}
					as={
						props.nextPost.slug.startsWith('posts/')
							? `/${props.nextPost.slug}`
							: undefined
					}
				>
					{props.nextPost.title}
				</Link>
			</div>
		)}
	</div>
);

export { PostPagination };
