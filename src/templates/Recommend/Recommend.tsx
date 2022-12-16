import React from 'react';

import Link from 'next/link';

const Recommend = () => (
	<nav className="my-6 border-t border-t-slate-200 relative">
		おすすめの記事
		<ul className="m-0 p-0 border-0 list-[circle] ml-5">
			{[
				{
					slug: 'posts/nextjs-mermaid/',
					title: 'Next.jsでSSG時にRemarkでMermaidをSVGとして出力する',
				},
				{
					slug: 'posts/svg-prayer-wheel/',
					title: 'SVGとCSSだけでマニ車をクルクル回して自動で徳を積む',
				},
				{
					slug: 'articles/react-sound-test/',
					title: 'Reactでホワイトノイズを鳴らす',
				},
			].map((post) => {
				return (
					<li className="m-0 text-sm" key={post.slug}>
						<Link
							href={
								post.slug.startsWith('posts/')
									? '/posts/[slug]'
									: `/${post.slug}`
							}
							as={post.slug.startsWith('posts/') ? `/${post.slug}` : undefined}
						>
							{post.title}
						</Link>
					</li>
				);
			})}
		</ul>
	</nav>
);

export { Recommend };
