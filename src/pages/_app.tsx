import React from 'react';

import { AppProps } from 'next/app';

import '../styles/main.scss';
import '../styles/katex.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
);

export default MyApp;
