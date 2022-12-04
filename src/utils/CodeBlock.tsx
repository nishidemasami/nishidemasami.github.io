import Gist, { Props } from 'react-embed-gist';

const CodeBlock = (props: Props) => {
	return <Gist gist={props.gist} />;
};

export default CodeBlock;
