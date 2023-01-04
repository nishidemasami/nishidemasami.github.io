import React, { ReactNode } from 'react';

type IContentProps = {
	children: ReactNode;
};

const Content = (props: IContentProps) => (
	<div className="content p-4 m-2 rounded-lg overflow-hidden shadow-md border-0 bg-white [&_p]:my-6 [&_ul]:my-6 [&_*]:break-words [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-gray-700 [&_h1]:my-4 [&_h2]:border-b [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-700 [&_h2]:my-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-700 [&_h3]:my-4">
		{props.children}

		<style jsx>
			{`
				.content :global(h2) {
					font-size: 1.6em;
					border-bottom: 1px solid #ddd;
					padding-bottom: 0.1em;
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
					background-color: #fafafa;
					font-style: italic;
					border-width: 1px;
					border-color: #dedede;
					padding: 0.1rem;
				}

				.content :global(.shiki) {
					border-radius: 0.375rem;
					padding: 0px 4px;
					margin: 0px 4px;
					box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
						0 2px 4px -2px rgb(0 0 0 / 0.1);
					overflow-x: auto;
					font-size: smaller;
					border-color: #d0d7de;
					border-width: 1px;
					border-style: solid;
				}

				.content :global(code) {
					counter-reset: code-step-counter;
				}

				.content :global(code .line::before) {
					display: inline-block;
					content: counter(code-step-counter);
					counter-increment: code-step-counter;
					width: 2.5rem;
					margin-right: 1rem;
					text-align: right;
					font-variant-numeric: slashed-zero;
					color: #6e7781;
					padding-right: 0.5rem;
				}

				.content :global(.note.warn) {
					background: #fdf9e2;
					border-radius: 8px;
					padding: 16px;
					margin: 24px 0;
				}

				.content :global(.note.alert) {
					background: #feebee;
					border-radius: 8px;
					padding: 16px;
					margin: 24px 0;
				}

				.content :global(.note.warn .shiki) {
					border-color: #f7a535;
				}

				.content :global(.note.alert .shiki) {
					border-color: #d60a34;
				}
			`}
		</style>
	</div>
);

export { Content };
