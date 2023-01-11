import React from 'react';

import { AppConfig } from '../../utils/AppConfig';

const Amazon = () => {
	return (
		<nav className="my-2 py-1 border-t border-t-slate-200 relative">
			おすすめの書籍
			<ul className="m-0 p-0 border-0 flex flex-row flex-wrap list-none justify-evenly break-words">
				{AppConfig.amazon_affiliate_books.map(({ url, imgSrc, title }) => {
					return (
						<li
							className="w-24 my-1 max-w-[48%] border-x-[1px] border-y-2 border-solid border-x-[#ddd] border-y-[#f90]"
							key={title}
						>
							<div className="text-center my-2 mx-0">
								<a
									rel="nofollow noreferrer"
									href={url}
									target="_blank"
									style={{ display: 'inline-block' }}
								>
									<img alt="thumnail" src={imgSrc} title={title} />
								</a>
							</div>
							<div className="text-sm py-1 px-2 text-center">
								<a
									rel="nofollow noreferrer"
									href={url}
									target="_blank"
									title={title}
								>
									{title}
								</a>
							</div>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export { Amazon };
