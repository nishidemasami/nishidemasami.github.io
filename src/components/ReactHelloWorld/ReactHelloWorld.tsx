import React from 'react';

import logo from './logo.svg';

interface ReactHelloWorldProps {
	children?: React.ReactNode;
}

const ReactHelloWorld = ({ children }: ReactHelloWorldProps): JSX.Element => (
	<div className="text-center h-fit w-fit m-auto">
		<header className="text-white text-3xl justify-center items-center flex-col flex bg-slate-800">
			<img
				alt="logo"
				src={logo.src}
				className="w-4/5 pointer-events-none animate-spin"
			/>
			<p>{children}</p>
		</header>
	</div>
);

export default ReactHelloWorld;
