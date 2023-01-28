import React, { ReactNode } from 'react';

type IContentProps = {
	children: ReactNode;
};

const Content = (props: IContentProps) => (
	<div className="markdown-content p-4 m-2 rounded-lg overflow-hidden shadow-md border-0 bg-white [&_p]:my-6 [&_ul]:my-6 [&_*]:break-words [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-gray-700 [&_h1]:my-4 [&_h2]:border-b [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-700 [&_h2]:my-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-700 [&_h3]:my-4">
		{props.children}
	</div>
);

export { Content };
