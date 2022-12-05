import { generateRssFeed } from '../utils/generateRssFeed';

export async function getStaticProps() {
	await generateRssFeed();
}

const Feed = () => null;
export default Feed;
