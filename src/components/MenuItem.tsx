import React, { ReactElement } from 'react';

interface Props {
	title: string;
	imageUrl: string;
	// size: string;
	id: number;
	linkUrl: string;
}

function MenuItem({ title, imageUrl, id, linkUrl }: Props): ReactElement {
	return (
		<div
			style={{ backgroundImage: `url(${imageUrl})` }}
			className='min-w-[30%] h-60 flex-auto flex items-center justify-center border-2 border-black m-2 first:mr-2 last:ml-2 bg-center bg-cover'
		>
			<div className='h-24 px-6 flex flex-col items-center justify-center border-2 border-black'>
				<h1 className='font-bold mb-2 text-xl text-gray-500 uppercase'>
					{title}
				</h1>
				<span className='font-light text-base'>SHOP NOW</span>
			</div>
		</div>
	);
}

export default MenuItem;
