import React, { ReactNode } from 'react';

type IContentProps = {
	children: ReactNode;
};

const Content = (props: IContentProps) => (
	<div className="content p-4 m-2 rounded-lg overflow-hidden shadow-md border-0 bg-white">
		{props.children}

		<style jsx>
			{`
				.content :global(*) {
					@apply break-words;
				}

				.content :global(p) {
					@apply my-6;
				}

				.content :global(ul) {
					@apply my-6;
				}

				.content :global(h1) {
					@apply text-3xl font-semibold text-gray-700 my-4;
				}

				.content :global(h2) {
					@apply text-2xl font-semibold text-gray-700 my-4;
				}

				.content :global(h3) {
					@apply text-xl font-semibold text-gray-700 my-4;
				}

				.content :global(li) {
					list-style: circle;
				}

				.content :global(ul) {
					padding-inline-start: 40px;
				}

				.content :global(blockquote) {
					font-style: italic;
					padding: 0;
					text-align: center;
					font-size: smaller;
				}

				.content :global(p code) {
					background-color: #fdf6e3;
					color: #657b83;
				}
			`}
		</style>
	</div>
);

export { Content };
