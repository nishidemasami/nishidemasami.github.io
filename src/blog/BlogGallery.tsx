import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
	posts: PostItems[];
	pagination?: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
	<>
		{props.posts.map((elt) => {
			const postFlag = elt.slug.startsWith('posts/');
			return (
				<div
					key={elt.slug}
					className="mb-3 break-all justify-between clear-both p-4 m-2 rounded-lg overflow-hidden shadow-md border-0 bg-white"
				>
					<Link
						href={postFlag ? '/posts/[slug]' : `/${elt.slug}`}
						as={postFlag ? `/${elt.slug}` : undefined}
					>
						<p className="text-left text-2xl ">{elt.title}</p>
					</Link>

					<div className="text-left clear-both">{elt.description}</div>
					<p className="text-left text-sm ">
						{format(new Date(elt.date), 'LLL d, yyyy')}
					</p>
				</div>
			);
		})}

		<Pagination
			previous={props.pagination?.previous}
			next={props.pagination?.next}
		/>
	</>
);

export { BlogGallery };
