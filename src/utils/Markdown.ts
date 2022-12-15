// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const executablePath = {
	production: '/opt/google/chrome/google-chrome',
	development:
		'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
	test: '/opt/google/chrome/google-chrome',
}[process.env.NODE_ENV];

export const markdownToHtml = async (markdown: string) =>
	(
		await unified()
			.use(remarkParse)
			.use(remarkMath)
			.use(remarkGfm)
			.use(remarkMermaid, {
				launchOptions: { executablePath },
				svgo: false,
			})
			.use(remarkRehype, { allowDangerousHtml: true, footnoteLabel: '脚注' })
			.use(rehypePrism)
			.use(rehypeKatex)
			.use(rehypeStringify, { allowDangerousHtml: true })
			.process(markdown)
	)
		.toString()
		.replace(/@@baseUrl@@/g, process.env.baseUrl || '');
