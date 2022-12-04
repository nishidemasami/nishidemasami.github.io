/**
---
title: Lorem ipsum
date: "2022-03-17T01:04:03+0900"
modified_date: '2022-03-17T01:04:03+0900'
image: /assets/images/posts/random-img.jpg
socialImage: "photo.jpg"
template: "post"
draft: true
category: "blog"
description: Lorem ipsum
type: "tsx"
tags:
  - "Lorem"
  - "ipsum"
---
*/

import React from 'react';

import { GetStaticProps } from 'next';

import { ReactAudioTest } from '../../components/ReactAudioTest';
import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { PostPagination } from '../../pagination/PostPagination';
import { Main } from '../../templates/Main';
import {
	getPrevNextPost,
	getRecentPosts,
	getTags,
	PostItems,
} from '../../utils/Content';

type LoremIpsumProps = {
	recents: PostItems[];
	tags: string[];
	prevPost?: PostItems;
	nextPost?: PostItems;
};

const LoremIpsum = (props: LoremIpsumProps) => (
	<Main
		recents={props.recents}
		tags={props.tags}
		meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}
	>
		<Content>
			<ReactAudioTest />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</Content>

		<PostPagination nextPost={props.nextPost} prevPost={props.prevPost} />
	</Main>
);

export const getStaticProps: GetStaticProps<LoremIpsumProps> = async () => ({
	props: {
		recents: getRecentPosts(['title', 'date', 'slug']),
		tags: getTags(),
		...getPrevNextPost(__filename),
	},
});

export default LoremIpsum;
